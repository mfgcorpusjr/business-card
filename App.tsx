import { SafeAreaProvider } from "react-native-safe-area-context";

import BusinessCardScreen from "@/screens/BusinessCardScreen";

export default function App() {
  return (
    <SafeAreaProvider>
      <BusinessCardScreen />
    </SafeAreaProvider>
  );
}
