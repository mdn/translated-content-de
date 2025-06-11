---
title: Flex-Items einpacken meistern
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

Flexbox wurde als ein eindimensionales Layout-Tool entwickelt — es befasst sich mit der Anordnung von Elementen als Zeile oder Spalte, jedoch nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Items in neue Zeilen zu verpacken, indem neue Zeilen erstellt werden, wenn {{cssxref("flex-direction")}} `row` ist und neue Spalten, wenn `flex-direction` `column` ist. Dieser Leitfaden erklärt das Einpacken in Flexbox, wofür es gedacht ist und welche Situationen [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) anstelle von Flexbox erfordern.

## Dinge einpacken lassen

Der Anfangswert der Eigenschaft {{cssxref("flex-wrap")}} ist `nowrap`. Das bedeutet, wenn eine Gruppe von Flex-Items zu breit für ihren Flex-Container ist, werden sie diesen überlaufen. Um sie einwickeln zu lassen, sobald sie zu breit sind, fügen Sie die Eigenschaft `flex-wrap` mit einem Wert von `wrap` hinzu oder verwenden Sie die Kurzschreibweise {{cssxref("flex-flow")}} mit Werten von `row wrap` oder `column wrap`. Die Elemente werden dann auf neue Zeilen verpackt, wenn sie ihren Container überlaufen.

In diesem Beispiel gibt es zehn Flex-Items mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht genügend Platz vorhanden ist, um ein weiteres 160-Pixel-Element in eine Zeile zu platzieren, wird eine neue Flexlinie erstellt. Neue Zeilen werden je nach Bedarf erstellt, bis alle Elemente platziert sind. Da die Elemente wachsen können, dehnen sie sich aus, um jede Zeile vollständig auszufüllen. Wenn sich nur ein Artikel auf der letzten Zeile befindet, wird er gedehnt, um die gesamte Zeile zu füllen.

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

Dasselbe passiert mit Flex-Spalten. Um neue Spalten zu wickeln und zu erstellen, muss der Container eine Höhe haben. Im Falle von Spalten strecken sich die Elemente vertikal, um jede Spalte vollständig auszufüllen.

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

## Einwickeln und flex-direction

Einwickeln funktioniert, wie Sie vielleicht erwarten, wenn es mit `flex-direction` kombiniert wird. Wenn `flex-direction` auf `row-reverse` eingestellt ist, beginnen die Elemente am Endrand des Containers und ordnen sich in umgekehrter Reihenfolge in Zeilen an.

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

Beachten Sie, dass die Umkehrung nur in der Inline-, Reihenrichtung erfolgt. Wir beginnen rechts und gehen dann in die zweite Zeile und beginnen erneut von rechts. Wir kehren nicht in beiden Richtungen um, beginnen nicht von unten und arbeiten uns im Container nach oben!

## Eindimensionales Layout erklärt

Wie wir aus den obigen Beispielen gesehen haben, wenn unsere Elemente wachsen und schrumpfen dürfen, wachsen diese Elemente, wenn sich weniger Elemente in der letzten Zeile oder Spalte befinden, um den verfügbaren Platz zu füllen.

Es gibt keine Flexbox-Funktionen, um Elemente in einer Zeile mit Elementen in der darüberliegenden Zeile auszurichten — jede Flexlinie verhält sich wie ein neuer Flex-Container. Sie kümmert sich um die Verteilung des Raums entlang der Hauptachse. Wenn nur ein Element vorhanden ist und dieses Element wachsen darf, füllt es die Achse genauso aus, als ob Sie einen ein-elementigen Flex-Container hätten. Wenn Sie ein Layout in zwei Dimensionen wünschen, möchten Sie wahrscheinlich Grid-Layout.

