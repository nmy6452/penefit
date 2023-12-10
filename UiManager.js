function feedTypeManage(){
    var pet_type = document.querySelector('input[name="feed_type"]:checked').value;
    if(pet_type == "single"){
        document.getElementById("extra_feed").setAttribute('style',"display:none;");
        document.getElementById("penemill_amount").parentNode.removeAttribute('style');
    }
    else if(pet_type == "mixed"){
        document.getElementById("penemill_amount").parentNode.setAttribute('style',"display:none;");
        document.getElementById("extra_feed").removeAttribute('style');
    }
}