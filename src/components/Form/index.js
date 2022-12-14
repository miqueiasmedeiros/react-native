// import React {useState} from "react";
import { TextInput, View, Text, TouchableOpacity} from "react-native";
import { useState } from "react";
import ResultIMC from "./ResultImc";
import styles from "./style";


export default function Form(){

    const [height, setHeight]= useState(null)
    const [weight, setWeight]= useState(null)
    const [messageResultImc, setMessageImc]= useState("Preencha o peso e a altura");
    const [imc, setImc]= useState(null)
    const [textButton, setTextButton]= useState("Calcular")
    const [errorMessager, setErrorMessager] = useState(null)
    
    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }
    function verificationImc(){
        if(imc == null){
            setErrorMessager("campo obrigatório*")
        }
    }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu imc é igual: ")
            setTextButton("Calcular Novamente")
            setErrorMessager(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o peso e a altura")
       
    }

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessager}</Text>

                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={height}
                placeholder="Ex. 1.75 "
                keyboardType="numeric"
                />

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>


                <TextInput
                style={styles.input}
                onChangeText={setWeight}
                value={weight}
                placeholder="Ex. 75.325"
                keyboardType="numeric"
                />
                <TouchableOpacity
                style={styles.buttonCalculator}
                onPress={() =>{
                    validationImc()
                }}
                >     
                <Text style={styles.textButtonCalculator}>{textButton}</Text>           
                </TouchableOpacity>
            </View>
            <ResultIMC messageResultImc={messageResultImc} resultImc={imc}></ResultIMC>
        </View>
    )
}