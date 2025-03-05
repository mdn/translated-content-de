---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die statische Methode **`Number.parseInt()`** analysiert ein Zeichenfolgenargument und gibt eine Ganzzahl der angegebenen Basis oder des angegebenen Radix zurück.

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
  - : Der zu analysierende Wert, [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende Leerzeichen in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine Ganzzahl zwischen `2` und `36`, die den _radix_ (die Basis in mathematischen Zahlensystemen) der `string` darstellt.

    Wenn `radix` undefiniert oder `0` ist, wird `10` angenommen, es sei denn, die Zahl beginnt mit den Code-Einheitspaaren `0x` oder `0X`, in diesem Fall wird ein Radix von `16` angenommen.

### Rückgabewert

Eine aus der angegebenen `string` analysierte Ganzzahl.

Wenn der `radix` kleiner als `2` oder größer als `36` ist oder das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beispiele

### Number.parseInt vs. parseInt

Diese Methode hat die gleiche Funktionalität wie die globale {{jsxref("parseInt()")}}-Funktion:

```js
Number.parseInt === parseInt; // true
```

Ihr Zweck ist die Modularisierung von globalen Variablen. Bitte sehen Sie {{jsxref("parseInt()")}} für mehr Details und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseInt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.parseInt`](https://www.npmjs.com/package/number.parseInt)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
