'use strict';

module.exports = function(grunt) {

  grunt.initConfig ({

    jshint: {
      dev: {
        options: {
          jshintrc: '../../../.jshintrc',
        },
        src: ['Gruntfile.js', 'app.js', 'index.js', 'lib/*.js', 'test/*.js']
      }
    },

    simplemocha: {
      all: {
        src: ['test/*.js']
      }
    },

    jscs: {
      all: {
        options: {
          config: true,
          preset: "google",
          force: true
        },
        files: {
          src: ['Gruntfile.js', 'app.js', 'index.js', 'lib/*.js', 'test/*.js']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');

  grunt.registerTask('test', ['jshint:dev', 'simplemocha:all', 'jscs:all']);

};
