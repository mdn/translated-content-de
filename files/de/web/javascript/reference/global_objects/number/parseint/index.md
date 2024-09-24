---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Number.parseInt()`** analysiert ein String-Argument und gibt eine Ganzzahl des angegebenen Radix oder der Basis zurück.

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## Syntax

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, [in einen String umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende Leerzeichen in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine Ganzzahl zwischen `2` und `36`, die den
    _Radix_ (die Basis in mathematischen Zahlensystemen) des
    `string` darstellt.

    Wenn `radix` undefiniert oder `0` ist, wird angenommen, dass es `10` ist, außer wenn die Zahl mit den Codereinheitpaaren `0x` oder `0X` beginnt, in diesem Fall wird eine Basis von `16` angenommen.

### Rückgabewert

Eine aus dem gegebenen `string` analysierte Ganzzahl.

Wenn der `radix` kleiner als `2` oder größer als `36` ist, oder das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beispiele

### Number.parseInt vs. parseInt

Diese Methode hat die gleiche Funktionalität wie die globale Funktion {{jsxref("parseInt()")}}:

```js
Number.parseInt === parseInt; // true
```

Ihr Zweck ist die Modularisierung von globalen Objekten. Bitte sehen Sie sich {{jsxref("parseInt()")}} für mehr Details und Beispiele an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseInt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
