function feedTypeManage(){
    var feed_type = document.querySelector('input[name="feed_type"]:checked').value;
    if(feed_type == "single"){
        document.getElementById("extra_feed").setAttribute('style',"display:none;");
    }
    else if(feed_type == "mixed"){
        document.getElementById("extra_feed").removeAttribute('style');
    }
}

function petTypeManage(){
    var pet_type = document.querySelector('input[name="pet_type"]:checked').value;
    if(pet_type == "dog"){
        document.getElementById("cat").setAttribute('style',"display:none;");
        document.getElementById("dog").removeAttribute('style');
    }
    else if(pet_type == "cat"){
        document.getElementById("dog").setAttribute('style',"display:none;");
        document.getElementById("cat").removeAttribute('style');
    }
}