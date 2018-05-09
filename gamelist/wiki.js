window.onload = function() {
    document.getElementById("wiki-search-input").focus();
};

function ajax (keyword) {
	$.ajax({ 
		url: "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + keyword + "&prop=info&inprop=url&utf8=&format=json",
		dataType: "jsonp",
		success: function(response) {
			console.log(response.query);
			showResults(response);
		},
	});
}

function showResults (callback) {

	for (var i = 0; i <= 9; i++) {
		$(".display-results").append("<div class='result-list result-" + i + "'>" + "<span class='result-title title-" + i + "'></span>" + "<br>" +"<span class='result-snippet snippet-" + i + "'></span>" + "<br>" + "<span class='result-metadata metadata-" + i + "'></span>" + "</div>" );
	}

	for (var m = 0; m <= 9; m++) {
		var title = callback.query.search[m].title;
		var url = title.replace(/ /g, "_");
		var timestamp = callback.query.search[m].timestamp;
		timestamp = new Date(timestamp);
		console.log(timestamp);
		$(".title-" + m).html("<a href='https://en.wikipedia.org/wiki/" + url + "' target='_blank'>" + callback.query.search[m].title + "</a>");
		$(".snippet-" + m).html(callback.query.search[m].snippet);
		$(".metadata-" + m).html((callback.query.search[m].size/1000).toFixed(0) + "kb (" + callback.query.search[m].wordcount + " words) - " + timestamp);
	}
}

$(".result-btn-wiki").click(function (event) {
	event.preventDefault();
	$(".display-results").html("");
	var keyword = $(".result-wiki-search-form-input").val();
	document.getElementById("result-wiki-search-form-input").blur();
	ajax(keyword);
});

$(".btn-wiki").click(function(event) {
	event.preventDefault();
	var keyword = $(".wiki-search-input").val();

	if (keyword !== "") {
		$(".result-wiki-search-form-input").val(keyword);
		$(".home").addClass('hidden');
   	 	$(".result").removeClass('hidden');
    	document.getElementById("wiki-search-input").blur();
   		$(".wiki-search-input").val("");
		document.getElementById("result-wiki-search-form-input").blur();	
		$(".display-results").html("");
		ajax(keyword);
	}
	
});