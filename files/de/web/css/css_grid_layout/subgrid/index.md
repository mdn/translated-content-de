---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout) Modul enthält einen `subgrid`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erklärt, was Subgrid macht, und bietet einige Anwendungsfälle und Designmuster, die durch diese Funktion gelöst werden.

## Einführung in Subgrid

Wenn Sie [`display: grid`](/de/docs/Web/CSS/Reference/Properties/display) zu einem Grid-Container hinzufügen, werden nur die direkten Kinder zu Grid-Elementen, die dann auf das von Ihnen erstellte Grid platziert werden können. Die Kinder dieser Elemente werden im normalen Fluss angezeigt.

Sie können Grids "verschachteln", indem Sie ein Grid-Element zu einem Grid-Container machen. Diese Grids sind jedoch unabhängig vom Elterngrid und voneinander, was bedeutet, dass sie ihre Track-Größen nicht vom Elterngrid übernehmen. Dies macht es schwierig, verschachtelte Grid-Elemente mit dem Hauptgrid in Einklang zu bringen.

Wenn Sie den Wert `subgrid` bei `grid-template-columns`, `grid-template-rows` oder beidem festlegen, wird anstelle einer neuen Track-Liste das verschachtelte Grid die Tracks verwenden, die auf dem Elterngrid definiert sind.

Zum Beispiel: Wenn Sie `grid-template-columns: subgrid` verwenden und das verschachtelte Grid drei Spaltentracks des Elterngrid überspannt, wird das verschachtelte Grid über drei Spaltentracks der gleichen Größe wie das Elterngrid verfügen. Während [Abstände](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters) geerbt werden, können sie mit einem anderen {{cssxref("gap")}}-Wert überschrieben werden. [Liniennamen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) können vom Elterngrid an das Subgrid übergeben werden, und das Subgrid kann auch seine eigenen Liniennamen deklarieren.

## Subgrid für Spalten

Im untenstehenden Beispiel hat das Grid-Layout neun `1fr`-Spaltentracks und vier Reihen, die mindestens `100px` hoch sind.

Das `.item` wird zwischen den Spaltenlinien 2 bis 7 und den Reihen 2 bis 4 platziert. Dieses Grid-Element wird selbst als Grid mit `display: grid` spezifiziert und dann als Subgrid definiert, indem ihm Spaltentracks gegeben werden, die ein Subgrid sind (`grid-template-columns: subgrid`), und normalerweise definierte Reihen. Das Subgrid hat fünf Spaltentracks, da es fünf Spaltentracks überspannt.

Da das `.item` ein Subgrid ist, kann das `.subitem`, obwohl es kein direktes Kind des äußeren `.grid` ist, auf diesem äußeren Grid platziert werden, wobei seine Spalten mit den Spalten des äußeren Grids ausgerichtet sind. Die Reihen sind kein Subgrid und verhalten sich daher wie ein gewöhnlich verschachteltes Grid. Der Gridbereich auf dem Elternelement wird groß genug, um dieses verschachtelte Grid aufzunehmen.

```html live-sample___columns
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___columns
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___columns
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: repeat(3, 80px);
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

Beachten Sie, dass die Liniennummerierung im Inneren des Subgrids neu beginnt - Spaltenlinie 1, wenn sie innerhalb des Subgrids ist, ist die erste Linie des Subgrids. Das subgridierte Element erbt nicht die Liniennummern des Elterngrids. Dies bedeutet, dass Sie sicher ein Komponentendesign erstellen können, das möglicherweise an verschiedenen Positionen auf dem Hauptgrid platziert wird, in der Gewissheit, dass die Liniennummern auf der Komponente immer gleich bleiben werden.

{{EmbedLiveSample("columns", "", "450px")}}

## Subgrid für Reihen

Dieses Beispiel verwendet denselben HTML-Code wie oben, aber hier wird das `subgrid` als Wert von `grid-template-rows` angewendet, mit explizit definierten Spaltentracks. In diesem Fall verhalten sich die Spaltentracks wie ein reguläres verschachteltes Grid, aber die Reihen sind mit den beiden Tracks verbunden, die das `.item` überspannt.

```html live-sample___rows hidden
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___rows
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___rows
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 2 / 4;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("rows", "", "450px")}}

## Ein Subgrid in beiden Dimensionen

