Ext.define('path.store.Activities', {
    extend: 'Ext.data.Store',

    alias: 'store.activities',

    model: 'path.model.Activities',

        requires: [
            'path.proxy.Proxy'
        ],

        autoLoad: true,

        proxy: {
            type: 'ajax',
            url: 'resources/activities.csv',
            reader: {
                type: 'csv',
                rootProperty: 'items'
            }
        }

});
