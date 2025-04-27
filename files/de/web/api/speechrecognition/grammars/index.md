---
title: "SpeechRecognition: grammars-Eigenschaft"
short-title: grammars
slug: Web/API/SpeechRecognition/grammars
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("Web Speech API")}}

Die **`grammars`**-Eigenschaft des
[`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces gibt eine Sammlung von
[`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück und setzt sie, die die Grammatiken repräsentieren, die von der aktuellen `SpeechRecognition` verstanden werden sollen.

## Wert

Ein [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList), das die [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte enthält, die Ihre Grammatik für Ihre Anwendung repräsentieren.

## Beispiele

Dieser Code stammt aus unserem
[Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
// recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
