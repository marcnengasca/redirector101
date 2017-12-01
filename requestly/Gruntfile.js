/**
 *  @References
 * [0] http://gruntjs.com/getting-started to install grunt-cli
 * [1]: https://github.com/01org/grunt-zipup
 **/

module.exports = function (grunt) {

  grunt.initConfig({
    zipup: {
      package: {
        appName: 'Requestly',
        version: '2.2',
        files: [
          { cwd: 'src', src: '**', expand: true, dest: 'src' },
          { cwd: 'resources', src: '**', expand: true, dest: 'resources' },
          { src: 'manifest.json'}
        ],
        outDir: 'build'
      }
    }
  });

  grunt.loadNpmTasks('grunt-zipup');

  grunt.registerTask('default', ['zipup']);
};

