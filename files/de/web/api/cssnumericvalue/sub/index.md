---
title: "CSSNumericValue: sub()-Methode"
short-title: sub()
slug: Web/API/CSSNumericValue/sub
l10n:
  sourceCommit: 4dc759e296c157afdb896796b27bd7bcc4798957
---

{{APIRef("CSS Typed OM")}}

Die **`sub()`**-Methode der
[`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle zieht eine angegebene Zahl von dem
`CSSNumericValue` ab.

## Syntax

```js-nolint
sub(number)
```

### Parameter

- `number`
  - : Entweder eine Zahl oder ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum).

### Rückgabewert

Ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

```js
let mathSum = CSS.px("23")
  .sub(CSS.percent("4"))
  .sub(CSS.cm("3"))
  .sub(CSS.in("9"));
// Prints "calc(23px - 4% - 3cm - 9in)"
console.log(mathSum.toString());
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
