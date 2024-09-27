---
title: "SpeechRecognition: grammars Eigenschaft"
short-title: grammars
slug: Web/API/SpeechRecognition/grammars
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Die **`grammars`**-Eigenschaft der
[`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Schnittstelle gibt eine Sammlung von
[`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück und legt diese fest, die die Grammatiken darstellen, die von der aktuellen `SpeechRecognition` verstanden werden.

## Wert

Eine [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList), die die [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte enthält,
die Ihre Grammatik für Ihre App darstellen.

## Beispiele

Dieser Code ist ein Auszug aus unserem
[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
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
