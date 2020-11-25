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
            id = this.contacts[this.contactIndex].id;
            this.contacts[id].message.push({
                text: this.textBox,
                sent: true,
                date: updateDate()
            });
            this.textBox = '';
            this.autoscroll();
            setTimeout(this.received, 3000);
        },
        received: function () {
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

// /* Switch for dark mode */
    function darkMode () {
    var headerLeft = document.getElementsByClassName('header-left')[0];
    headerLeft.classList.toggle("dark-mode");
    var headerRight = document.getElementsByClassName('header-right')[0];
    headerRight.classList.toggle('dark-mode');
    var mainRight = document.getElementsByClassName('main-right')[0];
    mainRight.classList.toggle('main-dark');
    var body = document.body;
    body.classList.toggle('dark-body');
    var contatti = document.getElementsByClassName('contacts')[0];
    contatti.classList.toggle('dark-mode');
    var textbox = document.getElementsByClassName('text-box')[0];
    textbox.classList.toggle('dark-mode');
    var message = document.getElementsByClassName('message')[0];
    message.classList.toggle('dark-box-text');
    
 }




