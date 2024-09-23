import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import ImageSlider from "../components/ImageSlider";

export default function Home() {
	const router = useRouter();
	return (
		<SafeAreaView class="flex-1 bg-white flex space-y-5" edges={["top"]}>
			<StatusBar style="dark" />

			{/* punchline and avatar*/}
			<View className="flex-row justify-betweeen items-center mx-5">
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
			<View>
				<ImageSlider />
			</View>
		</SafeAreaView>
	);
}
