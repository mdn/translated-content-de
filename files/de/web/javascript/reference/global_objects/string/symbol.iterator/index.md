---
title: String.prototype[Symbol.iterator]()
short-title: "[Symbol.iterator]()"
slug: Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`[Symbol.iterator]()`**-Methode von {{jsxref("String")}}-Werten implementiert das [iterierbare Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, dass Zeichenfolgen von den meisten Syntaxen, die Iterables erwarten, wie der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}}-Schleifen, verwendet werden können. Sie gibt ein [String-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Unicode-Codepunkte des Zeichenfolgenwerts als einzelne Strings liefert.

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

Ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Unicode-Codepunkte des String-Werts als einzelne Strings liefert.

## Beschreibung

Strings werden nach Unicode-Codepunkten iteriert. Das bedeutet, dass Graphemcluster getrennt werden, aber Surrogatpaare erhalten bleiben.

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

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Das Vorhandensein der `[Symbol.iterator]()`-Methode macht Strings [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of`-Schleife rufen diese Methode automatisch auf, um den Iterator zu erhalten, über den iteriert werden soll.

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

### Manuelles Erstellen des Iterators

Sie können weiterhin die `next()`-Methode des zurückgegebenen Iterator-Objekts manuell aufrufen, um maximale Kontrolle über den Iterationsprozess zu erreichen.

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

- [Polyfill von `String.prototype[Symbol.iterator]` in `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- [Zahlen und Strings](/de/docs/Web/JavaScript/Guide/Numbers_and_strings) Leitfaden
- {{jsxref("Symbol.iterator")}}
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
