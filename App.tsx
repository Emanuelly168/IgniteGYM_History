import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

const treinos = [
  {
    data: '26.08.22',
    exercicios: [
      {
        grupo: 'Costas',
        nome: 'Puxada frontal',
        tempo: '08:56',
      },
      {
        grupo: 'Costas',
        nome: 'Remada unilateral',
        tempo: '08:32',
      },
    ],
  },
  {
    data: '26.08.22',
    exercicios: [
      {
        grupo: 'Costas',
        nome: 'Puxada frontal',
        tempo: '11:24',
      },
    ],
  },
];

export default function App() {
  function clicarBotao(nome: string) {
    Alert.alert(nome);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Histórico de Exercícios
        </Text>
      </View>

      {/* Conteúdo */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {treinos.map((treino, index) => (
          <View key={index} style={styles.dayContainer}>
            <Text style={styles.date}>{treino.data}</Text>

            {treino.exercicios.map((exercicio, exerciseIndex) => (
              <TouchableOpacity
                key={exerciseIndex}
                style={styles.exerciseCard}
                onPress={() =>
                  clicarBotao(exercicio.nome)
                }
              >
                <View style={styles.exerciseInfo}>
                  <Text style={styles.exerciseGroup}>
                    {exercicio.grupo}
                  </Text>

                  <Text style={styles.exerciseName}>
                    {exercicio.nome}
                  </Text>
                </View>

                <Text style={styles.time}>
                  {exercicio.tempo}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Barra inferior */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => clicarBotao('Início')}
        >
          <Ionicons
            name="home-outline"
            size={21}
            color="#8D8D98"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => clicarBotao('Histórico')}
        >
          <Ionicons
            name="return-down-back-outline"
            size={23}
            color="#00B37E"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navButton}
          onPress={() => clicarBotao('Perfil')}
        >
          <Ionicons
            name="person-circle-outline"
            size={22}
            color="#8D8D98"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
  },

  header: {
    height: 78,
    backgroundColor: '#202024',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 17,
  },

  headerTitle: {
    color: '#E1E1E6',
    fontSize: 13,
    fontWeight: '700',
  },

  scroll: {
    flex: 1,
    backgroundColor: '#121214',
  },

  content: {
    paddingHorizontal: 20,
    paddingTop: 28,
    paddingBottom: 30,
  },

  dayContainer: {
    marginBottom: 27,
  },

  date: {
    color: '#C4C4CC',
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 11,
  },

  exerciseCard: {
    height: 55,
    backgroundColor: '#202024',
    borderRadius: 5,
    marginBottom: 8,
    paddingHorizontal: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  exerciseInfo: {
    flex: 1,
  },

  exerciseGroup: {
    color: '#F2F2F2',
    fontSize: 10,
    fontWeight: '700',
    marginBottom: 4,
  },

  exerciseName: {
    color: '#C4C4CC',
    fontSize: 10,
  },

  time: {
    color: '#77777F',
    fontSize: 10,
    marginLeft: 10,
  },

  bottomBar: {
    height: 61,
    backgroundColor: '#202024',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 25,
  },

  navButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});