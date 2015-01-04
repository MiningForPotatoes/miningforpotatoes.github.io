module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		compass: {
			dist: {
				options: {
					sassDir: 'sass',
					cssDir: 'css',
                    outputStyle: 'compressed',
				},
			},
		},

		watch: {
            options: {
                spawn: false,
                livereload: true,
                dateFormat: function(time) {
                    var tm = new Date();
                    var hms = tm.getHours() + ":" + tm.getMinutes() + ":" + tm.getSeconds();
                    var dt = tm.getDate() + "/" + tm.getMonth() + 1 + "/" + tm.getFullYear();
                    grunt.log.writeln('Done in ' + time + 'ms at ' + hms.bold + ' on ' + dt.bold);
                    grunt.log.writeln('Waiting for more changes...'.cyan);
                },
            },
			css: {
                files: ['sass/*.scss'],
                tasks: ['compass'],
            },

            js: {
                files: ['js/libs/*.js','js/src/*.js'],
                tasks: ['uglify'],
            },
		},

        uglify: {
            options: {
                sourceMap: true,
                sourceMapName: 'js/global.source.map'
            },

            build: {
                src: ['js/libs/*.js','js/src/*.js'],
                dest: 'js/global.js'
            },
        },

        connect: {
            server: {
                options: {
                    port: 8000,
                    hostname: 'miningforpotatoes',
                    base: '../miningforpotatoes.github.io',
                },
            },
        },

        autoprefixer: {
            options: {
              browsers: ['last 2 versions', 'ie 8', 'ie 9']
            },
            "prefix dat shit": {
              src: 'css/*.css',
            },
          },
	});


	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.registerTask('default',['uglify','autoprefixer','connect','watch']);
}
