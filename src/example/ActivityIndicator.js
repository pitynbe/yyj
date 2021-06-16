import React, {Component} from "react";
import {ActivityIndicator} from "react-native";

export default class ActivityIndicatorExm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			animating: true,
		}
	}
	setToggleTimeout() {
		const setTime = setTimeout(() => {
			this.setState({
				animating: !this.state.animating
			})
		}, 2000);
	}
	componentDidMount() {
		this.setToggleTimeout();
	}
	componentWillUnmount() {
		clearTimeout(setTime);
	}
	render() {
		return (
			<ActivityIndicator 
				animating={this.state.animating}
				color="red"
				hidesWhenStopped={true}
				size="large"
				style={{width: 30, borderWidth: 1,}}
			/>
		);
	}
}