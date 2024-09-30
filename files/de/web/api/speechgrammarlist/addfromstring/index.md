---
title: "SpeechGrammarList: addFromString() Methode"
short-title: addFromString()
slug: Web/API/SpeechGrammarList/addFromString
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}{{ SeeCompatTable() }}

Die **`addFromString()`**-Methode des [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) Interfaces nimmt eine Grammatik, die in einem bestimmten String innerhalb des Codebases vorhanden ist (z.B. in einer Variablen gespeichert), und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.

## Syntax

```js-nolint
addFromString(string)
addFromString(string, weight)
```

### Parameter

- `string`
  - : Ein String, der die hinzuzufügende Grammatik darstellt.
- `weight` {{optional_inline}}
  - : Ein Float, der das Gewicht der Grammatik relativ zu anderen Grammatiken in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) repräsentiert. Das Gewicht gibt die Bedeutung dieser Grammatik an oder die Wahrscheinlichkeit, dass sie vom Spracherkennungsdienst erkannt wird. Der Wert kann zwischen `0.0` und `1.0` liegen; falls nicht angegeben, wird der Standardwert `1.0` verwendet.

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
