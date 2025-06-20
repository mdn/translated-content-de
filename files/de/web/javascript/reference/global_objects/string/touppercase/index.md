---
title: String.prototype.toUpperCase()
short-title: toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`toUpperCase()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben konvertiert zurück.

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

Die `toUpperCase()`-Methode gibt den Wert des Strings in Großbuchstaben konvertiert zurück. Diese Methode beeinflusst nicht den Wert des Strings selbst, da JavaScript-Strings unveränderlich sind.

## Beispiele

### Grundlegende Verwendung

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Umwandlung von nicht-String-`this`-Werten in Strings

Diese Methode wird jeden nicht-String-Wert in einen String konvertieren, wenn Sie sein `this` auf einen Wert setzen, der kein String ist:

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
