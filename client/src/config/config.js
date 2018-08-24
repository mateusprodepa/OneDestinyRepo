import snowBg from '../assets/img/snowBg.png';

const endpoints = {
  NEWS_URL             : 'api/oneDestinyNews',
  LOGIN_URL            : 'api/oneDestinyLogin',
  REGISTER_URL         : 'api/oneDestinyRegister',
  USER_DATA_URL        : 'api/oneDestinyProfile',
}

const types = {
  GET_USER_DATA: 'GET_USER_DATA',
  SET_USER_DATA: 'SET_USER_DATA',
}

const tmp = {
  USER_IMG: "https://cdn.pixabay.com/photo/2018/04/18/18/56/user-3331257_960_720.png"
}

const background_images = {
  snow: snowBg,

}

const ONEDESTINY_TOKEN_KEY = 'ONEDESTINY_TOKEN_KEY'

export {
  tmp,
  types,
  endpoints,
  ONEDESTINY_TOKEN_KEY,
  background_images
}
