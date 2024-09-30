---
title: SpeechSynthesisVoice
slug: Web/API/SpeechSynthesisVoice
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Das **`SpeechSynthesisVoice`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Stimme, die das System unterstützt. Jede `SpeechSynthesisVoice` verfügt über ihren eigenen Sprachdienst, der Informationen über Sprache, Name und URI enthält.

## Instanz-Eigenschaften

- [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Stimme die Standardstimme für die aktuelle App-Sprache ist (`true`), oder nicht (`false`).
- [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang) {{ReadOnlyInline}}
  - : Gibt ein BCP 47-Sprachtag zurück, das die Sprache der Stimme angibt.
- [`SpeechSynthesisVoice.localService`](/de/docs/Web/API/SpeechSynthesisVoice/localService) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Stimme von einem lokalen Sprachsynthesizer-Dienst bereitgestellt wird (`true`) oder von einem entfernten Sprachsynthesizer-Dienst (`false`).
- [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name) {{ReadOnlyInline}}
  - : Gibt einen menschenlesbaren Namen zurück, der die Stimme repräsentiert.
- [`SpeechSynthesisVoice.voiceURI`](/de/docs/Web/API/SpeechSynthesisVoice/voiceURI) {{ReadOnlyInline}}
  - : Gibt den URI-Typ und den Ort des Sprachsynthesedienstes für diese Stimme zurück.

## Beispiele

Der folgende Ausschnitt ist aus unserem [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js) entnommen.

```js
const synth = window.speechSynthesis;
function populateVoiceList() {
  voices = synth.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
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
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  utterThis.pitch = pitch.value;
  utterThis.rate = rate.value;
  synth.speak(utterThis);

  utterThis.onpause = (event) => {
    const char = event.utterance.text.charAt(event.charIndex);
    console.log(
      `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
    );
  };

  inputTxt.blur();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
