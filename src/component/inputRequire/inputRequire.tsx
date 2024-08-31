import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import s from './require.module.scss';

const loginSchema = z.object({
  name: z.string().min(1, 'Имя обязательно'), // Обязательное поле
  email: z.string().email('Некорректный email').optional(), // Необязательное поле
  password: z.string().min(3, 'Пароль должен содержать минимум 3 символа'), // Обязательное поле
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

  const onSubmit = (data: FormType) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={s.inputWrapper}>
        <label htmlFor="name">Имя <span className={s.required}>*</span></label>
        <input {...register('name')} id="name" className={s.input} placeholder="Ваше имя" />
        {errors.name && <span className={s.error}>{errors.name.message}</span>}
      </div>

      <div className={s.inputWrapper}>
        <label htmlFor="email">Email <span className={s.optional}>(необязательно)</span></label>
        <input {...register('email')} id="email" className={s.input} placeholder="Ваш email" />
        {errors.email && <span className={s.error}>{errors.email.message}</span>}
      </div>

      <div className={s.inputWrapper}>
        <label htmlFor="password">Пароль <span className={s.required}>*</span></label>
        <input {...register('password')} type="password" id="password" className={s.input} placeholder="Ваш пароль" />
        {errors.password && <span className={s.error}>{errors.password.message}</span>}
      </div>

      <div className={s.inputWrapper}>
        <label>
          <input type="checkbox" {...register('rememberMe')} />
          Запомнить меня
        </label>
      </div>

      <button type="submit">Отправить</button>
    </form>
  );
};