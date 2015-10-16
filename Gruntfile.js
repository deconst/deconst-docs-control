module.exports = function (grunt) {
    grunt.initConfig({
        deconst_assets: {
            assets: {
                options: {
                    files: ['assets/**/*'],
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-deconst-assets');

    grunt.registerTask('build', ['deconst_assets:assets']);

    grunt.registerTask('default', ['build']);
};
