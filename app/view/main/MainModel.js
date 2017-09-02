/**
 * This class is the view model for the Main view of the application.
 */
Ext.define('path.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',

    alias: 'viewmodel.main',

    data: {
        name: 'Nordan',

        loremIpsum: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',

        details: '<div class=\"home-details\">\
        <h1>Project Details</h1>\
        <ul class=\"details-main-ul\">\
        <li>step 1 - warm up: \
        <ul><li>I have read documentation for what i needed in this project. Just to prove that i can learn fast</li></ul></li> \
        <li>step 2 – get your hands dirty: \
        <ul><li>Data are generated from proxy and puted in json file just to use Json proxy<br>MVVM is implemented for Users. when you click a user automaticly fill details form</li></ul></li> \
        <li>step 3 – show off some skillzzz: \
        <ul><li>Proxy is implemented to automaticly get CSV and return json data classic/src/proxy</li></ul></li>\
        <li>step 4 – pick some low-hanging fruits: \
        <ul><li>Data are received using created Proxy that read csv and return json at the same time\
        colors<br> are used to  indicate where a project might be \
        behind schedule.<br> Planned end and Actual end are compared</li></ul></li>\
        </ul></div>\
        '
    }

    //TODO - add data, formulas and/or methods to support your view
});
