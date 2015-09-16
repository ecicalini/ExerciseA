app.controller("cardStatusCtrl", function($scope) {
//	$scope.message = "";
//	$scope.left  = function() {return 100 - $scope.message.length;};
//	$scope.clear = function() {$scope.message = "";};
//	$scope.save  = function() {alert("Note Saved");};

	$scope.cardStatus = cardStatus;
});

var cardStatus ={
		"type": "loweance",
		"trend": {
			"average": 0.38403843878768384,
			"total": 67634,
			"week": 974,
			"l_week": 0.2068530241958797,
			"l_w_t": "+"
		}
};