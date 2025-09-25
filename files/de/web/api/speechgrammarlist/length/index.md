---
title: "SpeechGrammarList: length-Eigenschaft"
short-title: length
slug: Web/API/SpeechGrammarList/length
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Die schreibgeschützte **`length`**-Eigenschaft der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)-Schnittstelle gibt die Anzahl der [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte zurück, die in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) enthalten sind.

## Wert

Eine Zahl, die die Anzahl der [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte angibt, die in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) enthalten sind.

## Beispiele

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

speechRecognitionList.length; // should return 1.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
