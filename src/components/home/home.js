const data = {
  msg: 'hello Vue.js!'
}
const changeTitle = title => {
  data.msg = title
}
export default {
  name: 'Home',
  data () {
    return data
  },
  methods: {
    changeTitle
  }
}
