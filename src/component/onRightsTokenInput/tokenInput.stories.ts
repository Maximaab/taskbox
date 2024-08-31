import type { Meta, StoryObj } from "@storybook/react";
import { TokenInput } from "./tokenInput";

const meta = {
  argTypes: {
    error: { control: "boolean" },
    label: { control: "boolean" },
    value: { control: "boolean" },
    classNameInput: {
      description: 'Styles directly for the input tag',
    },
    showBorder: { control: "boolean" },
    err: { control: "boolean" },
  },
  component: TokenInput,
  title: "Components/TokenInput",
} satisfies Meta<typeof TokenInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const TokenInputRights: Story = {
  args: {
    id: "super-input-email",
    label: "Email",
    type: "email",
    showBorder: true,
    
  },
};

export const TokenInputWithError: Story = {
  args: {
    error: "Error",
    id: "super-input-error",
    type: "text",
    err:true,
    showBorder: true,
  },
};
export const TokenInputDisable: Story = {
  args: {
    disabled: true,
    id: "super-input-error",
    type: "text",
  },
};
export const TokenInputOnFocus: Story = {
  args: {
    
    id: "super-input-error",
    type: "text",
    
  },
};
