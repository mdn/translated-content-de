---
title: String.prototype.trim()
short-title: trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`trim()`**-Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen von beiden Enden dieser Zeichenkette und gibt eine neue Zeichenkette zurück, ohne die ursprüngliche Zeichenkette zu ändern.

Um eine neue Zeichenkette zurückzugeben, bei der Leerzeichen nur von einem Ende entfernt werden, verwenden Sie {{jsxref("String/trimStart", "trimStart()")}} oder {{jsxref("String/trimEnd", "trimEnd()")}}.

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

Eine neue Zeichenkette, die `str` darstellt, bei der Leerzeichen sowohl am Anfang als auch am Ende entfernt wurden. Leerzeichen sind definiert als [Leerzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [Zeilenendzeichen](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn weder der Anfang noch das Ende von `str` Leerzeichen haben, wird trotzdem eine neue Zeichenkette zurückgegeben (im Wesentlichen eine Kopie von `str`).

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
