---
title: Intl.Segmenter.prototype.segment()
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment
l10n:
  sourceCommit: 3ed94a520e98ab711f5b808d14ae1dbd9033eda0
---

{{JSRef}}

Die **`segment()`**-Methode von {{jsxref("Intl.Segmenter")}}-Instanzen segmentiert einen String entsprechend der Sprache und Granularität dieses `Intl.Segmenter`-Objekts.

{{EmbedInteractiveExample("pages/js/intl-segmenter-prototype-segment.html")}}

## Syntax

```js-nolint
segment(input)
```

### Parameter

- `input`
  - : Der zu segmentierende Text als String.

### Rückgabewert

Ein neues iterierbares [`Segments`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) Objekt, das die Segmente des Eingabe-Strings enthält, unter Verwendung der Sprache und Granularität des Segmentierers.

## Beispiele

```js
// Erstellen eines sprachspezifischen Wortsegmentierers
const segmenter = new Intl.Segmenter("fr", { granularity: "word" });

// Verwenden Sie es, um einen Iterator über die Segmente eines Strings zu erhalten
const input = "Moi ? N'est-ce pas ?";
const segments = segmenter.segment(input);

// Verwenden Sie es für die Segmentierung
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

## Kompatibilität der Browser

{{Compat}}
