'use strict';

module.exports = function(grunt) {
  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          'angular-template-maker.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },
    karma: {
      unit: {
        configFile: 'test/karma.conf.js'
      },
      coverage: {
        configFile: 'test/karma.conf.js',
        reporters: ['spec' , 'coverage'],
        singleRun: true
      }
    }
  });

  grunt.registerTask('test', [
    'karma:unit'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'karma:coverage'
  ]);
};
