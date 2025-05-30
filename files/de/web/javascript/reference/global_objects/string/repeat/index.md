---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{JSRef}}

Die **`repeat()`** Methode von {{jsxref("String")}}-Werten erstellt und gibt einen neuen String zurück, welcher die angegebene Anzahl von Kopien dieses Strings enthält, die miteinander verkettet sind.

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
  - : Eine ganze Zahl zwischen `0` und {{jsxref("Number/POSITIVE_INFINITY", "Infinity")}}, die angibt, wie oft der String wiederholt werden soll.

### Rückgabewert

Ein neuer String, der die angegebene Anzahl von Kopien des gegebenen Strings enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `count` negativ ist oder wenn `count` die maximale Stringlänge überschreitet.

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

- [Polyfill von `String.prototype.repeat` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.repeat`](https://www.npmjs.com/package/string.prototype.repeat)
- {{jsxref("String.prototype.concat()")}}
