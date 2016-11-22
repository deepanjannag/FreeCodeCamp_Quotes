var randomObjects = [{
    quote: 'There is a natural aristocracy among men. The grounds of this are virtue and talents.',
    person: 'Thomas Jefferson',
    color: '#004358'
},
{
    quote: 'All our words from loose using have lost their edge.',
    person: 'Ernest Hemingway',
    color: '#1F8A70'
},
{
    quote: 'God couldn\'t be everywhere, so he created mothers',
    person: 'Jewish proverb',
    color: '#BEDB39'
},
{
    quote: 'Be not afraid of going slowly, be afraid only of standing still.',
    person: 'Chinese proverb',
    color: '#FFE11A'
},
{
    quote: 'Learn from yesterday, live for today, hope for tomorrow.',
    person: 'Unknown Source',
    color: '#FD7400'
},
{
    quote: 'Do not confine your children to your own learning, for they were born in another time.',
    person: 'Chinese proverb',
    color: '#2980B9'
},
{
    quote: 'In teaching others we teach ourselves.',
    person: 'Proverb',
    color: '#644D52'
},
{
    quote: 'Happiness will never come to those who fail to appreciate what they already have.',
    person: 'Unknown Source',
    color: '#8A0917'
},
{
    quote: 'Without His love I can do nothing, with His love there is nothing I cannot do.',
    person: 'Unknown Source',
    color: '#FF974F'
}];
getQuote();
function getQuote() {
    var num = Math.trunc(Math.random() * randomObjects.length);
    if (randomObjects[num].quote == document.querySelector('#quote').textContent)
        num = (num + 1) % randomObjects.length;
    setQuote(randomObjects[num].quote, randomObjects[num].person, randomObjects[num].color);
};

function setQuote(quote, person, color) {
    //  if (quote == document.querySelector('#quote').textContent)
    //     getQuote();
    document.querySelector('#quote').textContent = quote;
    document.querySelector('#person').textContent = person;
    $('body').css('background-color', color);
    $('body').css('color', color);
    $('a.btn.btn-primary').attr('href', 'https://twitter.com/intent/tweet?text=' + quote + '&via=' + 'deepanjan_nag');
}
document.getElementById('myButton').addEventListener('click', function () { getQuote(); });