---
title: SpeechRecognitionAlternative
slug: Web/API/SpeechRecognitionAlternative
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionAlternative`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert ein einzelnes Wort, das vom Spracherkennungsdienst erkannt wurde.

## Instanzeigenschaften

- {{domxref("SpeechRecognitionAlternative.transcript")}} {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das Transkript des erkannten Wortes enthält.
- {{domxref("SpeechRecognitionAlternative.confidence")}} {{ReadOnlyInline}}
  - : Gibt eine numerische Schätzung zwischen 0 und 1 zurück, wie sicher sich das Spracherkennungssystem ist, dass die Erkennung korrekt ist.

## Beispiele

Dieser Code stammt aus unserem
[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
recognition.onresult = (event) => {
  // Die Eigenschaft results des SpeechRecognitionEvent gibt ein SpeechRecognitionResultList-Objekt zurück
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es verfügt über einen Getter, sodass es wie ein Array abgerufen werden kann
  // Das erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte,
  // die individuelle Ergebnisse enthalten.
  // Auch diese haben Getter, sodass sie wie Arrays abgerufen werden können.
  // Das zweite [0] gibt das SpeechRecognitionAlternative an Position 0 zurück.
  // Dann geben wir die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück
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
