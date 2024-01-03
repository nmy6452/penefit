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
        document.getElementById("cat_activity_Index").setAttribute('style', "display:none;");
        document.getElementById("dog_activity_Index").removeAttribute('style');
    }
    else if (pet_type == "cat") {
        document.getElementById("dog_activity_Index").setAttribute('style', "display:none;");
        document.getElementById("cat_activity_Index").removeAttribute('style');
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
    document.querySelectorAll('.listbox .list').forEach((target) =>
    target.addEventListener("click", function(){
        const rootElement = parentElementWithClass(target, "cal_input_value");
        rootElement.dataset.val = target.dataset.val;
        rootElement.firstElementChild.firstElementChild.innerHTML = target.innerHTML;
        rootElement.firstElementChild.classList.remove('on');
        rootElement.lastElementChild.classList.remove('on');
    }));
}

function parentElementWithClass(target, class_name){
    let parentWithClass = target.parentElement;
    while (parentWithClass && !parentWithClass.classList.contains(class_name)) {
        parentWithClass = parentWithClass.parentElement;
    }
    return parentWithClass;
}