// when document is ready, add a call to toggle() when the button track is clicked
$(document).ready(function() {
    $(".switch-track").click(toggle);
});

// when button track is clicked, move the switch accordingly
function toggle() {
    // if switch is at left side then move right, move left otherwise
    if($(".switch-toggle").css("margin-left") === "0px") {
        $(".switch-toggle").animate({marginLeft: '30px'}, 100, recolor);
    } else {
        $(".switch-toggle").animate({marginLeft: '0px'}, 100, recolor);
    }
}

// called from within toggle(), changes coloring off button track and button text
function recolor() {
    if($(".switch-toggle").css("margin-left") === "0px") {
        $(".switch-text-off").removeClass("black");
        $(".switch-text-on").addClass("black");
        $(".switch-track").css("background", "rgb(150, 255, 80)");
    } else {
        $(".switch-text-on").removeClass("black");
        $(".switch-text-off").addClass("black");
        $(".switch-track").css("background", "rgb(198, 198, 198)");
    }
}