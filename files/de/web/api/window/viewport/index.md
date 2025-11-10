---
title: "Window: viewport-Eigenschaft"
short-title: viewport
slug: Web/API/Window/viewport
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

Die schreibgeschützte `viewport`-Eigenschaft des [`Window`](/de/docs/Web/API/Window)-Interfaces gibt eine Instanz eines [`Viewport`](/de/docs/Web/API/Viewport)-Objekts zurück, welches Informationen über den aktuellen Zustand des Viewports des Geräts bereitstellt.

Sehen Sie die [`Viewport`](/de/docs/Web/API/Viewport) API für alle verfügbaren Eigenschaften.

## Wert

Eine Instanz eines [`Viewport`](/de/docs/Web/API/Viewport)-Objekts.

## Beispiele

### Grundlegende Verwendung von `viewport`

```js
const currentViewport = window.viewport;
const segments = window.viewport.segments;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Viewport.segments`](/de/docs/Web/API/Viewport/segments) Eigenschaft
- [`Viewport`](/de/docs/Web/API/Viewport) Interface
- [`VisualViewport`](/de/docs/Web/API/VisualViewport) Interface
- [Viewport API](/de/docs/Web/API/Viewport_API)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSS-Viewport](/de/docs/Web/CSS/Guides/Viewport) Modul
- [CSSOM-View](/de/docs/Web/CSS/Guides/CSSOM_view) Modul
