---
title: String.prototype.startsWith()
short-title: startsWith()
slug: Web/JavaScript/Reference/Global_Objects/String/startsWith
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`startsWith()`**-Methode von {{jsxref("String")}}-Werten bestimmt, ob dieser String mit den Zeichen eines angegebenen Strings beginnt und gibt entsprechend `true` oder `false` zurück.

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
  - : Die Zeichen, die am Anfang dieses Strings gesucht werden sollen. Kann [kein Regex sein](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes). Alle Werte, die keine Regex sind, werden [zu Strings konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/String#string_coercion), daher führt das Weglassen oder Übergeben von `undefined` dazu, dass `startsWith()` nach dem String `"undefined"` sucht, was selten gewünscht ist.
- `position` {{optional_inline}}
  - : Die Startposition, an der `searchString` erwartet wird (der Index des ersten Zeichens von `searchString`). Standardmäßig `0`.

### Rückgabewert

**`true`**, wenn die angegebenen Zeichen am Anfang des Strings gefunden werden, auch wenn `searchString` ein leerer String ist; andernfalls **`false`**.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn `searchString` [ein Regex ist](/de/docs/Web/JavaScript/Reference/Global_Objects/RegExp#special_handling_for_regexes).

## Beschreibung

Diese Methode ermöglicht es Ihnen zu bestimmen, ob ein String mit einem anderen String beginnt. Diese Methode ist case-sensitive.

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
- [es-shims Polyfill von `String.prototype.startsWith`](https://www.npmjs.com/package/string.prototype.startswith)
- {{jsxref("String.prototype.endsWith()")}}
- {{jsxref("String.prototype.includes()")}}
- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
