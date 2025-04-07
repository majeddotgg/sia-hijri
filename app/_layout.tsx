import { Stack } from "expo-router";
import { I18nManager } from "react-native";
import { useFonts } from 'expo-font';

I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    'Amiri-Regular': require('../assets/fonts/Amiri-Regular.ttf'),
    'Amiri-Bold': require('../assets/fonts/Amiri-Bold.ttf'),
    'Amiri-BoldItalic': require('../assets/fonts/Amiri-BoldItalic.ttf'),
    'Amiri-Italic': require('../assets/fonts/Amiri-Italic.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }
  return <Stack>
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
  </Stack>
}
