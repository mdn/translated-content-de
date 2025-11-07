---
title: Mauerwerkslayout
slug: Web/CSS/Guides/Grid_layout/Masonry_layout
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Stufe 3 der [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Spezifikation umfasst einen `masonry`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden beschreibt, was ein Mauerwerkslayout ist und wie es verwendet wird.

Das Mauerwerkslayout ist eine Layoutmethode, bei der eine Achse ein typisches striktes Gitternetzlayout verwendet, meist Spalten, und die andere ein Mauerwerkslayout. Auf der Mauerwerksachse halten sich die Elemente nicht an ein striktes Gitternetz, bei dem Lücken nach kürzeren Elementen verbleiben. Stattdessen werden die Elemente in der folgenden Reihe nach oben verschoben, um die Lücken vollständig zu füllen.

## Erstellen eines Mauerwerkslayouts

Um das häufigste Mauerwerkslayout zu erstellen, sind Ihre Spalten die Gitterachse und die Zeilen die Mauerwerksachse, definiert mit `grid-template-columns` und `grid-template-rows`. Die Kind-Elemente dieses Containers legen sich nun Element für Element entlang der Zeilen an, wie sie es auch bei der automatischen Platzierung von regulären Gitterlayouts tun würden.

Wenn die Elemente in neue Zeilen verschoben werden, erfolgt ihre Anzeige gemäß dem Mauerwerksalgorithmus. Die Elemente laden in die Spalte mit dem meisten Platz, was zu einem dicht gepackten Layout ohne strikte Reihenabstände führt.

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

Es ist auch möglich, ein Mauerwerkslayout zu erstellen, bei dem die Elemente in die Zeilen geladen werden.

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

Auf der Gitterachse funktionieren die Dinge wie erwartet im Gitterlayout. Sie können Elemente dazu bringen, mehrere Spuren zu überbrücken, während sie in der automatischen Platzierung bleiben, indem Sie das Stichwort `span` verwenden. Elemente können auch mithilfe der linienbasierten Positionierung platziert werden.

### Mauerwerkslayout mit übergreifenden Elementen

In diesem Beispiel spannen zwei der Elemente über zwei Spuren, und die Mauerwerkselemente arbeiten um sie herum.

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

Dieses Beispiel enthält ein Element, das eine Positionierung für Spalten aufweist. Elemente mit bestimmter Platzierung werden platziert, bevor das Mauerwerkslayout erfolgt.

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

## Fallbacks für Mauerwerkslayout

In Browsern [die kein Mauerwerk unterstützen](#browser-kompatibilität), wird stattdessen die reguläre Gitter-Autoplatzierung verwendet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} zur Steuerung der automatischen Gitterplatzierung
- [Native CSS masonry layout in CSS grid](https://www.smashingmagazine.com/native-css-masonry-layout-css-grid/) über Smashing Magazine (2020)
