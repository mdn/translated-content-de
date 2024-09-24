---
title: "SpeechGrammar: src-Eigenschaft"
short-title: src
slug: Web/API/SpeechGrammar/src
l10n:
  sourceCommit: 5ccd2f0e0565ec9b3539cc067cdae369adc307b8
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die **`src`**-Eigenschaft des {{domxref("SpeechGrammar")}}-Interfaces wird verwendet, um einen String zu erhalten oder festzulegen, der die Grammatik im `SpeechGrammar`-Objekt enthält.

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

console.log(speechRecognitionList[0].src); // sollte dasselbe zurückgeben wie der Inhalt der grammar-Variable
console.log(speechRecognitionList[0].weight); // sollte 1 zurückgeben - dasselbe wie das Gewicht, das in addFromString festgelegt wurde.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
