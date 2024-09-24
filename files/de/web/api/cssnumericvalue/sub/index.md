---
title: "CSSNumericValue: sub()-Methode"
short-title: sub()
slug: Web/API/CSSNumericValue/sub
l10n:
  sourceCommit: 4dc759e296c157afdb896796b27bd7bcc4798957
---

{{APIRef("CSS Typed OM")}}

Die **`sub()`**-Methode der
{{domxref("CSSNumericValue")}}-Schnittstelle zieht eine angegebene Zahl von der
`CSSNumericValue` ab.

## Syntax

```js-nolint
sub(number)
```

### Parameter

- `number`
  - : Entweder eine Zahl oder ein {{domxref('CSSMathSum')}}.

### Rückgabewert

Ein {{domxref('CSSMathSum')}}

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein ungültiger Typ an die Methode übergeben wurde.

## Beispiele

```js
let mathSum = CSS.px("23")
  .sub(CSS.percent("4"))
  .sub(CSS.cm("3"))
  .sub(CSS.in("9"));
// Gibt "calc(23px - 4% - 3cm - 9in)" aus
console.log(mathSum.toString());
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
