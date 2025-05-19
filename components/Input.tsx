import { TextInput, Text } from 'react-native-paper';
import { type Control, useController } from 'react-hook-form';
import { type FormValues } from '@/app/form';
import { View, StyleSheet } from 'react-native';

type InputProps = {
	control: Control<FormValues>;
	name: keyof FormValues;
};

export const Input = ({ control, name }: InputProps) => {
	const {
		field: { onChange, value },
		fieldState: { error },
	} = useController({
		control,
		name,
	});

	return (
		<View>
			<TextInput
				mode="outlined"
				label={name}
				value={value}
				onChangeText={onChange}
				error={!!error}
			/>
			{error && <Text style={styles.errorText}>{error.message}</Text>}
		</View>
	);
};

const styles = StyleSheet.create({
	errorText: {
		color: 'red',
	},
});
