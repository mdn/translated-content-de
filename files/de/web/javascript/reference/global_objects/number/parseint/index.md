---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Methode **`Number.parseInt()`** analysiert ein String-Argument und gibt eine ganze Zahl des angegebenen Radix oder der Basis zurück.

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
  - : Der zu analysierende Wert, [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende Leerzeichen in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine ganze Zahl zwischen `2` und `36`, die den _Radix_ (die Basis in mathematischen Zahlensystemen) des `string` darstellt.

    Wenn `radix` undefiniert oder `0` ist, wird `10` angenommen, es sei denn, die Zahl beginnt mit den Code-Einheitenpaaren `0x` oder `0X`, in diesem Fall wird `16` als Basis angenommen.

### Rückgabewert

Eine aus dem angegebenen `string` analysierte ganze Zahl.

Wenn der `radix` kleiner als `2` oder größer als `36` ist oder das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl konvertiert werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beispiele

### Number.parseInt vs. parseInt

Diese Methode hat die gleiche Funktionalität wie die globale Funktion {{jsxref("parseInt()")}}:

```js
Number.parseInt === parseInt; // true
```

Ihr Zweck ist die Modularisierung von Globals. Weitere Details und Beispiele finden Sie unter {{jsxref("parseInt()")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseInt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
