---
title: "CSSPositionValue: x-Eigenschaft"
short-title: x
slug: Web/API/CSSPositionValue/x
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{deprecated_header}}{{APIRef("CSS Typed Object Model API")}}{{Non-standard_header}}

Die **`x`**-Eigenschaft der
[`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)-Schnittstelle gibt die Position des Elements entlang der horizontalen Achse der Webseite zurück.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

## Beispiele

Im folgenden Beispiel wird ein Container `<div>` 5 Pixel von oben und 10 Pixel von links der Seite positioniert.

```js
let someDiv = document.getElementById("container");
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

someDiv.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionValue()`](/de/docs/Web/API/CSSPositionValue/CSSPositionValue)
- [`CSSPositionValue.y`](/de/docs/Web/API/CSSPositionValue/y)
- [Verwendung der CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
