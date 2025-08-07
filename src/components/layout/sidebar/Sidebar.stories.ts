import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Sidebar } from "./Sidebar";
import React from "react";

const meta: Meta<typeof Sidebar> = {
  title: "Layout/Sidebar",
  component: Sidebar,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Um componente de sidebar responsivo com suporte a itens aninhados e modo colapsado.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isCollapsed: {
      control: "boolean",
      description: "Controla se a sidebar está colapsada ou expandida",
    },
    items: {
      control: "object",
      description: "Array de itens para exibir na sidebar",
    },
    onToggle: {
      action: "toggled",
      description: "Callback chamado quando o botão de toggle é clicado",
    },
    onItemClick: {
      action: "item-clicked",
      description: "Callback chamado quando um item é clicado",
    },
  },
  args: {
    onToggle: fn(),
    onItemClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Ícones como elementos React
const HomeIcon = React.createElement(
  "svg",
  {
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  })
);

const UsersIcon = React.createElement(
  "svg",
  {
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  })
);

const SettingsIcon = React.createElement(
  "svg",
  {
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  }),
  React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  })
);

const ChartIcon = React.createElement(
  "svg",
  {
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
  },
  React.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  })
);

const basicItems = [
  {
    id: "home",
    label: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    id: "users",
    label: "Usuários",
    icon: UsersIcon,
    href: "/users",
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: ChartIcon,
    href: "/analytics",
  },
  {
    id: "settings",
    label: "Configurações",
    icon: SettingsIcon,
    href: "/settings",
  },
];

const nestedItems = [
  {
    id: "home",
    label: "Home",
    icon: HomeIcon,
    href: "/",
  },
  {
    id: "users",
    label: "Usuários",
    icon: UsersIcon,
    children: [
      {
        id: "users-list",
        label: "Lista de Usuários",
        href: "/users",
      },
      {
        id: "users-create",
        label: "Criar Usuário",
        href: "/users/create",
      },
      {
        id: "users-permissions",
        label: "Permissões",
        href: "/users/permissions",
      },
    ],
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: ChartIcon,
    children: [
      {
        id: "analytics-dashboard",
        label: "Dashboard",
        href: "/analytics",
      },
      {
        id: "analytics-reports",
        label: "Relatórios",
        href: "/analytics/reports",
      },
      {
        id: "analytics-metrics",
        label: "Métricas",
        children: [
          {
            id: "analytics-metrics-performance",
            label: "Performance",
            href: "/analytics/metrics/performance",
          },
          {
            id: "analytics-metrics-usage",
            label: "Uso",
            href: "/analytics/metrics/usage",
          },
        ],
      },
    ],
  },
  {
    id: "settings",
    label: "Configurações",
    icon: SettingsIcon,
    children: [
      {
        id: "settings-general",
        label: "Geral",
        href: "/settings",
      },
      {
        id: "settings-security",
        label: "Segurança",
        href: "/settings/security",
      },
      {
        id: "settings-notifications",
        label: "Notificações",
        href: "/settings/notifications",
      },
    ],
  },
];

export const Default: Story = {
  args: {
    items: basicItems,
    isCollapsed: false,
  },
};

export const Collapsed: Story = {
  args: {
    items: basicItems,
    isCollapsed: true,
  },
};

export const WithNestedItems: Story = {
  args: {
    items: nestedItems,
    isCollapsed: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar com itens aninhados que podem ser expandidos e colapsados.",
      },
    },
  },
};

export const CollapsedWithNestedItems: Story = {
  args: {
    items: nestedItems,
    isCollapsed: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Sidebar colapsada com itens aninhados. Os ícones ficam visíveis e tooltips mostram os rótulos.",
      },
    },
  },
};

export const WithoutIcons: Story = {
  args: {
    items: [
      {
        id: "item1",
        label: "Item 1",
        href: "/item1",
      },
      {
        id: "item2",
        label: "Item 2",
        children: [
          {
            id: "subitem1",
            label: "Subitem 1",
            href: "/item2/subitem1",
          },
          {
            id: "subitem2",
            label: "Subitem 2",
            href: "/item2/subitem2",
          },
        ],
      },
      {
        id: "item3",
        label: "Item 3",
        href: "/item3",
      },
    ],
    isCollapsed: false,
  },
  parameters: {
    docs: {
      description: {
        story: "Sidebar sem ícones, apenas com texto.",
      },
    },
  },
};
