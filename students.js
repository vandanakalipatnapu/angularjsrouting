 var app = angular.module('app2', ['ngRoute']);
app.controller('formsController', function($scope,$http) {
 //    $scope.student_data = function(){
 //    	 $http.get("http://192.168.199.239:3000/students")
 //       .then(function(response){
 //         $scope.students = response.data.students;
 //     });
 // }

 $scope.show = function(id){
  alert();
   // window.location = "show.html";
  $http.get("http://192.168.199.239:3000/students/"+id)
       .then(function(response){
          $scope.student_show = response.data.student;
          console.log( $scope.student_show)
          document.write($scope.student_show.name)
     });

}

$scope.destroy = function(id){
   // window.location = "show.html";
  $http.delete("http://192.168.199.239:3000/students/"+id)
       .then(function(response){
           // $scope.student_delete = response.data.student;
          alert("data is deleted");
     });

}

$scope.edit_student = function(id){
  // window.location = "newform.html";
  $http.get("http://192.168.199.239:3000/students/"+id)
  .then(function(response){
    $scope.student_edit = response.data.student
    

  });
}


//    $scope.student_data();
});

app.config(['$routeProvider' ,function($routeProvider){
          $routeProvider.when('/show/:id',{
            templateUrl: 'show.html'
          });

  }]); 


