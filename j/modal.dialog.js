function kfm_modal_close(msg){
	$('shader').remove();
	$('formWrapper').remove();
	if(msg)alert(msg);
}
function kfm_modal_open(form,title,actions){
	window.inPrompt=1;
	var body=document.body,shader=newEl('div','shader'),scrollAt=browser.isIE?getWindowScrollAt():{x:0,y:0},a=getWindowSize(),wx=0,wy=0,pos=browser.isIE?'absolute':'fixed',i;
	if(browser.isIE)body.setStyles('overflow:hidden');
	{ // shader
		shader.setStyles('background:#fff;opacity:.5;position:'+pos+';top:'+scrollAt.y+'px;left:'+scrollAt.x+'px;zIndex:2;width:'+a.x+'px;height:'+a.y+'px');
		kfm_addEl(body,shader);
	}
	{ // wrapper
		var wrapper=newEl('div','formWrapper');
		var h2=newEl('h2',0,0,title,0,'float:left');
		form.setStyles('position:relative;margin:0;textAlign:left;padding:0;clear:left');
		kfm_addEl(wrapper,[h2,form]);
		{ // link row
			var row=newEl('div'),buttonStyle='float:right;border:1px solid;borderColor:#ccc #666 #666 #ccc;display:block;background:#ddd;color:#000;textDecoration:none;margin:2px;padding:0';
			var link=newLink('javascript:kfm_modal_close()','Close',0,'button');
			link.setStyles(buttonStyle);
			kfm_addEl(row,link);
			if(actions&&actions.length)for(i=0;i<actions.length;++i){
				var v=actions[i];
				if(v[1].toString()===v[1])link=newLink('javascript:'+v[1]+'()',v[0],0,'button');
				else{
					link=newLink('#',v[0],0,'button');
					link.onclick=function(){
						v[1][0][v[1][1]]();
						return false;
					}
				}
				link.setStyles(buttonStyle);
				kfm_addEl(row,link);
			}
			kfm_addEl(wrapper,row);
		}
		row.setStyles('background:#eee;borderTop:1px solid #ddd;textAlign:right;padding:2px;zIndex:3');
		kfm_addEl(body,wrapper);
		wrapper.setStyles('width:'+(form.offsetWidth+10)+'px');
		var w=wrapper.offsetWidth;
		if(w<200||w>a.x*.9){
			w=w<200?200:parseInt(a.x*.9);
			wrapper.setStyles('width:'+w+'px');
		}
		var h=browser.isIE?wrapper.offsetHeight:h2.offsetHeight+form.offsetHeight+row.offsetHeight,q=browser.isIE?1:0,r=browser.isIE?0:4;
		if(parseFloat(h)>parseFloat(a.y*.9)){
			h=parseInt(a.y*.9);
			var h3=h-row.offsetHeight-h2.offsetHeight-q;
			form.setStyles('margin:0 auto;overflow:auto;height:'+h3+'px;maxHeight:'+h3+'px');
		}else{
			var h3=h-row.offsetHeight-h2.offsetHeight-q;
			form.setStyles('overflow:auto;width:100%;maxHeight:'+h3+'px');
		}
		wrapper.setStyles('position:'+pos+';left:'+(scrollAt.x+a.x/2-w/2)+'px;top:'+(scrollAt.y+a.y/2-h/2)+'px;background:#fff;zIndex:3;border:1px solid #000');
	}
}
