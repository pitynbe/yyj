import React, {Component} from "react";
import {View, Text, TouchableOpacity, Button} from "react-native";
import CheckBox from 'react-native-modest-checkbox';

import InputText from "./../components/InputText";
import styles from "./style";

export default class Register extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				<InputText
					style={styles.inputText}
					textStyle={styles.textStyle}
					text="邀请码(选填)"
					underlineColorAndroid={gColor.borderColor}
				/>
				<Text style={[styles.textStyle, styles.textFontSize, styles.textColor, {marginTop: 3}]}>不填邀请码注册送10个易积分</Text>
				<Text style={[styles.textStyle, styles.textFontSize, styles.textColor, {marginTop: 3}]}>通过好友邀请码注册送30个易积分</Text>
				<View style={styles.viewBlock}>
					<Text style={[styles.textStyle, styles.wrightInfo]}>必填信息</Text>
					<InputText
						style={styles.nameText}
						containerStyle={styles.containerText}
						textStyle={[styles.textStyle, styles.textColor]}
						text="真实姓名"
						underlineColorAndroid={gColor.borderColor}
					/>
					<InputText
						style={styles.inputText}
						containerStyle={{marginTop: 10}}
						textStyle={styles.textStyle}
						text="请设置登录御易健平台密码"
						underlineColorAndroid={gColor.borderColor}
					/>
					<View style={styles.viewBlock}>
						<InputText
							style={styles.inputText}
							textStyle={styles.textStyle}
							text="手机号(+86)"
							underlineColorAndroid={gColor.borderColor}
						/>
						<View style={{marginTop: 10}}>
							<InputText
								style={styles.inputText}
								textStyle={styles.textStyle}
								text="验证码"
								placeholder="短信中6位数字"
								underlineColorAndroid={gColor.borderColor}
							/>
							<TouchableOpacity style={{position: "absolute", bottom: 7, right: 24,}}>
								<Text style={styles.btn}>
									发送验证码
								</Text>
							</TouchableOpacity>
						</View>
						<View>
							<CheckBox
								label='阅读并同意《御易健平台服务条款》'
								onChange={(checked) => console.log('Checked!')}
								labelStyle={styles.checkbox}
								containerStyle={[styles.textStyle, styles.checkboxView]}
								checkboxStyle={{width: 12,}}
					        />
						</View>
					</View>
				</View>
				<View style={{padding: 10,margin: 10}}>
					<Button
						title="验证"
						color="#D9D9D9"
					/>
				</View>
				
			</View>
		);
	}
}