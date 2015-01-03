module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
                    outputStyle: 'compressed',
				}
			}
		},

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['compass']
			}
		},

//		coffee: {
//  			compile: {
//    			files: {
//      				'js/script.js': 'coffee/script.coffee', // 1:1 compile into single file
//    			}
//  			}
//		}

        uglify: {
            options: {
                sourceMap: true,
                sourceMapName: 'js/global.source.map'
            },

            build: {
                src: ['js/libs/*.js','js/src/*.js'],
                dest: 'js/global.js'
            }
        }

//        connect: {
//            server: {
//                options: {
//                    port: 8000,
//                    hostname: 'mfp.dev',
//                }
//            }
//        }
	});
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default',['watch','uglify','connect']);
}
