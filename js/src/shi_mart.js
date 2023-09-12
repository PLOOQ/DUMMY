class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  // 1. If canned beans, nothing
  // 2. Everything else, --
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      // switch
      // {
        // if(this.items[i].name == 'Canned Beans')
        //    coninue;
        //  this.items[i].sellIn = this.items[i].sellIn - 1;
        // if(....){
          // }
          // 
          // }
          // }

      if (this.items[i].name != 'Canned Beans') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }

      // Aged Brie Alone
      if (this.items[i].name == 'Aged Brie') {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
        }
      } else {
        if (this.items[i].quality > 0 && this.items[i].name != 'Canned Beans' && this.items[i].name != 'Baked Sourdough Bread') {
          this.items[i].quality = this.items[i].quality - 1;
        }
        else if(this.items[i].name == 'Baked Sourdough Bread')
        {
          if(this.items[i].quality > 1)
            this.items[i].quality = this.items[i].quality - 2;
          else if(this.items[i].quality == 1)
            this.items[i].quality = this.items[i].quality - 1;
        } 
      }

      if (this.items[i].sellIn < 0) {
        if (this.items[i].name == 'Aged Brie') {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        } 
        
        else {
          if (this.items[i].quality > 0 && this.items[i].name != 'Canned Beans') {
            if(this.items[i].name != 'Baked Sourdough Bread')
              this.items[i].quality = this.items[i].quality - 1;
            else if(this.items[i].name == 'Baked Sourdough Bread')
            {
              if(this.items[i].quality > 1)
                this.items[i].quality = this.items[i].quality - 2;
              else if(this.items[i].quality == 1)
                this.items[i].quality = this.items[i].quality - 1;
            } 
          }
        }
      }

    }
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
