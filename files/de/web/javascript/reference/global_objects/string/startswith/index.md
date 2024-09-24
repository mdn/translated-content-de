---
title: String.prototype.startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

Die **`startsWith()`**-Methode von {{jsxref("String")}}-Werten bestimmt, ob dieser String mit den Zeichen eines bestimmten Strings beginnt und gibt entsprechend `true` oder `false` zurück.

{{EmbedInteractiveExample("pages/js/string-startswith.html")}}

## Syntax

```js-nolint
startsWith(searchString)
startsWith(searchString, position)
```

### Parameter

- `searchString`
  - : Die Zeichen, die am Anfang dieses Strings gesucht werden sollen. Kann kein [Regex sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine Regexes sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `startsWith()` nach dem String `"undefined"` sucht, was selten gewünscht ist.
- `position` {{optional_inline}}
  - : Die Startposition, an der `searchString` erwartet wird (der Index des ersten Zeichens von `searchString`). Standardwert ist `0`.

### Rückgabewert

**`true`**, wenn die angegebenen Zeichen am Anfang des Strings gefunden werden, auch wenn `searchString` ein leerer String ist; andernfalls **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Mit dieser Methode können Sie feststellen, ob ein String mit einem anderen String beginnt. Diese Methode ist groß-/kleinschreibungssensitiv.

## Beispiele

### Verwendung von startsWith()

```js
const str = "To be, or not to be, that is the question.";

console.log(str.startsWith("To be")); // true
console.log(str.startsWith("not to be")); // false
console.log(str.startsWith("not to be", 10)); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `String.prototype.startsWith` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
