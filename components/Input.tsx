import { TextInput, Text } from "react-native-paper";
import { type Control, useController } from "react-hook-form";
import { type FormValues } from "@/app/form";
import { View } from "react-native";

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
        label={name}
        value={value}
        onChangeText={onChange}
        error={!!error}
      />
      {error && <Text>{error.message}</Text>}
    </View>
  );
};
