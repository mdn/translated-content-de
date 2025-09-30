---
title: "SpeechRecognitionResult: isFinal-Eigenschaft"
short-title: isFinal
slug: Web/API/SpeechRecognitionResult/isFinal
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`isFinal`**-Eigenschaft des schreibgeschützten [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Interfaces ist ein boolescher Wert, der angibt, ob dieses Ergebnis endgültig (`true`) oder nicht (`false`) ist — ist dies der Fall, dann ist dies das letzte Mal, dass dieses Ergebnis zurückgegeben wird; ist dies nicht der Fall, dann ist dieses Ergebnis vorläufig und kann später aktualisiert werden.

## Wert

Ein boolescher Wert.

## Beispiele

```js
recognition.onresult = (event) => {
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
