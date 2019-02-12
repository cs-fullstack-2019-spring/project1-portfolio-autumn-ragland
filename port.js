//buttons that show the page name when hovered on
//these buttons will be linked to the other site pages
$("#aboutBtn").hover(aboutText,backToIcon);
function aboutText() {
    $(this).text("about")
}
$("#skillsBtn").hover(skillsText);
function skillsText() {
    $(this).text("skills")
}
$("#projectsBtn").hover(projectText);
function projectText() {
    $(this).text("projects")
}
$("#reflectionBtn").hover(reflectionText);
function reflectionText() {
    $(this).text("reflections")
}
//function to change the button back to an icon on hover off
function backToIcon(){
    console.log("FIX ME")
}
//show skills
//try to get this to work with on hover instead of onclick
//and find some cooler fonts
$("#mySkillsHeading").on("click", showSkills);
function showSkills() {
    $(this).text("");
    $(".mySkills").removeAttr("hidden")
}
//show education
//try to get this to work with on hover instead of onclick
//and find some cooler fonts
$("#myEduHeading").on("click", showEdu);
function showEdu() {
    $(this).text("");
    $(".myEdu").removeAttr("hidden")
}

