var app = angular.module("myApp", ['ngRoute']);
//Config
app.config(function($locationProvider,$routeProvider){

  $routeProvider.when("/latihan-ralali/",{
    templateUrl:"index.html",
    controller:"myCtrl",
    controllerAs:"myApp"
  }).when("/latihan-ralali/detail.html",{
    templateUrl:"detail.html",
    controller:"myCtrl",
    controllerAs:"myApp"
  });
  //Remove the hashtag #
  $locationProvider.html5Mode(true);
});

//Controller
app.controller("myCtrl", function($scope,$routeParams){

    $scope.articles=[{
       title:"Title number 1",
       id:"1",
       description:"Lorem ipsum dolor sit amet. Integer volutpat justo quis leo interdum tempus. Duis ut urna ante. Ut mauris tortor, pellentesque vitae finibus nec, accumsan vel mi. Mauris sagittis sapien mi, non mattis libero porttitor sit amet. Curabitur congue rutrum risus quis convallis. Proin pulvinar ex eu tellus porta efficitur. Phasellus lobortis vestibulum interdum. Duis pellentesque ex suscipit ligula hendrerit, in vulputate tortor porttitor. In nec turpis dapibus, feugiat orci eget, ornare nisl. Nullam vehicula magna sit amet nisl efficitur, sit amet condimentum turpis convallis. Donec tempor ultrices tellus vel placerat. Nunc vehicula tristique massa a tincidunt. Nulla ac justo at arcu vulputate semper vitae nec lacus.",
       author:"Galih",
       vote:"10",
       answer:"0"
   },
   {
       title:"Title number 2",
       id:"2",
       description:"Lorem ipsum dolor sit amet. Integer volutpat justo quis leo interdum tempus. Duis ut urna ante. Ut mauris tortor, pellentesque vitae finibus nec, accumsan vel mi. Mauris sagittis sapien mi, non mattis libero porttitor sit amet. Curabitur congue rutrum risus quis convallis. Proin pulvinar ex eu tellus porta efficitur. Phasellus lobortis vestibulum interdum. Duis pellentesque ex suscipit ligula hendrerit, in vulputate tortor porttitor. In nec turpis dapibus, feugiat orci eget, ornare nisl. Nullam vehicula magna sit amet nisl efficitur, sit amet condimentum turpis convallis. Donec tempor ultrices tellus vel placerat. Nunc vehicula tristique massa a tincidunt. Nulla ac justo at arcu vulputate semper vitae nec lacus.",
       author:"Ririn",
       vote:"11",
       answer:"0"
   },
   {
       title:"Title number 3",
       id:"3",
       description:"Lorem ipsum dolor sit amet. Integer volutpat justo quis leo interdum tempus. Duis ut urna ante. Ut mauris tortor, pellentesque vitae finibus nec, accumsan vel mi. Mauris sagittis sapien mi, non mattis libero porttitor sit amet. Curabitur congue rutrum risus quis convallis. Proin pulvinar ex eu tellus porta efficitur. Phasellus lobortis vestibulum interdum. Duis pellentesque ex suscipit ligula hendrerit, in vulputate tortor porttitor. In nec turpis dapibus, feugiat orci eget, ornare nisl. Nullam vehicula magna sit amet nisl efficitur, sit amet condimentum turpis convallis. Donec tempor ultrices tellus vel placerat. Nunc vehicula tristique massa a tincidunt. Nulla ac justo at arcu vulputate semper vitae nec lacus.",
       author:"Bowo",
       vote:"22",
       answer:"0"
   }];
   $scope.log=function(){
    console.log($routeParams.id);
   }
   $scope.numTest = 7;
});