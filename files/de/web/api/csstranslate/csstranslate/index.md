---
title: "CSSTranslate: CSSTranslate() Konstruktor"
short-title: CSSTranslate()
slug: Web/API/CSSTranslate/CSSTranslate
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed OM")}}

Der **`CSSTranslate()`** Konstruktor erstellt ein neues [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekt, das den {{cssxref("transform-function/translate", "translate()")}} Wert der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSTranslate(x, y)
new CSSTranslate(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSTranslate/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts.
    Dieser muss eine {{cssxref('length-percentage')}} sein.
- [`y`](/de/docs/Web/API/CSSTranslate/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts.
    Dieser muss eine {{cssxref('length-percentage')}} sein.
- [`z`](/de/docs/Web/API/CSSTranslate/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts.
    Dieser muss ein {{cssxref('length')}} sein.

    Wenn ein Wert für die `z-Achse` übergeben wird, handelt es sich um eine 3D-Transformation. Der Wert von `is2D` wird auf false gesetzt.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Ausgelöst, wenn der Wert von `CSSTranslate.x` oder `CSSTranslate.y` keine {{cssxref('length-percentage')}} ist.
- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Ausgelöst, wenn der Wert von `CSSTranslate.z` vorhanden ist, aber kein {{cssxref('length')}} ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
