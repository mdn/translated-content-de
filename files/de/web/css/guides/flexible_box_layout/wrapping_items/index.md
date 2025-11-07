---
title: Beherrschen des Umbruchs von Flex-Elementen
short-title: Umbruch von Flex-Elementen
slug: Web/CSS/Guides/Flexible_box_layout/Wrapping_items
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Flexbox wurde als eindimensionales Layout-Tool entwickelt — es befasst sich mit dem Anordnen von Elementen in einer Zeile oder Spalte — aber nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Elemente auf neue Linien umzubrechen, wobei neue Zeilen erstellt werden, wenn {{cssxref("flex-direction")}} `row` ist und neue Spalten, wenn `flex-direction` `column` ist. Dieser Leitfaden erklärt Flexbox-Umbrüche, wofür sie gedacht sind und in welchen Situationen ein [CSS-Grid-Layout](/de/docs/Web/CSS/Guides/Grid_layout) anstelle von Flexbox erforderlich ist.

## Dinge umbrechen lassen

Der anfängliche Wert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`. Das bedeutet, wenn eine Gruppe von Flex-Elementen zu breit für ihren Flex-Container ist, werden sie diesen überlaufen. Um sie umbrechen zu lassen, sobald sie zu breit sind, fügen Sie die `flex-wrap`-Eigenschaft mit einem Wert von `wrap` hinzu oder verwenden Sie die Kurzform {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Die Elemente werden dann auf neue Linien umgebrochen, wenn sie ihren Container überlaufen.

In diesem Beispiel gibt es zehn Flex-Elemente mit einer `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht genug Platz vorhanden ist, um ein weiteres 160-Pixel-Element in einer Zeile zu platzieren, wird eine neue Flex-Linie erstellt. Neue Linien werden bei Bedarf erstellt, bis alle Elemente platziert sind. Da die Elemente wachsen können, werden sie sich vollständig über jede Zeile ausdehnen. Wenn sich nur ein Element auf der letzten Linie befindet, wird es sich dehnen, um die gesamte Linie zu füllen.

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

Dasselbe passiert mit Flex-Spalten. Um neue Spalten zu umbrechen und zu erstellen, muss der Container eine Höhe haben. Im Fall von Spalten dehnen sich die Elemente vertikal aus, um jede Spalte vollständig zu füllen.

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

## Umbruch und flex-direction

Das Umbruchverhalten funktioniert, wie Sie es erwarten würden, wenn es mit `flex-direction` kombiniert wird. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Elemente vom Endrand des Containers und ordnen sich in umgekehrter Reihenfolge an.

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

Beachten Sie, dass die Umkehrung nur in der Inline-, also Zeilenrichtung erfolgt. Wir beginnen rechts und gehen dann auf die zweite Linie und beginnen erneut von rechts. Wir kehren nicht in beiden Richtungen um, starten unten und kommen nach oben in den Container!

## Erläuterung des eindimensionalen Layouts

Wie wir aus den obigen Beispielen gesehen haben, wenn unsere Elemente wachsen und schrumpfen dürfen, wachsen diese Elemente, um den verfügbaren Platz zu füllen, wenn es auf der letzten Zeile oder Spalte weniger Elemente gibt.

Es gibt keine Flexbox-Funktionen, um Elemente in einer Zeile mit Elementen in der darüber liegenden Zeile auszurichten — jede Flex-Linie verhält sich wie ein neuer Flex-Container. Sie verteilt den Platz entlang der Hauptachse. Wenn nur ein Element vorhanden ist und dieses Element wachsen darf, füllt es die Achse, als ob Sie einen einzelnen Element-Flex-Container hätten. Wenn Sie ein Layout in zwei Dimensionen möchten, möchten Sie wahrscheinlich ein Grid-Layout.

