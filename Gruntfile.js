module.exports = function(grunt) {
// Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      dist: {
	   options: {
            separator: '\n\r',
            banner: '/*\nConcatinated JS file \n' +
                    'Author: IceFresh \n' +
                    'Created Date: <%= grunt.template.today("yyyy-mm-dd") %>' +
                    '\n */ \n'
        },
        src: 'js/*.js',
        dest: 'js/concat.js'
      }
    },
    uglify: {
	 options: {
        //  banner for inserting at the top of the result
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
     },
     build: {
        src: 'js/concat.js',
        dest: 'js/concat.min.js'
     }
    }
	
});

grunt.loadNpmTasks('grunt-contrib-concat');
 
grunt.loadNpmTasks('grunt-contrib-uglify');
 
//S7: the array of tasks
grunt.registerTask('default', ['concat', 'uglify']); 
}