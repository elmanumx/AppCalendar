   angular.module("CalendarApp")
  .controller('menuCtrl', ['$scope','$mdSidenav','$location', function($scope, $mdSidenav,$location){
	  $scope.toggleSidenav = function(menuId) {

	    $mdSidenav(menuId).toggle();
	    $scope.toggleRight = buildToggler('left');
    $scope.isOpenRight = function(){
      return $mdSidenav('left').isOpen();
    };
	  };	  
	  $scope.menus = [
	      {
	          menuT: "Inicio",
	          menuL: "/",
	          menuI: "ico-2 mdi-action-home"
	      },
	       {
	          menuT: "Materias",
	          menuL: "/materias",
	          menuI: "ico-2 mdi-action-assignment"
	      },
	      {
	      	  menuT: "Notas",
	      	  menuL: "/notas",
	      	  menuI: "ico-2 mdi-image-edit"
	      },
	      {
	      	  menuT: "Eventos",
	      	  menuL: "/eventos",
	      	  menuI: "ico-2 mdi-action-event"
	      },
	      {
	      	  menuT: "perfil",
	      	  menuL: "/miperfil",
	      	  menuI: "ico-2 mdi-social-person"
	      }
	  ];
	 $scope.ira=function(dir){
	     $location.path(dir);
	     $scope.toggleSidenav('left');
	 }
	 $scope.back =  function(){
	 	javascript:window.history.back();
	 }
	
}])
  .controller('homeCtrl',function($scope){
	$scope.titulo = "home";
	$scope.materias = [];
	$scope.materias = [
 		{
 			nombreM: "Matematicas",
 			hora : "3:00 pm - 5:00pm",
 			id: 1
 		},
 		{
 			nombreM: "Ingles",
 			hora : "3:00 pm - 5:00pm",
 			id: 2
 		},
 		{
 			nombreM: "Etica",
 			hora : "3:00 pm - 5:00pm",
 			id: 3
 		}
 	];
})
 .controller('materiasCtrl',function($scope){
 	$scope.titulo = "Materias";
 	$scope.materias = [
 	{
 		nombreM: "Matematicas",
 			hora : "3:00 pm - 5:00pm",
 			id: 1
 		},
 		{
 			nombreM: "Ingles",
 			hora : "3:00 pm - 5:00pm",
 			id: 2
 		},
 		{
 			nombreM: "Matematicas",
 			hora : "3:00 pm - 5:00pm",
 			id: 1
 		},
 		{
 			nombreM: "Ingles",
 			hora : "3:00 pm - 5:00pm",
 			id: 2
 		},
 		{
 			nombreM: "Matematicas",
 			hora : "3:00 pm - 5:00pm",
 			id: 1
 		},
 		{
 			nombreM: "Ingles",
 			hora : "3:00 pm - 5:00pm",
 			id: 2
 		},
 		{
 			nombreM: "Matematicas",
 			hora : "3:00 pm - 5:00pm",
 			id: 1
 		},
 		{
 			nombreM: "Ingles",
 			hora : "3:00 pm - 5:00pm",
 			id: 2
 		},
 		{
 			nombreM: "Etica",
 			hora : "3:00 pm - 5:00pm",
 			id: 3
 		}
 	];
 })
 .controller("addMateriaCtrl",function($scope){
 	$scope.titulo = "Agregar Materia";
 })
 .controller('notasCtrl',function($scope){
 	$scope.titulo = "Notas";
 })
 .controller("addNotaCtrl",function($scope){
 	$scope.titulo = "Agregar Nota";
 })
 .controller('eventosCtrl',function($scope){
 	$scope.titulo = "Eventos";
 })
 .controller("addEventoCtrl",function($scope){
 	$scope.titulo = "Agregar Evento";
 })
 .controller('miperfilCtrl',function($scope){
 	$scope.titulo = "Mi perfil";
 })
 .controller('materiaCtrl',function($scope,$routeParams){
 	$scope.titulo = "materiaaa";
 	$scope.cve = $routeParams.id;
 });