const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            user: data.user,
            contacts: data.contacts,
            currentId: 1,
            newMessage: '',
            searchText: ''
        }
    },
    computed: {
        currentContact(){
            return this.contacts.find((contact) => (contact.id === this.currentId) )    
        },

        // filteredContact(){
        //     const searchName = this.searchText.toLowerCase()
        //     return this.contacts.filter(contact => {
        //         if (contact.text.toLowerCase().includes(searchName))return true
        //         else return false
        //     })
        // }
    },
    methods: {
        sendNewMessage(){
            if (this.newMessage.trim() === '') {
                return; 
              }
            const messageSent = {
                id: new Date().toISOString(),
                date: new Date().toISOString(),
                text: this.newMessage,
                status: 'sent'
            } 
            this.currentContact.messages.push(messageSent)
            this.newMessage =''

            setTimeout(function() {
                const messageReply = {
                    id: new Date().toISOString(),
                    date: new Date().toISOString(),
                    text: 'Okay',
                    status: 'received'
                } 
                this.currentContact.messages.push(messageReply)
            }, 1000)
        },
    }
});

app.mount('#root')




