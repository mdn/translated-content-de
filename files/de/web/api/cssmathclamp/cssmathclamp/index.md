---
title: "CSSMathClamp: CSSMathClamp() Konstruktor"
short-title: CSSMathClamp()
slug: Web/API/CSSMathClamp/CSSMathClamp
l10n:
  sourceCommit: 0266df57cb5eb52a057e305ba12d49c93f0edb7e
---

{{APIRef("CSS Typed Object Model API")}}

Der **`CSSMathClamp()`** Konstruktor erstellt ein neues [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp) Objekt, das eine CSS {{CSSXref("clamp", "clamp()")}} Funktion repräsentiert.

## Syntax

```js-nolint
new CSSMathClamp(lower, value, upper)
```

### Parameter

- `lower`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – die den Minimalwert darstellt.
- `value`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – die den bevorzugten Wert darstellt.
- `upper`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – die den Maximalwert darstellt.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn beim Hinzufügen der drei Argumente ein _Fehler_ auftritt.

## Beispiele

To do

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
