---
title: Beherrschung des Umbruchs von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Flexbox wurde als eindimensionales Layout-Tool konzipiert — es befasst sich mit dem Anordnen von Elementen als Reihe oder Spalte, jedoch nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Elemente auf neue Zeilen zu umbrechen, wodurch neue Reihen entstehen, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist, und neue Spalten, wenn `flex-direction` auf `column` gesetzt ist. Dieser Leitfaden erklärt das Umbrechen in Flexbox, wofür es ausgelegt ist und in welchen Situationen das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) anstelle von Flexbox erforderlich ist.

## Dinge umbrechen lassen

Der Anfangswert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`. Das bedeutet, dass, wenn eine Gruppe von Flex-Elementen zu breit für ihren Flex-Container ist, sie diesen überlaufen werden. Um sie umbrechen zu lassen, wenn sie zu breit werden, fügen Sie die Eigenschaft `flex-wrap` mit einem Wert von `wrap` hinzu oder verwenden Sie die Kurzform {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Die Elemente werden dann in neue Zeilen umgebrochen, wenn sie ihren Container überlaufen.

In diesem Beispiel gibt es zehn Flex-Elemente mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht genug Platz vorhanden ist, um ein weiteres 160-Pixel-Element in einer Reihe zu platzieren, wird eine neue Flex-Linie erstellt. Neue Linien werden nach Bedarf erstellt, bis alle Elemente platziert sind. Da die Elemente wachsen können, dehnen sie sich aus, um jede Reihe vollständig auszufüllen. Wenn sich nur ein einziges Element auf der letzten Linie befindet, wird es sich über die gesamte Linie erstrecken.

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

Dasselbe passiert bei Flex-Spalten. Um umzubrechen und neue Spalten zu erstellen, muss der Container eine Höhe haben. Im Fall von Spalten dehnen sich die Elemente vertikal aus, um jede Spalte vollständig auszufüllen.

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

## Umbrechen und flex-direction

Das Umbrechen funktioniert wie erwartet, wenn es mit `flex-direction` kombiniert wird. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Elemente am Ende des Containers und legen sich in umgekehrter Reihenfolge an.

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

Beachten Sie, dass die Umkehrung nur in der Inline-Reihenrichtung erfolgt. Wir beginnen rechts und gehen dann auf die zweite Zeile und wieder beginnen wir rechts. Wir machen keine Umkehrung in beide Richtungen, indem wir von unten nach oben im Container starten!

## Erklärung des eindimensionalen Layouts

Wie wir in den obigen Beispielen gesehen haben, wenn unsere Elemente wachsen und schrumpfen dürfen, dann wachsen, wenn weniger Elemente in der letzten Reihe oder Spalte sind, diese Elemente, um den verfügbaren Platz auszufüllen.

Es gibt keine Flexbox-Funktionen, um Elemente in einer Reihe mit Elementen in der darüber liegenden Reihe auszurichten — jede Flex-Linie agiert wie ein neuer Flex-Container. Sie beschäftigt sich mit der Platzverteilung entlang der Hauptachse. Wenn es nur ein Element gibt und dieses wachsen kann, wird es die Achse ebenso ausfüllen, als ob Sie nur einen einzigen Flex-Container hätten. Wenn Sie ein Layout in zwei Dimensionen wünschen, dann sollten Sie wahrscheinlich das Grid-Layout verwenden.

Dieses Beispiel demonstriert den Unterschied, indem es das CSS-Grid-Layout verwendet, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, wie es passt, wobei der zusätzliche Platz zwischen allen Spalten verteilt wird. Wir verwenden dasselbe HTML wie im [Flexbox-Umbrochen-Beispiel](#dinge_umbrechen_lassen) oben, aber setzen `display: grid` darauf. Anstelle der {{cssxref("flex")}}-Kurzform, die außerhalb von Flexbox keine Wirkung hat, setzen wir die minimale Breite der Elemente und die Fähigkeit zu wachsen direkt auf den Container mit {{cssxref("grid-template-columns")}}. Mit CSS-Grid bleibt das letzte Element in seiner Rasterzelle; Gitterelemente dehnen sich nicht aus, wenn weniger von ihnen in der letzten Reihe sind.

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

Das ist der Unterschied zwischen ein- und zweidimensionalen Layouts. In einer eindimensionalen Layout-Methode wie Flexbox kontrollieren wir nur die Reihe oder Spalte. In einem zweidimensionalen Grid-Layout kontrollieren wir beides gleichzeitig. Wenn Sie die Platzverteilung Reihe für Reihe möchten, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS-Grid.

## Wie funktionieren Flexbox-basierte Gittersysteme?

Flexbox-basierte Layouts können gezwungen werden, sich wie Gittersysteme auszurichten, aber das ist nicht der beabsichtigte Zweck von Flexbox. Wenn Sie prozentuale Breiten für Flex-Elemente zuweisen — entweder durch Verwendung von `flex-basis` oder durch Hinzufügen einer Breite zum Element selbst und Beibehaltung des Wertes von `flex-basis` als `auto` — können Sie den Eindruck eines zweidimensionalen Layouts erwecken.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um unflexible Flex-Elemente zu erstellen. Die Flexibilität wird über Prozentsätze gesteuert.

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

Diese Technik ermöglicht es Ihnen, Flex-Elemente auf der Querachse auszurichten. Wenn Sie sich jedoch dabei ertappen, Flex-Elementen auf diese Weise Breiten hinzuzufügen oder leere Flex-Elemente hinzuzufügen, um Platz zu schaffen, ist das ein guter Hinweis darauf, dass Sie möglicherweise das CSS-Grid-Layout für diese Komponente in Betracht ziehen sollten.

## Erstellen von Abständen zwischen Elementen

Um Abstände oder "Gutters" zwischen Flex-Elementen zu erstellen, verwenden Sie die {{CSSXref("gap")}}-Eigenschaft direkt auf dem Flex-Container, um einen festen Raum zwischen angrenzenden Flex-Elementen zu schaffen. Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`. Diese Eigenschaften spezifizieren die Größe der Abstände zwischen Reihen und Spalten innerhalb von Grid-, Flex- und Mehrspalten-Layouts.

