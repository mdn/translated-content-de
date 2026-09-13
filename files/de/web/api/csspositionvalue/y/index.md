---
title: "CSSPositionValue: y-Eigenschaft"
short-title: y
slug: Web/API/CSSPositionValue/y
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSS Typed Object Model API")}}{{Non-standard_header}}

Die **`y`**-Eigenschaft des [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)-Interfaces gibt die Position des Elements entlang der vertikalen Achse zurück.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel positioniert einen Container `<div>` 5 Pixel von oben und 10 Pixel von links der Seite.

```js
let replaceEl = document.getElementById("container");
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

replaceEl.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionValue()`](/de/docs/Web/API/CSSPositionValue/CSSPositionValue)
- [`CSSPositionValue.x`](/de/docs/Web/API/CSSPositionValue/x)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
