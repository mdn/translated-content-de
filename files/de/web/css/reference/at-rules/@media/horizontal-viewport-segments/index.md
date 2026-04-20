---
title: "`horizontal-viewport-segments` CSS Medienmerkmal"
short-title: horizontal-viewport-segments
slug: Web/CSS/Reference/At-rules/@media/horizontal-viewport-segments
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

{{SeeCompatTable}}

Das **`horizontal-viewport-segments`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/Reference/At-rules/@media#media_features) erkennt, ob das Gerät eine angegebene Anzahl von Anzeigebereich-Segmenten hat, die horizontal (nebeneinander) angeordnet sind.

Im Zusammenhang mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) kann das Merkmal `vertical-viewport-segments` verwendet werden, um reaktionsfähige Designs zu erstellen, die gut auf Multi-Viewport-Geräten funktionieren – Geräten mit einer Anzeige, die in logisch separate Anzeigebereich-Segmente unterteilt ist, wie z. B. faltbare oder mit Scharnieren versehene Geräte.

## Syntax

Das Merkmal `horizontal-viewport-segments` wird als {{cssxref("integer")}}-Wert von `1` oder größer angegeben, der die Anzahl der horizontalen Anzeigebereich-Segmente darstellt, die das Gerät hat.

- Der Wert wird `1` sein für:
  - Ein nicht faltbares Gerät (zum Beispiel ein Standard-Smartphone oder -Tablet mit einem Bildschirm)
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous`-Gerätehaltung](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein zweischirmiges Gerät mit Scharnieren oder ein faltbares Gerät, das derzeit gefaltet und vertikal ausgerichtet ist, sodass die Segmente übereinander liegen.
- Der Wert wird `2` sein für ein zweischirmiges Gerät mit Scharnieren oder ein faltbares Gerät, das derzeit gefaltet ist (in der [`folded`-Gerätehaltung](/de/docs/Web/API/Device_Posture_API#folded)) und horizontal ausgerichtet ist, sodass die Segmente nebeneinander liegen.
- Der Wert kann größer als `2` sein für faltbare Geräte mit mehr als einem Falz.

## Beispiele

### Grundlegende Verwendung von `horizontal-viewport-segments`

In diesem Beispiel verwenden wir eine `horizontal-viewport-segments` Medienabfrage, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente nebeneinander liegen.

Wir setzen den linken Container so, dass er eine Breite hat, die der linken Segmentbreite entspricht (`env(viewport-segment-width 0 0)`), und den rechten Container so, dass er eine Breite hat, die der rechten Segmentbreite entspricht (`env(viewport-segment-width 1 0)`).

Um zu berechnen, wie viel Breite der Falz zwischen den beiden einnimmt, ziehen wir den linken Randversatz des rechten Containers vom rechten Randversatz des linken Containers ab (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

Sehen Sie sich unser [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige Funktionsdemo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Überprüfen Sie auch [Using the Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media` Merkmal
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
