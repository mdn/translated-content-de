---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) Modul beinhaltet einen `subgrid` Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erklärt, was Subgrid tut und bietet einige Anwendungsfälle und Designmuster, die diese Funktion löst.

## Einführung in Subgrid

Wenn Sie [`display: grid`](/de/docs/Web/CSS/display) zu einem Grid-Container hinzufügen, werden nur die direkten Kinder zu Grid-Elementen, die dann auf dem von Ihnen erstellten Grid platziert werden können. Die Kinder dieser Elemente werden im normalen Fluss angezeigt.

Sie können Grids "verschachteln", indem Sie ein Grid-Element zu einem Grid-Container machen. Diese Grids sind jedoch unabhängig vom übergeordneten Grid und voneinander, was bedeutet, dass sie ihre Spurgrößen nicht vom übergeordneten Grid übernehmen. Dies erschwert es, verschachtelte Grid-Elemente mit dem Hauptgrid auszurichten.

Wenn Sie den Wert `subgrid` auf `grid-template-columns`, `grid-template-rows` oder beides setzen, verwendet das verschachtelte Grid anstelle einer neuen Spurauflistung die im übergeordneten Grid definierten Spuren.

Wenn Sie beispielsweise `grid-template-columns: subgrid` verwenden und das verschachtelte Grid drei Spalten-Spuren des Elternteils überspannt, hat das verschachtelte Grid drei Spalten-Spuren derselben Größe wie das übergeordnete Grid. Während [Lücken](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters) vererbt werden, können sie mit einem anderen {{cssxref("gap")}} Wert überschrieben werden. [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) können vom Elternteil an das Subgrid übergeben werden, und das Subgrid kann auch seine eigenen Liniennamen deklarieren.

## Subgrid für Spalten

Im untenstehenden Beispiel hat das Grid-Layout neun `1fr` Spalten-Spuren und vier Zeilen, die mindestens `100px` hoch sind.

Die `.item` wird zwischen den Spaltenlinien 2 bis 7 und den Zeilen 2 bis 4 platziert. Dieses Grid-Element ist selbst als Grid mit `display: grid` angegeben und dann als Subgrid definiert, indem es ihm Spuren gibt, die ein Subgrid sind (`grid-template-columns: subgrid`) und normal definierte Zeilen. Das Subgrid hat fünf Spalten-Spuren, da es fünf Spalten-Spuren überspannt.

Da die `.item` ein Subgrid ist, kann die `.subitem`, obwohl sie kein direktes Kind des äußeren `.grid` ist, auf diesem äußeren Grid platziert werden, wobei ihre Spalten mit den Spalten des äußeren Grids ausgerichtet sind. Die Zeilen sind kein Subgrid, daher verhalten sie sich wie ein normal verschachteltes Grid. Der Grid-Bereich auf dem Elternteil erweitert sich, um groß genug für dieses verschachtelte Grid zu sein.

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

Beachten Sie, dass die Liniennummerierung innerhalb des Subgrids neu beginnt – Spaltenlinie 1 ist, wenn sie sich innerhalb des Subgrids befindet, die erste Linie des Subgrids. Das subgeordnete Element erbt nicht die Liniennummern des übergeordneten Grids. Dies bedeutet, dass Sie sicher ein Komponentenset erstellen können, das möglicherweise an verschiedenen Positionen im Hauptgrid platziert wird, da die Liniennummern auf der Komponente immer gleich sind.

{{EmbedLiveSample("columns", "", "450px")}}

## Subgrid für Zeilen

Dieses Beispiel verwendet denselben HTML-Code wie oben, aber hier wird das `subgrid` als Wert von `grid-template-rows` angewendet, mit explizit definierten Spalten-Spuren. In diesem Fall verhalten sich die Spalten-Spuren wie ein reguläres verschachteltes Grid, aber die Zeilen sind mit den zwei Spuren verbunden, die die `.item` überspannt.

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

In diesem Beispiel sind sowohl Zeilen- als auch Spalten als Subgrid definiert, sodass das Subgrid in beiden Dimensionen mit den Spuren des übergeordneten Grids verbunden ist.

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

### Kein implizites Grid in einer subgegriddeten Dimension

Wenn Sie Elemente automatisch platzieren müssen und nicht wissen, wie viele Elemente Sie haben werden, achten Sie darauf, wenn Sie ein Subgrid erstellen, da es die Erstellung zusätzlicher Zeilen verhindert, um diese Elemente aufzunehmen.

