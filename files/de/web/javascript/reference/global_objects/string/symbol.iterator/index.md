---
title: String.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.iterator]()`** Methode von {{jsxref("String")}} Werten implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, dass Strings von den meisten Syntaxen, die Iterables erwarten, konsumiert werden, wie z. B. der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}} Schleifen. Sie gibt ein [String-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Unicode-Codepunkte des String-Werts als einzelne Strings liefert.

{{EmbedInteractiveExample("pages/js/string-prototype-@@iterator.html")}}

## Syntax

```js-nolint
string[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterierbares Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Unicode-Codepunkte des String-Werts als einzelne Strings liefert.

## Beschreibung

Strings werden nach Unicode-Codepunkten iteriert. Dies bedeutet, dass Graphemschriften aufgeteilt werden, aber Surrogatpaare erhalten bleiben.

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

### Iteration mit for...of Schleife

Beachten Sie, dass Sie diese Methode nur selten direkt aufrufen müssen. Die Existenz der `[Symbol.iterator]()` Methode macht Strings [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of` Schleife rufen diese Methode automatisch auf, um den Iterator zu erhalten, über den iteriert wird.

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

Sie können immer noch manuell die `next()` Methode des zurückgegebenen Iterator-Objekts aufrufen, um maximale Kontrolle über den Iterationsprozess zu erhalten.

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
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
