---
title: vertical-viewport-segments
slug: Web/CSS/@media/vertical-viewport-segments
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

Das **`vertical-viewport-segments`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) erkennt, ob das Gerät eine angegebene Anzahl von Viewport-Segmenten hat, die vertikal (von oben nach unten) angeordnet sind.

In Verbindung mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) kann das `vertical-viewport-segments` Feature verwendet werden, um responsive Designs zu erstellen, die gut auf Geräten mit mehreren Viewports funktionieren — Geräte mit einem Display, das in logisch separate Viewport-Segmente unterteilt ist, wie zum Beispiel faltbare oder geklappte Geräte.

## Syntax

Das `vertical-viewport-segments` Feature wird als {{cssxref("integer")}} Wert von `1` oder größer angegeben, was die Anzahl der vertikalen Viewport-Segmente des Geräts darstellt.

- Der Wert wird `1` sein für:
  - Ein nicht-faltbares Gerät (zum Beispiel ein Standard-Smartphone oder -Tablet mit einem Bildschirm).
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein zweibildschirmiges geklappte Gerät oder ein faltbares Gerät, das derzeit gefaltet und horizontal ausgerichtet ist, sodass die Segmente nebeneinander liegen.
- Der Wert wird `2` sein für ein zweibildschirmiges geklappte Gerät oder ein faltbares Gerät, das derzeit gefaltet ist (in der [`folded` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#folded)) und vertikal ausgerichtet ist, sodass die Segmente übereinander liegen.
- Der Wert kann größer als `2` sein für faltbare Geräte mit mehr als einem Faltvorgang.

## Beispiele

### Grundlegende Nutzung von `vertical-viewport-segments`

In diesem Beispiel verwenden wir eine `vertical-viewport-segments` Media-Query, um den Fall faltbarer Geräte zu behandeln, bei denen die Segmente von oben nach unten angeordnet sind.

Wir setzen den oberen Container so, dass er eine Höhe hat, die der Höhe des oberen Segments entspricht (`env(viewport-segment-height 0 0)`), und den unteren Container so, dass er eine Höhe hat, die der Höhe des unteren Segments entspricht (`env(viewport-segment-height 0 1)`).

Um zu berechnen, wie viel Höhe der Faltbereich zwischen den beiden einnimmt, ziehen wir den Versatz der unteren Kante des oberen Containers von der oberen Kante des unteren Containers ab (`calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));`).

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

Sehen Sie sich unser [Viewport Segment API Demonstration](https://mdn.github.io/dom-examples/viewport-segment-api/) für eine funktionierende Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segment-api)). Schauen Sie auch in [Using the Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Erläuterung der Demo.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` Feature
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
