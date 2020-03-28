import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
//import {Feather} from 'react-feather';
import logoImg from '../../assets/logo.png';
import styles from './style';
export default function Incidents(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg}/> 
                    <Text style={styles.headerText}>
                        Total de <Text  style={styles.headerTextBold}>0 casos</Text>.
                    </Text>
            </View>

            <Text style={styles.title}>Bem-vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia </Text>

            <View style={styles.incidents}>
                <View style={styles.incident}>
                    <Text style={styles.incidentProperty}>ONG</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>CASO:</Text>
                    <Text style={styles.incidentValue}>Cadelinha atropelada</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>R$ 120,00</Text>
                </View>

            </View>

            <TouchableOpacity 
                style={styles.detailsButton}
                onPress={()=>{}}
            >
                <Text style={styles.detailsButtonText}>Ver mais detalhes </Text>
               
            </TouchableOpacity>

        </View>
    );
}