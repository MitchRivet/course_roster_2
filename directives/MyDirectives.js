courseRoster.directive("hometext", function() {
  return {
    template: "Back to the beginning"
  }
});

courseRoster.directive("changeClass", function() {
  return function(scope, element, attrs) {
    element.bind("click", function() {
      element.toggleClass(attrs.changeClass);
    });
  }

});

courseRoster.directive("samplecourse", function() {
  return {
    template: "Add student to {{ course.name }}"
  }
});

courseRoster.directive("student", function () {
  return {
    scope:{
      add:"&"

    },
    template: '<input type="text" ng-model="value">' +
            '<button type="submit" class="btn" ng-click="add({name:value})">Add student</button>'
          }
});