Die `gap`-Eigenschaft ist nicht das Einzige, das Platz zwischen Elementen schaffen kann. Ränder, Polsterungen, `justify-content` und `align-content` können ebenfalls die Größe der Abstände vergrößern und dadurch die tatsächliche Größe des Abstandes beeinflussen.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` auf beiden Achsen unterscheidet, versuchen Sie, den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert zur Regel `.box > *` im Stylesheet unten hinzuzufügen. Klicken Sie auf die Schaltfläche "Reset", um zu den vorherigen Werten zurückzukehren.

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

Die Flexbox-Spezifikation beschreibt, was passieren sollte, wenn ein Flex-Element durch Festlegen von `visibility: collapse` auf ein Element zusammenklappt. Siehe die MDN-Dokumentation zur {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Das Festlegen von visibility:collapse auf einem Flex-Element führt dazu, dass es zu einem zusammengeklappten Flex-Element wird, was einen Effekt ähnlich wie visibility:collapse auf einer Tabellenzeile oder -spalte bewirkt: Das zusammengeklappte Flex-Element wird vollständig aus der Darstellung entfernt, hinterlässt jedoch einen "Stützbalken", der die Quergröße der Flex-Linie stabil hält. Wenn ein Flex-Container nur eine Flex-Linie hat, können das dynamische Zusammenklappen oder Entkollabieren von Elementen die Hauptgröße des Flex-Containers ändern, aber garantiert nicht seine Quergröße beeinflussen und das Layout der restlichen Seite nicht zum "Wackeln" bringen. Das Flex-Linien-Umbruch erfolgt nach dem Zusammenklappen jedoch erneut, daher kann sich die Quergröße eines Flex-Containers mit mehreren Linien ändern oder auch nicht." - [Kollabierte Elemente](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Elemente mithilfe von JavaScript anvisieren möchten, um beispielsweise Inhalte anzuzeigen und zu verbergen. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel enthält der nicht umgebrochene Flex-Container eine Reihe mit drei Flex-Elementen, die auf gleichgroße Größen eingestellt sind. Das dritte Element hat mehrere Zeilen Inhalt, was den Container wachsen lässt. Der Standardwert für `align-items` ist `normal`; für Flex-Elemente verhält sich `normal` wie `stretch`, weshalb sich alle Elemente standardmäßig strecken und die Quergröße des Containers ausfüllen.

Das Element, das die Quergröße erzeugt, ist auf `visibility: collapse` gesetzt, wodurch das Flex-Element je nach Browser kollabiert oder verborgen wird. In jedem Fall behält der Flex-Container eine _Stützbalken_ der Quergröße, auch wenn dieser nicht sichtbar ist. Auf diese Weise ändert sich die Quergröße des einzeiligen Flex-Containers nicht, wenn das Element wieder sichtbar gemacht wird. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert auf `visible` ändern, sehen Sie, dass das Element erscheint und der Hauptgrößenraum zwischen nicht kollabierten Elementen neu verteilt wird, während die Quergröße unverändert bleibt.

> [!NOTE]
> Verwenden Sie Firefox für das folgende Beispiel, da andere gängige Browser `collapse` als `hidden` behandeln.

```html hidden live-sample___visibility-collapse
<p>
  <label><input type="checkbox" /> Toggle <code>visibility</code> value</label>
