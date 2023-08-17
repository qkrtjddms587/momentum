const quotes = [
{
    quote: "자쿠와는 다르다. 자쿠와는!", 
    author: "람바 랄",
},
{
    quote: "다리따윈 장식입니다! 높으신 붙들은 그걸 몰라요!",
    author: "지온국 기술장교",
},
{
    quote: "이것이 젊음인가!",
    author: "크와트로 버지나",
},
{
    quote: "디..디오! 왜 움직이지 않는거냐!",
    author: "팝티머스 시로코",
},
{
    quote: "2번이나 때렸어?! 아버지에게도 맞은적이 없는데!",
    author: "아무로 레이",
},
{
    quote: "에에잇! 연방의 MS는 괴물인가!",
    author: "샤아 아즈나블",
},
{
    quote: "속였구나 샤아",
    author: "가르마 자비",
},
{
    quote: "뭐야? 여자이름인데 남자인가?",
    author: "제리드 멧사",
},
{
    quote: "그것은 좋은것이다",
    author: "마 쿠베",
},
{
    quote: "선인장에 꽃이 피었군",
    author: "크와트로 버지나",
}]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const randomNumber = Math.floor(Math.random() * quotes.length);
const todaysQuote = quotes[randomNumber];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;