---
title: Masonry-Layout
slug: Web/CSS/Guides/Grid_layout/Masonry_layout
l10n:
  sourceCommit: 24cdca6f7927df0c49c00d272f68d4a25c817af3
---

{{SeeCompatTable}}

Level 3 der [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) Spezifikation definiert den **Masonry-Layout** (auch bekannt als **grid-lanes** Layout), der über die {{cssxref("display")}} Werte `grid-lanes` und `inline-grid-lanes` zugänglich ist. Dieser Leitfaden beschreibt, was ein Masonry-Layout ist und wie es verwendet wird.

Ein Masonry-Layout ist eine Layoutmethode, bei der eine Achse einen typischen strikten Grid-Layout verwendet, meist Spalten, und die andere ein **Stapellayout** (Masonry). Auf der Stapelachse richten sich die Elemente nicht nach einem strengen Grid mit Lücken, die nach kürzeren Elementen verbleiben, sondern die Elemente der folgenden Reihe steigen auf, um die Lücken zu füllen.

## Erstellen eines Masonry-Layouts

Um das häufigste Masonry-Layout zu erstellen, bei dem die Spalten in einem Grid angeordnet sind und die Reihen wie Mauerwerk gestapelt sind, verwenden Sie **`display: grid-lanes`** zusammen mit {{cssxref("grid-template-columns")}}.

Die Kindelemente dieses Containers werden entlang der Stapelachse gemäß dem Masonry-Algorithmus Element für Element angeordnet: Jede Reihe wird in die Spalte mit dem meisten Platz geladen, was zu einem dicht gepackten Layout ohne strikte Reihenspuren führt.

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

Es ist auch möglich, ein Masonry-Layout mit Elementen zu erstellen, die in Reihen geladen werden.

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

Auf der Grid-Achse funktionieren die Dinge genauso, wie Sie es von einem Grid-Layout erwarten. Sie können Elemente dazu bringen, mehrere Tracks zu umfassen, während sie sich in Auto-Platzierung befinden, indem Sie das `span`-Schlüsselwort verwenden. Elemente können auch unter Verwendung von linienbasierter Positionierung positioniert werden.

### Masonry-Layout mit übergreifenden Elementen

In diesem Beispiel erstrecken sich zwei der Elemente über zwei Tracks, und die Masonry-Elemente arbeiten um sie herum.

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

Dieses Beispiel enthält ein Element, das eine Positionierung für Spalten hat. Elemente mit definierter Platzierung werden vor dem Masonry-Layout platziert.

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

In Browsern [die Masonry nicht unterstützen](#browser-kompatibilität), wird stattdessen das reguläre Grid-Auto-Placement verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} zur Steuerung der automatischen Gitterplatzierung
