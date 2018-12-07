const process = require('child_process')
const config = require('./config')
const express = require('express');
const figlet = require('figlet');
const MersenneTwister = require('mersenne-twister');
const colors = require('colors');
var generator = new MersenneTwister();

const app = express();

var figFonts = figlet.fontsSync()
console.log(('\n'+figlet.textSync('zion-control', {font: figFonts[Math.floor(generator.random() * figFonts.length)]})).green)

app.get('/:property/:environment/:command', function (req, res) {

  if (config[req.params.property][req.params.environment][req.params.command] == undefined) {
    res.status(404).send('Property, environment, or command not found in config')
  } else {
    try {
      let execResponse = process.execSync(config[req.params.property][req.params.environment][req.params.command], {encoding: 'ascii'})
      console.log(`Success: $(execResponse)`)
      res.status(200).send(execResponse)
    }
    catch(err) {
      console.log("ERROR: "+err)
      res.status(500).send(err)
    }
  }

  console.log('Request Property:', req.params.property)
  console.log('Environment:', req.params.environment)
  console.log('Command:', req.params.command)
  console.log(`This is Zion Control requesting immediate stand down of arms at Gate 3. We have the Nebuchadnezzar on approach. Let's open her up. Nebuchadnezzar, you are clear through Gate 3 to Bay 7.`)
});

app.listen(3000, function () {
  console.log('Zion Control is listening.');
});