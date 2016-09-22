var meng=abc("dsbbb")
var lei=abc("dsbbb2")
for(var i=0;i<meng.length;i++){
	meng[i].aa=i
	meng[i].onmouseover=function(){
		lei[this.aa].style.display="block"
	}
	meng[i].onmouseout=function(){
		lei[this.aa].style.display="none"
	}
}