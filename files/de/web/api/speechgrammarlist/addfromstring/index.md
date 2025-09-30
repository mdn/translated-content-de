---
title: "SpeechGrammarList: addFromString() Methode"
short-title: addFromString()
slug: Web/API/SpeechGrammarList/addFromString
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Die **`addFromString()`** Methode des [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) Interfaces nimmt eine Grammatik, die in einem bestimmten String im Code vorliegt (z. B. in einer Variable gespeichert), und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar) Objekt hinzu.

## Syntax

```js-nolint
addFromString(string)
addFromString(string, weight)
```

### Parameter

- `string`
  - : Ein String, der die hinzuzufügende Grammatik darstellt.
- `weight` {{optional_inline}}
  - : Ein Float, der das Gewicht der Grammatik im Verhältnis zu anderen in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) vorhandenen Grammatiken darstellt. Das Gewicht bedeutet die Wichtigkeit dieser Grammatik oder die Wahrscheinlichkeit, dass sie vom Spracherkennungsdienst erkannt wird. Der Wert kann zwischen `0.0` und `1.0` liegen; Wird kein Wert angegeben, wird standardmäßig `1.0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
