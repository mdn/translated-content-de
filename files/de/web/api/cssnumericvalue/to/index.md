---
title: "CSSNumericValue: to()-Methode"
short-title: to()
slug: Web/API/CSSNumericValue/to
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`to()`**-Methode des
{{domxref("CSSNumericValue")}}-Interfaces konvertiert einen numerischen Wert von einer Einheit in eine andere.

## Syntax

```js-nolint
to(unit)
```

### Parameter

- `unit`
  - : Die Einheit, in die Sie konvertieren möchten.

### Rückgabewert

Ein {{domxref('CSSMathSum')}}.

### Ausnahmen

- `SyntaxError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die übergebenen Werte nicht summiert werden können.

## Beispiele

```js
// Gibt "0.608542cm" aus
console.log(CSS.px("23").to("cm").toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
