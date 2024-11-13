---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
l10n:
  sourceCommit: c6e02b5aa7c12f9e64f80a62f75ede8f5cb5ec21
---

{{CSSRef}}

Level 2 der CSS Grid Layout Spezifikation enthält einen `subgrid` Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erklärt, was Subgrid macht, und gibt einige Anwendungsfälle und Designmuster, die das Feature löst.

## Einführung in Subgrid

Wenn Sie `display: grid` zu einem Gitter-Container hinzufügen, werden nur die direkten Kinder Gitter-Elemente und können dann auf dem von Ihnen erstellten Gitter platziert werden. Die Kinder dieser Elemente werden im normalen Fluss angezeigt.

Sie können Gitter „verschachteln“, indem Sie ein Gitter-Element zu einem Gitter-Container machen. Diese Gitter sind jedoch unabhängig vom übergeordneten Gitter und voneinander, was bedeutet, dass sie ihre Spurgrößen nicht vom übergeordneten Gitter übernehmen. Dies erschwert es, verschachtelte Gitter-Elemente mit dem Hauptgitter auszurichten.

Wenn Sie den Wert `subgrid` auf `grid-template-columns`, `grid-template-rows` oder beides setzen, verwendet das verschachtelte Gitter anstelle der Erstellung einer neuen Spur auflistung die im übergeordneten Gitter definierten Spuren.

Wenn Sie zum Beispiel `grid-template-columns: subgrid` verwenden und das verschachtelte Gitter drei Spuren des übergeordneten Gitters spannt, hat das verschachtelte Gitter drei Spuren der gleichen Größe wie das übergeordnete Gitter. Abstände werden vererbt, können aber auch mit einem anderen Wert für {{cssxref("gap")}} überschrieben werden. Liniennamen können vom übergeordneten Gitter in das Untergitter übergeben werden, und das Untergitter kann auch eigene Liniennamen deklarieren.

## Subgrid für Spalten

Im untenstehenden Beispiel habe ich ein Gitterlayout mit neun `1fr` Spalten-Spuren und vier Reihen, die mindestens 100 px hoch sind.

Ich platziere `.item` von Spaltenlinie 2 bis 7 und von Zeilen 2 bis 4. Dann mache ich dieses Gitterelement zu einem Gitter und gebe ihm Spaltenspuren, die ein Subgrid sind, und definiere die Zeilen wie gewohnt. Da das Element fünf Spalten-Spuren umfasst, hat das Subgrid fünf Spalten-Spuren. Dann kann ich `.subitem` auf diesem Gitter platzieren.

Die Zeilen in diesem Beispiel sind kein Subgrid und verhalten sich daher wie ein verschachteltes Gitter normalerweise. Der Gitterbereich im übergeordneten Gitter wird groß genug für dieses verschachtelte Gitter erweitert.

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

{{EmbedLiveSample("columns", "", "450px")}}

Beachten Sie, dass die Liniennummerierung innerhalb des Subgrids neu beginnt – Spaltenlinie 1 im Subgrid ist die erste Linie des Subgrids. Das Subgrid-Element erbt nicht die Liniennummern des übergeordneten Gitters. Das bedeutet, dass Sie sicher ein Komponente layouten können, die in verschiedenen Positionen im Hauptgitter platziert werden kann, wobei Sie wissen, dass die Liniennummern auf der Komponente immer gleich bleiben.

## Subgrid für Zeilen

Das nächste Beispiel ist das gleiche Setup, jedoch verwenden wir `subgrid` als Wert für `grid-template-rows` und definieren explizite Spalten-Spuren. Die Spalten-Spuren verhalten sich also wie ein reguläres verschachteltes Gitter, aber die Zeilen sind mit den zwei Spuren verbunden, die das Kind überspannt.

```html live-sample___rows
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

Sie können sowohl Zeilen als auch Spalten als Subgrid definieren, wie im untenstehenden Beispiel. Das bedeutet, dass Ihr Subgrid in beiden Dimensionen an die Anzahl der Spuren im übergeordneten Gitter gebunden ist.

```html live-sample___both
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

### Kein implizites Gitter in einer subgegriddeten Dimension

Wenn Sie Elemente automatisch platzieren müssen und nicht wissen, wie viele Elemente Sie haben werden, sollten Sie beim Erstellen eines Subgrids vorsichtig sein, da dadurch verhindert wird, dass zusätzliche Zeilen erstellt werden, um diese Elemente aufzunehmen.

