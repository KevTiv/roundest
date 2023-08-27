import { Text, View } from '../../components/Themed';
import {PokemonChoicesPalette} from "../../components/PokemonChoicesPalette";

export default function HomeScreen() {


  return (
    <View className="w-full flex-1 flex justify-center items-center">
      <Text className="text-xl font-medium capitalize">Which is roundest?</Text>
      <PokemonChoicesPalette />
    </View>
  );
}
