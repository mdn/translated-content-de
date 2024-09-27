---
title: Masonry-Layout
slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: 5ced6d0b9636a1b904474d1546674b305346daa0
---

{{CSSRef}} {{SeeCompatTable}}

Level 3 der [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Spezifikation enthält einen `masonry`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erläutert, was ein Masonry-Layout ist und wie es verwendet wird.

Das Masonry-Layout ist eine Layoutmethode, bei der eine Achse ein typisches striktes Grid-Layout verwendet, meistens Spalten, und die andere eine Masonry-Anordnung. Auf der Masonry-Achse wird, anstatt einem strikten Raster zu folgen und Lücken nach kürzeren Elementen zu lassen, die Elemente in der folgenden Zeile nach oben verschoben, um die Lücken vollständig zu füllen.

## Ein Masonry-Layout erstellen

Um das gebräuchlichste Masonry-Layout zu erstellen, werden Ihre Spalten die Grid-Achse und die Zeilen die Masonry-Achse sein. Definieren Sie dieses Layout mit `grid-template-columns` und `grid-template-rows`:

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

Die Kindelemente dieses Containers werden nun Element für Element entlang der Zeilen angeordnet, wie bei der automatischen Platzierung im regulären Grid-Layout. Wenn sie jedoch auf eine neue Zeile wechseln, werden die Elemente gemäß dem Masonry-Algorithmus angezeigt. Elemente werden in die Spalte geladen, die am meisten Platz bietet, was zu einem eng gepackten Layout ohne strikte Zeilen-Tracks führt.

{{EmbedGHLiveSample("css-examples/grid/masonry/block-axis.html", '100%', 800)}}

Es ist auch möglich, ein Masonry-Layout zu erstellen, bei dem Elemente in Zeilen geladen werden.

{{EmbedGHLiveSample("css-examples/grid/masonry/inline-axis.html", '100%', 1000)}}

## Steuerung der Grid-Achse

Auf der Grid-Achse funktioniert alles so, wie Sie es im Grid-Layout erwarten. Sie können Elemente dazu bringen, mehrere Tracks zu überspannen, während Sie in der automatischen Platzierung bleiben, indem Sie das `span`-Schlüsselwort verwenden. Elemente können auch mittels linienbasierter Positionierung positioniert werden.

### Masonry-Layout mit überspannenden Elementen

In diesem Beispiel überspannen zwei der Elemente zwei Tracks, und die Masonry-Elemente arbeiten darum herum.

{{EmbedGHLiveSample("css-examples/grid/masonry/spanners.html", '100%', 800)}}

Dieses Beispiel enthält ein Element, das eine Positionierung für Spalten hat. Elemente mit bestimmter Platzierung werden positioniert, bevor das Masonry-Layout stattfindet.

{{EmbedGHLiveSample("css-examples/grid/masonry/positioned.html", '100%', 1000)}}

## Fallback

In Browsern, [die Masonry nicht unterstützen](#browser-kompatibilität), wird stattdessen die reguläre Grid-Autoplatzierung verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} zur Steuerung der Grid-Automatisierung
- [Native CSS Masonry Layout in CSS Grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
