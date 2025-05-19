import { View, StyleSheet } from 'react-native';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from 'react-native-paper';
import { z } from 'zod';
import { SafeAreaView } from 'react-native-safe-area-context';

export const schema = z.object({
	name: z.string().min(5, 'Imię musi zawierać więcej niż 5 znaków!'),
	email: z.string().email('Nieprawidłowy adres e-mail!'),
});

export type FormValues = {
	email: string;
	name: string;
};

const Form = () => {
	const { control, handleSubmit } = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FormValues) => {
		console.log('Dane formularza:', data);
	};

	return (
		<SafeAreaView style={styles.container}>
			<Input control={control} name="name" />
			<Input control={control} name="email" />
			<Button mode="contained" onPress={handleSubmit(onSubmit)}>
				Wyślij
			</Button>
		</SafeAreaView>
	);
};

export default Form;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		margin: 20,
		gap: 20,
	},
});
