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


	grunt.registerTask( 'default', [ 'less', 'csslint:test' ] );

	//
	// Initialise and setup grunt
	//
	grunt.initConfig( config );

};