var app = new Vue({
  
  el: '#app',
  
  data: {
    
    title: 'My VueJS to-do list',
    
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
      add: function() {
        
        this.list.push(this.model);
        
        this.model = {
            text: ''
        };
      }
  }
});