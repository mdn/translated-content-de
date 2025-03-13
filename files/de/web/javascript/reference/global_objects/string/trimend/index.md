---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`trimEnd()`** Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen vom Ende dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern. `trimRight()` ist ein Alias dieser Methode.

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

Ein neuer String, der `str` repräsentiert, von dem Leerzeichen am Ende (rechte Seite) entfernt wurden. Leerzeichen sind als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space) Zeichen plus [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) definiert.

Wenn das Ende von `str` keine Leerzeichen aufweist, wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Aliasbildung

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, implementierten Engines auch die nicht-standardisierte Methode `trimRight`. Allerdings wurde zur Konsistenz mit {{jsxref("String/padEnd", "padEnd()")}} bei der Standardisierung der Methodenname als `trimEnd` gewählt. Aus Gründen der Web-Kompatibilität bleibt `trimRight` als Alias zu `trimEnd`, und sie beziehen sich auf dasselbe Funktionsobjekt. In einigen Engines bedeutet dies:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Beispiele

### Verwendung von trimEnd()

Das folgende Beispiel entfernt Leerzeichen vom Ende des Strings `str`, aber nicht von dessen Anfang.

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

- [Polyfill von `String.prototype.trimEnd` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [es-shims Polyfill von `String.prototype.trimEnd`](https://www.npmjs.com/package/string.prototype.trimend)
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
