/*
* Overview Webpack version 4
*
* Plan:
* What is webpack?
* Diff Bundler and Task manager
* Webpack and other solutions
* Dependency graph
* First configuration on webpack
* */

/*
* * * What is Webpack?
*
* Inventor - Tobias Koppers
*
* * * Diff Bundler and Task manager
*
* * Task Runner
* Gulp, Grunt - task runner
* SASS -> CSS
* TPL -> HTML
* Babel -> JS
* Minification files
* and and ...
*
* Sequential execution of tasks.
*
* * Bundler
* Webpack - bundler
*
* HTML, JS, CSS and other types -> bundle -> browser or node, or electron
*
* Other bundlers: browserify, brunch, parcel, rollup (for bundles npm packages)
* */

/*
* Dependency graph
*
* Entry -> Webpack -> Output
*
* Entry [
*   app/index.js
*   app/component.js
*   app/helper.js
* ] -> Webpack [
*   Plugin [
*    Loaders ]
*   ]
* ] -> Output [
*   build/app.js
* ] -> split point [
*   build/0.js
* ]
* */

/*
* Life Circle Webpack
*
* Loader entry-point (входная точка) ->
*   Check injections with enhanced-resolve ->
*       Building dependency graph ->
*           Run loaders files ->
*               Run plugins
* */

/*
* Bundler - compiler modules in bundle
* Task Runner - run varied task (including run bundler)
* */


