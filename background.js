// background.js
var counter_flag = 0;
// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	
  // Send a message to the active tab
  
	  console.log('inside')
	 
		chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
			var activeTab = tabs[0];
			if(counter_flag %2 == 0 || counter_flag == 0)
				chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action_performOp"});
			else
				chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action_removeOp"});
		});
	counter_flag++;
});

