---
title: Beherrschen des Umbruchs von Flex-Elementen
short-title: Umbruch von Flex-Elementen
slug: Web/CSS/Guides/Flexible_box_layout/Wrapping_items
l10n:
  sourceCommit: ae836b44d9faa0e9f581631ed1dcccd2a502b618
---

Flexbox wurde als ein eindimensionales Layout-Werkzeug entworfen — es befasst sich mit der Anordnung von Elementen in einer Reihe oder Spalte — jedoch nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Elemente auf neue Zeilen umzubrechen, indem neue Reihen erstellt werden, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist, und neue Spalten, wenn `flex-direction` auf `column` gesetzt ist. Dieser Leitfaden erklärt den Flexbox-Umbruch, wofür er ausgelegt ist und welche Situationen anstelle von Flexbox ein [CSS-Gitterlayout](/de/docs/Web/CSS/Guides/Grid_layout) erfordern.

## Dinge zum Umbruch bringen

Der Anfangswert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`. Das bedeutet, dass, wenn eine Gruppe von Flex-Elementen zu breit für ihren Flex-Container ist, sie diesen überlaufen werden. Um sie umzubrechen, wenn sie zu breit sind, fügen Sie die Eigenschaft `flex-wrap` mit dem Wert `wrap` hinzu oder verwenden Sie die Kurzform {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Die Elemente werden dann auf neue Zeilen umgebrochen, wenn sie ihren Container überlaufen.

In diesem Beispiel gibt es zehn Flex-Elemente mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht genug Platz ist, um ein weiteres 160-Pixel-Element in einer Reihe zu platzieren, wird eine neue Flex-Linie erstellt. Neue Zeilen werden nach Bedarf erstellt, bis alle Elemente platziert sind. Da die Elemente wachsen können, werden sie jede Reihe vollständig ausfüllen. Wenn sich nur ein Element in der letzten Zeile befindet, wird es sich dehnen, um die gesamte Zeile auszufüllen.

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

Das Gleiche passiert mit Flex-Spalten. Um neue Spalten umzubrechen und zu erstellen, muss der Container eine Höhe haben. Bei Spalten dehnen sich die Elemente vertikal, um jede Spalte vollständig zu füllen.

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

Der Umbruch funktioniert wie erwartet in Kombination mit `flex-direction`. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Elemente am Endrand des Containers und ordnen sich in umgekehrt geordneten Linien an.

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

Beachten Sie, dass die Umkehrung nur in der Inline-Reihenrichtung stattfindet. Wir beginnen rechts, gehen dann zur zweiten Zeile und starten wieder von rechts. Wir kehren nicht in beiden Richtungen um, indem wir vom Boden nach oben durch den Container gehen!

## Ausgeglichener Umbruch

Ein mögliches Problem mit dem Flexbox-Umbruch ist, dass die Flex-Elemente standardmäßig nicht gleichmäßig über die Linien verteilt sind. Im vorherigen Beispiel haben wir drei Elemente in den ersten drei Zeilen, aber nur eines in der letzten Zeile. Wir können die Flex-Elemente gleichmäßiger über die vier Flex-Linien verteilen, indem wir das [`balance`](/de/docs/Web/CSS/Reference/Properties/flex-wrap#balance)-Schlüsselwort innerhalb des `flex-wrap`-Werts zusammen mit dem `wrap`- oder `wrap-reverse`-Schlüsselwort einbeziehen.

Dieses Beispiel verwendet das gleiche HTML wie das vorherige Beispiel und nahezu dasselbe CSS, außer dass der `flex-wrap`-Wert von `wrap` zu `wrap balance` geändert wurde.

```html hidden live-sample___balanced-wrap live-sample___line-count
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

