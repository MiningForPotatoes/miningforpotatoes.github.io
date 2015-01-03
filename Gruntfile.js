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
            options: {
                dateFormat: function(time) {
                    var tm = new Date();
                    var hms = tm.getHours() + ":" + tm.getMinutes() + ":" + tm.getSeconds();
                    var dt = tm.getDate() + "/" + tm.getMonth() + 1 + "/" + tm.getFullYear();
                    grunt.log.writeln('Done in ' + time + 'ms at ' + hms.bold + ' on ' + dt.bold);
                    grunt.log.writeln('Waiting for more changes...'.cyan);
                },
                spawn: false,
              },
			css: {
                files: ['**/*.scss'],
                tasks: ['compass'],
            },

            js: {
                files: ['js/src/*.js'],
                tasks: ['uglify'],
            },
		},

		coffee: {
  			compile: {
    			files: {
      				'js/script.js': 'coffee/script.coffee', // 1:1 compile into single file
    			}
  			}
		},

        uglify: {
            options: {
                sourceMap: true,
                sourceMapName: 'js/global.source.map'
            },

            build: {
                src: ['js/libs/*.js','js/src/*.js'],
                dest: 'js/global.js'
            }
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'miningforpotatoes',
                    base: '../miningforpotatoes.github.io',
                }
            }
        }
	});


	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default',['uglify','connect','watch']);
}
