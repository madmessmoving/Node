var Emitter = function() {
    this.prop = {};
}

Emitter.prototype.on = function(type, listener) {
    this.prop[type] = this.prop[type] || [];
    this.prop[type].push(listener);
}

Emitter.prototype.emit = function(type) {
    if(this.prop[type] != null) {
        this.prop[type].forEach(function(item) {
            item();
        });
    }
};

module.exports = Emitter;