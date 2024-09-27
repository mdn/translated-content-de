---
title: String.prototype.endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

Die **`endsWith()`** Methode von {{jsxref("String")}} Werten bestimmt, ob ein String mit den Zeichen dieses Strings endet, und gibt entsprechend `true` oder `false` zurück.

{{EmbedInteractiveExample("pages/js/string-endswith.html")}}

## Syntax

```js-nolint
endsWith(searchString)
endsWith(searchString, endPosition)
```

### Parameter

- `searchString`
  - : Die Zeichen, die am Ende von `str` gesucht werden sollen. Kann [kein Regex sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine Regexes sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `endsWith()` nach dem String `"undefined"` sucht, was selten gewünscht ist.
- `endPosition` {{optional_inline}}
  - : Die Endposition, an der `searchString` erwartet wird (der Index des letzten Zeichens von `searchString` plus 1). Standard ist `str.length`.

### Rückgabewert

**`true`** wenn die angegebenen Zeichen am Ende des Strings gefunden werden, einschließlich wenn `searchString` ein leerer String ist; ansonsten **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Diese Methode ermöglicht es Ihnen festzustellen, ob ein String mit einem anderen String endet. Diese Methode ist case-sensitive.

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

- [Polyfill von `String.prototype.endsWith` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
