import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import AttendanceApp from "./src/Attendance_app/Attendance_app";

export default class App extends React.Component {
  state = {
    username: "",
    password: "",
    ipaddress: "",
    flag: 0
  }

  login = () => {

    // console.log (this.state.username)
    // console.log (this.state.password)
    // console.log (this.state.ipaddress)

    if (this.state.ipaddress != "") {


      if (this.state.username == "Face" && this.state.password == "face") {

        this.setState({ flag: 1 })
      }

      else {

        alert("Username and password is incorrects")
      }

    }

    else {
      alert("Ip Address is required")

    }

  }


  render() {

    if (this.state.flag == 0) {
      return (
        <View style={styles.container}>
          <Text style={styles.logo}>Smart Attendance App</Text>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="Username"
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({ username: text })} />
          </View>
          <View style={styles.inputView} >
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholder="Password"
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({ password: text })} />
          </View>

          <View style={styles.inputView} >
            <TextInput
              keyboardType="numeric"
              style={styles.inputText}
              placeholder="IP address"
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({ ipaddress: text })} />
          </View>

          <TouchableOpacity style={styles.loginBtn}
            onPress={this.login}
          >
            <Text style={styles.loginText}>LOGIN</Text>
          </TouchableOpacity>


        </View>
      );

    }

    else {

      return (

        <AttendanceApp
          ipaddresss={this.state.ipaddress}
        />
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 35,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  }
});
