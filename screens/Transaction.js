import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Button } from 'react-native'

import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default class transactionScreen extends Component {
    constructor(){
        super()
        this.state={
            domState:'normal',
            hasCameraPermissions: null,
            scanned: false,
            scannedData: ''
        }
    }
     render() {
          return (
               <View style={styles.container}>
                    <Text style={styles.text}>Transaction Screen</Text>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Scan QR Code</Text>
                    </TouchableOpacity>
               </View>
          )
     }
}

const styles = StyleSheet.create({
     container: {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#5653D4"
     },
     text: {
          color: "#ffff",
          fontSize: 20
     },
     button: {
          width: "43%",
          height: 55,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F48D20",
          borderRadius: 15
     },
     buttonText: {
          fontSize: 15,
          color: "#FFFFFF"
     }
});