---
title: "SpeechGrammar: weight-Eigenschaft"
short-title: weight
slug: Web/API/SpeechGrammar/weight
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

Die optionale **`weight`**-Eigenschaft der
{{domxref("SpeechGrammar")}}-Schnittstelle setzt und gibt das Gewicht des
`SpeechGrammar`-Objekts zurück.

## Wert

Ein Fließkommawert, der das Gewicht der Grammatik angibt, im Bereich von 0,0–1,0.

## Beispiele

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

console.log(speechRecognitionList[0].src); // sollte den gleichen Wert zurückgeben wie der Inhalt der grammar-Variable
console.log(speechRecognitionList[0].weight); // sollte 1 zurückgeben - gleich wie das Gewicht, das in addFromString festgelegt wurde.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
