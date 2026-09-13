---
title: Rasterspuren-Layout
slug: Web/CSS/Guides/Grid_layout/Grid_lanes
l10n:
  sourceCommit: 6ddfa5bed55ec6dc6f506ea9d894c2b449617e55
---

{{SeeCompatTable}}

Level 3 der Spezifikation für [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) definiert das **Rasterspuren-Layout**, das über die {{cssxref("display")}} Werte `grid-lanes` und `inline-grid-lanes` zugänglich ist. Dieser Leitfaden erklärt, wie das Rasterspuren-Layout funktioniert und wie Sie es verwenden können.

Das Rasterspuren-Layout ist eine Layoutmethode, bei der eine Achse ein striktes Rasterlayout verwendet und die andere einen Stapelalgorithmus. Jedes Element wird in die Spur mit dem meisten verfügbaren Platz eingefügt, was zu einem dicht gepackten Layout ohne strikte Spuren auf der Stapelachse führt.

Das Rasterspuren-Layout wird oft als _Mauerwerkslayout_ bezeichnet, da es dem ähnelt, wie Ziegel in einer Wand gelegt werden und Lücken so effizient wie möglich füllen.

## Erstellen eines Rasterspuren-Layouts

Um das gängigste Rasterspuren-Layout zu erstellen, bei dem die Spalten in einem Raster angeordnet sind und die Reihen mithilfe des Rasterspuren-Layout-Algorithmus gepackt werden, verwenden Sie **`display: grid-lanes`** zusammen mit {{cssxref("grid-template-columns")}}.

Die Kindelemente dieses Containers werden nach dem Rasterspuren-Layout-Algorithmus Element für Element entlang der Stapelachse angeordnet: Jede Reihe von Elementen wird in die Spalte mit dem meisten Platz geladen, was zu einem dicht gepackten Layout ohne strikte Reihenspuren führt.

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

Es ist auch möglich, ein Rasterspuren-Layout mit Elementen zu erstellen, die in Reihen geladen werden.

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

## Steuerung der Rasterachse

Auf der Rasterachse funktioniert alles so, wie Sie es vom Grid-Layout erwarten. Sie können Elemente mehrere Spuren überspannen lassen, während sie im automatischen Platzierungsmodus bleiben, indem Sie das `span`-Schlüsselwort verwenden. Elemente können auch über die linienbasierte Positionierung positioniert werden.

### Rasterspuren-Layout mit überspannenden Elementen

In diesem Beispiel überspannen zwei der Elemente zwei Spuren, und die verbleibenden Elemente werden durch den Rasterspuren-Layout-Algorithmus darum herum gepackt.

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

Dieses Beispiel enthält ein Element, das eine Positionierung für Spalten hat. Elemente mit definitiver Platzierung werden positioniert, bevor der Rasterspuren-Layout-Algorithmus ausgeführt wird.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("grid-auto-flow")}} für die Steuerung der automatischen Rasterplatzierung
