var contenders = new Array(6);
//var a;
//var b;
//var p;
//var q;
//var k=0;
//var l=0;


contenders[0]= {name:"one", score:400}
contenders[1]= {name:"two", score:400}
contenders[2]= {name:"three", score:400}
contenders[3]= {name:"four", score:400}
contenders[4]= {name:"five", score:400}
contenders[5]= {name:"six", score:400}

function output(){
//   document.getElementById("output").innerHTML='  '+contenders[2].score;
    document.write("wassssss");
}

function one(x, y){
a=(1)/(1+10^(contenders[y].score-contenders[x].score)/400);
b=1-a;    
contenders[x].score=contender[x].score + 32(1-a);
contenders[y].score=contender[y].score + 32(0-b);
set();
}

function set(){
    
        document.getElementById("one").innerHTML=' '+contenders[k].name;
        k++;
        document.getElementById("two").innerHTML=' '+contenders[l].name;
        l++;
        
}
    
    function setw(p){
        if(p==1){
        one(k,l);
        }
        else if(p==2){
        one(l,k);
        }
    }
}
