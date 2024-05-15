import { refreash } from '/js/countInCart.js';
refreash();

export const cia_list = {
    'QN900C': {
        'name' : 'Neo QLED 8K QN900C',
        'price' : '$4399,99',
        'price2' : '$4999.99',
        'img1' : 'assets/images/pasteImage4.png',
    },
    'MICRO_LED' : {
        'name' : 'MICRO LED MS1 MNA110MS1ACXRU',
        'price' : '$171999,99',
        'price2' : '$179999,99',
        'img1' : 'assets/images/pasteImage2.png',
    },
    'S90C': {
        'name' : 'OLED 4K S90C',
        'price' : '$1699,99',
        'price2' : '$1999,99',
        'img1' : 'assets/images/pasteImage5.png',
    },
    'Q60C': {
        'name' : 'QLED 4K Q60C',
        'price' : '$920,99',
        'price2' : '$999,99',
        'img1' : 'assets/images/pasteImage1.png',
    },
    'Music_Frame': {
        'name' : 'Music Frame  Dolby Atmos  Smart Speaker',
        'price' : '$399,99',
        'price2' : '$599,99',
        'img1' : 'assets/images/MusicFrame_1600x1200_1.png',
    },
    'Q-series': {
        'name' : 'Q-series Wireless Dolby ATMOS Soundbar',
        'price' : '$1699,99',
        'price2' : '$1899,99',
        'img1' : 'assets/images/HW-Q990D_018_Set-Remote_Graphite_Black_1600x1200.png',
    },
    'Ultra-slim': {
        'name' : 'Ultra-slim Wireless Dolby Soundbar',
        'price' : '$749,99',
        'price2' : '$899,99',
        'img1' : 'assets/images/SG24-115K.0404-S.com-Product-Images_Audio_HW-S801D-ZA_V01.png',
    },
    'Subwoofer_for_S-series': {
        'name' : 'Subwoofer for S-series Soundbar W510',
        'price' : '$299,99',
        'price2' : '$359,99',
        'img1' : 'assets/images/SWA-W510_003_L-Perspective_Black-Gallery-1600x1200.png',
    },
};
/*
 <div class="elementAlsoYouLike">
                <div class="mainImage" style="height: 242px;">
                    <div class="newpasteImage" style="background-image: url(../assets/images/pasteImage1.png);"></div>
                </div>
                <div class="opisanie">
                    <div class="stars">
                        
                    </div>
                    <span class="spanItemName" style="font-size: 16px;">QLED 4K Q60C
                    </span>
                    <div class="itemPrice" style="margin: 0; height: fit-content;">
                        <span class="Price" style="font-size: 14px;">
                            $920,99
                        </span>
                        <span class="spanCatalogWay" style="    text-decoration-line: var(--text-14-px-regular-striked-text-decorationLine, line-through); margin-left: 10px; size: 16px;">
                            $999,99
                        </span>
                        <div class="addToCart">
                        <span style="color: white; font-size: 16px;" class="lng-add_to_cart">Add to Cart</span>
                        </div>
                    </div>
                </div>
            </div>
*/
let out = ' ';
let hash = window.location.hash;
hash = hash.substr(1);
const add = {
    "add_to_cart": {
        "us": "Add to Cart",
        "ru": "Добавить в корзину",
        "by": "Дадаць у кошык",
    },
}
for(let key in cia_list){   

    out += `
    <div class="elementAlsoYouLike">
        <a href = "itemPage.html">
            <div class="mainImage" style="height: 242px;">
                <div class="newpasteImage" style="background-image: url(${cia_list[key]['img1']});"></div>
            </div>
        </a>
     <div class="opisanie">
      <div class="stars"> </div>
        <span class="spanItemName" style="font-size: 16px; margin-left:5%">${cia_list[key]['name']}</span>
        <div class="itemPrice" style="margin: 0; height: fit-content;">
            <span class="Price" style="font-size: 14px; margin-left:5%">${cia_list[key]['price']}</span>
            <span class="spanCatalogWay" style="    text-decoration-line: var(--text-14-px-regular-striked-text-decorationLine, line-through); margin-left: 10px; size: 16px;">${cia_list[key]['price2']}</span>
            <span style="color: white; font-size: 16px;" class="addToCart lng-add_to_cart" data-articul="${key}"> ${add['add_to_cart'][hash]}</span>
            <div id="notificatio"><span >✅ Item added!</span></div>
       </div>
     </div>
    </div>
    `;
}

document.querySelector('.target').innerHTML = out;

//localStorage.setItem('cia_list', JSON.stringify(cia_list) );
let temp = JSON.parse(localStorage.getItem('list')) || [];

document.querySelector('.target').addEventListener('click', event => {
    console.log(temp);
    if (event.target.classList.contains('addToCart')){
        let articul = event.target.dataset['articul'] ;
        if(temp[articul] !== undefined) {
            temp[articul]['count']++;
        }
        else{
            temp[articul] = cia_list[articul];
            temp[articul]['count'] = 1;
        }
        console.log(temp);
        localStorage.setItem('list', JSON.stringify(temp) );
    }
    
    refreash();
    var notification = document.getElementById("notificatio");
    notification.classList.add("show"); // Добавляем класс "show"
    setTimeout(function() {
        notification.classList.remove("show"); // Убираем класс "show" через 2 секунды
    }, 2000);
})