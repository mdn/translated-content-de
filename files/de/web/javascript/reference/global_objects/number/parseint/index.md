---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Number.parseInt()`** analysiert ein Zeichenfolgenargument und gibt eine ganze Zahl des angegebenen Radix oder der Basis zurück.

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## Syntax

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### Parameter

- `string`
  - : Der zu parsende Wert, [in eine Zeichenfolge umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende Leerzeichen in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine ganze Zahl zwischen `2` und `36`, die den
    _Radix_ (die Basis in mathematischen Zahlensystemen) der
    `string` darstellt.

    Wenn `radix` undefiniert oder `0` ist, wird `10` angenommen, es sei denn, die Zahl beginnt mit den Codeeinheitpaaren `0x` oder `0X`, in diesem Fall wird ein Radix von `16` angenommen.

### Rückgabewert

Eine aus der angegebenen `string` geparste ganze Zahl.

Wenn der `radix` kleiner als `2` oder größer als `36` ist, oder wenn das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann,
wird {{jsxref("NaN")}} zurückgegeben.

## Beispiele

### Number.parseInt vs. parseInt

Diese Methode hat dieselbe Funktionalität wie die globale {{jsxref("parseInt()")}}-Funktion:

```js
Number.parseInt === parseInt; // true
```

Ihr Zweck ist die Modularisierung von Globalen. Bitte sehen Sie
{{jsxref("parseInt()")}} für mehr Details und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseInt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
