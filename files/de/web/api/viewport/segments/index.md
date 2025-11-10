---
title: "Viewport: segments-Eigenschaft"
short-title: segments
slug: Web/API/Viewport/segments
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

Die **`segments`** schreibgeschützte Eigenschaft des [`Viewport`](/de/docs/Web/API/Viewport)-Interfaces gibt ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten zurück, die die Position und Abmessungen jedes Viewport-Segments innerhalb der gesamten Anzeige darstellen.

## Wert

Ein Array von [`DOMRect`](/de/docs/Web/API/DOMRect)-Objekten.

## Beispiele

### Grundlegende Verwendung von `Viewport.segments`

Dieses Snippet wird durch jedes Segment im Viewport schleifen und eine Zeichenkette in die Konsole protokollieren, die die Indexnummer, Breite und Höhe detailliert beschreibt.

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
- [Visual viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
