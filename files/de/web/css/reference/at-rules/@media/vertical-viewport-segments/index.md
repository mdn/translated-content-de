---
title: "`vertical-viewport-segments` CSS-Media-Feature"
short-title: vertical-viewport-segments
slug: Web/CSS/Reference/At-rules/@media/vertical-viewport-segments
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{SeeCompatTable}}

Die **`vertical-viewport-segments`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten hat, die vertikal (von oben nach unten) angeordnet sind.

Im Zusammenhang mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) kann die `vertical-viewport-segments`-Funktion genutzt werden, um responsive Designs zu erstellen, die auf Geräten mit mehreren Viewports gut funktionieren — Geräten, deren Display in logisch getrennte Viewport-Segmente unterteilt ist, wie faltbare oder scharnierartige Geräte.

## Syntax

Die `vertical-viewport-segments`-Funktion wird als ein {{cssxref("integer")}}-Wert von `1` oder größer angegeben, der die Anzahl der vertikalen Viewport-Segmente des Geräts darstellt.

- Der Wert wird `1` sein für:
  - Ein nicht faltbares Gerät (zum Beispiel ein Standard-Smartphone oder -Tablet mit einem Bildschirm).
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous`-Gerätestellung](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein zweibildschirmiges Scharniergerät oder ein faltbares Gerät, das derzeit gefaltet ist und horizontal orientiert ist, sodass die Segmente nebeneinander liegen.
- Der Wert wird `2` sein für ein zweibildschirmiges Scharniergerät oder ein faltbares Gerät, das derzeit gefaltet ist (in der [`folded`-Gerätestellung](/de/docs/Web/API/Device_Posture_API#folded)) und vertikal orientiert ist, sodass die Segmente übereinander liegen.
- Der Wert kann größer als `2` sein für faltbare Geräte mit mehr als einem Faltpunkt.

## Beispiele

### Grundlegende Nutzung von `vertical-viewport-segments`

In diesem Beispiel verwenden wir eine `vertical-viewport-segments`-Media-Query, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente von oben nach unten angeordnet sind.

Wir setzen den oberen Container so, dass er eine Höhe entsprechend der Höhe des oberen Segments hat (`env(viewport-segment-height 0 0)`), und den unteren Container so, dass er eine Höhe entsprechend der Höhe des unteren Segments hat (`env(viewport-segment-height 0 1)`).

Um zu berechnen, wie viel Höhe der Faltbereich zwischen den beiden einnimmt, subtrahieren wir den unteren Randversatz des oberen Containers vom oberen Randversatz des unteren Containers (`calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));`).

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  .list-view {
    height: env(viewport-segment-height 0 0);
  }

  .fold {
    width: 100%;
    height: calc(
      env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0)
    );
    background-color: black;
  }

  .detail-view {
    height: env(viewport-segment-height 0 1);
  }
}
```

Sehen Sie sich unser [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige funktionierende Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch [Using the Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media`-Feature
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Herkunftstest für faltbare APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
