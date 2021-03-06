const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename");
const signale = require('signale');
const paths = {
	src: './docs/scss/**/*.scss',
	dest: './docs/css/'
}

const task = (cb) => {
	gulp.src(paths.src)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', (e) => {
			signale.error(e);
			return sass.logError;
		}))
		.pipe(rename("fui-site.css"))
		.pipe(gulp.dest(paths.dest));
	cb();
}

gulp.task('docs-site', task);
module.exports = task;