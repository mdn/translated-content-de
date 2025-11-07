---
title: vertical-viewport-segments
slug: Web/CSS/Reference/At-rules/@media/vertical-viewport-segments
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{SeeCompatTable}}

Das **`vertical-viewport-segments`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) erkennt, ob das Gerät eine angegebene Anzahl von Viewport-Segmenten hat, die vertikal (von oben nach unten) angeordnet sind.

Verwandt mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API), kann das `vertical-viewport-segments`-Feature verwendet werden, um responsive Designs zu erstellen, die gut auf Multi-Viewport-Geräten funktionieren – Geräte mit einem Display, das in logisch getrennte Viewport-Segmente unterteilt ist, wie zum Beispiel faltbare oder scharnierartige Geräte.

## Syntax

Das `vertical-viewport-segments`-Feature wird als {{cssxref("integer")}} Wert von `1` oder größer angegeben, der die Anzahl der vertikalen Viewport-Segmente des Geräts darstellt.

- Der Wert wird `1` sein für:
  - Ein nicht faltbares Gerät (zum Beispiel ein Standard-Smartphone oder -Tablet mit einem Bildschirm).
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein Gerät mit zwei Bildschirmen oder ein faltbares Gerät, das derzeit gefaltet ist und horizontal so ausgerichtet ist, dass die Segmente nebeneinander liegen.
- Der Wert wird `2` sein für ein Gerät mit zwei Bildschirmen oder ein faltbares Gerät, das derzeit gefaltet ist (in der [`folded` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#folded)) und vertikal so ausgerichtet ist, dass die Segmente übereinander liegen.
- Der Wert kann größer als `2` sein für faltbare Geräte mit mehr als einem Falz.

## Beispiele

### Grundlegende Verwendung von `vertical-viewport-segments`

In diesem Beispiel verwenden wir eine `vertical-viewport-segments` Media Query, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente von oben nach unten angeordnet sind.

Wir setzen den oberen Container so, dass er eine Höhe hat, die der Höhe des oberen Segments entspricht (`env(viewport-segment-height 0 0)`), und den unteren Container so, dass er eine Höhe hat, die der Höhe des unteren Segments entspricht (`env(viewport-segment-height 0 1)`).

Um zu berechnen, wie viel Höhe der Falz zwischen den beiden einnimmt, subtrahieren wir den unteren Randversatz des oberen Containers vom oberen Randversatz des unteren Containers (`calc(env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0));`).

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

Sehen Sie sich unsere [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige funktionsfähige Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch [Die Viewport-Segments-API verwenden](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` Feature
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Origin Trial für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
