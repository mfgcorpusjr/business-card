import { PropsWithChildren } from "react";
import { StyleSheet, View, Text } from "react-native";

type SectionProps = {
  title: string;
};

export default function Section({
  title,
  children,
}: PropsWithChildren<SectionProps>) {
  return (
    <View style={{ gap: 12 }}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "500",
    textAlign: "center",
  },
});
