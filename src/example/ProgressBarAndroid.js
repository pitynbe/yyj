import React, {Component} from "react";
import {ProgressBarAndroid} from "react-native";

export default class ProgressBarAndroidExam extends Component {
	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
		}
	}
	componentDidMount() {
		if( this.state.progress < 1 ) {
			setInterval(() => {
				this.setState({
					progress: (this.state.progress + 0.01) % 1
				})
				},50)
			}
	}
	render() {
		return (
			<ProgressBarAndroid 
				color="#F55534"
				indeterminate={false}
				progress={this.state.progress}
				styleAttr="Horizontal"
			/>
		);
	}
}