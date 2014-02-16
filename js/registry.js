var _globalConfig = {
  // NOTE: For versions >= v1.3.x and < v2.x, you must use `swfPath` by setting `moviePath`:
  //   `ZeroClipboard.config({ moviePath: ZeroClipboard.config("swfPath") });`
  // URL to movie, relative to the page. Default value will be "ZeroClipboard.swf" under the
  // same path as the ZeroClipboard JS file.
  swfPath: "ZeroClipboard.swf",

  // SWF inbound scripting policy: page domains that the SWF should trust. (single string or array of strings)
  trustedDomains: [window.location.host],

  // Include a "nocache" query parameter on requests for the SWF
  cacheBust: true,

  // Forcibly set the hand cursor ("pointer") for all clipped elements
  forceHandCursor: false,

  // The z-index used by the Flash object. Max value (32-bit): 2147483647
  zIndex: 999999999,

  // Debug enabled: send `console` messages with deprecation warnings, etc.
  debug: true,

  // Sets the title of the `div` encapsulating the Flash object
  title: null,

  // Setting this to `false` would allow users to handle calling `ZeroClipboard.activate(...);`
  // themselves instead of relying on our per-element `mouseover` handler
  autoActivate: true
};

var Registry = {

    currentMap:'{"tiles":[["wg1","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg2","wg3"],["wg4","t0","t0","t0","t0","t0","t0","t1","t2","t2","t2","t2","t2","t2","t2","t2","t3","t0","t0","wg5"],["wg4","t0","t1","t2","t2","t2","t3","t4","mp29","mp7","mp4","mp4","mp8","mp4","mp22","d2","t8","t0","t0","wg5"],["wg4","t0","t4","d1","mp22","d2","t8","t4","mp6","p1","t6","t6","t6","p2","mp11","mp20","t8","t0","t0","wg5"],["wg4","t0","t4","mp28","d0","mp32","t8","t4","mp1","t8","t1","t2","t3","t4","mp15","mp19","t8","t0","t0","wg5"],["wg4","t0","t5","p2","mp12","p1","t7","t4","mp1","t8","t4","pe1","t8","t4","mp11","mp20","t8","t0","t0","wg5"],["wg4","t0","t0","t4","mp13","p3","t2","p4","mp13","t8","t4","mp1","t8","t4","mp18","mp14","p3","t2","t3","wg5"],["wg4","t0","t0","t4","mp27","mp7","mp4","mp5","mp31","t8","t4","mp2","p3","p4","mp15","d0","mp37","d2","t8","wg5"],["wg4","t0","t0","t5","t6","t6","t6","t6","t6","t7","t4","mp15","mp37","mp38","mp35","mp35","mp36","mp32","t8","wg5"],["wg4","t0","t0","t0","t0","t0","t0","t0","t0","t0","t4","mp27","mp31","p1","t6","t6","t6","t6","t7","wg5"],["wg4","t0","t0","t0","t0","t0","t0","t0","t0","t0","t5","t6","t6","t7","t0","t0","t0","t0","t0","wg5"],["wg6","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg7","wg8"]],"extras":[["doodle5","none","doodle11","none","none","none","none","none","doodle1","doodle10","doodle11","none","none","doodle1","none","none","none","none","none","doodle4"],["none","doodle10","none","none","none","none","doodle1","none","none","clear","clear","none","doodle1","doodle1","doodle1","none","none","doodle11","none","none"],["none","none","none","none","none","none","none","doodle18","point","none","none","none","none","none","doodle13","point","none","none","none","none"],["none","none","none","none","markX","doodle18","none","doodle8","none","none","none","none","doodle18","none","none","none","doodle10","none","doodle10","none"],["doodle5","doodle6","doodle2","doodle17","none","none","none","doodle6","none","doodle5","none","doodle5","none","none","none","none","none","none","none","doodle10"],["none","none","none","none","none","none","doodle17","none","none","doodle8","doodle5","treasure","doodle9","none","none","doodle18","none","none","none","none"],["doodle10","doodle6","none","none","none","none","clear","doodle18","none","none","none","point","none","doodle7","none","none","none","doodle17","doodle17","none"],["none","none","none","none","point","none","doodle15","none","point","none","none","doodle14","none","none","none","clear","doodle13","point","doodle1","none"],["none","none","doodle6","none","none","none","none","none","none","doodle4","none","point","clear","point","doodle12","doodle15","none","gem","none","none"],["doodle11","doodle10","doodle5","none","doodle6","none","doodle6","none","none","none","none","doodle17","doodle2","none","doodle3","doodle10","doodle3","none","none","none"],["doodle11","doodle11","doodle10","doodle5","none","none","none","doodle18","none","none","doodle17","doodle5","none","none","doodle11","doodle11","none","doodle4","none","none"],["doodle5","doodle5","none","none","none","none","none","none","none","doodle5","doodle5","doodle6","none","none","doodle5","doodle5","none","none","none","doodle5"]]}'
};