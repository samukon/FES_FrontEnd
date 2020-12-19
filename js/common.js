
        const carea1 = document.getElementById('soccer');
        const carea2 = document.getElementById('baseball');
        const carea3 = document.getElementById('basket');
        const carea4 = document.getElementById('handball');


        //const modal1 = document.getElementById('modal_top1');
        //const modal2 = document.getElementById('modal_top2');
        //const modal3 = document.getElementById('modal_top3');
        //const modal4 = document.getElementById('modal_top4');
        list = [carea1, carea2, carea3, carea4];
        list.forEach(item => {
            item.addEventListener('click', function(){
                console.log(item.id)
                Onclick5(item.id)
            })

        });
        function Onclick5(id){
            const modal_name = id + '_modal';
            const modal_Element = document.getElementById(modal_name);
            modal_Element.classList.remove('hide');
        }
        const soccer_modal = document.getElementById('soccer_modal');
        const baseball_modal = document.getElementById('baseball_modal');
        const basket_modal = document.getElementById('basket_modal');
        const handball_modal = document.getElementById('handball_modal');
        list2 = [soccer_modal, baseball_modal,basket_modal, handball_modal];
        list2.forEach(item => {
            item.addEventListener('click', function(){
                Onclick6(item)
            })
        })

        function Onclick6(item){
            item.classList.add('hide');
        }
        // var items = [1,2,3,4,5];
        // items.forEach(function(value){
        //     console.log(value);
        // })
       /* function Onclick1(){
            modal1.classList.toggle('hide');
            }
        function Onclick2() {
            modal2.classList.toggle('hide');
        }
        function Onclick3(){
            modal3.classList.toggle('hide');
            }
        function Onclick4() {
            modal4.classList.toggle('hide');
        }

       document.getElementById('soccer').addEventListener('click', Onclick1);
       modal1.addEventListener('click',Onclick1);

       document.getElementById('baseball').addEventListener('click', Onclick2);
       modal2.addEventListener('click',Onclick2);

       document.getElementById('basket').addEventListener('click', Onclick3);
       modal3.addEventListener('click',Onclick3);

       document.getElementById('handball').addEventListener('click', Onclick4);
       modal4.addEventListener('click',Onclick4);*/
    // ボックス要素の取得
const box = document.getElementById("box");

// ボタン要素の取得
const btn = document.getElementById("btn");

// ボックスにクラスを追加(削除)する関数
function onClick() {
    box.classList.toggle("active");
}

// ボタンが押された時に関数を起動させる
//btn.addEventListener("click", onClick, false);

document.getElementById('menu').addEventListener('click', function(){
    this.classList.toggle('active')
    document.getElementById('nav').classList.toggle('active')
})

const menuLinks = document.querySelectorAll('#nav ul a');
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', function() {
        document.getElementById('menu').classList.remove('active');
        document.getElementById('nav').classList.remove('active');
    })
}

    

window.addEventListener('scroll', function() {
    const featuresElement = document.getElementById('Features');
    const SkillElement = document.getElementById('Skills');
    const a =featuresElement.getBoundingClientRect().top +featuresElement.clientHeight *0.3
    ;
    const b =SkillElement.getBoundingClientRect().top +SkillElement.clientHeight *0.3
    if (window.innerHeight > a  ) {
        featuresElement.classList.add('show');
    }
    if (window.innerHeight > b) {
        SkillElement.classList.add('show');
    }
})