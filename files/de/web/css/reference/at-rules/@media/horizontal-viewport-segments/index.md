---
title: horizontal-viewport-segments
slug: Web/CSS/Reference/At-rules/@media/horizontal-viewport-segments
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}

Die **`horizontal-viewport-segments`** [CSS](/de/docs/Web/CSS) [Media Funktion](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten hat, die horizontal (nebeneinander) angeordnet sind.

Verwandt mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) kann die `vertical-viewport-segments` Funktion verwendet werden, um responsive Designs zu erstellen, die gut auf Multi-Viewport-Geräten funktionieren — Geräte mit einem Display, das in logisch getrennte Viewport-Segmente unterteilt ist, wie z.B. faltbare oder gelenkige Geräte.

## Syntax

Die `horizontal-viewport-segments` Funktion wird als {{cssxref("integer")}} Wert von `1` oder größer angegeben, was die Anzahl der horizontalen Viewport-Segmente darstellt, die das Gerät hat.

- Der Wert wird `1` sein für:
  - Ein nicht-faltbares Gerät (zum Beispiel ein standardmäßiges Smartphone oder Tablet mit einem Bildschirm)
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein zweibildschirmliges gelenkiges Gerät oder ein faltbares Gerät, das derzeit gefaltet ist und vertikal ausgerichtet ist, sodass die Segmente übereinander liegen.
- Der Wert wird `2` sein für ein zweibildschirmliges gelenkiges Gerät oder ein faltbares Gerät, das derzeit gefaltet ist (in der [`folded` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#folded)) und horizontal ausgerichtet ist, sodass die Segmente nebeneinander liegen.
- Der Wert kann größer als `2` sein für faltbare Geräte mit mehr als einem Faltmechanismus.

## Beispiele

### Grundlegende Nutzung von `horizontal-viewport-segments`

In diesem Snippet verwenden wir eine `horizontal-viewport-segments` Media Query, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente nebeneinander liegen.

Wir setzen den linken Container auf eine Breite, die der Breite des linken Segments entspricht (`env(viewport-segment-width 0 0)`), und den rechten Container auf eine Breite, die der Breite des rechten Segments entspricht (`env(viewport-segment-width 1 0)`).

Um zu berechnen, wie viel Breite der Falz dazwischen einnimmt, ziehen wir den linken Kantenversatz des rechten Containers von dem rechten Kantenversatz des linken Containers ab (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

Sehen Sie sich unser [Viewport Segments API Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige funktionierende Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Sehen Sie sich auch [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media` Funktion
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Origin Trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
