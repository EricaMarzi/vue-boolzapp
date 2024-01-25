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
            const nuovoMessaggio = {
                id: 12,
                date: '10/01/2020 15:30:55',
                text: this.newMessage,
                status: 'sent'
              } 
              this.contacts.messages.push(nuovoMessaggio)
        }
    }
});

app.mount('#root')




/*
        const nuovoMessaggio = {
          id: 0734097, => da generare
          date: '10/01/2020 15:30:55', => prendere dinamicamente
          text: this.newMessage
          status: 'sent'
        } 
        this.contacts.messages.push(nuovoMessaggio)=> pushato dentro messages che è dentro currentContacts
*/