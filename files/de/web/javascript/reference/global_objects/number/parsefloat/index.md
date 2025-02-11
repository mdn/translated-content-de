---
title: Number.parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Number.parseFloat()`** analysiert ein Argument und gibt eine Gleitkommazahl zurück. Wenn aus dem Argument keine Zahl analysiert werden kann, gibt sie {{jsxref("NaN")}} zurück.

{{InteractiveExample("JavaScript Demo: Number.parseFloat()")}}

```js interactive-example
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference("4.567abcdefgh"));
// Expected output: 28.695307297889173

console.log(circumference("abcdefgh"));
// Expected output: 0
```

## Syntax

```js-nolint
Number.parseFloat(string)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, [zu einem String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führender {{Glossary("whitespace", "Whitespace")}} in diesem Argument wird ignoriert.

### Rückgabewert

Eine Gleitkommazahl, die aus dem angegebenen `string` analysiert wurde.

Oder {{jsxref("NaN")}}, wenn das erste nicht-Whitespace-Zeichen nicht in eine Zahl umgewandelt werden kann.

## Beispiele

### Number.parseFloat vs. parseFloat

Diese Methode hat die gleiche Funktionalität wie die globale Funktion {{jsxref("parseFloat()")}}:

```js
Number.parseFloat === parseFloat; // true
```

Ihr Zweck ist die Modularisierung globaler Funktionen.

Weitere Details und Beispiele finden Sie unter {{jsxref("parseFloat()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseFloat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseFloat()")}}
