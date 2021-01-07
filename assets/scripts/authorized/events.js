'use strict'
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')
const store = require('./../store')

const onSignUp = function (event) {
  // prevent the page from refreshing
  event.preventDefault()
  // assign the information from the form that was filled out
  const form = event.target
  // use getFormFields to translate the form info into legible data
  const data = getFormFields(form)
  // send the data to the api
  api.signUp(data)
    // show the user the result of the data being passed
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  // prevent the page from refreshing
  event.preventDefault()
  // assign the information from the form that was filled out
  const form = event.target
  // use getFormFields to translate the form info into legible data
  const data = getFormFields(form)
  // send the data to the api
  api.signIn(data)
    // show the user the result of the data being passed
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  // prevent the page from refreshing
  event.preventDefault()
  // assign the information from the form that was filled out
  const form = event.target
  // use getFormFields to translate the form info into legible data
  const data = getFormFields(form)
  // send the data to the api
  api.changePassword(data)
    // show the user the result of the data being passed
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}
const onSignOut = function (event) {
    // run api sign out function
    api.signOut()
      // display result to user
      .then(ui.signOutSuccess)
      .catch(ui.failure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
