---
title: String.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.iterator]()`** von {{jsxref("String")}} Werten implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es Zeichenfolgen, von den meisten Syntaxen, die Iterables erwarten, konsumiert zu werden, wie z.B. der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt ein [Zeichenketteniterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Unicode-Codepunkte des Zeichenfolgenwertes als einzelne Zeichenketten liefert.

{{EmbedInteractiveExample("pages/js/string-prototype-@@iterator.html")}}

## Syntax

```js-nolint
string[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterables Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Unicode-Codepunkte des Zeichenfolgenwertes als einzelne Zeichenketten liefert.

## Beschreibung

Zeichenfolgen werden nach Unicode-Codepunkten iteriert. Dies bedeutet, dass Graphemcluster aufgeteilt werden, aber Surrogatpaare erhalten bleiben.

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

### Iteration mit der for...of Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der Methode `[Symbol.iterator]()` macht Zeichenfolgen [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und Iterationssyntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator zum Durchlaufen zu erhalten.

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

### Manuelles Handrollen des Iterators

Sie können immer noch die `next()` Methode des zurückgegebenen Iterator-Objekts manuell aufrufen, um die maximale Kontrolle über den Iterationsprozess zu haben.

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
- [Textformatierung](/de/docs/Web/JavaScript/Guide/Text_formatting) Leitfaden
- {{jsxref("Symbol.iterator")}}
- [Iteration Protocols](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
