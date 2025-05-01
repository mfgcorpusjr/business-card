import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  FlatList,
  Linking,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

import data from "@/data";

export default function BusinessCardScreen() {
  const handleSocial = (social: string) => Linking.openURL(social);

  const handleContactMe = () => Linking.openURL(`mailto:${data.email}`);

  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar style="light" />

        <Image
          style={styles.banner}
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/pinterest/0.jpeg",
          }}
        />

        <View style={styles.profileContainer}>
          <View style={{ alignItems: "center" }}>
            <Image
              style={styles.avatar}
              source={{ uri: "https://i.pravatar.cc/300?img=58" }}
            />
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.occupation}>{data.occupation}</Text>
          </View>

          <View style={styles.socialsContainer}>
            <Ionicons
              name="logo-github"
              size={24}
              color="black"
              onPress={() => handleSocial(data.social.github)}
            />
            <Ionicons
              name="logo-linkedin"
              size={24}
              color="black"
              onPress={() => handleSocial(data.social.linkedin)}
            />
            <Ionicons
              name="link-outline"
              size={24}
              color="black"
              onPress={() => handleSocial(data.social.website)}
            />
          </View>

          <Text style={styles.textButton} onPress={handleContactMe}>
            Contact Me
          </Text>

          <Text style={styles.bio}>{data.bio}</Text>
        </View>

        <Section title="My Projects">
          <FlatList
            contentContainerStyle={styles.projectsContainer}
            data={data.projects}
            renderItem={({ item }) => <ProjectCard {...item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  profileContainer: {
    alignItems: "center",
    gap: 16,
    marginTop: -70,
    marginBottom: 40,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: "white",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
  },
  occupation: {
    color: "grey",
  },
  socialsContainer: {
    flexDirection: "row",
    gap: 24,
  },
  textButton: {
    color: "dodgerblue",
    fontSize: 16,
    fontWeight: "500",
  },
  bio: {
    fontSize: 16,
    lineHeight: 22,
    marginHorizontal: 12,
  },
  projectsContainer: {
    gap: 12,
    paddingHorizontal: 12,
  },
});
