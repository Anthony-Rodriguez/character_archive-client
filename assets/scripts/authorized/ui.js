'use strict'
const store = require('./../store')

const failure = function (error) {
  $('#message').text(error.responseJSON.message)
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
  $('#signInModalLabel').text('Signed In Successfully!')
  $('form').trigger('reset')
  $('#home-message').html('<p>Signed In Successfully!</p>')
  store.user = response.user
  $('.authenticated').show()
  $('.unauthenticated').hide()
  $('.close').trigger('click')
  $('#signInModalLabel').text('Sign In Below!')
}
const changePasswordSuccess = function (response) {
  $('form').trigger('reset')
  $('#changePasswordModalLabel').text('Password Changed Successfully!')
}
const signOutSuccess = function () {
  $('#home-message').html('<p>Signed out Successfully!</p>')
  $('form').trigger('reset')
  $('.unauthenticated').show()
  $('.authenticated').hide()
  $('.container').hide()
  $('#message').hide()
}

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signUpFailure,
  signInFailure,
  changePasswordFailure,
  signOutSuccess
}
