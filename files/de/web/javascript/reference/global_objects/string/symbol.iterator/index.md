---
title: String.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die Methode **`[Symbol.iterator]()`** von {{jsxref("String")}}-Werten implementiert das [Iterable-Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols). Dadurch können Strings mit den meisten Syntaxformen verwendet werden, die Iterables erwarten, etwa mit der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und in {{jsxref("Statements/for...of", "for...of")}}-Schleifen. Sie gibt ein [String-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Unicode-Codepoints des String-Werts einzeln als Strings liefert.

{{InteractiveExample("JavaScript Demo: String.prototype[Symbol.iterator]()")}}

```js interactive-example
const str = "The quick red fox jumped over the lazy dog's back.";

const iterator = str[Symbol.iterator]();
let theChar = iterator.next();

while (!theChar.done && theChar.value !== " ") {
  console.log(theChar.value);
  theChar = iterator.next();
  // Expected output: "T"
  //                  "h"
  //                  "e"
}
```

## Syntax

```js-nolint
string[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Unicode-Codepoints des String-Werts einzeln als Strings liefert.

## Beschreibung

Strings werden nach Unicode-Codepoints durchlaufen. Das bedeutet, dass Graphemcluster aufgeteilt werden, Surrogatpaare jedoch erhalten bleiben.

```js
// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// splits into the basic "Backhand Index Pointing Right" emoji and
// the "Dark skin tone" emoji

// "Family: Man, Boy"
[..."👨‍👦"]; // [ '👨', '‍', '👦' ]
// splits into the "Man" and "Boy" emoji, joined by a ZWJ
```

## Beispiele

### Iteration mit einer for...of-Schleife

Sie müssen diese Methode nur selten direkt aufrufen. Durch die Methode `[Symbol.iterator]()` sind Strings [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol). Syntaxformen für die Iteration wie die `for...of`-Schleife rufen die Methode automatisch auf, um den Iterator für die Schleife abzurufen.

```js
const str = "A\uD835\uDC68B\uD835\uDC69C\uD835\uDC6A";

for (const v of str) {
  console.log(v);
}
// "A"
// "\uD835\uDC68"
// "B"
// "\uD835\uDC69"
// "C"
// "\uD835\uDC6A"
```

### Den Iterator manuell durchlaufen

Sie können die Methode `next()` des zurückgegebenen Iterator-Objekts auch manuell aufrufen, um den Iterationsprozess möglichst genau zu steuern.

```js
const str = "A\uD835\uDC68";

const strIter = str[Symbol.iterator]();

console.log(strIter.next().value); // "A"
console.log(strIter.next().value); // "\uD835\uDC68"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `String.prototype[Symbol.iterator]` in `core-js`](https://core-js.io/docs/features/ecmascript/string-regexp)
- Leitfaden zu [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings)
- {{jsxref("Symbol.iterator")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
