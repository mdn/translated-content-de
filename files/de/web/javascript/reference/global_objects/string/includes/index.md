---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

Die **`includes()`**-Methode von {{jsxref("String")}}-Werten führt eine Groß-/Kleinschreibung beachtende Suche durch, um festzustellen, ob ein bestimmter String innerhalb dieses Strings gefunden werden kann, und gibt entsprechend `true` oder `false` zurück.

{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}

## Syntax

```js-nolint
includes(searchString)
includes(searchString, position)
```

### Parameter

- `searchString`
  - : Ein String, nach dem innerhalb von `str` gesucht werden soll. Kann kein [Regulärer Ausdruck](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes) sein. Alle Werte, die keine regulären Ausdrücke sind, werden [in Strings umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), sodass das Weglassen oder Übergeben von `undefined` dazu führt, dass `includes()` nach dem String `"undefined"` sucht, was selten gewünscht ist.
- `position` {{optional_inline}}
  - : Die Position innerhalb des Strings, an der die Suche nach `searchString` beginnen soll. (Standardwert ist `0`.)

### Rückgabewert

**`true`**, wenn der Suchstring irgendwo innerhalb des gegebenen Strings gefunden wird, einschließlich wenn `searchString` ein leerer String ist; andernfalls **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein Regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Diese Methode ermöglicht es Ihnen zu bestimmen, ob ein String einen anderen String enthält.

### Groß-/Kleinschreibung beachten

Die `includes()`-Methode beachtet die Groß-/Kleinschreibung. Zum Beispiel gibt der folgende Ausdruck `false` zurück:

```js
"Blue Whale".includes("blue"); // returns false
```

Sie können diese Einschränkung umgehen, indem Sie sowohl den ursprünglichen String als auch den Suchstring in Kleinbuchstaben umwandeln:

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
