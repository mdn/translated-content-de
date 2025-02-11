---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`toLowerCase()`**-Methode von {{jsxref("String")}}-Werten gibt diese Zeichenkette in Kleinbuchstaben umgewandelt zurück.

{{InteractiveExample("JavaScript Demo: String.toLowerCase()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

console.log(sentence.toLowerCase());
// Expected output: "the quick brown fox jumps over the lazy dog."
```

## Syntax

```js-nolint
toLowerCase()
```

### Parameter

Keine.

### Rückgabewert

Eine neue Zeichenkette, die die aufrufende Zeichenkette in Kleinbuchstaben konvertiert darstellt.

## Beschreibung

Die Methode `toLowerCase()` gibt den Wert der Zeichenkette in Kleinbuchstaben umgewandelt zurück. `toLowerCase()` ändert nicht den Wert der Zeichenkette `str` selbst.

## Beispiele

### Verwendung von `toLowerCase()`

```js
console.log("ALPHABET".toLowerCase()); // 'alphabet'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("String.prototype.toLocaleLowerCase()")}}
- {{jsxref("String.prototype.toLocaleUpperCase()")}}
- {{jsxref("String.prototype.toUpperCase()")}}
