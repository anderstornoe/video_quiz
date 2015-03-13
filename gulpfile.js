
var gulp = require('gulp'),
    connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
        root: "builds/development/",
        livereload: true,
	port: 8888
    });
});

gulp.task('default', ['connect']);
