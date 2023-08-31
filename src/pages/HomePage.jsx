import React from 'react';

import { Platform, Text, View } from 'react-native';

import Card from '../components/Card';

const userData = {
    name: 'Kuray Karaaslan',
    age: 24,
    location: 'Istanbul',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam tincidunt, nunc nisl ultrices nunc, nec al',
    images: [
        {
            id: 0,
            url: "https://fastly.picsum.photos/id/385/400/600.jpg?hmac=tEkfEBaPG75UmChKv3095dmFj_B6f3HA-5OF3VkuUN4"
        },
        {
            id: 1,
            url: "https://fastly.picsum.photos/id/84/400/600.jpg?hmac=ziP8Wcw7r8D9J9Ql8uSm21CE8w-27kcCC1rE8wojyK0"
        },
        {
            id: 2,
            url: "https://fastly.picsum.photos/id/516/400/600.jpg?hmac=ap61McvhUgqpZIxbkNldeEPrhBMbGgE_JG8wc1qzuko"
        }
    ],
    imagesIndex: 0
}

const userData2 = {
    name: 'Burak Uzun',
    age: 24,
    location: 'Istanbul',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id aliquam tincidunt, nunc nisl ultrices nunc, nec al',
    images: [
        {
            id: 0,
            url: "https://fastly.picsum.photos/id/385/400/600.jpg?hmac=tEkfEBaPG75UmChKv3095dmFj_B6f3HA-5OF3VkuUN4"
        },
        {
            id: 1,
            url: "https://fastly.picsum.photos/id/84/400/600.jpg?hmac=ziP8Wcw7r8D9J9Ql8uSm21CE8w-27kcCC1rE8wojyK0"
        },
        {
            id: 2,
            url: "https://fastly.picsum.photos/id/516/400/600.jpg?hmac=ap61McvhUgqpZIxbkNldeEPrhBMbGgE_JG8wc1qzuko"
        }


    ],
    imagesIndex: 2
}


const HomePage = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#d4d4d4' }}>
            <Card props={{ userData: userData, cardState: { stackPosition: 'top' } }} />
            <Card props={{ userData: userData2, cardState: { stackPosition: 'bottom' } }} />
        </View>
    );
}

// This demo is using a external compiler that will only work in Expo Snacks.

export default HomePage;


