---
title: Grid-Lanes-Layout
slug: Web/CSS/Guides/Grid_layout/Grid_lanes
l10n:
  sourceCommit: b02c4fe0f8c485fa3fd0af10005310aaecef64ca
---

{{SeeCompatTable}}

Level 3 der [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Spezifikation definiert das **Grid-Lanes-Layout**, das über die {{cssxref("display")}}-Werte `grid-lanes` und `inline-grid-lanes` zugänglich ist. Dieser Leitfaden erklärt, wie das Grid-Lanes-Layout funktioniert und wie es verwendet wird.

Das Grid-Lanes-Layout ist eine Layoutmethode, bei der eine Achse ein typisches strenges Rasterlayout verwendet, meistens Spalten, und die andere eine Stapelalgorithmus nutzt. Auf der Stapelachse steigen die Elemente der folgenden Zeile hoch, um die Lücken zu füllen, anstatt sich an ein strenges Raster zu halten, bei dem nach kürzeren Elementen Lücken verbleiben.

## Erstellen eines Grid-Lanes-Layouts

Um das häufigste Grid-Lanes-Layout zu erstellen, bei dem die Spalten in einem Raster angeordnet sind und die Zeilen mit dem Grid-Lanes-Layout-Algorithmus gefüllt werden, verwenden Sie **`display: grid-lanes`** zusammen mit {{cssxref("grid-template-columns")}}.

Die Kindelemente dieses Containers werden Element für Element entlang der Stapelachse gemäß dem Grid-Lanes-Layout-Algorithmus angeordnet: Jede Zeile von Elementen lädt sich in die Spalte mit dem meisten Platz, was zu einem dicht gepackten Layout ohne strenge Zeilenspuren führt.

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

Es ist auch möglich, ein Grid-Lanes-Layout mit in Zeilen geladenen Elementen zu erstellen.

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

## Kontrolle über die Rasterachse

Auf der Rasterachse funktioniert alles wie erwartet im Grid-Layout. Sie können Objekte dazu bringen, mehrere Spuren zu überspannen, während sie im Auto-Platzierung-Modus bleiben, indem Sie das `span`-Schlüsselwort verwenden. Elemente können auch durch linienbasierte Positionierung platziert werden.

### Grid-Lanes-Layout mit überspannenden Elementen

In diesem Beispiel überspannen zwei der Elemente zwei Spuren, und die verbleibenden Elemente werden vom Grid-Lanes-Layout-Algorithmus um sie herum gepackt.

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

Dieses Beispiel enthält ein Element, das eine Positionierung für Spalten hat. Elemente mit fester Platzierung werden platziert, bevor der Grid-Lanes-Layout-Algorithmus ausgeführt wird.

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

- {{cssxref("grid-auto-flow")}} zur Steuerung der automatischen Rasterplatzierung
