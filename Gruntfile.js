/**
 * Created by andrew on 10/12/15.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                },
            },
            less: {
                files: ['**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false,
                },
            },
            cssmin: {
                files: ['src/css/style.css'],
                tasks: ['cssmin'],
                options: {
                    spawn: false,
                },
            },
        },
        uglify: {
            app: {
                files: {
                    'assets/js/app.min.js': ['bower_components/bootstrap/dist/js/bootstrap.js', 'src/app.js']
                }
            }
        },
        less: {
            app: {
                options: {
                    paths: ["src/less"]
                },
                files: {
                    "src/css/style.css": "src/less/style.less"
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            style: {
                files: {
                    'style.css': ['src/css/style.css']
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['less']);
    grunt.registerTask('default', ['cssmin']);

};