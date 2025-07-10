---
title: String.prototype.trimStart()
short-title: trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`trimStart()`** Methode von {{jsxref("String")}} Werten entfernt Leerzeichen vom Anfang dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu ändern. `trimLeft()` ist ein Alias dieser Methode.

{{InteractiveExample("JavaScript Demo: String.prototype.trimStart()")}}

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

Ein neuer String, der `str` darstellt, von Leerzeichen am Anfang (linke Seite) befreit. Leerzeichen sind definiert als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) Zeichen plus [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn `str` am Anfang keine Leerzeichen hat, wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Aliasing

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, implementierten Engines auch die nicht standardisierte Methode `trimLeft`. Jedoch wurde der Name der Methode, als sie standardisiert wurde, zu `trimStart` gewählt, um Konsistenz mit {{jsxref("String/padStart", "padStart()")}} zu gewährleisten. Aus Gründen der Webkompatibilität bleibt `trimLeft` als Alias für `trimStart` erhalten, und beide beziehen sich auf dasselbe Funktionsobjekt. In einigen Engines bedeutet das:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Beispiele

### Verwendung von trimStart()

Das folgende Beispiel entfernt Leerzeichen vom Anfang von `str`, jedoch nicht vom Ende.

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
