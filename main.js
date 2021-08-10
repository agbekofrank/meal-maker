const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
      addDishToCourse(name, price){
        const dish = {
          name: name,
          price: price
        }
        this._courses[courseName].push(dish);
      },
      get appetizers(){
        return {appetizers: this.appetizers}
      },
      get mains(){
        return {mains: this.mains}
      },
      get desserts(){
        return {desserts: this.desserts}
      },
      set appetizers(a){},
      set mains(b){},
      set desserts(c){}
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName]
      const randIndex = Math.floor(Math.random() * dishes.length)
      console.log('Generated random number: ', randIndex)
      return dishes[randIndex]
    },
    generateRandomMeal(){
      const appetizer = this.menu.getRandomDishFromCourse('appetizers')
      const main = this.menu.getRandomDishFromCourse('main')
      const desserts = this.menu.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price + main.price + desserts.price;
      return `${appetizer}, ${main} and ${dessert} all at a cost of ${totalPrice} is ready`
  
    },
    get courses(){}
  }