# Storybook Component Library

Este é um projeto de biblioteca de componentes usando Storybook, Next.js e Tailwind CSS.

## Getting Started

Para iniciar o Storybook:

```bash
npm install
npm run storybook
```

Abra [http://localhost:6006](http://localhost:6006) no seu navegador para ver o Storybook.

## Estrutura do Projeto

```
src/
├── components/
│   ├── ui/                    # Componentes de interface base
│   │   └── button/
│   └── layout/               # Componentes de layout
│       ├── header/
│       └── page/
└── utils/                    # Utilitários (ex: cn.ts para Tailwind)
```

## Adicionando Novos Componentes

1. Crie uma pasta para o componente em `src/components/ui/` ou `src/components/layout/`
2. Adicione o arquivo `.tsx` do componente
3. Crie um arquivo `.stories.ts` para o Storybook
4. Exporte o componente através do `index.ts`

## Scripts Disponíveis

- `npm run storybook` - Inicia o servidor de desenvolvimento do Storybook
- `npm run build-storybook` - Gera build de produção do Storybook
- `npm run lint` - Executa o linter

## Tecnologias

- [Storybook](https://storybook.js.org/) - Ferramenta para desenvolvimento de componentes
- [Next.js](https://nextjs.org/) - Framework React
- [Tailwind CSS](https://tailwindcss.com/) - Framework CSS utilitário
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado do JavaScript
