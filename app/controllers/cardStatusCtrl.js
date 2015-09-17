app.controller("cardStatusCtrl", function($scope) {
	$scope.cardStatus = cardStatus;
	
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



var cardStatus =[{
					"type": "b&g",
					"trend": {
						"average": 0.08494514529593289,
						"total": 17310,
						"week": 2,
						"l_week": 0.8153654353227466,
						"l_w_t": "="
					}
				},
				{
					"type": "simrad",
					"trend": {
						"average": 0.6133917500264943,
						"total": 70575,
						"week": 332,
						"l_week": 0.05793289025314152,
						"l_w_t": "-"
					}
				},
				{
					"type": "loweance",
					"trend": {
						"average": 0.38925677933730185,
						"total": 93808,
						"week": 641,
						"l_week": 0.22807470220141113,
						"l_w_t": "="
					}
				},
				{
					"type": "vexilar",
					"trend": {
						"average": 0.2043683365918696,
						"total": 49948,
						"week": 798,
						"l_week": 0.5785112795419991,
						"l_w_t": "+"
					}
				},
				{
					"type": "raymarine",
					"trend": {
						"average": 0.8129399879835546,
						"total": 69519,
						"week": 441,
						"l_week": 0.45260154036805034,
						"l_w_t": "+"
					}
				},
				{
					"type": "garmin",
					"trend": {
						"average": 0.10468628141097724,
						"total": 82012,
						"week": 974,
						"l_week": 0.3328327878843993,
						"l_w_t": "="
					}
				},
				{
					"type": "gofree",
					"trend": {
						"average": 0.8946819310076535,
						"total": 55153,
						"week": 338,
						"l_week": 0.1315288522746414,
						"l_w_t": "+"
					}
				},
				{
					"type": "digital yacht",
					"trend": {
						"average": 0.13195025688037276,
						"total": 6707,
						"week": 468,
						"l_week": 0.8544898636173457,
						"l_w_t": "="
					}
				},
				{
					"type": "humminbird",
					"trend": {
						"average": 0.9779665695969015,
						"total": 65364,
						"week": 971,
						"l_week": 0.32045721681788564,
						"l_w_t": "="
					}
				}];