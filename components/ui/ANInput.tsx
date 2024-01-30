import { View, TextInput, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useEffect, useState, type FC } from "react";

interface ANInputProps {
  value: string;
  width?: number;
  placeholder?: string;
  onChangeText?: (text: string) => void;
}
const ANInput: FC<ANInputProps> = ({value, onChangeText, width}) => {
  return (
    <TextInput style={[styles.input, {width: width ?? wp(80)}]} value={value} placeholder="some things"
      keyboardType="numeric" onChangeText={onChangeText}></TextInput>
  );
};
const styles = StyleSheet.create({
  input: {
    height: hp(5),
    width: wp(80),
    borderColor: "#E0E5EB",
    borderRadius: 8,
    borderWidth: 1,
    padding: 5,
  }
});
export default ANInput;
