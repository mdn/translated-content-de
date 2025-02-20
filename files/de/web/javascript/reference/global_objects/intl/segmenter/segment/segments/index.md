---
title: Segments
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Ein **`Segments`** Objekt ist eine iterierbare Sammlung der Segmente eines Textstrings. Es wird durch einen Aufruf der Methode [`segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment) eines [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter) Objekts zurückgegeben.

{{InteractiveExample("JavaScript Demo: Segments.prototype.containing")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string1 = "Que ma joie demeure";

const segments = segmenterFr.segment(string1);

console.log(segments.containing(5));
// Expected output:
// Object {segment: 'ma', index: 4, input: 'Que ma joie demeure', isWordLike: true}
```

## Instanzmethoden

- [`Segments.prototype.containing()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/containing)
  - : Gibt ein Objekt zurück, das das Segment in der ursprünglichen Zeichenkette beschreibt, welches die Code-Einheit an einem angegebenen Index umfasst.
- [`Segments.prototype[Symbol.iterator]()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments/Symbol.iterator)
  - : Gibt einen Iterator zurück, um über die Segmente zu iterieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Intl.Segmenter`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter)
- [`Intl.Segmenter.prototype.segment()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment)
