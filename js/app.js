var app = new Vue({

    el: '#app',

    data: {

        title: 'My VueJS to-do list',

        message: null,

        model: {
            text: ''
        },

        list: [
            { text: 'Go to work' },
            { text: 'Code all day' },
            { text: 'Rocks' },
        ]
    },

    methods: {
        add: function () {

            if (!this.model || !this.model.text || !this.model.text.trim()) {
                this.message = 'Fill the "Your new to-do" field.';
                return;
            }

            this.message = null;

            this.list.push(this.model);

            this.model = {
                text: ''
            };
        },

        remove: function (index) {
            this.list.splice(index, 1);
        }
    }
});