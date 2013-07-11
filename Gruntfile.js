module.exports = function( grunt ) {

	//
	//
	// Setup
	//

	//
	// Node includes
	//
	var path = require( 'path' ),
		fs = require( 'fs' );

	//
	// Grunt module includes
	// Make sure all task here are defined in package.json `devDependenices`
	//
	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-css' );

	//
	// Vars
	//
	var config = {
		less: {},
		csslint: {}
	};

	// Less to css build
	config.less[ 'test-grid' ] = {
		options: {
			// Possible less include file paths
			paths: [
				'less'
			]
		},
		src:  'test/grid/test-grid.less',
		dest: 'test/grid/test-grid.css'
	};
	config.less[ 'test-helpers' ] = {
		options: {
			// Possible less include file paths
			paths: [
				'less'
			]
		},
		src:  'test/helpers/test-helpers.less',
		dest: 'test/helpers/test-helpers.css'
	};
	config.less[ 'test-reset' ] = {
		options: {
			// Possible less include file paths
			paths: [
				'less',
				'bower_components'
			]
		},
		src:  'test/reset/test-reset.less',
		dest: 'test/reset/test-reset.css'
	};

	// Lint css
	config.csslint[ 'test' ] = {
		rules: {
			'qualified-headings': false,
			'unique-headings': false,
			'adjoining-classes': false,
			'box-sizing': false,
			'star-property-hack': false,
			'floats': false
		},
		src: 'test/**/*.css'
	};


	grunt.registerTask( 'test', [ 'less'/*, 'csslint:test' - disabled for now, to many stupid errors */ ] );
	grunt.registerTask( 'default', [ 'less'/*, 'csslint:test' - disabled for now, to many stupid errors */ ] );

	//
	// Initialise and setup grunt
	//
	grunt.initConfig( config );

};
