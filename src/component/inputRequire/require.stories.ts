import type { Meta, StoryObj } from "@storybook/react";

import { Require } from "./inputRequire";

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
  component: Require,
  title: "Components/Require",
} satisfies Meta<typeof Require>;

export default meta;

type Story = StoryObj<typeof meta>;

export const InputOptionalRequire: Story = {
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


