//카드 선택 후 다시 뒤집기
function setListenerToCard(){
    const cardAreaArr = document.querySelectorAll(".card-area");
    for(const cardArea of cardAreaArr){
        cardArea.addEventListener("click" , function(evt){

            evt.currentTarget.classList.toggle("flip");
            const temp = evt.currentTarget;

            setTimeout(()=>{
               temp.classList.toggle("flip");
            }, 1000);
        });
    }
}

const main = document.querySelector("main");

//카드 생성
function generateCardList(){
    const cardCnt = document.querySelector("#cardCnt").value;
    if(cardCnt > 50){
        alert("최대 50개")
        return;

    }
    main.innerHTML = "";

    const cardContentArr = [];
    for(let i = 0; i < cardCnt; i++){
        cardContentArr.push(i);
    }
    const arr = cardContentArr.concat(cardContentArr);

    const result = shuffleArr(arr);

    for(const temp of result){
        main.innerHTML += `
            <div class="card-area">
                <div class="card">
                    <div class="card-back">${temp}</div>
                    <div class="card-front">?</div>
                </div>
            </div>
        `;
    }

}

//카드 내용물 랜덤으로 가져오기
function shuffleArr(arr){
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  return arr;
}

function handleClick(){
    generateCardList();
    setListenerToCard();
}
