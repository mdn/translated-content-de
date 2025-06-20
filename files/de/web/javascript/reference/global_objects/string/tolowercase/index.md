---
title: String.prototype.toLowerCase()
short-title: toLowerCase()
slug: Web/JavaScript/Reference/Global_Objects/String/toLowerCase
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
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

Ein neuer String, der den aufrufenden String in Kleinbuchstaben konvertiert repräsentiert.

## Beschreibung

Die `toLowerCase()`-Methode gibt den in Kleinbuchstaben konvertierten Wert des Strings zurück. `toLowerCase()` beeinflusst nicht den Wert des Strings `str` selbst.

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
