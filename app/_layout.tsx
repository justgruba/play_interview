import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/api/client';

export default function RootLayout() {
	return (
		<QueryClientProvider client={queryClient}>
			<SafeAreaProvider>
				<PaperProvider>
					<Stack
						screenOptions={{
							animation: 'fade',
							headerStyle: {
								backgroundColor: '#f4511e',
							},
							headerTitleAlign: 'center',
							headerTintColor: '#fff',
						}}
					>
						<Stack.Screen name="index" options={{ headerTitle: 'Zadanie rekrutacyjne' }} />
						<Stack.Screen name="form" options={{ headerTitle: '' }} />
						<Stack.Screen name="api" options={{ headerTitle: '' }} />
					</Stack>
				</PaperProvider>
			</SafeAreaProvider>
		</QueryClientProvider>
	);
}
