const message = [
    {
        text: 'La marianna va in campagna',
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
                message: [...message],
                lastSeen: ''
            },
            {
                name: 'Fabio',
                propic: 'img/avatar_2.jpg',
                message: [...message],
                lastSeen: ''
            },
            {
                name: 'Samuele',
                propic: 'img/avatar_3.jpg',
                message: [...message],
                lastSeen: ''
            },
            {
                name: 'Luisa',
                propic:'img/avatar_4.jpg',
                message: [...message],
                lastSeen: ''
            }
        ],
        index: 0,
    }
})