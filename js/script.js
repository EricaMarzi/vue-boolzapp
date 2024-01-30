const {createApp} = Vue;

const app = createApp({
    data(){
        return {
            user: data.user,
            contacts: data.contacts,
            currentId: 1,
            newMessage: '',
            searchText: '',
            showMenu: false,
            currentIdMessage: null 
        }
    },
    computed: {
        currentContact(){
            return this.contacts.find((contact) => (contact.id === this.currentId) )    
        },
        currentChat(){
            return this.currentContact.messages;
        },

        filteredContact(){
            const searchName = this.searchText.toLowerCase()
            return this.contacts.filter(contact => {
                return contact.name.toLowerCase().includes(searchName);
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
           this.currentChat.push(messageSent)
            this.newMessage =''

            setTimeout(() => {
                const messageReply = {
                    id: new Date().toISOString(),
                    date: new Date().toLocaleDateString(),
                    text: 'Okay',
                    status: 'received'
                } 
               this.currentChat.push(messageReply)
            }, 1000)
        },
        toggleMenu(){
            this.showMenu = !this.showMenu
        },

        getCurrentIdMessage(messageId){
            return this.currentIdMessage = messageId
        },

        showCurrentMenuMessage(messageId){
            if (this.showMenu && this.currentIdMessage === messageId)return 'd-block'
            else return 'd-none'
        },

        deleteMessage(messageId) {
            console.log(messageId)

           this.currentContact.messages =this.currentChat.filter((message) =>{
                if(message.id !== messageId)return true;
                return false;
            })  
        },

    }
});

app.mount('#root')