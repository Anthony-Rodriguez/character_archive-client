'use strict'
const store = require('./../store')

const signOutFailure = function (error) {
  $('#home-message-authenticated').html(`<p>${error.responseJSON.message}</p>`)
}
const signUpFailure = function (error) {
  $('#signUpModalLabel').text(error.responseJSON.message)
}
const signInFailure = function (error) {
  $('#signInModalLabel').text(error.responseJSON.message)
}
const changePasswordFailure = function (error) {
  $('#changePasswordModalLabel').text(error.responseJSON.message)
}
const signUpSuccess = function (response) {
  $('#signUpModalLabel').text('Signed Up Successfully!')
  $('form').trigger('reset')
}
const signInSuccess = function (response) {
  store.user = response.user
  $('#signInModalLabel').text('Signed In Successfully!')
  $('form').trigger('reset')
  $('#home-message-authenticated').html('<p>Welcome to your Archive</p>')
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('.close').trigger('click')
  $('#signInModalLabel').text('Sign In Below!')
  $('#characters-index').show()
  $('#characters-new').show()
  $('#characters-update').show()
  $('#characters-delete').show()
  $('#home-button').hide()
}
const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#changePasswordModalLabel').text('Password Changed Successfully!')
}
const signOutSuccess = function () {
  $('#home-message-unauthenticated').html('<p>Signed out Successfully!</p>')
  $('form').trigger('reset')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.container').hide()
  $('#message').hide()
}

const onIndexFailure = function () {
  $('#home-message-authenticated').html(`<p>${error.responseJSON.message}</p>`)
}
const onCreateFailure = function () {
  $('#newCharacterModalLabel').text(error.responseJSON.message)
}
const onIndexSuccess = function (responseData) {
  console.log(responseData)
  const characters = responseData.characters
  $('#characters-index').hide()
  $('#characters-new').hide()
  $('#characters-update').hide()
  $('#characters-delete').hide()
  $('#home-button').show()
}
const onCreateSuccess = function (responseData) {
  console.log(responseData)
  $('#newCharacterModalLabel').text("Character Created Successfully")
}
module.exports = {
  signOutFailure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signUpFailure,
  signInFailure,
  changePasswordFailure,
  signOutSuccess,
  onIndexSuccess,
  onIndexFailure,
  onCreateSuccess,
  onCreateFailure
}
