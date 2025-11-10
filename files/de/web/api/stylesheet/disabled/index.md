---
title: "StyleSheet: disabled-Eigenschaft"
short-title: disabled
slug: Web/API/StyleSheet/disabled
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("CSSOM")}}

Die **`disabled`**-Eigenschaft des [`StyleSheet`](/de/docs/Web/API/StyleSheet)-Interfaces bestimmt, ob das Stylesheet davon abgehalten wird, auf das Dokument angewendet zu werden.

Ein Stylesheet kann deaktiviert werden, indem diese Eigenschaft manuell auf `true` gesetzt wird oder wenn es sich um ein inaktiviertes [alternatives Stylesheet](/de/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet) handelt. Beachten Sie, dass `disabled === false` nicht garantiert, dass das Stylesheet angewendet wird (es könnte zum Beispiel aus dem Dokument entfernt worden sein).

## Wert

Ein boolean.

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
