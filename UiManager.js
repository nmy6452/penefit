function feedTypeManage() {
    var feed_type = document.querySelector('input[name="feed_type"]:checked').value;
    if (feed_type == "single") {
        const extra_feed = document.getElementsByClassName("extra_feed")
        for (step = 0; step < extra_feed.length; step++) {
            extra_feed[step].setAttribute('style', "display:none;");
        }
        // document.getElementsByClassName("extra_feed").setAttribute('style',"display:none;");
    }
    else if (feed_type == "mixed") {
        const extra_feed = document.getElementsByClassName("extra_feed")
        for (step = 0; step < extra_feed.length; step++) {
            extra_feed[step].removeAttribute('style');
        }
        // document.getElementsByClassName("extra_feed").removeAttribute('style');
    }
}

function petTypeManage() {
    var pet_type = document.querySelector('input[name="pet_type"]:checked').value;
    if (pet_type == "dog") {
        document.getElementById("cat").setAttribute('style', "display:none;");
        document.getElementById("dog").removeAttribute('style');
    }
    else if (pet_type == "cat") {
        document.getElementById("dog").setAttribute('style', "display:none;");
        document.getElementById("cat").removeAttribute('style');
    }
}

/** 
 * 
 * @param is_display  true or false
*/
function displayInfoBox(is_display) {
    const info_box = document.getElementsByClassName("info_box");
    if (is_display) {
        for (step = 0; step < info_box.length; step++) {
            info_box[step].removeAttribute('style');
        }
    }
    else {
        for (step = 0; step < info_box.length; step++) {
            info_box[step].setAttribute('style', "display:none;");
        }
    }
}

window.onload = function () {
    //셀렉트 박스 클릭시 발생 이벤트
    document.querySelectorAll('.selectbox').forEach((target) =>
        target.addEventListener("click", function(){
            if(target.className.includes('on')){
                target.classList.remove('on');
                target.nextElementSibling.classList.remove('on')
            }
            else{
                target.classList.add('on');
                target.nextElementSibling.classList.add('on')
            }
        }));
    //
    // document.querySelectorAll('.selectbox').forEach((target) =>
    // target.addEventListener("click", function(){
    //     console.log(target);
    // }));
}