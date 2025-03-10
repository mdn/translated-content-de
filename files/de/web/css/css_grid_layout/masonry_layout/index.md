---
title: Masonry-Layout
slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{CSSRef}} {{SeeCompatTable}}

Level 3 der [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)-Spezifikation umfasst einen `masonry`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erläutert, was ein Masonry-Layout ist und wie es verwendet wird.

Ein Masonry-Layout ist eine Layout-Methode, bei der eine Achse ein typisches strenges Rasterlayout verwendet, meist die Spalten, und die andere eine Masonry-Anordnung. Auf der Masonry-Achse bleiben die Elemente in der nächsten Zeile nicht mehr in einem strengen Raster mit Lücken nach kürzeren Elementen, sondern steigen auf, um die Lücken vollständig zu füllen.

## Erstellen eines Masonry-Layouts

Um das gebräuchlichste Masonry-Layout zu erstellen, werden Ihre Spalten die Rasterachse und die Reihen die Masonry-Achse, definiert mit `grid-template-columns` und `grid-template-rows`.
Die Kindelemente dieses Containers werden nun Element für Element entlang der Zeilen ausgelegt, so wie sie es auch bei der automatischen Platzierung des regulären Grid-Layouts tun würden.

Während die Elemente in neue Zeilen übergehen, werden sie entsprechend dem Masonry-Algorithmus angezeigt. Elemente werden in die Spalte mit dem meisten Platz geladen, was zu einem dicht gepackten Layout ohne strenge Zeilenraster führt.

```css hidden live-sample___block-axis
* {
  box-sizing: border-box;
}

.grid {
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
```

```css live-sample___block-axis
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

```html live-sample___block-axis
<div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item" style="block-size: 2.2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>
```

{{EmbedLiveSample("block-axis", "", "250px")}}

Es ist auch möglich, ein Masonry-Layout mit in Reihen geladenen Elementen zu erstellen.

```html hidden live-sample___inline-axis
<div class="grid">
  <div class="item" style="inline-size: 2em;"></div>
  <div class="item" style="inline-size: 3em;"></div>
  <div class="item" style="inline-size: 1.6em;"></div>
  <div class="item" style="inline-size: 4em;"></div>
  <div class="item" style="inline-size: 2.2em;"></div>
  <div class="item" style="inline-size: 3em;"></div>
  <div class="item" style="inline-size: 4.5em;"></div>
  <div class="item" style="inline-size: 1em;"></div>
  <div class="item" style="inline-size: 3.5em;"></div>
  <div class="item" style="inline-size: 2.8em;"></div>
</div>
```

```css hidden live-sample___inline-axis
* {
  box-sizing: border-box;
}

.grid {
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
```

```css live-sample___inline-axis
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: masonry;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "450px")}}

## Steuerung der Rasterachse

Auf der Rasterachse funktionieren die Dinge genau so, wie Sie es im Grid-Layout erwarten. Sie können Elemente dazu bringen, mehrere Tracks zu überspannen, während sie sich in der automatischen Platzierung befinden, indem Sie das Schlüsselwort `span` verwenden. Elemente können auch mithilfe der linienbasierten Positionierung positioniert werden.

### Masonry-Layout mit überspannenden Elementen

In diesem Beispiel überspannen zwei der Elemente zwei Tracks, und die Masonry-Elemente arbeiten um sie herum.

```html live-sample___spanners
<div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em; grid-column-end: span 2;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item" style="block-size: 2.2em; grid-column-end: span 2"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>
```

```css hidden live-sample___spanners
* {
  box-sizing: border-box;
}

.grid {
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
```

```css live-sample___spanners
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}
```

{{EmbedLiveSample("spanners", "", "270px")}}

Dieses Beispiel enthält ein Element, das für Spalten positioniert ist. Elemente mit einer festen Platzierung werden positioniert, bevor das Masonry-Layout erfolgt.

```html live-sample___positioned
<div class="grid">
  <div class="item" style="block-size: 2em;"></div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 1.6em;"></div>
  <div class="item" style="block-size: 4em;"></div>
  <div class="item positioned" style="block-size: 3.2em;">positioned.</div>
  <div class="item" style="block-size: 3em;"></div>
  <div class="item" style="block-size: 4.5em;"></div>
  <div class="item" style="block-size: 1em;"></div>
  <div class="item" style="block-size: 3.5em;"></div>
  <div class="item" style="block-size: 2.8em;"></div>
</div>
```

```css hidden live-sample___positioned
* {
  box-sizing: border-box;
}

body {
  font: 1.2em sans-serif;
}

.grid {
  padding: 10px;
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  color: #d9480f;
}
```

```css live-sample___positioned
.grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.positioned {
  padding: 1em;
  grid-column: 2 / 4;
}
```

{{EmbedLiveSample("positioned", "", "290px")}}

## Fallbacks für das Masonry-Layout

In Browsern, [die Masonry nicht unterstützen](#browser-kompatibilität), wird stattdessen die reguläre automatische Rasterplatzierung verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} zur Steuerung der automatischen Raster-Platzierung
- [Native CSS Masonry Layout im CSS Grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/) über Smashing Magazine (2020)
