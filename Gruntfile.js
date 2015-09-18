// Project configuration.

module.exports = function( grunt ) {
grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  less: {
    development: {
      options: {
        paths: ["assets"],
        compress: true
      },
      files: {
        '<%= pkg.assets %>/css/app.css': '<%= pkg.dev %>/less/app.less'
      }
    }
  },

  cssmin: {
    options: {
      shorthandCompacting: false,
      roundingPrecision: -1,
      sourceMap: true
    },
    target: {
      files: {
        '<%= pkg.assets %>/css/app.min.css': ['<%= pkg.assets %>/css/app.css'],
      }
    },
  },

  uglify: {
    options: {
      banner: '/*! <%= pkg.name %> - v-<%= pkg.version %> - ' +
        '<%= grunt.template.today("hh:MM:ss dd-mm-yyyy") %> */\n',
      sourceMap: true  
    },    
    my_target: {
      files: {
        '<%= pkg.assets %>/js/app.min.js': [
          '<%= pkg.dev %>/js/jquery-1.11.3.min.js', 
          '<%= pkg.dev %>/js/bootstrap.js'
        ]
      }
    }
  },

  watch: {
    gruntfile: {
      files: 'Gruntfile.js',
      tasks: ['default:gruntfile'],
    },    
    scripts: {
      files: ['<%= pkg.dev %>/less/**/*.less','<%= pkg.dev %>/css/**/*.less','<%= pkg.dev %>/js/**/*.js'],
      tasks: ['less','cssmin','uglify'],
      options: {
        spawn: false
      },
    },
  }
  
});  

grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');


// default 
grunt.registerTask( 'default', ['less','cssmin','uglify','watch']);

};
