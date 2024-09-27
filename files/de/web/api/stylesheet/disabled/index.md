---
title: "StyleSheet: Eigenschaft disabled"
short-title: disabled
slug: Web/API/StyleSheet/disabled
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`disabled`**-Eigenschaft der
[`StyleSheet`](/de/docs/Web/API/StyleSheet)-Schnittstelle bestimmt, ob das Stylesheet daran gehindert wird, auf das Dokument angewendet zu werden.

Ein Stylesheet kann deaktiviert werden, indem diese Eigenschaft manuell auf `true` gesetzt wird oder wenn es sich um ein inaktives [alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets) handelt. Beachten Sie, dass `disabled === false` nicht garantiert, dass das Stylesheet angewendet wird (es könnte zum Beispiel aus dem Dokument entfernt worden sein).

## Wert

Ein Boolean.

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
