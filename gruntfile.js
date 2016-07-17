
module.exports = function(grunt) {

    grunt.registerTask('serve', function() {

        console.log('Starting the application...');
        grunt.task.run(['concat', 'shell:start_app']);

    });

    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'public/js/core.js'
                ],
                dest: 'build/js/scripts.js'
            },
            css: {
                src: [
                    'public/css/stylesheet.css'
                ],
                dest: 'build/css/styles.css'
            }
        },
        shell: {
            start_app: {
                command: 'npm start'
            }
        },
        watch: {
            js: {
                files: ['public/js/**/*.js'],
                tasks: ['concat:js', 'shell:start_app']
            },
            css: {
                files: ['public/css/**/*.css'],
                tasks: ['concat:css', 'shell:start_app']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

};