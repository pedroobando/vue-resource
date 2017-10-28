let urlUsers = 'https://randomuser.me/api/?results=30';

new Vue({
  el: '#appVue',
  data: {
    people: {},
    lists : [],
    modalShow: false
  },
  created: function() {
    this.getUsers();
  },
  methods: {
    getUsers: function() {
      this.$http.get(urlUsers).then(function(larespuesta) {
        this.lists = larespuesta.data.results;
      })
    },
    showPeople: function (index, _people) {
      this.people = _people;
      this.modalShow = true;
    }
  },
})