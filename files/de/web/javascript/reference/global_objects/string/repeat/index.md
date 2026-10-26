---
title: String.prototype.repeat()
short-title: repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die **`repeat()`**-Methode von {{jsxref("String")}}-Werten erstellt eine neue Zeichenfolge und gibt sie zurück. Diese enthält die angegebene Anzahl von Kopien der ursprünglichen Zeichenfolge, die aneinandergehängt sind.

{{InteractiveExample("JavaScript Demo: String.prototype.repeat()", "shorter")}}

```js interactive-example
const mood = "Happy! ";

console.log(`I feel ${mood.repeat(3)}`);
// Expected output: "I feel Happy! Happy! Happy! "
```

## Syntax

```js-nolint
repeat(count)
```

### Parameter

- `count`
  - : Eine Ganzzahl zwischen `0` und {{jsxref("Number/POSITIVE_INFINITY", "Infinity")}}, die angibt, wie oft die Zeichenfolge wiederholt werden soll.

### Rückgabewert

Eine neue Zeichenfolge, die die angegebene Anzahl von Kopien der ursprünglichen Zeichenfolge enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `count` negativ ist oder die maximal zulässige Länge einer Zeichenfolge überschritten würde.

## Beispiele

### Verwendung von repeat()

```js
"abc".repeat(-1); // RangeError
"abc".repeat(0); // ''
"abc".repeat(1); // 'abc'
"abc".repeat(2); // 'abcabc'
"abc".repeat(3.5); // 'abcabcabc' (count will be converted to integer)
"abc".repeat(1 / 0); // RangeError

({ toString: () => "abc", repeat: String.prototype.repeat }).repeat(2);
// 'abcabc' (repeat() is a generic method)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.repeat` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.repeat` von es-shims](https://www.npmjs.com/package/string.prototype.repeat)
- {{jsxref("String.prototype.concat()")}}
