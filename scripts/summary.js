
class Card {
    constructor(item){
      this.item = item;
    }
    cardDetails() {
      if(this.item == undefined){
        this.item = 'Nothing purchased'
        var l1 = document.createElement('LI')
        var line = document.createTextNode(this.item)
        l1.appendChild(line)
      }
      var l1 = document.createElement('LI');
      var line = document.createTextNode(this.item);
      l1.appendChild(line);
    return (l1);
    };
  };

var array = [];
array[0] = new Card(sessionStorage.getItem('Name'));
array[1] = new Card(sessionStorage.getItem('Num'));

var orderarray = [];
orderarray[0] = new Card(sessionStorage.getItem('Item1'));
orderarray[1] = new Card(sessionStorage.getItem('Item2'));
orderarray[2] = new Card(sessionStorage.getItem('Item3'));

var ttlarray = []
ttlarray[0] = new Card(sessionStorage.getItem('Total'))


for(let card of array){
    document.querySelector('.ul').appendChild(card.cardDetails());
  }
for(let card of orderarray){
  document.querySelector('.ol').appendChild(card.cardDetails());
}
for(let card of ttlarray){
  document.querySelector('.ttl').appendChild(card.cardDetails());
}
