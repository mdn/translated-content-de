---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesis`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Steuerschnittstelle für den Sprachdienst; sie kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren Synthesestimmen abzurufen, Sprachwiedergabe zu starten und zu pausieren sowie andere Befehle auszuführen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`SpeechSynthesis` erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesis.paused`](/de/docs/Web/API/SpeechSynthesis/paused) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn sich das `SpeechSynthesis`-Objekt in einem pausierten Zustand befindet.
- [`SpeechSynthesis.pending`](/de/docs/Web/API/SpeechSynthesis/pending) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn die Äußerungs-Warteschlange noch nicht gesprochene Äußerungen enthält.
- [`SpeechSynthesis.speaking`](/de/docs/Web/API/SpeechSynthesis/speaking) {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn eine Äußerung derzeit gesprochen wird – auch wenn `SpeechSynthesis` in einem pausierten Zustand ist.

## Instanz-Methoden

_`SpeechSynthesis` erbt auch Methoden von seiner übergeordneten Schnittstelle, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`SpeechSynthesis.cancel()`](/de/docs/Web/API/SpeechSynthesis/cancel)
  - : Entfernt alle Äußerungen aus der Äußerungs-Warteschlange.
- [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices)
  - : Gibt eine Liste von [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekten zurück, die alle auf dem aktuellen Gerät verfügbaren Stimmen repräsentieren.
- [`SpeechSynthesis.pause()`](/de/docs/Web/API/SpeechSynthesis/pause)
  - : Versetzt das `SpeechSynthesis`-Objekt in einen pausierten Zustand.
- [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume)
  - : Versetzt das `SpeechSynthesis`-Objekt in einen nicht pausierten Zustand: setzt es fort, wenn es bereits pausiert war.
- [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)
  - : Fügt eine [`utterance`](/de/docs/Web/API/SpeechSynthesisUtterance) zur Äußerungs-Warteschlange hinzu; diese wird gesprochen, nachdem alle zuvor eingeordneten Äußerungen gesprochen wurden.

## Ereignisse

Dieses Ereignis kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden oder indem ein Ereignisüberwacher der `oneventname`-Eigenschaft dieser Schnittstelle zugewiesen wird.

- [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event)
  - : Wird ausgelöst, wenn sich die Liste der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte, die von der [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices)-Methode zurückgegeben werden, geändert hat.
    Auch über die `onvoiceschanged`-Eigenschaft verfügbar.

## Beispiele

Zuerst ein einfaches Beispiel:

```js
let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);
```

Nun betrachten wir ein umfangreicheres Beispiel. In unserem [Speech synthesizer demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) holen wir zunächst eine Referenz zum SpeechSynthesis-Controller mit `window.speechSynthesis`. Nachdem wir einige notwendige Variablen definiert haben, rufen wir eine Liste der verfügbaren Stimmen mit [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) ab und füllen damit ein Auswahlmenü, sodass der Benutzer wählen kann, welche Stimme er möchte.

Im `inputForm.onsubmit`-Handler verhindern wir das Absenden des Formulars mit [preventDefault()](/de/docs/Web/API/Event/preventDefault), erstellen eine neue [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Instanz, die den Text aus dem Text-{{htmlelement("input")}} enthält, setzen die Stimme der Äußerung auf die im {{htmlelement("select")}}-Element ausgewählte Stimme und starten das Sprechen der Äußerung über die [`SpeechSynthesis.speak()`](/de/docs/Web/API/SpeechSynthesis/speak)-Methode.

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
