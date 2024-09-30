---
title: String.prototype.repeat()
slug: Web/JavaScript/Reference/Global_Objects/String/repeat
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die **`repeat()`**-Methode von {{jsxref("String")}}-Werten erstellt und gibt eine neue Zeichenkette zurück,
die die angegebene Anzahl von Kopien dieser Zeichenkette enthält, zusammengefügt.

{{EmbedInteractiveExample("pages/js/string-repeat.html", "shorter")}}

## Syntax

```js-nolint
repeat(count)
```

### Parameter

- `count`
  - : Eine ganze Zahl zwischen `0` und
    {{jsxref("Number/POSITIVE_INFINITY", "+Infinity")}}, die angibt,
    wie oft die Zeichenkette wiederholt werden soll.

### Rückgabewert

Eine neue Zeichenkette, die die angegebene Anzahl von Kopien der gegebenen Zeichenkette enthält.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `count` negativ ist oder wenn `count` die maximale Zeichenkettenlänge überschreitet.

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
- {{jsxref("String.prototype.concat()")}}
