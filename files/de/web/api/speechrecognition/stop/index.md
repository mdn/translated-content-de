---
title: "SpeechRecognition: stop() Methode"
short-title: stop()
slug: Web/API/SpeechRecognition/stop
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Die **`stop()`**-Methode der [Web Speech API](/de/docs/Web/API/Web_Speech_API) stoppt den Spracherkennungsdienst daran, weiterhin eingehende Audiodaten zu hören, und versucht, ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) mit den bisher erfassten Audiodaten zu liefern.

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
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

const diagnostic = document.querySelector(".output");
const bg = document.querySelector("html");

document.body.onclick = () => {
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
