---
title: String.prototype.toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
l10n:
  sourceCommit: 9645d14f12d9b93da98daaf25a443bb6cac3f2a6
---

{{JSRef}}

Die **`toLowerCase()`**-Methode von {{jsxref("String")}}-Werten gibt diesen String in Kleinbuchstaben konvertiert zurück.

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

Ein neuer String, der den aufrufenden String in Kleinbuchstaben konvertiert darstellt.

## Beschreibung

Die Methode `toLowerCase()` gibt den Wert des Strings in Kleinbuchstaben konvertiert zurück. `toLowerCase()` beeinflusst den Wert des Strings `str` selbst nicht.

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
