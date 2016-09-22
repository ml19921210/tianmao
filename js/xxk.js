
  var dsb1=abc("ccjjtt")
  var dianji1=abc("ccjjtt1")
  var num=0
  function change(){
       num++
       if(num>=dsb1.length){
        num=0
       }
       for (var i = 0; i < dsb1.length; i++) {
        dsb1[i].style.opacity=0
        dianji1[i].id=""
       };
        animate(dsb1[num],{opacity:1})
        dianji1[num].id="ddd"
  }
    var t=setInterval(change,2000)
    var banner=abc("banner")[0]
    banner.onmouseover=function(){
      clearInterval(t)
    }
    banner.onmouseout=function(){
      t=setInterval(change,2000)
    }

    for (var k = 0; k < dianji1.length; k++) {
  dianji1[k].aa=k//记录元素下标
  dianji1[k].onclick=function(){
       //this.aa当前元素下标
       for(var j=0;j<dsb1.length;j++){
        dianji1[j].id=""
        dsb1[j].style.opacity=0
       }
        this.id="ddd"
     animate(dsb1[this.aa],{opacity:1})
      num=this.aa
      }
};
    var banner=abc("cjt")[0]
    banner.onmouseover=function(){
      clearInterval(t)
    }
    banner.onmouseout=function(){
      t=setInterval(change,2000)
    }
var cedao=abc("menglei123")[0]    
var zsb=abc("zsb")
var btn=abc("psb")
var newarr=["red","#f7a945"," #19c8a9","#f15453","#64c333","#0aa6e8","#ea5f8d","red"]
var dsbb=abc("zhong")[0]
document.documentElement.scrollTop=1;
var oBj=document.documentElement.scrollTop?document.documentElement:document.body;
var flagdown=1
var flagup=1
window.onscroll=function(){
  

  if(oBj.scrollTop>=1100){ 
    animate(cedao,{width:38,height:333},400)
    if(flagdown==1){
      animate(dsbb,{height:50},400)
     
      flagdown=2
      flagup=1   
    }
      
  }else{
     if(flagup==1){
      animate(dsbb,{height:0},400)
      animate(cedao,{width:0,height:0},400)
      flagdown=1
       flagup=2
  }
   
  }
      
for (var i = 0; i < zsb.length; i++) {
      if(zsb[i].offsetTop<=oBj.scrollTop+250){
        for(var j=0;j<btn.length;j++){
          btn[j].style.background=""
        }
        btn[i].style.background=newarr[i]
      }
    }
 
 for (var i = 0; i < btn.length; i++) {
    btn[i].aa=i

    btn[i].onclick=function(){
          
      //obj.scrollTop=dsb[this.aa].offsetTop
      animate(oBj,{scrollTop:zsb[this.aa].offsetTop-170},600)
    }
  }
}
 var xiaomao3=$(".xiaomao3")
 var xiaomao=$(".xiaomao")
 for (var i = 0; i < xiaomao3.length; i++) {
    xiaomao3[i].aa=i
   xiaomao3[i].onmouseover=function(){
    for (var j = 0; j < xiaomao.length; j++) {
      
      animate(xiaomao[this.aa],{height:15},300)
    };
   }
  xiaomao3[i].onmouseout=function(){
    for (var j = 0; j < xiaomao.length; j++) {
      
      animate(xiaomao[this.aa],{height:0},300)
    };
   }
 };

