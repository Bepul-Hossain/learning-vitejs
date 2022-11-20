const cards = document.querySelectorAll(".split-component");

cards.forEach((cardEl) => {
    let link = cardEl.querySelectorAll("a[href].card-link");
    if(link[0]){
        cardEl.addEventListener("click",function(){
            debugger;
            if(link[0].target != ""){
                window.open(link[0].href, link[0].target);
            }
            else{
                window.location.href = link[0].href;
            }
        })
    }
  });