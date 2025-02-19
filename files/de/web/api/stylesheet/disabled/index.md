---
title: "StyleSheet: disabled Eigenschaft"
short-title: disabled
slug: Web/API/StyleSheet/disabled
l10n:
  sourceCommit: 176953b8260e0dd4328a7e788e8179accbafb8e1
---

{{APIRef("CSSOM")}}

Die **`disabled`**-Eigenschaft des
[`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces bestimmt, ob das Stylesheet daran gehindert wird,
auf das Dokument angewendet zu werden.

Ein Stylesheet kann deaktiviert werden, indem diese Eigenschaft manuell auf `true` gesetzt wird oder
wenn es sich um ein inaktives [alternatives Stylesheet](/de/docs/Web/HTML/Attributes/rel/alternate_stylesheet) handelt. Beachten Sie, dass `disabled === false` nicht garantiert, dass das Stylesheet angewendet wird (es könnte zum Beispiel aus dem Dokument entfernt werden).

## Wert

Ein boolescher Wert.

## Beispiele

```js
// If the stylesheet is disabled
if (stylesheet.disabled) {
  // Apply styles in-line
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
