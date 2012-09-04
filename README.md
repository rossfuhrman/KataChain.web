# Kata Chain

Track your code katas with GitHub.

http://lifehacker.com/software/motivation/jerry-seinfelds-productivity-secret-281626.php

## Setup

* See .gems (Heroku gem manifest) for required gems.
* Setup a config/database.yml.  See config/database.sample.yml.
* Setup the initial database and start the application.

    $ rake db:schema:load
    $ rackup config.ru

## Usage

* Start the console:

    $ rake console:

* Once you add a user, it will be accessible like so:

    $ open http://localhost:9292/~rossfuhrman

* Add a user from GitHub.

    $ rake katachain:add USER=rossfuhrman

* Update all progresses from GitHub, should be ran nightly.

    $ rake katachain:update USER=
