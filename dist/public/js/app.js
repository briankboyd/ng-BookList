"use strict";
angular.module('app', ['famous.angular', 'app.layout']);

"use strict";
angular.module('app.layout', []);

"use strict";
angular.module('app.layout').controller('layoutCtrl', ["$scope", function($scope) {
  $scope.myGridLayoutOptions = {dimensions: [2, 3]};
  $scope.list = [{
    content: "hello",
    bgColor: "#b58900"
  }, {
    content: "world",
    bgColor: "#cb4b16"
  }, {
    content: "famous",
    bgColor: "#dc322f"
  }, {
    content: "angular",
    bgColor: "#d33682"
  }, {
    content: "is",
    bgColor: "#6c71c4"
  }, {
    content: "cool!",
    bgColor: "#268bd2"
  }];
}]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUuanMiLCJsYXlvdXQvbGF5b3V0Lm1vZHVsZS5qcyIsImxheW91dC9sYXlvdXQuY3RybC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLFFBQUEsT0FBQSxPQUFBLENBQUEsa0JBQUE7O0FDREE7QUFDQSxRQUFBLE9BQUEsY0FBQTs7QUNEQTtBQUNBLFFBQUEsT0FBQSxjQUFBLFdBQUEseUJBQUEsU0FBQSxRQUFBO0VBQ0EsT0FBQSxzQkFBQSxDQUFBLFlBQUEsQ0FBQSxHQUFBO0VBQ0EsT0FBQSxPQUFBLENBQUE7SUFDQSxTQUFBO0lBQ0EsU0FBQTtLQUNBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7S0FDQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0tBQ0E7SUFDQSxTQUFBO0lBQ0EsU0FBQTtLQUNBO0lBQ0EsU0FBQTtJQUNBLFNBQUE7S0FDQTtJQUNBLFNBQUE7SUFDQSxTQUFBOztJQUVBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ2ZhbW91cy5hbmd1bGFyJywgJ2FwcC5sYXlvdXQnXSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcC5sYXlvdXQnLCBbXSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcC5sYXlvdXQnKVxuICAuY29udHJvbGxlcignbGF5b3V0Q3RybCcsIGZ1bmN0aW9uKCRzY29wZSkge1xuICAgICRzY29wZS5teUdyaWRMYXlvdXRPcHRpb25zID0ge1xuICAgICAgZGltZW5zaW9uczogWzIsIDNdXG4gICAgfTtcblxuICAgICRzY29wZS5saXN0ID0gW1xuICAgICAge2NvbnRlbnQ6XCJoZWxsb1wiLCBiZ0NvbG9yOiBcIiNiNTg5MDBcIn0sXG4gICAgICB7Y29udGVudDpcIndvcmxkXCIsIGJnQ29sb3I6IFwiI2NiNGIxNlwifSxcbiAgICAgIHtjb250ZW50OiBcImZhbW91c1wiLCBiZ0NvbG9yOiBcIiNkYzMyMmZcIn0sXG4gICAgICB7Y29udGVudDogXCJhbmd1bGFyXCIsIGJnQ29sb3I6IFwiI2QzMzY4MlwifSxcbiAgICAgIHtjb250ZW50OiBcImlzXCIsIGJnQ29sb3I6IFwiIzZjNzFjNFwifSxcbiAgICAgIHtjb250ZW50OiBcImNvb2whXCIsIGJnQ29sb3I6IFwiIzI2OGJkMlwifVxuICAgIF07XG4gIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9