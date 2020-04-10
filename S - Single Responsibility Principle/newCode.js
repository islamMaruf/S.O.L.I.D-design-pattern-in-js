function logger(){
    console.log('max calories exceed')
}

class CalorieTracker{
    constructor(maxCalories){
        this.maxCalories = maxCalories;
        this.currentCalories = 0;
    }
    trackCalories(calorieCount){
        this.currentCalories += calorieCount;
        if(this.currentCalories > this.maxCalories){
            logger('max calories exceed')
        }

    }

}
const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(1500);