Sehen Sie sich das nächste Beispiel an – es verwendet dasselbe Eltern- und Kindgitter wie im obigen Beispiel. Ich habe jedoch zwölf Elemente innerhalb des Subgrids, die versuchen, in zehn Gitterzellen platziert zu werden. Da das Subgrid in beiden Dimensionen ist, gibt es keinen Platz für die zusätzlichen zwei Elemente, also gehen sie in die letzte Spur des Gitters, wie in der Spezifikation definiert.

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

Wenn wir den Wert `grid-template-rows` entfernen, ermöglichen wir die reguläre Erstellung impliziter Spuren, und obwohl diese nicht mit den Spuren des übergeordneten Gitters übereinstimmen, werden so viele erstellt, wie benötigt werden.

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

Wenn Sie einen {{cssxref("gap")}}, {{cssxref("column-gap")}} oder {{cssxref("row-gap")}} auf dem übergeordneten Gitter angegeben haben, wird dieser auf das Subgrid übertragen, sodass es den gleichen Abstand zwischen den Spuren wie das übergeordnete Gitter hat. In einigen Situationen möchten Sie jedoch vielleicht, dass die Subgrid-Spuren einen anderen Abstand oder keinen Abstand haben. Dies kann erreicht werden, indem die `gap-*` Eigenschaften auf dem Gitter-Container des Subgrids verwendet werden.

Sie können dies im folgenden Beispiel sehen. Das übergeordnete Gitter hat einen Abstand von 20px für Zeilen und Spalten. Das Subgrid hat `row-gap` auf `0` gesetzt.

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

Wenn Sie dies im Firefox Grid Inspector untersuchen, können Sie sehen, wie die Linie des Gitters korrekt in der Mitte des Abstands liegt, sodass, wenn wir den Abstand auf 0 setzen, es auf ähnliche Weise wirkt, als ob ein negativer Rand auf ein Element angewendet wird, und den Raum vom Abstand zurück zum Element gibt.

![Das kleinere Element wird in den Abstand angezeigt, da `row-gap` auf 0 im Subgrid gesetzt ist.](gap.png)

## Benannte Gitterlinien

Bei der Verwendung von CSS Grid können Sie Linien auf Ihrem Gitter benennen und dann Elemente basierend auf diesen Namen statt auf der Liniennummer positionieren. Die Liniennamen auf dem übergeordneten Gitter werden in das Subgrid übernommen, und Sie können Elemente mit ihnen platzieren. Im folgenden Beispiel habe ich Linien auf dem übergeordneten Gitter als `col-start` und `col-end` benannt und dann verwendet, um das Subitem zu platzieren.

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

Sie können auch Liniennamen auf dem Subgrid spezifizieren. Dies wird erreicht, indem eine Liste von Liniennamen in eckigen Klammern nach dem `subgrid` Schlüsselwort hinzugefügt wird. Wenn Sie vier Linien in Ihrem Subgrid haben, können Sie sie alle mit der Syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` benennen.

Im Subgrid spezifizierte Linien werden zu allen auf dem übergeordneten Gitter spezifizierten Linien hinzugefügt, sodass Sie entweder oder beides verwenden können. Um dies zu demonstrieren, habe ich im Beispiel unten ein Element mit den übergeordneten Linien und ein anderes mit den Subgrid-Linien positioniert.

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

Abgesehen davon, dass man auf Elemente achten muss, die nicht in Ihr Subgrid passen, verhält sich ein Subgrid sehr ähnlich wie jedes verschachtelte Gitter; der einzige Unterschied besteht darin, dass die Spurgröße des Subgrids im übergeordneten Gitter festgelegt ist. Wie bei jedem verschachtelten Gitter kann jedoch die Größe des Inhalts im Subgrid die Spurgrößen ändern, vorausgesetzt, dass eine Spurgrößenmethode verwendet wird, die es dem Inhalt erlaubt, die Größe zu beeinflussen. In einem solchen Fall werden Auto-Row-Tracks beispielsweise sowohl im Hauptgitter als auch im Subgrid wachsen, um den Inhalt aufzunehmen.

Da der Subgrid-Wert auf ähnliche Weise wie ein reguläres verschachteltes Gitter wirkt, ist es einfach, zwischen den beiden zu wechseln. Zum Beispiel, wenn Sie feststellen, dass Sie ein implizites Raster für Zeilen benötigen, müssen Sie den `subgrid` Wert von `grid-template-rows` entfernen und möglicherweise einen Wert für `grid-auto-rows` angeben, um die implizite Spurgröße zu steuern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Videos: [Layouts von Formularen mit Subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) und [Warten Sie nicht auf die Verwendung von Subgrid für bessere Kartenlayouts](https://www.youtube.com/watch?v=lLnFtK1LNu4)
- [Hallo Subgrid!](https://noti.st/rachelandrew/i6gUcF/hello-subgrid) Eine Präsentation von CSSConf.eu
