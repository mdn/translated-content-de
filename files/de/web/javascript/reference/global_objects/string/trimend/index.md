---
title: String.prototype.trimEnd()
short-title: trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`trimEnd()`** von {{jsxref("String")}}-Werten entfernt Leerraum am Ende dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern. `trimRight()` ist ein Alias für diese Methode.

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

Ein neuer String, der `str` ohne Leerraum am Ende (auf der rechten Seite) darstellt. Als Leerraum gelten [Leerraumzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) und [Zeilenabschlusszeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn sich am Ende von `str` kein Leerraum befindet, wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Alias

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert worden war, implementierten Engines auch die nicht standardisierte Methode `trimRight`. Um mit {{jsxref("String/padEnd", "padEnd()")}} konsistent zu bleiben, wurde bei der Standardisierung dieser Methode jedoch der Name `trimEnd` gewählt. Aus Gründen der Webkompatibilität bleibt `trimRight` ein Alias für `trimEnd`; beide verweisen auf dasselbe Funktionsobjekt. In einigen Engines bedeutet das:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Beispiele

### Verwendung von trimEnd()

Das folgende Beispiel entfernt Leerraum am Ende von `str`, jedoch nicht am Anfang.

```js
let str = "   foo  ";

console.log(str.length); // 8

str = str.trimEnd();
console.log(str.length); // 6
console.log(str); // '   foo'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.trimEnd` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.trimEnd` von es-shims](https://www.npmjs.com/package/string.prototype.trimend)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