var huanxin=$(".huanxin-2")
var tuda=$(".tufangda")

 for (var i = 0; i < huanxin.length; i++) {
    huanxin[i].aa=i
   huanxin[i].onmouseover=function(){
    for (var j = 0; j < tuda.length; j++) {
      
      animate(tuda[this.aa],{width:249,height:161},300)
    };
   }
  huanxin[i].onmouseout=function(){
    for (var j = 0; j < tuda.length; j++) {
      
      animate(tuda[this.aa],{width:239,height:151},300)
    };
   }
 };

 var zzz8=$(".zzw-8")
 var alt=$(".alt")
 for (var i = 0; i < zzz8.length; i++) {
    zzz8[i].aa=i
   zzz8[i].onmouseover=function(){
    for (var j = 0; j < alt.length; j++) {
      
      animate(alt[this.aa],{left:90},300)
    };
   }
  zzz8[i].onmouseout=function(){
    for (var j = 0; j < alt.length; j++) {
      
      animate(alt[this.aa],{left:94},300)
    };
   }
 };



 var zzw8=$(".zzw-811")
 var altt=$(".altt")
 for (var i = 0; i < zzw8.length; i++) {
    zzw8[i].aa=i
   zzw8[i].onmouseover=function(){
    for (var j = 0; j < altt.length; j++) {
      
      animate(altt[this.aa],{left:90},300)
    };
   }
  zzw8[i].onmouseout=function(){
    for (var j = 0; j < altt.length; j++) {
      
      animate(altt[this.aa],{left:94},300)
    };
   }
 };


  var zzw81=$(".zzw-8111")[0]
 var altt1=$(".lt111")[0]
  zzw81.onmouseover=function(){
      animate(altt1,{left:210},300)
    };
     zzw81.onmouseout=function(){
      animate(altt1,{left:220},300)
    };


 var alt3=$(".alt3")
 var alttt=$(".alt4")
 for (var i = 0; i < alt3.length; i++) {
    alt3[i].aa=i
   alt3[i].onmouseover=function(){
    for (var j = 0; j < alttt.length; j++) {
      
      animate(alttt[this.aa],{left:105},300)
    };
   }
  alt3[i].onmouseout=function(){
    for (var j = 0; j < alttt.length; j++) {
      
      animate(alttt[this.aa],{left:115},300)
    };
   }
 };


 var alt31=$(".alt31")
 var altttt=$(".alt41")
 for (var i = 0; i < alt31.length; i++) {
    alt31[i].aa=i
   alt31[i].onmouseover=function(){
    for (var j = 0; j < altttt.length; j++) {
      
      animate(altttt[this.aa],{left:105},300)
    };
   }
  alt31[i].onmouseout=function(){
    for (var j = 0; j < altttt.length; j++) {
      
      animate(altttt[this.aa],{left:115},300)
    };
   }
 };




 var chaozhi4=$(".chaozhi-61")
for (var i = 0; i < chaozhi4.length; i++) {
  chaozhi4[i].aa=i
  chaozhi4[i].onmouseover=function(){
    chaozhi4[this.aa].style.opacity=0.7
  }
  chaozhi4[i].onmouseout=function(){
    chaozhi4[this.aa].style.opacity=1
  }
};



 var ml1=$(".ml1")
 var ml=$(".ml")
 for (var i = 0; i < ml1.length; i++) {
    ml1[i].aa=i
   ml1[i].onmouseover=function(){
    for (var j = 0; j < ml.length; j++) {
      
      animate(ml[this.aa],{left:-90,width:90},200)
    };
   }
  ml1[i].onmouseout=function(){
    for (var j = 0; j < ml.length; j++) {
      
      animate(ml[this.aa],{left:-120,width:0},200)
    };
   }
 };



  var wenzi=$(".wenzi")[0]
 var wenzi1=$(".wenzi11")[0]
wenzi1.onmouseover=function(){
     
      wenzi.style.display="block"
      
    }
    wenzi1.onmouseout=function(){
     
      wenzi.style.display="none"
      
    }
var cjt3=$(".cjt-3")
for(var i=0;i<cjt3.length;i++){
  cjt3[i].onmouseover=function(){
    wenzi.style.display="block"
  }
  cjt3[i].onmouseout=function(){
    wenzi.style.display="none"
  }
}
var dsb6=$(".dsb100")[0]
var cjtzyf=$(".cjtzyf")[0]
dsb6.onmouseover=function(){
  cjtzyf.style.display="block"
}
dsb6.onmouseout=function(){
  cjtzyf.style.display="none"
}