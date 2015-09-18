app.controller("cardStatusCtrl", function($scope) {
	$scope.card = card;
	
	$scope.color = function (card) {
	    if (card.color) {
	        return card.color;
	    }

	    var letters = '012345'.split('');
	    var color = '#';
	    color += letters[Math.round(Math.random() * 5)];
	    letters = '0123456789ABCDEF'.split('');
	    for (var i = 0; i < 5; i++) {
	        color += letters[Math.round(Math.random() * 15)];
	    }

	    // assign the color so it doesn't freak out
	    card.color = color;

	    return color;
	};
});



var card = {
					"type": "b&g",
					"trend": {
						"average": 0.18494514529593289,
						"total": 17310,
						"week": 2,
						"l_week": 0.8153654353227466,
						"l_w_t": "+"
					}
				};