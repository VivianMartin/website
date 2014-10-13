/**
 * Created by Greg on 10/11/2014.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
            options: {
                noProcess: 'src/templates/**'
            },
            dev: {
                files: [
                    {
                        src: 'js/**',
                        dest: 'build/',
                        flatten: false,
                        expand: true,
                        cwd: 'src'
                    },
                    {
                        src: 'css/**/*.css',
                        dest: 'build/',
                        flatten: false,
                        expand: true,
                        cwd: 'src'
                    },
                    {
                        src: '**',
                        dest: 'build/inc',
                        flatten: true,
                        expand: true,
                        cwd: 'bower_components'
                    }
                ]
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: false,
                compress: false
            },
            dist: {
                files: {
                    'build/js/<%= pkg.name %>.min.js': ['build/js/<%= concat.dist.dest %>']
                }
            }
        },
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                files: {
                    'build/js/<%= pkg.name %>.js': ['src/js/**/*.js']
                }
            }
        },
        template: {
            dev: {
                options: {
                    data: {
                        scripts: [
                            'js/website.js',
                            'inc/angular.js',
                            'inc/ui-bootstrap-tpls.js'
                        ],
                        css: [
                            'inc/bootstrap.css',
                            'css/style.css'
                        ]
                    }
                },
                files: {
                    'build/index.html': ['src/templates/index.tpl']
                }

            }
        },
        wiredep: {

            target: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'build/index.html',   // .html support...
                ],

                // Optional:
                // ---------
                options: {
                    cwd: '',
                    dependencies: true,
                    devDependencies: false,
                    exclude: [],
                    fileTypes: {},
                    ignorePath: '',
                    overrides: {}
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-wiredep');

    // Default task(s).
    grunt.registerTask('default', ['concat','wiredep']);
    grunt.registerTask('dev', ['copy:dev','template:dev']);


};