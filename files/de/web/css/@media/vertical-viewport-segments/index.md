---
title: vertical-viewport-segments
slug: Web/CSS/@media/vertical-viewport-segments
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Das **`vertical-viewport-segments`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/@media#media_features) erkennt, ob das Gerät eine festgelegte Anzahl von Viewport-Segmenten aufweist, die vertikal (von oben nach unten) angeordnet sind.

In Verbindung mit der [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API) kann das `vertical-viewport-segments` Feature verwendet werden, um responsive Designs zu erstellen, die gut auf Multi-Viewport-Geräten funktionieren — Geräte mit einem Display, das in logisch separate Viewport-Segmente unterteilt ist, wie z.B. faltbare oder klappbare Geräte.

## Syntax

Das `vertical-viewport-segments` Feature wird als ein {{cssxref("integer")}} Wert von `1` oder höher angegeben, der die Anzahl der vertikalen Viewport-Segmente repräsentiert, die das Gerät besitzt.

- Der Wert wird `1` sein für:
  - Ein nicht faltbares Gerät (z.B. ein standardmäßiges Einzelscreen-Smartphone oder -Tablet).
  - Ein faltbares Gerät, das entweder entfaltet oder geschlossen ist (in der [`continuous` Device-Posture](/de/docs/Web/API/Device_Posture_API#continuous)).
  - Ein zweischirmiges klappbares Gerät oder ein derzeit gefaltetes faltbares Gerät, das horizontal orientiert ist, sodass die Segmente nebeneinander sind.
- Der Wert wird `2` sein für ein zweischirmiges, klappbares Gerät oder ein derzeit gefaltetes faltbares Gerät (in der [`folded` Device-Posture](/de/docs/Web/API/Device_Posture_API#folded)), das vertikal orientiert ist, sodass die Segmente übereinander sind.
- Der Wert kann größer als `2` sein für faltbare Geräte mit mehr als einer Faltung.

## Beispiele

### Grundlegende Nutzung von `vertical-viewport-segments`

In diesem Beispiel verwenden wir eine `vertical-viewport-segments` Media-Query, um den Fall von faltbaren Geräten zu behandeln, bei denen die Segmente von oben nach unten angeordnet sind.

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

Sehen Sie sich unser [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segments-api/) für eine vollständige funktionierende Demo an ([Quellcode](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)). Schauen Sie sich auch [Using the Viewport Segments API](/de/docs/Web/API/Viewport_segments_API/Using) für eine vollständige Demo-Erklärung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` Feature
- [Viewport Segments API](/de/docs/Web/API/Viewport_segments_API)
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) via developer.chrome.com (2024)
