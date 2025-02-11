---
title: String.prototype.toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`toUpperCase()`** von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben zurück.

{{InteractiveExample("JavaScript Demo: String.toUpperCase()", "shorter")}}

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

Ein neuer String, der den aufrufenden String in Großbuchstaben darstellt.

## Beschreibung

Die Methode `toUpperCase()` gibt den Wert des Strings in Großbuchstaben zurück. Diese Methode beeinflusst den Wert des Strings selbst nicht, da JavaScript-Strings unveränderlich sind.

## Beispiele

### Grundlegende Verwendung

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Umwandlung von Nicht-String-`this`-Werten in Strings

Diese Methode konvertiert jeden Wert, der kein String ist, in einen String, wenn Sie `this` auf einen Wert setzen, der kein String ist:

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
