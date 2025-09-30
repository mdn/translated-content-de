---
title: SpeechGrammar
slug: Web/API/SpeechGrammar
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Das **`SpeechGrammar`**-Interface der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Menge von Wörtern oder Wortmustern, die der Erkennungsdienst erkennen soll.

Grammatik wird im [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**) definiert.

> [!NOTE]
> Das Konzept der Grammatik wurde aus der Web Speech API entfernt. Verwandte Funktionen sind in der Spezifikation weiterhin vorhanden und werden von unterstützenden Browsern aus Gründen der Rückwärtskompatibilität erkannt, haben jedoch keine Auswirkungen auf Spracherkennungsdienste.

## Konstruktor

- [`SpeechGrammar()`](/de/docs/Web/API/SpeechGrammar/SpeechGrammar) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Erstellt ein neues `SpeechGrammar`-Objekt.

## Instanzeigenschaften

- [`SpeechGrammar.src`](/de/docs/Web/API/SpeechGrammar/src) {{deprecated_inline}}
  - : Setzt und gibt einen String zurück, der die Grammatik innerhalb der `SpeechGrammar`-Objektinstanz enthält.
- [`SpeechGrammar.weight`](/de/docs/Web/API/SpeechGrammar/weight) {{Optional_Inline}} {{deprecated_inline}}
  - : Setzt und gibt das Gewicht des `SpeechGrammar`-Objekts zurück.

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
