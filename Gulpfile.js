var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function (){
	gulp.src('app/assets/sass/main.sass')
		.pipe(sass())
		.pipe(gulp.dest('public/css'));


});