Dieses Beispiel zeigt den Unterschied, indem das CSS-Grid-Layout verwendet wird, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, wie möglich sind, und den zusätzlichen Raum zwischen allen Spalten aufteilt. Wir verwenden dasselbe HTML wie im obigen [Flexbox Wrapped Row-Beispiel](#dinge_einpacken_lassen), setzen jedoch `display: grid` darauf. Anstatt die {{cssxref("flex")}}-Kurzschreibweise zu verwenden, die außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite und die Wachstumsfähigkeit des Elements direkt auf dem Container mit {{cssxref("grid-template-columns")}} fest. Beim CSS-Grid bleibt das letzte Element in seiner Rasterzelle; Rasterelemente strecken sich nicht, wenn es weniger davon in der letzten Zeile gibt.

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

Dies ist der Unterschied zwischen ein- und zweidimensionalen Layouts. In einer eindimensionalen Layoutmethode wie Flexbox steuern wir nur die Zeile oder die Spalte. In einem zweidimensionalen Rasterlayout steuern wir beides gleichzeitig. Wenn Sie die Verteilung des Raums Zeile für Zeile wünschen, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS-Grid.

## Wie funktionieren Flexbox-basierte Gridsysteme?

Flexbox-basierte Layouts können gezwungen werden, sich wie Gridsysteme auszurichten, aber das ist nicht der beabsichtigte Zweck von Flexbox. Wenn Sie Flex-Items Prozentbreiten zuweisen — entweder mit `flex-basis` oder indem Sie einem Element selbst eine Breite hinzufügen und den Wert von `flex-basis` auf `auto` belassen — können Sie den Eindruck eines zweidimensionalen Layouts erwecken.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um unflexible Flex-Items zu erstellen. Die Flexibilität wird über Prozentsätze gesteuert.

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

Diese Technik ermöglicht es Ihnen, Flex-Items auf der Querachse auszurichten. Wenn Sie jedoch feststellen, dass Sie auf diese Weise Breiten zu Flex-Items hinzufügen oder leere Flex-Items hinzufügen, um Platz einzunehmen, ist das ein gutes Zeichen dafür, dass Sie möglicherweise zum CSS-Grid-Layout für diese Komponente wechseln möchten.

## Rinnen zwischen Elementen erstellen

Um Lücken oder Rinnen zwischen Flex-Items zu erstellen, verwenden Sie die {{CSSXref("gap")}}-Eigenschaft direkt auf dem Flex-Container, um einen festen Raum zwischen angrenzenden Flex-Items zu schaffen. Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`. Diese Eigenschaften geben die Größe der Rinnen zwischen Zeilen und Spalten innerhalb von Raster-, Flex- und Mehrspalten-Layouts an.

Die `gap`-Eigenschaft ist nicht das Einzige, was Platz zwischen Elementen schaffen kann. Abstände, Polsterungen, `justify-content` und `align-content` können auch die Größe der Rinne erhöhen und die tatsächliche Größe der Lücke beeinflussen.

Um zu sehen, wie sich die `gap`-Eigenschaft im Vergleich zu `margin` in beiden Achsen unterscheidet, ändern Sie den Wert der `gap`-Eigenschaft im Container `.box` und fügen Sie einen `margin`-Wert zur Regel `.box > *` im Stylesheet unten hinzu. Klicken Sie auf die Schaltfläche "Zurücksetzen", um die vorherigen Werte wiederherzustellen.

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

## Zusammengeklappte Elemente

Die Flexbox-Spezifikation beschreibt, was passieren soll, wenn ein Flex-Item durch Setzen von `visibility: collapse` auf ein Element zusammengeklappt wird. Siehe die MDN-Dokumentation für die {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> „Das Festlegen von `visibility: collapse` auf einem Flex-Item lässt es zu einem _zusammengeklappten Flex-Item_ werden und erzeugt einen Effekt ähnlich wie `visibility: collapse` auf einer Tabellereihe oder Tabellenspalte: Das zusammengeklappte Flex-Item wird vollständig aus der Anzeige entfernt, hinterlässt jedoch einen „stütze“, der die Querschnittsgröße der Flexlinie stabil hält. Daher, wenn ein Flex-Container nur eine Flexlinie hat, kann das dynamische Zusammenklappen oder Entkollen von Elementen die Hauptgröße des Flex-Containers ändern, hat jedoch garantiert keinen Einfluss auf seine Querschnittsgröße und bringt das restliche Layout der Seite nicht ins Wanken. Das Flexlinien-Wrap wird nach dem Zusammenklappen jedoch neu durchgeführt, sodass sich die Querschnittsgröße eines Flex-Containers mit mehreren Linien möglicherweise ändert." - [Zusammengeklappte Elemente](https://drafts.csswg.org/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Items mit JavaScript ansprechen möchten, um beispielsweise Inhalte zu zeigen und zu verbergen. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel enthält der nicht verpackende Flex-Container eine Reihe mit drei Flex-Items, die sich auf gleiche Größen erstrecken. Das dritte Element hat mehrere Inhaltszeilen, die den Container wachsen lassen. Der Standardwert für `align-items` ist `normal`; für Flex-Items verhält sich `normal` wie `stretch`, sodass sich alle Elemente standardmäßig dehnen und die Querschnittshöhe des Containers ausfüllen.

Das Element, das die Querschnittsgröße erzeugt, ist auf `visibility: collapse` gesetzt, was das Flex-Item je nach Browser kollabieren oder ausblenden lässt. In beiden Fällen behält der Flex-Container eine Stütze der Querschnittsgröße bei, obwohl sie nicht sichtbar ist. So wird die Querschnittsgröße des einzeiligen Flex-Containers nicht ändern, falls das Element sichtbar wird. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert auf `visible` ändern, wird das Element sichtbar, und der Haupt-Raum wird zwischen nicht kollabierten Elementen umverteilt, während die Querschnittsgröße unverändert bleibt.

> [!NOTE]
> Verwenden Sie Firefox für das untenstehende Beispiel, da andere gängige Browser `collapse` als `hidden` behandeln.

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

Das oben war ein einzeiliger, nicht verpackender Flex-Container mit einer festen Größe von `600px`, sodass die Breite gleich bleibt, unabhängig davon, ob das Element sichtbar oder zusammengeklappt ist. Es ist wichtig zu verstehen, dass während der Container eine Stütze der Querschnittsgröße des zusammengeklappten Elements behält, die Hauptgröße nicht erhalten bleibt. Multi-Line-Flex-Container wickeln ihre Elemente nach dem Entfernen der kollabierten Items aus der Anzeige neu. Der neue Raum, den ein kollabiertes Item in der Haupt-Direktion zurücklässt, kann dazu führen, dass nicht kollabierte Items in einer anderen Zeile platziert werden, als wenn das Item nicht kollabiert wäre. Da jede Linie wie ein unabhängiger einzeiliger Flex-Container layoutt und ihre Zusammensetzung sich nach dem Zusammenklappen ändern kann, kann sich ihre Querschnittsgröße ebenfalls ändern.

Das folgende Beispiel zeigt dieses Verhalten. Das dritte Flex-Item ist kollabiert, sodass es entlang der Hauptachse keinen Platz einnimmt (die inline-Größe ist `0`). Wenn kollabiert, ist seine Stütze auf der ersten Reihe nach dem vierten Item, wobei die erste Reihe hoch genug ist, um die drei Textzeilen zu fassen, die das dritte Item gehabt hätte. Wenn Sie das Element ausklappen (z.B. durch Entfernen der `collapse`-Klasse), ist nicht mehr genug horizontaler Platz für das fünfte Element in der ersten Reihe vorhanden und es wird zur zweiten verschoben. Dies führt dazu, dass die zweite Reihe wächst, um die beiden Textzeilen ihres neuen Mitglieds zu fassen, und das letzte Flex-Item wird in eine neue Zeile geschoben. Mit einer höheren zweiten Zeile und einer neuen dritten Zeile ist der Flex-Container wesentlich höher als vorher.

> [!NOTE]
> Verwenden Sie Firefox für das untenstehende Beispiel, da andere gängige Browser `collapse` als `hidden` behandeln.

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

Falls dies ein Problem für Ihr Layout verursacht, kann es erforderlich sein, die Struktur zu überdenken, indem Sie beispielsweise jede Zeile in einen separaten Flex-Container stecken, damit sie die Zeilen nicht verschieben können.

### Verwenden von `visibility: hidden` und `display: none`

In den vorherigen Live-Beispielen versuchen Sie, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei Verwendung von `visibility: hidden` wird das Element unsichtbar gemacht, aber die Box bleibt in der Formatierungsstruktur, sodass sie sich weiterhin verhält, als ob sie Teil des Layouts wäre.
Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern die Struktur wird auch entfernt. Das bedeutet, dass es von Zählern ignoriert wird und Dinge wie Übergänge nicht ausgeführt werden.
