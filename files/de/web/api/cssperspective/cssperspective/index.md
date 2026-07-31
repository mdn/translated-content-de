---
title: "CSSPerspective: CSSPerspective() Konstruktor"
short-title: CSSPerspective()
slug: Web/API/CSSPerspective/CSSPerspective
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSPerspective()`** Konstruktor erstellt ein neues [`CSSPerspective`](/de/docs/Web/API/CSSPerspective) Objekt, das den {{cssxref("transform-function/perspective", "perspective()")}} Wert der einzelnen {{CSSXref('transform')}} Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSPerspective(length)
```

### Parameter

- [`length`](/de/docs/Web/API/CSSPerspective/length)
  - : Ein Wert für die Entfernung von z=0 des zu konstruierenden [`CSSPerspective`](/de/docs/Web/API/CSSPerspective) Objekts. Dies muss ein {{cssxref('length')}} sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSPerspective.length` existiert, aber kein {{cssxref('length')}} ist.

## Beispiele

Noch zu erledigen

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
