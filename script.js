
const message = [
    {
        text: [],
        sent: true,
        date: new Date(),
    }
];


const myApp = new Vue ({
    el: '#root',
    data: {
        myProfile: {myName: 'Marco Taba', myImg: 'img/avatar_io.jpg'},
        contacts: [
            {
                name: 'Michele',
                propic: 'img/avatar_1.jpg',
                message: randomMessage = text[Math.floor(Math.random() * text.length)],
                lastSeen: ''
            },
            {
                name: 'Fabio',
                propic: 'img/avatar_2.jpg',
                message: randomMessage = text[Math.floor(Math.random() * text.length)],
                lastSeen: ''
            },
            {
                name: 'Samuele',
                propic: 'img/avatar_3.jpg',
                message: randomMessage = text[Math.floor(Math.random() * text.length)],
                lastSeen: ''
            },
            {
                name: 'Luisa',
                propic:'img/avatar_4.jpg',
                message: randomMessage = text[Math.floor(Math.random() * text.length)],
                lastSeen: ''
            }
        ],
        index: 0,
    }
})

