module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css'
				}
			}
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
		},

		coffee: {
  			compile: {
    			files: {
      				'js/script.js': 'coffee/script.coffee', // 1:1 compile into single file
    			}
  			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-coffee');
	grunt.registerTask('default',['watch','csslint','uglify','coffee']);
}
