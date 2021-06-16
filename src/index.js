import React, {Component} from "react";
import {View, Text, ScrollView} from "react-native";
import { NavBar, Icon } from 'antd-mobile';

import Register from "./containers/register";

//组件的练习
import ActivityIndicator from "./example/ActivityIndicator"; //加载旋转的圆圈；
import DrawerLayoutAndroid from "./example/DrawerLayoutAndroid"; //android的抽屉效果；
import FlatList from "./example/FlatList"; //列表的展示；
import KeyboardAvoidingView from "./example/KeyboardAvoidingView"; //根据键盘的位置调整页面布局；
import Modal from "./example/Modal"; //用来覆盖包含React Native 根视图的原生视图；
import PickerExm from "./example/Picker"; //调用原生的selected；
import ProgressBarAndroid from "./example/ProgressBarAndroid";



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