const data = {
  msg: 'hello Vue.js!',
  searched: [{asd: 1}],
  search: ''
}
const changeTitle = title => {
  data.msg = title
}

const searchOnTable = () => {
  console.log(this.searched)
}

const newUser = () => {
  console.log('new user')
}
export default {
  name: 'Badminton',
  data () {
    return data
  },
  methods: {
    changeTitle,
    searchOnTable,
    newUser
  }
}
