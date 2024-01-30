import { View, Text, StyleSheet, Button } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 justify-center items-center">
      <Text className="text-2xl">Home</Text>
      <Button title="开始" onPress={() => router.push("/(tabs)")}></Button>
    </SafeAreaView>
  );
};
export default Home;
