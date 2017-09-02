/**
 * This view is an example list of people.
 */
Ext.define('path.view.user.Details', {
    extend: 'Ext.form.Panel',
    xtype: 'userdetails',

    requires: [
        'path.view.user.UserModel'
    ],

    viewModel: {
        type: 'userform'
    },

    frame: true,

    title: 'Users Details',

    items: [
        {
            xtype: 'textfield',
            bind: '{rec.Name}',
            fieldLabel: 'Name'
        },
        {
            xtype: 'textfield',
            bind: '{rec.Firstname}',
            fieldLabel: 'Firstname'
        },
        {
            xtype: 'textfield',
            bind: '{rec.Lastname}',
            fieldLabel: 'Lastname'
        },
        {
            xtype: 'textfield',
            bind: '{rec.Department}',
            fieldLabel: 'Department'
        },
        {
            xtype: 'textfield',
            bind: '{rec.eMail}',
            fieldLabel: 'E-Mail'
        },
        {
            xtype: 'textfield',
            bind: '{rec.Status}',
            fieldLabel: 'Status'
        }

    ]
});
