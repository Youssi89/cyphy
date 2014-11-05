angular.module("cyphy.default.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("/default/templates/DesignSpace.html","<div>\r\n    <h1>Design Space</h1>\r\n    <div class=\"component-list col-lg-4\">\r\n        <h3><span class=\"fa fa-puzzle-piece\"></span>Used Components</h3>\r\n        <component-list ng-if=\"state.designTreeLoaded\"\r\n                        connection-id=\"\'my-db-connection-id\'\"\r\n                        workspace-id=workspaceId\r\n                        avm-ids=\"dataModels.avmIds\"></component-list>\r\n        <span ng-if=\"!state.designTreeLoaded\" class=\"component-list-load\">Loading...</span>\r\n    </div>\r\n    <div class=\"design-tree col-lg-4\">\r\n        <h3><span class=\"fa fa-cubes\"></span>Design Space Tree</h3>\r\n        <design-tree design-id=\"designId\" connection-id=\"\'my-db-connection-id\'\"></design-tree>\r\n    </div>\r\n    <div class=\"configurations-actions col-lg-4\">\r\n        <h3><span class=\"glyphicon glyphicon-th\"></span>\r\n            Configurations\r\n            <button ng-disabled=\"state.desertInputAvaliable === false\" class=\"btn btn-default btn-sm\" ng-click=\"calculateConfigurations()\">Calculate</button>\r\n        </h3>\r\n\r\n        <configuration-table ng-if=\"state.configurationsAvaliable\" configurations=\"dataModels.configurations\"></configuration-table>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/WorkspaceDetails.html","<div>\r\n    <h1>Workspace details</h1>\r\n    <div class=\"components col-lg-4\">\r\n        <h3><span class=\"fa fa-puzzle-piece\"></span>Components</h3>\r\n        <component-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></component-list>\r\n    </div>\r\n    <div class=\"design-spaces col-lg-4\">\r\n        <h3><span class=\"fa fa-cubes\"></span>Design Spaces</h3>\r\n        <design-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></design-list>\r\n    </div>\r\n    <div class=\"test-benches col-lg-4\">\r\n        <h3><span class=\"glyphicon glyphicon-saved\"></span>Test Benches</h3>\r\n        <test-bench-list data-connection-id=\"\'my-db-connection-id\'\" workspace-id=dataModel.workspaceId></test-bench-list>\r\n    </div>\r\n</div>");
$templateCache.put("/default/templates/Workspaces.html","<div>\r\n    <h1>Workspaces</h1>\r\n\r\n    <workspace-list data-connection-id=\"\'my-db-connection-id\'\"></workspace-list>\r\n</div>");}]);