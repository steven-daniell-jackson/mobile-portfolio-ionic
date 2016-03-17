angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.portfolio', {
    url: '/home',
    views: {
      'portfolio': {
        templateUrl: 'templates/portfolio.html',
        controller: 'portfolioCtrl'
      }
    }
  })

  .state('menu.overview', {
    url: '/overview',
    views: {
      'portfolio': {
        templateUrl: 'templates/overview.html',
        controller: 'overviewCtrl'
      }
    }
  })

  .state('menu.recentEntries', {
    url: '/recent',
    views: {
      'portfolio': {
        templateUrl: 'templates/recentEntries.html',
        controller: 'recentEntriesCtrl'
      }
    }
  })

  .state('menu.recentWebsites', {
    url: '/recent',
    views: {
      'portfolio': {
        templateUrl: 'templates/recentWebsites.html',
        controller: 'recentWebsitesCtrl'
      }
    }
  })

  .state('menu.previousWebsites', {
    url: '/previous',
    views: {
      'portfolio': {
        templateUrl: 'templates/previousWebsites.html',
        controller: 'previousWebsitesCtrl'
      }
    }
  })

  .state('menu.landingPages', {
    url: '/landing-pages',
    views: {
      'portfolio': {
        templateUrl: 'templates/landingPages.html',
        controller: 'landingPagesCtrl'
      }
    }
  })

  .state('menu.newsletters', {
    url: '/newsletters',
    views: {
      'portfolio': {
        templateUrl: 'templates/newsletters.html',
        controller: 'newslettersCtrl'
      }
    }
  })

  .state('menu.other', {
    url: '/other',
    views: {
      'portfolio': {
        templateUrl: 'templates/other.html',
        controller: 'otherCtrl'
      }
    }
  })

  .state('menu', {
    url: '/portfolio',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.contact', {
    url: '/contact',
    views: {
      'portfolio': {
        templateUrl: 'templates/contact.html',
        controller: 'contactCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/portfolio/home')

  

});