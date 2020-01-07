import { AxiosInstance } from './types/index';
import { extend } from './helpers/util';
import Axios from './core/Axios.ts'


function createInstance(): AxiosInstance {
  const context = new Axios()
  const instance = Axios.prototype.request.bind(context)

  extend(instance, context)

  return instance as AxiosInstance
}

const axios = createInstance()

export default axios