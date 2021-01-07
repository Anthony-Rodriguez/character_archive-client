'use strict'
const authEvents = require('./authorized/events')
// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#home-button').hide()
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#characters-index').on('click', authEvents.onIndexCharacters)
  $('#new-character').on('submit', authEvents.onCreateCharacter)
})
