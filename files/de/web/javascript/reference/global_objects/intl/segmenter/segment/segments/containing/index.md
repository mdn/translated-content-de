---
title: Segments.prototype.containing()
short-title: containing()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`containing()`**-Methode von [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Instanzen liefert ein Objekt, das das Segment in der Zeichenkette beschreibt, das die Code-Einheit am angegebenen Index enthält.

{{InteractiveExample("JavaScript Demo: Segments.prototype.containing()")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string = "Que ma joie demeure";

const segments = segmenterFr.segment(string);

console.log(segments.containing(5));
// Expected output:
// Object {segment: 'ma', index: 4, input: 'Que ma joie demeure', isWordLike: true}
```

## Syntax

```js-nolint
containing(codeUnitIndex)
```

### Parameter

- `codeUnitIndex` {{optional_inline}}
  - : Eine Zahl, die den Index der Code-Einheit in der ursprünglichen Eingabezeichenfolge angibt. Wenn der Wert weggelassen wird, wird `0` als Standardwert verwendet.

### Rückgabewert

Ein Objekt, das das Segment der ursprünglichen Zeichenkette mit den folgenden Eigenschaften beschreibt, oder `undefined`, wenn der angegebene Indexwert außerhalb des gültigen Bereichs liegt.

- `segment`
  - : Eine Zeichenfolge, die das aus der ursprünglichen Eingabezeichenfolge extrahierte Segment enthält.
- `index`
  - : Der Code-Einheiten-Index in der ursprünglichen Eingabezeichenfolge, an dem das Segment beginnt.
- `input`
  - : Die vollständige Eingabezeichenfolge, die segmentiert wurde.
- `isWordLike`
  - : Ein `boolean`-Wert nur, wenn `granularity` `"word"` ist; ansonsten `undefined`. Wenn `granularity` `"word"` ist, dann ist `isWordLike` `true`, wenn das Segment wortähnlich ist (d.h. aus Buchstaben/Zahlen/Ideogrammen/etc. besteht); andernfalls `false`.

## Beispiele

```js
// ┃0 1 2 3 4 5┃6┃7┃8┃9  ← code unit index
// ┃A l l o n s┃-┃y┃!┃   ← code unit
const input = "Allons-y!";

const segmenter = new Intl.Segmenter("fr", { granularity: "word" });
const segments = segmenter.segment(input);

let current = segments.containing();
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(4);
// { index: 0, segment: "Allons", isWordLike: true }

current = segments.containing(6);
// { index: 6, segment: "-", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// { index: 7, segment: "y", isWordLike: true }

current = segments.containing(current.index + current.segment.length);
// { index: 8, segment: "!", isWordLike: false }

current = segments.containing(current.index + current.segment.length);
// undefined
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
- [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