Betrachten Sie das nächste Beispiel – es verwendet dasselbe Eltern- und Kindgrid wie im obigen Beispiel. Es gibt zwölf Elemente im Subgrid, die versuchen, sich in zehn Grid-Zellen zu platzieren. Da das Subgrid auf beiden Dimensionen vorhanden ist, gibt es keinen Platz für die zusätzlichen zwei Elemente, sodass sie in der letzten Spur des Grids untergebracht werden. Dies ist das im Spezifikationsdokument definierte Verhalten.

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

Durch das Entfernen des `grid-template-rows` Werts wird die reguläre Erstellung impliziter Spuren aktiviert, wobei so viele Zeilen erstellt werden, wie erforderlich sind. Diese werden nicht mit den Spuren des Elternteils übereinstimmen.

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

Alle {{cssxref("gap")}}, {{cssxref("column-gap")}}, oder {{cssxref("row-gap")}} Werte, die im übergeordneten Element angegeben sind, werden in das Subgrid übernommen, wodurch derselbe Abstand zwischen den Spuren wie im Elternteil entsteht. Dieses Standardverhalten kann überschrieben werden, indem `gap-*` Eigenschaften auf dem Subgrid-Container angewendet werden.

In diesem Beispiel hat das übergeordnete Grid einen Abstand von `20px` für Zeilen und Spalten, und das Subgrid hat `row-gap` auf `0` gesetzt.

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

Wenn Sie dies in Ihrem Entwickler-Tool Grid-Inspektor überprüfen, werden Sie feststellen, dass die Subgrid-Linie in der Mitte der Lücke ist. Das Einstellen der Lücke auf `0` wirkt sich ähnlich aus wie das Anwenden eines negativen Randes auf ein Element, sodass der Raum aus der Lücke zum Element zurückgegeben wird.

![Das kleinere Element wird in der Lücke angezeigt, da row-gap auf 0 im Subgrid gesetzt ist, wie im Firefox Entwickler-Tool Grid-Inspektor zu sehen ist.](gap.png)

## Benannte Grid-Linien

Bei der Verwendung von CSS Grid können Sie [Linien auf Ihrem Grid benennen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) und dann Elemente basierend auf diesen Namen anstelle der Liniennummer platzieren. Die Liniennamen auf dem übergeordneten Grid werden in das Subgrid übernommen, und Sie können Elemente mit ihnen platzieren. Im untenstehenden Beispiel werden die benannten Linien des Elternteils `col-start` und `col-end` verwendet, um das Subitem zu platzieren.

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

Sie können auch Liniennamen im Subgrid angeben. Dies kann erreicht werden, indem nach dem `subgrid` Schlüsselwort eine Liste von Liniennamen in eckigen Klammern hinzugefügt wird. Wenn Sie zum Beispiel vier Linien in Ihrem Subgrid haben und sie alle benennen möchten, könnten Sie die Syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` verwenden.

Linien, die im Subgrid festgelegt sind, werden zu den Linien hinzugefügt, die im Elternteil spezifiziert sind, sodass Sie entweder oder beide verwenden können. In diesem Beispiel wird ein Element unter Verwendung der Linien des Elternteils und eines mit den Subgrid-Linien platziert.

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

Ein Subgrid verhält sich sehr ähnlich wie jedes verschachtelte Grid; der einzige Unterschied besteht darin, dass die Spurenvergrößerung des Subgrids auf dem übergeordneten Grid festgelegt ist. Wie bei jeder verschachtelten Grid kann jedoch die Größe des Inhalts im Subgrid die Spurenvergrößerung ändern, vorausgesetzt, dass eine Spurvergrößerungsmethode verwendet wird, die es dem Inhalt ermöglicht, die Größe zu beeinflussen. In einem solchen Fall werden automatisch dimensionierte Zeilenspuren wachsen, um den Inhalt im Hauptgrid und den Inhalt im Subgrid aufzunehmen.

Da der Subgrid-Wert sich sehr ähnlich wie ein reguläres verschachteltes Grid verhält, ist es einfach, zwischen den beiden zu wechseln. Wenn Sie zum Beispiel feststellen, dass Sie ein implizites Grid für Zeilen benötigen, müssten Sie den `subgrid` Wert von `grid-template-rows` entfernen und möglicherweise einen Wert für `grid-auto-rows` angeben, um die implizite Spurgröße zu steuern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Video: Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) (2019)
- [Video: Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4) (2019)
- [Video: Hello subgrid!](https://www.youtube.com/watch?v=vxOj7CaWiPU) Präsentation von CSSConf.eu (2019)
