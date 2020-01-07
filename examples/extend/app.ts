import axios from '../../src/index.ts'

axios({
  method: 'post',
  url: '/extend/post',
  data: {
    msg: 'hi'
  }
})

axios.request({
  url: '/extend/post',
  method: 'post',
  data: {
    mag: 'hello'
  }
})

axios.get('/extend/get')

axios.options('/extend/options')

axios.delete('/extend/delete')

axios.put('/extend/put')

axios.patch('/extend/patch')