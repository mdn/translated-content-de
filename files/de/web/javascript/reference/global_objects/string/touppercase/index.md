---
title: String.prototype.toUpperCase()
short-title: toUpperCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toUpperCase
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toUpperCase()`** Methode von {{jsxref("String")}}-Werten gibt diesen String in Großbuchstaben konvertiert zurück.

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

### Grundlegende Nutzung

```js
console.log("alphabet".toUpperCase()); // 'ALPHABET'
```

### Umwandlung von Nicht-String-`this`-Werten zu Strings

Diese Methode konvertiert jeden Nicht-String-Wert in einen String, wenn Sie dessen
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
