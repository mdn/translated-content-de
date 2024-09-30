---
title: "CSSNumericValue: type() Methode"
short-title: type()
slug: Web/API/CSSNumericValue/type
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`type()`**-Methode der
[`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle gibt den Typ von
`CSSNumericValue` zurück, einer von `angle`, `flex`,
`frequency`, `length`, `resolution`,
`percent`, `percentHint` oder `time`.

## Syntax

```js-nolint
type()
```

### Parameter

Keine.

### Rückgabewert

Ein [`CSSNumericType`](/de/docs/Web/API/CSSNumericType)-Objekt.

### Ausnahmen

Keine.

## Beispiele

```js
let mathSum = CSS.px("23")
  .sub(CSS.percent("4"))
  .sub(CSS.cm("3"))
  .sub(CSS.in("9"));
// Returns an object with the structure: {length: 1, percentHint: "length"}
let cssNumericType = mathSum.type();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
