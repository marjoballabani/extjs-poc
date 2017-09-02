
Ext.define('path.view.user.UserController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.user',

    onUserSelected: function (sender, record) {
        var detailView = Ext.ComponentQuery.query('userdetails')[0];
        detailView.getViewModel().setData({ rec: record });
    }
});
