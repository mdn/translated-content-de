---
title: Mauerwerk-Layout
slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: 5ced6d0b9636a1b904474d1546674b305346daa0
---

{{CSSRef}} {{SeeCompatTable}}

Level 3 der [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Spezifikation enthält einen `masonry`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden beschreibt, was ein Mauerwerk-Layout ist und wie man es verwendet.

Das Mauerwerk-Layout ist eine Layout-Methode, bei der eine Achse ein typisches, strenges Rasterlayout verwendet, meist die Spalten, und die andere Achse ein Mauerwerk-Layout. Auf der Mauerwerk-Achse füllen die Elemente in der folgenden Zeile die Lücken vollständig aus, anstatt an einem strengen Raster festzuhalten, bei dem Lücken nach kürzeren Elementen verbleiben.

## Erstellen eines Mauerwerk-Layouts

Um das häufigste Mauerwerk-Layout zu erstellen, sind Ihre Spalten die Rasterachse und die Zeilen die Mauerwerk-Achse. Definieren Sie dieses Layout mit `grid-template-columns` und `grid-template-rows`:

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

Die Kindelemente dieses Containers werden nun Element für Element entlang der Zeilen angeordnet, wie es auch bei der automatischen Platzierung im regulären Rasterlayout der Fall wäre. Wenn sie jedoch in eine neue Zeile übergehen, werden die Elemente gemäß dem Mauerwerk-Algorithmus angezeigt. Elemente werden in die Spalte geladen, die den meisten Platz bietet, wodurch ein dicht gepacktes Layout ohne strenge Zeilenspuren entsteht.

{{EmbedGHLiveSample("css-examples/grid/masonry/block-axis.html", '100%', 800)}}

Es ist auch möglich, ein Mauerwerk-Layout zu erstellen, bei dem Elemente in Zeilen geladen werden.

{{EmbedGHLiveSample("css-examples/grid/masonry/inline-axis.html", '100%', 1000)}}

## Steuerung der Rasterachse

Auf der Rasterachse funktionieren die Dinge genau so, wie Sie es von einem Rasterlayout erwarten. Sie können Elemente mehrere Spuren überspannen lassen, während sie sich in der automatischen Platzierung befinden, indem Sie das Schlüsselwort `span` verwenden. Elemente können auch mittels linienbasierter Positionierung platziert werden.

### Mauerwerk-Layout mit spannenden Elementen

In diesem Beispiel überspannen zwei der Elemente zwei Spuren, und die Mauerwerk-Elemente ordnen sich um sie herum.

{{EmbedGHLiveSample("css-examples/grid/masonry/spanners.html", '100%', 800)}}

Dieses Beispiel enthält ein Element, das eine Positionierung für Spalten hat. Elemente mit definitiver Platzierung werden positioniert, bevor das Mauerwerk-Layout geschieht.

{{EmbedGHLiveSample("css-examples/grid/masonry/positioned.html", '100%', 1000)}}

## Fallback

In Browsern, [die Mauerwerk nicht unterstützen](#browser-kompatibilität), wird stattdessen die automatische Rasterplatzierung verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} zur Steuerung der automatischen Rasterplatzierung
- [Native CSS Mauerwerk-Layout in CSS Grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
