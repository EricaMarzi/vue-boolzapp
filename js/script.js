const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            user: data.user,
            contacts: data.contacts,
            currentId: 1,
            newMessage: '',
            searchText: '',
            showMenù: false,
            currentIdMessage: null 
        }
    },
    computed: {
        currentContact(){
            return this.contacts.find((contact) => (contact.id === this.currentId) )    
        },

        filteredContact(){
            const searchName = this.searchText.toLowerCase()
            return this.contacts.filter(contact => {
                return contact.name && contact.name.toLowerCase().includes(searchName);
            })
        },


    },
    methods: {
        sendNewMessage(){
            if (this.newMessage.trim() === '') {
                return; 
              }
            const messageSent = {
                id: new Date().toISOString(),
                date: new Date().toLocaleDateString(),
                text: this.newMessage,
                status: 'sent'
            } 
            this.currentContact.messages.push(messageSent)
            this.newMessage =''

            setTimeout(() => {
                const messageReply = {
                    id: new Date().toISOString(),
                    date: new Date().toLocaleDateString(),
                    text: 'Okay',
                    status: 'received'
                } 
                this.currentContact.messages.push(messageReply)
            }, 1000)
        },
        toggleMenù(){
            this.showMenù = !this.showMenù
        },

        getCurrentIdMessage(messageId){
            return this.currentIdMessage = messageId
        },

        showCurrentMenùMessage(messageId){
            if (this.showMenù && this.currentIdMessage === messageId){
                return 'd-block'
            } else {
                return 'd-none'
            }
            //  return this.showMenù ? 'd-block' : 'd-none'
        }
    }
});

app.mount('#root')




 // filteredContact(){
        //     const searchName = this.searchText.toLowerCase()
        //     return this.contacts.filter(contact => {
        //         if (contact.text.toLowerCase().includes(searchName))return true
        //         else return false
        //     })
        // }