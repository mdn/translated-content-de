---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die Methode **`toUpperCase()`** von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben konvertiert zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.toUpperCase()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toUpperCase());
// Expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
```

## Syntax

```js-nolint
toUpperCase()
```

### Parameter

Keine.

### Rückgabewert

Ein neuer String, der den aufrufenden String in Großbuchstaben konvertiert darstellt.

## Beschreibung

Die `toUpperCase()`-Methode gibt den Wert des Strings in Großbuchstaben konvertiert zurück. Diese Methode beeinflusst den Wert des Strings selbst nicht, da JavaScript-Strings unveränderlich sind.

## Beispiele

### Grundlegende Verwendung

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Konvertierung von nicht-string `this`-Werten in Strings

Diese Methode wird jeden Nicht-String-Wert in einen String konvertieren, wenn Sie sein
`this` auf einen Wert setzen, der kein String ist:

```js
const a = String.prototype.toUpperCase.call({
  toString() {
    return "abcdef";
  },
});

const b = String.prototype.toUpperCase.call(true);

// prints out 'ABCDEF TRUE'.
console.log(a, b);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toLowerCase()")}}
