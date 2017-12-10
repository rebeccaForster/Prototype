$(document).on('mobileinit', function () {
    $.mobile.autoInitializePage = false;
});

// put your javascript code in here
$(document).ready(function () {
    // Set default page to dashboard when App is loaded
    window.location.hash = 'home';
    $.mobile.initializePage();


    // When pages is initialized
    $('[data-role="page"]').on('pageinit', function (event, ui) {});


    // When pages is loaded
    $('[data-role="page"]').on('pageshow', function (event, ui) {
        $('[data-role=footer-navigation] [data-role=navbar] [data-role=navbar] a').removeClass('ui-btn-active');
        // Load Footer and inject it
        // Load Footer and inject it
        $('#' + event.target.id).find('[data-role="footer-navigation"]').load('footer-navigation.html', function () {
            // Activate Navigation in Footer after injected
            $('#' + event.target.id).find('[data-role=footer-navigation] [data-role=navbar]').navbar();
            if (window.location.hash) {
                $('[data-role=footer-navigation] [data-role=navbar] a[href="' + window.location.hash + '"]').addClass('ui-btn-active');
            }
        });
    });
});

function goBack() {
    parent.history.back();
}

var statusRegister = true;

function toggleRegister() {
    if (statusRegister) {
        //Register for course
        $("#btnMyCourses").text("Register");
    } else {
        //derigster for course
        $("#btnMyCourses").text("Deregister");
    }
    statusRegister = !statusRegister;
}



var statusExportDate = true;

function toggleExportDate() {
    if (!statusExportDate) {
        //export data to ios calendar
        $("#btnMyCourses").text("Export Date");
    } else {
        //deleted exported data
        $("#btnMyCourses").text("Delete Export Date");

    }
    statusExportDate = !statusExportDate;
}
var activInfo = true;
var activDate = false;
var activPlace = false;

function startMyCoursePanel() {
    $('[data-role=navbar] a[href="#myCoursesInfo"]').addClass('ui-btn-active ui-state-persist');
    $('[data-role=navbar] a[href="#myCoursesPlace"]').removeClass('ui-state-persist ui-btn-active');


}

function info() {
    activDate = false;
    activInfo = true;
    activPlace = false;
    if (statusRegister) {
        //Register for course
        $("#btnMyCourses").text("Register");
    } else {
        //derigster for course
        $("#btnMyCourses").text("Deregister");
    }
    
    var a = document.getElementById('btnMyCourses'); //or grab it by tagname etc
    a.href = ""
}

function startPlace() {
    activDate = false;
    activInfo = false;
    activPlace = true;
    $("#btnMyCourses").text("Start Navigation");
    $("#btnMyCourses")


    var a = document.getElementById('btnMyCourses'); //or grab it by tagname etc
    a.href = "#directions"


}

function date() {

    activDate = true;
    activInfo = false;
    activPlace = false;
    if (statusExportDate) {
        //export data to ios calendar
        $("#btnMyCourses").text("Export Date");
    } else {
        //deleted exported data
        $("#btnMyCourses").text("Delete Export Date");

    }
    var a = document.getElementById('btnMyCourses'); //or grab it by tagname etc
    a.href = ""
}

function footerMyCourses() {
    if (activPlace) {
        startDirection();
    } else if (activDate) {
        toggleExportDate();
    } else {
        toggleRegister();
    }

}

function startDirection() {

    $('[data-role=navbar] a[href="#myCoursesInfo"]').removeClass('ui-state-persist ui-btn-active');

    $('[data-role=navbar] a[href="#myCoursesPlace"]').addClass('ui-btn-active ui-state-persist');
}

var navigationStart = false;

function toggleDirection() {
    if (!navigationStart) {
        //start navigation
        $("#startNavigation").text("Stop Navigation");
    } else {
        //stopp navigation
        $("#startNavigation").text("Start Navigation");

    }
    navigationStart = !navigationStart;
}