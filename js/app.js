var app = new Vue({

    el: '#app',

    data: {

        title: 'My VueJS to-do list',

        message: null,

        model: {
            text: '',
            done: false
        },

        list: [
            { text: 'Go to work', done: true },
            { text: 'Code all day', done: false },
            { text: 'Rocks', done: false }
        ]
    },

    methods: {
        add: function (event) {

            event.preventDefault();
            
            this.message = null;

            this.list.push(this.model);

            this.model = {
                text: '',
                done: false
            };
        },

        remove: function (index) {
            this.list.splice(index, 1);
        }
    }
});