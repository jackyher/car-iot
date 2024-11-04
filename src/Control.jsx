import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';

const Control = ({ route, navigation }) => {
    const { nombre } = route.params;

    // const nombre = "Guapa"

    const [ledIzquierdaArriba, setLedIzquierdaArriba] = useState(false)
    const [ledIzquierdaAbajo, setLedIzquierdaAbajo] = useState(false)
    const [ledDerechadaArriba, setLedDerechadaArriba] = useState(false)
    const [ledDerechadaAbajo, setLedDerechadaAbajo] = useState(false)

    const cambiarLeds = (status) => {
        switch (status) {
            case '1':
                setLedIzquierdaArriba(true);
                setLedDerechadaArriba(true);
                setLedIzquierdaAbajo(false);
                setLedDerechadaAbajo(false);
                break;
            case '2':
                setLedIzquierdaArriba(true);
                setLedDerechadaArriba(false);
                setLedIzquierdaAbajo(true);
                setLedDerechadaAbajo(false);
                break;
            case '3':
                setLedIzquierdaArriba(false);
                setLedDerechadaArriba(false);
                setLedIzquierdaAbajo(false);
                setLedDerechadaAbajo(false);
                break;
            case '4':
                setLedIzquierdaArriba(false);
                setLedDerechadaArriba(true);
                setLedIzquierdaAbajo(false);
                setLedDerechadaAbajo(true);
                break;
            case '5':
                setLedIzquierdaArriba(false);
                setLedDerechadaArriba(false);
                setLedIzquierdaAbajo(true);
                setLedDerechadaAbajo(true);
                break;
            case '6':
                setLedIzquierdaArriba(true);
                setLedDerechadaArriba(false);
                setLedIzquierdaAbajo(true);
                setLedDerechadaAbajo(false);
                break;
            case '7':
                setLedIzquierdaArriba(false);
                setLedDerechadaArriba(true);
                setLedIzquierdaAbajo(false);
                setLedDerechadaAbajo(true);
                break;
            default:
                setLedIzquierdaArriba(false);
                setLedDerechadaArriba(false);
                setLedIzquierdaAbajo(false);
                setLedDerechadaAbajo(false);
                break;
        }
    };

    const manejarBotonPresionado = (status) => {
        const idDevice = btoa(nombre); // Generar el idDevice codificando el nombre en Base64
        enviarDatos(status, nombre, idDevice);
        cambiarLeds(status);
    };


    useEffect(()=>{
        
    },[])

    const regresar =()=> {
        navigation.navigate('Login');
    }

    
  return (
    <View style={{flex: 1, backgroundColor: "green"}}>
        <SafeAreaView ></SafeAreaView>

        <ImageBackground  source={require("../assets/backgroundControl.png")} resizeMode="cover" style={styles.backgroundImage}></ImageBackground>

        <ScrollView  style={styles.scrollViewContent}>

            <View style={styles.containerData}>
                <View style={styles.contentInfo}>
                    <Text  style={styles.name} >{nombre}</Text>
                    <TouchableOpacity onPress={regresar}  style={[styles.btns, styles.btnRegresar]} >
                        <Text style={styles.regresar}>Cambiar</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerControl}>
                    <Text  style={styles.title} >Control del Carrito</Text>

                    <View style={styles.control}>

                        {/* ARRIBA */}
                        <View>
                            <TouchableOpacity style={[styles.controlArriba, styles.btns]} >
                                <Image source={require("../assets/flecha-arriba.png")} resizeMode="cover" style={styles.flechitas}></Image>
                            </TouchableOpacity>

                        </View>

                        {/* EN MEDIO */}
                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly", width: "100%"}}>
                            <TouchableOpacity style={[styles.controlArriba, styles.btns]}>
                                <Image source={require("../assets/flecha-izquierda.png")} resizeMode="cover" style={styles.flechitas}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.controlArriba, styles.btns]}>
                                <Image source={require("../assets/detener-jugador.png")} resizeMode="cover" style={styles.flechitas}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.controlArriba, styles.btns]}>
                                <Image source={require("../assets/flecha-derecha.png")} resizeMode="cover" style={styles.flechitas}></Image>
                            </TouchableOpacity>

                        </View>

                        {/* ABAJO */}
                        <View >
                            <TouchableOpacity style={[styles.controlArriba, styles.btns]}>
                                <Image source={require("../assets/flecha-abajo.png")} resizeMode="cover" style={styles.flechitas}></Image>
                            </TouchableOpacity>
                        </View>


                        <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", paddingHorizontal: 20, paddingBottom: 20}}>
                            <TouchableOpacity style={[styles.controlArriba, styles.btns]}>
                                <Image source={require("../assets/giro-completo-izq.png")} resizeMode="cover" style={styles.flechitas}></Image>
                            </TouchableOpacity>

                            <TouchableOpacity style={[styles.controlArriba, styles.btns]}>
                                <Image source={require("../assets/giro-completo-der.png")} resizeMode="cover" style={styles.flechitas}></Image>
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>

                <View style={styles.contentCar}> 
                    <View style={styles.contentCarLeds}>
                        <Image source={require("../assets/carro.png")} resizeMode="contain" style={styles.imgCar} ></Image>

                        <View style={styles.contentLeds}>
                            
                            <View style={styles.positionLed}>
                                <View style={styles.contentLedImg}>
                                    {ledIzquierdaArriba ? 
                                    <Image source={require("../assets/led-on.png")} resizeMode="contain" style={styles.led}></Image>
                                      : <Image source={require("../assets/led-off.png")} resizeMode="contain" style={styles.led}></Image>
                                    }
                                </View>

                                <View style={styles.contentLedImg}>
                                    {ledDerechadaArriba ? 
                                        <Image source={require("../assets/led-on.png")} resizeMode="contain" style={styles.led}></Image>
                                        : <Image source={require("../assets/led-off.png")} resizeMode="contain" style={styles.led}></Image>
                                    }
                                </View> 
                            </View>

                            <View style={styles.positionLed}>
                                <View  style={styles.contentLedImg}>
                                    {ledIzquierdaAbajo ? 
                                        <Image source={require("../assets/led-on.png")} resizeMode="contain" style={styles.led}></Image>
                                        : <Image source={require("../assets/led-off.png")} resizeMode="contain" style={styles.led}></Image>
                                    }
                                </View>
                                <View style={styles.contentLedImg}>
                                    {ledDerechadaAbajo ? 
                                        <Image source={require("../assets/led-on.png")} resizeMode="contain" style={styles.led}></Image>
                                        : <Image source={require("../assets/led-off.png")} resizeMode="contain" style={styles.led}></Image>
                                    }
                                </View>                             
                            </View>
                            
                        </View>
                    </View>
                </View>

                
                                    
                <View style={styles.contentTable}>
                    <Text style={styles.title}>Último Registro</Text>

                    <View style={styles.containTable}>
                        <View style={styles.table}>
                            <View style={styles.rowTitle}>
                                <Text style={styles.titleTable}>ID</Text>
                            </View>
                            <View style={styles.rowTitle}>
                                <Text style={styles.dataRow}>Guapa</Text>
                            </View>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.rowTitle}>
                                <Text style={styles.titleTable}>ID Device</Text>
                            </View>
                            <View style={styles.rowTitle}>
                                <Text style={styles.dataRow}>SmFjcXVlbGluZQ==</Text>
                            </View>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.rowTitle}>
                                <Text style={styles.titleTable}>IP Cliente</Text>
                            </View>
                            <View style={styles.rowTitle}>
                                <Text style={styles.dataRow}>189.203.96.68</Text>
                            </View>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.rowTitle}>
                                <Text style={styles.titleTable}>Status</Text>
                            </View>
                            <View style={styles.rowTitle}>
                                <Text style={styles.dataRow}>1</Text>
                            </View>
                        </View>
                        <View style={styles.table}>
                            <View style={styles.rowTitle}>
                                <Text style={styles.titleTable}>Fecha</Text>
                            </View>
                            <View style={styles.rowTitle}>
                                <Text style={styles.dataRow}>Sat, 02 Nov 2024 05:34:02 GMT
                                </Text>
                            </View>
                        </View>
                    </View>
                    
                </View>

            </View>

            

        
        
        </ScrollView> 
    </View>

  )
}

