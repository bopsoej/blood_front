export function setCookie(name,value,expiresDays){
  var exdate=new Date();
  exdate.setTime(exdate.getTime()+expiresDays*60*60*24*1000);
  document.cookie=name+'='+value+';expires='+exdate.toUTCString();
}

export function getCookie(cname){
  var name=cname+'=';
  var ca=document.cookie.split(';');
  for(var i=0;i<ca.length;i++){
    var c=ca[i].trim();
    if(c.indexOf(name)==0) return c.substring(name.length,c.length);
  }
  return null;
}
