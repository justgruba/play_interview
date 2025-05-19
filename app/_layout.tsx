import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function RootLayout() {
	return (
		<SafeAreaProvider>
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
		</SafeAreaProvider>
	);
}
