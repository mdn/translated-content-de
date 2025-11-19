---
title: "Viewport: segments-Eigenschaft"
short-title: segments
slug: Web/API/Viewport/segments
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

Die **`segments`**-Eigenschaft, die nur lesbar ist, der [`Viewport`](/de/docs/Web/API/Viewport)-Schnittstelle gibt ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurück, die die Position und die Abmessungen jedes Viewport-Segments innerhalb des gesamten Displays darstellen.

## Wert

Ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten.

## Beispiele

### Grundlegende Verwendung von `Viewport.segments`

Dieses Snippet wird durch jedes Segment im Viewport schleifen und eine Zeichenkette in die Konsole ausgeben, die die Indexnummer, Breite und Höhe beschreibt.

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `Segment ${segments.indexOf(segment)} is ${segment.width}px x ${segment.height}px`,
  ),
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [CSSOM view API](/de/docs/Web/API/CSSOM_view_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
