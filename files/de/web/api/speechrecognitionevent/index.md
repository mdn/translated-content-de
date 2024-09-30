---
title: SpeechRecognitionEvent
slug: Web/API/SpeechRecognitionEvent
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionEvent`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert das Ereignisobjekt für die [`result`](/de/docs/Web/API/SpeechRecognition/result_event)- und [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignisse und enthält alle Daten, die mit einem vorläufigen oder endgültigen Ergebnis der Spracherkennung verbunden sind.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_`SpeechRecognitionEvent` erbt auch Eigenschaften von seiner Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`SpeechRecognitionEvent.emma`](/de/docs/Web/API/SpeechRecognitionEvent/emma) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Extensible MultiModal Annotation Markup Language (EMMA) — XML — Repräsentation des Ergebnisses zurück.
- [`SpeechRecognitionEvent.interpretation`](/de/docs/Web/API/SpeechRecognitionEvent/interpretation) {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die semantische Bedeutung dessen zurück, was der Benutzer gesagt hat.
- [`SpeechRecognitionEvent.resultIndex`](/de/docs/Web/API/SpeechRecognitionEvent/resultIndex) {{ReadOnlyInline}}
  - : Gibt den niedrigsten Indexwert im Ergebnis der [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList) "Array" zurück, der tatsächlich geändert wurde.
- [`SpeechRecognitionEvent.results`](/de/docs/Web/API/SpeechRecognitionEvent/results) {{ReadOnlyInline}}
  - : Gibt ein [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung repräsentiert.

## Beispiele

Dieser Code ist aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel entnommen.

```js
recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain
  // individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
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
