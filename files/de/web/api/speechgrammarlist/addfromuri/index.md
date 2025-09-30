---
title: "SpeechGrammarList: addFromURI()-Methode"
short-title: addFromURI()
slug: Web/API/SpeechGrammarList/addFromURI
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}{{deprecated_header}}

Die **`addFromURI()`**-Methode der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)-Schnittstelle nimmt eine Grammatik, die an einem bestimmten URI vorhanden ist, und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.

Beachten Sie, dass einige Spracherkennungsdienste integrierte Grammatiken unterstützen können, die durch URI angegeben werden können.

## Syntax

```js-nolint
addFromURI(src)
addFromURI(src, weight)
```

### Parameter

- `src`
  - : Ein String, der den URI der hinzuzufügenden Grammatik darstellt.
- `weight` {{optional_inline}}
  - : Ein Float, der das Gewicht der Grammatik relativ zu anderen Grammatiken in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) darstellt. Das Gewicht bedeutet die Wichtigkeit dieser Grammatik oder die Wahrscheinlichkeit, dass sie vom Spracherkennungsdienst erkannt wird. Der Wert kann zwischen `0.0` und `1.0` liegen; Wenn nicht angegeben, wird der Standardwert `1.0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
