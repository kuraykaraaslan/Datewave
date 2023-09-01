import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

const MatchesPage = () => {
  // Dummy data for matches (with women's names)
  const [matches, setMatches] = useState([
    {
      id: '1',
      profile: {
        name: 'Alice Smith',
        'url': "https://fastly.picsum.photos/id/385/400/600.jpg?hmac=tEkfEBaPG75UmChKv3095dmFj_B6f3HA-5OF3VkuUN4"
      },
    },
    {
      id: '2',
      profile: {
        name: 'Emma Wilson',
        url: "https://fastly.picsum.photos/id/385/400/600.jpg?hmac=tEkfEBaPG75UmChKv3095dmFj_B6f3HA-5OF3VkuUN4"
      },
    },
    {
      id: '3',
      profile: {
        name: 'Olivia Johnson',
        url: "https://fastly.picsum.photos/id/385/400/600.jpg?hmac=tEkfEBaPG75UmChKv3095dmFj_B6f3HA-5OF3VkuUN4"
        
      },
    },
    {
      id: '4',
      profile: {
        name: 'Sophia Davis',
        url: "https://fastly.picsum.photos/id/385/400/600.jpg?hmac=tEkfEBaPG75UmChKv3095dmFj_B6f3HA-5OF3VkuUN4"
      },
    },
  ]);

  return (
    <ScrollView style={styles.container}>
      {chunkArray(matches, 2).map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((match) => (
            <Card key={match.id} containerStyle={styles.matchCard}>
              <View style={styles.cardContent}>
              <View style={styles.headerImageBox}>
                <ImageBackground
                  source={{ uri: match.profile.url }}
                  style={styles.headerImage}
                />
                </View>
                <Text style={styles.profileName}>{match.profile.name}</Text>
              </View>
            </Card>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

// Function to chunk the array into rows of 2
function chunkArray(arr, chunkSize) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  matchCard: {
    flex: 1,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  cardContent: {
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  profileName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
    headerImageBox: {
    width: '100%',
    height: 200,
    padding: 0,
    },

});

export default MatchesPage;
