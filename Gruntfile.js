'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    clean: {
      options: {
      },
      files: ['build/js/**/*.js']
      // output: ['build/*']
    },

    concat: {
      js: {
        src: ['resources/js/aa.js', 'resources/js/bb.js'],
        dest: 'build/js/ab.js'
      }
    },

    jshint: {
      files: ['resources/js/aa.js', 'resources/js/bb.js'],
      options: {
        // force: true
      }
    },

    uglify: {
      dev: {
        files: [{
          expand: true,
          cwd: 'build/js/',
          src: '**',
          dest: 'build/js/'
        }],
        options: {
          mangle: false,
          compress: {
            drop_console: true
          },
          beautify: true,
          sourceMap: false,
          sourceMapName: 'build/js/sourcemap.map'
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['clean', 'jshint', 'concat', 'uglify']);
};
