---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("Web Speech API")}}

Das **`SpeechSynthesis`** Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist das Steuerinterface für den Sprachdienst; es kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren synthetisierten Stimmen abzurufen, die Sprachwiedergabe zu starten und zu pausieren sowie andere Befehle auszuführen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`SpeechSynthesis` erbt auch Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesis.paused`](/de/docs/Web/API/SpeechSynthesis/paused) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn sich das `SpeechSynthesis`-Objekt in einem pausierten Zustand befindet.
- [`SpeechSynthesis.pending`](/de/docs/Web/API/SpeechSynthesis/pending) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn die Warteschlange der ausstehenden Äußerungen noch nicht gesprochene Äußerungen enthält.
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn eine Äußerung gerade ausgesprochen wird — selbst wenn `SpeechSynthesis` in einem pausierten Zustand ist.

## Instanzmethoden

_`SpeechSynthesis` erbt auch Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesis.cancel()`](/de/docs/Web/API/SpeechSynthesis/cancel)
  - : Entfernt alle Äußerungen aus der Äußerungswarteschlange.
- [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices)
  - : Gibt eine Liste von [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekten zurück, die alle verfügbaren Stimmen auf dem aktuellen Gerät repräsentieren.
- [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause)
  - : Versetzt das `SpeechSynthesis`-Objekt in einen pausierten Zustand.
- [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume)
  - : Versetzt das `SpeechSynthesis`-Objekt in einen nicht-paussierten Zustand: Es wird fortgesetzt, wenn es bereits pausiert war.
- [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)
  - : Fügt eine [`utterance`](/de/docs/Web/API/SpeechSynthesisUtterance) zur Äußerungswarteschlange hinzu; sie wird ausgesprochen, wenn alle vorher davor eingereihten Äußerungen gesprochen wurden.

## Events

Hören Sie auf dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisen eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieses Interfaces.

- [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event)
  - : Wird ausgelöst, wenn sich die Liste der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte geändert hat, die von der [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices)-Methode zurückgegeben würde.
    Ebenfalls verfügbar über die `onvoiceschanged`-Eigenschaft.

## Beispiele

Zuerst ein Beispiel:

```js
let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);
```

Schauen wir uns nun ein etwas umfassenderes Beispiel an. In unserem [Sprachausgabe-Demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) erhalten wir zunächst eine Referenz auf den SpeechSynthesis-Controller mit `window.speechSynthesis`. Nachdem wir einige notwendige Variablen definiert haben, rufen wir eine Liste der verfügbaren Stimmen mit [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ab und füllen ein Auswahlmenü, damit der Benutzer auswählen kann, welche Stimme er möchte.

Innerhalb des `inputForm.onsubmit`-Handlers verhindern wir mit [preventDefault()](/de/docs/Web/API/Event/preventDefault), dass das Formular abgeschickt wird, erstellen eine neue Instanz von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance), die den Text aus dem Text-{{htmlelement("input")}} enthält, setzen die Stimme der Äußerung auf die im {{htmlelement("select")}} Element ausgewählte Stimme und beginnen mit der Wiedergabe der Äußerung über die [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)-Methode.

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
