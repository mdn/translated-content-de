---
title: Intl.Segmenter.prototype.segment()
short-title: segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`segment()`**-Methode von {{jsxref("Intl.Segmenter")}}-Instanzen segmentiert einen String entsprechend der Lokalisierung und Granularität dieses `Intl.Segmenter`-Objekts.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter.prototype.segment()")}}

```js interactive-example
const string1 = "Que ma joie demeure";

const segmenterFrGrapheme = new Intl.Segmenter("fr", {
  granularity: "grapheme",
});
const graphemeSegments = segmenterFrGrapheme.segment(string1);

console.log(Array.from(graphemeSegments)[0]);
// Expected output:
// Object {segment: 'Q', index: 0, input: 'Que ma joie demeure'}
```

## Syntax

```js-nolint
segment(input)
```

### Parameter

- `input`
  - : Der als String zu segmentierende Text.

### Rückgabewert

Ein neues iterierbares [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments)-Objekt, das die Segmente des Eingabestrings enthält, unter Verwendung der Lokalisierung und Granularität des Segmenters.

## Beispiele

```js
// Create a locale-specific word segmenter
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });

// Use it to get an iterator over the segments of a string
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);

// Use that for segmentation
for (const { segment, index, isWordLike } of segments) {
  console.log(
    "segment at code units [%d, %d]: «%s»%s",
    index,
    index + segment.length,
    segment,
    isWordLike ? " (word-like)" : "",
  );
}
// segment at code units [0, 3]: «Moi» (word-like)
// segment at code units [3, 4]: « »
// segment at code units [4, 5]: «?»
// segment at code units [5, 6]: « »
// segment at code units [6, 11]: «N'est» (word-like)
// segment at code units [11, 12]: «-»
// segment at code units [12, 14]: «ce» (word-like)
// segment at code units [14, 15]: « »
// segment at code units [15, 18]: «pas» (word-like)
// segment at code units [18, 19]: « »
// segment at code units [19, 20]: «?»
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
