import { View, Text } from "react-native";
import { I18nManager } from "react-native";

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function HomeScreen() {
  return <View>
    <Text>التقويم الهجري</Text>
  </View>
}