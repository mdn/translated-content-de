---
title: "CSSRotate: CSSRotate() Konstruktor"
short-title: CSSRotate()
slug: Web/API/CSSRotate/CSSRotate
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

Der **`CSSRotate()`** Konstruktor erstellt ein neues
{{domxref("CSSRotate")}} Objekt, das den [rotate()](/de/docs/Web/CSS/transform-function/rotate) Wert der
einzelnen {{CSSXref('transform')}} Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSRotate(x, y, z, angle)
```

### Parameter

- {{domxref('CSSRotate.x','x')}}
  - : Ein Wert für die x-Achse des zu konstruierenden {{domxref('CSSRotate')}} Objekts.
    Dies muss entweder ein Doppel-Integer oder ein {{domxref('CSSNumericValue')}} sein.
- {{domxref('CSSRotate.y','y')}}
  - : Ein Wert für die y-Achse des zu konstruierenden {{domxref('CSSRotate')}} Objekts.
    Dies muss entweder ein Doppel-Integer oder ein {{domxref('CSSNumericValue')}} sein.
- {{domxref('CSSRotate.z','z')}}
  - : Ein Wert für die z-Achse des zu konstruierenden {{domxref('CSSRotate')}} Objekts.
    Dies muss entweder ein Doppel-Integer oder ein {{domxref('CSSNumericValue')}} sein.
- {{domxref('CSSRotate.angle','angle')}}
  - : Ein Wert für den Winkel des zu konstruierenden {{domxref('CSSRotate')}} Objekts. Dies
    muss ein {{domxref('CSSNumericValue')}} sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSRotate.angle` kein [\<angle>](/de/docs/Web/CSS/angle) Wert ist
    oder `CSSRotate.x`, `CSSRotate.y`, `CSSRotate.z` keine [\<number>](/de/docs/Web/CSS/number) Werte sind.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
