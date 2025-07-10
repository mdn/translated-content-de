---
title: String.prototype.toLowerCase()
short-title: toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`toLowerCase()`** Methode von {{jsxref("String")}} Werten gibt diesen String in Kleinbuchstaben umgewandelt zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.toLowerCase()", "shorter")}}

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

Ein neuer String, der den aufrufenden String in Kleinbuchstaben umgewandelt darstellt.

## Beschreibung

Die `toLowerCase()` Methode gibt den Wert des Strings in Kleinbuchstaben umgewandelt zurück. `toLowerCase()` beeinflusst nicht den Wert des Strings `str` selbst.

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
