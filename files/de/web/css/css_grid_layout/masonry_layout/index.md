---
title: Mauerwerk-Layout
slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{CSSRef}} {{SeeCompatTable}}

Level 3 der [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) Spezifikation enthält einen `masonry`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden beschreibt, was das Mauerwerk-Layout ist und wie man es verwendet.

Das Mauerwerk-Layout ist eine Layoutmethode, bei der eine Achse ein typisches striktes Rasterlayout verwendet, am häufigsten die Spalten, und die andere ein Mauerwerk-Layout. Auf der Mauerwerk-Achse, anstatt ein striktes Raster mit Lücken zu haben, die nach kürzeren Elementen bleiben, steigen die Elemente in der folgenden Reihe auf, um die Lücken vollständig zu füllen.

## Erstellen eines Mauerwerk-Layouts

Um das häufigste Mauerwerk-Layout zu erstellen, werden Ihre Spalten die Rasterachse und die Reihen die Mauerwerk-Achse, definiert mit `grid-template-columns` und `grid-template-rows`.
Die Kindelemente dieses Containers werden nun Element für Element entlang der Reihen angeordnet, wie sie es bei automatischer Platzierung im regulären Grid-Layout tun würden.

Wenn die Elemente in neue Reihen übergehen, werden sie gemäß dem Mauerwerk-Algorithmus angezeigt. Elemente werden in die Spalte geladen, die am meisten Platz bietet, was zu einem dicht gepackten Layout ohne strikte Zeilenführung führt.

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

Es ist auch möglich, ein Mauerwerk-Layout mit Elementen zu erstellen, die in Reihen geladen werden.

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

{{EmbedLiveSample("inline-axis", "", "350px")}}

## Steuerung der Rasterachse

Auf der Rasterachse funktioniert alles wie erwartet im Grid-Layout. Sie können Elemente über mehrere Tracks spannen lassen, während sie sich in der automatischen Platzierung befinden, indem Sie das `span`-Schlüsselwort verwenden. Elemente können auch mit Line-basierter Positionierung positioniert werden.

### Mauerwerk-Layout mit übergreifenden Elementen

In diesem Beispiel spannen zwei der Elemente über zwei Tracks, und die Mauerwerk-Elemente arbeiten um sie herum.

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

{{EmbedLiveSample("spanners", "", "220px")}}

Dieses Beispiel enthält ein Element, das Positionierung für Spalten hat. Elemente mit eindeutiger Platzierung werden vor der Ausführung des Mauerwerk-Layouts platziert.

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

{{EmbedLiveSample("positioned", "", "260px")}}

## Fallbacks für Mauerwerk-Layout

In Browsern [die Mauerwerk nicht unterstützen](#browser-kompatibilität), wird stattdessen die reguläre automatische Rasterplatzierung verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} zur Steuerung der automatischen Rasterplatzierung
- [Nativer CSS-Mauerwerk-Layout in CSS-Grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/)
