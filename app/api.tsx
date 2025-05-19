import { fetchQuote } from '@/api/quotes';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, Card } from 'react-native-paper';

const Api = () => {
	const {
		data: quote,
		error,
		isLoading,
	} = useQuery({
		queryKey: ['quote'],
		queryFn: fetchQuote,
	});

	if (isLoading) {
		return (
			<View style={styles.container}>
				<ActivityIndicator size="large" />
			</View>
		);
	}

	if (error) {
		return (
			<SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
				<View style={styles.container}>
					<Text>Coś poszło nie tak...</Text>
				</View>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={{ flex: 1 }} edges={['left', 'right']}>
			<View style={styles.container}>
				<Card mode="contained" style={styles.card}>
					<Card.Content>
						<Text style={styles.quote}>{quote?.quote}</Text>
						<Text style={styles.author}>{quote?.author}</Text>
					</Card.Content>
				</Card>
			</View>
		</SafeAreaView>
	);
};

export default Api;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	card: {
		margin: 15,
		borderRadius: 10,
		backgroundColor: 'white',
	},
	quote: {
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
		marginBottom: 8,
	},
	author: {
		fontSize: 16,
		color: 'gray',
	},
});
