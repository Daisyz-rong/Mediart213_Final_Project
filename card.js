const quotes = [
  "😺 Today is another perfect day for harmless loafing, meow.",
  "🐾 Drink more water, nap more often, work less, meow.",
  "😼 I'm watching you… no overworking allowed.",
  "🐱 You can do things slowly — as long as you do them cutely.",
  "✨ The world needs more patience… and more tiny fish treats.",
  "🌙 Sleep well tonight. I’ll meet you in your dreams, meow.",
  "🐈 Soft paws, soft heart — take it easy today.",
  "😽 Sending you a tiny nose boop of encouragement.",
  "🐾 If life feels heavy, take a nap. Cats approve.",
  "😸 You’re doing great. Remember to stretch like a cat.",
  "🍃 A gentle day is still a good day, meow.",
  "🐈‍⬛ Even shadows look cozy when you're a cat.",
  "😴 Rest is productive — ask any cat.",
  "🧡 You deserve a snack break. Cats never forget theirs.",
  "🌤️ Sunbeam detected. Time to recharge like a cat."
];


function newQuote() {
  const q = document.getElementById("catQuote");
  let next = quotes[Math.floor(Math.random() * quotes.length)];
  q.textContent = next;
}
document.addEventListener("DOMContentLoaded", newQuote);
