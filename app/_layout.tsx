import { Stack } from "expo-router";
import { I18nManager } from "react-native";
import { useFonts } from 'expo-font';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>
}
