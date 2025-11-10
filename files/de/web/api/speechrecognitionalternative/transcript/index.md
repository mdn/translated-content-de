---
title: "SpeechRecognitionAlternative: transcript-Eigenschaft"
short-title: transcript
slug: Web/API/SpeechRecognitionAlternative/transcript
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`transcript`**-Eigenschaft des [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Interfaces gibt einen String zurück, der das Transkript des erkannten Wortes bzw. der erkannten Wörter enthält.

Bei kontinuierlicher Erkennung wird, wo nötig, führendes oder nachfolgendes Leerzeichen eingefügt, sodass die Verkettung aufeinanderfolgender [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) eine korrekte Abschrift der Sitzung ergibt.

## Wert

Ein String.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

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
