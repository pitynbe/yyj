import React, {Component} from "react";
import {View, Text} from "react-native";

import InputText from "./../components/InputText";

export default class Register extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<InputText
				style={{width: gScreen.width - 20}}
				text="邀请码(选填)"
			 />
		);
	}
}