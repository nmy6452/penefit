var PET;
var FEED;
fetch('./pet.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        PET = jsondata
    })
fetch('./feed.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        FEED = jsondata
    })

// const PET = require('./pet.json');
// const FEED = require('./feed.json');


function makeResult() {
    try{
        let feed_type = document.querySelector('input[name="feed_type"]:checked').value;
        let pet_type = document.querySelector('input[name="pet_type"]:checked').value;
        let dog_activity_Index = document.getElementById("dog_activity_Index").dataset.val;
        let cat_activity_Index = document.getElementById("cat_activity_Index").dataset.val;
        let feed = document.getElementById("feed").dataset.val;
        let weight = document.getElementById("weight").value;
        let extra_feed_kcal = document.getElementById("extra_feed_kcal").value;
        let extra_feed_amount = document.getElementById("extra_feed_amount").value / 1000;
        // let penemill_amount = document.getElementById("penemill_amount").value;
        let activity_Index = null;
        if (pet_type == "dog") {
            activity_Index = activityIndex(pet_type, dog_activity_Index);
        }
        else {
            activity_Index = activityIndex(pet_type, cat_activity_Index);
        }
    
        displayInfoBox(true);
        document.getElementById("basal_metabolic").innerHTML = Math.floor(basalMetabolic(pet_type, weight));
        document.getElementById("recommended_calories").innerHTML = Math.floor(recommendedCalories(pet_type, activity_Index, weight));
    
        let penemill_amount = 0;
        if(feed_type == "mixed"){
            penemill_amount = (feedAmount(pet_type, activity_Index, weight, extra_feed_kcal, extra_feed_amount) / caloriePerCount(FEED[feed]));
            if(penemill_amount <= 0){
                alert("급여 칼로리가 권장 칼로리를 초과했습니다.");
            }
        }
        else{
            penemill_amount = penemillAmount(pet_type, activity_Index, weight, FEED[feed]);
        }
        document.getElementById("penemill_amount").innerHTML = Math.floor(penemill_amount);
        document.getElementById("water_needs").innerHTML = Math.floor(waterNeeds(pet_type, weight));
    }
    catch(err){
        alert("입력 항목을 빠짐없이 기입해주세요.");
        displayInfoBox(false);
    }
    
}

//공통부
function calorieCount(feed) {
    return (feed.crude_protein * 3.5) + (feed.crude_fat * 8.5) + (feed.carbohydrate * 3.5);
}

function caloriePerCount(feed) {
    return calorieCount(feed) / 100;
}

function exteaFeedKcal(Kacl, weight) {
    return Kacl * weight;
}

function totalCalorieCount(feed) {
    return caloriePerCount(feed) * feed.penemill_amount;
}


//개별부
function activityIndex(pet_type, activity_index) {
    if (pet_type == "dog") {
        //TODO 수정 필요
        return PET.dog[activity_index];
    }
    else if (pet_type == "cat") {
        //TODO 수정 필요
        return PET.cat[activity_index];
    }
}

function basalMetabolic(pet_type, weight) {
    if (pet_type == "dog") {
        if (weight < 2) {
            return weight * 70 * 0.75
        }
        else if (2 <= weight && weight < 20) {
            return (weight * 30) + 70
        }
        else if (20 < weight) {
            return weight * 70 * 0.75
        }
    }
    else if (pet_type == "cat") {
        if (weight < 2) {
            return weight * 70 * 0.75
        }
        else if (2 <= weight && weight < 20) {
            return (weight * 30) + 70
        }
        else if (20 < weight) {
            return weight * 70 * 0.75
        }
    }
}


function recommendedCalories(pet_type, activity_index, weight) {
    if (pet_type == "dog") {
        return activity_index * basalMetabolic(pet_type, weight);
    }
    else if (pet_type == "cat") {
        return activity_index * basalMetabolic(pet_type, weight);
    }
}

function feedAmount(pet_type, activity_index, weight, extra_feed_kcal, extra_feed_amount) {
    if (pet_type == "dog") {
        return recommendedCalories(pet_type, activity_index, weight) - exteaFeedKcal(extra_feed_kcal, extra_feed_amount);
    }
    else if (pet_type == "cat") {
        return recommendedCalories(pet_type, activity_index, weight) - exteaFeedKcal(extra_feed_kcal, extra_feed_amount);
    }
}

function penemillAmount(pet_type, activity_index, weight, feed) {
    if (pet_type == "dog") {
        return recommendedCalories(pet_type, activity_index, weight) / caloriePerCount(feed);
    }
    else if (pet_type == "cat") {
        return recommendedCalories(pet_type, activity_index, weight) / caloriePerCount(feed);
    }
}

function waterNeeds(pet_type, weight) {
    if (pet_type == "dog") {
        return Math.pow(weight, 0.75) * 132;
    }
    else if (pet_type == "cat") {
        return Math.pow(weight, 0.75) * 80;
    }
}
