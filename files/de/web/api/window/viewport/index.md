---
title: "Window: `viewport`-Eigenschaft"
short-title: viewport
slug: Web/API/Window/viewport
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

{{APIRef("Viewport Segments API")}}{{SeeCompatTable}}

Die schreibgeschützte `viewport`-Eigenschaft der [`Window`](/de/docs/Web/API/Window)-Schnittstelle gibt eine [`Viewport`](/de/docs/Web/API/Viewport)-Objektinstanz zurück, die Informationen über den aktuellen Zustand des Viewports des Geräts bereitstellt.

Siehe die [`Viewport`](/de/docs/Web/API/Viewport)-API für alle verfügbaren Eigenschaften.

## Wert

Eine [`Viewport`](/de/docs/Web/API/Viewport)-Objektinstanz.

## Beispiele

### Grundlegende `viewport`-Verwendung

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
- [Viewport API](/de/docs/Web/API/Viewport_API)
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Visual Viewport API](/de/docs/Web/API/Visual_Viewport_API)
- [Konzepte des Viewports](/de/docs/Web/CSS/CSSOM_view/Viewport_concepts)
- [CSS Viewport](/de/docs/Web/CSS/CSS_viewport)-Modul
- [CSSOM View](/de/docs/Web/CSS/CSSOM_view)-Modul
