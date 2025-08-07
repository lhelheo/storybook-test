import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Page } from "./Page";

const meta = {
  title: "Components/Layout/Page",
  component: Page,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Page>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
