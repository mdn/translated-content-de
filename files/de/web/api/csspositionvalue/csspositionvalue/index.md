---
title: "CSSPositionValue: CSSPositionValue() Konstruktor"
short-title: CSSPositionValue()
slug: Web/API/CSSPositionValue/CSSPositionValue
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("CSS Typed Object Model API")}}{{Non-standard_header}}

Der **`CSSPositionValue()`** Konstruktor erstellt ein neues [`CSSPositionValue`](/de/docs/Web/API/CSSPositionValue)-Objekt, das Werte für Eigenschaften darstellt, die eine Position einnehmen, zum Beispiel {{cssxref('object-position')}}.

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

### Grundlegende Verwendung

Das folgende Beispiel positioniert ein Container-`<div>` 5 Pixel von oben und 10 Pixel von links der Seite entfernt.

```js
let someDiv = document.getElementById("container");
let position = new CSSPositionValue(CSS.px(5), CSS.px(10));

someDiv.attributeStyleMap.set("object-position", position);
console.log(position.x.value, position.y.value); // 5 10
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSPositionValue.x`](/de/docs/Web/API/CSSPositionValue/x)
- [`CSSPositionValue.y`](/de/docs/Web/API/CSSPositionValue/y)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
