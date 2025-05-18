import { Stack } from 'expo-router';

export default function RootLayout() {
	return <Stack screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
		headerTitleAlign: 'center',
        headerTintColor: '#fff',
      }}
	>
		<Stack.Screen name='index' options={{headerTitle: 'Zadanie rekrutacyjne'}}/>
		<Stack.Screen name='form' />
		<Stack.Screen name='api'/>
	</Stack>;
}
