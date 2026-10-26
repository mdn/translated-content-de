---
title: Number.parseInt()
short-title: parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Methode **`Number.parseInt()`** analysiert ein String-Argument und gibt eine ganze Zahl mit der angegebenen Basis zurück.

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
  - : Der zu analysierende Wert, der [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion) wird. Führende Leerraumzeichen in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}
  - : Eine ganze Zahl zwischen `2` und `36`, die die _Basis_ (die Basis in mathematischen Zahlensystemen) von `string` angibt.

    Wenn `radix` nicht definiert oder `0` ist, wird `10` angenommen. Beginnt die Zahl jedoch mit den Codeeinheitenpaaren `0x` oder `0X`, wird die Basis `16` angenommen.

### Rückgabewert

Eine aus dem angegebenen `string` ermittelte ganze Zahl.

Wenn `radix` kleiner als `2` oder größer als `36` ist oder das erste Zeichen, das kein Leerraumzeichen ist, nicht in eine Zahl umgewandelt werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beispiele

### Number.parseInt im Vergleich zu parseInt

Diese Methode hat dieselbe Funktionalität wie die globale Funktion {{jsxref("parseInt()")}}:

```js
Number.parseInt === parseInt; // true
```

Sie dient dazu, globale Funktionen zu modularisieren. Weitere Einzelheiten und Beispiele finden Sie unter {{jsxref("parseInt()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Number.parseInt` in `core-js`](https://core-js.io/docs/features/ecmascript/number)
- [Polyfill für `Number.parseInt` von es-shims](https://www.npmjs.com/package/number.parseInt)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
