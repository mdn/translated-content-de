---
title: "CSSTranslate: CSSTranslate() Konstruktor"
short-title: CSSTranslate()
slug: Web/API/CSSTranslate/CSSTranslate
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("CSS Typed OM")}}

Der **`CSSTranslate()`** Konstruktor erstellt ein neues [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekt, das den [`translate()`](/de/docs/Web/CSS/Reference/Values/transform-function/translate)-Wert der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSTranslate(x, y)
new CSSTranslate(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSTranslate/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts. Dies muss ein {{cssxref('length-percentage')}} sein.
- [`y`](/de/docs/Web/API/CSSTranslate/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts. Dies muss ein {{cssxref('length-percentage')}} sein.
- [`z`](/de/docs/Web/API/CSSTranslate/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts. Dies muss ein {{cssxref('length')}} sein.

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
