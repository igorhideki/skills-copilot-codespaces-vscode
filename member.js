function skillsMember() {
    var skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Mongo', 'SQL', 'Python'];

    return {
        getSkills: function() {
            return skills;
        },
        addSkill: function(skill) {
            skills.push(skill);
        }
    };
}