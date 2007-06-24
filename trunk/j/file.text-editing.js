// see ../license.txt for licensing
function kfm_createEmptyFile(){
	var filename='newfile.txt',msg='';
	do{
		var not_ok=0;
		filename=kfm_prompt(kfm_lang.WhatFilenameToCreateAs+msg,filename);
		if(!filename)return;
		if(kfm_isFileInCWD(filename)){
			var o=kfm_confirm(kfm_lang.AskIfOverwrite(filename));
			if(!o)not_ok=1;
		}
		if(filename.indexOf('/')>-1){
			msg=kfm_lang.NoForwardslash;
			not_ok=1;
		}
	}while(not_ok);
	x_kfm_createEmptyFile(filename,kfm_refreshFiles);
}
function kfm_disableLeftColumn(){
	var left_column=$('kfm_left_column');
	kfm_addEl(document.body,newEl('div','kfm_left_column_hider',0,0,0,'position:absolute;left:0;top:0;width:'+left_column.offsetWidth+'px;height:'+left_column.offsetHeight+'px;opacity:.7;background:#fff'));
}
function kfm_showTextFile(res){
	if(!$('kfm_left_column_hider'))kfm_disableLeftColumn();
	var t=newEl('table','kfm_editFileTable',0,0,0,'height:100%;width:100%');
	var right_column=$('kfm_right_column').empty();
	right_column.contentMode='codepress';
	kfm_addEl(right_column,t);
	var r2=kfm_addRow(t);
	kfm_addCell(r2,0,1,res.name);
	kfm_addCell(r2,1,1,newLink('javascript:$("kfm_left_column_hider").remove();x_kfm_viewTextFile('+res.id+',kfm_viewTextFile)','View',0,'button'));
	kfm_addCell(r2,2,1,newLink('javascript:kfm_setMessage("saving file...");$("edit-start").value=codepress.getCode();x_kfm_saveTextFile('+res.id+',$("edit-start").value,kfm_clearMessage);','Save',0,'button'));
	kfm_addCell(r2,3,1,newLink('javascript:if($("edit-start").value==codepress.getCode() || kfm_confirm( kfm_lang.CloseWithoutSavingQuestion)){$("kfm_left_column_hider").remove();x_kfm_loadFiles(kfm_cwd_id,kfm_refreshFiles);}',kfm_lang.Close,0,'button'));
	r3=kfm_addCell(kfm_addRow(t).setStyles('height:100%'),0,4);
	r3.id='kfm_codepressTableCell';
	var codeEl=newEl('textarea','codepress','codepress '+res.language,0,{value:res.content,title:res.name},'width:100%;height:'+(r3.offsetHeight-2)+'px');
	changeCheckEl=newInput('edit-start','textarea',res.content);
	changeCheckEl.setStyles('display:none');
	r3.appendChild(codeEl);
	r3.appendChild(changeCheckEl);
	if(window.CodePress)CodePress.run();
	else loadJS('codepress-0.9.5/codepress.js','cp-script','en-us','CodePress.run();if($("kfm_tooltip"))$("kfm_tooltip").remove()');
}
function kfm_viewTextFile(res){
	var right_column=$('kfm_right_column').empty();
	right_column.contentMode='viewtext';
	var t=newEl('table','kfm_viewFileTable',0,0,0,'height:'+right_column.offsetHeight+'px;width:'+(right_column.offsetWidth-2)+'px');
	var r=kfm_addRow(t),c=0;
	kfm_addCell(r,c++,1,res.name);
	if(res.buttons_to_show&2)kfm_addCell(r,c++,1,newLink('javascript:x_kfm_getTextFile('+res.id+',kfm_showTextFile)','Edit',0,'button'));
	if(res.buttons_to_show&1)kfm_addCell(r,c++,1,newLink('javascript:x_kfm_loadFiles(kfm_cwd_id,kfm_refreshFiles);',kfm_lang.Close,0,'button'));
	kfm_addEl(right_column,t);
	var textCell=kfm_addEl(kfm_addCell(kfm_addRow(t).setStyles('height:100%'),0,c),'please wait...');
	var wrapper=newEl('div').setStyles('overflow:auto;height:'+(textCell.offsetHeight-2)+'px;width:'+(textCell.offsetWidth)+'px');
	kfm_addEl(textCell.empty(),wrapper);
	wrapper.innerHTML=res.content;
}