In diesem Beispiel sind sowohl Reihen als auch Spalten als Subgrid definiert und verbinden das Subgrid mit den Tracks des Elterngrids in beiden Dimensionen.

```html live-sample___both hidden
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___both
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___both
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("both", "", "450px")}}

### Kein implizites Grid in einer subgridierten Dimension

Wenn Sie Elemente automatisch platzieren müssen und nicht wissen, wie viele Elemente Sie haben werden, seien Sie vorsichtig, wenn Sie ein Subgrid erstellen, da es verhindern wird, dass zusätzliche Reihen erstellt werden, um diese Elemente aufzunehmen.

Werfen Sie einen Blick auf das nächste Beispiel - es verwendet dasselbe Eltern- und Kindgrid wie im obigen Beispiel. Es gibt zwölf Elemente im Subgrid, die versuchen, sich automatisch in zehn Grid-Zellen zu platzieren. Da das Subgrid in beiden Dimensionen ist, gibt es keinen Platz für die zusätzlichen zwei Elemente, sodass sie in den letzten Track des Grids gehen. Dies ist das Verhalten, das in der Spezifikation definiert ist.

```html live-sample___no-implicit
<div class="grid">
  <div class="item">
    <div class="subitem">1</div>
    <div class="subitem">2</div>
    <div class="subitem">3</div>
    <div class="subitem">4</div>
    <div class="subitem">5</div>
    <div class="subitem">6</div>
    <div class="subitem">7</div>
    <div class="subitem">8</div>
    <div class="subitem">9</div>
    <div class="subitem">10</div>
    <div class="subitem">11</div>
    <div class="subitem">12</div>
  </div>
</div>
```

```css hidden live-sample___no-implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.subitem {
  background-color: #d9480f;
  color: white;
  border-radius: 5px;
}
```

```css live-sample___no-implicit
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}
```

{{EmbedLiveSample("no-implicit", "", "440px")}}

Wenn Sie den Wert von `grid-template-rows` entfernen, wird die reguläre Erstellung von impliziten Tracks aktiviert, die so viele Reihen erstellen, wie erforderlich sind. Diese werden nicht mit den Tracks des Elterngrid übereinstimmen.

```html live-sample___implicit
<div class="grid">
  <div class="item">
    <div class="subitem">1</div>
    <div class="subitem">2</div>
    <div class="subitem">3</div>
    <div class="subitem">4</div>
    <div class="subitem">5</div>
    <div class="subitem">6</div>
    <div class="subitem">7</div>
    <div class="subitem">8</div>
    <div class="subitem">9</div>
    <div class="subitem">10</div>
    <div class="subitem">11</div>
    <div class="subitem">12</div>
  </div>
</div>
```

```css hidden live-sample___implicit
* {
  box-sizing: border-box;
}
body {
  font: 1.2em sans-serif;
}

.grid {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.item {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  color: #d9480f;
}

.subitem {
  background-color: #d9480f;
  color: white;
  border-radius: 5px;
}
```

```css live-sample___implicit
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-auto-rows: minmax(100px, auto);
}
```

{{EmbedLiveSample("implicit", "", "520px")}}

## Die Gap-Eigenschaften und Subgrid

Alle auf dem Elterngrid angegebenen {{cssxref("gap")}}, {{cssxref("column-gap")}} oder {{cssxref("row-gap")}} Werte werden in das Subgrid übergeben und erzeugen denselben Abstand zwischen den Tracks wie das Eltern. Dieses Standardverhalten kann überschrieben werden, indem `gap-*`-Eigenschaften auf dem Subgrid-Container angewendet werden.

In diesem Beispiel hat das Elterngrid eine Lücke von `20px` für Reihen und Spalten und das Subgrid hat `row-gap` auf `0` gesetzt.

```html live-sample___gap
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
    <div class="subitem2"></div>
  </div>
</div>
```

```css hidden live-sample___gap
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___gap
.grid {
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
  row-gap: 0;
}

.subitem {
  grid-column: 3 / 6;
  grid-row: 1 / 3;
}

