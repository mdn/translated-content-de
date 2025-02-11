---
title: String.prototype.trimEnd()
slug: Web/JavaScript/Reference/Global_Objects/String/trimEnd
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`trimEnd()`**-Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen am Ende dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern. `trimRight()` ist ein Alias für diese Methode.

{{InteractiveExample("JavaScript Demo: String.trimEnd()")}}

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

Ein neuer String, der `str` darstellt, jedoch ohne Leerzeichen am Ende (rechte Seite). Leerzeichen werden definiert durch [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen und [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Falls das Ende von `str` keine Leerzeichen enthält, wird trotzdem ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

### Aliase

Nachdem {{jsxref("String/trim", "trim()")}} standardisiert wurde, implementierten Engines auch die nicht-standardisierte Methode `trimRight`. Um jedoch die Konsistenz mit {{jsxref("String/padEnd", "padEnd()")}} zu wahren, wurde beim Standardisierungsprozess der Name `trimEnd` gewählt. Aus Gründen der Web-Kompatibilität bleibt `trimRight` als Alias für `trimEnd` erhalten, und beide beziehen sich auf dasselbe Funktionsobjekt. In einigen Engines bedeutet dies:

```js
String.prototype.trimRight.name === "trimEnd";
```

## Beispiele

### Verwendung von trimEnd()

Im folgenden Beispiel werden Leerzeichen am Ende von `str` entfernt, nicht jedoch am Anfang.

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
- {{jsxref("String.prototype.trim()")}}
- {{jsxref("String.prototype.trimStart()")}}
