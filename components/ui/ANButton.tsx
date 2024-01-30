import { Button, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { type FC, useMemo } from "react";

interface ANButtonProps {
  children: string,
  type: "primary" | "secondary" | "danger",
  disabled?: boolean,
  onPress?: () => void,
}
const ANButton: FC<ANButtonProps> = ({children, type, disabled, onPress}) => {
  const color = useMemo(() => {
    return type === "primary" ? "#0285FF" : type === "secondary" ? "#5856D6" : "#FF3B30";
  }, [type]);

  return (
    <Button onPress={() => {onPress && onPress();}} title={children} color={color} disabled={disabled} />
  );
};

const styles = StyleSheet.create({
  labelStyle: {
    fontSize: wp(4),
    fontWeight: "bold",
    color: "#fff",
  }
});
export default ANButton;
