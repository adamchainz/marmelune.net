module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      html: {
        files: [
          {
            expand: true,
            cwd: 'assets/html/',
            src: '**',
            dest: 'public/'
          }
        ]  
      },
      img: {
        files: [
          {
            expand: true,
            cwd: 'assets/img/',
            src: '**',
            dest: 'public/img'
          }
        ]
      },
      files: {
        files: [
          {
            expand: true,
            cwd: 'assets/files/',
            src: '**',
            dest: 'public/files'
          }
        ]
      },
      fonts: {
        files: [
          {
            expand: true,
            cwd: 'assets/fonts/',
            src: '**',
            dest: 'public/fonts'
          }
        ]
      },
      glyphicons: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/bootstrap/dist/fonts/',
            src: '**',
            dest: 'public/fonts'
          }
        ]
      },
      galleria_theme: {
        files: [
          {
            expand: true,
            cwd: 'bower_components/galleria/src/themes/classic/',
            src: '**',
            dest: 'public/galleria'
          }
        ]
      }
    },
    less: {
      dev: {
        files: {
          "public/css/marmelune.css": "assets/css/marmelune.less"
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      dev: {
        files: {
          'public/js/marmelune.min.js': [
            'assets/js/marmelune.js'
          ],
          'public/js/libs.min.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/bootstrap/dist/js/bootstrap.js'
          ]
        }
      }
    },
    watch: {
      css: {
        files: ['assets/css/*.less'],
        tasks: ['less'],
        options: {
          nospawn: true
        }
      },
      html: {
        files: ['assets/html/*.html'],
        tasks: ['copy:html']
      },
      img: {
        files: ['assets/img/**'],
        tasks: ['copy:img']
      },
      files: {
        files: ['assets/files/**'],
        tasks: ['copy:files']
      },
      fonts: {
        files: ['assets/fonts/**'],
        tasks: ['copy:fonts']
      },
      js: {
        files: ['assets/js/*.js', 'bower_components/**.js'],
        tasks: ['uglify']
      }
    }
  });

  // Task loading.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['watch']);

};
