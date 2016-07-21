
module.exports = function(grunt) {

    grunt.registerTask('serve', function() {

        console.log('Starting the application...');
        grunt.task.run(['concat', 'less', 'shell:start_app']);

    });

    grunt.initConfig({
        concat: {
            js: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'public/js/core.js',
                    'public/js/common_functions.js'
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
        less: {
            development: {
                files: {
                    'public/css/stylesheet.css': 'public/less/stylesheet.less'
                }
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
    grunt.loadNpmTasks('grunt-contrib-less');

};
