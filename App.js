import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [listGoals, setListGoals] = useState([]);
  function ajouterGoal() {
      setListGoals((currentListGoal) => [
        ...currentListGoal,
        "test"
      ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Button title='Add new goal' onPress={ajouterGoal}/>
      </View>
      <View style={styles.listGoals}>
        {listGoals.map((goal) => <Text key={goal} style={styles.itemGoal}>{goal}</Text>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  topCenter: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50
  },
  listGoals: {
    flex:5
  },
  itemGoal: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    padding: 8,
    color: 'white'
  }

});
