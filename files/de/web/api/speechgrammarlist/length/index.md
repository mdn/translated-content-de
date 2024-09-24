---
title: "SpeechGrammarList: Längeneigenschaft"
short-title: Länge
slug: Web/API/SpeechGrammarList/length
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

Die schreibgeschützte **`length`**-Eigenschaft des {{domxref("SpeechGrammarList")}}-Interfaces gibt die Anzahl der {{domxref("SpeechGrammar")}}-Objekte zurück, die in der {{domxref("SpeechGrammarList")}} enthalten sind.

## Wert

Eine Zahl, die die Anzahl der {{domxref("SpeechGrammar")}}-Objekte angibt, die in der {{domxref("SpeechGrammarList")}} enthalten sind.

## Beispiele

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

speechRecognitionList.length; // sollte 1 zurückgeben.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
