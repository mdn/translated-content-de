---
title: "SpeechRecognition: Methode stop()"
short-title: stop()
slug: Web/API/SpeechRecognition/stop
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die Methode **`stop()`** der Schnittstelle [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) beendet das Abhören eingehender Audiodaten durch den Spracherkennungsdienst.
Anschließend versucht der Dienst, auf Grundlage der bisher erfassten Audiodaten ein Ergebnis zurückzugeben: über ein [`result`](/de/docs/Web/API/SpeechRecognition/result_event)-Ereignis oder, falls nichts erkannt wurde, über ein [`nomatch`](/de/docs/Web/API/SpeechRecognition/nomatch_event)-Ereignis.

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
