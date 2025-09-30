---
title: "SpeechRecognition: abort()-Methode"
short-title: abort()
slug: Web/API/SpeechRecognition/abort
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`abort()`**-Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) stoppt den Spracherkennungsdienst, sodass er nicht mehr auf eingehende Audiodaten hört, und versucht nicht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) zurückzugeben.

## Syntax

```js-nolint
abort()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const recognition = new SpeechRecognition();

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");
const startBtn = document.querySelector(".start");
const abortBtn = document.querySelector(".abort");

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
};

abortBtn.onclick = () => {
  recognition.abort();
  console.log("Speech recognition aborted.");
};

recognition.onspeechend = () => {
  recognition.stop();
  console.log("Speech recognition has stopped.");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
