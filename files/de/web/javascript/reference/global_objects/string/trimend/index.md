---
title: String.prototype.trimEnd()
short-title: trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`trimEnd()`**-Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen vom Ende dieser Zeichenkette und gibt eine neue Zeichenkette zurück, ohne die ursprüngliche Zeichenkette zu ändern. `trimRight()` ist ein Alias für diese Methode.

{{InteractiveExample("JavaScript Demo: String.prototype.trimEnd()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
```

## Syntax

```js-nolint
trimEnd()

trimRight()
```

### Parameter

Keine.

### Rückgabewert

Eine neue Zeichenkette, die `str` darstellt, von Leerzeichen am Ende (rechte Seite) befreit. Leerzeichen sind definiert als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn das Ende von `str` keine Leerzeichen hat, wird dennoch eine neue Zeichenkette zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Aliasnamen

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, implementierten die Engines auch die nicht standardisierte Methode `trimRight`. Aus Konsistenzgründen mit {{jsxref("String/padEnd", "padEnd()")}} wurde beim Standardisierungsprozess der Name `trimEnd` gewählt. Aus Gründen der Web-Kompatibilität bleibt `trimRight` als Alias zu `trimEnd` erhalten, und sie beziehen sich auf dasselbe Funktionsobjekt. In einigen Engines bedeutet dies:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Beispiele

### Verwendung von trimEnd()

Das folgende Beispiel entfernt Leerzeichen vom Ende von `str`, aber nicht vom Anfang.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## Definitionen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.trimEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.trimEnd`](https://www.npmjs.com/package/string.prototype.trimend)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
