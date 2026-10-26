---
title: String.prototype.startsWith()
short-title: startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`startsWith()`** von {{jsxref("String")}}-Werten bestimmt, ob eine Zeichenkette mit den Zeichen einer angegebenen Zeichenkette beginnt, und gibt entsprechend `true` oder `false` zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.startsWith()")}}

```js interactive-example
const str = "Saturday night plans";

console.log(str.startsWith("Sat"));
// Expected output: true

console.log(str.startsWith("Sat", 3));
// Expected output: false
```

## Syntax

```js-nolint
startsWith(searchString)
startsWith(searchString, position)
```

### Parameter

- `searchString`
  - : Die Zeichen, nach denen am Anfang dieser Zeichenkette gesucht wird. Der Wert darf [kein regulärer Ausdruck sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine regulären Ausdrücke sind, werden [in Zeichenketten umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn Sie den Parameter weglassen oder `undefined` übergeben, sucht `startsWith()` daher nach der Zeichenkette `"undefined"`, was selten beabsichtigt ist.
- `position` {{optional_inline}}
  - : Die Startposition, an der `searchString` erwartet wird (der Index des ersten Zeichens von `searchString`). Der Standardwert ist `0`.

### Rückgabewert

**`true`**, wenn die angegebenen Zeichen am Anfang der Zeichenkette stehen, auch wenn `searchString` eine leere Zeichenkette ist; andernfalls **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Mit dieser Methode können Sie feststellen, ob eine Zeichenkette mit einer anderen Zeichenkette beginnt. Die Methode unterscheidet zwischen Groß- und Kleinschreibung.

## Beispiele

### startsWith() verwenden

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

- [Polyfill für `String.prototype.startsWith` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.startsWith` von es-shims](https://www.npmjs.com/package/string.prototype.startswith)
- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
