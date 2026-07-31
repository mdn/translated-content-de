---
title: "CSSMathClamp: CSSMathClamp() Konstruktor"
short-title: CSSMathClamp()
slug: Web/API/CSSMathClamp/CSSMathClamp
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSMathClamp()`** Konstruktor erstellt ein neues [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)-Objekt, das eine CSS {{CSSXref("clamp", "clamp()")}}-Funktion repräsentiert.

## Syntax

```js-nolint
new CSSMathClamp(lower, value, upper)
```

### Parameter

- `lower`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – das den Mindestwert darstellt.
- `value`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – das den bevorzugten Wert darstellt.
- `upper`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – das den Höchstwert darstellt.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn ein _Fehler_ beim Hinzufügen der drei Argumente auftritt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
