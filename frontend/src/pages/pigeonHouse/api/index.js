import request from '../../../utils/request'

const getAllUsers = () => {
  return request({
    url: 'user/all',
    method: 'get'
  })
}

const getAllEvents = () => {
  return request({
    url: 'event/all',
    method: 'get'
  })
}

const getHouses = data => {
  return request({
    url: 'event/houses',
    method: 'post',
    data
  })
}

const createHouse = data => {
  return request({
    url: 'event/create/',
    method: 'post',
    data
  })
}

const updateHouse = (eventId, data) => {
  return request({
    url: 'event/update/' + eventId,
    method: 'post',
    data
  })
}

const getHouse = eventId => {
  return request({
    url: 'event/' + eventId,
    method: 'get'
  })
}

const createPigeon = data => {
  return request({
    url: 'accident/create/',
    method: 'post',
    data
  })
}

const updatePigeon = (accidentId, data) => {
  return request({
    url: 'accident/update/' + accidentId,
    method: 'post',
    data
  })
}

const getPigeon = accidentId => {
  return request({
    url: 'accident/' + accidentId,
    method: 'get'
  })
}

export default { getAllUsers, getAllEvents, getHouses, updateHouse, getHouse, createHouse, updatePigeon, createPigeon, getPigeon }