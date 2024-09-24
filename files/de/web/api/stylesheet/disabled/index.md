---
title: "StyleSheet: Eigenschaft 'disabled'"
short-title: disabled
slug: Web/API/StyleSheet/disabled
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("CSSOM")}}

Die **`disabled`**-Eigenschaft des {{domxref("StyleSheet")}}-Interfaces bestimmt, ob das Stylesheet daran gehindert wird, auf das Dokument angewendet zu werden.

Ein Stylesheet kann deaktiviert werden, indem diese Eigenschaft manuell auf `true` gesetzt wird oder wenn es sich um ein inaktives [alternatives Stylesheet](/de/docs/Web/CSS/Alternative_style_sheets) handelt. Beachten Sie, dass `disabled === false` nicht garantiert, dass das Stylesheet angewendet wird (es könnte beispielsweise aus dem Dokument entfernt worden sein).

## Wert

Ein boolean.

## Beispiele

```js
// Wenn das Stylesheet deaktiviert ist
if (stylesheet.disabled) {
  // Styles inline anwenden
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
