---
title: "SpeechRecognition: stop() Methode"
short-title: stop()
slug: Web/API/SpeechRecognition/stop
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`stop()`** Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) stoppt den Spracherkennungsdienst, um auf eingehende Audiodaten zu lauschen, und versucht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) basierend auf den bisher erfassten Ergebnissen zurückzugeben.

## Syntax

```js-nolint
stop()
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
const startBtn = document.querySelector("button");

startBtn.onclick = () => {
  recognition.start();
  console.log("Ready to receive a color command.");
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
