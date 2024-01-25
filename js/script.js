const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            user: data.user,
            contacts: data.contacts,
            currentId: 1,
            newMessage: ''
        }
    },
    computed: {
        currentContact(){
            return this.contacts.find((contact) => (contact.id === this.currentId) )    
        }
    },
    methods: {
        sendNewMessage(){
            if (this.newMessage.trim() === '') {
                return; 
              }
            const messageSent = {
                id: luxon.DateTime.now().toLocaleString(),
                date: luxon.DateTime.now().toLocaleString(),
                text: this.newMessage,
                status: 'sent'
              } 
              this.contacts[this.currentContact][this.messages].push(messageSent)
              this.newMessage =''
        }
    }
});

app.mount('#root')



