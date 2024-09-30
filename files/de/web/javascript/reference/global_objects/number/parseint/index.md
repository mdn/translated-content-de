---
title: Number.parseInt()
slug: Web/JavaScript/Reference/Global_Objects/Number/parseInt
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`Number.parseInt()`** statische Methode analysiert ein Zeichenfolgenargument und gibt eine ganze Zahl der angegebenen Basis oder Radix zurück.

{{EmbedInteractiveExample("pages/js/number-parseint.html", "taller")}}

## Syntax

```js-nolint
Number.parseInt(string)
Number.parseInt(string, radix)
```

### Parameter

- `string`
  - : Der zu analysierende Wert, [in eine Zeichenkette konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Führende Leerzeichen in diesem Argument werden ignoriert.
- `radix` {{optional_inline}}

  - : Eine ganze Zahl zwischen `2` und `36`, die die _Radix_ (die Basis in mathematischen Zahlensystemen) der `string` darstellt.

    Wenn `radix` undefiniert oder `0` ist, wird `10` angenommen, es sei denn, die Zahl beginnt mit den Code-Einheit-Paaren `0x` oder `0X`, in welchem Fall eine Radix von `16` angenommen wird.

### Rückgabewert

Eine aus der angegebenen `string` geparste Ganzzahl.

Wenn die `radix` kleiner als `2` oder größer als `36` ist oder das erste Nicht-Leerzeichen-Zeichen nicht in eine Zahl umgewandelt werden kann, wird {{jsxref("NaN")}} zurückgegeben.

## Beispiele

### Number.parseInt vs. parseInt

Diese Methode hat dieselbe Funktionalität wie die globale {{jsxref("parseInt()")}} Funktion:

```js
Number.parseInt === parseInt; // true
```

Ihr Zweck ist die Modularisierung globaler Objekte. Bitte sehen Sie {{jsxref("parseInt()")}} für weitere Details und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Number.parseInt` in `core-js`](https://github.com/zloirock/core-js#ecmascript-number)
- {{jsxref("Number")}}
- {{jsxref("parseInt()")}}
