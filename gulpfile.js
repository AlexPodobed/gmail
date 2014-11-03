var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var notify = require('gulp-notify');
var connect = require('gulp-connect');


gulp.task('connect', function() {
    connect.server({
    	root: 'dist/',
    	port: 8888,
    	livereload: true
    })
});

gulp.task('less', function() {
    gulp.src('src/styles/**/*.less')
      .pipe(less())
      .pipe(gulp.dest('dist/styles'))
      .pipe(connect.reload());
});

gulp.task('js', function() {
    gulp.src('src/app/**/*.js')
      .pipe(concat("app.js"))
      .pipe(gulp.dest('dist/js/'))
      .pipe(connect.reload());  
});

gulp.task('copy-html-files', function() {
    gulp.src('src/**/*.html')
      .pipe(gulp.dest('dist/'))
      .pipe(connect.reload());
});

gulp.task('copy-bower-components', function () {
  gulp.src('src/libs/**')
    .pipe(gulp.dest('dist/libs'));
});

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', ['copy-html-files']);
    gulp.watch('src/app/**/*.js', ['js']);
    gulp.watch('src/styles/**/*.less', ['less']);

});
gulp.task('default', ['less', 'js', 'copy-html-files', 'copy-bower-components', 'connect' ,'watch']);