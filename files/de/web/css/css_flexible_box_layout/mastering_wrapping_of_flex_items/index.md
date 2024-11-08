---
title: Mastering wrapping of flex items
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: 8a7e911652fcb4a61cc95f458d53f39ad08c0946
---

{{CSSRef}}

Flexbox wurde als eindimensionales Layout-Tool entworfen — es befasst sich mit der Anordnung von Elementen als Reihe oder Spalte — jedoch nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Elemente auf neue Zeilen zu umbrechen, d. h. neue Reihen zu erstellen, wenn {{cssxref("flex-direction")}} `row` ist, und neue Spalten, wenn `flex-direction` `column` ist. Diese Anleitung erklärt das Umbruchverhalten von Flexbox, wofür es gedacht ist und in welchen Situationen das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) anstelle von Flexbox erforderlich ist.

## Elemente umschlagen lassen

Der anfängliche Wert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`. Das bedeutet, dass wenn eine Gruppe von Flex-Elementen zu breit für ihren Flex-Container ist, sie diesen überlaufen. Um sie umschlagen zu lassen, sobald sie zu breit sind, fügen Sie die `flex-wrap`-Eigenschaft mit einem Wert von `wrap` hinzu oder verwenden Sie die Kurznotation {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Die Elemente brechen dann in neue Zeilen um, wenn sie ihren Container überlaufen.

In diesem Beispiel gibt es zehn Flex-Elemente mit einer `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht genug Platz für ein weiteres Element von 160 Pixeln in einer Reihe vorhanden ist, wird eine neue Flex-Linie erstellt. Neue Linien werden nach Bedarf erstellt, bis alle Elemente platziert sind. Da die Elemente wachsen können, dehnen sie sich aus, um jede Reihe vollständig auszufüllen. Wenn sich nur ein Element in der letzten Zeile befindet, wird es gestreckt, um die gesamte Zeile zu füllen.

```html live-sample___row-wrap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___row-wrap
.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

{{EmbedLiveSample("row-wrap")}}

Das Gleiche passiert bei Flex-Spalten. Um zu umschlagen und neue Spalten zu erstellen, muss der Container eine Höhe haben. Im Fall von Spalten dehnen sich die Elemente vertikal, um jede Spalte vollständig auszufüllen.

```html live-sample___column-wrap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___column-wrap
.box {
  border: 2px dotted rgb(96 139 168);
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 80px;
}
```

{{EmbedLiveSample("column-wrap", "", "320px")}}

## Umschlagen und flex-direction

Umschlagen funktioniert wie erwartet in Kombination mit `flex-direction`. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Elemente an der Endkante des Containers und ordnen sich in umgekehrt sortierten Zeilen an.

```html live-sample___row-reverse-wrap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___row-reverse-wrap
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  width: 500px;
}
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

{{EmbedLiveSample("row-reverse-wrap")}}

Beachten Sie, dass die Umkehrung nur in der inline, Reihenrichtung erfolgt. Wir beginnen rechts und gehen dann in die zweite Zeile und beginnen erneut von rechts. Wir kehren nicht in beide Richtungen um, beginnend vom Boden bis hin zum Container!

## Erklärung des eindimensionalen Layouts

Wie wir in den obigen Beispielen gesehen haben, wachsen und schrumpfen unsere Elemente, wenn es in der letzten Reihe oder Spalte weniger Elemente gibt, die dann wachsen, um den verfügbaren Platz auszufüllen.

Es gibt keine Flexbox-Funktionen, um Elemente in einer Zeile mit Elementen in der darüberliegenden Zeile auszurichten — jede Flex-Linie verhält sich wie ein neuer Flex-Container. Es befasst sich mit der Verteilung von Platz entlang der Hauptachse. Wenn nur ein Element vorhanden ist und dieses Element wachsen darf, füllt es die Achse genauso aus, als ob Sie einen Einzel-Element-Flex-Container hätten. Wenn Sie ein Layout auf zwei Dimensionen wünschen, dann möchten Sie wahrscheinlich Grid-Layout verwenden.

