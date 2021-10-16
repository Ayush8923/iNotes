document.getElementById("popup").addEventListener('click',
    function(){
        document.querySelector('.popup-modal').style.display = "flex";
    }
);
document.querySelector('.close').addEventListener('click',
    function(){
        document.querySelector('.popup-modal').style.display = "none";
    }
);


