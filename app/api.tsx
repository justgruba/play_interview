import { fetchQuote } from '@/api/quotes';
import { View, Text, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, Button, Card, Switch } from 'react-native-paper';
import { useEffect, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

const Api = () => {
	const opacity = useSharedValue(0);
	const translateY = useSharedValue(20);
	const [autoRefresh, setAutoRefresh] = useState(false);
	const {
		data: quote,
		error,
		isFetching,
		refetch,
	} = useQuery({
		queryKey: ['quote'],
		queryFn: fetchQuote,
		staleTime: 0,
	});

	useEffect(() => {
		opacity.value = 0;
		translateY.value = 20;

		opacity.value = withTiming(1, { duration: 500 });
		translateY.value = withTiming(0, { duration: 500 });
	}, [quote]);

	const animatedStyle = useAnimatedStyle(() => ({
		opacity: opacity.value,
		transform: [{ translateY: translateY.value }],
	}));

	useEffect(() => {
		let interval: number | null = null;

		if (autoRefresh) {
			interval = setInterval(() => {
				refetch();
			}, 10000);
		}

		return () => {
			if (interval !== null) clearInterval(interval);
		};
	}, [autoRefresh, refetch]);

	if (!quote && isFetching) {
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
		<SafeAreaView style={{ flex: 1 }} edges={['left', 'right', 'bottom']}>
			<View style={styles.container}>
				<Animated.View style={animatedStyle}>
					<Card mode="contained" style={styles.card}>
						<Card.Content>
							<Text style={styles.quote}>{quote?.quote}</Text>
							<Text style={styles.author}>{quote?.author}</Text>
						</Card.Content>
					</Card>
				</Animated.View>
				<View style={styles.button}>
					<View style={styles.autoRefreshButton}>
						<Text>Auto losowanie</Text>
						<Switch value={autoRefresh} onValueChange={() => setAutoRefresh(!autoRefresh)} />
					</View>
					<Button onPress={() => refetch()}>Wylosuj nowy</Button>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default Api;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between',
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
	button: {
		marginHorizontal: 50,
		gap: 30,
	},
	autoRefreshButton: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		gap: 20,
	},
});
