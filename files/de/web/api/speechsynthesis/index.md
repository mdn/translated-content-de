---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Das **`SpeechSynthesis`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist das Steuerungsinterface für den Sprachdienst; es kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren Synthesestimmen abzurufen, Sprache zu starten und zu pausieren sowie weitere Befehle auszuführen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`SpeechSynthesis` erbt auch Eigenschaften von seinem Elterninterface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesis.paused`](/de/docs/Web/API/SpeechSynthesis/paused) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn sich das `SpeechSynthesis`-Objekt in einem pausierten Zustand befindet.
- [`SpeechSynthesis.pending`](/de/docs/Web/API/SpeechSynthesis/pending) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn die Äußerungswarteschlange noch nicht gesprochene Äußerungen enthält.
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn eine Äußerung gerade gesprochen wird, selbst wenn `SpeechSynthesis` in einem pausierten Zustand ist.

## Instanz-Methoden

_`SpeechSynthesis` erbt auch Methoden von seinem Elterninterface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesis.cancel()`](/de/docs/Web/API/SpeechSynthesis/cancel)
  - : Entfernt alle Äußerungen aus der Äußerungswarteschlange.
- [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices)
  - : Gibt eine Liste von [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekten zurück, die alle auf dem aktuellen Gerät verfügbaren Stimmen repräsentieren.
- [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause)
  - : Versetzt das `SpeechSynthesis`-Objekt in einen pausierten Zustand.
- [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume)
  - : Versetzt das `SpeechSynthesis`-Objekt in einen nicht pausierten Zustand: setzt es fort, wenn es bereits pausiert war.
- [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)
  - : Fügt eine [`utterance`](/de/docs/Web/API/SpeechSynthesisUtterance) zur Äußerungswarteschlange hinzu; sie wird gesprochen, wenn alle vorher in der Warteschlange befindlichen Äußerungen gesprochen wurden.

## Ereignisse

Hören Sie auf dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener der `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event)
  - : Wird ausgelöst, wenn sich die Liste der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte geändert hat, die von der Methode [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) zurückgegeben würden.
    Auch über die `onvoiceschanged`-Eigenschaft verfügbar.

## Beispiele

Zuerst ein Beispiel:

```js
let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);
```

Nun betrachten wir ein umfangreicheres Beispiel. In unserem [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) holen wir uns zuerst eine Referenz zum SpeechSynthesis-Controller mit `window.speechSynthesis`. Nachdem wir einige notwendige Variablen definiert haben, rufen wir mit [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) eine Liste der verfügbaren Stimmen ab und füllen ein Auswahlmenü damit, sodass der Benutzer die gewünschte Stimme auswählen kann.

Im `inputForm.onsubmit`-Handler stoppen wir das Formular-Absenden mit [preventDefault()](/de/docs/Web/API/Event/preventDefault), erstellen eine neue [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Instanz, die den Text aus dem {{htmlelement("input")}} enthält, setzen die Stimme der Äußerung auf die im {{htmlelement("select")}}-Element ausgewählte Stimme und starten die Äußerung über die [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)-Methode.

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

  inputTxt.blur();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
