---
title: horizontal-viewport-segments
slug: Web/CSS/@media/horizontal-viewport-segments
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Das **`horizontal-viewport-segments`** [CSS](/de/docs/Web/CSS) [Medien-Feature](/de/docs/Web/CSS/@media#media_features) erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten hat, die horizontal (nebeneinander) angeordnet sind.

In Verbindung mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) kann das `vertical-viewport-segments`-Feature verwendet werden, um responsive Designs zu erstellen, die auf Geräten mit mehreren Viewports gut funktionieren — Geräte mit einem Display, das in logisch separate Viewport-Segmente unterteilt ist, wie faltbare oder geklappte Geräte.

## Syntax

Das `horizontal-viewport-segments`-Feature wird als ein {{cssxref("integer")}} Wert von `1` oder größer spezifiziert, der die Anzahl der horizontalen Viewport-Segmente angibt, die das Gerät hat.

- Der Wert ist `1` für:
  - Ein nicht faltbares Gerät (zum Beispiel ein standardmäßiges Einzelbildschirm-Smartphone oder -Tablet)
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous`-Device-Posture](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein zweibildschirmiges geklappte Gerät oder ein aktuelles, vertikal gefaltetes faltbares Gerät, bei dem die Segmente übereinander liegen.
- Der Wert ist `2` für ein zweibildschirmiges geklappte Gerät oder ein aktuelles, horizontal gefaltetes faltbares Gerät, bei dem die Segmente nebeneinander liegen (in der [`folded`-Device-Posture](/de/docs/Web/API/Device_Posture_API#folded)).
- Der Wert kann größer als `2` sein für faltbare Geräte mit mehr als einem Falz.

## Beispiele

### Grundlegende Verwendung von `horizontal-viewport-segments`

In diesem Beispiel verwenden wir eine `horizontal-viewport-segments`-Medienabfrage, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente nebeneinander liegen.

Wir setzen den linken Container so, dass seine Breite der Breite des linken Segments entspricht (`env(viewport-segment-width 0 0)`), und den rechten Container so, dass seine Breite der Breite des rechten Segments entspricht (`env(viewport-segment-width 1 0)`).

Um zu berechnen, wie viel Breite der Falz zwischen den beiden einnimmt, subtrahieren wir den linken Randversatz des rechten Containers vom rechten Randversatz des linken Containers (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  .list-view {
    width: env(viewport-segment-width 0 0);
  }

  .fold {
    width: calc(
      env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)
    );
    background-color: black;
    height: 100%;
  }

  .detail-view {
    width: env(viewport-segment-width 1 0);
  }
}
```

Sehen Sie sich unser [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige funktionierende Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch die [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Erklärung der Demo an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media`-Feature
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
