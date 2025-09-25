---
title: "SpeechGrammar: src-Eigenschaft"
short-title: src
slug: Web/API/SpeechGrammar/src
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Die **`src`**-Eigenschaft des [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Interfaces wird verwendet, um einen String zu erhalten oder festzulegen, der die Grammatik innerhalb des `SpeechGrammar`-Objekts enthält.

## Wert

Ein String, der die Grammatik darstellt.

## Beispiele

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // should return the same as the contents of the grammar variable
console.log(speechRecognitionList[0].weight); // should return 1 - the same as the weight set in addFromString.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
