---
title: "CSSTranslate: Konstruktor CSSTranslate()"
short-title: CSSTranslate()
slug: Web/API/CSSTranslate/CSSTranslate
l10n:
  sourceCommit: ca4b3f28ed0e1ae9817e84a2eab11c2184a0603b
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der Konstruktor **`CSSTranslate()`** erstellt ein neues [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekt, das den Wert {{cssxref("transform-function/translate", "translate()")}} der einzelnen CSS-Eigenschaft {{CSSXref('transform')}} repräsentiert.

## Syntax

```js-nolint
new CSSTranslate(x, y)
new CSSTranslate(x, y, z)
```

### Parameter

- [`x`](/de/docs/Web/API/CSSTranslate/x)
  - : Ein Wert für die x-Achse des zu erstellenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts.
    Der Wert muss ein {{cssxref('length-percentage')}} sein.
- [`y`](/de/docs/Web/API/CSSTranslate/y)
  - : Ein Wert für die y-Achse des zu erstellenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts.
    Der Wert muss ein {{cssxref('length-percentage')}} sein.
- [`z`](/de/docs/Web/API/CSSTranslate/z) {{optional_inline}}
  - : Ein Wert für die z-Achse des zu erstellenden [`CSSTranslate`](/de/docs/Web/API/CSSTranslate)-Objekts.
    Der Wert muss ein {{cssxref('length')}} sein.

    Wenn für die `z-axis` ein Wert übergeben wird, handelt es sich um eine 3D-Transformation.
    Der Wert von `is2D` wird auf false gesetzt.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Wert von `CSSTranslate.x` oder `CSSTranslate.y` kein {{cssxref('length-percentage')}} ist oder wenn für `CSSTranslate.z` ein Wert vorhanden ist, der kein {{cssxref('length')}} ist.

## Beispiele

Noch zu ergänzen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
