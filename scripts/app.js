$(document).on("ready", function(){
  // function onReady(event)
 $.ajax({
   method: "GET",
   url: "http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC",
   dataType: "json",
   success: logSuccess,
   error: logError,
   complete: logComplete
 });

//search for images
   $('form').on("submit", searchReq);
    function searchReq(event){
      event.preventDefault();
      //clear out gif-gallery
      $('.gif-gallery').each(function(){
        $(this).text("");
      })
      $.ajax({
        method: "GET",
        url: "http://api.giphy.com/v1/gifs/search",
        dataType: "json",
        data: $('form').serialize(),
        success: logSuccess,
        error: logError,
        complete: logComplete
      });
    };
    function logSuccess(responseData){
     console.log(responseData);
     var imgArray = responseData.data;
     imgArray.forEach(function (object){
       var gifImg = object.images.fixed_height.url;
       $('.gif-gallery').append('<img src="' + gifImg + '">');
     });
    }
    function logError(){
     console.log("Error!");
    }
    function logComplete(responseData){
     console.log("Complete!");
    }
    //append new input for load more
    //ajax to get serialize plus concat offset var, var being increased by 25 each time
});

//base API URL: http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC
//trending gifs: http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC
//search query path: /v1/gifs/search
