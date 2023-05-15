import React from "react";
import { Text,StyleSheet,TouchableHighlight,DynamicColorIOSTuple ,Dimensions} from "react-native";


export default (props:any)=>{
    const estilosBotoes=[dysplay.btn]
   
    {/*
    if(props.igual){
        estilosBotoes.push(dysplay.btigual)
    }
    if(props.operacao){
        estilosBotoes.push(estilos.btOperacao)
    }
    if(props.ac){
        estilosBotoes.push(estilos.btLimpar)
    }
    if(props.bs){
        estilosBotoes.push(estilos.btBs)
    }*/}

    return(
        <TouchableHighlight    
            onPress={props.aoClicar} 
        >
            <Text style={estilosBotoes}>{props.label}</Text>

        </TouchableHighlight>
        
    )


}
const dysplay=StyleSheet.create({
    btn:{
        fontSize:30,
        height:Dimensions.get('window').width/5,
        width:Dimensions.get('window').width/5,
        padding:20,
        backgroundColor:"#DCDCDC",
        color:"#00f",
        borderColor:"#777",
        borderWidth:1,
        textAlign:"center",
        
    },
    btigual:{
        color:"green",

    },
    btOperacao:{
         color:"#0f0",
    },
    btLimpar:{
        color:"#ff0",

    },
    btBs:{
        color:"0ff",

    },
    btDuplo:{
        height:(Dimensions.get('window').width/4)*2,
    }

    
});
