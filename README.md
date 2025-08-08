# Storybook Handel - Design System Demo

Uma aplicação web completa que demonstra o uso de um design system construído com **Storybook**, **Next.js**, **React** e **Tailwind CSS**.

## 🚀 Funcionalidades

- **Aplicação Web Completa**: Uma página demonstrativa que utiliza os componentes do design system
- **Design System Documentado**: Componentes totalmente documentados no Storybook
- **Componentes Reutilizáveis**: Button, Header, Sidebar e Page components
- **TypeScript**: Totalmente tipado para melhor experiência de desenvolvimento
- **Tailwind CSS**: Estilização moderna e responsiva

## 📦 Componentes Disponíveis

### Layout Components

- **Header**: Cabeçalho com navegação e autenticação
- **Sidebar**: Navegação lateral com suporte a itens aninhados
- **Page**: Container de página com layout padrão

### UI Components

- **Button**: Botão com múltiplas variantes, tamanhos e estados

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React para aplicações web
- **React 19** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utilitário
- **Storybook 9** - Ferramenta para desenvolvimento de componentes
- **Vitest** - Framework de testes

## 🚀 Como Executar

### 1. Instalar Dependências

```bash
npm install
```

### 2. Executar a Aplicação Web

```bash
npm run dev
```

A aplicação estará disponível em: `http://localhost:3000`

### 3. Executar o Storybook

```bash
npm run storybook
```

O Storybook estará disponível em: `http://localhost:6006`

## 📁 Estrutura do Projeto

```
storybook-handel/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Layout raiz da aplicação
│   ├── page.tsx                 # Página principal
│   └── globals.css              # Estilos globais
├── src/
│   ├── components/              # Componentes do design system
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── header/         # Componente Header
│   │   │   ├── sidebar/        # Componente Sidebar
│   │   │   └── page/           # Componente Page
│   │   └── ui/                 # Componentes de interface
│   │       └── button/         # Componente Button
│   └── utils/                  # Utilitários
├── .storybook/                 # Configuração do Storybook
└── package.json
```

## 📖 Documentação dos Componentes

Todos os componentes estão documentados no Storybook com:

- **Propriedades**: Todas as props disponíveis
- **Variantes**: Diferentes estados e aparências
- **Exemplos**: Casos de uso práticos
- **Controles Interativos**: Para testar diferentes configurações

### Exemplo de Uso do Button

```tsx
import { Button } from "./src/components/ui/button";

function MyComponent() {
  return (
    <Button
      label="Clique aqui"
      primary={true}
      size="large"
      onClick={() => console.log("Clicado!")}
    />
  );
}
```

## 🎨 Design System

### Princípios

- **Consistência**: Todos os componentes seguem as mesmas diretrizes visuais
- **Reutilização**: Componentes podem ser utilizados em diferentes contextos
- **Acessibilidade**: Foco em boas práticas de acessibilidade
- **Responsividade**: Design adaptável para diferentes dispositivos

### Variantes do Button

- **Tamanhos**: small, medium, large
- **Tipos**: primary, secondary
- **Estados**: default, hover, focus, disabled
- **Customização**: Cores personalizadas via props

## 🧪 Testes

```bash
npm run test
```

## 📝 Scripts Disponíveis

- `npm run dev` - Executa a aplicação em modo de desenvolvimento
- `npm run build` - Constrói a aplicação para produção
- `npm run start` - Executa a aplicação em modo de produção
- `npm run storybook` - Executa o Storybook
- `npm run build-storybook` - Constrói o Storybook para produção
- `npm run lint` - Executa o linter do código

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🔗 Links Úteis

- [Storybook Documentation](https://storybook.js.org/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

**Desenvolvido com ❤️ usando Storybook e Next.js**
