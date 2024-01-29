import { View, Text, StyleSheet, Button } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const test = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home</Text>
      <Button title="开始" onPress={() => router.push('/(tabs)')}></Button>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems:'center'
  },
})
export default test;
