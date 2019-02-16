//buttons/links that show the page name when hovered on
$("#homeBtn").hover(homeText,backToIconHome);
function homeText() {
    $(this).text("home")
}
$("#skillsBtn").hover(skillsText,backToIconSkills);
function skillsText() {
    $(this).text("skills")
}
$("#resumeBtn").hover(resumeText,backToIconResume);
function resumeText() {
    $(this).text("resume")
}
$("#projectsBtn").hover(projectText,backToIconProjects);
function projectText() {
    $(this).text("projects")
}
$("#reflectionBtn").hover(reflectionText,backToIconReflections);
function reflectionText() {
    $(this).text("reflections")
}
$("#contactBtn").hover(contactText,backToIconContact);
function contactText() {
    $(this).text("contact me")
}
//function to change the button back to an icon on hover off
function backToIconHome(){
    $(this).text("");
    $(this).append("<img src=\'../icons/homeicon.png\' alt=\'circleicon\'>");
}
function backToIconSkills(){
    $(this).text("");
    $(this).append("<img src=\'../icons/skillsison.png\' alt=\'circleicon\'>");
}
function backToIconResume(){
    $(this).text("");
    $(this).append("<img src=\'../icons/resumeicon.png\' alt=\'circleicon\'>");
}
function backToIconProjects(){
    $(this).text("");
    $(this).append("<img src=\'../icons/projecticon.png\' alt=\'circleicon\'>");
}
function backToIconReflections(){
    $(this).text("");
    $(this).append("<img src=\'../icons/reflectionicon.png\' alt=\'circleicon\'>");
}
function backToIconContact(){
    $(this).text("");
    $(this).append("<img src=\'../icons/contacticon.png\' alt=\'circleicon\'>");
}

//skills page dynamic hover
$(".myEdu").hover(addPulse, removePulse);
$(".mySkills").hover(addPulse, removePulse);
function addPulse() {
    $(this).removeClass("fadeIn");
    $(this).addClass("pulse slow")
}
function removePulse() {
    $(this).removeClass("pulse slow");
}



