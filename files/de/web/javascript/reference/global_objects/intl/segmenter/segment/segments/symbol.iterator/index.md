---
title: Segments.prototype[Symbol.iterator]()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator
l10n:
  sourceCommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{JSRef}}

Die Methode **`[Symbol.iterator]()`** von [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Instanzen implementiert das [iterable Protokoll](/de/docs/Web/JavaScript/Reference/Iteration_protocols) und ermöglicht es `Segments`-Objekten, von den meisten Syntaxen, die Iterables erwarten, wie etwa der [Spread-Syntax](/de/docs/Web/JavaScript/Reference/Operators/Spread_syntax) und {{jsxref("Statements/for...of", "for...of")}}-Schleifen, verwendet zu werden. Sie gibt ein [Segment-Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator) zurück, das Daten über jedes Segment liefert.

{{EmbedInteractiveExample("pages/js/segments-prototype-@@iterator.html")}}

## Syntax

```js-nolint
segments[Symbol.iterator]()
```

### Parameter

Keine.

### Rückgabewert

Ein neues [iterables Iteratorobjekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Iterator), das Daten über jedes Segment liefert. Jedes zurückgegebene Objekt hat die gleichen Eigenschaften wie das Objekt, das von der Methode [`containing()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing) zurückgegeben wird.

## Beispiele

### Iteration mit der for...of-Schleife

Beachten Sie, dass es selten notwendig ist, diese Methode direkt aufzurufen. Die Existenz der Methode `[Symbol.iterator]()` macht `Segments`-Objekte [iterierbar](/de/docs/Web/JavaScript/Reference/Iteration_protocols#the_iterable_protocol), und Iterationssyntaxen wie die `for...of`-Schleife rufen diese Methode automatisch auf, um den Iterator für die Schleife zu erhalten.

```js
const segmenter = new Intl.Segmenter("zh-CN", { granularity: "word" });
const input = "你好，世界！我爱编程。";

for (const value of segmenter.segment(input)) {
  console.log(value);
}

/*
{segment: '你好', index: 0, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '，', index: 2, input: '你好，世界！我爱编程。', isWordLike: false}
{segment: '世界', index: 3, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '！', index: 5, input: '你好，世界！我爱编程。', isWordLike: false}
{segment: '我', index: 6, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '爱', index: 7, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '编', index: 8, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '程', index: 9, input: '你好，世界！我爱编程。', isWordLike: true}
{segment: '。', index: 10, input: '你好，世界！我爱编程。', isWordLike: false}
*/
```

### Manuelles Erstellen eines Iterators

Sie können immer noch manuell die `next()`-Methode des zurückgegebenen Iteratorobjekts aufrufen, um maximale Kontrolle über den Iterationsprozess zu erhalten.

```js
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);
const iterator = segments[Symbol.iterator]();

let result = iterator.next();

while (!result.done) {
  console.log(result.value);
  result = iterator.next();
}

/*
{segment: 'Moi', index: 0, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 3, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 4, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: ' ', index: 5, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: "N'est", index: 6, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: '-', index: 11, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'ce', index: 12, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 14, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: 'pas', index: 15, input: "Moi ? N'est-ce pas ?", isWordLike: true}
{segment: ' ', index: 18, input: "Moi ? N'est-ce pas ?", isWordLike: false}
{segment: '?', index: 19, input: "Moi ? N'est-ce pas ?", isWordLike: false}
*/
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
- [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
- {{jsxref("Symbol.iterator")}}
- [Iterierungsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
