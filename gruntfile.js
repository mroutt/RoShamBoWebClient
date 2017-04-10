module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
			server: {
				options: {
					port: 9011,
					hostname: '*',
					index: 'index.html',
					livereload: true
				}
			}
		},
		watch: {
			files: ['**/*'],
			options: {
				livereload: true
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['connect', 'watch']);
}