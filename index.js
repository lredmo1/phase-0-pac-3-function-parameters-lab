function introduction(firstName) {
    console.log(`Hi, my name is ${firstName}!`);
    return `Hi, my name is ${firstName}.`;
}
introduction("Lisa")

function introductionWithLanguage(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguage("Josh", "Ember.js")

function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
introductionWithLanguageOptional("Gracie", "Python")