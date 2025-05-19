import { StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/Input';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Modal, Text, PaperProvider, Portal } from 'react-native-paper';
import { z } from 'zod';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export const schema = z.object({
	name: z.string().min(5, 'Imię musi zawierać więcej niż 5 znaków!'),
	email: z.string().email('Nieprawidłowy adres e-mail!'),
});

export type FormValues = {
	email: string;
	name: string;
};

const Form = () => {
	const [visible, setVisible] = useState(false);
	const { control, handleSubmit } = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const onSubmit = (data: FormValues) => {
		console.log('Dane formularza:', data);
		setVisible(true);
	};

	const hideModal = () => setVisible(false);

	return (
		<SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
			<View style={styles.container}>
				<Input control={control} name="name" />
				<Input control={control} name="email" />
				<Button mode="contained" onPress={handleSubmit(onSubmit)}>
					Wyślij
				</Button>
			</View>
			<Portal>
				<Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.modal}>
					<Text>Dziękujemy, dane zapisane!</Text>
					<Button onPress={hideModal}>Zamknij</Button>
				</Modal>
			</Portal>
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
	modal: {
		backgroundColor: 'white',
		padding: 20,
		margin: 50,
		borderRadius: 10,
	},
});
