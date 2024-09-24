---
title: SpeechSynthesisErrorEvent
slug: Web/API/SpeechSynthesisErrorEvent
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesisErrorEvent`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) enthält Informationen über Fehler, die bei der Verarbeitung von {{domxref("SpeechSynthesisUtterance")}}-Objekten im Sprachdienst auftreten.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("SpeechSynthesisErrorEvent.SpeechSynthesisErrorEvent", "SpeechSynthesisErrorEvent()")}}
  - : Erstellt ein neues `SpeechSynthesisErrorEvent`.

## Instanz-Eigenschaften

_`SpeechSynthesisErrorEvent` erweitert die {{domxref("SpeechSynthesisEvent")}}-Schnittstelle, welche Eigenschaften von ihrer Elternschnittstelle {{domxref("Event")}} erbt._

- {{domxref("SpeechSynthesisErrorEvent.error")}} {{ReadOnlyInline}}
  - : Gibt einen Fehlercode zurück, der anzeigt, was bei einem Sprachsyntheseversuch schiefgegangen ist.

## Instanz-Methoden

_`SpeechSynthesisErrorEvent` erweitert die {{domxref("SpeechSynthesisEvent")}}-Schnittstelle, welche Methoden von ihrer Elternschnittstelle {{domxref("Event")}} erbt._

## Beispiele

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

// ...

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

  synth.speak(utterThis);

  utterThis.onerror = (event) => {
    console.log(
      `An error has occurred with the speech synthesis: ${event.error}`,
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
