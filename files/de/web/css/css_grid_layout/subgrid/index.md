---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
l10n:
  sourceCommit: bf69d21a66ea3d757afaf5b04dcf279ddbbfc140
---

{{CSSRef}}

Das [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul enthält einen `subgrid`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erklärt, was `subgrid` bewirkt, und gibt Anwendungsfälle und Designmuster an, die durch dieses Feature gelöst werden.

## Einführung in Subgrid

Wenn Sie [`display: grid`](/de/docs/Web/CSS/display) auf einen Grid-Container anwenden, werden nur die direkten Kinder zu Grid-Elementen, die dann auf dem erstellten Raster platziert werden können. Die Kinder dieser Elemente werden im normalen Fluss angezeigt.

Sie können "verschachtelte" Grids erstellen, indem Sie ein Grid-Element zum Grid-Container machen. Diese Grids sind jedoch unabhängig vom übergeordneten Grid und voneinander, was bedeutet, dass sie ihre Spurgrößen nicht vom übergeordneten Grid übernehmen. Dies erschwert es, verschachtelte Grid-Elemente mit dem Hauptgrid auszurichten.

Wenn Sie den Wert `subgrid` auf `grid-template-columns`, `grid-template-rows` oder beides anwenden, verwendet das verschachtelte Grid anstelle einer neuen Spurauflistung die Spuren, die auf dem übergeordneten Grid definiert sind.

Zum Beispiel, wenn Sie `grid-template-columns: subgrid` verwenden und das verschachtelte Grid drei Spuren des übergeordneten Grids überspannt, hat das verschachtelte Grid drei Spuren, die dieselbe Größe wie das übergeordnete Grid haben. Während [Abstände](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters) geerbt werden, können sie mit einem anderen {{cssxref("gap")}}-Wert überschrieben werden. [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) können vom übergeordneten Grid in das Subgrid weitergegeben werden, und das Subgrid kann auch seine eigenen Liniennamen deklarieren.

## Subgrid für Spalten

Im folgenden Beispiel hat das CSS-Grid-Layout neun `1fr`-Spuren für Spalten und vier Zeilen, die mindestens `100px` hoch sind.

Das `.item` wird zwischen den Spaltenlinien 2 bis 7 und den Zeilen 2 bis 4 platziert. Dieses Grid-Element wird ebenfalls als Grid mit `display: grid` definiert und dann als Subgrid durch Angabe von Spuren für Spalten, die ein Subgrid sind (`grid-template-columns: subgrid`), festgelegt, während die Zeilen normal definiert werden. Das Subgrid hat fünf Spuren, da es fünf Spuren des übergeordneten Grids überspannt.

Da das `.item` ein Subgrid ist, kann die `.subitem`, obwohl sie kein direktes Kind des äußeren `.grid` ist, auf diesem äußeren Grid platziert werden und ihre Spalten sind mit den Spalten des äußeren Grids ausgerichtet. Die Zeilen sind kein Subgrid und verhalten sich daher wie ein normales verschachteltes Grid. Der Grid-Bereich des Elternteils erweitert sich, um für dieses verschachtelte Grid ausreichend Platz zu bieten.

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

Beachten Sie, dass die Nummerierung der Linien im Subgrid neu beginnt — die Spaltenlinie 1 im Subgrid ist die erste Linie des Subgrids. Das Subgrid-Element erbt nicht die Liniennummern des übergeordneten Grids. Dies bedeutet, dass Sie ein Layout für eine Komponente sicher gestalten können, unabhängig davon, wo sie sich im Hauptgrid befindet, da die Zeilennummern der Komponente immer dieselben sind.

{{EmbedLiveSample("columns", "", "450px")}}

## Subgrid für Zeilen

Dieses Beispiel verwendet dasselbe HTML wie oben, jedoch wird hier der Wert `subgrid` für `grid-template-rows` verwendet, während die Spuren für Spalten explizit definiert werden. In diesem Fall verhalten sich die Spuren für Spalten wie bei einem regulären verschachtelten Grid, aber die Zeilen sind mit den beiden Spuren verbunden, die `.item` überspannt.

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

In diesem Beispiel werden sowohl Zeilen als auch Spalten als Subgrid definiert, wodurch das Subgrid mit den Spuren des übergeordneten Grids in beiden Dimensionen verbunden wird.

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

### Kein implizites Grid in einer Subgrid-Dimension

Wenn Sie Elemente automatisch platzieren möchten, ohne zu wissen, wie viele Elemente vorhanden sein werden, sollten Sie bei der Erstellung eines Subgrids vorsichtig sein, da es die Erstellung zusätzlicher Zeilen zur Aufnahme dieser Elemente verhindert.

Betrachten Sie das folgende Beispiel – es verwendet dasselbe übergeordnete und untergeordnete Grid wie im obigen Beispiel. Es gibt zwölf Elemente im Subgrid, die versuchen, sich in zehn Rasterzellen automatisch zu platzieren. Da das Subgrid in beiden Dimensionen verwendet wird, gibt es keinen Platz für die zusätzlichen zwei Elemente, sodass sie in die letzte Spur des Grids gehen. Dies ist das Verhalten, das in der Spezifikation definiert ist.

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
  color: #fff;
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

Durch das Entfernen des Wertes `grid-template-rows` wird die reguläre Erstellung impliziter Spuren ermöglicht, wodurch so viele Zeilen wie erforderlich erstellt werden. Diese stimmen jedoch nicht mit den Spuren des übergeordneten Grids überein.

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
  color: #fff;
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

Jeder Wert für {{cssxref("gap")}}, {{cssxref("column-gap")}} oder {{cssxref("row-gap")}}, der für das übergeordnete Grid angegeben wird, wird in das Subgrid übernommen, sodass dieselben Abstände zwischen den Spuren wie beim übergeordneten Grid bestehen. Dieses Standardverhalten kann durch das Anwenden von `gap-*`-Eigenschaften auf den Subgrid-Container überschrieben werden.

In diesem Beispiel weist das übergeordnete Grid einen Abstand von `20px` für Zeilen und Spalten auf, während das Subgrid `row-gap` auf `0` gesetzt hat.

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

Wenn Sie dies in den Entwickler-Tools mit dem Grid-Inspektor untersuchen, wird Ihnen auffallen, dass die Subgrid-Linie in der Mitte der Lücke liegt. Das Festlegen des Abstands auf `0` wirkt ähnlich wie das Anwenden eines negativen Randes auf ein Element und gibt den Abstand der Lücke zurück zum Element.

![Das kleinere Element befindet sich in der Lücke, da row-gap im Subgrid auf 0 gesetzt ist, wie in den Firefox Developer Tools Grid-Inspektor gezeigt.](gap.png)

## Benannte Grid-Linien

Wenn Sie CSS Grid verwenden, können Sie [Linien in Ihrem Grid benennen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) und dann Elemente basierend auf diesen Namen statt auf der Liniennummer positionieren. Die Liniennamen des übergeordneten Grids werden in das Subgrid weitergegeben, und Sie können Elemente mit diesen Namen platzieren. Im folgenden Beispiel werden die benannten Linien `col-start` und `col-end` des übergeordneten Grids verwendet, um die Subitem zu platzieren.

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

Sie können auch Liniennamen auf dem Subgrid spezifizieren. Dies wird erreicht, indem nach dem Schlüsselwort `subgrid` eine Liste von Liniennamen in eckigen Klammern hinzugefügt wird. Zum Beispiel, wenn Ihr Subgrid vier Linien hat, könnten Sie alle benennen, indem Sie die Syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` verwenden.

Die im Subgrid spezifizierten Linien werden zu allen Linien des übergeordneten Grids hinzugefügt, sodass Sie entweder beide oder nur diese verwenden können. In diesem Beispiel wird ein Element mit den Linien des übergeordneten Grids und eines mit den Subgrid-Linien platziert.

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

Ein Subgrid verhält sich sehr ähnlich wie jedes verschachtelte Grid; der einzige Unterschied besteht darin, dass die Spurgrößen des Subgrids im übergeordneten Grid definiert sind. Wie bei jedem verschachtelten Grid kann jedoch die Größe des Inhalts im Subgrid die Spurgrößen ändern, vorausgesetzt, es wird eine Spurgrößenmethode verwendet, die es dem Inhalt erlaubt, die Größe zu beeinflussen. In einem solchen Fall wachsen automatisierte Zeilen-Spuren, um den Inhalt im Hauptgrid und im Subgrid aufzunehmen.

Da sich der Wert `subgrid` sehr ähnlich wie ein reguläres verschachteltes Grid verhält, ist es einfach, zwischen beiden zu wechseln. Wenn Sie beispielsweise feststellen, dass Sie ein implizites Grid für Zeilen benötigen, müssten Sie den Wert `subgrid` in `grid-template-rows` entfernen und möglicherweise einen Wert für `grid-auto-rows` angeben, um die impliziten Spurgrößen zu steuern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Video: Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) (2019)
- [Video: Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4) (2019)
- [Video: Hello subgrid!](https://www.youtube.com/watch?v=vxOj7CaWiPU) Präsentation von CSSConf.eu (2019)
