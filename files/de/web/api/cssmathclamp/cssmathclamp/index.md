---
title: "CSSMathClamp: CSSMathClamp() Konstruktor"
short-title: CSSMathClamp()
slug: Web/API/CSSMathClamp/CSSMathClamp
l10n:
  sourceCommit: 285179734bb0505a755c76aa556b6cb12d81b643
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Der **`CSSMathClamp()`** Konstruktor erstellt ein neues [`CSSMathClamp`](/de/docs/Web/API/CSSMathClamp)-Objekt, das eine CSS-{{CSSXref("clamp", "clamp()")}}-Funktion darstellt.

## Syntax

```js-nolint
new CSSMathClamp(lower, value, upper)
```

### Parameter

- `lower`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – die den minimalen Wert darstellt.
- `value`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – die den bevorzugten Wert darstellt.
- `upper`
  - : Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Objekt – entweder eine Zahl oder [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) – die den maximalen Wert darstellt.

### Ausnahmen

- [`TypeError`](/de/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Wird ausgelöst, wenn ein _Fehler_ beim Hinzufügen der drei Argumente auftritt.

## Beispiele

In Bearbeitung

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
