# Storybook Components Structure

Este projeto foi reorganizado com uma estrutura de componentes bem definida usando Tailwind CSS.

## Estrutura de Pastas

```
src/
├── components/
│   ├── ui/                    # Componentes de interface base
│   │   └── button/
│   │       ├── Button.tsx
│   │       ├── Button.stories.ts
│   │       └── index.ts
│   └── layout/               # Componentes de layout
│       ├── header/
│       │   ├── Header.tsx
│       │   ├── Header.stories.ts
│       │   └── index.ts
│       └── page/
│           ├── Page.tsx
│           ├── Page.stories.ts
│           └── index.ts
├── utils/
│   └── cn.ts                 # Utilitário para classes CSS
└── index.ts                  # Exportação principal

stories/                      # Stories legadas (se houver)
├── Button.tsx
├── Button.stories.ts
├── Header.tsx
├── Header.stories.ts
├── Page.tsx
├── Page.stories.ts
└── Configure.mdx             # Documentação do Storybook
```

## Vantagens da Nova Estrutura

### 🏗️ Componente Auto-Contido

Cada componente tem tudo em uma pasta:

- **Componente** (`Component.tsx`)
- **Stories** (`Component.stories.ts`)
- **Exportações** (`index.ts`)

### 📁 Organização Lógica

- **`src/components/ui/`** - Componentes reutilizáveis de interface
- **`src/components/layout/`** - Componentes específicos de layout
- **`src/utils/`** - Utilitários compartilhados

### 🔍 Fácil Localização

- Tudo relacionado ao componente está no mesmo lugar
- Importações mais simples e diretas
- Manutenção facilitada

## Como usar

### Importando componentes

```typescript
// Importação individual
import { Button } from "src/components/ui/button";
import { Header } from "src/components/layout/header";

// Importação via index principal
import { Button, Header, Page } from "src";
```

### Executando o Storybook

```bash
npm run storybook
```

## Tecnologias Utilizadas

- **React** - Biblioteca para criação de interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework de estilos utilitários
- **Storybook** - Ferramenta para desenvolvimento de componentes isolados
- **Next.js** - Framework React (para compatibilidade)

## Padrões de Design

- Todos os componentes usam Tailwind CSS
- Arquitetura baseada em componentes reutilizáveis
- Stories organizadas por categoria (UI/Layout)
- TypeScript para tipagem forte
- Documentação automática via Autodocs do Storybook
