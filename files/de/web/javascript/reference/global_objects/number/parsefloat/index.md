---
title: Number.parseFloat()
short-title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseFloat
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Number.parseFloat()`** analysiert ein Argument und gibt eine Gleitkommazahl zurück. Wenn aus dem Argument keine Zahl ermittelt werden kann, gibt sie {{jsxref("NaN")}} zurück.

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
  - : Der zu analysierende Wert, der [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Vorangestellte {{Glossary("whitespace", "Leerraumzeichen")}} in diesem Argument werden ignoriert.

### Rückgabewert

Eine aus dem angegebenen `string` ermittelte Gleitkommazahl.

Oder {{jsxref("NaN")}}, wenn das erste Zeichen, das kein Leerraumzeichen ist, nicht in eine Zahl umgewandelt werden kann.

## Beispiele

### Number.parseFloat im Vergleich zu parseFloat

Diese Methode hat dieselbe Funktionalität wie die globale Funktion {{jsxref("parseFloat()")}}:

```js
Number.parseFloat === parseFloat; // true
```

Sie dient dazu, globale Funktionen zu modularisieren.

Weitere Einzelheiten und Beispiele finden Sie unter {{jsxref("parseFloat()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Number.parseFloat` in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [Polyfill für `Number.parseFloat` von es-shims](https://www.npmjs.com/package/number.parsefloat)
- {{jsxref("Number")}}
- {{jsxref("parseFloat()")}}
