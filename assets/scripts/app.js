'use strict'
const authEvents = require('./authorized/events')
const ui = require ('./authorized/ui')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#characters-index').on('click', authEvents.onIndexCharacters)
  $('#home-button').on('click', ui.onHomeSuccess)
  $('#new-character').on('submit', authEvents.onCreateCharacter)
  $('#delete-character').on('submit', authEvents.onDeleteCharacter)
  $('#characters-delete').on('click', authEvents.onMakeForm)
})
