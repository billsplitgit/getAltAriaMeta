//$(document).ready(function(){
	
chrome.runtime.onMessage.addListener(
 	function(request, sender, sendResponse) {
		if( request.message === "clicked_browser_action_performOp" ) {
            
            console.log('perform')
            //functions to be called here
			ctrl_S();
		}
		else if(request.message	=== 'clicked_browser_action_removeOp'){
                console.log('remove')
                //functions to be called here
        }
	});
//});

//function definition to be given here

function ctrl_S(){
    $(window).keypress(function(event) {
        if (!(event.which == 115 && event.ctrlKey) && !(event.which == 19)) return true;
        $('.btn-toolbar .btn-group-btn-sm-wrapper').first().children().click();
        alert("Ctrl-S pressed");
        event.preventDefault();
        return false;
    });
}
