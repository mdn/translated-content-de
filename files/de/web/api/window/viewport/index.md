---
title: "Window: viewport-Eigenschaft"
short-title: viewport
slug: Web/API/Window/viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

Die schreibgeschützte `viewport`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt eine Instanz des [`Viewport`](/de/docs/Web/API/Viewport)-Objekts zurück, das Informationen über den aktuellen Zustand des Geräte-Viewports liefert.

Siehe die [`Viewport`](/de/docs/Web/API/Viewport)-API für alle verfügbaren Eigenschaften.

## Wert

Eine Instanz des [`Viewport`](/de/docs/Web/API/Viewport)-Objekts.

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

- [`Viewport.segments`](/de/docs/Web/API/Viewport/segments)-Eigenschaft
- [`Viewport`](/de/docs/Web/API/Viewport)-Schnittstelle
- [`VisualViewport`](/de/docs/Web/API/VisualViewport)-Schnittstelle
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [CSSOM View API](/de/docs/Web/API/CSSOM_view_API)
- [Viewport-Konzepte](/de/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSS-Viewport](/de/docs/Web/CSS/Guides/Viewport)-Modul
- [CSSOM View](/de/docs/Web/CSS/Guides/CSSOM_view)-Modul
