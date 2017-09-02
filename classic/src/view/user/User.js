/**
 * This view is an example list of people.
 */
Ext.define('path.view.user.User', {
    extend: 'Ext.grid.Panel',
    xtype: 'useruser',

    requires: [
        'path.store.User'
    ],

    controller: 'user',

    viewConfig: {
        emptyText: 'No data'
    },

    title: 'Users',

    store: {
        type: 'user'
    },

    columns: [
        { text: 'Name',  dataIndex: 'Name', flex: 1 },
        { text: 'Firstname',  dataIndex: 'Firstname' },
        { text: 'Lastname',  dataIndex: 'Lastname' },
        { text: 'Department',  dataIndex: 'Department' },
        { text: 'E-Mail', dataIndex: 'eMail', flex: 1 },
        { text: 'Status', dataIndex: 'Status' }
    ],

    listeners: {
        select: 'onUserSelected'
    }
});
