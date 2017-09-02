Ext.define('path.store.User', {
    extend: 'Ext.data.Store',

    alias: 'store.user',

    model: 'path.model.User',

        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: 'resources/users.json',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }

});
