---
title: SpeechRecognitionEvent
slug: Web/API/SpeechRecognitionEvent
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognitionEvent`** Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert das Ereignisobjekt für die [`result`](/de/docs/Web/API/SpeechRecognition/result_event) und [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event) Ereignisse und enthält alle Daten, die mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbunden sind.

{{InheritanceDiagram}}

## Konstruktor

- [`SpeechRecognitionEvent()`](/de/docs/Web/API/SpeechRecognitionEvent/SpeechRecognitionEvent)
  - : Erstellt ein neues `SpeechRecognitionEvent` Objekt.

## Instanz-Eigenschaften

_`SpeechRecognitionEvent` erbt auch Eigenschaften von seinem übergeordneten Interface, [`Event`](/de/docs/Web/API/Event)._

- [`SpeechRecognitionEvent.resultIndex`](/de/docs/Web/API/SpeechRecognitionEvent/resultIndex) {{ReadOnlyInline}}
  - : Gibt den niedrigsten Indexwert des Ergebnisses im [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) "Array" zurück, das tatsächlich geändert wurde.
- [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung darstellt.

## Beispiele

Dieser Code ist aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) Beispiel entnommen.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
