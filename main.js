
// let urlUsers = 'https://jsonplaceholder.typicode.com/users';

// Vue.component('people-card', {
//   props: ['image', 'fullname'],
//   template: '#bs-modal'
// })

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
      // this.lists = [3,4,5,6,7,8];
    },
    showPeople: function (index, _people) {
      this.people = _people;
      this.modalShow = true;
      // console.log(people);
    }

  },
  // components: {
  //   peoplecard: VueStrap.modal
  // }
})