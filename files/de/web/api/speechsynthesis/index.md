---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesis`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Kontrollschnittstelle für den Sprachdienst. Diese kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren Synthesestimmen abzurufen, Sprachbefehle zu starten und zu pausieren sowie weitere Befehle auszuführen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`SpeechSynthesis` erbt auch Eigenschaften von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesis.paused`](/de/docs/Web/API/SpeechSynthesis/paused) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn sich das `SpeechSynthesis`-Objekt in einem pausierten Zustand befindet.
- [`SpeechSynthesis.pending`](/de/docs/Web/API/SpeechSynthesis/pending) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn die Äußerungswarteschlange noch nicht gesprochene Äußerungen enthält.
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn eine Äußerung gerade gesprochen wird – selbst wenn `SpeechSynthesis` in einem pausierten Zustand ist.

## Instanz-Methoden

_`SpeechSynthesis` erbt auch Methoden von seiner Elternschnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesis.cancel()`](/de/docs/Web/API/SpeechSynthesis/cancel)
  - : Entfernt alle Äußerungen aus der Äußerungswarteschlange.
- [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices)
  - : Gibt eine Liste von [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekten zurück, die alle auf dem aktuellen Gerät verfügbaren Stimmen darstellen.
- [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause)
  - : Versetzt das `SpeechSynthesis`-Objekt in einen pausierten Zustand.
- [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume)
  - : Versetzt das `SpeechSynthesis`-Objekt in einen nicht pausierten Zustand: nimmt es wieder auf, wenn es bereits pausiert war.
- [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)
  - : Fügt eine [`utterance`](/de/docs/Web/API/SpeechSynthesisUtterance) zur Äußerungswarteschlange hinzu; sie wird gesprochen, wenn alle davor in der Warteschlange befindlichen Äußerungen gesprochen wurden.

## Ereignisse

Hören Sie dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieser Schnittstelle zuweisen.

- [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event)
  - : Wird ausgelöst, wenn sich die Liste der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte geändert hat, die durch die [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices)-Methode zurückgegeben würde. Ebenfalls verfügbar über die `onvoiceschanged`-Eigenschaft.

## Beispiele

Zuerst ein einfaches Beispiel:

```js
let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);
```

Nun schauen wir uns ein umfangreicheres Beispiel an. In unserem [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) holen wir uns zuerst eine Referenz auf den SpeechSynthesis-Controller mittels `window.speechSynthesis`. Nachdem wir einige notwendige Variablen definiert haben, rufen wir eine Liste der verfügbaren Stimmen mit [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ab und füllen ein Auswahlmenü mit diesen, sodass der Benutzer die gewünschte Stimme wählen kann.

Im `inputForm.onsubmit`-Handler verhindern wir das Absenden des Formulars mit [preventDefault()](/de/docs/Web/API/Event/preventDefault), erstellen eine neue [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz, die den Text aus dem Text-`<input>` enthält, setzen die Stimme der Äußerung auf die im `<select>`-Element ausgewählte Stimme und starten das Sprechen der Äußerung über die [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)-Methode.

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector(".txt");
const voiceSelect = document.querySelector("select");
const pitch = document.querySelector("#pitch");
const pitchValue = document.querySelector(".pitch-value");
const rate = document.querySelector("#rate");
const rateValue = document.querySelector(".rate-value");

let voices = [];

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

  inputTxt.blur();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
