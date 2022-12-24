import { StyleSheet, Text, View } from 'react-native';

const categories = [
    {
        id: '1',
        name: 'Family time',
        photo: require('../../../assets/Family_time.jpg'),
    },
    {
        id: '2',
        name: 'Healthy diet',
        photo: require('../../../assets/Healthy_diet.jpg'),
    },
    {
        id: '3',
        name: 'New language',
        photo: require('../../../assets/New_language.jpg'),
    },
    {
        id: '4',
        name: 'Time with friends',
        photo: require('../../../assets/Freinds.jpg'),
    },
    {
        id: '5',
        name: 'Sport',
        photo: require('../../../assets/Sport.jpg'),
    },
    {
        id: '6',
        name: 'Tidy up',
        photo: require('../../assets/Tidy_up.jpg'),
    },
  ];

export default function Category() {
    return (
        <View style={styles.container}>
          {categories.map((category) => {
            return (
              <View>
                <Image style={{width: 400, height: 400}} source={category.photo}  />
                <Text style={styles.item}>{category.name}</Text>
              </View>
            );
          })}
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 50,
    },
    item: {
      padding: 20,
      fontSize: 15,
      marginTop: 5,
    }
});