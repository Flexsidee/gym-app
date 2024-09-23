import { View, Text } from "react-native";
import Carousel, { ParallaxImage } from "react-native-snap-carousel";
import { sliderImages } from "../constants";
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function ImageSlider() {
	return (
		<View>
			<Text>hi</Text>
			<Carousel
				data={sliderImages}
				loop={true}
				autoplay={true}
				renderItem={ItemCard}
				hasParallaxImages={true}
				sliderWidth={wp(100)}
				firstItem={1}
				autoplayInterval={4000}
				itemWidth={wp(100) - 70}
				slideStyle={{ display: "flex", alignItems: "center" }}
			/>
		</View>
	);
}

const ItemCard = ({ item, index }, parallaxProps) => {
	return (
		<View style={{ width: wp(100) }}>
			<ParallaxImage
				source={item}
				containerStyle={{ borderRadius: 30, flex: 1 }}
				style={{ resizeMode: "contain" }}
				parallaxFactor={1}
				{...parallaxProps}
			/>
		</View>
	);
};
