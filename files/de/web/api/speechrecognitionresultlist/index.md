---
title: SpeechRecognitionResultList
slug: Web/API/SpeechRecognitionResultList
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Das **`SpeechRecognitionResultList`** Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Liste von {{domxref("SpeechRecognitionResult")}} Objekten oder ein einzelnes Objekt, wenn Ergebnisse im {{domxref("SpeechRecognition.continuous","nicht-kontinuierlichen")}} Modus erfasst werden.

## Instanz-Eigenschaften

- {{domxref("SpeechRecognitionResultList.length")}} {{ReadOnlyInline}}
  - : Gibt die Länge des "Arrays" zurück - die Anzahl der {{domxref("SpeechRecognitionResult")}} Objekte in der Liste.

## Instanz-Methoden

- {{domxref("SpeechRecognitionResultList.item")}}
  - : Ein Standard-Getter, der es ermöglicht, auf {{domxref("SpeechRecognitionResult")}} Objekte in der Liste über Array-Syntax zuzugreifen.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) Beispiel.

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent-Ergebnisseigenschaft gibt ein SpeechRecognitionResultList-Objekt zurück
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es hat einen Getter, sodass es wie ein Array zugegriffen werden kann
  // Das erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte,
  // die einzelne Ergebnisse enthalten.
  // Diese haben ebenfalls Getter, sodass sie wie Arrays zugegriffen werden können.
  // Das zweite [0] gibt die SpeechRecognitionAlternative an Position 0 zurück.
  // Wir geben dann die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Ergebnis erhalten: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
