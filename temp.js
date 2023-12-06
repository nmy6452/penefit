const DOG = {
    BABY: 3,
    TEENAGER: 2,
    PREGNANT: 2,
    LACTATION: 5,
    OLD: 1.6,
    ELDERLY: 1.4,
    FAT: 1,
    CHUBBY: 1.4,
    UNNEUTERED: 1.8,
    NEUTERED: 1.6,
    ATHLETIC: 2
};

const CAT = {
    BABY: 3,
    JUNIOR: 2.5,
    TEENAGER: 2,
    PREGNANT: 2,
    LACTATION: 5,
    OLD: 1.6,
    ELDERLY: 1.4,
    FAT: 0.8,
    CHUBBY: 1,
    UNNEUTERED: 1.6,
    NEUTERED: 1.4,
    ATHLETIC: 2.5
};

const FEED = {
    crude_protein: 1,
    crude_fat: 1,
    carbohydrate: 1
}

function make_result() {
    
    var pet_type = document.getElementById("pet_type").value;
    var dog_activity_Index = document.getElementById("dog_activity_Index").value;
    var cat_activity_Index = document.getElementById("cat_activity_Index").value;
    var feed = document.getElementById("feed").value;
    var weight = document.getElementById("weight").value;
    var activity_Index = null;
    if(pet_type == "dog"){
        activity_Index = activityIndex(pet_type,dog_activity_Index);
    }
    else{
        activity_Index = activityIndex(pet_type,cat_activity_Index);
    }
    // alert(activity_Index);

    //공통부
    document.getElementById("calorie_count").innerHTML = calorieCount(FEED);
    document.getElementById("calorie_per_count").innerHTML = caloriePerCount(FEED);
    document.getElementById("total_calorie_count").innerHTML = totalCalorieCount(FEED,100);
    
    //개별부
    document.getElementById("activity_index").innerHTML = activity_Index;
    document.getElementById("basal_metabolic").innerHTML = basalMetabolic(pet_type,weight);
    document.getElementById("recommended_calories").innerHTML = recommendedCalories(pet_type,activity_Index,weight);
    document.getElementById("feed_amount").innerHTML = feedAmount(pet_type,activity_Index,weight,FEED);
    document.getElementById("water_needs").innerHTML = waterNeeds(pet_type,weight);


}

//공통부
function calorieCount(feed){
    return (feed.crude_protein*3.5) * (feed.crude_fat*8.5) * (feed.carbohydrate*3.5);
}

function caloriePerCount(feed){
    return calorieCount(feed)/100;
}

function totalCalorieCount(feed,weight){
    return caloriePerCount(feed) * weight;
}


//개별부
function activityIndex(pet_type, activity_index){
    if(pet_type == "dog"){
        //TODO 수정 필요
        return DOG[activity_index];
    }
    else if(pet_type == "cat"){
        //TODO 수정 필요
        return CAT[activity_index];
    }
}

function basalMetabolic(pet_type, weight){
    if(pet_type == "dog"){
        if(weight<2){
            return weight * 70 * 0.75
        }
        else if(2<=weight && weight<20){
            return (weight * 30) + 70
        }
        else if(20<weight){
            return weight * 70 * 0.75
        }
    }
    else if(pet_type == "cat"){
        if(weight<2){
            return weight * 70 * 0.75
        }
        else if(2<=weight && weight<20){
            return (weight * 30) + 70
        }
        else if(20<weight){
            return weight * 70 * 0.75
        }
    }
}


function recommendedCalories(pet_type, activity_index, weight){
    if(pet_type == "dog"){
        return activity_index * basalMetabolic(pet_type, weight);
    }
    else if(pet_type == "cat"){
        return activity_index * basalMetabolic(pet_type, weight);
    }
}

function feedAmount(pet_type,activity_index,weight,feed){
    if(pet_type == "dog"){
        return recommendedCalories(pet_type,activity_index,weight) / caloriePerCount(feed);
    }
    else if(pet_type == "cat"){
        return recommendedCalories(pet_type,activity_index,weight) / caloriePerCount(feed);
    }
}

function waterNeeds(pet_type, weight){
    if(pet_type == "dog"){
        return Math.pow(weight, 0.75) * 132;
    }
    else if(pet_type == "cat"){
        return Math.pow(weight, 0.75) * 70;
    }
}