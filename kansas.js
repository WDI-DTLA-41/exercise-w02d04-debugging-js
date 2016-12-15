var inKansas = false;

var start = function() {

  var scarecrow = {
    head: {}
  }
  var tinMan = {
    heart: []
  }
  var lion = {
    traits: ['cowardice', 'fleas']
  }
  var oz = {
    great: true,
    powerful: true
  }
  var witches = {
    north: {
      isWicked: false
    },
    east: {
      isWicked: true
    },
    south: {
      isWicked: true
    },
    west: {
      isWicked: true
    }
  }

  while ( !inKansas ){
    // We've paused execution in debugger.
    // We'll have access to the data in our program
    // To continue click
    debugger;
  }

  while ( !scarecrow.head.brain ) {
    debugger;
  }

  while ( !tinMan.heart.length ) {
    debugger;
  }

  while ( !!lion.traits.indexOf('courage') && lion.traits.includes('cowardice') ) {
    debugger;
  }

  while ( oz.great && oz.powerful ) {
    debugger;
  }

  while ( witches.east.isWicked && !!!witches.west.isDry ) {
    debugger;
  }

  document.body.textContent = 'We made it!';
}
