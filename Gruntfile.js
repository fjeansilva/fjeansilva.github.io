module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    responsive_images: {
      dev: {
        options: {
          engine: 'im'
        },
        sizes: [{
          name: 'small',
          width: 320,
          height: 240,
          quality: 0.4
        }, {
          name: 'medium',
          width: 640,
          quality: 0.4
        }, {
          name: 'large',
          width: 1024,
          suffix: '_x2',
          quality: 0.4
        }],
        files: [{
          expand: true,
          src: ['*.{jpg,gif,png}'],
          cwd: 'images',
          dest: 'dist/'
        }]
      }
    },

    pagespeed: {
      options: {
        nokey: true,
        url: 'http://portfolio-js.herokuapp.com/'
      },
      prod: {
        options: {
          url: 'http://portfolio-js.herokuapp.com/',
          locale: 'pt_BR',
          strategy: 'desktop',
          threshold: 80
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-pagespeed');
  grunt.loadNpmTasks('grunt-responsive-images');

  grunt.registerTask('default', ['responsive_images', 'pagespeed']);
}
