module.exports = {
    removeObject: function(object) {
        let value = String

        if (object.constructor === JSON) {
            value = 'Json'
        } else {
            value = 'asda'
        }
    
        console.log(value)
    },
}
