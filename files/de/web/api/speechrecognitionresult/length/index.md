---
title: "SpeechRecognitionResult: Eigenschaft length"
short-title: length
slug: Web/API/SpeechRecognitionResult/length
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`length`**-Eigenschaft, die schreibgeschützt ist, des [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Interfaces gibt die Länge des "Arrays" zurück – die Anzahl der in dem Ergebnis enthaltenen [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte (auch als "n-best alternatives" bezeichnet).

Die Anzahl der in dem Ergebnis enthaltenen Alternativen hängt davon ab, auf welchen Wert die Eigenschaft [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives) gesetzt wurde, als die Spracherkennung erstmals gestartet wurde.

## Wert

Eine Zahl.

## Beispiele

Dieser Code stammt aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;

  console.log(event.results[0].length);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
