---
title: "SpeechRecognition: grammars-Eigenschaft"
short-title: grammars
slug: Web/API/SpeechRecognition/grammars
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`grammars`**-Eigenschaft des
[`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces gibt eine Sammlung von
[`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten zurück und setzt diese, die die Grammatiken darstellen, die von der aktuellen `SpeechRecognition` verstanden werden.

> [!NOTE]
> Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen bleiben in der Spezifikation und werden von unterstützenden Browsern weiterhin aus Gründen der Rückwärtskompatibilität erkannt, aber sie haben keinen Einfluss auf Spracherkennungsdienste.

## Wert

Eine [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList), die die [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte enthält, die die in Ihrer App verwendeten Grammatiken darstellen.

## Beispiele

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
