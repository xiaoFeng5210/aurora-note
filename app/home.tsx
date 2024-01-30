import { View, Text, StyleSheet, Button } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { ANButton } from "@/components/ui";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text style={{ fontSize: wp(8) }}>Home</Text>
      <ANButton type="primary" onPress={() => router.push("/(tabs)")}>开始</ANButton>
    </SafeAreaView>
  );
};
export default Home;
