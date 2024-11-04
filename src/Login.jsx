import { Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { TouchableOpacity } from 'react-native'

const Login = ({ navigation }) => {

  const [nombre,setNombre] = useState("")
  console.log(nombre);
  

  
  const enviarNombre =()=>{
    navigation.navigate('Control', {nombre});
  }


  return (
    <View style={styles.backgroundContainer}>

        <ImageBackground  source={require("../assets/background.png")} resizeMode="cover" style={styles.backgroundImage}></ImageBackground>
        <View style={styles.textContainer} >
          <Text style={styles.textCenter}>Bienvenido al control del Carrito</Text>
          <View style={styles.overlay} >
              <View style={styles.login}>
                  <Text style={styles.textName}>Por favor, ingrese su nombre</Text>
                      <View  style={styles.input}>
                          {/* <input type="text" class="form-control text-center" id="nombre" placeholder="Nombre"> */}
                          <TextInput
                            style={styles.inputText}
                            onChangeText={setNombre}
                            value={nombre}
                            placeholder="Nombre"
                          />                    
                          </View>
                    <TouchableOpacity   style={styles.btnPurple} onPress={enviarNombre}>
                        <Text style={styles.textBtn} >Enviar</Text>
                      </TouchableOpacity>
              </View>
          </View>
        </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
 

  backgroundContainer: {
    flex: 1,
    position: 'relative',
    display: "flex",
    backgroundColor: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center',
    // fontFamily: 'Poppins',
    width: "100%",
    backgroundColor: "#000",
    zIndex: 1
  },

  backgroundImage: {
   position: "absolute",
    width: '100%',
    height: '100%',
    zIndex: 0
  },

  overlay: {
    width: "100%",
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    height: "auto",
    borderRadius: 12,
    marginTop: 20

  },

  textContainer: {
    zIndex: 1,
    color: 'white',
    textAlign: 'center',
    width: "80%",
    margin: "auto",
    display: "flex",
    alignItems: "center",
  },
  textCenter:{
    fontSize: 34,
    fontWeight: "700",
    color: "#fff",
    textAlign: "center"
  },

  // h1 equivalent
  h1: {
    fontSize: 24, // approx 2rem
    marginBottom: 24, // approx 1.5rem
    textAlign: 'center',
  },

  login: {
    padding: 20,
    borderRadius: 10,
  },
  textName:{
    fontSize: 18,
    color: "#fff",
    fontWeight: "500"
  },
  inputText:{
    width: "100%",
    height: 48,
    backgroundColor: "#fff",
    borderRadius: 6,
    marginTop: 20,
    fontSize: 16, 
    textAlign: 'center',
  },

  btnPurple: {
    backgroundColor: '#56309e',
    color: 'white',
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16, 
    textAlign: 'center',
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 6

  },

  textBtn: {
    color: 'white',
    fontSize: 22,
    fontWeight: "600",
  },
});