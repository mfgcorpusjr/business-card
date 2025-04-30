import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
} from "react-native";

type ProjectCardProps = {
  name: string;
  image: ImageSourcePropType;
};

export default function ProjectCard({ name, image }: ProjectCardProps) {
  return (
    <View style={{ gap: 4 }}>
      <Image style={styles.image} source={image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    color: "grey",
  },
  image: {
    height: 140,
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
});
