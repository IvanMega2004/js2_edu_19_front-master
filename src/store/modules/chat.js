export default {
    state: {
        chats: [
            {
                id: 0,
                title: "Чат с Владимиром Андреевичем"
            },
            {
                id: 1,
                title: "Чат с Петром"
            },
            {
                id: 2,
                title: "Чат с Оксаной"
            }
        ],

        messages: [
            {
                id: 0,
                from: 1,
                chat: 0,
                text: "Добрый день, Петр!"
            },
            {
                id: 0,
                from: 2,
                chat: 0,
                text: "Здравствуйте, Владимир Андреевич!"
            }

        ]
    },


    getters: {
        chatMessages: state => id => {
            return state.messages.filter(message => message.chat == id)
        }

    },

    actions: {
        sendMessage({ state, commit }, messages) {

        }
    },

    mutations: {
        setMessages(state, message) {
            state.messages = message;
        }
    }





}