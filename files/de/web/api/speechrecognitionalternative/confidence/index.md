---
title: "SpeechRecognitionAlternative: confidence-Eigenschaft"
short-title: confidence
slug: Web/API/SpeechRecognitionAlternative/confidence
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`confidence`** Nur-Lesen-Eigenschaft des [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Interfaces gibt eine numerische Schätzung zurück, wie zuversichtlich das Spracherkennungssystem ist, dass die Erkennung korrekt ist.

> [!NOTE]
> An der Implementierung von `confidence` bei Mozilla wird noch gearbeitet – momentan scheint sie immer 1 zurückzugeben.

## Wert

Eine Zahl zwischen 0 und 1.

## Beispiele

Dieser Code ist aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) entnommen.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
