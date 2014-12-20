angular.module('app.layout')
  .controller('layoutCtrl', function($scope) {
    $scope.myGridLayoutOptions = {
      dimensions: [2, 3]
    };

    $scope.list = [
      {content:"hello", bgColor: "#b58900"},
      {content:"world", bgColor: "#cb4b16"},
      {content: "famous", bgColor: "#dc322f"},
      {content: "angular", bgColor: "#d33682"},
      {content: "is", bgColor: "#6c71c4"},
      {content: "cool!", bgColor: "#268bd2"}
    ];

  class View {
    constructor(options) {
      this.model = options.model;
      this.template = options.template;
    }

    render() {
      return _.template(this.template, this.model.toObject());
    }
  }
});