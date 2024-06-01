import { z, ZodType } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@nextui-org/button';
import { Checkbox, Link } from '@nextui-org/react';
import InputFormText from '../InputFormText/InputFormText';
import { IUserRegisterForm } from '../../../redux/slices/auth/auth-slice.types';
import { useAppDispatch } from '../../../hooks/redux';
import {
	fetchRegister,
	sendVerificationLink,
} from '../../../redux/slices/auth/auth-slice.service';
import { redirect, useNavigate } from 'react-router-dom';

const schema: ZodType<IUserRegisterForm> = z
	.object({
		username: z.string().min(3, 'Username is too short'),
		email: z.string().email('Incorrect email'),
		password: z.string().min(4, 'Password is too short'),
		// .refine(isStrongPassword, 'Use at least one number and uppercase character'),
		confirmPassword: z.string().min(4, 'Password is too short').max(20),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Password do not match',
		path: ['confirmPassword'],
	});

function RegistrationForm() {
	const dispatch = useAppDispatch();
    const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm<IUserRegisterForm>({ resolver: zodResolver(schema) });

	const action: () => void = handleSubmit(async (data: IUserRegisterForm) => {
		const { error } = await dispatch(fetchRegister(data));
		if (error) {
			setError('root', { type: 'custom', message: error.message });
			return;
		}
		try {
			await sendVerificationLink(data.email);
			navigate(`/sign-up/success?email=${data.email}`);
		} catch {
			setError('root', { type: 'custom', message: 'email does not exist' });
		}
		redirect('/');
	});

	return (
		<form
			onSubmit={action}
			className={
				'w-fill flex flex-col items-center justify-center gap-4 bg-transparent p-4 [&>*]:shadow-sm'
			}
		>
			<h1 className={'text-3xl font-bold text-black'}> Sign up </h1>

			<InputFormText
				register={register}
				name={'username'}
				type={'text'}
				label={'Username'}
				errorMessage={errors.username?.message}
			/>

			<InputFormText
				register={register}
				name={'email'}
				type={'text'}
				label={'Email'}
				errorMessage={errors.email?.message}
			/>
			<InputFormText
				name={'password'}
				register={register}
				type={'password'}
				label={'Password'}
				errorMessage={errors.password?.message}
			/>
			<InputFormText
				name={'confirmPassword'}
				register={register}
				type={'password'}
				label={'Repeat Password'}
				errorMessage={errors.confirmPassword?.message}
			/>
			{errors.root?.message && (
				<h1 className={'text-red-600'}>{errors.root.message}</h1>
			)}
			<div className={'flex gap-4 mr-auto'}>
				<Checkbox required={true} />
				<Link href={'https://www.rule34.xxx'}>I accept company policy</Link>
			</div>
            
			<Link href={'/signin'} underline={'hover'} className={'ml-auto'}>
				Already have an account?
			</Link>
			<Button
				type={'submit'}
				className={
					'mt-4 h-12 border border-primary bg-accent text-white hover:bg-accent ' +
					'w-3/5 text-lg font-semibold hover:border-accent hover:text-white'
				}
			>
				Sign Up
			</Button>
		</form>
	);
}

export default RegistrationForm;