Dieses Beispiel zeigt den Unterschied auf, indem es ein CSS-Grid-Layout verwendet, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, wie hineinpasst, und den zusätzlichen Raum gleichmäßig zwischen alle Spalten verteilt. Wir verwenden dasselbe HTML wie im [Flexbox-umgebrochenen Zeilenbeispiel](#dinge_umbrechen_lassen) oben, setzen aber `display: grid` darauf. Anstelle der {{cssxref("flex")}}-Kurzform, die außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite und die Fähigkeit zu wachsen direkt am Container mit {{cssxref("grid-template-columns")}}. Mit dem CSS-Grid bleibt das letzte Element in seiner Zelle; Grid-Elemente dehnen sich nicht, wenn sich weniger davon in der letzten Zeile befinden.

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

Das ist der Unterschied zwischen ein- und zweidimensionalen Layouts. In einer eindimensionalen Layout-Methode wie Flexbox kontrollieren wir nur die Zeile oder die Spalte. In einem zweidimensionalen Grid-Layout kontrollieren wir beides gleichzeitig. Wenn Sie distributionsweise Reihe für Reihe handeln möchten, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS-Grid.

## Wie funktionieren auf Flexbox basierende Grid-Systeme?

Auf Flexbox basierende Layouts können so gezwungen werden, sich wie Grid-Systeme anzuordnen, obwohl dies nicht der beabsichtigte Zweck von Flexbox ist. Wenn Sie Flex-Elementen prozentuale Breiten zuweisen — entweder unter Verwendung von `flex-basis` oder durch Hinzufügen einer Breite zum Element selbst und Beibehalten des Werts von `flex-basis` als `auto` — können Sie den Eindruck eines zweidimensionalen Layouts erzeugen.

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

Diese Technik ermöglicht es, Flex-Elemente entlang der Querachse auszurichten. Wenn Sie jedoch feststellen, dass Sie Flex-Elementen auf diese Weise Breiten zuweisen oder leere Flex-Elemente hinzufügen, um Platz zu beanspruchen, ist das ein guter Hinweis darauf, dass Sie möglicherweise zu einem CSS-Grid-Layout für diese Komponente wechseln möchten.

## Erstellen von Abständen zwischen Elementen

Um Lücken oder Abstände zwischen Flex-Elementen zu erstellen, verwenden Sie die {{CSSXref("gap")}}-Eigenschaft direkt am Flex-Container, um einen festen Raum zwischen angrenzenden Flex-Elementen zu erzeugen. Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`. Diese Eigenschaften spezifizieren die Größe der Abstände zwischen Zeilen und Spalten innerhalb von Grid-, Flex- und Mehrspalten-Layouts.

Die `gap`-Eigenschaft ist nicht das Einzige, was Platz zwischen Elementen schaffen kann. Ränder, Auffüllungen, `justify-content` und `align-content` können auch die Größe des Abstands erhöhen und beeinflussen die tatsächliche Größe der Lücke.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` in beiden Achsen unterscheidet, versuchen Sie den `gap`-Wert innerhalb der Container `.box` zu ändern und einen `margin`-Wert zur `.box > *`-Regel im Stylesheet unten hinzuzufügen. Klicken Sie auf die Schaltfläche "Zurücksetzen", um zu den vorherigen Werten zurückzukehren.

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

Die Flexbox-Spezifikation beschreibt, was passiert, wenn ein Flex-Element durch die Einstellung von `visibility: collapse` an einem Element zusammengeklappt wird. Siehe die MDN-Dokumentation zur {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Die Angabe von `visibility: collapse` für ein Flex-Element macht es zu einem _zusammengeklappten Flex-Element_ und hat eine ähnliche Wirkung wie `visibility: collapse` auf eine Tabellenzeile oder -spalte: Das zusammengeklappte Flex-Element wird vollständig aus der Darstellung entfernt, hinterlässt jedoch einen "Stützbalken," der die Quergröße der Flex-Linie stabil hält. Wenn ein Flex-Container also nur eine Flex-Linie hat, kann das dynamische Zusammenklappen oder Entfalten von Elementen die Hauptgröße des Flex-Containers ändern, garantiert jedoch keinen Einfluss auf seine Quergröße und führt nicht dazu, dass das Layout der restlichen Seite "wackelt". Der Umbruch der Flex-Linien wird nach dem Zusammenklappen jedoch neu durchgeführt, sodass sich die Quergröße eines Flex-Containers mit mehreren Linien möglicherweise ändern kann oder nicht." - [Zusammengeklappte Elemente](https://drafts.csswg.org/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Elemente mit JavaScript anvisieren möchten, um beispielsweise Inhalte ein- und auszublenden. Das in der Spezifikation dargestellte Beispiel zeigt ein solches Muster.

Im folgenden Live-Beispiel enthält der nicht umgebrochene Flex-Container eine Reihe mit drei gleichgroßen Flex-Elementen. Das dritte Element hat mehrere Textzeilen und vergrößert dadurch den Container. Der Standard für `align-items` ist `normal`; bei Flex-Elementen verhält sich `normal` wie `stretch`, sodass alle Elemente sich standardmäßig ausdehnen und die querseitige Höhe des Containers füllen.

Das Element, das die Quergröße verursacht, wird auf `visibility: collapse` gesetzt, was das Flex-Element ausblendet oder verbirgt, je nach Browser. In beiden Fällen behält der Flex-Container einen _Stützbalken_ der Quergröße, auch wenn er nicht sichtbar ist. Auf diese Weise wird, wenn das Element sichtbar gemacht wird, die Quergröße des einzeiligen Flex-Containers nicht geändert. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert auf `visible` ändern, wird das Element sichtbar und der Hauptgrößenraum wird zwischen nicht zusammengeklappten Elementen neu verteilt, während die Quergröße unverändert bleibt.

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

Das oben Gezeigte war ein einzeiliger, nicht umgebrochener Flex-Container mit einer festen Größe von `600px`, sodass die Breite unabhängig davon gleich bleibt, ob das Element sichtbar oder zusammengeklappt ist. Es ist wichtig zu verstehen, dass, während der Container einen Stützbalken der zusammengeklappten Quergröße des Elements behält, die Hauptgröße nicht erhalten bleibt. Mehrzeilige Flex-Container brechen ihre Elemente nach dem Entfernen zusammengeklappter Elemente aus der Darstellung neu um. Der neue Raum, den ein zusammengeklapptes Element in der Hauptachse hinterlässt, kann dazu führen, dass nicht zusammengeklappte Elemente in einer anderen Linie platziert werden, als wenn das Element nicht zusammengeklappt wäre. Da jede Linie wie ein eigenständiger einzeiliger Flex-Container gestaltet ist und sich ihre Zusammensetzung nach dem Zusammenklappen ändern kann, kann sich auch ihre Querachse ändern.

Das folgende Beispiel zeigt dieses Verhalten. Das dritte Flex-Element ist zusammengeklappt, sodass es null Platz entlang der Hauptachse (die Inline-Größe ist `0`) einnimmt. Wenn es zusammengeklappt ist, ist sein Stützbalken nach dem vierten Element in der ersten Reihe, wobei die erste Reihe hoch genug ist, um die drei Textzeilen aufzunehmen, die das dritte Element gehabt hätte. Dann, wenn Sie das Element entfalten (z. B. durch Entfernen der `collapse`-Klasse), gibt es nicht mehr genug horizontalen Platz für das fünfte Element in der ersten Reihe und es bewegt sich in die zweite. Dies führt dazu, dass sich die zweite Reihe ausdehnt, um die zwei Textzeilen ihres neuen Mitglieds aufzunehmen, und das letzte Flex-Element wird auf eine neue Zeile verschoben. Mit einer höheren zweiten Linie und einer neuen dritten Linie ist der Flex-Container viel höher als zuvor.

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

Wenn dies ein Problem für Ihr Layout verursacht, kann es erforderlich sein, die Struktur zu überdenken, zum Beispiel jede Zeile in einen separaten Flex-Container zu legen, damit sie nicht die Zeilen wechseln können.

### Verwendung von `visibility: hidden` und `display: none`

In den vorherigen Live-Beispielen versuchen Sie, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Wenn Sie `visibility: hidden` verwenden, wird das Element unsichtbar gemacht, aber die Box bleibt in der Formatierungsstruktur erhalten, sodass sie sich immer noch verhält, als wäre sie Teil des Layouts.
Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern auch die Struktur wird entfernt. Das bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ablaufen.
