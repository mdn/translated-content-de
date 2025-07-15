---
title: Mauerwerk-Layout
slug: Web/CSS/CSS_grid_layout/Masonry_layout
l10n:
  sourceCommit: 72a2f0fa7f25ba32ab8e07447a8d4bbc2f936b85
---

{{SeeCompatTable}}

Stufe 3 der [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)-Spezifikation enthält einen `masonry`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden beschreibt, was ein Mauerwerk-Layout ist und wie es verwendet wird.

Ein Mauerwerk-Layout ist eine Layout-Methode, bei der eine Achse ein typisches striktes Grid-Layout verwendet, meist Spalten, und die andere ein Mauerwerk-Layout. Auf der Mauerwerk-Achse, anstatt an einem strikten Raster festzuhalten, bei dem Lücken nach kürzeren Elementen bleiben, steigen die Elemente in der folgenden Reihe auf, um die Lücken vollständig zu füllen.

## Erstellung eines Mauerwerk-Layouts

Um das häufigste Mauerwerk-Layout zu erstellen, werden Ihre Spalten die Gitterachse und die Reihen die Mauerwerk-Achse sein, definiert mit `grid-template-columns` und `grid-template-rows`.
Die Kindelemente dieses Containers werden nun Element für Element entlang der Reihen ausgelegt, wie es bei der automatischen Platzierung im regulären Grid-Layout der Fall wäre.

Wenn die Elemente in neue Reihen wechseln, werden sie gemäß dem Mauerwerk-Algorithmus angezeigt. Die Elemente laden in die Spalte mit dem meisten Platz, was zu einem dicht gepackten Layout ohne strikte Zeilenspuren führt.

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
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
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

Es ist auch möglich, ein Mauerwerk-Layout mit Elementen zu erstellen, die in Reihen laden.

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
  display: grid;
  gap: 10px;
  grid-template-columns: masonry;
  grid-template-rows: repeat(3, 100px);
}
```

{{EmbedLiveSample("inline-axis", "", "450px")}}

## Steuerung der Gitterachse

Auf der Gitterachse funktioniert alles genau so, wie Sie es im Grid-Layout erwarten. Sie können Elemente mehrere Spuren überspannen lassen, während Sie in der automatischen Platzierung bleiben, indem Sie das Schlüsselwort `span` verwenden. Elemente können auch mit linienbasierter Positionierung positioniert werden.

### Mauerwerk-Layout mit übergreifenden Elementen

In diesem Beispiel überspannen zwei der Elemente zwei Spuren, und die Mauerwerk-Elemente arbeiten um sie herum.

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
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-template-rows: masonry;
}

.span-2 {
  grid-column-end: span 2;
}
```

{{EmbedLiveSample("spanners", "", "270px")}}

Dieses Beispiel enthält ein Element, das eine Positionierung für Spalten hat. Elemente mit definitiver Platzierung werden platziert, bevor das Mauerwerk-Layout stattfindet.

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

## Fallbacks für Mauerwerk-Layout

In Browsern [die Mauerwerk nicht unterstützen](#browser-kompatibilität) wird stattdessen die reguläre Grid-Auto-Platzierung verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} zur Steuerung der Grid-Auto-Platzierung
- [Native CSS masonry layout in CSS grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/) über Smashing Magazine (2020)
