---
title: Masonry-Layout
slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: 5ced6d0b9636a1b904474d1546674b305346daa0
---

{{CSSRef}} {{SeeCompatTable}}

Level 3 der [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)-Spezifikation enthält einen `masonry`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden beschreibt, was ein Masonry-Layout ist und wie man es verwendet.

Das Masonry-Layout ist eine Layout-Methode, bei der eine Achse ein typisches striktes Grid-Layout verwendet, meistens Spalten, und die andere eine Masonry-Anordnung. Auf der Masonry-Achse halten sich die Elemente nicht an ein striktes Grid, in dem nach kürzeren Elementen Lücken verbleiben, sondern die Elemente der folgenden Zeile steigen auf, um die Lücken vollständig zu füllen.

## Erstellen eines Masonry-Layouts

Um das häufigste Masonry-Layout zu erstellen, werden Ihre Spalten die Grid-Achse und die Zeilen die Masonry-Achse sein. Definieren Sie dieses Layout mit `grid-template-columns` und `grid-template-rows`:

```css
.container {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

Die Kind-Elemente dieses Containers werden nun Element für Element entlang der Zeilen angeordnet, wie sie es bei der automatischen Platzierung im regulären Grid-Layout tun würden. Wenn sie jedoch in eine neue Zeile übergehen, werden die Elemente gemäß dem Masonry-Algorithmus dargestellt. Elemente werden in die Spalte geladen, die am meisten Platz bietet, was zu einem dicht gepackten Layout ohne strikte Zeilen führt.

{{EmbedGHLiveSample("css-examples/grid/masonry/block-axis.html", '100%', 800)}}

Es ist auch möglich, ein Masonry-Layout zu erstellen, bei dem die Elemente in Zeilen geladen werden.

{{EmbedGHLiveSample("css-examples/grid/masonry/inline-axis.html", '100%', 1000)}}

## Steuerung der Grid-Achse

Auf der Grid-Achse funktionieren die Dinge genau so, wie Sie es im Grid-Layout erwarten. Sie können Elemente mehrere Tracks umspannen lassen und dabei in der automatischen Platzierung verbleiben, indem Sie das `span`-Schlüsselwort verwenden. Elemente können auch anhand der Linienbasierenden Positionierung platziert werden.

### Masonry-Layout mit span-nenden Elementen

In diesem Beispiel spannen zwei der Elemente zwei Tracks, und die Masonry-Elemente arbeiten um sie herum.

{{EmbedGHLiveSample("css-examples/grid/masonry/spanners.html", '100%', 800)}}

Dieses Beispiel enthält ein Element, das eine Positionierung für Spalten aufweist. Elemente mit einer definitiven Platzierung werden positioniert, bevor das Masonry-Layout stattfindet.

{{EmbedGHLiveSample("css-examples/grid/masonry/positioned.html", '100%', 1000)}}

## Rückfall

In Browsern [die kein Masonry unterstützen](#browser-kompatibilität), wird stattdessen die reguläre Grid-Auto-Platzierung verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} für die Steuerung der automatischen Grid-Platzierung
- [Native CSS Masonry Layout in CSS Grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
