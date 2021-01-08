'use strict'
const api = require('./api')
const getFormFields = require('./../../../lib/get-form-fields')
const ui = require('./ui')

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
    .catch(ui.signOutFailure)
}
const onIndexCharacters = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onIndexError)
}
const onCreateCharacter = function (event) {
  event.preventDefault()
  const form = event.target
  const characterData = getFormFields(form)

  api.create(characterData)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}
// const onMakeForm = function (event) {
//   event.preventDefault()
//   api.index()
//     .then(ui.makeFormSuccess)
//     .catch(ui.makeFormFailure)
// }
const onDeleteCharacter = function (event) {
  event.preventDefault()
  const form = event.target
  const characterData = getFormFields(form)

  api.destroy(characterData)
    .then(ui.onDeleteSuccess)
    .catch(ui.onDeleteFailure)
}
const onUpdateCharacter = function (event) {
  event.preventDefault()
  const form = event.target
  const characterData = getFormFields(form)

  api.update(characterData)
    .then(ui.onUpdateSuccess(characterData))
    .catch(ui.onUpdateFailure)
}
module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onIndexCharacters,
  onCreateCharacter,
  onDeleteCharacter,
  // onMakeForm
  onUpdateCharacter
}