```css hidden live-sample___balanced-wrap
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap balance;
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

```css hidden live-sample___balanced-wrap live-sample___line-count
@supports not (flex-wrap: balance) {
  body::before {
    content: "Your browser does not support flex-wrap: balance.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

```css
flex-wrap: wrap balance;
```

Diese Zeile könnte auch einfach als `flex-wrap: balance` geschrieben werden. Wenn `balance` als einziges Schlüsselwort im `flex-wrap`-Wert angegeben wird, ist das andere Schlüsselwort standardmäßig `wrap`. Wir haben es explizit ausgeschrieben, damit klarer ist, was passiert. Beachten Sie, dass die Angabe des `balance`-Schlüsselworts zusammen mit dem `nowrap`-Wert ungültig ist und die Deklaration ignoriert wird.

Die aktualisierte Darstellung sieht folgendermaßen aus:

{{EmbedLiveSample("balanced-wrap")}}

Beachten Sie, wie die Elemente jetzt gleichmäßiger oder "ausgeglichen" verteilt sind, mit zwei Zeilen von drei Elementen und zwei Zeilen von zwei Elementen.

Wenn Sie Ihre ausgeglichenen Flex-Elemente über eine größere Anzahl von Zeilen verteilen möchten, können Sie dies mit der Eigenschaft {{cssxref("flex-line-count")}} tun. Diese gibt eine Mindestanzahl von Zeilen an. Wenn wir dem vorherigen Beispiel folgendes hinzufügen:

```css hidden live-sample___line-count
.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap balance;
  flex-line-count: 5;
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

```css
flex-line-count: 5;
```

Erhalten wir folgendes Ergebnis:

{{EmbedLiveSample("line-count")}}

Wir haben jetzt fünf Linien mit jeweils zwei Flex-Elementen.

Die Eigenschaft `flex-line-count` hat keine Auswirkung auf Flex-Container, die das `balance`-Schlüsselwort nicht in ihren `flex-wrap`-Eigenschaftswerten enthalten haben.

## Eindimensionales Layout erklärt

Wie wir aus den obigen Beispielen gesehen haben, wenn unsere Elemente wachsen und schrumpfen können, dann wachsen diese, wenn sich weniger Elemente in der letzten Reihe oder Spalte befinden, um den verfügbaren Platz auszufüllen.

Es gibt keine Flexbox-Funktionen, um Elemente in einer Zeile mit Elementen in der darüber liegenden Zeile auszurichten — jede Flex-Linie verhält sich wie ein neuer Flex-Container. Sie befasst sich mit der Raumverteilung entlang der Hauptachse. Wenn es nur ein Element gibt und dieses wachsen kann, füllt es die Achse aus, als ob Sie einen einzelnen Flex-Container hätten. Wenn Sie ein Layout in zwei Dimensionen wünschen, dann benötigen Sie wahrscheinlich ein Gitterlayout.

Dieses Beispiel zeigt den Unterschied, indem das CSS-Gitterlayout verwendet wird, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, wie passen, wobei der zusätzliche Raum zwischen allen Spalten verteilt wird. Wir verwenden das gleiche HTML wie im [Beispiel der Flexbox-umbruch-Reihe](#dinge_zum_umbruch_bringen) oben, aber setzen `display: grid` darauf. Anstelle der {{cssxref("flex")}}-Kurzform, die außerhalb von Flexbox keine Wirkung hat, setzen wir die minimale Breite und die Wachstumsfähigkeit des Elements direkt auf den Container mit {{cssxref("grid-template-columns")}}. Mit CSS-Gitter bleibt das letzte Element in seiner Gitterzelle; Gitter-Elemente dehnen sich nicht, wenn es weniger von ihnen in der letzten Reihe gibt.

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

Das ist der Unterschied zwischen ein- und zweidimensionalen Layouts. Bei einem eindimensionalen Layout-Verfahren wie Flexbox steuern wir nur die Reihe oder die Spalte. Bei einem zweidimensionalen Gitterlayout steuern wir beides gleichzeitig. Wenn Sie die Raumverteilung Reihe für Reihe wünschen, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS-Gitter.

## Wie funktionieren flexbox-basierte Gittersysteme?

Flexbox-basierte Layouts können dazu gezwungen werden, sich wie Gittersysteme auszurichten, aber das ist nicht der beabsichtigte Zweck von Flexbox. Wenn Sie Flex-Elementen Prozentbreiten zuweisen — entweder unter Verwendung von `flex-basis` oder indem Sie dem Element selbst eine Breite hinzufügen und den Wert von `flex-basis` als `auto` belassen — können Sie den Eindruck eines zweidimensionalen Layouts erwecken.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um unflexible Flex-Elemente zu erzeugen. Die Flexibilität wird über Prozentsätze gesteuert.

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

Diese Technik ermöglicht es Ihnen, Flex-Elemente auf der Querachse auszurichten. Wenn Sie jedoch beginnen, Breiten auf diese Weise zu Flex-Elementen hinzuzufügen oder leere Flex-Elemente hinzuzufügen, um Platz zu beanspruchen, ist das ein gutes Zeichen dafür, dass Sie für diese Komponente auf ein CSS-Gitterlayout umsteigen sollten.

## Erstellung von Abständen zwischen Elementen

Um Lücken oder Abstände zwischen Flex-Elementen zu erstellen, verwenden Sie die {{CSSXref("gap")}}-Eigenschaft direkt auf dem Flex-Container, um einen festen Raum zwischen angrenzenden Flex-Elementen zu schaffen. Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`. Diese Eigenschaften spezifizieren die Größe der Abstände zwischen Reihen und Spalten innerhalb von Gitter-, Flex- und Mehrspaltenlayouts.

Die `gap`-Eigenschaft ist nicht das Einzige, was den Raum zwischen Elementen vergrößern kann. Ränder, Abstände, `justify-content` und `align-content` können auch die Größe des Abstands erhöhen und die tatsächliche Größe der Lücke beeinflussen.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` in beiden Achsen unterscheidet, versuchen Sie den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert zur Regel `.box > *` im unten stehenden Stylesheet hinzuzufügen. Klicken Sie auf die Schaltfläche "Zurücksetzen", um zu den vorherigen Werten zurückzukehren.

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

Die Flexbox-Spezifikation beschreibt, was passieren soll, wenn ein Flex-Element durch Setzen von `visibility: collapse` auf einem Element zusammengeklappt wird. Sehen Sie sich die MDN-Dokumentation für die {{cssxref("visibility")}}-Eigenschaft an. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Das Angeben von `visibility: collapse` auf einem Flex-Element führt dazu, dass es zu einem _zusammengeklappten Flex-Element_ wird, was einen Effekt verursacht, der `visibility: collapse` auf einer Tabellenzeile oder einer Tabellenspalte ähnelt: das zusammengeklappte Flex-Element wird vollständig aus der Darstellung entfernt, hinterlässt jedoch einen "Strut", der die Querausrichtung der Flex-Linie stabil hält. Daher, wenn ein Flex-Container nur eine Flex-Linie hat, kann das dynamische Zusammenklappen oder Entfalten von Elementen die Hauptgröße des Flex-Containers ändern, garantiert jedoch keine Auswirkung auf dessen Quergröße und verursacht keine "Schwankungen" im Layout des restlichen Dokuments. Der Flexlinienumbruch _wird_ jedoch nach dem Zusammenklappen neu gemacht, sodass sich die Quergröße eines Flex-Containers mit mehreren Linien ändern kann oder nicht." – [Zusammengeklappte Elemente](https://drafts.csswg.org/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Elemente mit JavaScript ansprechen möchten, um beispielsweise Inhalte zu zeigen und zu verbergen. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel enthält der nicht-umbruchbare Flex-Container eine Reihe mit drei Flex-Elementen, die auf gleiche Größen gesetzt sind. Das dritte Element hat mehrere Zeilen von Inhalten, die den Container erweitern. Der Standardwert für `align-items` ist `normal`; für Flex-Elemente verhält sich `normal` wie `stretch`, sodass sich alle Elemente standardmäßig dehnen und die Quergröße des Containers ausfüllen.

Das Element, das die Querausrichtung erzeugt, ist auf `visibility: collapse` gesetzt, was das Flex-Element zusammenklappt oder versteckt, abhängig vom Browser. In jedem Fall behält der Flex-Container einen _Strut_ der Querausrichtung bei, auch wenn sie nicht sichtbar ist. Auf diese Weise bleibt die Quergröße des einzeiligen Flex-Containers unverändert, wenn das Element sichtbar gemacht wird. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert auf `visible` ändern, erscheint das Element und der Raum der Hauptgröße wird zwischen nicht zusammengeklappten Elementen neu verteilt, während die Quergröße unverändert bleibt.

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

Das oben gezeigte Beispiel war ein einzeiliger, nicht-umbruchbarer Flex-Container mit einer festen Größe von `600px`; daher ist die Breite gleich, egal ob das Element sichtbar oder zusammengeklappt ist. Es ist wichtig zu verstehen, dass, obwohl der Container einen Strut der Querausrichtung des zusammengeklappten Elements behält, die Hauptgröße nicht erhalten bleibt. Mehrzeilige Flex-Container brechen ihre Elemente neu zusammen um, nachdem zusammengeklappte Elemente aus der Darstellung entfernt wurden. Der neue Raum, den ein zusammengeklapptes Element in der Hauptachse hinterlässt, kann dazu führen, dass nicht zusammengeklappte Elemente in einer anderen Zeile platziert werden, als wenn das Element nicht zusammengeklappt wäre. Da jede Zeile wie ein unabhängiger einzeiliger Flex-Container ausgelegt ist und sich ihre Zusammensetzung nach dem Zusammenklappen ändern kann, kann sich auch ihre Querachse ändern.

Das folgende Beispiel zeigt dieses Verhalten. Das dritte Flex-Element ist zusammengeklappt, sodass es keinen Platz entlang der Hauptachse einnimmt (die Inline-Größe beträgt `0`). Wenn es zusammengeklappt ist, befindet sich sein Strut in der ersten Zeile nach dem vierten Element, wobei die erste Zeile groß genug ist, um die drei Textzeilen aufzunehmen, die das dritte Element gehabt hätte. Dann, wenn Sie das Element entklappen (z.B. indem Sie die `collapse`-Klasse entfernen), gibt es nicht mehr genug horizontalen Platz für das fünfte Element in der ersten Zeile und es wird zur zweiten verschoben. Dies führt dazu, dass die zweite Zeile wächst, um die zwei Zeilen Text ihres neuen Mitglieds aufzunehmen, und das letzte Flex-Element wird in eine neue Zeile verschoben. Mit einer höheren zweiten Zeile und einer neuen dritten Zeile ist der Flex-Container jetzt viel höher als zuvor.

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

Wenn dies ein Problem für Ihr Layout darstellt, kann es erforderlich sein, die Struktur zu überdenken, indem Sie z.B. jede Zeile in einen separaten Flex-Container legen, sodass sie keine Zeilen verschieben können.

### Verwendung von `visibility: hidden` und `display: none`

Versuchen Sie in den vorherigen Live-Beispielen, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei Verwendung von `visibility: hidden` wird das Element unsichtbar gemacht, aber die Box bleibt in der Formatierungsstruktur erhalten, sodass sie sich weiterhin so verhält, als ob sie Teil des Layouts wäre.
Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern auch die Struktur wird entfernt. Das bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ablaufen.
