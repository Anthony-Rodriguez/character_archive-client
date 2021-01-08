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
  $('#message').hide()
  $('.characters-display').html('')
}
const onHomeSuccess = function () {
  $('#home-message-authenticated').html('<p>Welcome to your Archive</p>')
  $('.unauthenticated').hide()
  $('.authenticated').show()
  $('.characters-display').html('')
  $('#characters-index').show()
  $('#characters-new').show()
  $('#characters-update').show()
  $('#characters-delete').show()
  $('#home-button').hide()
}
const onIndexFailure = function () {
  $('#home-message-authenticated').html(`<p>${error.responseJSON.message}</p>`)
}
const onCreateFailure = function () {
  $('#newCharacterModalLabel').text(error.responseJSON.message)
}
const onIndexSuccess = function (responseData) {
  // assign the array of character objects to a const
  const characters = responseData.character
  // declare empty HTML string to fill in later
  let charactersHTML = ''
  // for each character in the array, generate HTML
  characters.forEach(function (currentCharacter) {
    // each character has keys we want to show
    // firstName, lastName, homeBase, race, age, and level
    // the hr adds a horizontal line after every character
    const currentCharacterHTML = (`
      <div>
        <h4>Name: ${currentCharacter.firstName} ${currentCharacter.lastName}</h4>
        <h5>Level: ${currentCharacter.level}</h5>
        <p>Race: ${currentCharacter.race}</p>
        <p>Age: ${currentCharacter.age}</p>
        <p>Home: ${currentCharacter.homeBase}</p>
        <hr>
      </div>
      `)
    // add the HTML for each character into the empty string
    charactersHTML += currentCharacterHTML
  })
  // add HTML to DOM in character-display above the buttons
  $('.characters-display').html(charactersHTML)
  $('#home-message-authenticated').html('<p>Your Characters</p><hr>')
  $('#characters-index').hide()
  $('#characters-new').hide()
  $('#characters-update').hide()
  $('#characters-delete').hide()
  $('#home-button').show()
}
const onCreateSuccess = function (responseData) {
  const character = responseData.character
  // basically the same as INDEX, only there's no need for a loop
  const characterHTML = (`
    <div>
      <h4>Name: ${character.firstName} ${character.lastName}</h4>
      <h5>Level: ${character.level}</h5>
      <p>Race: ${character.race}</p>
      <p>Age: ${character.age}</p>
      <p>Home: ${character.homeBase}</p>
      <hr>
    </div>
    `)
  $('#newCharacterModalLabel').text("Character Created Successfully")
  $('#home-message-authenticated').html('<p>Your New Character</p><hr>')
  $('.characters-display').html(characterHTML)
  $('form').trigger('reset')
}
const onMakeFormSuccess = function (responseData) {
  // assign the array of character objects to a const
  console.log(responseData)
  const characters = responseData.character
  // declare empty HTML string to fill in later
  let charactersHTML = ''
  // for each character in the array, generate HTML
  characters.forEach(function (currentCharacter) {
  // this time we only want the name and level of the character
  // we'll add the _id as the value so we can target it later
  const currentCharacterHTML = (`
    <option value="${currentCharacter._id}">${currentCharacter.firstName}
     ${currentCharacter.lastName} Level: ${currentCharacter.level}
    </option>
    `)
  // add the HTML for each character into the empty string
  charactersHTML += currentCharacterHTML
})
  $('.custom-select').html(charactersHTML)
}
module.exports = {
  signOutFailure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signUpFailure,
  signInFailure,
  changePasswordFailure,
  onHomeSuccess,
  signOutSuccess,
  onIndexSuccess,
  onIndexFailure,
  onCreateSuccess,
  onCreateFailure,
  onMakeFormSuccess
}
