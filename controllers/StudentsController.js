courseRoster.controller('StudentsCtrl', function StudentsCtrl($scope, $stateParams, CoursesFactory, UtilitiesFactory) {

  $scope.course = UtilitiesFactory.findById(CoursesFactory.courses, $stateParams.courseId)

  $scope.addStudent = function() {
    $scope.course.students.push({ name: $scope.studentName });
    $scope.studentName = null;
  }

});

courseRoster.controller("StudentCtrl", function ($scope) {
  $scope.addStudent = function(studentName) {
    $scope.course.students.push({ name: studentName });
    $scope.studentName = null;
    alert(studentName);
  }


});
