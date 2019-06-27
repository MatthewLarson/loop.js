function Loop(target, options) {
  function __ForLoop(target, begin, options) {
    this.options = options || {};
    this.target = target;
    this.callback = null;
    this.isReverse = this.options.isReverse || false;
    this.increment = this.options.increment || 1;
    if (this.isReverse === true) {
      this.begin = begin || this.target.length - 1;
    } else {
      this.begin = begin || 0;
    }
  }

  function __PopLoop(target, callback) {
    this.target = target;
    this.length = target.length;
    while (this.length--) {
      callback(this.length, this.target.pop());
    }
  }

  function __For(target, begin, options) {
    __ForLoop.call(this, target, begin, options);
  }

  __For.prototype = Object.create(__ForLoop.prototype);

  __ForLoop.prototype.do = function(callback) {
    this.callback = callback;
    return this.loopFunction();
  };

  __ForLoop.prototype.to = function(end) {
    if (this.isReverse === true) {
      this.end = end || 0;
    } else {
      this.end = end || this.target.length;
    }
    return this;
  };

  __ForLoop.prototype.loopFunction = function() {
    for (
      var x = this.isReverse === true ? this.end : this.begin;
      this.isReverse === true ? x >= 0 : x < this.end;
      this.isReverse === true ? (x -= this.increment) : (x += this.increment)
    ) {
      this.callback(x, this.target[x], this);
    }
  };

  /*__For.prototype.loopFunction = function() {
    if(this.isReverse === true){
      for(var x = this.begin, rLen = this.end; x >= rLen; x--){
        this.callback(x, this.target, this);
      }
    }else{
      for(var y = this.begin, len = this.end; y < len; y++){
        this.callback(y, this.target, this);
      }
    }
  };*/

  __For.prototype.loopFunction = function() {
    var x, len;
    if (this.isReverse === true) {
      x = this.begin;
      len = this.end;
      while (x >= len) {
        this.callback(x--, this.target, this);
      }
    } else {
      x = this.begin;
      len = this.end;
      while (x < len) {
        this.callback(x++, this.target, this);
      }
    }
  };

  return {
    target: target,
    options: options,
    for: function(begin) {
      return new __For(target, begin, options);
    },
    forr: function(begin) {
      if (typeof options === "undefined" || options == null) {
        options = {};
      }
      options.isReverse = true;
      return new __For(target, begin, options);
    },
    pop: function(callback, modifySource) {
      var modify = modifySource || false;
      if (modify === false) {
        target = target.slice(0);
      }
      return new __PopLoop(target, callback);
    }
  };
}
