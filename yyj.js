//入口文件；
import React, {Component} from "react";
import {Provider} from "mobx-react/native";
import {
  AppRegistry,
  View,
  Text,
} from 'react-native';
import App from "./src";

export default class Root extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<Provider>
					<App />
				</Provider>
			</View>
		);
	}
} 

AppRegistry.registerComponent('yyj', () => Root);