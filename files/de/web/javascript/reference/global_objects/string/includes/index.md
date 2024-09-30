---
title: String.prototype.includes()
slug: Web/JavaScript/Reference/Global_Objects/String/includes
l10n:
  sourceCommit: b7ca46c94631967ecd9ce0fe36579be334a01275
---

{{JSRef}}

Die **`includes()`**-Methode von {{jsxref("String")}}-Werten führt eine groß-/kleinschreibungssensitive Suche durch, um festzustellen, ob eine gegebene Zeichenfolge innerhalb dieser Zeichenfolge gefunden werden kann, und gibt entsprechend `true` oder `false` zurück.

{{EmbedInteractiveExample("pages/js/string-includes.html", "shorter")}}

## Syntax

```js-nolint
includes(searchString)
includes(searchString, position)
```

### Parameter

- `searchString`
  - : Eine Zeichenfolge, nach der innerhalb von `str` gesucht werden soll. Kann [kein regulärer Ausdruck sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine regulären Ausdrücke sind, werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `includes()` nach der Zeichenfolge `"undefined"` sucht, was selten gewünscht ist.
- `position` {{optional_inline}}
  - : Die Position innerhalb der Zeichenfolge, an der die Suche nach `searchString` beginnen soll. (Standard ist `0`.)

### Rückgabewert

**`true`**, wenn die gesuchte Zeichenfolge irgendwo innerhalb der gegebenen Zeichenfolge gefunden wird, einschließlich wenn `searchString` eine leere Zeichenfolge ist; andernfalls **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Diese Methode ermöglicht es Ihnen festzustellen, ob eine Zeichenfolge eine andere Zeichenfolge enthält.

### Groß-/Kleinschreibungssensitivität

Die `includes()`-Methode unterscheidet nach Groß- und Kleinschreibung. Zum Beispiel gibt der folgende Ausdruck `false` zurück:

```js
"Blue Whale".includes("blue"); // returns false
```

Sie können dieses Problem umgehen, indem Sie sowohl die ursprüngliche Zeichenfolge als auch die gesuchte Zeichenfolge in Kleinbuchstaben umwandeln:

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
