var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index.pug', { title: 'github.rachael.io', theme: 'github-theme' });
});

/**
 * Routes requests to /dynamic-bind-html to the demo contained in that submodule.
 * Sets appropriate static directories to support demo before rendering.
 * This may not be extensible. Remains to be seen. For now, works for the single demo.
 */
router.get('/dynamic-bind-html', function (req, res) {
  router.use(express.static('submodules/dynamic-bind-html'));
  router.use(express.static('submodules/dynamic-bind-html/demo'));
  res.render('dynamic-bind-html/demo/src/demo.html');
});

module.exports = router;
