# Jornada Dev — Black Neon 💚

Landing page responsiva do **Jornada Dev**, com identidade visual preta e verde-neon, fotografias do projeto e microinterações suaves.

**Prévia interativa:** após publicar, abra a URL fornecida pelo Netlify.

> A captura de tela ainda não foi gerada: o ambiente de renderização bloqueou a abertura da página local. Quando tiver uma captura real, salve-a como `assets/preview.png` e substitua este trecho por `![Prévia do Jornada Dev](assets/preview.png)`.

## Funcionalidades

- Layout responsivo para celular, tablet e desktop.
- Animações de entrada ao rolar a página e efeitos sutis nos cartões.
- Navegação entre seções, com rolagem suave.
- Suporte à preferência de movimento reduzido (`prefers-reduced-motion`).
- Imagens locais, sem dependência de hospedagem externa.

## Tecnologias

HTML5, CSS3 e JavaScript puro. **Não é necessário React, npm ou build.**

## Executar localmente

Abra `index.html` no navegador. Para uma prévia com servidor local:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

## Publicar no Netlify

**Netlify Drop:** envie o ZIP de publicação ou a pasta com o `index.html` na raiz.

**GitHub + Netlify:** envie os arquivos deste repositório ao GitHub; no Netlify escolha **Add new project → Import an existing project → GitHub**, selecione o repositório e publique com:

- Build command: **deixar vazio**
- Publish directory: **`.`** (raiz)

O arquivo `netlify.toml` já configura a pasta de publicação. Após conectar, novos commits na branch de produção poderão gerar deploys automaticamente.

## Estrutura

```text
index.html
assets/
  css/style.css
  js/main.js
  images/
  (preview.png, quando adicionada)
netlify.toml
README.md
```

## Personalização

As cores principais estão no começo de `assets/css/style.css`. Substitua fotos em `assets/images/` e atualize os caminhos no HTML quando necessário.

> **Atenção:** o link de Instagram é genérico (`instagram.com`) e precisa ser substituído pelo perfil oficial. Os botões internos navegam entre seções; não há checkout ou formulário conectado. Este projeto é uma landing page estática, não o backend do WordPress original.

## Créditos

Redesign construído a partir dos arquivos disponibilizados do Jornada Dev. Imagens mantidas a partir dos recursos fornecidos, sem promessa de aumento da resolução original.
