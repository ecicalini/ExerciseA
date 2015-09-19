A simple UI component that show last week trend of a product.

#Dependency

* angularjs, available on bower.

#Installation

<pre>
<code>
:~/ExerciseA$ bower install
bower cached        git://github.com/angular/bower-angular.git#1.4.6
bower validate      1.4.6 against git://github.com/angular/bower-angular.git#~1.4.5
bower install       angular#1.4.6

angular#1.4.6 bower_components/angular
</pre>
</code>

#Code example

```html
<!DOCTYPE html>
<!-- application module -->
<html ng-app="cardStatusApp">
<head>
	<meta charset="UTF-8">
	<title>CardStatus</title>
	<!-- stylesheets -->
	<link rel="stylesheet" href="../views/css/custom.css">
	<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/3.2.1/css/font-awesome.min.css" media="all" rel="stylesheet" type="text/css">
	<!-- dependency -->
	<script src="../../bower_components/angular/angular.js"></script>
</head>
<body>

<!-- UI component tag -->
<card-status></card-status>

<!-- application scripts -->
<script src="../cardStatusApp.js"></script>
<script src="../controllers/cardStatusCtrl.js"></script>
<script src="../directives/cardStatusDirective.js"></script>

</body>
</html>
```

The below UI component works with static data: if you want run it with dynamic data, you'll must modify the controller

<pre>
/ExerciseA/app/controllers/cardStatusCtrl.js
</pre>

#Run the example

Load **file:///your/path/ExerciseA/app/views/CardStatus.html** on browser.
