import { fetchQuote } from '@/api/quotes';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';

const Api = () => {
	const { data: quote, error } = useQuery({
		queryKey: ['quote'],
		queryFn: fetchQuote,
	});

	if (error) {
		return (
			<SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
				<View style={styles.container}>
					<Text>Coś poszło nie tak</Text>
				</View>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
			<View style={styles.container}>
				<Text>{quote?.quote}</Text>
			</View>
		</SafeAreaView>
	);
};

export default Api;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		margin: 20,
	},
});
