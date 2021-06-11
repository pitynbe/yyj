import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import { NavBar, Icon } from 'antd-mobile';

import Register from "./containers/register";

export default class Route extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<ScrollView contentContainerStyle={{paddingTop: 30}}>
					<Register />
				</ScrollView>
			</View>
		);
	}
} 