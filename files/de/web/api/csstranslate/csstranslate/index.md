---
title: "CSSTranslate: CSSTranslate() Konstruktor"
short-title: CSSTranslate()
slug: Web/API/CSSTranslate/CSSTranslate
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSTranslate()`** Konstruktor erstellt ein neues [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekt, das den {{cssxref("transform-function/translate", "translate()")}}-Wert der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS repräsentiert.

## Syntax

```js-nolint
new CSSTranslate(x, y)
new CSSTranslate(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSTranslate/x)
  - : Ein Wert für die x-Achse des zu konstruierenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts.
    Dies muss ein {{cssxref('length-percentage')}} sein.
- [`y`](/de/docs/Web/API/CSSTranslate/y)
  - : Ein Wert für die y-Achse des zu konstruierenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts.
    Dies muss ein {{cssxref('length-percentage')}} sein.
- [`z`](/de/docs/Web/API/CSSTranslate/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu konstruierenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts.
    Dies muss ein {{cssxref('length')}} sein.

    Wenn ein Wert für die `z-Achse` übergeben wird, handelt es sich um eine 3D-Transformation.
    Der Wert von `is2D` wird auf false gesetzt.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSTranslate.x` oder `CSSTranslate.y` kein {{cssxref('length-percentage')}} ist.
- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSTranslate.z` vorhanden ist, aber kein {{cssxref('length')}} ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
