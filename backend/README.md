# ⚠️ Backend (Protótipo — não conectado)

Este backend em Node.js/Express foi criado como experimento inicial para um sistema de login,
mas **não está conectado** à página `login.html`, que hoje usa apenas `localStorage`.

## Status

- Protótipo de estudo, não usado em produção
- As senhas estão armazenadas em **texto puro** — isso é proposital só para fins didáticos
  do fluxo request/response, e **nunca deve ser replicado** em um projeto real
- Não há deploy: só roda localmente com `node server.js`

## Próximos passos (se for retomado)

- Adicionar hash de senha (bcrypt)
- Conectar de fato ao `login.html` via `fetch`
- Fazer deploy separado (Render, Railway ou similar), já que o GitHub Pages
  só serve arquivos estáticos e não executa Node.js