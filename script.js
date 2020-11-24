
let date = new Date();
const myApp = new Vue ({
    el: '#root',
    data: {
        search: '',
        myProfile: {myName: 'Marco Taba', myImg: 'img/avatar_io.jpg'},
        contacts: [...contatti],
        contactIndex: 0,
        textBox: ''
    },
    methods: {
        send: function () {
            this.contacts[this.contactIndex].message.push({
                text: this.textBox,
                sent: true,
                date: updateDate()
            });
            this.textBox = '';
            this.autoscroll();
            setTimeout(this.received, 3000);
        },
        received: function () {
            let id = this.contacts[this.contactIndex].id;
            this.contacts[id].message.push ({
                text: quotes[Math.floor(Math.random() * quotes.length)],
                sent: false,
                date: updateDate()
            });
            this.autoscroll();
        },
        autoscroll: function(){
        Vue.nextTick(function(){
        let chatBox = document.getElementById('chatBox');
        chatBox.scrollTop = chatBox.scrollHeight;
        })
        }
    },
    computed: {
        searchedContact() {
           return this.contacts.filter((el) => el.name.toLowerCase().includes(this.search.toLowerCase()));
        }
    }
})

