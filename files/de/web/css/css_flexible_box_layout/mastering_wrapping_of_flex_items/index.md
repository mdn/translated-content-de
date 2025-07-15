---
title: Flex-Items umbruchsicher beherrschen
short-title: Flex-Items umbrechen
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Flexbox wurde als eindimensionales Layout-Tool entwickelt – es befasst sich damit, Elemente als Reihe oder Spalte anzuordnen, aber nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Items in neue Zeilen umzubrechen, sodass neue Reihen entstehen, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist und neue Spalten, wenn `flex-direction` auf `column` gesetzt ist. Dieser Leitfaden erklärt das Umbrechen bei Flexbox, wofür es entwickelt wurde und in welchen Situationen das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) anstelle von Flexbox verwendet werden sollte.

## Dinge umbrechen lassen

Der Anfangswert der Eigenschaft {{cssxref("flex-wrap")}} ist `nowrap`. Das bedeutet, dass, wenn ein Satz Flex-Items zu breit für ihren Flex-Container ist, sie diesen überschreiten. Um sie umbrechen zu lassen, wenn sie zu breit sind, fügen Sie die Eigenschaft `flex-wrap` mit dem Wert `wrap` hinzu oder verwenden Sie die Kurzschreibweise {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Die Elemente umbrechen dann auf neue Zeilen, wenn sie ihren Container überlaufen.

In diesem Beispiel gibt es zehn Flex-Items mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht mehr genügend Platz vorhanden ist, um ein weiteres 160-Pixel-Element in einer Reihe zu platzieren, wird eine neue Flex-Zeile erstellt. Neue Zeilen werden nach Bedarf erstellt, bis alle Elemente platziert sind. Da die Elemente wachsen können, dehnen sie sich aus, um jede Zeile vollständig zu füllen. Wenn sich nur ein Element in der letzten Zeile befindet, dehnt es sich aus, um die gesamte Zeile zu füllen.

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

Dasselbe geschieht bei Flex-Spalten. Um neue Spalten zu umbrechen und zu erstellen, muss der Container eine Höhe haben. Im Fall von Spalten dehnen sich die Elemente vertikal aus, um jede Spalte vollständig zu füllen.

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

Das Umbrechen funktioniert wie erwartet, wenn es mit `flex-direction` kombiniert wird. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Elemente am Endrand des Containers und ordnen sich in umgekehrter Reihenfolge an.

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

Beachten Sie, dass das Umkehren nur in der Inline-Reihenrichtung erfolgt. Wir beginnen von rechts und gehen dann zur zweiten Linie, starten erneut von rechts. Wir kehren nicht in beide Richtungen um und beginnen nicht von unten nach oben im Container!

## Eindimensionales Layout erklärt

Wie wir in den obigen Beispielen gesehen haben, wenn unsere Elemente wachsen und schrumpfen dürfen, werden, wenn sich weniger Elemente in der letzten Zeile oder Spalte befinden, diese Elemente wachsen, um den verfügbaren Platz zu füllen.

Es gibt keine Flexbox-Funktionen, um Elemente in einer Zeile mit Elementen in der darüberliegenden Zeile auszurichten – jede Flex-Zeile verhält sich wie ein neuer Flex-Container. Sie befasst sich mit der Verteilung des Raums entlang der Hauptachse. Wenn es nur ein Element gibt und dieses Element wachsen darf, füllt es die Achse genauso aus, wie wenn Sie einen einzelnen Element-Flex-Container hätten. Wenn Sie ein Layout in zwei Dimensionen wünschen, dann benötigen Sie wahrscheinlich ein Grid-Layout.

Dieses Beispiel zeigt den Unterschied, indem es ein CSS-Grid-Layout verwendet, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, wie passen, unter Verteilung des zusätzlichen Raums zwischen allen Spalten. Wir verwenden dasselbe HTML wie im [Flexbox umgebrochene Reihen-Beispiel](#dinge_umbrechen_lassen) oben, stellen nun jedoch `display: grid` darauf ein. Anstelle der {{cssxref("flex")}}-Kurzschreibweise, die außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite des Elements und die Fähigkeit zu wachsen direkt auf den Container über {{cssxref("grid-template-columns")}}. Mit CSS-Grid bleibt das letzte Element in seiner Gitterzelle; Grid-Elemente dehnen sich nicht, wenn es in der letzten Reihe weniger davon gibt.

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

Dies ist der Unterschied zwischen ein- und zweidimensionalen Layouts. Bei einer eindimensionalen Layoutmethode wie Flexbox steuern wir nur die Reihe oder Spalte. Bei einem zweidimensionalen Grid-Layout steuern wir beides gleichzeitig. Wenn Sie die Verteilung des Raums Reihe für Reihe wünschen, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS-Grid.

## Wie funktionieren Flexbox-basierte Rastersysteme?

Flexbox-basierte Layouts können gezwungen werden, sich wie Rastersysteme auszurichten, aber das ist nicht der beabsichtigte Zweck von Flexbox. Wenn Sie Flex-Items prozentuale Breiten zuweisen – entweder mit `flex-basis` oder indem Sie dem Element selbst eine Breite hinzufügen und den Wert von `flex-basis` als `auto` belassen – können Sie den Eindruck eines zweidimensionalen Layouts erwecken.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um unflexible Flex-Items zu erzeugen. Die Flexibilität wird über Prozentsätze gesteuert.

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

Diese Technik ermöglicht es Ihnen, Flex-Items auf der Querachse auszurichten. Wenn Sie jedoch beginnen, Breiten auf Flex-Items auf diese Weise hinzuzufügen oder leere Flex-Items hinzuzufügen, um Platz einzunehmen, ist das ein gutes Zeichen dafür, dass Sie möglicherweise zu einem CSS-Grid-Layout für diese Komponente wechseln sollten.

## Zwischenräume zwischen Items erzeugen

Um Lücken oder Zwischenräume zwischen Flex-Items zu erzeugen, verwenden Sie die Eigenschaft {{CSSXref("gap")}} direkt auf dem Flex-Container, um einen festen Abstand zwischen angrenzenden Flex-Items zu schaffen. Die `gap`-Eigenschaft ist eine Kurzschreibweise für `row-gap` und `column-gap`. Diese Eigenschaften spezifizieren die Größe der Abstände zwischen Zeilen und Spalten innerhalb von Grid-, Flex- und Mehrspalten-Layouts.

Die `gap`-Eigenschaft ist nicht das Einzige, was Abstände zwischen Items schaffen kann. Margins, Padding, `justify-content` und `align-content` können ebenfalls die Größe des Abstands erhöhen, was den tatsächlichen Abstand betrifft.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` auf beiden Achsen unterscheidet, versuchen Sie, den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert zur `.box > *`-Regel im untenstehenden Stylesheet hinzuzufügen. Klicken Sie auf die Schaltfläche "Zurücksetzen", um zu den vorherigen Werten zurückzukehren.

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

## Kollabierte Items

Die Flexbox-Spezifikation beschreibt, was passieren sollte, wenn ein Flex-Item durch Setzen von `visibility: collapse` auf ein Item kollabiert ist. Siehe die MDN-Dokumentation zur {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Wenn Sie `visibility: collapse` auf einem Flex-Item angeben, wird es zu einem _kollabierten Flex-Item_ und erzeugt einen Effekt ähnlich dem von `visibility: collapse` auf einer Tabellenzeile oder -spalte: Das kollabierte Flex-Item wird vollständig aus dem Rendering entfernt, hinterlässt jedoch einen "Stützpfeiler", der die Querschnittsgröße der Flex-Zeile stabil hält. Daher, wenn ein Flex-Container nur eine Flex-Zeile hat, kann das dynamische Kollabieren oder Entkollabieren von Items die Hauptgröße des Flex-Containers ändern, hat jedoch garantiert keinen Einfluss auf seine Querschnittsgröße und wird nicht dazu führen, dass das restliche Layout der Seite "wackelt". Flex-Line-Umbrechung _wird_ jedoch nach dem Kollabieren erneut durchgeführt, sodass sich die Querschnittsgröße eines Flex-Containers mit mehreren Zeilen ändern könnte oder nicht." - [Kollabierte Items](https://drafts.csswg.org/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Items mit JavaScript ansprechen möchten, um beispielsweise Inhalte anzuzeigen und zu verbergen. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel enthält der nicht umbrechende Flex-Container eine Zeile mit drei Flex-Items, die auf gleiche Größen eingestellt sind. Das dritte Item hat mehrere Zeilen mit Inhalt, die den Container wachsen lassen. Der Standard für `align-items` ist `normal`; für Flex-Items verhält sich `normal` wie `stretch`, sodass sich alle Items standardmäßig dehnen und die Querschnittshöhe des Containers füllen.

Das Item, das die Querschnittsgröße erzeugt, ist auf `visibility: collapse` gesetzt, was das Flex-Item zusammenklappen oder ausblenden lässt, abhängig vom Browser. In jedem Fall behält der Flex-Container einen _Stützpfeiler_ der Querschnittsgröße, auch wenn er nicht sichtbar ist. Auf diese Weise wird die Querschnittsgröße des einzeiligen Flex-Containers nicht verändert, wenn das Item sichtbar gemacht wird. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert auf `visible` ändern, sehen Sie, wie das Item erscheint und der Hauptgrößenraum zwischen nicht zusammengeklappten Items neu verteilt wird, während die Querschnittsgröße unverändert bleibt.

> [!NOTE]
> Verwenden Sie Firefox für das folgende Beispiel, da andere gängige Browser `collapse` wie `hidden` behandeln.

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

Das oben Gesagte betraf einen einzeiligen, nicht umbrechenden Flex-Container mit einer definierten Größe von `600px`, sodass die Breite gleich bleibt, egal ob das Item sichtbar oder kollabiert ist. Es ist wichtig zu verstehen, dass, obwohl der Container einen Stützpfeiler der Querschnittsgröße des kollabierten Items beibehält, die Hauptgröße nicht beibehalten wird. Mehrzeilige Flex-Container umordnen ihre Items erneut, nachdem kollabierte Items aus dem Rendering entfernt wurden. Der neue Raum, den ein zusammengeschobenes Item in der Hauptachse hinterlässt, kann dazu führen, dass nicht kollabierte Items anders platziert werden, als wenn das Item nicht kollabiert wäre. Da jede Zeile wie ein unabhängiger einzeiliger Flex-Container angeordnet ist, dessen Zusammensetzung sich nach dem Kollabieren ändern kann, könnte sich auch die Größe der Querschnittsachse ändern.

Das folgende Beispiel zeigt dieses Verhalten. Das dritte Flex-Item ist kollabiert, sodass es keinen Platz entlang der Hauptachse einnimmt (die Inline-Größe ist `0`). Wenn es kollabiert ist, liegt sein Stützpfeiler in der ersten Zeile nach dem vierten Item, wobei die erste Zeile hoch genug ist, um die drei Textzeilen zu tragen, die das dritte Item gehabt hätte. Dann, wenn Sie das Item entkollabieren (z.B. durch Entfernen der Klasse `collapse`), gibt es nicht mehr genug horizontalen Platz für das fünfte Item in der ersten Zeile, und es wird in die zweite Zeile versetzt. Dies führt dazu, dass die zweite Zeile wächst, um die zwei Textzeilen ihres neuen Mitglieds zu füllen, und das letzte Flex-Item auf eine neue Zeile gedrückt wird. Mit einer höheren zweiten Zeile und einer neuen dritten Zeile ist der Flex-Container viel höher als zuvor.

> [!NOTE]
> Verwenden Sie Firefox für das folgende Beispiel, da andere gängige Browser `collapse` wie `hidden` behandeln.

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

Wenn dies ein Problem für Ihr Layout darstellt, kann es erforderlich sein, die Struktur zu überdenken, indem Sie beispielsweise jede Zeile in einen separaten Flex-Container setzen, sodass sie die Zeilen nicht verschieben können.

### Verwendung von `visibility: hidden` und `display: none`

In den vorherigen Live-Beispielen versuchen Sie, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Mit `visibility: hidden` wird das Element unsichtbar gemacht, aber das Kästchen bleibt in der Formatierungsstruktur erhalten, sodass es sich immer noch so verhält, als ob es Teil des Layouts wäre.
Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern die Struktur wird ebenfalls entfernt. Das bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ausgeführt werden.
