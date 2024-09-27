---
title: "CSSNumericValue: to()-Methode"
short-title: to()
slug: Web/API/CSSNumericValue/to
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`to()`**-Methode der
[`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle wandelt einen numerischen Wert von einer Einheit in eine andere um.

## Syntax

```js-nolint
to(unit)
```

### Parameter

- `unit`
  - : Die Einheit, in die Sie konvertieren möchten.

### Rückgabewert

Ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die übergebenen Werte nicht summiert werden können.

## Beispiele

```js
// Prints "0.608542cm"
console.log(CSS.px("23").to("cm").toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
