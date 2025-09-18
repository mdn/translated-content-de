---
title: horizontal-viewport-segments
slug: Web/CSS/@media/horizontal-viewport-segments
l10n:
  sourceCommit: 7860297e91985460147c2bd6ced2bfa8cab5aba7
---

Die **`horizontal-viewport-segments`** [CSS](/de/docs/Web/CSS) [Medienfunktion](/de/docs/Web/CSS/@media#media_features) ermittelt, ob das Gerät eine angegebene Anzahl an horizontal angeordneten Ansichtsbereichssegmenten (nebeneinander) hat.

Im Zusammenhang mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) kann die Funktion `vertical-viewport-segments` verwendet werden, um responsive Designs zu erstellen, die gut auf Multi-Viewport-Geräten funktionieren — Geräten mit einem Display, das in logische, separate Ansichtsbereichssegmente unterteilt ist, wie z. B. faltbare oder klappbare Geräte.

## Syntax

Die Funktion `horizontal-viewport-segments` wird als ein {{cssxref("integer")}} Wert von `1` oder höher angegeben, der die Anzahl der horizontalen Ansichtsbereichssegmente angibt, die das Gerät hat.

- Der Wert wird `1` sein für:
  - Ein nicht faltbares Gerät (z. B. ein Standard-Smartphone oder Tablet mit einem Bildschirm)
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein zweibildschirbiges, klappbares Gerät oder ein faltbares Gerät, das gerade zusammengefaltet ist und vertikal orientiert ist, sodass die Segmente übereinander liegen.
- Der Wert wird `2` sein für ein zweibildschirbiges, klappbares Gerät oder ein faltbares Gerät, das gerade zusammengefaltet ist (in der [`folded` Gerätehaltung](/de/docs/Web/API/Device_Posture_API#folded)) und horizontal orientiert ist, sodass die Segmente nebeneinander liegen.
- Der Wert kann größer als `2` sein für faltbare Geräte mit mehr als einer Faltung.

## Beispiele

### Grundlegende Verwendung von `horizontal-viewport-segments`

In diesem Beispiel verwenden wir eine `horizontal-viewport-segments` Medienabfrage, um den Fall faltbarer Geräte zu behandeln, bei denen die Segmente nebeneinander liegen.

Wir stellen den linken Container so ein, dass er eine Breite gleich der Breite des linken Segments hat (`env(viewport-segment-width 0 0)`), und den rechten Container, dass er eine Breite gleich der Breite des rechten Segments hat (`env(viewport-segment-width 1 0)`).

Um zu berechnen, wie viel Platz die Faltung dazwischen einnimmt, subtrahieren wir den linken Randoffset des rechten Containers vom rechten Randoffset des linken Containers (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`).

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

Sehen Sie sich unser [Viewport-Segment-API-Demo](https://mdn.github.io/dom-examples/viewport-segment-api/) für ein voll funktionsfähiges Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segment-api)). Schauen Sie sich auch [Verwendung der Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media` Funktion
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Ursprungsversuch für Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) über developer.chrome.com (2024)
