# Character Archive

Utilize HTTP requests to create an archive of custom characters. This repo is for the front-end [deployed site](https://anthony-rodriguez.github.io/character_archive-client/) and speaks with the back-end [Back-end archive](https://github.com/Anthony-Rodriguez/character_archive) that was designed for this.

Create an account and sign in. You'll be give a page with a few buttons on it. Click on New Character to start making your first character. After the fields have been completed, submit the form to create your first character. The 'My Characters' button will show all the characters you have. 'View Character' will only show a single character that you choose via their ID. (This will be updated in the future). You can update your character by, you guessed it, pressing the update button. You'll have to input the ID for the character you want to update as well as fill out the entire form. Changing your password is simple, but there's no forgot-password functionality at the moment, so be careful! Signing out will prevent others from accessing your characters, so don't forget to sign out if you plan on keeping the window open!

## Planning Story

As a Dungeons & Dragons(D&D) DM, I find that there could be many more tools available to us to make our jobs easier. Oh alright, they exist, but they cost money. And as a DM without the capital to purchase those tools, I decided to make 'em myself!

In D&D, I have created a plethora of characters for my players to interact with. There's usually a long description associated with their appearance, and so I thought to myself. "Self, why not create an archive of all your characters?" So I decided to make a character archive where a user can store all of their characters for easy recall.

I began with the back-end  and finished that before beginning with the front end. Once it was complete, I deployed it and made simple user authorization scripts for the front end. I deployed the front end to ensure they would talk to each other. Once that was verified, I did front-end development while occasionally deploying to test the live site.

## Problem Solving Strategy

Console.log() is my best friend. Any time I had an error, I would use console.log() to narrow things down. I solved nearly all of my errors quickly this way. When I spent too much time on an error, I would open a support ticket and receive help from the instructors. Aside from those things, I also utilized my cohort by asking them questions.

## User Stories

- As a user, I want to sign up so I can have access to an archive
- As a user, I want to sign in so I can access my account
- As a user, I want to be able to change my password for security
- As a user, I want to sign out of my account to prevent others from using it.
- As a user, I want to be able to create a character
- As a user, I want to edit the characters I have
- As a user, I want to delete the characters I have made
- As a user, I want to know which characters I have made

## Technologies Used

- JavaScript
- HTML
- AJAX
- CSS
- jQuery
- Bootstrap

## Unsolved Problems/Planned Updates

- Actively testing for bugs.
- Planning to add a drop down menu of the characters to delete/update
- Characters take up too much space right now. Formatting needs to be done


## Wireframes

![unauthorized](https://i.imgur.com/atcpBzw.png)
![authorized](https://i.imgur.com/VJxEwA0.png)
![character view]([Imgur](https://i.imgur.com/cwmgtMr.png))
