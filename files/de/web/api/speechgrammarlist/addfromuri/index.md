---
title: "SpeechGrammarList: addFromURI() Methode"
short-title: addFromURI()
slug: Web/API/SpeechGrammarList/addFromURI
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Die **`addFromURI()`** Methode der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) Schnittstelle nimmt eine Grammatik, die an einer bestimmten URI vorhanden ist, und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) Objekt hinzu.

Beachten Sie, dass einige Spracherkennungsdienste möglicherweise integrierte Grammatiken unterstützen, die durch eine URI angegeben werden können.

## Syntax

```js-nolint
addFromURI(src)
addFromURI(src, weight)
```

### Parameter

- `src`
  - : Ein String, der die URI der hinzuzufügenden Grammatik darstellt.
- `weight` {{optional_inline}}
  - : Ein Float, der das Gewicht der Grammatik im Verhältnis zu anderen Grammatiken in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) darstellt. Das Gewicht bedeutet die Wichtigkeit dieser Grammatik oder die Wahrscheinlichkeit, dass sie vom Spracherkennungsdienst erkannt wird. Der Wert kann zwischen `0.0` und `1.0` liegen; Wenn nicht angegeben, wird standardmäßig `1.0` verwendet.

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

speechRecognitionList.addFromURI("http://www.example.com/grammar.txt"); // adds a second grammar to the list.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
