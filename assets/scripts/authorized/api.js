'use strict'
const config = require('./../config')
const store = require('./../store')

const signUp = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
const signIn = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}
const changePassword = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const signOut = function () {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const view = function (characterData) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + characterData.character._id,
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const create = function (characterData) {
  return $.ajax({
    url: config.apiUrl + '/characters',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: characterData
  })
}
const destroy = function (formData) {
  const id = formData.character._id
  return $.ajax({
    url: config.apiUrl + '/characters/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const update = function (characterData) {
  return $.ajax({
    url: config.apiUrl + '/characters/' + characterData.character._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: characterData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  index,
  create,
  destroy,
  update,
  view
}