export default Control

const styles = StyleSheet.create({
    container:{
        width: "98%",
        height: "100%",
        margin: "auto",
        
    },
    scrollViewContent:{
        flexGrow: 1,
        flex: 1,
    },
    containerData:{
        position: "relative",
        zIndex: 2,
        width: "auto",
        height: "auto",
        paddingBottom: 80
    },
    contentInfo:{
        display: "flex",
        flexDirection: "row",
        gap: 25,
        justifyContent: "flex-end",
        alignItems: "center",
        marginRight: 20
    },
    name:{
        color: "#fff",
        fontSize: 20,
    },
    btns:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius:6
    },
    flechitas:{
        width: "70%",
        height: "70%"
    },
    btnRegresar:{
        backgroundColor: "#9e308e",
        padding: 10,
    },
    regresar:{
        fontSize: 20,
       color: "#fff"

    },

    containerControl:{
        marginTop: 20
    },
    title:{
        textAlign: "center",
        color: "#fff",
        fontSize: 32,
        fontWeight: "700"
    },

    control:{
        width: "95%",
        display: "flex",
        margin: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        marginTop: 30,
        alignItems: "center",
        
    },
    controles:{
        display: "flex",
        justifyContent: "center",
    },
    controlArriba:{
        height: 70,
        width: 70,
        backgroundColor: "#fff",
        marginTop: 20
    },

    contentCar:{
        width:"95%", 
        height: 300, 
        margin: "auto", 
        marginTop: 40,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
    },
    contentCarLeds:{
        width: "70%",  
        margin: "auto",  
        height: "100%", 
        justifyContent: "center", 
        alignItems: "center",
         position: "relative",
         paddingTop: 20,
         paddingBottom: 20
    },
    imgCar:{
        width: "70%",
        height: "100%",
        position: "absolute"
    },
    contentLeds:{
        width: "100%", 
        height: "100%", 
        display: "flex", 
        justifyContent: "space-between"
    },
    positionLed:{
        width: "100%", 
        height: 60, 
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    contentLedImg:{
        width: 60, 
        height: "100%", 
    },
    led:{
        width: "100%",
        height: "100%",
    },

    contentTable:{
        width:"95%", 
        margin: "auto", 
        marginTop: 40,
        // backgroundColor: "rgba(255, 255, 255, 0.6)",
    },

    containTable:{
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        width: "100%",
        marginTop: 20,

    },
    table:{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        height: 50
    },
    rowTitle:{
        borderColor: "#000", 
        borderWidth: 1, 
        width: "50%",
         display:"flex", 
         justifyContent: "center", 
         paddingLeft: 10
    },
    titleTable:{
        fontSize: 22,
        fontWeight: "500"
    },
    dataRow:{
        fontSize: 22
    },


    backgroundImage:{
        width: "100%",
        height: "100%",
        position: "absolute",
        zIndex: 0
    },
})