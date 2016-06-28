var app = angular.module("myApp", ['ngRoute']);
//Config
app.config(function($locationProvider,$routeProvider){
  //routeProvider
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
app.controller("myCtrl", function($scope,$routeParams, $location){
    
    $scope.articles=[{
      title:"Title number 1",
      id:"1",
      description:"1 Lorem ipsum dolor sit amet. Integer volutpat justo quis leo interdum tempus. Duis ut urna ante. Ut mauris tortor, pellentesque vitae finibus nec, accumsan vel mi. Mauris sagittis sapien mi, non mattis libero porttitor sit amet. Curabitur congue rutrum risus quis convallis. Proin pulvinar ex eu tellus porta efficitur. Phasellus lobortis vestibulum interdum. Duis pellentesque ex suscipit ligula hendrerit, in vulputate tortor porttitor. In nec turpis dapibus, feugiat orci eget, ornare nisl. Nullam vehicula magna sit amet nisl efficitur, sit amet condimentum turpis convallis. Donec tempor ultrices tellus vel placerat. Nunc vehicula tristique massa a tincidunt. Nulla ac justo at arcu vulputate semper vitae nec lacus.",
      author:"Galih",
      vote:"10",
      answer:"0",
      answers:[]
  },
  {
      title:"Title number 2",
      id:"2",
      description:"2 Lorem ipsum dolor sit amet. Integer volutpat justo quis leo interdum tempus. Duis ut urna ante. Ut mauris tortor, pellentesque vitae finibus nec, accumsan vel mi. Mauris sagittis sapien mi, non mattis libero porttitor sit amet. Curabitur congue rutrum risus quis convallis. Proin pulvinar ex eu tellus porta efficitur. Phasellus lobortis vestibulum interdum. Duis pellentesque ex suscipit ligula hendrerit, in vulputate tortor porttitor. In nec turpis dapibus, feugiat orci eget, ornare nisl. Nullam vehicula magna sit amet nisl efficitur, sit amet condimentum turpis convallis. Donec tempor ultrices tellus vel placerat. Nunc vehicula tristique massa a tincidunt. Nulla ac justo at arcu vulputate semper vitae nec lacus.",
      author:"Ririn",
      vote:"11",
      answer:"2",
      answers:[
        {
           author : "Agung",
           content : "dudududuudududududu",
           vote:"11"

        },{
           author : "Meise",
           content : "lalallalala",
           vote:"-1"
        }
      ]
  },
  {
      title:"Title number 3",
      id:"3",
      description:"3 Lorem ipsum dolor sit amet. Integer volutpat justo quis leo interdum tempus. Duis ut urna ante. Ut mauris tortor, pellentesque vitae finibus nec, accumsan vel mi. Mauris sagittis sapien mi, non mattis libero porttitor sit amet. Curabitur congue rutrum risus quis convallis. Proin pulvinar ex eu tellus porta efficitur. Phasellus lobortis vestibulum interdum. Duis pellentesque ex suscipit ligula hendrerit, in vulputate tortor porttitor. In nec turpis dapibus, feugiat orci eget, ornare nisl. Nullam vehicula magna sit amet nisl efficitur, sit amet condimentum turpis convallis. Donec tempor ultrices tellus vel placerat. Nunc vehicula tristique massa a tincidunt. Nulla ac justo at arcu vulputate semper vitae nec lacus.",
      author:"Bowo",
      vote:"22",
      answer:"1",
      answers:[
        {
           author : "Ashari",
           content : "dedeeddededededede",
           vote:"-5"
        }
      ]
  }];
  // membuat object init dengan fungsi console.log routeParams
   $scope.init=function(){
    console.log($routeParams.id);
    // console.log($scope.articles.length);
    for (i = 0; i < $scope.articles.length; i++) {
      if($scope.articles[i].id == $routeParams.id) {
        $scope.idx = $scope.articles[i];
        //console.log($scope.idx);
        break;
      }
    }
   }
   // contoh array
   // $scope.a={
   //  vote:['bowo','galih']
   // };
   // console.log($scope.a);
});