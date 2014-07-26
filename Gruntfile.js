module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['typescript']);

  grunt.initConfig({
    typescript: {
      base: {
        src: [
            'scripts/InputArea/StandardsCustomEvent.ts',
            'scripts/InputArea/Selection.ts',
            'scripts/InputArea/Selections.ts',
            'scripts/InputArea/TextChange.ts',
            'scripts/InputArea/IInputArea.ts',
            'scripts/InputArea/Detector.ts',
            'scripts/InputArea/TextArea.ts',
            'scripts/InputArea/JSCodeEditor.ts',
            'scripts/InputArea/ContentEditable.ts'
        ],
        dest: 'scripts/input-area.js',
        target: 'ES5',
        options: {
            'module': 'commonjs'
            //'sourceMap': true
        }
      }
    },
    watch: {
      scripts: {
        files: ['scripts/InputArea/*.ts'],
        tasks: ['default']
      }
    },
    cssmin: {
      minify: {
        expand: true,
        cwd: '',
        src: ['css/*.css', 'css/!*.min.css'],
        dest: '',
        ext: '.min.css'
      }
    }
  });
};

/*grunt init
npm install grunt-typescript --save-dev
 npm install grunt-contrib-watch --save-dev*/