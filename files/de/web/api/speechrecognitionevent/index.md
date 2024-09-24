---
title: SpeechRecognitionEvent
slug: Web/API/SpeechRecognitionEvent
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionEvent`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert das Ereignisobjekt für die {{domxref("SpeechRecognition.result_event", "result")}}- und {{domxref("SpeechRecognition.nomatch_event", "nomatch")}}-Ereignisse und enthält alle Daten, die mit einem vorläufigen oder endgültigen Spracherkennungsergebnis verbunden sind.

{{InheritanceDiagram}}

## Instanzeigenschaften

_`SpeechRecognitionEvent` erbt außerdem Eigenschaften von seiner Elternschnittstelle, {{domxref("Event")}}._

- {{domxref("SpeechRecognitionEvent.emma")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt eine Extensible MultiModal Annotation Markup Language (EMMA) — XML — Repräsentation des Ergebnisses zurück.
- {{domxref("SpeechRecognitionEvent.interpretation")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Gibt die semantische Bedeutung dessen zurück, was der Benutzer gesagt hat.
- {{domxref("SpeechRecognitionEvent.resultIndex")}} {{ReadOnlyInline}}
  - : Gibt den niedrigsten Indexwert des Ergebnisses in dem {{domxref("SpeechRecognitionResultList")}}-"Array" zurück, der tatsächlich geändert wurde.
- {{domxref("SpeechRecognitionEvent.results")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("SpeechRecognitionResultList")}}-Objekt zurück, das alle Spracherkennungsergebnisse für die aktuelle Sitzung darstellt.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent results-Eigenschaft gibt ein SpeechRecognitionResultList-Objekt zurück
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es hat einen Getter, so dass es wie ein Array aufgerufen werden kann
  // Das erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte, die
  // individuelle Ergebnisse enthalten.
  // Diese haben auch Getter, so dass sie wie Arrays aufgerufen werden können.
  // Das zweite [0] gibt das SpeechRecognitionAlternative an Position 0 zurück.
  // Wir geben dann die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Resultat empfangen: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
