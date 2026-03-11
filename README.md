# Cartão Digital - Luan Pedro

Este é um projeto de cartão de visitas digital interativo, desenvolvido com **React**, **Tailwind CSS** e **Framer Motion**.

## Como executar localmente

1.  Instale as dependências:
    ```bash
    npm install
    ```

2.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```

## Estrutura de Arquivos

-   `src/App.tsx`: Código principal do cartão.
-   `public/`: Pasta para imagens (`luanPedro.webp`, `logoMulty.webp`).

## Publicação no GitHub Pages

Para publicar no GitHub Pages:
1.  Instale o pacote `gh-pages`: `npm install gh-pages --save-dev`
2.  Adicione `"homepage": "https://seu-usuario.github.io/seu-repositorio"` no `package.json`.
3.  Adicione os scripts de deploy no `package.json`:
    ```json
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
    ```
4.  Execute: `npm run deploy`
