function translateText() {
    let text = document.getElementById("englishText").value;
    let url = "https://libretranslate.de/translate";

    if (!text) {
        alert("Please enter text to translate!");
        return;
    }

    fetch(url, {
        method: "POST",
        body: JSON.stringify({
            q: text,
            source: "en",
            target: "ur",
            format: "text"
        }),
        headers: { "Content-Type": "application/json" }
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("urduText").innerText = data.translatedText;
    })
    .catch(error => {
        console.error("Translation Error:", error);
        document.getElementById("urduText").innerText = "Error translating text!";
    });
}
