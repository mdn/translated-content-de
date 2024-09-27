---
title: Segments.prototype.containing()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing
l10n:
  sourceCommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{JSRef}}

Die **`containing()`**-Methode von [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Instanzen gibt ein Objekt zurück, das das Segment in der Zeichenkette beschreibt, das die Codeeinheit am angegebenen Index enthält.

{{EmbedInteractiveExample("pages/js/segments-prototype-containing.html")}}

## Syntax

```js-nolint
containing(codeUnitIndex)
```

### Parameter

- `codeUnitIndex` {{optional_inline}}
  - : Eine Zahl, die den Index der Codeeinheit in der ursprünglichen Eingabezeichenfolge angibt. Wenn der Wert weggelassen wird, ist der Standardwert `0`.

### Rückgabewert

Ein Objekt, das das Segment der ursprünglichen Zeichenkette mit den folgenden Eigenschaften beschreibt, oder `undefined`, wenn der angegebene Indexwert außerhalb des Bereichs liegt.

- `segment`
  - : Eine Zeichenkette, die das aus der ursprünglichen Eingabezeichenfolge extrahierte Segment enthält.
- `index`
  - : Der Index der Codeeinheit in der ursprünglichen Eingabezeichenfolge, an dem das Segment beginnt.
- `input`
  - : Die vollständige Eingabezeichenfolge, die segmentiert wurde.
- `isWordLike`
  - : Ein boolescher Wert nur, wenn `granularity` `"word"` ist; andernfalls `undefined`. Wenn `granularity` `"word"` ist, dann ist `isWordLike` `true`, wenn das Segment wortähnlich ist (d.h. aus Buchstaben/Zahlen/Schriftzeichen/etc. besteht); andernfalls `false`.

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
