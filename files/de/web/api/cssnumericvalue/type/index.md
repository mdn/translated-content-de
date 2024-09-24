---
title: "CSSNumericValue: type() Methode"
short-title: type()
slug: Web/API/CSSNumericValue/type
l10n:
  sourceCommit: d76defab4ca13261e9de81ae1df125345f847b0a
---

{{APIRef("CSS Typed OM")}}

Die **`type()`** Methode der
{{domxref("CSSNumericValue")}} Schnittstelle gibt den Typ eines
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

Ein {{domxref('CSSNumericType')}} Objekt.

### Ausnahmen

Keine.

## Beispiele

```js
let mathSum = CSS.px("23")
  .sub(CSS.percent("4"))
  .sub(CSS.cm("3"))
  .sub(CSS.in("9"));
// Gibt ein Objekt mit der Struktur zurück: {length: 1, percentHint: "length"}
let cssNumericType = mathSum.type();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
