
// const message = [
//     {
//         text: [],
//         sent: true,
//         date: new Date(),
//     }
// ];
let date = new Date();
let currentDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

const myApp = new Vue ({
    el: '#root',
    data: {
        myProfile: {myName: 'Marco Taba', myImg: 'img/avatar_io.jpg'},
        contacts: [
            {
                name: 'Michele',
                propic: 'img/avatar_1.jpg',
                lastSeen: 'Ultimo accesso alle 13:49',
                message: [
                    {
                        text: quotes[Math.floor(Math.random() * quotes.length)],
                        sent: false,
                        date: currentDate,
                    }
                ]
            },
            {
                name: 'Fabio',
                propic: 'img/avatar_2.jpg',
                lastSeen: 'Ultimo accesso alle 12:59',
                message: [
                    {
                        text:quotes[Math.floor(Math.random() * quotes.length)],
                        sent: false,
                        date: currentDate,
                    }
                ]
            },
            {
                name: 'Samuele',
                propic: 'img/avatar_3.jpg',
                lastSeen: 'Ultimo accesso alle 18:43',
                message: [
                    {
                        text:quotes[Math.floor(Math.random() * quotes.length)],
                        sent: false,
                        date: currentDate,
                    }
                ]
            },
            {
                name: 'Luisa',
                propic:'img/avatar_4.jpg',
                lastSeen: 'Ultimo accesso ieri',
                message: [
                    {
                        text:quotes[Math.floor(Math.random() * quotes.length)],
                        sent: false,
                        date: currentDate,
                    }
                ]
            }
        ],
        status: 0,
        contactIndex: 0,
        textBox: ''
    },
    methods: {
        send: function () {
            this.contacts[this.contactIndex].message.push({
                text: this.textBox,
                sent: true,
                date: currentDate
            });
            this.textBox = '';
            setTimeout(this.received, 3000);
        },
        received: function () {
            this.contacts[this.contactIndex].message.push ({
                text: quotes[Math.floor(Math.random() * quotes.length)],
                sent: false,
                date: currentDate
            });
        }
    }
})
