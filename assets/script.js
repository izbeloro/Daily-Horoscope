
var yesterday = document.getElementById("yest");
var today = document.getElementById("today");
var tomorrow = document.getElementById("tom");
var funFact = document.getElementById("fact");
var aries = document.getElementById("aries");
var taurus = document.getElementById("taurus");
var gemini = document.getElementById("gemini");
var cancer = document.getElementById("cancer");
var leo = document.getElementById("leo");
var virgo = document.getElementById("virgo");
var libra = document.getElementById("libra");
var scorpio = document.getElementById("scorpio");
var sagittarius = document.getElementById("sagittarius");
var capricorn = document.getElementById("capricorn");
var aquarius = document.getElementById("aquarius");
var pisces = document.getElementById("pisces");

// functions for horoscope navigation
function showYest() {
    
}

function showToday() {

}

function showTom() {

}
function DisplayFunFact(event){
    event.preventDefault();
    var FactContainer = document.querySelector('#fact-container');
    FactContainer.classList.remove('hide');
}

// function for moon phase
function showMoon() {

}

function clickedAries() {
    document.getElementById("fun-fact-text").innerText = "Aries are the most active zodiac sign. They're always working, investing in a hobby, exercising, or meeting new people.";   
}

function clickedTaurus() {
    document.getElementById("fun-fact-text").innerText = "Taurus people are very sensitive, devoted, affectionate, loyal, honest, and trustworthy when they fall in love.";   

}

function clickedGemini() {
    document.getElementById("fun-fact-text").innerText = "Extroverted and fun-loving personalities are characteristics of Geminis. They enjoy being around others and are always up for a good time.";   

}

function clickedCancer() {
    document.getElementById("fun-fact-text").innerText = "You can be a bit moody at times, but overall, you are a loving and caring partner who just wants to make things work.";   

}

function clickedLeo() {
    document.getElementById("fun-fact-text").innerText = "Former President of the United States, Barack Obama, is a Leo, as are actors Arnold Schwarzenegger and Daniel Radcliffe.";   

}

function clickedVirgo() {
    document.getElementById("fun-fact-text").innerText = "Virgos are also known for their patience. While there are limits to patience, this Earth sign is more patient than others.";   

}

function clickedLibra() {
    document.getElementById("fun-fact-text").innerText = "Libras are very self-critical and always want to give 110% of themselves.";   

}

function clickedScorpio() {
    document.getElementById("fun-fact-text").innerText = "Stargazing, playing games, crystal gazing, music, gathering gems, yoga, and meditation are some of the interests for Scorpios to consider.";   

}

function clickedSagittarius() {
    document.getElementById("fun-fact-text").innerText = "Sagittarians will talk your ears off one day, and be calm and quiet the next. There’s no in-between.";   

}

function clickedCapricorn() {
    document.getElementById("fun-fact-text").innerText = "Alright, we know about the dependable nature of the Capricorn, but did you know they’re also one of the funniest zodiac signs?";   

}

function clickedAquarius() {
    document.getElementById("fun-fact-text").innerText = "The greatest inventor and forward thinker of all time, Thomas Edison, was an Aquarius, born February 11, 1847.";   

}

function clickedPisces() {
    document.getElementById("fun-fact-text").innerText = "Pisces are the least materialistic sign in the zodiac.";   

}

// event listeners
yesterday.addEventListener("click", showYest);
today.addEventListener("click", showToday);
tomorrow.addEventListener("click", showTom);
funFact.addEventListener("click", DisplayFunFact);
aries.addEventListener("click", clickedAries);
taurus.addEventListener("click", clickedTaurus);
gemini.addEventListener("click", clickedGemini);
cancer.addEventListener("click", clickedCancer);
leo.addEventListener("click", clickedLeo);
virgo.addEventListener("click", clickedVirgo);
libra.addEventListener("click", clickedLibra);
virgo.addEventListener("click", clickedVirgo);
scorpio.addEventListener("click", clickedScorpio);
sagittarius.addEventListener("click", clickedSagittarius);
capricorn.addEventListener("click", clickedCapricorn);
aquarius.addEventListener("click", clickedAquarius);
pisces.addEventListener("click", clickedPisces);
