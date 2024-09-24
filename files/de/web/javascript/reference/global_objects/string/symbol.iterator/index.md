---
title: String.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/String/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die **`[Symbol.iterator]()`**-Methode von {{jsxref("String")}}-Werten implementiert das [iterable protocol](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es, dass Strings von den meisten Syntaxen, die Iterables erwarten, konsumiert werden, wie etwa dem [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}}-Schleifen. Sie gibt ein [String-Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das die Unicode-Zeichenpunkte des String-Wertes als individuelle Strings ausgibt.

{{EmbedInteractiveExample("pages/js/string-prototype-@@iterator.html")}}

## Syntax

```js-nolint
string[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterable Iterator-Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das die Unicode-Zeichenpunkte des String-Wertes als individuelle Strings ausgibt.

## Beschreibung

Strings werden nach Unicode-Zeichenpunkten iteriert. Das bedeutet, dass Graphemcluster aufgeteilt, aber Surrogatpaare erhalten bleiben.

```js
// "Backhand Index Pointing Right: Dark Skin Tone"
[..."👉🏿"]; // ['👉', '🏿']
// wird in das einfache "Backhand Index Pointing Right"-Emoji und
// das "Dark skin tone"-Emoji aufgeteilt

// "Family: Man, Boy"
[..."👨‍👦"]; // ['👨', '‍', '👦']
// wird in das "Man"-Emoji und das "Boy"-Emoji aufgeteilt, verbunden durch einen ZWJ
```

## Beispiele

### Iteration mit einer for...of-Schleife

Beachten Sie, dass Sie diese Methode selten direkt aufrufen müssen. Die Existenz der `[Symbol.iterator]()`-Methode macht Strings [iterable](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und iterierende Syntaxen wie die `for...of`-Schleife rufen diese Methode automatisch auf, um den Iterator zu erhalten, über den iteriert werden soll.

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

Sie können dennoch manuell die `next()`-Methode des zurückgegebenen Iterator-Objekts aufrufen, um maximale Kontrolle über den Iterationsprozess zu haben.

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
- Anleitung zur [Textformatierung](/de/docs/Web/JavaScript/Guide/Text_formatting)
- {{jsxref("Symbol.iterator")}}
- [Iterierungsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
