---
title: String.prototype.endsWith()
short-title: endsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/endsWith
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`endsWith()`** von {{jsxref("String")}}-Werten ermittelt, ob eine Zeichenfolge mit den angegebenen Zeichen endet, und gibt entsprechend `true` oder `false` zurück.

{{InteractiveExample("JavaScript Demo: String.prototype.endsWith()")}}

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
  - : Die Zeichen, nach denen am Ende von `str` gesucht wird. Darf [kein regulärer Ausdruck sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine regulären Ausdrücke sind, werden [in Zeichenfolgen umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion). Wenn Sie den Parameter weglassen oder `undefined` übergeben, sucht `endsWith()` daher nach der Zeichenfolge `"undefined"`, was selten beabsichtigt ist.
- `endPosition` {{optional_inline}}
  - : Die Endposition, an der `searchString` erwartet wird (der Index des letzten Zeichens von `searchString` plus 1). Der Standardwert ist `str.length`.

### Rückgabewert

**`true`**, wenn die angegebenen Zeichen am Ende der Zeichenfolge gefunden werden – auch wenn `searchString` eine leere Zeichenfolge ist. Andernfalls **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein regulärer Ausdruck ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Mit dieser Methode können Sie feststellen, ob eine Zeichenfolge mit einer anderen Zeichenfolge endet. Die Methode unterscheidet zwischen Groß- und Kleinschreibung.

## Beispiele

### endsWith() verwenden

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

- [Polyfill für `String.prototype.endsWith` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- [Polyfill für `String.prototype.endsWith` von es-shims](https://www.npmjs.com/package/string.prototype.endswith)
- {{jsxref("String.prototype.startsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
