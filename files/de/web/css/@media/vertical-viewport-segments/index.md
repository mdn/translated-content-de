---
title: vertical-viewport-segments
slug: Web/CSS/@media/vertical-viewport-segments
l10n:
  sourceCommit: ee348fc4da928b445f95660fae094269604b1b9c
---

{{SeeCompatTable}}

Die **`vertical-viewport-segments`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) erkennt, ob das Gerät eine bestimmte Anzahl von Viewport-Segmenten hat, die vertikal (von oben nach unten) angeordnet sind.

Im Zusammenhang mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) kann die `vertical-viewport-segments` Funktion verwendet werden, um responsive Designs zu erstellen, die gut auf Multi-Viewport-Geräten funktionieren – Geräte mit einem Display, das in logisch separate Viewport-Segmente unterteilt ist, wie z.B. faltbare oder klappbare Geräte.

## Syntax

Die `vertical-viewport-segments` Funktion wird als ein {{cssxref("integer")}} Wert von `1` oder größer angegeben, was die Anzahl der vertikalen Viewport-Segmente darstellt, die das Gerät hat.

- Der Wert ist `1` für:
  - Ein nicht faltbares Gerät (zum Beispiel ein standardmäßiges Smartphone oder Tablet mit einem Bildschirm).
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein zweigeteiltes Klappgerät oder ein faltbares Gerät, das derzeit gefaltet und horizontal ausgerichtet ist, sodass die Segmente nebeneinander sind.
- Der Wert ist `2` für ein zweigeteiltes Klappgerät oder ein faltbares Gerät, das derzeit gefaltet ist (in der [`folded` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#folded)) und vertikal ausgerichtet ist, sodass die Segmente übereinander liegen.
- Der Wert kann größer als `2` für faltbare Geräte mit mehr als einem Falz sein.

## Beispiele

### Grundlegende Verwendung von `vertical-viewport-segments`

In diesem Beispiel verwenden wir eine `vertical-viewport-segments` Medienabfrage, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente von oben nach unten angeordnet sind.

Wir setzen den oberen Container so, dass er eine Höhe hat, die der Höhe des oberen Segments entspricht (`env(viewport-segment-height 0 0)`), und den unteren Container so, dass er eine Höhe hat, die der Höhe des unteren Segments entspricht (`env(viewport-segment-height 0 1)`).

Um zu berechnen, wie viel Höhe der Falz zwischen den beiden einnimmt, ziehen wir den unteren Randversatz des oberen Containers vom oberen Randversatz des unteren Containers ab (`calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));`).

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

Sehen Sie sich unsere [Demo zur Viewport-Segment-API](https://mdn.github.io/dom-examples/viewport-segments-api/) für ein vollständiges funktionierendes Beispiel an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Erklärung der Demo an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` Funktion
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Origin trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
