---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`trim()`**-Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen von beiden Enden dieses Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu verändern.

Um einen neuen String zurückzugeben, bei dem Leerzeichen nur von einem Ende entfernt werden, verwenden Sie {{jsxref("String/trimStart", "trimStart()")}} oder {{jsxref("String/trimEnd", "trimEnd()")}}.

{{InteractiveExample("JavaScript Demo: String.trim()")}}

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

Ein neuer String, der `str` darstellt, bei dem die Leerzeichen von Anfang und Ende entfernt wurden. Leerzeichen werden als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen sowie [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators) definiert.

Wenn weder am Anfang noch am Ende von `str` Leerzeichen vorhanden sind, wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

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
