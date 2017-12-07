//$(document).ready(function(){
	
chrome.runtime.onMessage.addListener(
 	function(request, sender, sendResponse) {
		if( request.message === "clicked_browser_action_performOp" ) {
			
			runOnExtClick();
			console.log('perform')
			$(document).last().on('click','.ariatext span', function(e){
				e.stopPropagation();
				$(this).parent().css('display','none');
			});
			$(document).last().on('click','.alttext span', function(e){
				$(this).parent().css('display','none');
				e.stopPropagation();
			})

			getMetaProp();
		}
		else if(request.message	=== 'clicked_browser_action_removeOp'){
				console.log('remove')
				$('.alttext, .ariatext, .metainfo').css({'display':'none'});
		}
	});
//});

var getMetaProp = function(){
	//$('#headerArea').next().innerHtml ='';
	
	var prprties = {title:'', desc:'', keywords:''};
	prprties.title = $('meta[name="Title"]').attr('content');
	prprties.desc = $('meta[name="Description"]').attr('content');
	prprties.keywords = $('meta[name="keywords"]').attr('content');
	var appendMetainfo = '<div class="metainfo">'
						+'<strong style="font-size:14px">METADATA</strong>'
						+'<strong style="font-size:11px">Title: </strong><p style="font-size:10px">'+prprties.title+'</p>'
						+'<strong style="font-size:11px">Description: </strong><p style="font-size:10px">'+prprties.desc+'</p>'
						+'<strong style="font-size:11px">Keywords: </strong><p style="font-size:10px">'+prprties.keywords+'</p>'
						+'</div>';
	$('#headerArea').after(appendMetainfo);
	//console.log(prprties);
};

var strAria = "aria-label", strAlt = "alt", strMsTitle="ms.title";	

var runOnExtClick = function(){

		var attrAria = [];
		var attrAlt = [];
		var attrVal = [];
		//var attrMsTitle = [];
		attrAria.push($('['+ strAria +']'));
		attrAlt.push($('['+ strAlt +']'));
		//attrMsTitle.push($('['+ strMsTitle +']'));
		//console.log(attrMsTitle);

		$('['+ strAria +']').each(function(i){
			$(this).after("<div class='ariatext' style=' display:inline;'><p> "+ $(this).attr(strAria) +" <span>msTitle: "+ $(this).attr(strMsTitle) +"</span></p><span class='c-glyph x-hidden-focus close-button'></span></div>");
		});

		$('['+ strAlt +']').each(function(i){
			$(this).after("<div class='alttext' style='display:inline;''><p> "+ $(this).attr(strAlt) +" </p><span class='c-glyph x-hidden-focus close-button'></span></div>");
		});

}
