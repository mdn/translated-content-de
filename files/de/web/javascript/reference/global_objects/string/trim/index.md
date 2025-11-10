---
title: String.prototype.trim()
short-title: trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`trim()`** Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen von beiden Enden dieser Zeichenfolge und gibt eine neue Zeichenfolge zurück, ohne die ursprüngliche Zeichenfolge zu ändern.

Um eine neue Zeichenfolge mit Leerzeichen nur von einem Ende zurückzugeben, verwenden Sie {{jsxref("String/trimStart", "trimStart()")}} oder {{jsxref("String/trimEnd", "trimEnd()")}}.

{{InteractiveExample("JavaScript Demo: String.prototype.trim()")}}

```js interactive-example
const greeting = "   Hello world!   ";

console.log(greeting);
// Expected output: "   Hello world!   ";

console.log(greeting.trim());
// Expected output: "Hello world!";
```

## Syntax

```js-nolint
trim()
```

### Parameter

Keine.

### Rückgabewert

Eine neue Zeichenfolge, die `str` darstellt, bei der sowohl am Anfang als auch am Ende alle Leerzeichen entfernt wurden. Leerzeichen sind definiert als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn weder am Anfang noch am Ende von `str` irgendwelche Leerzeichen vorhanden sind, wird dennoch eine neue Zeichenfolge zurückgegeben (im Wesentlichen eine Kopie von `str`).

## Beispiele

### Verwendung von trim()

Das folgende Beispiel entfernt Leerzeichen von beiden Enden von `str`.

```js
const str = "   foo  ";
console.log(str.trim()); // 'foo'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.trimStart()")}}
- {{jsxref("String.prototype.trimEnd()")}}
