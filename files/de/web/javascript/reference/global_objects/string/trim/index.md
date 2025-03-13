---
title: String.prototype.trim()
slug: Web/JavaScript/Reference/Global_Objects/String/trim
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`trim()`** Methode von {{jsxref("String")}}-Werten entfernt Leerzeichen von beiden Enden des Strings und gibt einen neuen String zurück, ohne den ursprünglichen String zu ändern.

Um einen neuen String mit Beschnitt der Leerzeichen nur an einem Ende zu erhalten, verwenden Sie {{jsxref("String/trimStart", "trimStart()")}} oder {{jsxref("String/trimEnd", "trimEnd()")}}.

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

Ein neuer String, der `str` darstellt, bei dem die Leerzeichen von beiden Enden entfernt wurden. Leerzeichen sind definiert als [white space](/de/docs/Web/JavaScript/Reference/Lexical_grammar#white_space)-Zeichen plus [line terminators](/de/docs/Web/JavaScript/Reference/Lexical_grammar#line_terminators).

Wenn weder der Anfang noch das Ende von `str` Leerzeichen enthält, wird dennoch ein neuer String zurückgegeben (im Wesentlichen eine Kopie von `str`).

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
