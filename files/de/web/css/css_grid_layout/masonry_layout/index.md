---
title: Masonry-Layout
slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: bf69d21a66ea3d757afaf5b04dcf279ddbbfc140
---

{{CSSRef}} {{SeeCompatTable}}

Level 3 der [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)-Spezifikation beinhaltet einen `masonry`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erklärt, was ein Masonry-Layout ist und wie es verwendet wird.

Ein Masonry-Layout ist eine Layoutmethode, bei der eine Achse ein typisches strenges Grid-Layout verwendet, meist Spalten, und die andere eine Masonry-Layout-Methode anwendet. Auf der Masonry-Achse wird anstelle eines strengen Rasters mit Freiräumen nach kürzeren Elementen die nächste Zeile so verschoben, dass diese Lücken vollständig gefüllt werden.

## Erstellung eines Masonry-Layouts

Um das häufigste Masonry-Layout zu erstellen, werden Ihre Spalten die Grid-Achse und die Zeilen die Masonry-Achse, definiert mit `grid-template-columns` und `grid-template-rows`.
Die Kind-Elemente dieses Containers werden nun Element für Element entlang der Zeilen angeordnet, wie sie es auch bei der automatischen Platzierung eines regulären Grid-Layouts tun würden.

Wenn die Elemente auf neue Zeilen gelangen, werden sie entsprechend dem Masonry-Algorithmus angezeigt. Elemente werden in die Spalte mit dem meisten Platz geladen, wodurch ein dicht gepacktes Layout ohne strikte Zeilenraster entsteht.

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

Es ist auch möglich, ein Masonry-Layout zu erstellen, bei dem die Elemente in Zeilen geladen werden.

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

## Steuerung der Grid-Achse

Auf der Grid-Achse funktionieren Dinge genau so, wie Sie es von einem Grid-Layout erwarten würden. Sie können Elemente mit dem Schlüsselwort `span` über mehrere Rasterschritte hinweg spannen lassen, während sie in der automatischen Platzierung bleiben. Elemente können auch mit zeilenbasierten Positionierungen platziert werden.

### Masonry-Layout mit überlappenden Elementen

In diesem Beispiel spannen zwei der Elemente über zwei Rasterschritte, und die Masonry-Elemente ordnen sich um diese herum an.

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

Dieses Beispiel enthält ein Element, das für Spalten positioniert ist. Elemente mit definierter Platzierung werden positioniert, bevor das Masonry-Layout durchgeführt wird.

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

## Fallbacks für Masonry-Layout

In Browsern, [die Masonry nicht unterstützen](#browser-kompatibilität), wird stattdessen die reguläre automatische Grid-Platzierung verwendet.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} zum Steuern der automatischen Grid-Platzierung
- [Native CSS masonry layout in CSS grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/) via Smashing Magazine (2020)
