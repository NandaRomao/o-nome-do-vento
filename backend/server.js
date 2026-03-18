const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Configurações básicas
app.use(cors());
app.use(express.json());

// Dados de usuários (simulando banco de dados)
// IMPORTANTE: A propriedade se chama "nome", mas o frontend envia "usuario"
const usuarios = [
    { nome: 'admin', senha: '123456' },
    { nome: 'leitor', senha: 'abcd1234' },
    { nome: 'teste', senha: 'teste123' }
];

// ROTA 1: Teste se o backend está vivo
app.get('/teste', (req, res) => {
    res.json({ status: 'OK', mensagem: 'Backend funcionando!' });
});

// ROTA 2: Login - COMPATÍVEL COM SEU FRONTEND
app.post('/login', (req, res) => {
    const { usuario, senha } = req.body;
    
    console.log('🔐 Tentativa de login para:', usuario);
    
    // VALIDAÇÃO: campos obrigatórios
    if (!usuario || !senha) {
        return res.status(400).json({
            sucesso: false,
            mensagem: 'Usuário e senha são obrigatórios'
        });
    }
    
    // Procurar usuário
    // O frontend envia "usuario", mas nossa lista usa "nome"
    const usuarioEncontrado = usuarios.find(
        u => u.nome === usuario && u.senha === senha
    );
    
    if (usuarioEncontrado) {
        console.log('✅ Login aceito para:', usuario);
        res.json({ 
            sucesso: true,          // ← EM PORTUGUÊS (frontend espera isso)
            mensagem: 'Login bem-sucedido!', // ← EM PORTUGUÊS
            usuario: usuarioEncontrado.nome  // ← EM PORTUGUÊS
        });
    } else {
        console.log('❌ Login rejeitado para:', usuario);
        res.status(401).json({ 
            sucesso: false,         // ← EM PORTUGUÊS
            mensagem: 'Usuário ou senha incorretos' // ← EM PORTUGUÊS
        });
    }
});

// ROTA 3: Verificar status (opcional)
app.get('/status', (req, res) => {
    res.json({
        servidor: 'online',
        porta: PORT,
        usuarios_cadastrados: usuarios.length,
        hora: new Date().toLocaleTimeString('pt-BR')
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log(`🚀 SERVIDOR BACKEND INICIADO`);
    console.log(`📡 Porta: ${PORT}`);
    console.log(`🌐 URL: http://localhost:${PORT}`);
    console.log('='.repeat(50));
    console.log('\n📋 ROTAS DISPONÍVEIS:');
    console.log(`  GET  http://localhost:${PORT}/teste`);
    console.log(`  GET  http://localhost:${PORT}/status`);
    console.log(`  POST http://localhost:${PORT}/login`);
    console.log('\n👥 USUÁRIOS PARA TESTE:');
    usuarios.forEach(u => {
        console.log(`  • ${u.nome} / ${u.senha}`);
    });
    console.log('='.repeat(50));
});