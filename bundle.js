(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var file = ":root {\n  --phi: 1.61803398875;\n  --golden: var(--phi);\n  --double-octave: 4;\n  --major-twelfth: 3;\n  --major-eleventh: 2.666666667;\n  --major-tenth: 2.5;\n  --octave: 2;\n  --major-seventh: 1.875;\n  --minor-seventh: 1.777777778;\n  --major-sixth: 1.666666667;\n  --minor-sixth: 1.6;\n  --fifth: 1.5;\n  --augmented-fourth: 1.41421;\n  --fourth: 1.333333333;\n  --major-third: 1.25;\n  --minor-third: 1.2;\n  --major-second: 1.125;\n  --minor-second: 1.066666667;\n}\n"

module.exports = function() {
  return file;
}()

},{}]},{},[1]);