</p>
```

```html live-sample___visibility-collapse
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div class="collapse">Three <br />has <br />extra <br />text</div>
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
.collapse {
  visibility: collapse;
}
```

```css hidden live-sample___visibility-collapse
p:has(:checked) + div .collapse {
  visibility: visible;
}
```

{{EmbedLiveSample("visibility-collapse")}}

Das oben Genannte war ein einzeiliger, nicht umgebrochener Flex-Container mit einer festen Größe von `600px`, sodass unabhängig davon, ob das Element sichtbar oder kollabiert ist, die Breite gleich bleibt. Es ist wichtig zu verstehen, dass, obwohl der Container einen Stützbalken der kollabierten Quergröße des Elements behält, die Hauptgröße nicht erhalten bleibt. Mehrzeilige Flex-Container umbrechen ihre Elemente neu, nachdem zusammengeklappte Elemente aus der Darstellung entfernt wurden. Der neue Raum, den ein kollabiertes Element in der Hauptausrichtung hinterlässt, kann dazu führen, dass nicht zusammengeklappte Elemente in einer anderen Zeile platziert werden, als wenn das Element nicht zusammengeklappt wäre. Da jede Zeile so ausgelegt ist, als wäre sie ein unabhängiger einzeiliger Flex-Container und ihre Zusammensetzung sich nach dem Zusammenklappen ändern kann, kann sich auch ihre Querachsen-Größe ändern.

Das folgende Beispiel zeigt dieses Verhalten. Das dritte Flex-Element ist zusammengeklappt, sodass es keinen Platz entlang der Hauptachse einnimmt (die Inline-Größe ist `0`). Wenn es zusammengeklappt ist, befindet sich sein Stützbalken in der ersten Reihe nach dem vierten Element, wobei die erste Reihe hoch genug ist, um die drei Zeilen Text aufzunehmen, die das dritte Element gehabt hätte. Wenn Sie dann das Element entklappen (z.B. indem Sie die `collapse`-Klasse entfernen), gibt es nicht mehr genug horizontalen Platz für das fünfte Element in der ersten Reihe, und es bewegt sich zur zweiten. Dadurch wächst die zweite Reihe, um die zwei Zeilen Text ihres neuen Mitglieds aufzunehmen, und das letzte Flex-Element wird in eine neue Zeile verschoben. Mit einer höheren zweiten Linie und einer neuen dritten Linie ist der Flex-Container viel höher als zuvor.

> [!NOTE]
> Verwenden Sie Firefox für das folgende Beispiel, da andere gängige Browser `collapse` als `hidden` behandeln.

```html hidden live-sample___wrapped-visibility-collapse
<p>
  <label><input type="checkbox" /> Toggle <code>visibility</code> value</label>
</p>
```

```html live-sample___wrapped-visibility-collapse
<div class="box">
  <div>One</div>
  <div>Two is the width of this sentence.</div>
  <div class="collapse">Three <br />is <br />five <br />lines <br />tall.</div>
  <div>Four</div>
  <div>Five<br />Five</div>
  <div>Six</div>
  <div>Seven</div>
  <div>Eight</div>
  <div>Nine</div>
  <div>Ten</div>
  <div>Eleven is longer</div>
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
  min-width: 50px;
}
.collapse {
  visibility: collapse;
}
```

```css hidden live-sample___wrapped-visibility-collapse
p:has(:checked) + div .collapse {
  visibility: visible;
}
```

{{EmbedLiveSample("wrapped-visibility-collapse", "", "300")}}

Wenn dies ein Problem für Ihr Layout darstellt, kann es erforderlich sein, die Struktur zu überdenken, zum Beispiel, indem jede Zeile in einen separaten Flex-Container gelegt wird, damit sie sich nicht verschieben können.

### Verwendung von `visibility: hidden` und `display: none`

In den vorherigen Live-Beispielen, versuchen Sie, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei Verwendung von `visibility: hidden` wird das Element unsichtbar gemacht, aber das Kästchen bleibt in der Formatierungsstruktur, sodass es sich weiterhin verhält, als wäre es Teil des Layouts.

Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern auch die Struktur wird entfernt. Das bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ausgeführt werden.
