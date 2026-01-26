---
title: "CSSPerspective: CSSPerspective() Konstruktor"
short-title: CSSPerspective()
slug: Web/API/CSSPerspective/CSSPerspective
l10n:
  sourceCommit: 0c13af55e869cbc54830fd1a601fd05f60717375
---

{{APIRef("CSS Typed OM")}}

Der **`CSSPerspective()`** Konstruktor erzeugt ein neues [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)-Objekt, das den {{cssxref("transform-function/perspective", "perspective()")}}-Wert der individuellen {{CSSXref('transform')}}-Eigenschaft in CSS darstellt.

## Syntax

```js-nolint
new CSSPerspective(length)
```

### Parameter

- [`length`](/de/docs/Web/API/CSSPerspective/length)
  - : Ein Wert für die Entfernung von z=0 des zu konstruierenden [`CSSPerspective`](/de/docs/Web/API/CSSPerspective)-Objekts. Dies muss ein {{cssxref('length')}} sein.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn der Wert von `CSSPerspective.length` existiert, aber kein {{cssxref('length')}} ist.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
