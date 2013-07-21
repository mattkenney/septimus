module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
          preserveComments: "some"
      },
      dist: {
        files: {
          'dist/js/<%= pkg.name %>.js': ['src/js/*.js']
        }
      }
    },
    aws: grunt.file.readJSON('credentials.json'),
    aws_s3: {
      options: {
        accessKeyId: "<%= aws.accessKeyId %>",
        secretAccessKey: "<%= aws.secretAccessKey %>",
        region: "<%= aws.region %>"
      },
      deploy: {
        options: {
          bucket: 'www.phillytrain.com'
        },
        files: [
          { expand: true, cwd: "src/css", src: ['**/*.css', '**/*.gif', '**/*.png'], dest: 'css' },
          { expand: true, cwd: "src/ico", src: ['**/*.png'], dest: 'ico' },
          { expand: true, cwd: "dist/js", src: ['**/*.js'], dest: 'js' },
          { expand: true, cwd: "src", src: ['**/*.html', '**/*.ico'], dest: '.' }
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-aws-s3');

  grunt.registerTask('default', ['uglify', 'aws_s3']);
};

