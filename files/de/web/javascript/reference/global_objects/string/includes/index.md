---
title: String.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`includes()`** von {{jsxref("String")}}-Werten führt eine Suche unter Berücksichtigung der Groß- und Kleinschreibung durch, um festzustellen, ob eine bestimmte Zeichenfolge in dieser Zeichenfolge enthalten ist. Sie gibt entsprechend `true` oder `false` zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.includes()", "shorter")}}

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
  - : Die Zeichenfolge, nach der in `str` gesucht wird. Sie darf [kein regulärer Ausdruck sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine regulären Ausdrücke sind, werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn Sie den Parameter weglassen oder `undefined` übergeben, sucht `includes()` daher nach der Zeichenfolge `"undefined"`, was selten beabsichtigt ist.
- `position` {{optional_inline}}
  - : Die Position innerhalb der Zeichenfolge, ab der nach `searchString` gesucht wird. (Standardwert: `0`.)

### Rückgabewert

**`true`**, wenn die gesuchte Zeichenfolge an irgendeiner Stelle in der angegebenen Zeichenfolge gefunden wird, auch wenn `searchString` eine leere Zeichenfolge ist; andernfalls **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Mit dieser Methode können Sie feststellen, ob eine Zeichenfolge eine andere Zeichenfolge enthält.

### Groß- und Kleinschreibung

Die Methode `includes()` unterscheidet zwischen Groß- und Kleinschreibung. Der folgende Ausdruck gibt beispielsweise `false` zurück:

```js
"Blue Whale".includes("blue"); // returns false
```

Sie können diese Einschränkung umgehen, indem Sie sowohl die ursprüngliche Zeichenfolge als auch die gesuchte Zeichenfolge in Kleinbuchstaben umwandeln:

```js
"Blue Whale".toLowerCase().includes("blue"); // returns true
```

## Beispiele

### `includes()` verwenden

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

- [Polyfill für `String.prototype.includes` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.includes` von es-shims](https://www.npmjs.com/package/string.prototype.includes)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
