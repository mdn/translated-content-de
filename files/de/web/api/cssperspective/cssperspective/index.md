---
title: "CSSPerspective: CSSPerspective() Konstruktor"
short-title: CSSPerspective()
slug: Web/API/CSSPerspective/CSSPerspective
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Der **`CSSPerspective()`** Konstruktor erstellt ein neues {{domxref("CSSPerspective")}} Objekt, das den [perspective()](/de/docs/Web/CSS/transform-function/perspective) Wert der individuellen {{CSSXref('transform')}} Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSPerspective(length)
```

### Parameter

- {{domxref('CSSPerspective.length','length')}}
  - : Ein Wert für die Entfernung vom z=0 des zu konstruierenden {{domxref('CSSPerspective')}} Objekts. Dies muss eine {{cssxref('length')}} sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Ausgelöst, wenn der Wert von `CSSPerspective.length` existiert, aber keine {{cssxref('length')}} ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
