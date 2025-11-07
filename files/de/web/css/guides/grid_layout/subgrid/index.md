---
title: Subgrid
slug: Web/CSS/Guides/Grid_layout/Subgrid
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout)-Modul enthält einen `subgrid`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden beschreibt, was subgrid tut, und gibt einige Anwendungsfälle und Designmuster an, die das Feature löst.

## Einführung in subgrid

Wenn Sie [`display: grid`](/de/docs/Web/CSS/Reference/Properties/display) zu einem Grid-Container hinzufügen, werden nur die direkten Kinder zu Grid-Elementen, die dann auf dem von Ihnen erstellten Grid platziert werden können. Die Kinder dieser Elemente werden im normalen Fluss angezeigt.

Sie können Grids "verschachteln", indem Sie ein Grid-Element zu einem Grid-Container machen. Diese Grids sind jedoch unabhängig vom übergeordneten Grid und voneinander, was bedeutet, dass sie ihre Track-Größen nicht vom übergeordneten Grid übernehmen. Dies macht es schwierig, verschachtelte Grid-Elemente mit dem Haupt-Grid auszurichten.

Wenn Sie den Wert `subgrid` auf `grid-template-columns`, `grid-template-rows` oder beides setzen, wird anstelle der Erstellung einer neuen Track-Liste das verschachtelte Grid die im übergeordneten Grid definierten Tracks verwenden.

