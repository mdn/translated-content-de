---
title: "CSSPerspective: CSSPerspective() Konstruktor"
short-title: CSSPerspective()
slug: Web/API/CSSPerspective/CSSPerspective
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Der **`CSSPerspective()`** Konstruktor erstellt ein neues [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)-Objekt, das den [perspective()](/de/docs/Web/CSS/transform-function/perspective)-Wert der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS repräsentiert.

## Syntax

```js-nolint
new CSSPerspective(length)
```

### Parameter

- [`length`](/de/docs/Web/API/CSSPerspective/length)
  - : Ein Wert für die Entfernung von z=0 des zu konstruierenden [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)-Objekts. Dies muss eine {{cssxref('length')}} sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSPerspective.length` existiert, aber keine {{cssxref('length')}} ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
