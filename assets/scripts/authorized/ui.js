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
  $('#characters-view').hide()
  $('#characters-update').hide()
  $('#characters-delete').hide()
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
  $('#home-button').hide()
  $('#characters-update').hide()
  $('#characters-delete').hide()
  $('#characters-view').hide()
}
const onIndexFailure = function (error) {
  $('#home-message-authenticated').html(`<p>${error.responseJSON.message}</p>`)
}
const onCreateFailure = function (error) {
  $('#newCharacterModalLabel').text(error.responseJSON.message)
}
const onViewFailure = function (error) {
  if (error.statusText === 'Unprocessable Entity') {
    $('#viewCharacterModalLabel').text('That is not a valid ID')
  } else {
    $('#viewCharacterModalLabel').text(error.responseJSON.message)
  }
}
const onViewSuccess = function (responseData) {
  const character = responseData.character
  const characterHTML = (`
    <div>
      <h4>Name: ${character.firstName} ${character.lastName}</h4>
      <h5>Level: ${character.level}</h5>
      <p>Race: ${character.race}</p>
      <p>Age: ${character.age}</p>
      <p>Home: ${character.homeBase}</p>
      <p>ID: ${character._id}</p>
      <hr>
    </div>
    `)
  $('.characters-display').html(characterHTML)
  $('#viewCharacterModalLabel').text('Success')
  $('form').trigger('reset')
  $('#home-message-authenticated').html('<p>Your Character</p><hr>')
  $('#characters-index').show()
  $('#characters-new').show()
  $('#characters-update').show()
  $('#characters-delete').show()
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
        <p>ID: ${currentCharacter._id}</p>
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
  $('#characters-update').show()
  $('#characters-delete').show()
  $('#characters-new').show()
  $('#characters-view').show()
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
      <p>ID: ${character._id}</p>
      <hr>
    </div>
    `)
  $('#newCharacterModalLabel').text('Character Created Successfully')
  $('#home-message-authenticated').html('<p>Your New Character</p><hr>')
  $('.characters-display').html(characterHTML)
  $('form').trigger('reset')
  $('#characters-index').show()
  $('#characters-new').show()
  $('#characters-update').show()
  $('#characters-delete').show()
  $('.close').trigger('click')
}
const onDeleteSuccess = function () {
  $('#deleteCharacterModalLabel').text('May they rest in peace.')
  $('form').trigger('reset')
}
const onDeleteFailure = function (error) {
  if (error.statusText === 'Unprocessable Entity') {
    $('#deleteCharacterModalLabel').text('That is not a valid ID')
  } else {
    $('#deleteCharacterModalLabel').text(error.responseJSON.message)
  }
}
const onUpdateSuccess = function (characterData) {
  const character = characterData.character
  // basically the same as CREATE
  const characterHTML = (`
    <div>
      <h4>Name: ${character.firstName} ${character.lastName}</h4>
      <h5>Level: ${character.level}</h5>
      <p>Race: ${character.race}</p>
      <p>Age: ${character.age}</p>
      <p>Home: ${character.homeBase}</p>
      <p>ID: ${character._id}</p>
      <hr>
    </div>
    `)
  $('.characters-display').html(characterHTML)
  $('#updateCharacterModalLabel').text('Updated Successfully')
  $('form').trigger('reset')
  $('#home-message-authenticated').html('<p>Your Updated Character</p><hr>')
  $('#characters-index').show()
  $('#characters-new').show()
  $('#characters-update').show()
  $('#characters-delete').show()
  $('.close').trigger('click')
}
const onUpdateFailure = function (error) {
  if (error.statusText === 'Unprocessable Entity') {
    $('#updateCharacterModalLabel').text('That is not a valid ID')
  } else {
    $('#updateCharacterModalLabel').text(error.responseJSON.message)
  }
  $('#home-message-authenticated').html('<p>At least you tried.</p><hr>')
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
  // onMakeFormSuccess
  onDeleteSuccess,
  onDeleteFailure,
  onUpdateSuccess,
  onUpdateFailure,
  onViewFailure,
  onViewSuccess
}
