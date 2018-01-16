
    //Get Parameter passed from login page
    var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };

        var $language = getUrlParameter('lang');

      if ($language == "jp"){
        console.log("Show Japanese");
    $('.English').hide();
        $('.Japanese').show();
      }else{
        console.log("Show English");
        $('.English').show();
        $('.Japanese').hide();
      }