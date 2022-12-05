import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import cars from "./cars";
import CarItem from "../CarItem";
import styles from "../styles/CarList/style";

const CarsList = (props: any) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={cars}
				renderItem={(item) => <CarItem car={item.item} />}
				showsVerticalScrollIndicator={false}
				snapToAlignment={"start"}
				decelerationRate={0.7}
				snapToInterval={Dimensions.get("window").height}
			/>
		</View>
	);
};

export default CarsList;