Dieses Beispiel zeigt den Unterschied, indem das CSS Grid-Layout verwendet wird, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, wie es passt, wobei der zusätzliche Platz gleichmäßig auf alle Spalten verteilt wird. Wir verwenden denselben HTML-Code wie das [Flexbox-Umbruchbeispiel](#elemente_umschlagen_lassen) oben, setzen jedoch `display: grid` darauf. Anstelle der {{cssxref("flex")}}-Kurznotation, die außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite der Elemente und deren Fähigkeit zu wachsen direkt auf den Container mit {{cssxref("grid-template-columns")}}. Mit CSS Grid bleibt das letzte Element in seiner Gitterzelle; Gitterelemente dehnen sich nicht, wenn es in der letzten Zeile weniger von ihnen gibt.

```html live-sample___grid-example
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___grid-example
.box {
  border: 2px dotted rgb(96 139 168);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  width: 500px;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("grid-example")}}

Dies ist der Unterschied zwischen ein- und zweidimensionalen Layouts. In einer eindimensionalen Layoutmethode wie Flexbox steuern wir nur die Reihe oder Spalte. Im zweidimensionalen Grid-Layout steuern wir beides gleichzeitig. Wenn Sie die Platzaufteilung Zeile für Zeile wünschen, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS Grid.

## Wie funktionieren Flexbox-basierte Gridsysteme?

Flexbox-basierte Layouts können gezwungen werden, sich wie Gridsysteme auszurichten, aber das ist nicht der beabsichtigte Zweck von Flexbox. Wenn Sie prozentuale Breiten Flex-Elementen zuweisen — entweder indem Sie `flex-basis` verwenden oder indem Sie eine Breite direkt auf das Element setzen und den Wert von `flex-basis` als `auto` belassen — können Sie den Eindruck eines zweidimensionalen Layouts erzeugen.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um unflexible Flex-Elemente zu erstellen. Die Flexibilität wird durch Prozentsätze gesteuert.

```html live-sample___flex-grid
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___flex-grid
* {
  box-sizing: border-box;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}

.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 0 0 33.3333%;
}
```

{{EmbedLiveSample("flex-grid")}}

Diese Technik ermöglicht es Ihnen, Flex-Elemente auf der Querachse auszurichten. Wenn Sie jedoch feststellen, dass Sie auf diese Weise Breiten zu Flex-Elementen hinzufügen oder leere Flex-Elemente hinzufügen, um Platz zu beanspruchen, ist das ein guter Hinweis darauf, dass Sie möglicherweise zum CSS-Grid-Layout für diese Komponente wechseln sollten.

## Zwischenräume zwischen Elementen schaffen

Um Lücken oder Abstände zwischen Flex-Elementen zu schaffen, verwenden Sie die {{CSSXref("gap")}}-Eigenschaft direkt am Flex-Container, um einen festen Abstand zwischen benachbarten Flex-Elementen zu erzeugen. Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`. Diese Eigenschaften geben die Größe der Abstände zwischen Zeilen und Spalten innerhalb von Grid-, Flex- und Mehrspalten-Layouts an.

Die `gap`-Eigenschaft ist nicht die einzige Möglichkeit, um Platz zwischen Elementen zu schaffen. Abstände, Polsterung, `justify-content` und `align-content` können ebenfalls die Größe des Abstands vergrößern und die tatsächliche Größe der Lücke beeinflussen.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` in beiden Achsen unterscheidet, versuchen Sie, den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert zur `.box > *`-Regel im Stylesheet unten hinzuzufügen. Klicken Sie auf die Schaltfläche "Zurücksetzen", um zu den vorherigen Werten zurückzukehren.

```html live-sample___gaps
<div class="wrapper">
  <div class="box">
    <div>One</div>
    <div>Two</div>
    <div>Three</div>
    <div>Four</div>
    <div>Five</div>
    <div>Six</div>
    <div>Seven</div>
    <div>Eight</div>
    <div>Nine</div>
    <div>Ten</div>
  </div>
</div>
```

```css live-sample___gaps
.wrapper {
  border: 2px dotted rgb(96 139 168);
  width: 500px;
}
.box {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.box > * {
  flex: 1 1 160px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("gaps", "", "220px")}}

## Kollabierte Elemente

