angular.module("cyphy.demoApp.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/docs/cyphy_components_docs.html","<!DOCTYPE html>\n<html data-ng-app=\"cyphy.demoApp\">\n<head>\n    <title>CyPhy Components Documentation</title>\n\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css\">\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"https://code.jquery.com/ui/1.11.1/themes/black-tie/jquery-ui.css\">\n    <link type=\"text/css\" href=\"//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\" rel=\"stylesheet\">\n\n    <link type=\"text/css\" rel=\"stylesheet\" href=\"cyphy-components-docs.css\">\n    <!--<link type=\"text/css\" rel=\"stylesheet\" href=\"../cyphy-components.css\">-->\n\n</head>\n<body>\n<div ng-controller=\"CyPhyComponentsDemoController\" class=\"container\">\n\n    <h1>cyphy.ui.components</h1>\n\n    <section ng-repeat=\"component in components\" id=\"{{ component.name }}\">\n        <div class=\"page-header\">\n            <h1>{{ component.name }}\n                <small>(cyphy.ui.{{ component.name }})</small>\n            </h1>\n        </div>\n\n        <div class=\"row\">\n            <div class=\"col-md-6 show-grid\" ng-include=\"component.template\">\n\n            </div>\n            <div btf-markdown class=\"col-md-6\" ng-include=\"component.docs\">\n            </div>\n        </div>\n            <div class=\"row\">\n                <tabset class=\"col-md-12\" ng-if=\"component.sources\">\n                    <tab ng-repeat=\"sourceFile in component.sources\"\n                         heading=\"{{sourceFile.fileName}}\"\n                         select=\"selectedSourceFile=sourceFile\">\n                        <div ui-codemirror\n                             ui-codemirror-opts=\"sourceFile.viewerOptions\"\n                             ng-model=\"sourceFile.code\"\n                             ui-refresh=\"selectedSourceFile\"\n                             >\n\n                        </div>\n                    </tab>\n                </tabset>\n            </div>\n\n    </section>\n\n</div>\n<script src=\"https://code.jquery.com/jquery-2.1.1.min.js\"></script>\n<script src=\"https://code.jquery.com/ui/1.11.1/jquery-ui.min.js\"></script>\n<script src=\"//cdnjs.cloudflare.com/ajax/libs/angular.js/1.2.20/angular.min.js\"></script>\n<script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js\"></script>\n<script src=\"http://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/0.10.0/ui-bootstrap-tpls.js\"></script>\n\n<script src=\"../cyphy-components.js\"></script>\n<script src=\"../cyphy-components-templates.js\"></script>\n\n<script src=\"cyphy-components-docs.js\"></script>\n<script src=\"cyphy-components-doc-templates.js\"></script>\n\n</body>\n</html>");
$templateCache.put("/library/WorkspaceList/docs/demo.html","<div data-ng-controller=\"WorkspaceListDemoController\">\n    <workspace-list></workspace-list>\n</div>");
$templateCache.put("/docs/docs_app.js","/*globals angular, require, window, console */\n\'use strict\';\n\nvar components = [\n    {\n        name: \'WorkspaceList\',\n        sources: [ \'demo.html\', \'demo.js\']\n    }\n];\n\nrequire(\'../library/WorkspaceList/docs/demo.js\');\n\n\nrequire(\'angular-sanitize\');\nwindow.Showdown = require(\'showdown\');\nrequire(\'angular-markdown-directive\');\n\nrequire(\'codemirrorCSS\');\nwindow.CodeMirror = require(\'code-mirror\');\n\nrequire(\'code-mirror/mode/htmlmixed\');\nrequire(\'code-mirror/mode/xml\');\nrequire(\'code-mirror/mode/javascript\');\n\nrequire(\'angular-ui-codemirror\');\n\n\nvar demoApp = angular.module(\n    \'cyphy.demoApp\',\n    [\n        \'cyphy.demoApp.templates\',\n        \'btford.markdown\',\n        \'ui.codemirror\',\n        \'ui.bootstrap\'\n    ].concat(components.map(function (e) {\n        return \'cyphy.ui.\' + e.name + \'.demo\';\n    }))\n);\n\ndemoApp.run(function () {\n    console.log(\'DemoApp run...\');\n});\n\ndemoApp.controller(\n    \'CyPhyComponentsDemoController\',\n    function ($scope, $templateCache) {\n\n        var fileExtensionRE,\n            codeMirrorModes;\n\n        fileExtensionRE = /(?:\\.([^.]+))?$/;\n\n        codeMirrorModes = {\n            \'js\': \'javascript\',\n            \'html\': \'htmlmixed\'\n        };\n\n        $scope.components = components.map(function (component) {\n            var sources,\n                viewerOptions,\n                fileExtension;\n\n            if (angular.isArray(component.sources)) {\n                sources = component.sources.map(function (sourceFile) {\n\n                    fileExtension = fileExtensionRE.exec(sourceFile);\n\n                    viewerOptions = {\n                        lineWrapping: true,\n                        lineNumbers: true,\n                        readOnly: \'nocursor\',\n                        mode: codeMirrorModes[fileExtension[1]] || \'xml\'\n                    };\n\n                    return {\n                        fileName: sourceFile,\n                        code: $templateCache.get(\'/library/\' + component.name + \'/docs/\' + sourceFile),\n                        viewerOptions: viewerOptions\n                    };\n                });\n            }\n\n            return {\n                name: component.name,\n                template: \'/library/\' + component.name + \'/docs/demo.html\',\n                docs: \'/library/\' + component.name + \'/docs/readme.md\',\n                sources: sources\n            };\n        });\n\n    });");
$templateCache.put("/library/WorkspaceList/docs/demo.js","/*globals console, angular*/\n\n\'use strict\';\n\nvar demoApp = angular.module(\'cyphy.ui.WorkspaceList.demo\', []);\n\ndemoApp.controller(\'WorkspaceListDemoController\', function ($scope) {\n    $scope.configurations = [\n        {\n            name: \'some name comes here...\'\n        },\n        {\n            name: \'config 2\'\n        }\n    ];\n});");
$templateCache.put("/library/WorkspaceList/docs/readme.md","`WorkspaceList` components lists all workspaces in a WebGME project that uses the `ADMEditor` meta-model.");}]);