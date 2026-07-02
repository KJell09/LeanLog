import MacroGrid from '@/components/MacroGrid';
import { Text, ScrollView } from "react-native";
import { globalStyles  } from "@/styles/global";
import HomeHeader from "../../components/HomeHeader"
import RecentMeals from '@/components/RecentMeals';

export default function HomeScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>LeanLog</Text>
      <HomeHeader />
      <MacroGrid />
      <RecentMeals />
    </ScrollView>
  );
}

