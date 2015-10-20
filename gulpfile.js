var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less-sourcemap');
var path = require('path');
var consolidate = require('gulp-consolidate');

// Build LESS
gulp.task('test', ['less:test-grid', 'less:test-helpers', 'less:test-reset']);

/**
 * LESS Grid build
 */
gulp.task('less:test-grid', function () {
	gulp.src(['./test/grid/test-grid.less'])
	.pipe(less({
		paths: [
			'./css/less',
			'./node_modules'
		]
	}))
	.on('error', function (error) {
		gutil.log(gutil.colors.red(error.message))
		// Notify on error. Uses node-notifier
		notifier.notify({
			title: 'Less compilation error',
			message: error.message
		})
	})
	.pipe(gulp.dest('./test/grid'));
});


/**
 * LESS Helpers build
 */
gulp.task('less:test-helpers', function () {
	gulp.src(['./test/grid/test-helpers.less'])
	.pipe(less({
		paths: [
			'./css/less',
			'./node_modules'
		]
	}))
	.on('error', function (error) {
		gutil.log(gutil.colors.red(error.message))
		// Notify on error. Uses node-notifier
		notifier.notify({
			title: 'Less compilation error',
			message: error.message
		})
	})
	.pipe(gulp.dest('./test/grid/test-helpers.css'));
});


/**
 * LESS Reset build
 */
gulp.task('less:test-reset', function () {
	gulp.src(['./test/grid/test-reset.less'])
	.pipe(less({
		paths: [
			'./css/less',
			'./node_modules'
		]
	}))
	.on('error', function (error) {
		gutil.log(gutil.colors.red(error.message))
		// Notify on error. Uses node-notifier
		notifier.notify({
			title: 'Less compilation error',
			message: error.message
		})
	})
	.pipe(gulp.dest('./test/grid/test-reset.css'));
});

