import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import styles from "./style";
import navigate from '../../../../../../../RootNavigation';
import axios from '../../../../../../Axios/axiosInstancia'

export default function Main(params) {
    const tipoUsuario = params.params
    const [listaParceiro, setListaParceiro] = React.useState([]);

    const GETParceiros = async () => {
        try {
            const response = await axios.get(`/GETParceiros`);

            if (response.data) {
                setListaParceiro(response.data.Parceiros);
            }
        } catch (error) {
            console.error('Erro ao fazer a solicitação:', error);
        }
    };

    React.useEffect(() => {
        GETParceiros()
    }, [])

    const inativarParceiro = async (id) => {
        const response = await axios.put(`/deletarParceiro/${id}`)

        if (response.data.Sucesso) {
            GETParceiros()
        } else {
            Alert.alert("Erro", `${response.data.msg}: ${response.data.Erro}`)
        }
    }

    const reativarParceiro = async (id) => {
        const response = await axios.put(`/reativarParceiro/${id}`)

        if (response.data.Sucesso) {
            GETParceiros()
        } else {
            Alert.alert("Erro", `${response.data.msg}: ${response.data.Erro}`)
        }
    }

    const PUTStatus = (id, status) => {
        if (status === true) {
            Alert.alert(
                "Confirmar",
                "Tem certeza de que deseja inativar este parceiro?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    { text: "Inativar", onPress: async () => await inativarParceiro(id) }
                ],
                { cancelable: false }
            );
        } else {
            Alert.alert(
                "Confirmar",
                "Tem certeza de que deseja reativar este parceiro?",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    { text: "Reativar", onPress: async () => await reativarParceiro(id) }
                ],
                { cancelable: false }
            );
        }

    };

    return (
        <ScrollView style={styles.whiteBackground}>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigate('GerenciarUsuarios', { TipoUsuario: tipoUsuario })}>
                    <Image
                        style={styles.arrow}
                        source={require('../../img/arrow.png')} />
                </TouchableOpacity>
                <Text style={styles.title}>Lista de parceiros</Text>
            </View>
            {listaParceiro.map((item) => (
                <View style={styles.container2} key={item._id}>
                    <View style={styles.campo1}>
                        <Text style={styles.texto2}>{item.nome}</Text>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={() => PUTStatus(item._id, item.status)}>
                                {item.status === true && (
                                    <Image source={require('../../img/excluir.png')} style={styles.excluir} />
                                )}
                                {item.status === false && (
                                    <Image source={require('../../img/reativar.png')} style={styles.excluir} />
                                )}

                            </TouchableOpacity>
                            {/* <TouchableOpacity onPress={() => navigate('EdicaoParceiro', { TipoUsuario: tipoUsuario, ParceiroJSON: JSON.stringify(item) })}>
                                <Image source={require('../../img/editar.png')} style={styles.editar} />
                            </TouchableOpacity> */}
                        </View>
                    </View>

                </View>
            ))}
        </ScrollView>
    );

}

