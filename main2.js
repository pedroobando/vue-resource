let urlUsers = 'https://randomuser.me/api';

new Vue({
  el: '#appVue',
  created: function() {
    this.getUsers();
  },  
  data: {
    people: {},
    lists : [],
    modalShow: false
  },
  methods: {
    getUsers: function() {
      axios.get(urlUsers, {
        params: {
          results: 15
        }
      }).then(larespuesta => {
          this.lists = larespuesta.data.results;
        });
    },
    showPeople: function (index, _people) {
      this.people = _people;
      this.modalShow = true;
    }
  }
})