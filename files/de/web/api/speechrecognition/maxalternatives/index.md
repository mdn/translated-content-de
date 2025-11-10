---
title: "SpeechRecognition: Eigenschaft maxAlternatives"
short-title: maxAlternatives
slug: Web/API/SpeechRecognition/maxAlternatives
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`maxAlternatives`**-Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces legt die maximale Anzahl von
[`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)s pro [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) fest.

Der Standardwert ist 1.

## Wert

Eine Zahl, die die maximal zurückgegebenen Alternativen für jedes Ergebnis darstellt.

## Beispiele

Dieser Code stammt aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
