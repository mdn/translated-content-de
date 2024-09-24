---
title: "Window: speechSynthesis-Eigenschaft"
short-title: speechSynthesis
slug: Web/API/Window/speechSynthesis
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft `speechSynthesis` des Window-Objekts gibt ein {{domxref("SpeechSynthesis")}}-Objekt zurück, welches den Einstiegspunkt zur Nutzung der Sprachsynthesefunktionalität der [Web Speech API](/de/docs/Web/API/Web_Speech_API) darstellt.

## Wert

Ein {{domxref("SpeechSynthesis")}}-Objekt.

## Beispiele

In unserem grundlegenden [Speech Synthesizer-Demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) holen wir zunächst eine Referenz zum SpeechSynthesis-Controller mit `window.speechSynthesis`.
Nach der Definition einiger notwendiger Variablen rufen wir eine Liste der verfügbaren Stimmen mit {{domxref("SpeechSynthesis.getVoices()")}} ab und füllen ein Auswahlmenü mit ihnen, sodass der Benutzer die gewünschte Stimme auswählen kann.

Innerhalb des `inputForm.onsubmit`-Handlers verhindern wir das Absenden des Formulars mit [preventDefault()](/de/docs/Web/API/Event/preventDefault), erstellen eine neue {{domxref("SpeechSynthesisUtterance")}}-Instanz, die den Text aus dem Text-{{htmlelement("input")}} enthält, setzen die Stimme der Sprachäußerung auf die im {{htmlelement("select")}}-Element ausgewählte Stimme und starten das Sprechen der Äußerung über die {{domxref("SpeechSynthesis.speak()")}}-Methode.

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
