---
title: "SpeechGrammarList: addFromURI()-Methode"
short-title: addFromURI()
slug: Web/API/SpeechGrammarList/addFromURI
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Speech API")}}

Die **`addFromURI()`**-Methode der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)-Schnittstelle nimmt eine Grammatik, die an einem bestimmten URI vorhanden ist, und fügt sie als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt zur `SpeechGrammarList` hinzu.

Beachten Sie, dass einige Spracherkennungsdienste integrierte Grammatiken unterstützen können, die durch einen URI angegeben werden können.

## Syntax

```js-nolint
addFromURI(src)
addFromURI(src, weight)
```

### Parameter

- `src`
  - : Eine Zeichenfolge, die den URI der hinzuzufügenden Grammatik darstellt.
- `weight` {{optional_inline}}
  - : Ein Gleitkommawert, der das Gewicht der Grammatik relativ zu anderen in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) vorhandenen Grammatiken darstellt. Das Gewicht bedeutet die Wichtigkeit dieser Grammatik oder die Wahrscheinlichkeit, dass sie vom Spracherkennungsdienst erkannt wird. Der Wert kann zwischen `0.0` und `1.0` liegen; wenn nicht angegeben, wird der Standardwert `1.0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
