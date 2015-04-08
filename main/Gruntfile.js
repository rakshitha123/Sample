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
	
	useminPrepare: {
            html: 'index.html'
    },
	
	usemin: {
            html: ['dist/index.html']
    },
	
    uglify: {
	 options: {
        //  banner for inserting at the top of the result
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
		report:'min'
     }
   
    },
	
	
	
	jenkins: {
      serverAddress: 'http://localhost:8080'
    , username: 'icefresh'                       
    , password: 'icejen@1'                   
    }
	
});
grunt.loadNpmTasks('grunt-jenkins');

grunt.loadNpmTasks('grunt-contrib-concat');
 
grunt.loadNpmTasks('grunt-contrib-uglify');

grunt.loadNpmTasks('grunt-usemin');


grunt.registerTask('default', ['useminPrepare','concat', 'uglify','usemin']); 
}