let mix = require('laravel-mix');
const {GenerateSW, InjectManifest} = require('workbox-webpack-plugin');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */


mix.js('resources/assets/js/app.js', 'public/js')
    .stylus('resources/assets/styl/app.styl', 'public/css');

mix.copyDirectory('resources/assets/img', 'public/img');

mix.disableNotifications();

mix.browserSync('localhost:19400');

mix.webpackConfig({
    node: {
        fs: 'empty',
        net: 'empty',
    },
    output: {
        // https://github.com/GoogleChrome/workbox/issues/1534
        publicPath: ''
    },
    plugins: [
        // https://developers.google.com/web/tools/workbox/modules/workbox-webpack-plugin#configuration
        new InjectManifest({
            swSrc: './resources/assets/service-workers/sw.js',
            swDest: 'service-worker.js',
            importWorkboxFrom: 'local',

        }),
    ]
});