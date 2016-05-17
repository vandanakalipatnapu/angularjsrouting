
  var app1 = angular.module('app2', ['ngRoute']);

   app1.controller('formsController', function($scope,$http) {
      
       $scope.clear = function(){
         $scope.student.name="";
         $scope.student.email="";
         $scope.student.age="";
         $scope.student.dob="";
         $(".clr").hide();
     }

      $scope.studentdata = function(){
      $http.get("http://192.168.199.239:3000/students")
      .then(function(response){
      $scope.students = response.data.students;   
     });
 }

 $scope.show = function(id){

   // window.location = "show.html";
  $http.get("http://192.168.199.239:3000/students/"+id)
       .then(function(response){
          $scope.student_show = response.data.student;
          console.log( $scope.student_show)
          // document.write($scope.student_show.name)
     });

}

$scope.edit = function(id){
  // window.location = "newform.html";
  $http.get("http://192.168.199.239:3000/students/"+id)
  .then(function(response){
    $scope.student_edit = response.data.student
    $scope.student = $scope.student_edit
    

  });
}

 $scope.update = function(student){
    // alert(student);
          $http.put("http://192.168.199.239:3000/students/"+student,$scope.student)
    .then(function(response){

      $http.get("http://192.168.199.239:3000/students.json")
        .then(function(response){
          $scope.students=response.data.students;
           // $scope.clear();
        });
       
    });
}


$scope.destroy = function(id){
   // window.location = "show.html";
  var r = confirm("Do you want to delete ?");
if (r == true) {
  $http.delete("http://192.168.199.239:3000/students/"+id)
       .then(function(response){
           // $scope.student_delete = response.data.student;
           alert("your data is deleted")
        });
            } 
else {
    alert("your data is safe")
    } 
}
$scope.college = function(){
 $http.get("http://192.168.199.239:3000/colleges")
      .then(function(response){
      $scope.colleges = response.data.colleges;   
     });
    }


 

    $scope.create = function(student){
        $http.post("http://192.168.199.239:3000/students",student)
          .then(function(response){
          // alert(student.name);
          //student below is from rails create controller
          //we can use these student_details in create page to show after submitting
          $scope.student_details = response.data.student;

        console.log($scope.student_details)
           // $scope.clear();
        
        });
      }


});

      app1.config(['$routeProvider' ,function($routeProvider){
          $routeProvider.when('/index',{
            templateUrl: 'index.html'
          });

            $routeProvider.when('/show',{
            templateUrl: 'show.html'
          });

          //   $routeProvider.when('/delete',{
          // });

             $routeProvider.when('/edit',{
          });

  }]); 


    