.subitem2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: 2;
  grid-row: 1;
}
```

{{EmbedLiveSample("gap", "", "500px")}}

Wenn Sie dies in Ihrem Developer-Tools-Grid-Inspector prüfen, werden Sie feststellen, dass die Subgrid-Linie in der Mitte der Lücke liegt. Das Setzen der Lücke auf `0` wirkt ähnlich wie das Anwenden eines negativen Randes auf ein Element und gibt den Raum der Lücke zurück an das Element.

![Das kleinere Element wird in der Lücke angezeigt, da row-gap im Subgrid auf 0 gesetzt ist, wie im Firefox Developer Tools Grid Inspector zu sehen.](gap.png)

## Benannte Linien im Grid

Wenn Sie CSS Grid verwenden, können Sie [Linien auf Ihrem Grid benennen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) und dann Elemente basierend auf diesen Namen anstatt der Linienneummer positionieren. Die Liniennamen auf dem Elterngrid werden in das Subgrid übergeben, und Sie können Elemente mit ihnen platzieren. Im Beispiel unten werden die benannten Linien des Elterngrid `col-start` und `col-end` verwendet, um das Subitem zu platzieren.

```html live-sample___line-names
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
  </div>
</div>
```

```css hidden live-sample___line-names
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___line-names
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}
```

{{EmbedLiveSample("line-names", "", "500px")}}

Sie können auch Liniennamen auf dem Subgrid angeben. Dies wird erreicht, indem eine Liste von Liniennamen in eckigen Klammern nach dem `subgrid`-Schlüsselwort hinzugefügt wird. Zum Beispiel, wenn Sie vier Linien in Ihrem Subgrid haben und alle benennen möchten, könnten Sie die Syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` verwenden.

Linien, die auf dem Subgrid angegeben sind, werden zu den auf dem Eltern angegebenen Linien hinzugefügt, sodass Sie entweder oder beide verwenden können. In diesem Beispiel wird ein Element mit den Elternlinien und ein anderes mit den Subgridlinien platziert.

```html live-sample___adding-line-names
<div class="grid">
  <div class="item">
    <div class="subitem"></div>
    <div class="subitem2"></div>
  </div>
</div>
```

```css hidden live-sample___adding-line-names
* {
  box-sizing: border-box;
}

.grid {
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

.subitem {
  background-color: rgb(40 240 83);
}
```

```css live-sample___adding-line-names
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr [col-start] 1fr 1fr 1fr [col-end] 1fr 1fr 1fr;
  grid-template-rows: repeat(4, minmax(100px, auto));
  gap: 20px;
}

.item {
  display: grid;
  grid-column: 2 / 7;
  grid-row: 2 / 4;
  grid-template-columns: subgrid [sub-a] [sub-b] [sub-c] [sub-d] [sub-e] [sub-f];
  grid-template-rows: subgrid;
}

.subitem {
  grid-column: col-start / col-end;
  grid-row: 1 / 3;
}

.subitem2 {
  background-color: rgb(0 0 0 / 0.5);
  grid-column: sub-b / sub-d;
  grid-row: 1;
}
```

{{EmbedLiveSample("adding-line-names", "", "500px")}}

## Verwendung von Subgrids

Ein Subgrid verhält sich sehr ähnlich wie jedes verschachtelte Grid; der einzige Unterschied besteht darin, dass die Track-Größen des Subgrids auf dem Elterngrid festgelegt sind. Wie bei jedem verschachtelten Grid kann jedoch die Größe des Inhalts im Subgrid die Track-Größen ändern, sofern eine Track-Größenmethode verwendet wird, die es dem Inhalt ermöglicht, die Größe zu beeinflussen. In einem solchen Fall wachsen automatisch dimensionierte Reihen-Track, um Inhalte im Hauptgrid und Inhalte im Subgrid aufzunehmen.

Da der Subgrid-Wert ähnlich wie ein reguläres verschachteltes Grid wirkt, ist es einfach, zwischen beiden zu wechseln. Wenn Sie zum Beispiel feststellen, dass Sie ein implizites Grid für Reihen benötigen, müssen Sie den `subgrid`-Wert von `grid-template-rows` entfernen und möglicherweise einen Wert für `grid-auto-rows` angeben, um die Größenänderung der impliziten Tracks zu steuern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Video: Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) (2019)
- [Video: Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4) (2019)
- [Video: Hello subgrid!](https://www.youtube.com/watch?v=vxOj7CaWiPU) Präsentation von CSSConf.eu (2019)
