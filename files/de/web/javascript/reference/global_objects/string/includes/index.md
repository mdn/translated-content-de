---
title: String.prototype.includes()
short-title: includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`includes()`**-Methode von {{jsxref("String")}}-Werten führt eine Groß-/Kleinschreibung beachtende Suche durch, um festzustellen, ob ein gegebener String innerhalb dieses Strings gefunden werden kann und gibt entsprechend `true` oder `false` zurück.

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
  - : Ein String, nach dem innerhalb von `str` gesucht wird. Kann [kein Regex sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine Regexes sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn `searchString` weggelassen wird oder `undefined` übergeben wird, sucht `includes()` nach dem String `"undefined"`, was selten gewünscht ist.
- `position` {{optional_inline}}
  - : Die Position innerhalb des Strings, an der die Suche nach `searchString` beginnen soll. (Standard ist `0`.)

### Rückgabewert

**`true`**, wenn der Such-String irgendwo innerhalb des gegebenen Strings gefunden wird, einschließlich wenn `searchString` ein leerer String ist; andernfalls **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Diese Methode erlaubt Ihnen festzustellen, ob ein String einen anderen String enthält.

### Groß-/Kleinschreibung

Die `includes()`-Methode ist groß-/kleinschreibungssensitiv. Zum Beispiel gibt der folgende Ausdruck `false` zurück:

```js
"Blue Whale".includes("blue"); // returns false
```

Sie können diese Einschränkung umgehen, indem Sie sowohl den ursprünglichen String als auch den Such-String in Kleinbuchstaben umwandeln:

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
- [es-shims Polyfill von `String.prototype.includes`](https://www.npmjs.com/package/string.prototype.includes)
- {{jsxref("Array.prototype.includes()")}}
- {{jsxref("TypedArray.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.endsWith()")}}
