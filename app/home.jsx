import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { Image, Platform, SafeAreaView, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import BodyParts from "../components/BodyParts";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
	return (
		<SafeAreaView
			class="flex-1 bg-white flex space-y-5"
			edges={["top"]}
			style={{ marginTop: Platform.OS === "android" ? hp(6) : 0 }}>
			<StatusBar style="dark" />

			{/* punchline and avatar*/}
			<View className="flex-row  justify-between items-center mx-5">
				<View className="space-y-2">
					<Text
						style={{ fontSize: hp(4.5) }}
						className="font-bold tracking-wider text-neutral-700">
						READY TO
					</Text>
					<Text
						style={{ fontSize: hp(4.5) }}
						className="font-bold tracking-wider text-rose-700">
						WORKOUT
					</Text>
				</View>

				<View className="flex justify-center items-center space-y-2">
					<Image
						source={require("../assets/images/avatar.png")}
						style={{ height: hp(6), width: hp(6) }}
						className="rounded-full"
					/>
					<View
						className="bg-neutral-200 rounded-full flex justify-center items-center border-[3px] border-neutral-300"
						style={{ height: hp(5.5), width: hp(5.5) }}>
						<Ionicons name="notifications" size={hp(3)} color="#900" />
					</View>
				</View>
			</View>

			{/* Image Slider */}
			<View className="mt-3 ">{/* <ImageSlider /> */}</View>

			{/* Body part lists */}
			<View className="flex mt-5">
				<BodyParts />
			</View>
		</SafeAreaView>
	);
}
