//buttons that show the page name when hovered on
//these buttons are linked to the other site pages
$("#homeBtn").hover(homeText,backToIcon);
function homeText() {
    $(this).text("home")
}
$("#skillsBtn").hover(skillsText,backToIcon);
function skillsText() {
    $(this).text("skills")
}
$("#resumeBtn").hover(resumeText,backToIcon);
function resumeText() {
    $(this).text("resume")
}
$("#projectsBtn").hover(projectText,backToIcon);
function projectText() {
    $(this).text("projects")
}
$("#reflectionBtn").hover(reflectionText,backToIcon);
function reflectionText() {
    $(this).text("reflections")
}
//function to change the button back to an icon on hover off
function backToIcon(){
    $(this).text("");
    $(this).append("<img src=\'icons/orangeC.png\' alt=\'circleicon\'>");
}

$(".myEdu").hover(addPulse, removePulse);
$(".mySkills").hover(addPulse, removePulse);
function addPulse() {
    $(this).removeClass("fadeIn");
    $(this).addClass("pulse slow")
}
function removePulse() {
    $(this).removeClass("pulse slow");
}



