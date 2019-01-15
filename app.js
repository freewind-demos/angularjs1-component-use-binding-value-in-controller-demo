const app = angular.module('app', [])

app.controller('MyController', function ($scope) {
  $scope.message = 'Hello'
  $scope.onMessageChange = (message) => {
    console.log("Message changed to:", message);
  }
})

app.component('helloComponent', {
  template: `
    <div>
        Message: <input type="text" ng-model="$ctrl.message" ng-change="$ctrl.onMessageChange($ctrl.message)"/>
    </div>
    `,
  bindings: {
    message: '<',
    onMessageChange: '<'
  }
})
