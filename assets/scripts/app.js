'use strict'
const authEvents = require('./authorized/events')
const ui = require('./authorized/ui')

$(() => {
  $('.modal').on('hidden.bs.modal', function () {
    $(this).find('form').trigger('reset')
  })
  $('.modal').on('hidden.bs.modal', function () {
    ui.modalReset()
  })
  $('.authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#characters-index').on('click', authEvents.onIndexCharacters)
  $('#home-button').on('click', ui.onHomeSuccess)
  $('#new-character').on('submit', authEvents.onCreateCharacter)
  $('#delete-character').on('submit', authEvents.onDeleteCharacter)
  $('#update-character').on('submit', authEvents.onUpdateCharacter)
  $('#view-character').on('submit', authEvents.onViewCharacter)
})
