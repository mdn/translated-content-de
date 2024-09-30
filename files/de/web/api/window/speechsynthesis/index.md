---
title: "Window: speechSynthesis-Eigenschaft"
short-title: speechSynthesis
slug: Web/API/Window/speechSynthesis
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte `speechSynthesis`-Eigenschaft des Window-Objekts gibt ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt zurück, das den Einstieg in die Nutzung der [Web Speech API](/de/docs/Web/API/Web_Speech_API)-Sprachausgabefunktionalität ermöglicht.

## Wert

Ein [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Objekt.

## Beispiele

In unserem einfachen [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) greifen wir zunächst auf den SpeechSynthesis-Controller mit `window.speechSynthesis` zu.
Nachdem wir einige notwendige Variablen definiert haben, rufen wir eine Liste der verfügbaren Stimmen mit [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ab und füllen damit ein Auswahlmenü, damit der Benutzer auswählen kann, welche Stimme er möchte.

Innerhalb des `inputForm.onsubmit`-Handlers verhindern wir die Formularübermittlung mit [preventDefault()](/de/docs/Web/API/Event/preventDefault), erstellen eine neue Instanz von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance), die den Text aus dem Text-{{htmlelement("input")}} enthält, setzen die Stimme der Äußerung auf die im {{htmlelement("select")}}-Element ausgewählte Stimme und starten die Äußerung über die Methode [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak).

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

function populateVoiceList() {
  voices = synth.getVoices();

  for (const voice of voices) {
    const option = document.createElement("option");
    option.textContent = `${voice.name} (${voice.lang})`;

    if (voice.default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voice.lang);
    option.setAttribute("data-name", voice.name);
    voiceSelect.appendChild(option);
  }
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  utterThis.voice = voices.find((v) => v.name === selectedOption);
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
