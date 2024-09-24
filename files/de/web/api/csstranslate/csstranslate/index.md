---
title: "CSSTranslate: CSSTranslate() Konstruktor"
short-title: CSSTranslate()
slug: Web/API/CSSTranslate/CSSTranslate
l10n:
  sourceCommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{APIRef("CSS Typed OM")}}

Der **`CSSTranslate()`** Konstruktor erstellt ein neues {{domxref("CSSTranslate")}} Objekt, das den [translate()](/de/docs/Web/CSS/transform-function/translate) Wert der individuellen {{CSSXref('transform')}} Eigenschaft in CSS repräsentiert.

## Syntax

```js-nolint
new CSSTranslate(x, y)
new CSSTranslate(x, y, z)
```

### Parameter

- {{domxref('CSSTranslate.x','x')}}
  - : Ein Wert für die x-Achse des zu konstruierenden {{domxref('CSSTranslate')}} Objekts. Dies muss ein {{cssxref('length-percentage')}} sein.
- {{domxref('CSSTranslate.y','y')}}
  - : Ein Wert für die y-Achse des zu konstruierenden {{domxref('CSSTranslate')}} Objekts. Dies muss ein {{cssxref('length-percentage')}} sein.
- {{domxref('CSSTranslate.z','z')}} {{optional_inline}}

  - : Ein Wert für die z-Achse des zu konstruierenden {{domxref('CSSTranslate')}} Objekts. Dies muss ein {{cssxref('length')}} sein.

    Wenn ein Wert für die `z-Achse` übergeben wird, handelt es sich um eine 3D-Transformation. Der Wert von `is2D` wird auf false gesetzt.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSTranslate.x` oder `CSSTranslate.y` kein {{cssxref('length-percentage')}} ist.
- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSTranslate.z` existiert, aber kein {{cssxref('length')}} ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
