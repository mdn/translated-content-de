---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die **`endsWith()`**-Methode von {{jsxref("String")}}-Werten bestimmt, ob ein String mit den Zeichen dieses Strings endet, und gibt entsprechend `true` oder `false` zurück.

{{InteractiveExample("JavaScript Demo: String.endsWith()")}}

```js interactive-example
const str1 = "Cats are the best!";

console.log(str1.endsWith("best!"));
// Expected output: true

console.log(str1.endsWith("best", 17));
// Expected output: true

const str2 = "Is this a question?";

console.log(str2.endsWith("question"));
// Expected output: false
```

## Syntax

```js-nolint
endsWith(searchString)
endsWith(searchString, endPosition)
```

### Parameter

- `searchString`
  - : Die Zeichen, nach denen am Ende von `str` gesucht werden soll. Kann [kein Regex sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine Regexes sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen oder Übergeben von `undefined` dazu führt, dass `endsWith()` nach dem String `"undefined"` sucht, was selten gewünscht ist.
- `endPosition` {{optional_inline}}
  - : Die Endposition, an der `searchString` gefunden werden soll (der Index des letzten Zeichens von `searchString` plus 1). Standardwert ist `str.length`.

### Rückgabewert

**`true`**, wenn die angegebenen Zeichen am Ende des Strings gefunden werden, einschließlich, wenn `searchString` ein leerer String ist; ansonsten **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Diese Methode ermöglicht es, zu überprüfen, ob ein String mit einem anderen String endet. Diese Methode unterscheidet zwischen Groß- und Kleinschreibung.

## Beispiele

### Verwendung von endsWith()

```js
const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype.endsWith` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
