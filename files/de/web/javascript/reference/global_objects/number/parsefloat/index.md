---
title: Number.parseFloat()
short-title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Number.parseFloat()`** analysiert ein Argument und gibt eine Fließkommazahl zurück. Wenn eine Zahl nicht aus dem Argument analysiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

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
  - : Der zu analysierende Wert, [auf einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende {{Glossary("whitespace", "Leerzeichen")}} in diesem Argument werden ignoriert.

### Rückgabewert

Eine Fließkommazahl, die aus dem angegebenen `string` analysiert wurde.

Oder {{jsxref("NaN")}}, wenn das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann.

## Beispiele

### Number.parseFloat vs. parseFloat

Diese Methode hat die gleiche Funktionalität wie die globale Funktion {{jsxref("parseFloat()")}}:

```js
Number.parseFloat === parseFloat; // true
```

Ihr Zweck ist die Modularisierung von globalen Funktionen.

Weitere Details und Beispiele finden Sie unter {{jsxref("parseFloat()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseFloat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.parseFloat`](https://www.npmjs.com/package/number.parsefloat)
- {{jsxref("Number")}}
- {{jsxref("parseFloat()")}}
