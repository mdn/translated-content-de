---
title: SpeechRecognitionResult
slug: Web/API/SpeechRecognitionResult
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionResult`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert ein einzelnes Erkennungsergebnis, das mehrere {{domxref("SpeechRecognitionAlternative")}}-Objekte enthalten kann.

## Instanz-Eigenschaften

- {{domxref("SpeechRecognitionResult.isFinal")}} {{ReadOnlyInline}}
  - : Ein boolescher Wert, der angibt, ob dieses Ergebnis endgültig (true) ist oder nicht (false) — falls ja, dann wird dieses Ergebnis zum letzten Mal zurückgegeben; falls nein, dann ist dieses Ergebnis ein Zwischenresultat und kann später aktualisiert werden.
- {{domxref("SpeechRecognitionResult.length")}} {{ReadOnlyInline}}
  - : Gibt die Länge des "Arrays" zurück — die Anzahl der {{domxref("SpeechRecognitionAlternative")}}-Objekte, die im Ergebnis enthalten sind (auch als "n-best alternatives" bezeichnet).

## Instanz-Methoden

- {{domxref("SpeechRecognitionResult.item")}}
  - : Ein Standard-Getter, der es ermöglicht, auf {{domxref("SpeechRecognitionAlternative")}}-Objekte innerhalb des Ergebnisses mittels Array-Syntax zuzugreifen.

## Beispiele

Dieser Code ist aus unserem Beispiel [Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) entnommen.

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent results-Eigenschaft gibt ein SpeechRecognitionResultList-Objekt zurück.
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es hat einen Getter, sodass es wie ein Array zugegriffen werden kann
  // Das erste [0] gibt das SpeechRecognitionResult an der Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte,
  // die einzelne Ergebnisse enthalten.
  // Diese haben ebenfalls Getter, sodass sie wie Arrays zugegriffen werden können.
  // Das zweite [0] gibt das SpeechRecognitionAlternative an der Position 0 zurück.
  // Wir geben dann die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück.
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
