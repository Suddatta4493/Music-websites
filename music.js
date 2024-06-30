var numberOfMusicButtons=document.querySelectorAll(".music").length;

for(var i=0;i<numberOfMusicButtons;i++){

    document.querySelectorAll(".music")[i].addEventListener("click",function () {

        //alert("I got click.");  //anonymous function.
        //console.log(this.innerHTML)
        //this.style.color="white";//letter color chage after click.

        var buttonInnerHTML=this.innerHTML;

        makeSound(buttonInnerHTML);

       buttonAnimation(buttonInnerHTML);

    });
}

document.addEventListener("keypress",function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});

function makeSound (key) {

    switch (key){
        case'Song 1':
        var music1=new Audio("sounds/Tu Hai Kahan_64(PagalWorld.com.cm).mp3");
        music1.play();
            break;

        case'Song 2':
        var music2=new Audio("sounds/Baarish Mein Tum_64(PagalWorld.com.cm).mp3");
        music2.play();
        break;

        case'Song 3':
        var music3=new Audio("sounds/3theolddance90s-13891.mp3");
        music3.play();
            break;

        case'Song 4':
        var music4=new Audio("sounds/Ae Watan Mere Watan (Title Track)_64(PagalWorld.com.cm).mp3");
        music4.play();
            break;

        case'Song 5':
        var music5=new Audio("sounds/Baarish Mein Tum_64(PagalWorld.com.cm).mp3");
        music5.play();
            break;

        case'Song 6':
        var music6=new Audio("sounds/Kabhi Shaam Dhale_64(PagalWorld.com.cm).mp3");
        music6.play();
            break;   

        case'Song 7':
        var music7=new Audio("sounds/Kahani Suno_64(PagalWorld.com.cm).mp3");
        music7.play();
            break;
        
        case'Song 8':
        var music8=new Audio("sounds/Kesariya_64(PagalWorld.com.cm).mp3");
        music8.play();
            break;  
            
        case'Song 9':
        var music9=new Audio("sounds/kya-jaane-tu-mere-iraade-wajah-tum-ho-hate-story-3-ringtone-androidmobi-426-42650.mp3");
        music9.play();
            break; 
        
        case'Song 10':
        var music10=new Audio(" sounds/_Heeriye_64(PagalWorld.com.cm).mp3");
        music10.play();
            break;
            
        case'Song 11':
        var music11=new Audio("sounds/mittidikhushbooayushmannkhurranadownloadmingseringtone-4643.mp3");
        music11.play();
            break; 
            
        case'Song 12':
        var music12=new Audio("sounds/Pehle Bhi Main_64(PagalWorld.com.cm).mp3");
        music12.play();
            break; 
            
        case'Song 13':
        var music13=new Audio("sounds/saansonkowwwsongsfarminforingtone-9258.mp3");
        music13.play();
            break; 
            
        case'Song 14':
        var music14=new Audio("sounds/Saari Duniya Jalaa Denge_64(PagalWorld.com.cm).mp3");
        music14.play();
            break; 
            
        case'Song 15':
        var music15=new Audio("sounds/Tere Hawaale_64(PagalWorld.com.cm).mp3");
        music15.play();
            break; 
            
        case'Song 16':
        var music16=new Audio("sounds/Teri Baaton Mein Aisa Uljha Jiya_64(PagalWorld.com.cm).mp3");
        music16.play();
            break; 
            
        case'Song 17':
        var music17=new Audio("sounds/tre-402.mp3");
        music17.play();
            break; 
            
        case'Song 18':
        var music18=new Audio("sounds/Tu Hai Kahan_64(PagalWorld.com.cm).mp3");
        music18.play();
            break; 
            
        case'Song 19':
        var music19=new Audio("sounds/yammayamma2wwwisaitamilinringtone-2770.mp3");
        music19.play();
            break; 
            
        case'Song 20':
        var music20=new Audio("sounds/Saari Duniya Jalaa Denge_64(PagalWorld.com.cm).mp3");
        music20.play();
            break;   

        default:console.log(key);    
    }
}


function buttonAnimation(currentkey){

    var activeButton=document.querySelector("."+currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}