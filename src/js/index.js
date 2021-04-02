var app = new Vue({
    el: '#app',
    data: {
        keepOnDeath: false,
        lockInInventory: false,
        lockInSlot: false,
        selector: "@s",
        item: "apple",
        amount: 1,
        data: 0,
        command: ""
    },
    methods: {
        genCommand: function (item, amount, data, keepOnDeath, lockInInventory, lockInSlot, selector) {
            let components = {}

            if (keepOnDeath) {components.keep_on_death = {}; JSON.stringify(components)}
            else if (lockInInventory) {components.item_lock = {"mode": "lock_in_inventory"}; JSON.stringify(components)}
            else if (lockInSlot) {components.item_lock = {"mode": "lock_in_slot"}; JSON.stringify(components)}
            else {components=""};

            this.command = `give ${selector} ${item} ${amount} ${data} ${components}`
        }
    }
});