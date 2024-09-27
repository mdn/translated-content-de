---
title: "CSSPositionValue: y-Eigenschaft"
short-title: "y"
slug: Web/API/CSSPositionValue/y
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{deprecated_header}}{{APIRef("CSS Typed Object Model API")}}{{Non-standard_header}}

Die **`y`**-Eigenschaft der
[`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)-Schnittstelle gibt die Position des Elements entlang der
vertikalen Achse zurück.

## Wert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

## Beispiele

Im folgenden Beispiel wird ein Container-`<div>` 5 Pixel vom oberen Rand und 10 Pixel vom linken Rand der Seite positioniert.

```js
let replaceEl = document.getElementById("container");
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

someDiv.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionValue()`](/de/docs/Web/API/CSSPositionValue/CSSPositionValue)
- [`CSSPositionValue.x`](/de/docs/Web/API/CSSPositionValue/x)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
