//buttons that show the page name when hovered on
//these buttons are linked to the other site pages
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
    $(this).append("<img src=\'icons/circleicon.png\' alt=\'circleicon\'>");
}
//show skills
//try to get this to work with on hover instead of onclick
//and find some cooler fonts
$("#skillsBtnShow").click(showSkills);
function showSkills() {
    $(".mySkills").removeAttr("hidden");
}

//show education
//try to get this to work with on hover instead of onclick
//and find some cooler fonts
$("#eduBtnShow").click(showEdu);
function showEdu() {
    $(".myEdu").removeAttr("hidden")
}

