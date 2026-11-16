---
title: "SpeechRecognition: grammars-Eigenschaft"
short-title: grammars
slug: Web/API/SpeechRecognition/grammars
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die **`grammars`**-Eigenschaft der [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Schnittstelle repräsentiert eine Sammlung von [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekten.

> [!NOTE]
> Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Zugehörige Funktionen sind weiterhin in der Spezifikation enthalten und werden von Browsern, die sie unterstützen, aus Gründen der Abwärtskompatibilität noch erkannt. Sie haben jedoch keine Auswirkungen auf Spracherkennungsdienste.

## Wert

Eine [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList), die die [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekte enthält, welche die von Ihrer Anwendung verwendeten Grammatiken repräsentieren.

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
