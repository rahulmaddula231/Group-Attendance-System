//This is an example code for React Native Floating Action Button//
import React, { Component } from 'react';
import { ActivityIndicator } from "react-native";
import ImagePicker from 'react-native-image-picker';
import plusbutton from './plus.jpg';
import tic from './tic.jpg';
import cross from './cross.jpg';
import axios from 'react-native-axios';
import { ConfirmDialog } from 'react-native-simple-dialogs';
import { ProgressDialog } from 'react-native-simple-dialogs';
//import react in our code.s

import { StyleSheet, View, Image, TouchableOpacity, Alert, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import all the components we are going to use.

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filepath: {
        data: '',
        uri: '',


      },
      fileData: '',
      fileUri: '',
      loading: 1,
      confirm: 0,
      responseflag: 0,
      test: 0,
      tokenbutton: 0,
      dialogVisible: false,
      dialogVisible1: false,
      screenflag :0,
      progressdialogVisible1: false,


    }
  }

  chooseImage = () => {
    let options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, (response) => {

      if (response.didCancel) {

      } else if (response.error) {

      } else if (response.customButton) {

      } else {

        console.log("***************showpicer**********************")

        const source = { uri: response.uri };
        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
          test: this.state.test + 1

        });

        console.log("test value is " + this.state.test)

      }
    });
  }

  launchCamera = () => {

    this.setState({
      loading: 1,
      confirm: 0,
      responseflag: 0,
    })

    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      this.setState({
        loading: 0,

      })

      if (response.didCancel) {
      } else if (response.error) {

      } else if (response.customButton) {
        alert(response.customButton);
      } else {

        console.log("*************else first ************")

        this.setState({
          filePath: response,
          fileData: response.data,
          fileUri: response.uri,
          test: this.state.test + 1

        });

        console.log("test value is _++++++++++++++++++ " + this.state.test)

        if (this.state.fileUri) {



          console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")

          console.log("test value is " + this.state.test)

          console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")




          const images = {
            uriflag: 1,
            uri: this.state.fileData

            //  const source = { uri: 'data:image/jpeg;base64,' + response.data };

          };
          const options = {
            url: 'http://' + this.props.ipaddresss + ':5000/groupattendance',
            // url: 'http://192.168.1.105:5000/groupattendance',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            data: JSON.stringify(images)
          }

          // console.log (options)

          try {

            if (this.state.loading == 0 && this.state.responseflag == 0) {

              this.setState({
                responseflag: 1

              })

              console.log("++++++++++++++++++++++++++++++++ loadiing +++++++++++++++++++++++++++++")




              axios(options)
                .then(response => {

                  if (response.data.success == "true") {

                    console.log("++++++++++++++++++++++++++++++++ if called +++++++++++++++++++++++++++++")


                    this.setState({
                      loading: 1,
                      confirm: 1,
                      responseflag: 1

                    })

                  }

                  else {

                    console.log("++++++++++++++++++++++++++++++++ else called +++++++++++++++++++++++++++++")


                    this.setState({
                      loading: 1,
                      confirm: 2,
                      responseflag: 1
                    })

                  }

                })

                .catch(function (error) {
                  console.log("++++++++++++++++++++++++++++++++error +++++++++++++++++++++++++++++")

                  console.log(error);

                  this.setState({
                    loading: 1,
                    confirm: 2,
                    responseflag: 1
                  })

                });

            }

            else {

              console.log("response already sent")

            }



          }




          catch (e) {

            console.log("wiweruewuoiruou")
            console.log(e)



            // 9355148855

            // 2324207004119


          }


        }




      }
    });

  }

  submitfinal = () => {

    console.log("sdkjfhsdjkf")

    

    this.setState({
      // loading: 0,
      dialogVisible1:true
      // confirm: 0,
      // responseflag: 0,
    })

  }


  submitfinal22 = () => {

   
    console.log("submit called")

    const images = {
      uriflag: 0,
      uri: "End"

      //  const source = { uri: 'data:image/jpeg;base64,' + response.data };

    };
    const options = {
      url: 'http://' + this.props.ipaddresss + ':5000/groupattendance',
      // url: 'http://192.168.1.105:5000/groupattendance',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: JSON.stringify(images)
    }

    axios(options)
      .then(response => {

        if (response.data.success == "true") {

          console.log("++++++++++++++++++++++++++++++++ if called +++++++++++++++++++++++++++++")


          this.setState({
            dialogVisible1: false,
            screenflag:1,
            dialogVisible:true,
            progressdialogVisible1:false
          })
      

        }

        else {

          // console.log("++++++++++++++++++++++++++++++++ else called +++++++++++++++++++++++++++++")


          // this.setState({
          //   loading: 0,
          //   confirm: 2,
          //   responseflag: 1
          // })

          alert ("Network Request Failed")

        }

      })

      .catch(function (error) {
        console.log("++++++++++++++++++++++++++++++++error +++++++++++++++++++++++++++++")

        console.log(error);

        this.setState({
          loading: 1,
          confirm: 2,
          responseflag: 1
        })

      });




  }


  // launchImageLibrary = () => {
  //   let options = {
  //     storageOptions: {
  //       skipBackup: true,
  //       path: 'images',
  //     },
  //   };
  //   ImagePicker.launchImageLibrary(options, (response) => {
  //     if (response.didCancel) {

  //     } else if (response.error) {

  //     } else if (response.customButton) {

  //       alert(response.customButton);
  //     } else {
  //       const source = { uri: 'data:image/jpeg;base64,' + response.data };
  //       this.setState({
  //         filePath: response,
  //         fileData: source,
  //         fileUri: response.uri
  //       });
  //     }
  //   });

  // }


  renderFileUri() {

    if (this.state.fileUri) {

      return (

        <View>
          <Image
            source={{ uri: this.state.fileUri }}
            style={styles.images}
          />
        </View>





      )

    }


  }

  render() {

    if (this.state.screenflag == 0){


    return (
      <View style={styles.MainContainer}>
        <Text style={{ color: "#065c91", fontSize: 25, textAlign: 'center', marginTop: 40, fontWeight: 'bold' }}>Smart Attendance App</Text>

        <View style={styles.ImageSections}>
          {this.renderFileUri()}
        </View>

        {this.state.tokenbutton == 0 ? (

          <TouchableOpacity style={styles.loginBtn}
            onPress={() => {

              this.setState({
                tokenbutton: 1,

              })
            }}  >
            <Text style={styles.loginText}>START</Text>

          </TouchableOpacity>




        ) : (


            <TouchableOpacity
              activeOpacity={0.7}
              onPress={this.launchCamera}
              style={styles.TouchableOpacityStyle}>

              <Image
                source={plusbutton}

                style={styles.FloatingButtonStyle}
              />

            </TouchableOpacity>

          )

          


        }



		  <ConfirmDialog
title="Confirmation"
message="Are you sure want to  submit?"
visible={this.state.dialogVisible1}
// onTouchOutside={() => this.setState({dialogVisible1: false})}
positiveButton={{
    title: "YES",
    onPress: () => {

      this.submitfinal22()

      this.setState({
      
        dialogVisible1: false,
        // screenflag:1,
        // dialogVisible:true
        progressdialogVisible1:true
      
      }) 

    }
    
   
    
    
}}
negativeButton={{
    title: "NO",
    onPress: () =>
    
    
    this.setState({
      
      dialogVisible1: false
    
    })



}}
/>


<ProgressDialog
    visible={this.state.progressdialogVisible1}
    title="Images are processing ..."
    message="Please  wait..."
/>







        {this.state.loading == 0 ? (

          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size={60} />
          </View>

        ) : (

            <View />
          )}


        {this.state.confirm == 1 ? (

          <Image
            source={tic}
            style={styles.images1}
          />


        ) : this.state.confirm == 2 ? (

          <Image
            source={cross}
            style={styles.images2}
          />

        ) : (

              <View />


            )

        }

        {this.state.confirm == 1 ? (

          <View>

            <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Image Uploaded Successfully</Text>
            <TouchableOpacity style={styles.loginBtn2}
              onPress={() => {

                this.submitfinal()

              }}  >
              <Text style={styles.loginText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>

        ) : this.state.confirm == 2 ? (

          <Text style={{ color: 'red', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>No Faces Found</Text>


        ) : (

              <View />

              // <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>Image Uploaded Successfully</Text>


            )

        }



      </View>
    );

      }

      else {

        return (

          <ConfirmDialog
    title="Success"
    visible={this.state.dialogVisible}
    // onTouchOutside={() => this.setState({dialogVisible: false})}
    positiveButton={{
        title: "OK",
        onPress: () => 



        this.setState({
          // dialogVisible1: false,
          // confirm:0,
          // screenflag:0,
          // dialogVisible:false,
          // progressdialogVisible1:false,
          // tokenbutton:0

          fileData: '',
      fileUri: '',
      loading: 1,
      confirm: 0,
      responseflag: 0,
      test: 0,
      tokenbutton: 0,
      dialogVisible: false,
      dialogVisible1: false,
      screenflag :0,
      progressdialogVisible1: false,
        })
        
      
    }} >
    <View>

    <Text style={styles.loginText}>Report has been generated.</Text>
    </View>
</ConfirmDialog>
        )
      }
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  TouchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },

  FloatingButtonStyle: {
    resizeMode: 'contain',
    width: 70,
    height: 70,
    //backgroundColor:'black'

  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },

  body: {
    backgroundColor: Colors.white,
    justifyContent: 'center',
    height: Dimensions.get('screen').height - 20,
    width: Dimensions.get('screen').width
  },
  ImageSections: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 50,
    backgroundColor: 'white',
    borderRadius: 20

  },
  images: {
    width: windowWidth - 20,
    height: 400,
    borderColor: 'white',
    borderRadius: 20

  },
  images1: {
    width: 50,
    height: 50,
    borderColor: 'white',
    borderRadius: 50,
    marginTop: 20

  },
  images2: {
    width: 60,
    height: 50,
    borderColor: 'white',
    borderRadius: 60,
    marginTop: 20

  },
  btnParentSection: {
    alignItems: 'center',
    marginTop: 10
  },
  btnSection: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
  },
  btnText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#0f9406",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: "130%",
  },

  loginBtn2: {
    width: 200,
    backgroundColor: "#0f9406",
    borderRadius: 20,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,

  },
  loginText: {
    color: "white",
    fontWeight: 'bold',
    fontSize: 20
  }


});


