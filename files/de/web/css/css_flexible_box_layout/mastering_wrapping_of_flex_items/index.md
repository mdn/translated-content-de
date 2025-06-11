---
title: Beherrschen des Umbruchs von Flex-Items
short-title: Flex-Items umbrechen
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Flexbox wurde als ein-dimensionales Layout-Tool entwickelt – es befasst sich mit der Anordnung von Elementen in einer Reihe oder Spalte, aber nicht beidem gleichzeitig. Es ist jedoch möglich, Flex-Items auf neue Linien umzubrechen, wodurch neue Reihen entstehen, wenn {{cssxref("flex-direction")}} `row` ist, und neue Spalten, wenn `flex-direction` `column` ist. Dieser Leitfaden erklärt das Umbrechen von Flexbox, wofür es konzipiert wurde und in welchen Situationen das [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) anstelle von Flexbox erforderlich ist.

## Dinge umbrechen lassen

Der Anfangswert der Eigenschaft {{cssxref("flex-wrap")}} ist `nowrap`. Das bedeutet, wenn eine Gruppe von Flex-Items zu breit für ihren Flex-Container ist, werden sie diesen überfluten. Um sie umbrechen zu lassen, wenn sie zu breit werden, fügen Sie die Eigenschaft `flex-wrap` mit einem Wert von `wrap` hinzu oder verwenden Sie die Kurzform {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Die Items werden dann beim Überfluten ihres Containers auf neue Linien umgebrochen.

In diesem Beispiel gibt es zehn Flex-Items mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht mehr genug Platz für ein weiteres 160-Pixel-Item in einer Reihe vorhanden ist, wird eine neue Flex-Linie erstellt. Neue Linien werden nach Bedarf erstellt, bis alle Items platziert sind. Da die Items wachsen können, werden sie sich ausdehnen, um jede Reihe vollständig auszufüllen. Wenn sich nur ein Item in der letzten Linie befindet, wird es sich strecken, um die gesamte Linie zu füllen.

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

Dasselbe passiert bei Flex-Spalten. Um neue Spalten zu erstellen und zu umbrechen, muss der Container eine Höhe haben. Im Fall von Spalten strecken sich die Items vertikal, um jede Spalte vollständig zu füllen.

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

## Umbrechen in Kombination mit flex-direction

Umbrechen funktioniert wie erwartet, wenn es mit `flex-direction` kombiniert wird. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Items vom Endrand des Containers aus und ordnen sich in umgekehrter Reihenfolge an.

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

Beachten Sie, dass die Umkehrung nur in der Zeilenrichtung erfolgt. Wir beginnen rechts und gehen dann zur zweiten Linie über und beginnen erneut von rechts. Wir kehren nicht in beide Richtungen um, beginnend von unten nach oben kommend!

## Ein-dimensionale Layouts erklärt

Wie wir aus den obigen Beispielen gesehen haben, wenn unsere Items wachsen und schrumpfen dürfen, wachsen diese Items, wenn in der letzten Reihe oder Spalte weniger Items vorhanden sind, um den verfügbaren Platz auszufüllen.

Es gibt keine Flexbox-Features, die Items in einer Reihe dazu bringen, sich mit Items in der darüber liegenden Reihe auszurichten – jede Flex-Linie agiert wie ein neuer Flex-Container. Sie befasst sich mit der Verteilung des Raumangebots entlang der Hauptachse. Wenn nur ein Item vorhanden ist und dieses Item wachsen darf, wird es die Achse genauso ausfüllen, als ob Sie einen ein Item Flex-Container hätten. Wenn Sie ein Layout in zwei Dimensionen wollen, dann sollten Sie wahrscheinlich Grid-Layout verwenden.

Dieses Beispiel zeigt den Unterschied, indem CSS-Grid-Layout verwendet wird, um ein Layout mit so vielen Spalten von mindestens `160px` Breite zu erstellen, wie hineinpassen, wobei der zusätzliche Platz zwischen alle Spalten verteilt wird. Wir verwenden dasselbe HTML wie das [Flexbox-Umbrechen-Reihenbeispiel](#dinge_umbrechen_lassen) oben, setzen jedoch `display: grid` darauf. Anstelle der Kurzform {{cssxref("flex")}}, die außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite des Items und die Fähigkeit zu wachsen direkt auf dem Container mit {{cssxref("grid-template-columns")}}. Bei CSS-Grid bleibt das letzte Item in seiner Gitterzelle; Grid-Items dehnen sich nicht, wenn es in der letzten Reihe weniger von ihnen gibt.

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

Dies ist der Unterschied zwischen ein- und zweidimensionalen Layouts. Bei einer ein-dimensionalen Layoutmethode wie Flexbox steuern wir nur die Reihe oder Spalte. Bei einem zweidimensionalen Grid-Layout steuern wir beide gleichzeitig. Wenn Sie die Raumaufteilung Reihe für Reihe wollen, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS-Grid.

## Wie funktionieren flexbox-basierte Gridsysteme?

Flexbox-basierte Layouts können gezwungen werden, sich als Gridsysteme auszurichten, aber das ist nicht der beabsichtigte Zweck von Flexbox. Wenn Sie den Flex-Items prozentuale Breiten zuweisen – entweder mit `flex-basis` oder indem Sie dem Item selbst eine Breite zuweisen und den Wert von `flex-basis` als `auto` belassen – können Sie den Eindruck eines zweidimensionalen Layouts erwecken.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um nicht flexible Flex-Items zu erstellen. Die Flexibilität wird über Prozentsätze gesteuert.

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

Diese Technik ermöglicht es Ihnen, Flex-Items an der Kreuzachse auszurichten. Wenn Sie jedoch feststellen, dass Sie auf diese Weise Breiten zu Flex-Items hinzufügen oder leere Flex-Items hinzufügen, um Platz zu beanspruchen, ist das ein guter Hinweis darauf, dass Sie möglicherweise zu CSS-Grid-Layout für diese Komponente wechseln sollten.

## Erstellung von Abständen zwischen Elementen

Um Lücken oder Abstände zwischen Flex-Items zu erzeugen, verwenden Sie die Eigenschaft {{CSSXref("gap")}} direkt auf dem Flex-Container, um einen festen Raum zwischen benachbarten Flex-Items zu schaffen. Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`. Diese Eigenschaften geben die Größe der Abstände zwischen Reihen und Spalten innerhalb von Grid-, Flex- und Multispalten-Layouts an.

Die `gap`-Eigenschaft ist nicht das einzige, das Raum zwischen Elementen hinzufügen kann. Ränder, Polsterungen, `justify-content` und `align-content` können auch die Größe des Abstands vergrößern und die tatsächliche Größe der Lücke beeinflussen.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` in beiden Achsen unterscheidet, versuchen Sie, den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert zur Regel `.box > *` im folgenden Stylesheet hinzuzufügen. Klicken Sie auf die Schaltfläche "Zurücksetzen", um zu den vorherigen Werten zurückzukehren.

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

Die Flexbox-Spezifikation beschreibt, was passieren sollte, wenn ein Flex-Item durch das Setzen von `visibility: collapse` auf ein Element zusammenbricht. Sehen Sie die MDN-Dokumentation zur Eigenschaft {{cssxref("visibility")}}. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Das Spezifizieren von `visibility: collapse` auf einem Flex-Item verursacht, dass es zu einem _zusammengebrochenen Flex-Item_ wird und einen Effekt ähnlich `visibility: collapse` auf einer Tabellenreihe oder Tabellen-Säule erzeugt: Das zusammengebrochene Flex-Item wird vollständig aus dem Rendering entfernt, hinterlässt aber einen "Strut", der die Kreuz-Größe der Flex-Linie stabil hält. Wenn ein Flex-Container nur eine Flex-Linie hat, kann das dynamische Zusammenbrechen oder Entfalten von Items die Hauptgröße des Flex-Containers ändern, hat jedoch garantiert keinen Einfluss auf seine Kreuzgröße und führt nicht dazu, dass das Layout des restlichen Seiteninhalts "schwankt". Das Umbrechen der Flex-Linien wird _jedoch_ nach dem Zusammenbruch erneut durchgeführt, sodass sich die Kreuzgröße eines Flex-Containers mit mehreren Linien möglicherweise ändert oder auch nicht." - [Zusammengebrochene Elemente](https://drafts.csswg.org/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Items mit JavaScript ansprechen möchten, um beispielsweise Inhalte anzuzeigen und zu verbergen. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel enthält der nicht-umbruchene Flex-Container eine Reihe mit drei Flex-Items, die sich auf gleiche Größen einstellen sollen. Das dritte Item hat mehrere Textzeilen, die den Container wachsen lassen. Der Standard für `align-items` ist `normal`; für Flex-Items verhält sich `normal` wie `stretch`, sodass sich alle Items standardmäßig strecken und die Kreuzgröße des Containers ausfüllen.

Das Item, das die Kreuzgröße erzeugt, wird auf `visibility: collapse` gesetzt, was das Flex-Item je nach Browser zusammenbrechen oder ausblenden lässt. In jedem Fall behält der Flex-Container einen _Strut_ der Kreuzgröße bei, auch wenn es nicht sichtbar ist. Auf diese Weise wird die Kreuzgröße des Flex-Containers mit einer einzelnen Linie nicht geändert, wenn das Item sichtbar gemacht wird. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert auf `visible` ändern, werden Sie das Item sehen, und der Haupt-Größenplatz wird zwischen nicht zusammengeschrumpften Items umverteilt, während die Kreuzgröße unverändert bleibt.

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

Das obige war ein einzeiliger, nicht-umbruchener Flex-Container mit einer festen Größe von `600px`, sodass die Breite dieselbe ist, egal ob das Item sichtbar oder zusammengebrochen ist. Es ist wichtig zu verstehen, dass, obwohl der Container einen Strut der zusammengebrochenen Kreuzgröße des Items behält, die Hauptgröße nicht erhalten bleibt. Mehrzeilige Flex-Container umbrechen ihre Items nach dem Entfernen der zusammengebrochenen Items aus der Darstellung neu. Der neue Platz, den ein zusammengebrochenes Item in der Hauptachse hinterlässt, kann dazu führen, dass nicht-zusammengebrochene Items anders platziert werden, als wenn das Item nicht zusammengebrochen wäre. Da jede Linie wie ein unabhängiger einzeiliger Flex-Container ausgelegt wird und sich ihre Zusammensetzung nach dem Zusammenbruch ändern kann, kann sich ihre Kreuzachse-Größe ebenfalls ändern.

Das folgende Beispiel zeigt dieses Verhalten. Das dritte Flex-Item ist zusammengebrochen, so dass es null Platz entlang der Hauptachse einnimmt (die Inline-Größe beträgt `0`). Wenn es zusammengebrochen ist, befindet sich sein Strut in der ersten Reihe nach dem vierten Item, wobei die erste Reihe hoch genug ist, um die drei Textzeilen zu fassen, die das dritte Item gehabt hätte. Wenn Sie dann das Item (z.B. durch Entfernen der Klasse `collapse`) entkollabieren, gibt es keinen ausreichend horizontalen Raum mehr für das fünfte Item in der ersten Reihe, und es wird in die zweite verschoben. Dies führt dazu, dass die zweite Reihe wächst, um die zwei Textzeilen ihres neuen Mitglieds aufzunehmen, und das letzte Flex-Item wird in eine neue Reihe verschoben. Mit einer höheren zweiten Linie und einer neuen dritten Linie ist der Flex-Container viel höher, als er zuvor war.

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

Wenn dies ein Problem für Ihr Layout darstellt, erfordert es möglicherweise ein Überdenken der Struktur, zum Beispiel, indem jede Reihe in einen separaten Flex-Container gelegt wird, so dass sie keine Reihen verschieben können.

### Verwendung von `visibility: hidden` und `display: none`

In den vorherigen Live-Beispielen versuchen Sie, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei Verwendung von `visibility: hidden` wird das Item unsichtbar gemacht, aber die Box bleibt in der Formatierungsstruktur erhalten, sodass sie sich weiterhin so verhält, als ob sie Teil des Layouts wäre.
Wenn Sie `display: none` verwenden, wird das Item vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern auch die Struktur wird entfernt, was bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ablaufen.
