import React, { Component } from 'react';
import { TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            isLogined: false
        }
    }

    login = () => {
        if ((this.state.username == 'ekin') && (this.state.password == '123')) {
            this.setState({ isLogined: true });
            alert("Success")
        }
        else {
            this.setState({ isLogined: false });
        }
    }

    render() {
        return (
            <View style={LOCAL_STYLES.wrapper} testID="app-root" accessibilityLabel="app-root">
                <View style={LOCAL_STYLES.inputContainer}>
                    <TextInput name="username" accessibilityLabel="username" style={LOCAL_STYLES.input} onChangeText={v => this.setState({username: v})} />
                </View>

                <View style={LOCAL_STYLES.inputContainer}>
                    <TextInput name="password" accessibilityLabel="password" secureTextEntry={true} style={LOCAL_STYLES.input} onChangeText={v => this.setState({password: v})} />
                </View>

                <Text accessibilityLabel="loginstatus">{this.state.isLogined ? "success" : "fail"}</Text>

                <TouchableHighlight style={LOCAL_STYLES.buttonContainer} accessibilityLabel="login" onPress={this.login}>
                    <Text style={{ color: 'white' }}>Login</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const LOCAL_STYLES = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    inputContainer: {
        borderBottomColor: '#AFAFAF',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        borderBottomWidth: 1,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        borderColor: 'blue',
        borderWidth: 1
    },
    buttonContainer: {
        height: 45,
        width: 250,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 20,
        backgroundColor: "#00b5ec"
    },
    input: {
        width: '100%',
        height: '100%'
    }
});