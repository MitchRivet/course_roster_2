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

courseRoster.directive("samplecoursetwo", function() {
  return {
    scope:{
      coursename:"@"
    },
    template: '<div>{{coursename}}</div>',

  }
})

courseRoster.directive("debug", function ($compile) {
  return{
    terminal: true,
    priority: 1000000,
    link: function (scope, element) {
      var clone = element.clone();
      element.attr("style", "color:red");
      clone.removeAttr("debug");
      var clonedElement = $compile(clone)(scope);
      element.after(clonedElement);
    }
  }
})
