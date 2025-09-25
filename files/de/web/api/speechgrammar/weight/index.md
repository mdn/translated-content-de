---
title: "SpeechGrammar: weight-Eigenschaft"
short-title: weight
slug: Web/API/SpeechGrammar/weight
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Die optionale **`weight`**-Eigenschaft der [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Schnittstelle legt das Gewicht des `SpeechGrammar`-Objekts fest und gibt dieses zurück.

## Wert

Ein Float, der das Gewicht der Grammatik darstellt, im Bereich von 0,0–1,0.

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
