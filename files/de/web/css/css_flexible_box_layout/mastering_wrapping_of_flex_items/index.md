---
title: Beherrschen des Umbruchs von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: c31ea3d118281b175f1d42ab0432b593f3e94d11
---

{{CSSRef}}

Flexbox wurde als ein dimensionales Layout-Tool entwickelt — es ist dazu gedacht, Elemente als Reihe oder Spalte anzuordnen — jedoch nicht beides auf einmal. Es ist jedoch möglich, Flex-Elemente auf neue Zeilen umzubrechen, neue Reihen zu erstellen, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist, und neue Spalten, wenn `flex-direction` auf `column` gesetzt ist. Dieser Leitfaden erklärt das Flexbox-Umbruchverhalten, wofür es konzipiert ist und in welchen Situationen eher das [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) anstelle von Flexbox benötigt wird.

## Dinge umbrechen lassen

Der Ausgangswert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`. Dies bedeutet, dass ein Satz von Flex-Elementen, der zu breit für seinen Flex-Container ist, überfließen wird. Um sie beim Überschreiten der maximalen Breite umbrechen zu lassen, fügen Sie die `flex-wrap`-Eigenschaft mit dem Wert `wrap` hinzu oder verwenden Sie die Abkürzung {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Elemente werden dann auf neue Zeilen umgebrochen, wenn sie den Container überfüllen.

In diesem Beispiel gibt es zehn Flex-Elemente mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald kein Platz mehr ausreicht, um ein weiteres 160 Pixel großes Element in einer Reihe zu platzieren, wird eine neue Flex-Linie erstellt. Neue Linien werden nach Bedarf erstellt, bis alle Elemente platziert sind. Da die Elemente wachsen können, dehnen sie sich aus, um jede Reihe vollständig zu füllen. Wenn sich nur ein Element in der letzten Linie befindet, wird es gestreckt, um die gesamte Linie auszufüllen.

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

Dasselbe passiert mit Flex-Spalten. Um Spalten umzubrechen und neue zu erstellen, muss der Container eine Höhe haben. Bei Spalten dehnen sich die Elemente vertikal aus, um jede Spalte vollständig auszufüllen.

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

## Umbruch und Flex-Richtung

Der Umbruch funktioniert wie erwartet, wenn er mit `flex-direction` kombiniert wird. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Elemente am Endrand des Containers und ordnen sich in umgekehrter Reihenfolge aus.

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

Beachten Sie, dass die Umkehrung nur in der Inline-, Reihen-Richtung erfolgt. Wir beginnen auf der rechten Seite, gehen dann auf die zweite Zeile und beginnen wieder von rechts. Wir kehren nicht in beiden Richtungen um, indem wir von unten nach oben im Container beginnen!

## Ein-dimensionales Layout erklärt

Wie wir aus den obigen Beispielen sehen können, wenn unsere Elemente erlaubt sind zu wachsen und zu schrumpfen, wenn es weniger Elemente in der letzten Reihe oder Spalte gibt, wachsen diese Elemente, um den verfügbaren Raum auszufüllen.

Es gibt keine Flexbox-Funktionen, um Elemente in einer Reihe mit den Elementen in der darüber liegenden Reihe auszurichten - jede Flex-Linie verhält sich wie ein neuer Flex-Container. Sie verteilt den Raum nur entlang der Hauptachse. Wenn nur ein Element vorhanden ist und dieses Element wachsen darf, wird es die Achse genauso füllen, als ob Sie einen Einzel-Element-Flex-Container hätten. Wenn Sie Layout in zwei Dimensionen möchten, sollten Sie wahrscheinlich das Grid-Layout verwenden.

Dieses Beispiel demonstriert den Unterschied, indem das CSS Grid-Layout verwendet wird, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, wie passen, und den zusätzlichen Platz zwischen allen Spalten zu verteilen. Wir verwenden denselben HTML-Code wie das [Flexbox-Umbruch-Reihenbeispiel](#dinge_umbrechen_lassen) oben, setzen jedoch `display: grid` darauf. Anstelle der {{cssxref("flex")}}-Abkürzung, die außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite und die Möglichkeit des Wachstums der Elemente direkt am Container mit {{cssxref("grid-template-columns")}}. Mit CSS Grid bleibt das letzte Element in seiner Rasterzelle; Rasterelemente dehnen sich nicht, wenn es weniger davon in der letzten Zeile gibt.

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

Dies ist der Unterschied zwischen ein- und zwei-dimensionalen Layouts. In einer ein-dimensionalen Layout-Methode wie Flexbox kontrollieren wir nur die Reihe oder die Spalte. In einem zwei-dimensionalen Rasterlayout kontrollieren wir beides gleichzeitig. Wenn Sie die Verteilung des Raumes Zeile für Zeile wünschen, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS Grid.

## Wie funktionieren Flexbox-basierte Rastersysteme?

Flexbox-basierte Layouts können gezwungen werden, sich als Rastersysteme auszurichten, aber das ist nicht der vorgesehene Zweck von Flexbox. Wenn Sie Flex-Elementen Prozentbreiten zuweisen — entweder mit `flex-basis` oder indem Sie dem Element selbst eine Breite hinzufügen und den Wert von `flex-basis` auf `auto` lassen — können Sie den Eindruck eines zwei-dimensionalen Layouts erwecken.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um unflexible Flex-Elemente zu machen. Die Flexibilität wird durch Prozentsätze kontrolliert.

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

Diese Technik erlaubt es Ihnen, Flex-Elemente auf der Querachse auszurichten. Wenn Sie jedoch feststellen, dass Sie auf diese Weise Breiten zu Flex-Elementen hinzufügen oder leere Flex-Elemente hinzufügen, um Platz einzunehmen, ist das ein guter Hinweis darauf, dass Sie möglicherweise zu CSS Grid-Layout für diese Komponente wechseln sollten.

## Zwischenräume zwischen Elementen schaffen

Um Lücken oder Abstände zwischen Flex-Elementen zu schaffen, verwenden Sie die {{CSSXref("gap")}}-Eigenschaft direkt am Flex-Container, um einen festen Abstand zwischen benachbarten Flex-Elementen zu schaffen. Die `gap`-Eigenschaft ist eine Abkürzung für `row-gap` und `column-gap`. Diese Eigenschaften spezifizieren die Größe der Lücken zwischen Reihen und Spalten innerhalb von Raster-, Flex- und Mehrspalten-Layouts.

Die `gap`-Eigenschaft ist nicht das einzige, das Platz zwischen Elementen schaffen kann. Margins, Padding, `justify-content` und `align-content` können ebenfalls die Größe des Abstands erhöhen und die tatsächliche Größe der Lücke beeinflussen.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` auf beiden Achsen unterscheidet, versuchen Sie, den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert zur `.box > *` Regel im Stylesheet unten hinzuzufügen. Klicken Sie auf die Schaltfläche "Reset", um zu den vorherigen Werten zurückzukehren.

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

