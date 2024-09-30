---
title: "CSSNumericValue: `parse()` statische Methode"
short-title: parse()
slug: Web/API/CSSNumericValue/parse_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("CSS Typed OM")}}

Die **`parse()`** statische Methode der
[`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) Schnittstelle konvertiert einen Wertstring in ein Objekt, dessen
Mitglieder Wert und Einheiten sind.

## Syntax

```js-nolint
CSSNumericValue.parse(cssText)
```

### Parameter

- `cssText`
  - : ein String, der numerische und Einheitsteile enthält.

### Rückgabewert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : TBD

## Beispiele

Das Folgende gibt ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) Objekt mit einer `unit`
Eigenschaft zurück, die `"px"` entspricht, und einer `value` Eigenschaft, die
`42` entspricht.

```js
let numValue = CSSNumericValue.parse("42.0px");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
