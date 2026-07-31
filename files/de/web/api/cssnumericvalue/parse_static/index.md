---
title: "CSSNumericValue: Methode parse()"
short-title: parse()
slug: Web/API/CSSNumericValue/parse_static
l10n:
  sourceCommit: ebb9a6421c24c4aff2fef3913527571441361cf0
---

{{APIRef("CSS Typed Object Model API")}}

Die statische Methode **`parse()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) wandelt einen Wertstring in ein Objekt um, dessen Mitglieder Wert und Einheiten sind.

## Syntax

```js-nolint
CSSNumericValue.parse(cssText)
```

### Parameter

- `cssText`
  - : Ein String, der numerische und Einheitsteile enthält.

### Rückgabewert

Ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : TBD

## Beispiele

### Grundlegende Verwendung

Der folgende Code gibt ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Objekt zurück, dessen `unit`-Eigenschaft `"px"` und dessen `value`-Eigenschaft `42` entspricht.

```js
let numValue = CSSNumericValue.parse("42.0px");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
