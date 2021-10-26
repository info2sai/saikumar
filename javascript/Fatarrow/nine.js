//in ES5, it can be done as follow

this.num.forEach(function(num){
    if(num< 30)
    this.child.push(num);
}.bind(this));
