---
title: Number.parseFloat()
short-title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Number.parseFloat()`** analysiert ein Argument und gibt eine Fließkommazahl zurück. Wenn eine Zahl nicht aus dem Argument extrahiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

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
  - : Der zu analysierende Wert, [zu einem String konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende {{Glossary("whitespace", "Leerzeichen")}} in diesem Argument werden ignoriert.

### Rückgabewert

Eine aus dem gegebenen `string` extrahierte Fließkommazahl.

Oder {{jsxref("NaN")}}, wenn das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

## Beispiele

### Number.parseFloat vs. parseFloat

Diese Methode hat dieselbe Funktionalität wie die globale Funktion {{jsxref("parseFloat()")}}:

```js
Number.parseFloat === parseFloat; // true
```

Ihr Zweck ist die Modularisierung von globalen Funktionen.

Siehe {{jsxref("parseFloat()")}} für mehr Details und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseFloat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.parseFloat`](https://www.npmjs.com/package/number.parsefloat)
- {{jsxref("Number")}}
- {{jsxref("parseFloat()")}}
