var hEx={0:"the users doesn't utilize the buttons on the site",1:"looking at the number of clicks in Google Analytics",2:'make the buttons more "clickable" by adding drop shadows',3:"all mobile users",4:"a better understanding of what constitutes a button on the page",5:"higher CTR to other pages and more sales"};$("#hExample").click(function(){$("input").each(function(a){$(this).val(hEx[a])}),$("#generate").prop("disabled",!1)}),$("#h").on("show.bs.modal",function(){var a=$("input").serializeArray(),b="<b>Since we have observed that</b> "+a[0].value+" <b>by</b> "+a[1].value+".<br /><br /> <b>We want to</b> "+a[2].value+" <b>for</b> "+a[3].value+".<br /><br /><b>Which should lead to</b> "+a[4].value+" <b>and the effect will be measured by</b> "+a[5].value+".";$(".modal-body").empty().append("<p>"+b+"</p>");var c=$(".modal-body").text(),d=new ZeroClipboard(document.getElementById("copy_button"));ZeroClipboard.setData("text/plain",c),d.on("ready",function(){d.on("aftercopy",function(a){$(a.target).text("Copied!")})})}),$("#generate").prop("disabled",!0),$("input").on("input keyup change",function(){var a=[],b=0;$("input").each(function(){a.push($(this).val().length>0?1:0)});for(var c in a)b+=a[c];6===b?$("#generate").prop("disabled",!1):$("#generate").prop("disabled",!0)}),$(document).ready(function(){$("#hypothesisForm").bootstrapValidator({container:"tooltip",excluded:[":disabled",":hidden",":not(:visible)"],feedbackIcons:"disabled",fields:{problemDescription:{threshold:0,trigger:"keyup blur",validators:{}},observationMethod:{threshold:0,trigger:"keyup blur",validators:{}},makeThisChange:{threshold:0,trigger:"keyup blur",validators:{}},forThisSegment:{threshold:0,trigger:"keyup blur",validators:{}},behaviour:{threshold:0,trigger:"keyup blur",validators:{}},kpi:{threshold:0,trigger:"keyup blur",validators:{}}},live:"enabled",message:"This value is not valid",submitButtons:"#generate"})});