Die Flexbox-Spezifikation beschreibt, was passieren sollte, wenn ein Flex-Element kollabiert wird, indem `visibility: collapse` auf ein Element gesetzt wird. Siehe die MDN-Dokumentation zur {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Die Angabe von visibility:collapse auf einem Flex-Element bewirkt, dass es zu einem kollabierten Flex-Element wird, was einen Effekt ähnlich visibility:collapse auf eine Tabellenzeile oder -spalte erzeugt: Das kollabierte Flex-Element wird vollständig aus der Darstellung entfernt, hinterlässt jedoch eine "Stütze", die die Kreuzgröße der Flex-Linie stabil hält. Wenn ein Flex-Container nur eine Flex-Linie hat, kann das dynamische Kollabieren oder Entkollabieren von Elementen die Hauptgröße des Flex-Containers ändern, hat jedoch garantiert keinen Einfluss auf seine Kreuzgröße und wird nicht dazu führen, dass das restliche Seitenlayout "wackelt". Das Umschlagen der Flex-Linie wird nach dem Kollabieren neu durchgeführt, daher kann sich die Kreuzgröße eines Flex-Containers mit mehreren Linien ändern oder nicht." - [Kollabierte Elemente](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Elemente mit JavaScript anvisieren möchten, um beispielsweise Inhalte anzuzeigen und zu verbergen. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel habe ich einen nicht umgeschlagenen Flex-Container. Das dritte Element hat mehr Inhalt als die anderen und ist jedoch auf `visibility: collapse` gesetzt; daher behält der Flex-Container eine _Stütze_ in der Höhe bei, die erforderlich ist, um dieses Element anzuzeigen. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert in `visible` ändern, wird das Element angezeigt, und der Platz wird zwischen nicht kollabierten Elementen neu verteilt; die Höhe des Flex-Containers sollte sich nicht ändern.

> [!NOTE]
> Verwenden Sie Firefox für die folgenden zwei Beispiele, da Chrome und Safari `collapse` als `hidden` behandeln.

```html live-sample___visibility-collapse
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="hide">Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___visibility-collapse
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  width: 600px;
}
.box > * {
  flex: 1 1 200px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.hide {
  visibility: collapse;
}
```

{{EmbedLiveSample("visibility-collapse")}}

Wenn Sie jedoch mit mehrzeiligen Flex-Containern arbeiten, müssen Sie verstehen, dass das Umschlagen _nach_ dem Kollabieren neu durchgeführt wird. Der Browser muss das Umschlagverhalten neu ausführen, um den neuen Raum zu berücksichtigen, den das kollabierte Element in der Inlinedirektion hinterlassen hat.

Das bedeutet, dass Elemente möglicherweise auf einer anderen Zeile enden als auf der, auf der sie begonnen haben. Im Fall eines Elements, das angezeigt und verborgen wird, könnte es gut sein, dass die Elemente in einer anderen Zeile enden.

Ich habe dieses Verhalten im nächsten Live-Beispiel erstellt. Sie können sehen, wie das Strecken die Zeilen basierend auf der Position des kollabierten Elements ändert. Wenn Sie dem zweiten Element mehr Inhalt hinzufügen, wird es in eine andere Zeile verschoben, sobald es lang genug wird. Diese obere Zeile wird dann nur so hoch wie eine einzelne Textzeile.

```html live-sample___wrapped-visibility-collapse
<div class="box">
  <div>One</div>
  <div>Add more text to this box to make it grow</div>
  <div class="hide">Three <br />has <br />extra <br />text</div>
  <div>Four</div>
  <div>Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
</div>
```

```css live-sample___wrapped-visibility-collapse
.box {
  border: 2px dotted rgb(96 139 168);
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.box > * {
  padding: 10px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 auto;
}
.hide {
  visibility: collapse;
}
```

{{EmbedLiveSample("wrapped-visibility-collapse")}}

Wenn dies ein Problem für Ihr Layout darstellt, kann dies ein Umdenken der Struktur erfordern, zum Beispiel jede Zeile in einen separaten Flex-Container zu setzen, damit sie keine Zeilen verschieben können.

### Verwendung von `visibility: hidden` und `display: none`

Im vorherigen Live-Beispiel versuchen Sie `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei Verwendung von `visibility: hidden` wird das Element unsichtbar gemacht, aber die Box bleibt in der Formatierungsstruktur, sodass es sich immer noch so verhält, als wäre es Teil des Layouts.
Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern die Struktur wird ebenfalls entfernt. Dies bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ausgeführt werden.
