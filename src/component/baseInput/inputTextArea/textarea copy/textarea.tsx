import clsx from 'clsx'

import s from './textarea.module.scss'
import type {  ElementType } from 'react'

export type TextAreatype<T extends ElementType = 'textarea'> = {
  className?: string
  placeholder: string
  width?: string 
  height?: string 
  error?: true
  reverse?:boolean
} 

export const TextArea = (props: TextAreatype) => {
  const { className, width, height, error, reverse, ...rest } = props
  return <input className={clsx(s.textarea, {
    [s.reverse]: reverse,
  }, className)} style={{ width, height }} {...rest} />
}

