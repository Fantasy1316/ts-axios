import axios from '../../src/index.ts'

axios({
  method: "get",
  url: "/simple/get",
  params: {
    a: 1,
    b: 2
  }
})