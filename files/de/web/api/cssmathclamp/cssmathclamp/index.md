---
title: "CSSMathClamp: CSSMathClamp() Konstruktor"
short-title: CSSMathClamp()
slug: Web/API/CSSMathClamp/CSSMathClamp
l10n:
  sourceCommit: 8446f51f9a446af6a9ed878ff8f9515d60d28ed5
---

{{SeeCompatTable}}{{APIRef("CSS Typed Object Model API")}}

Der **`CSSMathClamp()`** Konstruktor erstellt ein neues [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)-Objekt, das eine CSS-{{CSSXref("clamp", "clamp()")}}-Funktion repräsentiert.

## Syntax

```js-nolint
new CSSMathClamp(lower, value, upper)
```

### Parameter

- `lower`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – welche den Mindestwert darstellt.
- `value`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – welche den bevorzugten Wert darstellt.
- `upper`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – welche den Höchstwert darstellt.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn es einen _Fehler_ beim Hinzufügen der drei Argumente gibt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
