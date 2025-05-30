---
title: SpeechSynthesisVoice
slug: Web/API/SpeechSynthesisVoice
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Das **`SpeechSynthesisVoice`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine vom System unterstützte Stimme. Jede `SpeechSynthesisVoice` hat ihren eigenen relativen Sprachdienst, einschließlich Informationen über Sprache, Name und URI.

## Instanz-Eigenschaften

- [`SpeechSynthesisVoice.default`](/de/docs/Web/API/SpeechSynthesisVoice/default) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Stimme die Standardstimme für die aktuelle Anwendungs-Sprache ist (`true`) oder nicht (`false`).
- [`SpeechSynthesisVoice.lang`](/de/docs/Web/API/SpeechSynthesisVoice/lang) {{ReadOnlyInline}}
  - : Gibt ein BCP 47-Sprachtag zurück, das die Sprache der Stimme angibt.
- [`SpeechSynthesisVoice.localService`](/de/docs/Web/API/SpeechSynthesisVoice/localService) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob die Stimme von einem lokalen Sprachsynthesizer-Dienst bereitgestellt wird (`true`) oder von einem entfernten Sprachsynthesizer-Dienst (`false`).
- [`SpeechSynthesisVoice.name`](/de/docs/Web/API/SpeechSynthesisVoice/name) {{ReadOnlyInline}}
  - : Gibt einen für Menschen lesbaren Namen zurück, der die Stimme repräsentiert.
- [`SpeechSynthesisVoice.voiceURI`](/de/docs/Web/API/SpeechSynthesisVoice/voiceURI) {{ReadOnlyInline}}
  - : Gibt den URI-Typ und den Ort des Sprachsynthese-Dienstes für diese Stimme zurück.

## Beispiele

Der folgende Ausschnitt stammt aus unserer [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js).

```js
const synth = window.speechSynthesis;
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
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
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
