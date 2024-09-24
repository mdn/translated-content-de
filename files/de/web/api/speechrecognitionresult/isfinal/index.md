---
title: "SpeechRecognitionResult: isFinal-Eigenschaft"
short-title: isFinal
slug: Web/API/SpeechRecognitionResult/isFinal
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`isFinal`**-Eigenschaft des schreibgeschützten
{{domxref("SpeechRecognitionResult")}}-Interfaces ist ein boolescher Wert, der angibt,
ob dieses Ergebnis endgültig (`true`) oder nicht (`false`) ist — ist dies der Fall,
dann wird dieses Ergebnis zum letzten Mal zurückgegeben; wenn nicht, dann ist dieses Ergebnis ein
vorläufiges Ergebnis und kann später noch aktualisiert werden.

## Wert

Ein boolescher Wert.

## Beispiele

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent results-Eigenschaft gibt ein SpeechRecognitionResultList-Objekt zurück
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es hat einen Getter, sodass es wie ein Array angesprochen werden kann
  // Das erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte
  // die einzelne Ergebnisse enthalten.
  // Diese haben ebenfalls Getter, sodass sie wie Arrays angesprochen werden können.
  // Das zweite [0] gibt die SpeechRecognitionAlternative an Position 0 zurück.
  // Danach geben wir die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;

  console.log(event.results[0].isFinal);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
