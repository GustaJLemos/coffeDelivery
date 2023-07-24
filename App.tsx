import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { useFonts as useFontsRoboto, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { useFonts as useFontsBaloo, Baloo2_700Bold } from '@expo-google-fonts/baloo-2';
import { THEME } from './src/theme';

import { AppRoutes } from './src/routes/AppRoutes.routes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [fontRobotoLoaded] = useFontsRoboto({ Roboto_400Regular, Roboto_700Bold })
  const [fontBalooLoaded] = useFontsBaloo({ Baloo2_700Bold })

  if (!fontRobotoLoaded || !fontBalooLoaded) {
    return (
      <ActivityIndicator />
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style='light' backgroundColor={THEME.colors.base.gray_100} />
      <AppRoutes />
    </GestureHandlerRootView>
  );
}
