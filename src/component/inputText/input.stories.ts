import type { Meta, StoryObj } from "@storybook/react";
import { TextField } from "./textInput";

const meta = {
  argTypes: {
    err: { control: "boolean" },
    error: { control: "text" },
    label: { control: "text" },
    value: { control: "text" },
    info: { control: "boolean" },
    showBorder: { control: "boolean" },
    helper: { control: "boolean" },
    texthelper: { control: "text" },
    after: { control: "boolean" },
    before: { control: "boolean" },
    dark: { control: "boolean" },
    classNameInput: {
      description: 'Styles directly for the input tag',
    },
  },
  component: TextField,
  title: "Components/SuperInputText",
} satisfies Meta<typeof TextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const EmailInput: Story = {
  args: {
    id: "super-input-email",
    label: "Email address",
    type: "email",
    info: true,
    showBorder: true,
    helper:true,
    texthelper: "This is a hint text to help user.",
    after:true,
    before:true,
    err:false
  },
};

export const InputWithError: Story = {
  args: {
    err: true,
    error: "This is a hint text to help user.",
    id: "super-input-error",
    type: "text",
    showBorder: true,
    after:false,
    before:true,
  },
};
export const InputDisable: Story = {
  args: {
    disabled: true,
    id: "super-input-error",
    type: "text",
    showBorder: true,
  },
};
export const InputDark: Story = {
  args: {
    id: "super-input-error",
    label: "Email address",
    type: "text",
    info: true,
    showBorder: true,
    helper:true,
    texthelper: "This is a hint text to help user.",
    after:true,
    before:true,
    err:false,
    dark:true
  },
};
export const InputDarkWithError: Story = {
  args: {
    err: true,
    info: true,
    label: "Email address",
    error: "This is a hint text to help user.",
    id: "super-input-error",
    type: "text",
    showBorder: true,
    after:false,
    before:true,
    dark:true
  },
};