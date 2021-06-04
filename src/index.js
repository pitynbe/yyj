import React, {Component} from "react";
import {View, Text} from "react-native";
import { NavBar, Icon } from 'antd-mobile';

import Register from "./containers/register";

export default class Route extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Register />
			</View>
		);
	}
} 