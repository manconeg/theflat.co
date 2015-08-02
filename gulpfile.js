var gulp = require("gulp"),
	sass = require("gulp-sass");

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function() {
	gulp.src('./assets/styles/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./assets/styles/css'));
} );

gulp.task('watch', function() {
	gulp.watch('./assets/styles/sass/*.scss', ['sass']);
});
