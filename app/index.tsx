
import { useRouter } from "expo-router";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function Index() {
   const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 50,
      }}
    >
      <Button
        icon="pen"
        style={{ width: 150 }}
        mode="contained"
        onPress={() => router.push('/form')}
      >
        Formularz
      </Button>
      <Button
        icon="cog"
        style={{ width: 150 }}
        mode="contained"
        onPress={() => router.push('/api')}
      >
        API
      </Button>
    </View>
  );
}
