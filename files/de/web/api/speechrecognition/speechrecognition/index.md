---
title: "SpeechRecognition: SpeechRecognition() Konstruktor"
short-title: SpeechRecognition()
slug: Web/API/SpeechRecognition/SpeechRecognition
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Der **`SpeechRecognition()`** Konstruktor erzeugt eine neue Instanz des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Objekts.

## Syntax

```js-nolint
new SpeechRecognition()
```

### Parameter

Keine.

## Beispiele

Dieser Code ist aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) Beispiel entnommen.

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
