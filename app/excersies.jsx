import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { ScrollView } from "react-native-virtualized-view";
import { fetchExerciseByBodyParts } from "../api/exerciseDB";
import ExerciseList from "../components/ExerciseList";
import { demoExercises } from "../constants";

export default function excersies() {
	const router = useRouter();
	const [exercise, setExercise] = useState([]);
	const item = useLocalSearchParams();
	// console.log("got item", item);

	useEffect(() => {
		if (item) getExercises(item.name);
	}, [item]);

	const getExercises = async (bodyPart) => {
		let data = await fetchExerciseByBodyParts(bodyPart);
		// console.log("bodypartdata: ", data);
		setExercise(data);
	};
	return (
		<ScrollView>
			<StatusBar style="light" />
			<Image
				source={item.image}
				style={{ width: wp(100), height: hp(45) }}
				className="rounded-b-[40px]"
			/>
			<TouchableOpacity
				onPress={() => router.back()}
				className="bg-rose-500 mx-4 absolute rounded-full flex justify-center items-center pr-1"
				style={{ height: hp(5.5), width: hp(5.5), marginTop: hp(7) }}>
				<Ionicons name="caret-back-outline" size={hp(4)} color="white" />
			</TouchableOpacity>

			{/* exercises */}
			<View className="mx-4 space-y-3 mt-4">
				<Text
					style={{ fontSize: hp(4) }}
					className="font-semibold text-neutral-700">
					{item.name} exercise
				</Text>
				<View className="mb-10">
					<ExerciseList data={exercise} />
				</View>
			</View>
		</ScrollView>
	);
}
