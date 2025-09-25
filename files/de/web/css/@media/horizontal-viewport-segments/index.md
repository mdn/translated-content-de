---
title: horizontal-viewport-segments
slug: Web/CSS/@media/horizontal-viewport-segments
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{SeeCompatTable}}

Das **`horizontal-viewport-segments`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/@media#media_features) erkennt, ob das Gerät eine bestimmte Anzahl an Viewport-Segmenten aufweist, die horizontal (nebeneinander) angeordnet sind.

Das mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) verwandte Feature `vertical-viewport-segments` kann verwendet werden, um responsive Designs zu erstellen, die gut auf Mehr-Viewport-Geräten funktionieren — Geräte mit einem Display, das in logisch getrennte Viewport-Segmente unterteilt ist, wie z.B. faltbare oder geklappte Geräte.

## Syntax

Das Merkmal `horizontal-viewport-segments` wird als ein {{cssxref("integer")}} Wert von `1` oder größer spezifiziert und repräsentiert die Anzahl der horizontalen Viewport-Segmente, die das Gerät hat.

- Der Wert wird `1` sein für:
  - Ein nicht faltbares Gerät (zum Beispiel ein Standard-Smartphone oder -Tablet mit einem Bildschirm)
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous`-Geräthaltung](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein zweischirmiges geklapptes Gerät oder ein derzeit gefaltetes faltbares Gerät, das vertikal orientiert ist, sodass die Segmente übereinander liegen.
- Der Wert wird `2` sein für ein zweischirmiges geklapptes Gerät oder ein derzeit gefaltetes faltbares Gerät (in der [`folded`-Geräthaltung](/de/docs/Web/API/Device_Posture_API#folded)), das horizontal orientiert ist, sodass die Segmente nebeneinander liegen.
- Der Wert kann größer als `2` sein für faltbare Geräte mit mehr als einem Knick.

## Beispiele

### Grundlegende Verwendung von `horizontal-viewport-segments`

In diesem Snippet verwenden wir eine `horizontal-viewport-segments` Medienabfrage, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente nebeneinander sind.

Wir setzen den linken Container auf eine Breite, die der Breite des linken Segments entspricht (`env(viewport-segment-width 0 0)`), und den rechten Container auf eine Breite, die der Breite des rechten Segments entspricht (`env(viewport-segment-width 1 0)`).

Um zu berechnen, wie viel Breite der Knick zwischen den beiden einnimmt, subtrahieren wir den linken Randversatz des rechten Containers vom rechten Randversatz des linken Containers (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

Sehen Sie sich unsere [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige funktionierende Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch [Using the Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media` Merkmal
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Origin-Trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
