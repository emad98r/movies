let dot1=document.querySelector("#dot1"),
 dot2=document.querySelector("#dot2"),
 dot3=document.querySelector("#dot3"),
 dot4=document.querySelector("#dot4");

dot1.addEventListener("click",move);
function move(){
   scrollTo({
   top:0,
   behavior:"smooth"
 });
 dot1.style.backgroundColor="red";
 dot1.style.transformScale=1.2;
}

 dot1.onclick=function(){
  scrollTo({
    top:0,
    behavior:"smooth"
  });
  dot1.style.backgroundColor="red";
 }  
 dot2.onclick=function(){
  scrollTo({
    top:724,
    behavior:"smooth"
  });
  dot2.style.backgroundColor="red";


 }
 dot3.onclick=function(){
  scrollTo({
    top:1455,
    behavior:"smooth"
  } );
  dot3.style.backgroundColor="red";
 }
 dot4.onclick=function(){
  scrollTo({
    top:2167,
    behavior:"smooth"
  });
  dot4.style.backgroundColor="red";
 }
let butList=document.querySelector("#butList"),
leftList=document.querySelector("#leftList");
butList.onclick=function(){
  if(leftList.style.display==="none"){
    leftList.style.display="block";
    butList.style.transform= "rotateY(0)"
  }else{
    leftList.style.display="none";
    butList.style.transform= "rotateY(180deg)"
  }
}

let toMovies=document.querySelector("#toMovies"),
toSeries= document.querySelector("#toSeries");
toMovies.onclick=function(){
  scrollTo({
    top:724,
    behavior:"smooth"
  });
}
toSeries.onclick=function(){
  scrollTo({
    top:1455,
    behavior:"smooth"
  } );
}


let aboutUsBut= document.querySelector("#aboutUsBut"),
aboutUs=document.querySelector(".aboutUs");

aboutUsBut.addEventListener("click", aboutUsF);
function aboutUsF(){
  if(aboutUs.style.display==="none"){
    scrollTo({
      top:2167,
      behavior:"smooth"
    });
    aboutUs.style.display="block";
  }else{
    aboutUs.style.display="none";
  }
}


let playNow=document.querySelector("#playNow"),
myFiv=document.querySelector("#myFiv"),
video=document.querySelector("#bigVideo");
playNow.onclick=function(){
  video.controls=true;
  video.muted=false;
}
myFiv.onclick=function(){
  if(this.style.color==="white"){
  myFiv.style.color="red";
}else{
  myFiv.style.color="white";
}
}

let searchBar=document.querySelector(".searchBar"),
searchBut=document.querySelector("#searchBut");

searchBut.onclick=function(){
  if(searchBar.style.display==="none"){
    searchBar.style.display="block";
  }else{
    searchBar.style.display="none";
  }
}

let hideListM=document.querySelector("#hideListM"),
nav=document.querySelector("nav");
hideListM.onclick=function(){
  if(nav.style.display==="none"){
    nav.style.display="block";
  }else{
    nav.style.display="none";
  }
}