---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Das [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout)-Modul enthält einen `subgrid`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden beschreibt, was Subgrid tut, und gibt einige Anwendungsfälle und Designmuster, die das Feature löst.

## Einführung in Subgrid

Wenn Sie [`display: grid`](/de/docs/Web/CSS/display) zu einem Grid-Container hinzufügen, werden nur die direkten Kinder zu Grid-Elementen, die dann auf dem von Ihnen erstellten Grid platziert werden können. Die Kinder dieser Elemente werden im normalen Fluss angezeigt.

Sie können Grids "verschachteln", indem Sie ein Grid-Element zu einem Grid-Container machen. Diese Grids sind jedoch unabhängig vom übergeordneten Grid und voneinander, das heißt, sie übernehmen ihre Spurgrößen nicht vom übergeordneten Grid. Dies erschwert es, verschachtelte Grid-Elemente mit dem Hauptgrid auszurichten.

Wenn Sie den Wert `subgrid` auf `grid-template-columns`, `grid-template-rows` oder beides setzen, verwendet das verschachtelte Grid anstelle einer neuen Spurauflistung die im übergeordneten Grid definierten Spuren.

Wenn Sie zum Beispiel `grid-template-columns: subgrid` verwenden und das verschachtelte Grid sich über drei Spuren des übergeordneten Grids erstreckt, hat das verschachtelte Grid drei Spuren der gleichen Größe wie das übergeordnete Grid. Während [Abstände](/de/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout#gutters) vererbt werden, können sie mit einem anderen {{cssxref("gap")}}-Wert überschrieben werden. [Liniennamen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) können vom Elternteil in das Subgrid übergeben werden, und das Subgrid kann auch seine eigenen Liniennamen deklarieren.

## Subgrid für Spalten

Im folgenden Beispiel hat das Grid-Layout neun `1fr` Spaltenspuren und vier Zeilen, die mindestens `100px` hoch sind.

Das `.item` wird zwischen den Spaltenlinien 2 bis 7 und den Zeilen 2 bis 4 platziert. Dieses Grid-Element selbst ist als Grid mit `display: grid` spezifiziert und dann als Subgrid definiert, indem ihm Spaltenspuren, die ein Subgrid sind (`grid-template-columns: subgrid`), und normal definierte Zeilen gegeben werden. Das Subgrid hat fünf Spaltenspuren, da es sich über fünf Spalten erstreckt.

Da das `.item` ein Subgrid ist, kann das `.subitem`, obwohl es kein direktes Kind des äußeren `.grid` ist, auf jenem äußeren Grid platziert werden, mit seinen Spalten in Ausrichtung mit den Spalten des äußeren Grids. Die Zeilen sind kein Subgrid und verhalten sich daher, wie ein verschachteltes Grid normalerweise tut. Der Grid-Bereich auf dem Elternteil dehnt sich aus, um groß genug für dieses verschachtelte Grid zu sein.

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

Beachten Sie, dass die Liniennummerierung innerhalb des Subgrids neu beginnt — Spaltenlinie 1, wenn sich im Subgrid, ist die erste Linie des Subgrids. Das subgridded Element erbt nicht die Liniennummern des übergeordneten Grids. Das bedeutet, dass Sie ein sicheres Layout für eine Komponente erstellen können, die an verschiedenen Positionen im Hauptgrid platziert werden kann, indem Sie wissen, dass die Liniennummern auf der Komponente immer gleich sind.

{{EmbedLiveSample("columns", "", "450px")}}

## Subgrid für Zeilen

Dieses Beispiel verwendet dasselbe HTML wie oben, aber hier wird `subgrid` als Wert von `grid-template-rows` anstelle von explizit definierten Spaltenspuren angewendet. In diesem Fall verhalten sich die Spaltenspuren als reguläres verschachteltes Grid, aber die Zeilen sind an die beiden Spuren gebunden, die das `.item` überspannt.

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

In diesem Beispiel sind sowohl die Zeilen als auch die Spalten als Subgrid definiert, wodurch das Subgrid auf beiden Dimensionen an die Spuren des übergeordneten Grids gebunden wird.

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

### Kein implizites Grid in einer subgridded Dimension

Wenn Sie Elemente automatisch platzieren müssen und nicht wissen, wie viele Elemente Sie haben werden, seien Sie vorsichtig bei der Erstellung eines Subgrids, da es die Erstellung zusätzlicher Zeilen verhindert, um diese Elemente aufzunehmen.

Werfen Sie einen Blick auf das nächste Beispiel — es verwendet das gleiche Eltern- und Kindgrid wie das oben stehende Beispiel. Es gibt zwölf Elemente innerhalb des Subgrids, die versuchen, sich in zehn Gitterzellen automatisch zu platzieren. Da das Subgrid in beiden Dimensionen vorhanden ist, gibt es keinen Platz für die zusätzlichen zwei Elemente, sodass sie in die letzte Spur des Grids gelangen. Dies ist das Verhalten, das in der Spezifikation definiert ist.

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

Indem Sie den `grid-template-rows`-Wert entfernen, wird die regelmäßige Erstellung impliziter Spuren aktiviert, die so viele Zeilen erstellen, wie erforderlich sind. Diese werden nicht mit den Spuren des Elternteils ausgerichtet.

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

## Die Spalteneigenschaften und Subgrid

Alle {{cssxref("gap")}}, {{cssxref("column-gap")}} oder {{cssxref("row-gap")}} Werte, die auf dem Elternteil angegeben sind, werden in das Subgrid übernommen, wodurch derselbe Abstand zwischen Spuren wie beim Elternteil entsteht. Dieses Standardverhalten kann überschrieben werden, indem `gap-*`-Eigenschaften auf dem Subgrid-Container angewendet werden.

In diesem Beispiel hat das übergeordnete Grid eine Lücke von `20px` für Zeilen und Spalten und das Subgrid hat `row-gap` auf `0` gesetzt.

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

Wenn Sie dies im Grid-Inspektor Ihrer Entwickler-Tools inspizieren, werden Sie feststellen, dass die Subgrid-Linie in der Mitte der Lücke liegt. Das Setzen der Lücke auf `0` wirkt ähnlich wie das Anwenden eines negativen Randes auf ein Element und gibt den Platz aus der Lücke an das Element zurück.

![Das kleinere Element zeigt sich in der Lücke, da `row-gap` auf 0 im Subgrid gesetzt ist, wie im Firefox Developer Tools Grid-Inspektor zu sehen.](gap.png)

## Benannte Grid-Linien

Bei der Verwendung von CSS Grid können Sie [Linien auf Ihrem Grid benennen](/de/docs/Web/CSS/CSS_grid_layout/Grid_layout_using_named_grid_lines) und dann Elemente basierend auf diesen Namen anstelle der Liniennummer positionieren. Die Liniennamen auf dem Eltern-Grid werden in das Subgrid übergeben und Sie können Elemente mit ihnen platzieren. Im folgenden Beispiel werden die benannten Linien des Elternteils `col-start` und `col-end` verwendet, um das Subitem zu platzieren.

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

Sie können auch Liniennamen auf dem Subgrid angeben. Dies wird erreicht, indem eine Liste von Liniennamen in eckigen Klammern nach dem `subgrid`-Schlüsselwort hinzugefügt wird. Wenn Sie beispielsweise vier Linien in Ihrem Subgrid haben und sie alle benennen möchten, könnten Sie die Syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` verwenden.

Linien, die auf dem Subgrid angegeben sind, werden zu allen Linien hinzugefügt, die auf dem Elternteil angegeben sind, sodass Sie entweder nur die Linien des Elternteils oder beide verwenden können. Im folgenden Beispiel wird ein Element unten unter Verwendung der Elternlinien und eines unter Verwendung der Subgrid-Linien platziert.

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

Ein Subgrid verhält sich sehr ähnlich wie jedes verschachtelte Grid; der einzige Unterschied ist, dass die Spurgröße des Subgrids auf dem Eltern-Grid festgelegt wird. Wie bei jedem verschachtelten Grid kann die Größe des Inhalts im Subgrid die Spurgröße ändern, sofern eine Methode zur Größenbestimmung der Spuren verwendet wird, die es dem Inhalt ermöglicht, die Größe zu beeinflussen. In einem solchen Fall wachsen automatisch dimensionierte Zeilenspuren, um Inhalte im Hauptgrid und im Subgrid aufzunehmen.

Da der Subgrid-Wert sehr ähnlich wie ein reguläres verschachteltes Grid funktioniert, ist es einfach, zwischen den beiden zu wechseln. Zum Beispiel, wenn Sie erkennen, dass Sie ein implizites Grid für Zeilen benötigen, müssten Sie den `subgrid`-Wert von `grid-template-rows` entfernen und möglicherweise einen Wert für `grid-auto-rows` angeben, um die implizite Spurgrößenbestimmung zu kontrollieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Video: Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) (2019)
- [Video: Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4) (2019)
- [Video: Hello subgrid!](https://www.youtube.com/watch?v=vxOj7CaWiPU) Präsentation von CSSConf.eu (2019)
