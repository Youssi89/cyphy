/*globals angular, require, window, console */
'use strict';

var components = [
    {
        name: 'WorkspaceList',
        sources: [ 'demo.html', 'demo.js']
    }
];

require('../library/WorkspaceList/docs/demo.js');


require('angular-sanitize');
window.Showdown = require('showdown');
require('angular-markdown-directive');

require('codemirrorCSS');
window.CodeMirror = require('code-mirror');

require('code-mirror/mode/htmlmixed');
require('code-mirror/mode/xml');
require('code-mirror/mode/javascript');

require('angular-ui-codemirror');


var demoApp = angular.module(
    'cyphy.demoApp',
    [
        'cyphy.demoApp.templates',
        'btford.markdown',
        'ui.codemirror',
        'ui.bootstrap'
    ].concat(components.map(function (e) {
        return 'cyphy.ui.' + e.name + '.demo';
    }))
);

demoApp.run(function () {
    console.log('DemoApp run...');
});

demoApp.controller(
    'CyPhyComponentsDemoController',
    function ($scope, $templateCache) {

        var fileExtensionRE,
            codeMirrorModes;

        fileExtensionRE = /(?:\.([^.]+))?$/;

        codeMirrorModes = {
            'js': 'javascript',
            'html': 'htmlmixed'
        };

        $scope.components = components.map(function (component) {
            var sources,
                viewerOptions,
                fileExtension;

            if (angular.isArray(component.sources)) {
                sources = component.sources.map(function (sourceFile) {

                    fileExtension = fileExtensionRE.exec(sourceFile);

                    viewerOptions = {
                        lineWrapping: true,
                        lineNumbers: true,
                        readOnly: 'nocursor',
                        mode: codeMirrorModes[fileExtension[1]] || 'xml'
                    };

                    return {
                        fileName: sourceFile,
                        code: $templateCache.get('/library/' + component.name + '/docs/' + sourceFile),
                        viewerOptions: viewerOptions
                    };
                });
            }

            return {
                name: component.name,
                template: '/library/' + component.name + '/docs/demo.html',
                docs: '/library/' + component.name + '/docs/readme.md',
                sources: sources
            };
        });

    });