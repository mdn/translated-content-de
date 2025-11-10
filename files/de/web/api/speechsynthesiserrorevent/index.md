---
title: SpeechSynthesisErrorEvent
slug: Web/API/SpeechSynthesisErrorEvent
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die **`SpeechSynthesisErrorEvent`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) enthält Informationen über Fehler, die bei der Verarbeitung von [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekten im Sprachdienst auftreten.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechSynthesisErrorEvent()`](/de/docs/Web/API/SpeechSynthesisErrorEvent/SpeechSynthesisErrorEvent)
  - : Erstellt ein neues `SpeechSynthesisErrorEvent`.

## Instanz-Eigenschaften

_`SpeechSynthesisErrorEvent` erweitert die [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)-Schnittstelle, die Eigenschaften von ihrer Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), erbt._

- [`SpeechSynthesisErrorEvent.error`](/de/docs/Web/API/SpeechSynthesisErrorEvent/error) {{ReadOnlyInline}}
  - : Gibt einen Fehlercode zurück, der angibt, was bei einem Sprachsyntheseversuch schiefgelaufen ist.

## Instanz-Methoden

_`SpeechSynthesisErrorEvent` erweitert die [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)-Schnittstelle, die Methoden von ihrer Elternschnittstelle, [`Event`](/de/docs/Web/API/Event), erbt._

## Beispiele

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

// …

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
