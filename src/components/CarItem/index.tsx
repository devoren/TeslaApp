import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, ImageBackground } from "react-native";
import StyledButton from "../StyledButton";
import styles from "../styles/CarItem/style";

const CarItem = (props: any) => {
	const { name, tagline, taglineCTA, image } = props.car;
	const navigation = useNavigation() as any;

	return (
		<View style={styles.carContainer}>
			<ImageBackground source={image} style={styles.image} />
			<View style={styles.titles}>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>
					{tagline}{" "}
					<Text style={styles.subtitleCTA}>{taglineCTA}</Text>
				</Text>
			</View>
			<View style={styles.buttonContainer}>
				<StyledButton
					type="primary"
					content={"Custom Order"}
					onPress={() => {
						console.warn("Custom Order was pressed");
					}}
				/>
				<StyledButton
					type="secondary"
					content={"Car data"}
					onPress={() => navigation.navigate("CarScreen")}
				/>
			</View>
		</View>
	);
};

export default CarItem;
