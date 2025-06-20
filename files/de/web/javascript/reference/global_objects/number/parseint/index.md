---
title: Number.parseInt()
short-title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Methode **`Number.parseInt()`** analysiert ein String-Argument und gibt eine ganze Zahl im angegebenen Stellenwert oder in der angegebenen Basis zurück.

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
  - : Der Wert, der analysiert werden soll, [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende Leerzeichen in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine ganze Zahl zwischen `2` und `36`, die die _Basis_ (das Stellenwertsystem in mathematischen Zahlensystemen) des `string` darstellt.

    Wenn `radix` nicht definiert oder `0` ist, wird angenommen, dass es `10` ist, außer wenn die Zahl mit den Code-Einheiten-Paaren `0x` oder `0X` beginnt, in welchem Fall eine Basis von `16` angenommen wird.

### Rückgabewert

Eine ganze Zahl, die aus dem gegebenen `string` analysiert wurde.

Wenn die `radix` kleiner als `2` oder größer als `36` ist oder das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beispiele

### Number.parseInt vs. parseInt

Diese Methode hat die gleiche Funktionalität wie die globale {{jsxref("parseInt()")}}-Funktion:

```js
Number.parseInt === parseInt; // true
```

Ihr Zweck ist die Modularisierung von Globals. Bitte siehe {{jsxref("parseInt()")}} für mehr Details und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseInt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- [es-shims Polyfill von `Number.parseInt`](https://www.npmjs.com/package/number.parseInt)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
