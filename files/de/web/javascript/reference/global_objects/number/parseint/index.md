---
title: Number.parseInt()
short-title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Methode **`Number.parseInt()`** analysiert ein Zeichenfolgenargument und gibt eine Ganzzahl mit der angegebenen Basis oder dem angegebenen Radix zurück.

{{InteractiveExample("JavaScript Demo: Number.parseInt()", "taller")}}

```js interactive-example
function roughScale(x, base) {
  const parsed = Number.parseInt(x, base);
  if (Number.isNaN(parsed)) {
    return 0;
  }
  return parsed * 100;
}

console.log(roughScale(" 0xF", 16));
// Expected output: 1500

console.log(roughScale("321", 2));
// Expected output: 0
```

## Syntax

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, [zu einer Zeichenfolge gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende Leerzeichen in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}
  - : Eine Ganzzahl zwischen `2` und `36`, die den _Radix_ (die Basis in mathematischen Zahlensystemen) der `string` darstellt.

    Wenn `radix` undefiniert oder `0` ist, wird `10` angenommen, außer wenn die Zahl mit den Codeeinheitspaaren `0x` oder `0X` beginnt, in diesem Fall wird ein Radix von `16` angenommen.

### Rückgabewert

Eine Ganzzahl, die aus der angegebenen `string` analysiert wurde.

Wenn der `radix` kleiner als `2` oder größer als `36` ist oder das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann,
wird {{jsxref("NaN")}} zurückgegeben.

## Beispiele

### Number.parseInt vs. parseInt

Diese Methode hat die gleiche Funktionalität wie die globale Funktion {{jsxref("parseInt()")}}:

```js
Number.parseInt === parseInt; // true
```

Ihr Zweck ist die Modularisierung von globalen Objekten. Bitte sehen Sie {{jsxref("parseInt()")}} für mehr Details und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseInt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.parseInt`](https://www.npmjs.com/package/number.parseInt)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
