---
title: "SpeechGrammarList: Methode addFromString()"
short-title: addFromString()
slug: Web/API/SpeechGrammarList/addFromString
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Web Speech API")}}

Die **`addFromString()`**-Methode der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList)-Schnittstelle nimmt eine Grammatik, die in einem bestimmten String innerhalb des Code-Bestands vorhanden ist (z.B. in einer Variable gespeichert), und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.

## Syntax

```js-nolint
addFromString(string)
addFromString(string, weight)
```

### Parameter

- `string`
  - : Ein String, der die hinzuzufügende Grammatik darstellt.
- `weight` {{optional_inline}}
  - : Ein Gleitkommawert, der die Gewichtung der Grammatik im Verhältnis zu anderen in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) vorhandenen Grammatiken darstellt. Die Gewichtung bedeutet die Wichtigkeit dieser Grammatik oder die Wahrscheinlichkeit, dass sie vom Spracherkennungsdienst erkannt wird. Der Wert kann zwischen `0.0` und `1.0` liegen; wird er nicht angegeben, wird standardmäßig `1.0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
