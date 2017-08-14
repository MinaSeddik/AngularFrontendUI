var gulp = require('gulp');
var jshint = require('gulp-jshint');
var debug = require('gulp-debug');

gulp.task('MyTask', function () {
    console.log("My Very First gulp script");
});



gulp.task('jshint', function () {
    console.log("jshint task start");

    gulp.src(['./app/*.js', './app/**/*.js', '!./app/bower_components/**/*.js'])
        // .pipe(debug())
        .pipe(jshint(['.jshintrc']))
        .pipe(jshint.reporter('default'));
});