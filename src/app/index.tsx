import { View, Text, Image} from "react-native"

import { Input } from "@/components/input"


export default function Index(){
  return(
    <View className="flex-1 items-center justify-center px-5">
      <Image 
        source={require("@/assets/logo.png")}  
        className="h-8" 
        resizeMode="contain"
      />

      <Text className="text-zinc-400 font-regular text-center text-lg mt-3">
        Convide seus amigos e planeje sua{"\n"} próxima viagem!
      </Text>

      <View className="w-full bg-zinc-900 p-4 rounded-lg my-8 border border-zinc-800">
        <Input variant="primary">
          <Input.Field placeholder="Para Onde?"/>
        </Input>
      </View>
      
    </View>
  )
}