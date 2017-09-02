/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'path.Application',

    name: 'path',

    requires: [
        // This will automatically load all classes in the path namespace
        // so that application classes do not need to require each other.
        'path.*'
    ],

    // The name of the initial view to create.
    mainView: 'path.view.main.Main'
});
