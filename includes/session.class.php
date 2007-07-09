<?php
class kfmSession extends Object{
	public $vars;
	public $id;
	function kfmSession($key=''){
		parent::__construct();
		$create=1;
		if($key=='' && isset($_COOKIE['kfm_cookie']) && strlen($_COOKIE['kfm_cookie'])==32){
			$key=$_COOKIE['kfm_cookie'];
		}
		if($key!='' && strlen($key)==32){
			$q=$this->db->query("SELECT id FROM ".$this->db_prefix."session WHERE cookie='".$key."'");
			$res=$q->fetchRow();
			if(count($res)){
				$create=0;
				$this->id=$res['id'];
				$this->isNew=false;
				$this->db->query("UPDATE ".$this->db_prefix."session SET last_accessed=NOW() WHERE id='".$this->id."'");
			}
		}
		if($create){
			$this->db->query("INSERT INTO ".$this->db_prefix."session (last_accessed) VALUES (now())");
			$this->id=$this->db->lastInsertId($this->db_prefix.'session','id');
			$key=md5($this->id);
			$this->db->query("UPDATE ".$this->db_prefix."session SET cookie='".$key."' WHERE id=".$this->id);
			$this->isNew=true;
		}
		$this->key=$key;
		$this->vars=array();
		setcookie('kfm_cookie',$key,0,'/');
	}
	function __construct($key=''){
		$this->kfmSession($key);
	}
	function set($name='',$value=''){
		if(isset($this->vars[$name])&&$this->vars[$name]==$value)return;
		$this->vars[$name]=$value;
		$this->db->query("DELETE FROM ".$this->db_prefix."session_vars WHERE session_id=".$this->id." and varname='".addslashes($name)."'");
		$this->db->query("INSERT INTO ".$this->db_prefix."session_vars (session_id,varname,varvalue) VALUES (".$this->id.",'".addslashes($name)."','".addslashes(json_encode($value))."')");
	}
	function setMultiple($vars){
		foreach($vars as $key=>$val)$this->set($key,$val);
	}
	function get($name){
		if(isset($this->vars[$name]))return $this->vars[$name];
		$q=$this->db->query("SELECT varvalue FROM ".$this->db_prefix."session_vars WHERE session_id=".$this->id." and varname='".addslashes($name)."'");
		$res=$q->fetchRow();
		if(count($res)){
			$ret=json_decode('['.$res['varvalue'].']',true);
			$ret=$ret[0];
			$this->vars[$name]=$ret;
			return $ret;
		}
		return null;
	}
}
?>