Zum Beispiel: Wenn Sie `grid-template-columns: subgrid` verwenden und das verschachtelte Grid drei Spaltentracks des übergeordneten Grids überspannt, wird das verschachtelte Grid drei Spaltentracks der gleichen Größe wie das übergeordnete Grid haben. Während [Gaps](/de/docs/Web/CSS/Guides/Grid_layout/Basic_concepts#gutters) geerbt werden, können sie mit einem anderen {{cssxref("gap")}}-Wert überschrieben werden. [Liniennamen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) können vom übergeordneten Grid in das Subgrid übertragen werden, und das Subgrid kann auch seine eigenen Liniennamen deklarieren.

## Subgrid für Spalten

Im unten stehenden Beispiel hat das Grid-Layout neun `1fr`-Spaltentracks und vier Zeilen, die mindestens `100px` hoch sind.

Das `.item` wird zwischen Spaltenlinien 2 bis 7 und Zeilen 2 bis 4 platziert. Dieses Grid-Element wird selbst als Grid mit `display: grid` angegeben und dann als Subgrid definiert, indem es ihm Spaltentracks gibt, die ein Subgrid sind (`grid-template-columns: subgrid`) und normal definierte Zeilen. Das Subgrid hat fünf Spaltentracks, da es fünf Spaltentracks überspannt.

Da das `.item` ein Subgrid ist, kann, obwohl das `.subitem` kein direktes Kind des äußeren `.grid` ist, es auf diesem äußeren Grid platziert werden, wobei seine Spalten mit den Spalten des äußeren Grids ausgerichtet sind. Die Zeilen sind kein Subgrid, sondern verhalten sich wie ein verschachteltes Grid normalerweise. Der Grid-Bereich auf dem übergeordneten Element erweitert sich, um dieses verschachtelte Grid aufzunehmen.

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

Beachten Sie, dass die Liniennummerierung im Subgrid neu beginnt — Spaltenlinie 1 im Subgrid ist die erste Linie des Subgrids. Das subgridded Element erbt nicht die Liniennummern des übergeordneten Grids. Das bedeutet, dass Sie ein Layoutkomponente sicher gestalten können, die an verschiedenen Positionen im Haupt-Grid platziert werden kann, in dem Wissen, dass die Liniennummern auf der Komponente immer gleich bleiben.

{{EmbedLiveSample("columns", "", "450px")}}

## Subgrid für Zeilen

Dieses Beispiel verwendet den gleichen HTML-Code wie oben, aber hier wird das `subgrid` als Wert von `grid-template-rows` angewendet, wobei explizit definierte Spaltentracks verwendet werden. In diesem Fall verhalten sich die Spaltentracks wie ein regulär verschachteltes Grid, aber die Zeilen sind an die zwei Tracks gebunden, die das `.item` überspannt.

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

In diesem Beispiel sind sowohl die Zeilen als auch die Spalten als Subgrid definiert und binden das Subgrid an die Tracks des übergeordneten Grids in beiden Dimensionen.

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

Wenn Sie Elemente automatisch platzieren müssen und nicht wissen, wie viele Elemente Sie haben werden, seien Sie vorsichtig beim Erstellen eines Subgrids, da es die Erstellung zusätzlicher Zeilen zur Aufnahme dieser Elemente verhindert.

Werfen Sie einen Blick auf das nächste Beispiel – es verwendet das gleiche übergeordnete und untergeordnete Grid wie im Beispiel oben. Es gibt zwölf Elemente im Subgrid, die versuchen, sich in zehn Gitterzellen automatisch zu platzieren. Da das Subgrid in beiden Dimensionen ist, gibt es keinen Platz für die zusätzlichen zwei Elemente, also gehen sie in das letzte Track des Grids. Dies ist das im Standard definierte Verhalten.

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

Indem Sie den Wert `grid-template-rows` entfernen, wird die reguläre Erstellung von impliziten Tracks aktiviert, sodass so viele Zeilen wie benötigt erstellt werden. Diese werden nicht mit den Tracks des Elternteils übereinstimmen.

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

Alle auf dem Elternteil angegebenen {{cssxref("gap")}}, {{cssxref("column-gap")}} oder {{cssxref("row-gap")}}-Werte werden in das Subgrid übertragen und erzeugen denselben Abstand zwischen den Tracks wie beim Elternteil. Dieses Standardverhalten kann überschrieben werden, indem `gap-*`-Eigenschaften auf den Subgrid-Container angewendet werden.

In diesem Beispiel hat das Eltern-Grid einen Abstand von `20px` für Zeilen und Spalten und das Subgrid hat `row-gap` auf `0` gesetzt.

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

Wenn Sie dies in Ihrem Entwickler-Tools-Grid-Inspector untersuchen, werden Sie feststellen, dass die Subgrid-Linie in der Mitte des Gaps liegt. Die Einstellung des Gaps auf `0` wirkt ähnlich wie die Anwendung eines negativen Randes auf ein Element, wodurch der Raum vom Gap wieder an das Element gegeben wird.

![Das kleinere Element wird im Gap angezeigt, da `row-gap` bei 0 auf dem Subgrid gesetzt ist, wie im Firefox-Entwickler-Tools-Grid-Inspector zu sehen.](gap.png)

## Benannte Grid-Linien

Bei Verwendung von CSS Grid können Sie [Linien auf Ihrem Grid benennen](/de/docs/Web/CSS/Guides/Grid_layout/Named_grid_lines) und dann Elemente basierend auf diesen Namen statt der Liniennummer positionieren. Die Linienneben auf dem übergeordneten Grid werden in das Subgrid übertragen, und Sie können Elemente unter Verwendung dieser platzieren. Im folgenden Beispiel werden die benannten Linien des übergeordneten `col-start` und `col-end` verwendet, um das Unterelement zu platzieren.

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

Sie können auch Liniennamen auf dem Subgrid spezifizieren. Dies wird erreicht, indem eine Liste von Liniennamen in eckigen Klammern nach dem Schlüsselwort `subgrid` hinzugefügt wird. Wenn Sie beispielsweise vier Linien in Ihrem Subgrid haben, um sie alle zu benennen, können Sie die Syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` verwenden.

Linien, die auf dem Subgrid angegeben werden, werden zu allen auf dem übergeordneten Grid angegebenen Linien hinzugefügt, sodass Sie entweder oder beide verwenden können. In diesem Beispiel wird ein Element unten mit den Linien des Elternteils und eines mit den Subgrid-Linien platziert.

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

Ein Subgrid verhält sich sehr ähnlich wie jedes verschachtelte Grid; der einzige Unterschied besteht darin, dass die Track-Größen des Subgrids auf dem Eltern-Grid festgelegt sind. Wie bei jedem verschachtelten Grid kann jedoch die Größe des Inhalts im Subgrid die Track-Größen ändern, vorausgesetzt, es wird eine Track-Größenmethode verwendet, die das Ändern der Größe durch den Inhalt ermöglicht. In einem solchen Fall werden automatisch größenangepasste Zeilen- oder Spaltentracks wachsen, um den Inhalt im Haupt-Grid und im Subgrid aufzunehmen.

Da der Subgrid-Wert in ähnlicher Weise wie ein regulär verschachteltes Grid wirkt, ist es einfach, zwischen den beiden umzuschalten. Wenn Sie beispielsweise feststellen, dass Sie ein implizites Grid für Zeilen benötigen, müssten Sie den `subgrid`-Wert von `grid-template-rows` entfernen und möglicherweise einen Wert für `grid-auto-rows` angeben, um die implizite Trackgröße zu steuern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Video: Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) (2019)
- [Video: Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4) (2019)
- [Video: Hello subgrid!](https://www.youtube.com/watch?v=vxOj7CaWiPU) Präsentation von CSSConf.eu (2019)
