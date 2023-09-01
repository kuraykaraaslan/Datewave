import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, Avatar } from 'react-native-elements';

const InboxPage = () => {
  // Dummy data for messages (you can replace this with your actual data)
  const [messages, setMessages] = useState([
    {
      id: '1',
      sender: {
        name: 'Alice Smith',
        avatarUrl: 'URL_TO_JOHN_DOE_AVATAR_IMAGE',
      },
      subject: 'NEW MATCH! 🎉',
      message: 'You matched with Alice Smith on 10/08/2023.',
    },
    {
      id: '2',
      sender: {
        name: 'Anna Johnson',
        avatarUrl: '', // Empty avatar URL
      },
      subject: 'Your Turn',
      message: "Oh, I didn't see your message. Sorry about that.",
    },
    {
      id: '3',
      sender: {
        name: 'Sena Seker',
        avatarUrl: 'URL_TO_BOB_JOHNSON_AVATAR_IMAGE',
      },
      subject: 'Her Turn',
      message: 'Hey, how are you?',
    },
    // Add more messages as needed
  ]);

  return (
    <ScrollView style={styles.container}>
      {messages.slice(0, 10).map((item) => (
        <Card key={item.id} containerStyle={styles.messageCard}>
          <View style={styles.messageContent}>
            <Avatar
              rounded
              source={{ uri: item.sender.avatarUrl || null }}
              size="medium"
              containerStyle={[
                styles.avatarContainer,
                item.sender.avatarUrl ? null : { backgroundColor: 'white', borderWidth: 2, borderColor: 'red' },
              ]}
            />
            <View style={styles.messageDetails}>
              <Text style={styles.senderName}>{item.sender.name}</Text>
              <Text style={styles.messageSubject}>{item.subject}</Text>
              <Text style={styles.messageText}>{item.message}</Text>
            </View>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  messageCard: {
    marginBottom: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  messageContent: {
    flexDirection: 'row',
  },
  avatarContainer: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 75,
  },
  messageDetails: {
    flex: 1,
    marginLeft: 10,
  },
  senderName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  messageSubject: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  messageText: {
    fontSize: 14,
    color: '#555',
  },
});

export default InboxPage;