Die Flexbox-Spezifikation beschreibt, was passieren soll, wenn ein Flex-Element durch das Setzen von `visibility: collapse` auf ein Element kollabiert wird. Siehe die MDN-Dokumentation zur {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Das Festlegen von visibility:collapse auf einem Flex-Element führt dazu, dass es zu einem kollabierten Flex-Element wird, das einen ähnlichen Effekt wie visibility:collapse auf einer Tabellenzeile oder einer Tabellenspalte erzeugt: das kollabierte Flex-Element wird vollständig aus der Darstellung entfernt, hinterlässt jedoch ein "Strut", das die Quergröße der Flex-Linie stabil hält. Wenn ein Flex-Container nur eine Flex-Linie hat, kann das dynamische Kollabieren oder Entkollabieren von Elementen die Hauptgröße des Flex-Containers ändern, garantiert jedoch, die Quergröße nicht zu beeinflussen und das Layout des Restes der Seite nicht "wobblen" zu lassen. Flex-Linien-Umbrüche werden jedoch nach dem Kollabieren neu ausgeführt, sodass sich die Quergröße eines Flex-Containers mit mehreren Zeilen möglicherweise ändert oder auch nicht." - [Kollabierte Elemente](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Elemente mit JavaScript anvisieren möchten, um z.B. Inhalte zu zeigen und zu verstecken. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel enthält der nicht umbrechende Flex-Container eine Reihe mit drei Flex-Elementen, die so eingestellt sind, dass sie gleich große Flex-Elemente sind. Das dritte Element hat mehrere Zeilen Inhalt, wodurch der Container wächst. Der Standard für `align-items` ist `normal`; für Flex-Elemente verhält sich `normal` wie `stretch`, sodass alle Elemente standardmäßig gedehnt werden, um die Quergröße des Containers zu füllen.

Das Element, das die Quergröße erzeugt, wird auf `visibility: collapse` gesetzt, was das Flex-Element kollabiert oder versteckt, abhängig vom Browser. In jedem Fall behält der Flex-Container jedoch ein _Strut_ der Quergröße bei, auch wenn es nicht sichtbar ist. Auf diese Weise wird, wenn das Element sichtbar gemacht wird, die Quergröße des einzeiligen Flex-Containers nicht verändert. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert auf `visible` ändern, werden Sie sehen, dass das Element erscheint und der Platz wird zwischen nicht kollabierten Elementen im Hauptbereich neu verteilt, während die Quergröße unverändert bleibt.

> [!NOTE]
> Verwenden Sie Firefox für das Beispiel unten, da andere gängige Browser `collapse` als `hidden` behandeln.

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

Oben war ein einzeiliger, nicht umbrechender Flex-Container mit einer festen Größe von `600px`, sodass die Breite unabhängig davon, ob das Element sichtbar oder kollabiert ist, gleich bleibt. Es ist wichtig zu verstehen, dass während der Container ein Strut der Quergröße des kollabierten Elements beibehält, die Hauptgröße nicht erhalten bleibt. Mehrzeilige Flex-Container verpacken ihre Elemente neu, nachdem kollabierte Elemente aus der Darstellung entfernt wurden. Der neue Raum, den ein kollabiertes Element in der Hauptachse hinterlässt, kann nicht kollabierte Elemente dazu veranlassen, in einer anderen Linie platziert zu werden, als wenn das Element nicht kollabiert wäre. Da jede Linie wie ein unabhängiger einzeiliger Flex-Container gestaltet wird und ihre Zusammensetzung sich nach dem Kollabieren ändern kann, kann sich auch ihre Querachsengröße ändern.

Das folgende Beispiel zeigt dieses Verhalten. Das dritte Flex-Element ist kollabiert, sodass es null Platz entlang der Hauptachse einnimmt (die Inline-Größe ist `0`). Wenn es kollabiert ist, befindet sich sein Strut in der ersten Reihe nach dem vierten Element, wobei die erste Reihe hoch genug ist, um die drei Textzeilen zu aufnehmen, die das dritte Element gehabt hätte. Entfernen Sie dann die Kollabierung des Elements (z.B. durch Entfernen der `collapse` Klasse), gibt es nicht mehr genug horizontalen Platz für das fünfte Element in der ersten Reihe, und es bewegt sich zur zweiten. Dies bewirkt, dass die zweite Reihe wächst, um die zwei Textzeilen ihres neuen Mitglieds aufzunehmen, und das letzte Flex-Element wird auf eine neue Reihe verschoben. Mit einer höheren zweiten Linie und einer neuen dritten Linie ist der Flex-Container deutlich höher als zuvor.

> [!NOTE]
> Verwenden Sie Firefox für das Beispiel unten, da andere gängige Browser `collapse` als `hidden` behandeln.

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

Wenn dies ein Problem für Ihr Layout darstellt, kann es erforderlich sein, die Struktur zu überdenken, z.B. jede Zeile in einen separaten Flex-Container zu setzen, sodass sie die Zeilen nicht verschieben können.

### Verwendung von `visibility: hidden` und `display: none`

Versuchen Sie in den vorherigen Live-Beispielen, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei Verwendung von `visibility: hidden` wird das Element unsichtbar gemacht, das Kästchen bleibt jedoch in der Formatierungsstruktur erhalten, sodass es sich immer noch so verhält, als wäre es Teil des Layouts.
Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern die Struktur wird ebenfalls entfernt. Dies bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ausgeführt werden.
