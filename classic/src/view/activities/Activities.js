/**
 * This view is an example list of people.
 */
Ext.define('path.view.activities.Activities', {
    extend: 'Ext.grid.Panel',
    xtype: 'useractivities',

    requires: [
        'path.store.Activities'
    ],

    viewConfig: {
        emptyText: 'No data',
        stripeRows: true,
        getRowClass: function(record) {
            var planed = new Date(record.get('Planned End').replace( /(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"))
            var actual = new Date(record.get('Actual End').replace( /(\d{2}).(\d{2}).(\d{4})/, "$2/$1/$3"))
            return (actual > planed) ? 'success-row' : 'error-row';
        }
    },

    title: 'Activities',

    store: {
        type: 'activities'
    },

    columns: [
        { text: 'Activity',  dataIndex: 'Activity', flex: 1 },
        { text: 'Planned Start',  dataIndex: 'Planned Start'},
        { text: 'Actual Start',  dataIndex: 'Actual Start' },
        { text: 'Planned End',  dataIndex: 'Planned End'},
        { text: 'Actual End', dataIndex: 'Actual End', flex: 1 },
        { text: 'Responsible user', dataIndex: 'Responsible user\r' }
    ]
});