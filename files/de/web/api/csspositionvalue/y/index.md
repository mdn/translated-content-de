---
title: "CSSPositionValue: y Eigenschaft"
short-title: "y"
slug: Web/API/CSSPositionValue/y
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{deprecated_header}}{{APIRef("CSS Typed Object Model API")}}{{Non-standard_header}}

Die **`y`** Eigenschaft der
{{domxref("CSSPositionValue")}} Schnittstelle gibt die Position des Elements entlang der
vertikalen Achse zurück.

## Wert

Ein {{domxref('CSSNumericValue')}}.

## Beispiele

Im folgenden Beispiel wird ein Container `<div>` 5 Pixel von oben und 10 Pixel von der linken Seite der Seite positioniert.

```js
let replaceEl = document.getElementById("container");
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

someDiv.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value);
```

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- {{domxref("CSSPositionValue.CSSPositionValue", "CSSPositionValue()")}}
- {{domxref("CSSPositionValue.x")}}
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
