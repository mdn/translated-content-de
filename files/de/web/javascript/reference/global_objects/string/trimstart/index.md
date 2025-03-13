---
title: String.prototype.trimStart()
slug: Web/JavaScript/Reference/Global_Objects/String/trimStart
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`trimStart()`**-Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen vom Anfang dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu ändern. `trimLeft()` ist ein Alias für diese Methode.

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

Ein neuer String, der `str` ohne Leerzeichen am Anfang (linke Seite) repräsentiert. Leerzeichen sind definiert als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn der Anfang von `str` keine Leerzeichen enthält, wird trotzdem ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Aliasing

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, haben Engines auch die nicht standardisierte Methode `trimLeft` implementiert. Für Konsistenz mit {{jsxref("String/padStart", "padStart()")}} wurde bei der Standardisierung der Name `trimStart` gewählt. Aus Gründen der Webkompatibilität bleibt `trimLeft` als Alias für `trimStart` erhalten und sie beziehen sich auf dasselbe Funktionsobjekt. In einigen Engines bedeutet dies:

```js
String.prototype.trimLeft.name === "trimStart";
```

## Beispiele

### Verwendung von trimStart()

Das folgende Beispiel entfernt Leerzeichen vom Anfang von `str`, jedoch nicht von seinem Ende.

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
- [es-shims polyfill von `String.prototype.trimStart`](https://www.npmjs.com/package/string.prototype.trimstart)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimEnd()")}}
