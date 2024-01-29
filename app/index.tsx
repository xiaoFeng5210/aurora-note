import { View } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useEffect, useState } from "react";
import { Redirect } from "expo-router";

const test = () => {
  return (
    <Redirect href="/home" />
  );
};
export default test;
