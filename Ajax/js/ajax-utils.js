(function (global)  {
	// body...
	var ajaxUtils ={};
//return an HTTP request object
	function getRequestObject() {
		// body...
		if(window.XMLHttpRequest()){
			return (new XMLHttpRequest());
		}
		else if(window.ActiveXObject){
			//For very old IE browser (optional)
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}
		else {
			global.alert("Ajax is not suppored!");
			return(null);
		}
	}
/*	var request = getRequestObject();
	var myhandler = null;*/
	//makes an ajax GET request to 'requestUrl'
	ajaxUtils.sendGetRequest =
		function (requestUrl, responseHandler, isJsoonResponse) {
			// body...
			//myhandler = responseHandler;
			var request = getRequestObject();
			request.onreadystatechange =  
				function() {
					(request, responseHandler, isJsoonResponse)
				};
			request.open("GET", request, true);
			request.send(null);//for POST only
		}

	//Only calls user provided 'responseHandler'
	// function if response is ready
	// and not an error
	function handleResponse(request, responseHandler, isJsoonResponse) {
		if((request.readyState == 4) && (request.status == 200)){
			responseHandler(request);
		}

		// Default to isJsonResponse = true
		if(isJsoonResponse == undefined) {
			isJsoonResponse =true;
		}

		if (isJsoonResponse) {
			responseHandler(JSON.parse(request.responseText));
		}
		else {
			responseHandler(request.responseText);
		}
	}

	// Expose utlity to the global object
	global.$ajaxUtils = ajaxUtils;

})(window);