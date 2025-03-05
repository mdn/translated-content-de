---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
l10n:
  sourceCommit: e8320dfbed49d37589d0fe759ef6506885f340f7
---

{{JSRef}}

Die **`trimStart()`** Methode von {{jsxref("String")}} Werten entfernt Leerzeichen vom Anfang dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu ändern. `trimLeft()` ist ein Alias für diese Methode.

{{InteractiveExample("JavaScript Demo: String.trimStart()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
```

## Syntax

```js-nolint
trimStart()

trimLeft()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der `str` darstellt, von dem die Leerzeichen am Anfang (linke Seite) entfernt wurden. Leerzeichen sind als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) definiert.

Wenn der Anfang von `str` keine Leerzeichen enthält, wird trotzdem ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Aliasbildung

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, haben Engines auch die nicht-standardisierte Methode `trimLeft` implementiert. Um jedoch konsistent mit {{jsxref("String/padStart", "padStart()")}} zu sein, wurde der Name bei der Standardisierung als `trimStart` gewählt. Aus Gründen der Web-Kompatibilität bleibt `trimLeft` als Alias zu `trimStart` erhalten, und sie verweisen auf dasselbe Funktionsobjekt. In einigen Engines bedeutet das:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Beispiele

### Verwendung von trimStart()

Das folgende Beispiel entfernt Leerzeichen vom Anfang von `str`, nicht jedoch von seinem Ende.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimStart();
console.log(str.length); // 5
console.log(str); // 'foo  '
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.trimStart` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.trimStart`](https://www.npmjs.com/package/string.prototype.trimstart)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
