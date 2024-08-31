import { Meta, StoryObj } from "@storybook/react"
import {TextArea} from "./textarea"

const meta = {
    component: TextArea,
    tags: ['autodocs'],
    title: 'Components/Textarea',
  } satisfies Meta<typeof TextArea>

  export default meta
  type Story = StoryObj<typeof meta>

  export const TextAreaDefault: Story = {
    args: {
        placeholder: 'Texr Area',
        height: "100px",
        width: "240px", 
    }
  }
 
  export const TextAreaDifSizeOne: Story = {
    args: {
        placeholder: 'Input...',
        height: "24px",
        width: "240px", 
        
    }
  }
  export const TextAreaDifSizeTwo: Story = {
    args: {
        placeholder: 'Input...',
        height: "36px",
        width: "240px", 
        
    }
  }
  export const TextAreaDifSizeThree: Story = {
    args: {
        placeholder: 'Input...',
        height: "40px",
        width: "240px", 
       
    }
  }
  export const TextAreaDifSizeFoure: Story = {
    args: {
        placeholder: 'Input...',
        height: "48px",
        width: "240px", 
       
    }
  }
  export const TextAreaDifSizeOneRevers: Story = {
    args: {
        placeholder: 'Input...',
        height: "24px",
        width: "240px", 
        reverse:true
    }
  }
  export const TextAreaDifSizeTwoRevers: Story = {
    args: {
        placeholder: 'Input...',
        height: "36px",
        width: "240px", 
        reverse:true
    }
  }
  export const TextAreaDifSizeThreeRevers: Story = {
    args: {
        placeholder: 'Input...',
        height: "40px",
        width: "240px", 
        reverse: true
    }
  }
  export const TextAreaDifSizeFoureRevers: Story = {
    args: {
        placeholder: 'Input...',
        height: "48px",
        width: "240px", 
        reverse:true
    }
  }