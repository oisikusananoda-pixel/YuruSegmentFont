//プレビュー
const Fontsizes = document.getElementById("font-size");
const Fontsize_text = document.getElementById("font-size_text");
const preview = document.getElementById("preview");

const Input = document.getElementById("test_input");

if(Fontsizes && Fontsize_text){
    Fontsizes.addEventListener("input",() => {
        Fontsize_text.textContent = ": " + Fontsizes.value + " px";
        preview.style.fontSize = Fontsizes.value + "px";
    });
}

if(preview){
    Input.addEventListener("input",() => {
        preview.textContent = Input.value;
    });
}
//写真プレビュー
const left_button = document.getElementById("photo_left");
const right_button = document.getElementById("photo_right");
const photo_pre = document.getElementById("photo_preview");

const dotsContainer = document.querySelector(".photo_dots");

if(left_button && right_button && photo_pre && dotsContainer){
    let photonum = 0;
    let interval;
    const photos_arr = ["YuruSegmentFont_Sample_text.png",
                        "YuruSegmentFont_Sample_A.png",
                        "YuruSegmentFont_Sample_Simbol.png",
                        "YuruSegmentFont_Sample_あ.png",
                        "YuruSegmentFont_Sample_あ2.png",
                        "YuruSegmentFont_Sample_ア.png",
                        "YuruSegmentFont_Sample_ア2.png"
                        ];

    function upDataphoto(){
        photo_pre.src = photos_arr[photonum];

        const dots = document.querySelectorAll(".dot");
        dots.forEach((dot,index)=>{
            dot.classList.toggle("active",index === photonum);
        });
    }

    function photoChangeleft(){
        if(photonum > 0){
            photonum -= 1;
        }
        else{
            photonum = photos_arr.length - 1;
        }
        upDataphoto();
        photo_pre.classList.add("is-animated-left");
        setTimeout(() => {
            photo_pre.classList.remove("is-animated-left");
        }, 1500);
    }

    function photoChangeright(){
        if(photonum < photos_arr.length - 1){
            photonum += 1;
        }
        else{
            photonum = 0;
        }
        upDataphoto();
        photo_pre.classList.add("is-animated-right");
        setTimeout(() => {
            photo_pre.classList.remove("is-animated-right");
        }, 1500);
    }

    function startAuto(){
        interval = setInterval(photoChangeright, 5000);
    }

    function resetAuto(){
        clearInterval(interval);
        startAuto();
    }

    function createDots(){
        dotsContainer.innerHTML = "";

        for(let i = 0;i<photos_arr.length;i++){
            const dot = document.createElement("span");
            dot.classList.add("dot");

            if(i === photonum){
                dot.classList.add("active");
            }

            dot.addEventListener("click", ()=>{
                photonum = i;
                upDataphoto();
                resetAuto();
            });

            dotsContainer.appendChild(dot);
        }
    }

    //処理
    createDots();
    upDataphoto();

    startAuto();

    left_button.addEventListener("click",()=>{
        photoChangeleft();
        resetAuto();
    });

    right_button.addEventListener("click",()=>{
        photoChangeright();
        resetAuto();
    });

}

//ダウンロード
const ttf_btn = document.getElementById("TTF_Downlord");
const otf_btn = document.getElementById("OTF_Download");

if(ttf_btn && otf_btn){
    ttf_btn.addEventListener("click",()=>{
        const link = document.createElement("a");
        link.href = "YuruSegmentFont_ttf.zip";
        link.download = "YuruSegmentFont_ttf.zip"
        link.click();
    });

    otf_btn.addEventListener("click",()=>{
        const link = document.createElement("a");
        link.href = "YuruSegmentFont_otf.zip";
        link.download = "YuruSegmentFont_otf.zip"
        link.click();
    });
}

//ハンバーガーメニュー
const humbergerbtn = document.getElementById("menu");
const contents = document.getElementById("contents");
const overlay = document.getElementById("overlay");

if(humbergerbtn){
    humbergerbtn.addEventListener("click", ()=>{
        if(humbergerbtn.classList.contains("active")){
            humbergerbtn.classList.remove("active");
            contents.classList.remove("active");
            overlay.classList.remove("active");
            document.body.classList.remove("no-scroll")
        }
        else{
            humbergerbtn.classList.add("active");
            contents.classList.add("active");
            overlay.classList.add("active");
            document.body.classList.add("no-scroll");
        }
    });
}

//おこづかいボタン
const okozukai_button = document.getElementById("okozukai_button");
const okozukai_face = document.querySelector(".face");

let timeouts = [];

if(okozukai_button){
    okozukai_button.addEventListener("mouseenter",() =>{
    
        timeouts.forEach(id => clearTimeout(id));
        timeouts = [];
    
        const faces = [
            {text:"(゜ロ゜)",time:0},
            {text:"(゜ロ゜).",time:3700},
            {text:"(゜ロ゜)..",time:4300},
            {text:"(゜ロ゜)...",time:4800},
            {text:"(゜ロ゜)<ホントか?!",time:5500}
        ];
    
        faces.forEach(face =>{
            const id = setTimeout(() => {
               okozukai_face.textContent = face.text;
            }, face.time);
    
            timeouts.push(id);
        });
    });
    
    okozukai_button.addEventListener("mouseleave", ()=>{
        timeouts.forEach(id => clearTimeout(id));
        timeouts = [];
    
        okozukai_face.textContent = "(゜ロ゜)";
    });
}
