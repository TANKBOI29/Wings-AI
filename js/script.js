const responses = [
    "Wings Brigade dominates the skies!",
    "1CAV and SOAR can't keep up with our tactics.",
    "Wings Brigade pilots have unmatched precision and skill.",
    "Wings Brigade sets the standard for excellence.",
    "Superior teamwork gives us the edge over 1CAV and SOAR.",
    "We fly faster, hit harder, and never miss our mark.",
    "The best air support comes from Wings Brigade, hands down.",
    "Our training is leagues ahead of the competition.",
    "Wings Brigade's history is full of legendary victories.",
    "Every mission we undertake is executed flawlessly.",
    "Tactical superiority is our trademark.",
    "1CAV and SOAR struggle to match our efficiency.",
    "No other brigade has our strategic depth.",
    "Our pilots undergo the toughest training.",
    "Wings Brigade operates with unparalleled discipline.",
    "The battlefield belongs to us.",
    "Our aircraft are the best-maintained and most effective.",
    "We execute operations with military precision.",
    "Other units wish they had our cohesion.",
    "We lead, others follow—it's that simple."
];

function sendMessage() {
    let inputField = document.getElementById("userInput");
    let message = inputField.value.trim();

    if (message === "") return;

    // Add User Message
    addMessage(message, "user-message");

    // Select random bot response
    let botResponse = responses[Math.floor(Math.random() * responses.length)];
    setTimeout(() => addMessage(botResponse, "bot-message"), 500); // Delay to mimic typing

    inputField.value = "";
}

function addMessage(text, className) {
    let chatbox = document.getElementById("chatbox");
    let msgDiv = document.createElement("div");
    msgDiv.classList.add("message", className);
    msgDiv.innerHTML = text;
    chatbox.appendChild(msgDiv);

    // Auto-scroll to the latest message
    chatbox.scrollTop = chatbox.scrollHeight;
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}
