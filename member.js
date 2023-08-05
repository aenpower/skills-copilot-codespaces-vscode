function skillsMember() {
    var member = this;
    member.name = '';
    member.skills = [];
    member.addSkill = addSkill;
    member.removeSkill = removeSkill;
    member.clearAll = clearAll;

    function addSkill() {
        if (member.skill) {
            member.skills.push(member.skill);
            member.skill = '';
        }
    }

    function removeSkill(skill) {
        var index = member.skills.indexOf(skill);
        if (index >= 0) {
            member.skills.splice(index, 1);
        }
    }

    function clearAll() {
        member.skills = [];
    }
}