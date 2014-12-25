/**
 * Created by Greg on 10/11/2014.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        distDir: 'build',
        clean: {
            dist: ['<%= distDir %>', '.tmp']
        },
        copy: {
            options: {
                noProcess: 'src/templates/**'
            },
            dist: {
                files: [
                    {
                        src: '*.html',
                        dest: '<%= distDir %>/',
                        flatten: false,
                        expand: true,
                        cwd: 'src'
                    },
                    {
                        src: 'js/**',
                        dest: '<%= distDir %>/',
                        flatten: false,
                        expand: true,
                        cwd: 'src'
                    },
                    {
                        src: 'css/**/*.css',
                        dest: '<%= distDir %>/',
                        flatten: false,
                        expand: true,
                        cwd: 'src'
                    },
                    {
                        src: 'bower_components/**',
                        dest: '<%= distDir %>/',
                        flatten: false,
                        expand: true,
                        cwd: ''
                    }
                ]
            }
        },
        useminPrepare: {
            options: {
                dest: '<%= distDir %>'
            },
            html: '<%= distDir %>/index.html'
        },
        usemin: {
            options: {
                //assetsDirs: ['css', 'js']
            },
            html: '<%= distDir %>/index.html'
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                mangle: true,
                compress: true
            }
        },
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            }
        },
        filerev: {
            options: {
                algorithm: 'md5',
                length: 8
            },
            dist: {
                src: ['<%= distDir %>/js/*.js','<%= distDir %>/css/*.css']
            }
        },
        template: {
            dev: {
                options: {
                    // inject template with our app js/css files
                    data: {
                        scripts: [
                            'js/**/*.js'
                        ],
                        css: [
                            'css/**/*.css'
                        ]
                    }
                },
                files: {
                    'src/index.html': ['src/templates/index.tpl']
                }

            }
        },
        wiredep: {

            dist: {

                // Point to the files that should be updated when
                // you run `grunt wiredep`
                src: [
                    'src/index.html'   // .html support...
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
        },
        less: {
            options: {
                paths: ["src/css"]
            },
            target: {
                files: {
                    "src/css/style.css": "src/css/style.less"
                }
            }
        },
        karma: {
            dev: {
                configFile: 'test/karma.conf.js',
                singleRun: true
            }
        },
        connect: {
            dev: {
                options: {
                    debug: true,
                    keepalive: true,
                    base: ['.','src']
                }
            },
            dist: {
                options: {
                    debug: false,
                    keepalive: true,
                    base: ['.','<%= distDir %>']
                }
            }
        }
    });

    // Load our plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-template');
    grunt.loadNpmTasks('grunt-wiredep');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-karma');

    // Define task(s).
    grunt.registerTask('default', ['dev']);
    grunt.registerTask('dist', ['clean','dev','copy','useminPrepare','concat','uglify','cssmin','filerev','usemin']);
    grunt.registerTask('dev', ['less','template','wiredep','test']);
    grunt.registerTask('test', ['karma:dev']);
    grunt.registerTask('serve', ['dev', 'connect:dev']);
    grunt.registerTask('serve-dist', ['dist', 'connect:dist']);

};