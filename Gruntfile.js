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
        src: ['js/*.js'],
        dest: 'js/concat.js'
      }
    },
    uglify: {
	 options: {
        //  banner for inserting at the top of the result
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
     },
     dist: {
	   files:{
	     'js/concat.min.js':['<%=concat.dist.dest%>']
       }
	 }
    },
	jenkins: {
      serverAddress: 'http://localhost:8080'
    , username: 'icefresh'                       
    , password: 'icejen@1'                   
    }
	
});
runt.loadNpmTasks('grunt-jenkins');

grunt.loadNpmTasks('grunt-contrib-concat');
 
grunt.loadNpmTasks('grunt-contrib-uglify');
 
//S7: the array of tasks
grunt.registerTask('default', ['concat', 'uglify']); 
}