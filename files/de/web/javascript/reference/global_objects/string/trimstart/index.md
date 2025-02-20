---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`trimStart()`**-Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen vom Anfang dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern. `trimLeft()` ist ein Alias für diese Methode.

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

Ein neuer String, der `str` darstellt, wobei Leerzeichen vom Anfang (linke Seite) entfernt wurden. Leerzeichen werden definiert als [White Space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [Zeilenendezeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn der Anfang von `str` keine Leerzeichen enthält, wird trotzdem ein neuer String zurückgegeben (praktisch eine Kopie von `str`).

### Aliasnamen

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, implementierten Engines auch die nicht-standardisierte Methode `trimLeft`. Um jedoch konsistent mit {{jsxref("String/padStart", "padStart()")}} zu sein, wurde bei der Standardisierung der Name `trimStart` gewählt. Aus Gründen der Web-Kompatibilität bleibt `trimLeft` ein Alias für `trimStart`, und beide beziehen sich auf dasselbe Funktionsobjekt. In einigen Engines bedeutet dies:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Beispiele

### Verwendung von trimStart()

Das folgende Beispiel entfernt Leerzeichen vom Anfang von `str`, aber nicht von dessen Ende.

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
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
