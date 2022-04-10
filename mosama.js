
function change(){
    function abcdef(hh){
    if(hh==10){
    hh="A";}
    else if(hh==11){
    hh="B";}
    else if(hh==12){
    hh="C";}
    else if(hh==13){
    hh="D";}
    else if(hh==14){
    hh="E";}
    else if(hh==15){
    hh="F";}
    else if(hh==16){
    hh="F";}
    return hh;}
    x="#";
    r1=document.getElementById("red1").value/6.25;
    r2=document.getElementById("red2").value/6.25;
    g1=document.getElementById("green1").value/6.25;
    g2=document.getElementById("green2").value/6.25;
    b1=document.getElementById("blue1").value/6.25;
    b2=document.getElementById("blue2").value/6.25;
    rr1=r1-r1%1;
    rr2=r2-r2%1;
    gg1=g1-g1%1;
    gg2=g2-g2%1;
    bb1=b1-b1%1;
    bb2=b2-b2%1;
    rr1=abcdef(rr1);
    rr2=abcdef(rr2);
    gg1=abcdef(gg1);
    gg2=abcdef(gg2);
    bb1=abcdef(bb1);
    bb2=abcdef(bb2);
    HexColor=x.concat(rr1,rr2,gg1,gg2,bb1,bb2);
    document.getElementById("ttt").value=HexColor;
    document.body.style.background=HexColor;}