---
title: "SpeechGrammarList: Methode addFromString()"
short-title: addFromString()
slug: Web/API/SpeechGrammarList/addFromString
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

Die **`addFromString()`** Methode der
{{domxref("SpeechGrammarList")}} Schnittstelle nimmt eine Grammatik, die in einem bestimmten
String innerhalb des Code-Basis (z. B. in einer Variablen gespeichert) vorliegt, und fügt sie
als neues {{domxref("SpeechGrammar")}} Objekt zur `SpeechGrammarList` hinzu.

## Syntax

```js-nolint
addFromString(string)
addFromString(string, weight)
```

### Parameter

- `string`
  - : Ein String, der die hinzuzufügende Grammatik darstellt.
- `weight` {{optional_inline}}
  - : Ein Gleitkommawert, der das Gewicht der Grammatik relativ zu anderen in der
    {{domxref("SpeechGrammarList")}} vorhandenen Grammatiken darstellt. Das Gewicht bedeutet die Bedeutung dieser Grammatik
    oder die Wahrscheinlichkeit, dass sie vom Spracherkennungsdienst erkannt wird. Der
    Wert kann zwischen `0.0` und `1.0` liegen; Wenn nicht angegeben, wird
    standardmäßig `1.0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
const recognition = new SpeechRecognition();
const speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
