---
title: Masonry-Layout
slug: Web/CSS/Guides/Grid_layout/Masonry_layout
l10n:
  sourceCommit: 457178413ad5be46d6ad346845908dd919eb37fc
---

{{SeeCompatTable}}

Level 3 der [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Spezifikation definiert den **Masonry-Layout** (auch bekannt als **Grid-Lanes**-Layout), der über die {{cssxref("display")}} Werte `grid-lanes` und `inline-grid-lanes` zugänglich ist. Dieser Leitfaden beschreibt, was ein Masonry-Layout ist und wie es zu verwenden ist.

Masonry-Layout ist eine Layout-Methode, bei der eine Achse ein typisches striktes Grid-Layout verwendet, meist Spalten, und die andere eine **Stapellayout** (Masonry) verwendet. Auf der Stapelachse, anstatt sich an ein striktes Raster mit Lücken zu halten, die nach kürzeren Elementen entstehen, steigen die Elemente der folgenden Zeile auf, um die Lücken zu füllen.

## Erstellen eines Masonry-Layouts

Um das gängigste Masonry-Layout zu erstellen, bei dem die Spalten in einem Grid ausgelegt sind und die Zeilen wie Mauerwerk gestapelt werden, verwenden Sie **`display: grid-lanes`** zusammen mit {{cssxref("grid-template-columns")}}.

Die Kind-Elemente dieses Containers werden entsprechend dem Masonry-Algorithmus Element für Element entlang der Stapelachse angeordnet: Jede Reihe von Elementen wird in die Spalte mit dem meisten Platz geladen, was zu einem dicht gepackten Layout ohne strickte Zeilentracks führt.

```css hidden live-sample___block-axis live-sample___inline-axis live-sample___spanners live-sample___positioned
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

```css live-sample___block-axis
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}
```

```html live-sample___block-axis live-sample___inline-axis
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```js live-sample___block-axis live-sample___spanners live-sample___positioned
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "3.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.blockSize = itemSizes[i];
}
```

{{EmbedLiveSample("block-axis", "", "250px")}}

Es ist auch möglich, ein Masonry-Layout mit Elementen zu erstellen, die in Zeilen geladen werden.

```js live-sample___inline-axis
// prettier-ignore
const itemSizes = [
  "2em", "3em", "1.6em", "4em", "2.2em",
  "3em", "4.5em", "1em", "3.5em", "2.8em",
];
const items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.inlineSize = itemSizes[i];
}
```

```css live-sample___inline-axis
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "450px")}}

## Steuerung der Grid-Achse

Auf der Grid-Achse funktionieren die Dinge so, wie Sie es im Grid-Layout erwarten. Sie können Elemente veranlassen, mehrere Tracks zu überspannen, während sie im Auto-Placement bleiben, indem Sie das `span`-Schlüsselwort verwenden. Elemente können auch mit linearen Positionierungen platziert werden.

### Masonry-Layout mit überspannenden Elementen

In diesem Beispiel überspannen zwei der Elemente zwei Tracks, und die Masonry-Elemente arbeiten um sie herum.

```html live-sample___spanners
<div class="grid">
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item span-2"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___spanners
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.span-2 {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("spanners", "", "270px")}}

Dieses Beispiel enthält ein Element, das Positionierung für Spalten hat. Elemente mit definitiver Platzierung werden platziert, bevor das Masonry-Layout ausgeführt wird.

```html live-sample___positioned
<div class="grid">
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item positioned">positioned.</div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
```

```css live-sample___positioned
.grid {
  display: grid-lanes;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
}

.positioned {
  padding: 1em;
  grid-column: 2 / 4;
}
```

{{EmbedLiveSample("positioned", "", "290px")}}

## Fallbacks für Masonry-Layout

In Browsern, [die Masonry nicht unterstützen](#browser-kompatibilität), wird stattdessen regelmäßiges Grid-Auto-Placement verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} zur Steuerung des Grid-Auto-Platzierungs
- [Native CSS masonry layout in CSS grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/) über Smashing Magazine (2020)
