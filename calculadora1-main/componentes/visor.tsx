import React from "react";
import { Text,View,StyleSheet,TouchableHighlight,DynamicColorIOSTuple, ImageBackground } from "react-native";


export default (props:any)=>{

    return(
        
        <View style={estilos.visor}>
            <View style={estilos.visor2}>
                <Text style={estilos.visorOperacao} numberOfLines={1}>{props.valor}</Text>
       
             </View>
                 
        
                <Text style={estilos.visorResultado} numberOfLines={1}>{props.res}</Text>

         </View>
        
        
    )


}
const estilos=StyleSheet.create({

    visor:{
        flex:1,
        padding:20,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"",
        width:"100%",

    },

    visorResultado:{
        fontSize:50,
        color:"#DCDCDC",
    },
    visorOperacao:{
        fontSize:20,
        color:"#DCDCDC"


    },
    visor2:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#000000",
        width:"100%",
        fontSize:15,
        color:"#000",

    }

});