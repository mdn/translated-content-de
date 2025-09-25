---
title: "SpeechGrammarList: addFromString() Methode"
short-title: addFromString()
slug: Web/API/SpeechGrammarList/addFromString
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Die **`addFromString()`**-Methode des [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)-Interfaces nimmt eine in einem bestimmten String im Code vorhandene Grammatik (z.B. in einer Variablen gespeichert) und fügt sie der `SpeechGrammarList` als ein neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.

## Syntax

```js-nolint
addFromString(string)
addFromString(string, weight)
```

### Parameter

- `string`
  - : Ein String, der die hinzuzufügende Grammatik repräsentiert.
- `weight` {{optional_inline}}
  - : Ein Float-Wert, der das Gewicht der Grammatik im Verhältnis zu anderen Grammatiken in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) repräsentiert. Das Gewicht steht für die Wichtigkeit dieser Grammatik oder die Wahrscheinlichkeit, dass sie vom Spracherkennungsdienst erkannt wird. Der Wert kann zwischen `0.0` und `1.0` liegen; falls nicht angegeben, wird standardmäßig `1.0` verwendet.

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
