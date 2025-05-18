import { View } from "react-native";
import { useForm } from "react-hook-form";
import { Input } from "@/components/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "react-native-paper";
import { z } from "zod";

export const schema = z.object({
  name: z.string().min(5, "Imię jest wymagane"),
  email: z.string().email("Nieprawidłowy adres email"),
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
    console.log("Dane formularza:", data);
  };

  return (
    <View>
      <Input control={control} name="name" />
      <Input control={control} name="email" />
      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Wyślij
      </Button>
    </View>
  );
};

export default Form;
