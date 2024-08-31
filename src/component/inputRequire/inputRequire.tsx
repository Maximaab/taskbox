import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './require.module.scss';

const loginSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Incorrect email').optional(),
  password: z.string().min(3, 'Password must contain at least 3 characters'),
  rememberMe: z.boolean().default(false),
});

export type FormType = z.infer<typeof loginSchema>;

export const Require = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(loginSchema),
  });

  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    password: false,
  });

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputWrapper}>
        <label htmlFor="name">Имя <span className={s.required}>*</span></label>
        <input
          {...register('name')}
          id="name"
          className={s.input}
          placeholder="Ваше имя"
          onFocus={() => setIsFocused(prev => ({ ...prev, name: true }))}
          onBlur={() => setIsFocused(prev => ({ ...prev, name: false }))}
        />
        {errors.name && isFocused.name && <span className={s.error}>{errors.name.message}</span>}
      </div>

      <div className={s.inputWrapper}>
        <label htmlFor="email">Email <span className={s.optional}>(optional)</span></label>
        <input
          {...register('email')}
          id="email"
          className={s.input}
          placeholder="Ваш email"
          onFocus={() => setIsFocused(prev => ({ ...prev, email: true }))}
          onBlur={() => setIsFocused(prev => ({ ...prev, email: false }))}
        />
        {errors.email && isFocused.email && <span className={s.error}>{errors.email.message}</span>}
      </div>

      <div className={s.inputWrapper}>
        <label htmlFor="password">Пароль <span className={s.required}>*</span></label>
        <input
          {...register('password')}
          type="password"
          id="password"
          className={s.input}
          placeholder="Ваш пароль"
          onFocus={() => setIsFocused(prev => ({ ...prev, password: true }))}
          onBlur={() => setIsFocused(prev => ({ ...prev, password: false }))}
        />
        {errors.password && isFocused.password && <span className={s.error}>{errors.password.message}</span>}
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};