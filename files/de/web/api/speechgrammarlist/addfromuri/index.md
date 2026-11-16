---
title: "SpeechGrammarList: Methode addFromUri()"
short-title: addFromUri()
slug: Web/API/SpeechGrammarList/addFromUri
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die Methode **`addFromUri()`** der Schnittstelle [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) nimmt eine unter einer bestimmten URI verfügbare Grammatik und fügt sie der `SpeechGrammarList` als neues [`SpeechGrammar`](/de/docs/Web/API/SpeechGrammar)-Objekt hinzu.

Beachten Sie, dass einige Spracherkennungsdienste integrierte Grammatiken unterstützen, die über eine URI angegeben werden können.

## Syntax

```js-nolint
addFromUri(src)
addFromUri(src, weight)
```

### Parameter

- `src`
  - : Ein String, der die URI der hinzuzufügenden Grammatik angibt.
- `weight` {{optional_inline}}
  - : Eine Gleitkommazahl, die die Gewichtung der Grammatik im Verhältnis zu anderen Grammatiken in der [`SpeechGrammarList`](/de/docs/Web/API/SpeechGrammarList) angibt.
    Die Gewichtung bestimmt die Bedeutung dieser Grammatik beziehungsweise die Wahrscheinlichkeit, mit der sie vom Spracherkennungsdienst erkannt wird.
    Der Wert kann zwischen `0.0` und `1.0` liegen. Wird er nicht angegeben, wird standardmäßig `1.0` verwendet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
