---
title: "CSSPerspective: CSSPerspective() Konstruktor"
short-title: CSSPerspective()
slug: Web/API/CSSPerspective/CSSPerspective
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{APIRef("CSS Typed OM")}}

Der **`CSSPerspective()`** Konstruktor erstellt ein neues [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)-Objekt, das den [perspective()](/de/docs/Web/CSS/Reference/Values/transform-function/perspective)-Wert der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS repräsentiert.

## Syntax

```js-nolint
new CSSPerspective(length)
```

### Parameter

- [`length`](/de/docs/Web/API/CSSPerspective/length)
  - : Ein Wert für die Distanz von z=0 des zu konstruierenden [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)-Objekts. Dies muss ein {{cssxref('length')}} sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSPerspective.length` existiert, aber kein
    {{cssxref('length')}} ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
