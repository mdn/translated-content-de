---
title: "CSSPositionValue: CSSPositionValue() Konstruktor"
short-title: CSSPositionValue()
slug: Web/API/CSSPositionValue/CSSPositionValue
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed Object Model API")}}{{deprecated_header}}{{Non-standard_header}}

Der **`CSSPositionValue()`** Konstruktor erstellt ein neues {{domxref("CSSPositionValue")}} Objekt, das Werte für Eigenschaften repräsentiert, die eine Position erfordern, zum Beispiel {{cssxref('object-position')}}.

## Syntax

```js-nolint
new CSSPositionValue(x, y)
```

### Parameter

- `x`
  - : Eine Position entlang der horizontalen Achse der Webseite.
- `y`
  - : Eine Position entlang der vertikalen Achse der Webseite.

## Beispiele

Das folgende Beispiel positioniert ein Container-`<div>` 5 Pixel vom oberen Rand und 10 Pixel vom linken Rand der Seite entfernt.

```js
let someDiv = document.getElementById("container");
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

someDiv.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value); // 5 10
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CSSPositionValue.x")}}
- {{domxref("CSSPositionValue.y")}}
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)