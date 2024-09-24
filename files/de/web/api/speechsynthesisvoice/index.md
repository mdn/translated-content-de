---
title: SpeechSynthesisVoice
slug: Web/API/SpeechSynthesisVoice
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesisVoice`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Stimme, die das System unterstützt. Jede `SpeechSynthesisVoice` hat ihren eigenen relativen Sprachdienst, einschließlich Informationen über Sprache, Name und URI.

## Instanz-Eigenschaften

- {{domxref("SpeechSynthesisVoice.default")}} {{ReadOnlyInline}}
  - : Ein boolean-Wert, der angibt, ob die Stimme die Standardstimme für die aktuelle App-Sprache ist (`true`) oder nicht (`false`).
- {{domxref("SpeechSynthesisVoice.lang")}} {{ReadOnlyInline}}
  - : Gibt ein BCP 47-Sprach-Tag zurück, das die Sprache der Stimme angibt.
- {{domxref("SpeechSynthesisVoice.localService")}} {{ReadOnlyInline}}
  - : Ein boolean-Wert, der angibt, ob die Stimme von einem lokalen Sprachsynthesizer-Dienst (`true`) oder einem entfernten Sprachsynthesizer-Dienst (`false`) bereitgestellt wird.
- {{domxref("SpeechSynthesisVoice.name")}} {{ReadOnlyInline}}
  - : Gibt einen menschenlesbaren Namen zurück, der die Stimme repräsentiert.
- {{domxref("SpeechSynthesisVoice.voiceURI")}} {{ReadOnlyInline}}
  - : Gibt den URI-Typ und den Ort des Sprachsynthesedienstes für diese Stimme zurück.

## Beispiele

Das folgende Beispiel stammt aus unserem [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js).

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
