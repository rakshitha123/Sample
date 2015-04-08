module.exports = function(grunt) {
// Project configuration.
  //var mozjpeg = require('imagemin-mozjpeg');

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
	
	/*imagemin: {                          // Task 
    static: {                          // Target 
      options: {                       // Target options 
        optimizationLevel: 3,
        svgoPlugins: [{ removeViewBox: false }]
        //use: [mozjpeg()]
      },
      files: {                         // Dictionary of files 

        'dist/img.jpg': 'src/img.jpg'           // 'destination': 'source' 
        
      }
    },
    dynamic: {                         // Another target 
      files: [{
        expand: true,                  // Enable dynamic expansion 
        cwd: 'src/',                   // Src matches are relative to this path 
        src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
        dest: 'dist/'                  // Destination path prefix 
 /*     }]
    }
  } ,*/
	
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

//grunt.loadNpmTasks('grunt-contrib-imagemin');
 
grunt.registerTask('default', ['useminPrepare','concat', 'uglify','usemin']); 
}