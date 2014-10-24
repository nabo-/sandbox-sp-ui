module.exports = function (grunt) {
    'use strict';
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);
    grunt.loadNpmTasks('assemble');
    grunt.registerTask('build', ['copy', 'uglify', 'image', 'clean']);
    grunt.registerTask('default', ['copy:html', 'compass', 'connect', 'watch']);

    grunt.initConfig({

        watch: {
            javascript: {
                files: ['src/js/**/*.js'],
                tasks: ['copy:js']
            },
            compass: {
                files: ['src/scss/**/*.scss'],
                tasks: ['compass', 'copy:scss']
            },
            typescript: {
                files: ['src/ts/**/*.ts'],
                tasks: ['typescript', 'uglify']
            },
            image: {
                files: ['src/img/*.{png,jpg,gif}'],
                tasks: ['newer:image:dist']
            },
            copy: {
                files: ['src/html/*.html'],
                tasks: ['newer:copy:html']
            },
            options: {
               livereload: true
            }
        },
        clean: {
            build: {
                src: ['build/**/.DS_Store', 'src/**/.DS_Store', '**/.sass-cache']
            }
        },
        uglify: {
            dist: {
                files: {
                    // 出力ファイル: 元ファイル
                    'build/js/pullHeadImage-min.js': 'build/js/pullHeadImage.js'
                }
            }
        },
        typescript: {
          base: {
            src: ['src/ts/**/*.ts'],
            dest: 'build/js/pullHeadImage.js',
            options:{
                sourceMap: false,
                comments : true
            }
          }
        },
        copy: {
            scss: {
                files: [{
                    expand: true,
                    cwd: 'src/scss/',
                    src: ['**/*.scss'],
                    dest: 'build/scss/'
                }]
            },
            html: {
                files: [{
                    expand: true,
                    cwd: 'src/html/',
                    src: ['**/*.html'],
                    dest: 'build/'
                }]
            }
        },
        image: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img/'
                }],
                options: {
                    pngquant: true,
                    optipng: true,
                    advpng: true,
                    zopflipng: true,
                    pngcrush: true,
                    pngout: true,
                    mozjpeg: true,
                    jpegRecompress: true,
                    jpegoptim: true,
                    gifsicle: true,
                    svgo: true
                }
            }
        },

        connect: {
            livereload: {
                 options: {
                      port: 3001
                 }
            }
        },

        compass: {
            dist: {
                options: {
                    config: "config.rb"
                }
            }
        }

    });



};
