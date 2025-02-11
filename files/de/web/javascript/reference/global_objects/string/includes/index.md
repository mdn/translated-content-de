---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`includes()`** von {{jsxref("String")}}-Werten führt eine Groß-/Kleinschreibung beachtende Suche durch, um festzustellen, ob eine bestimmte Zeichenfolge innerhalb dieser Zeichenfolge gefunden werden kann, und gibt entsprechend `true` oder `false` zurück.

{{InteractiveExample("JavaScript Demo: String.includes()", "shorter")}}

```js interactive-example
const sentence = "The quick brown fox jumps over the lazy dog.";

const word = "fox";

console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`,
);
// Expected output: "The word "fox" is in the sentence"
```

## Syntax

```js-nolint
includes(searchString)
includes(searchString, position)
```

### Parameter

- `searchString`
  - : Eine Zeichenfolge, die in `str` gesucht wird. Kann [kein Regex sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine Regexes sind, werden [zu Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `includes()` nach der Zeichenfolge `"undefined"` sucht, was selten gewünscht ist.
- `position` {{optional_inline}}
  - : Die Position innerhalb der Zeichenfolge, an der begonnen werden soll, nach `searchString` zu suchen. (Standard ist `0`.)

### Rückgabewert

**`true`**, wenn die Suchzeichenfolge irgendwo in der angegebenen Zeichenfolge gefunden wird, einschließlich der Fälle, in denen `searchString` eine leere Zeichenfolge ist; andernfalls **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Mit dieser Methode können Sie feststellen, ob eine Zeichenfolge eine andere Zeichenfolge enthält oder nicht.

### Groß-/Kleinschreibung

Die Methode `includes()` unterscheidet zwischen Groß- und Kleinschreibung. Zum Beispiel ergibt der folgende Ausdruck `false`:

```js
"Blue Whale".includes("blue"); // returns false
```

Dieses Verhalten können Sie umgehen, indem Sie sowohl die ursprüngliche Zeichenfolge als auch die Suchzeichenfolge in Kleinbuchstaben umwandeln:

```js
"Blue Whale".toLowerCase().includes("blue"); // returns true
```

## Beispiele

### Verwendung von includes()

```js
const str = "To be, or not to be, that is the question.";

console.log(str.includes("To be")); // true
console.log(str.includes("question")); // true
console.log(str.includes("nonexistent")); // false
console.log(str.includes("To be", 1)); // false
console.log(str.includes("TO BE")); // false
console.log(str.includes("")); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.includes` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
