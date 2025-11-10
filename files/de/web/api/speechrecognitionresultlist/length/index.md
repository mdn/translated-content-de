---
title: "SpeechRecognitionResultList: length-Eigenschaft"
short-title: length
slug: Web/API/SpeechRecognitionResultList/length
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`length`**-Eigenschaft des [`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Interfaces gibt die Länge des "Arrays" an — die Anzahl der [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte in der Liste.

## Wert

Eine Zahl.

## Beispiele

Dieser Code stammt aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;

  console.log(event.results.length);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
