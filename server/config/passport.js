/**
 * Passport configuration
 *
 * This if the configuration for your Passport.js setup and it where you'd
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  }

  // soundcloud: {
  //   name: 'SoundCloud',
  //   protocol: 'oauth',
  //   strategy: require('passport-soundcloud').Strategy,
  //   options: {
  //     clientID: '7a9b6d08ffc80df2e8eaf0300a9694ac',
  //     clientSecret: '7935da0a3b1fdd6c527faa812bbb38d7'
  //   }
  // }
};
