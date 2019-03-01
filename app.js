const app = angular.module('app', [])

app.controller('MyController', function ($scope) {
  $scope.message = 'Hello'
})

app.component('helloComponent', {
  template: `
    <div>
        Message: {{$ctrl.message}}
    </div>
    `,
  bindings: {
    message: '<'
  },
  controller: function () {
    console.log('this.message: ', this.message);
    this.$onInit = () => {
      console.log('$onInit this.message: ', this.message);
    }
    setTimeout(() => {
      console.log('setTimeout this.message: ', this.message);
    }, 0)
  }
})
