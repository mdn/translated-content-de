---
title: SpeechSynthesis
slug: Web/API/SpeechSynthesis
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die Schnittstelle **`SpeechSynthesis`** des [Web Speech API](/de/docs/Web/API/Web_Speech_API) ist die Kontrollschnittstelle für den Sprachdienst. Sie kann verwendet werden, um Informationen über die auf dem Gerät verfügbaren Synthesestimmen abzurufen, die Sprachausgabe zu starten und zu pausieren und andere Befehle auszuführen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`SpeechSynthesis` erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.paused")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn das `SpeechSynthesis`-Objekt sich im pausierten Zustand befindet.
- {{domxref("SpeechSynthesis.pending")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn die Aussprache-Warteschlange noch nicht gesprochene Äußerungen enthält.
- {{domxref("SpeechSynthesis.speaking")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der `true` zurückgibt, wenn eine Äußerung gerade gesprochen wird – selbst wenn `SpeechSynthesis` pausiert ist.

## Instanz-Methoden

_`SpeechSynthesis` erbt auch Methoden von seiner übergeordneten Schnittstelle, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesis.cancel()")}}
  - : Entfernt alle Äußerungen aus der Warteschlange.
- {{domxref("SpeechSynthesis.getVoices()")}}
  - : Gibt eine Liste von {{domxref("SpeechSynthesisVoice")}}-Objekten zurück, die alle auf dem aktuellen Gerät verfügbaren Stimmen darstellen.
- {{domxref("SpeechSynthesis.pause()")}}
  - : Versetzt das `SpeechSynthesis`-Objekt in einen pausierten Zustand.
- {{domxref("SpeechSynthesis.resume()")}}
  - : Versetzt das `SpeechSynthesis`-Objekt in einen nicht pausierten Zustand: setzt es fort, wenn es bereits pausiert war.
- {{domxref("SpeechSynthesis.speak()")}}
  - : Fügt der Aussprache-Warteschlange eine {{domxref("SpeechSynthesisUtterance", "Äußerung")}} hinzu; sie wird gesprochen, wenn alle vorher in der Warteschlange befindlichen Äußerungen gesprochen wurden.

## Ereignisse

Hören Sie dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) ab oder weisen Sie dieser Schnittstelle einen Ereignis-Listener über die `oneventname`-Eigenschaft zu.

- [`voiceschanged`](/de/docs/Web/API/SpeechSynthesis/voiceschanged_event)
  - : Wird ausgelöst, wenn sich die Liste der {{domxref("SpeechSynthesisVoice")}}-Objekte ändert, die von der Methode {{domxref("SpeechSynthesis.getVoices()")}} zurückgegeben werden würde.
    Auch über die `onvoiceschanged`-Eigenschaft verfügbar.

## Beispiele

Zuerst ein einfaches Beispiel:

```js
let utterance = new SpeechSynthesisUtterance("Hello world!");
speechSynthesis.speak(utterance);
```

Nun betrachten wir ein komplexeres Beispiel. In unserem [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis) holen wir zuerst eine Referenz zum SpeechSynthesis-Controller mit `window.speechSynthesis`. Nachdem wir einige notwendige Variablen definiert haben, rufen wir eine Liste der verfügbaren Stimmen mit {{domxref("SpeechSynthesis.getVoices()")}} ab und füllen damit ein Auswahlmenü, damit der Benutzer auswählen kann, welche Stimme er verwenden möchte.

Innerhalb des `inputForm.onsubmit`-Handlers verhindern wir das Absenden des Formulars mit [preventDefault()](/de/docs/Web/API/Event/preventDefault), erstellen eine neue Instanz von {{domxref("SpeechSynthesisUtterance")}}, die den Text aus dem Text-{{htmlelement("input")}} enthält, setzen die Stimme der Äußerung auf die im {{htmlelement("select")}}-Element ausgewählte Stimme und starten die Äußerung mit der Methode {{domxref("SpeechSynthesis.speak()")}}.

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
