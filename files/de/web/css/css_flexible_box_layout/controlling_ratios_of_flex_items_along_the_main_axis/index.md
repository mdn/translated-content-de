---
title: Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse
short-title: Steuerung der Flex-Element-Verhältnisse
slug: Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In diesem Leitfaden untersuchen wir die drei Eigenschaften, die die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse steuern: {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}}. Das vollständige Verständnis, wie diese Eigenschaften mit wachsenden und schrumpfenden Elementen funktionieren, ist der Schlüssel zur Beherrschung des [CSS Flexible Box Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout).

## Ein erster Blick

Unsere drei Eigenschaften steuern die folgenden Aspekte der Flexibilität eines Flex-Elements:

- `flex-grow`: Wie viel des positiven Freiraums erhält dieses Element?
- `flex-shrink`: Wie viel negativer Freiraum kann von diesem Element entfernt werden?
- `flex-basis`: Wie groß ist das Element, bevor es wächst oder schrumpft?

Diese Eigenschaften werden normalerweise mittels der Kurzschrift-Eigenschaft {{CSSxRef("flex")}} ausgedrückt. Der folgende Code würde die `flex-grow`-Eigenschaft auf `2`, `flex-shrink` auf `1` und `flex-basis` auf `auto` setzen.

```css
.item {
  flex: 2 1 auto;
}
```

## Wichtige Konzepte beim Arbeiten an der Hauptachse

Um die `flex`-Eigenschaften zu verstehen, ist es hilfreich, die _natürliche Größe_ von Flex-Elementen zu kennen, bevor jegliches Wachsen oder Schrumpfen stattfindet. Zusätzlich ist es wichtig, das Konzept des _freien Raumes_ zu verstehen, das die Differenz zwischen der kombinierten natürlichen Größe aller Flex-Elemente entlang der Hauptachse und der Größe der Hauptachse selbst ist.

### Größendefinition von Flex-Elementen

Um zu bestimmen, wie viel Platz zum Layouten von Flex-Elementen zur Verfügung steht, muss der Browser wissen, wie groß das Element anfangs ist. Wie wird dies für Elemente berechnet, die keine Breite oder Höhe mit einer absoluten Längeneinheit haben?

In CSS können die Schlüsselwörter {{CSSxRef("min-content")}} und {{CSSxRef("max-content")}} anstelle einer {{cssxref("length")}}-Einheit verwendet werden. Im Allgemeinen ist `min-content` die kleinste Größe, die ein Element haben kann, während es das längste Wort noch passend ist, und `max-content` ist die Größe, die das Element benötigen würde, um den gesamten Inhalt ohne Umbruch zu fassen.

Das nachfolgende Beispiel enthält zwei Absatzelemente mit unterschiedlichen Zeichenfolgen. Der erste Absatz hat eine Breite von `min-content`. Beachten Sie, dass der Text alle verfügbaren weichen Umbruchmöglichkeiten genutzt hat und so klein wie möglich geworden ist, ohne überzulaufen. Dies ist die `min-content`-Größe dieser Zeichenfolge. Im Wesentlichen bestimmt das längste Wort in der Zeichenfolge die Größe.

Der zweite Absatz mit einem Wert von `max-content` verhält sich umgekehrt. Er wächst so groß wie nötig, um den Inhalt ohne weiche Umbruchmöglichkeiten zu fassen. Er wird über den Rahmen hinausgehen, wenn der Container zu schmal ist.

```html live-sample___min-max-content
<p class="min-content">
  I am sized with min-content and so I will take all of the soft-wrapping
  opportunities.
</p>
<p class="max-content">
  I am sized with max-content and so I will take none of the soft-wrapping
  opportunities.
</p>
```

```css live-sample___min-max-content
.min-content {
  width: min-content;
  border: 2px dotted rgb(96 139 168);
}
.max-content {
  width: max-content;
  border: 2px dotted rgb(96 139 168);
}
```

{{EmbedLiveSample("min-max-content", "", "260px")}}

Erinnern Sie sich an dieses Verhalten und welche Auswirkungen `min-content` und `max-content` haben, während wir im weiteren Verlauf dieses Artikels `flex-grow` und `flex-shrink` untersuchen.

### Positiver und negativer Freiraum

Wir müssen auch das Konzept von **positivem und negativem Freiraum** verstehen. Wenn ein Flex-Container _positiven Freiraum_ hat, hat er mehr Platz, als für die Anzeige der Flex-Elemente im Container erforderlich ist. Ein Beispiel hierfür wäre ein Container mit einer Breite von `500px`, bei dem {{CSSxRef("flex-direction")}} auf `row` gesetzt ist und der drei Flex-Elemente mit jeweils `100px` Breite enthält. Dieser Container hätte `200px` positiven Freiraum. Dieser positive Freiraum kann zwischen den Elementen verteilt werden, wenn der Container gefüllt werden soll.

![Bild, das den übrig gebliebenen Raum nach der Anzeige der Elemente zeigt.](basics7.png)

Ein Flex-Container hat _negativen Freiraum_, wenn der kombinierte Wert der natürlichen Größen der Flex-Elemente größer ist als der verfügbare Platz im Flex-Container. Wenn die drei Flex-Elemente im obigen Beispiel mit einem `500px` breiten Container jeweils `200px` breit statt `100px` sind, beträgt ihre kombinierte natürliche Breite `600px`, was zu `100px` negativem Freiraum führt. Dieser Raum kann von den Elementen entfernt werden, um sie in den Container einzupassen, oder die Elemente werden überlaufen.

![Die Elemente überlaufen den Container](ratios1.png)

Diese Verteilung von positivem Freiraum und die Entfernung von negativem Freiraum müssen wir verstehen, um die Eigenschaftskomponenten der `flex`-Kurzschrift zu erlernen.

In den folgenden Beispielen wird die {{CSSxRef("flex-direction")}} auf `row` gesetzt, sodass die Größe der Elemente durch ihre Breite bestimmt wird. Wir werden den positiven und negativen Freiraum berechnen, indem wir die Gesamtbreite aller Elemente mit der Breite des Containers vergleichen. Sie können jedes Beispiel auch mit `flex-direction: column` ausprobieren. Die Hauptachse wäre dann die Spalte, und Sie würden die Höhe der Elemente und ihres Containers vergleichen, um den positiven und negativen Freiraum zu berechnen.

## Die `flex-basis`-Eigenschaft

Die {{CSSxRef("flex-basis")}}-Eigenschaft gibt die anfängliche Größe eines Flex-Elements an, bevor eine Verteilung des positiven oder negativen Freiraums erfolgt. Der Standardwert für diese Eigenschaft ist `auto`. Diese Eigenschaft akzeptiert die gleichen Werte wie die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften und akzeptiert auch das Schlüsselwort `content`.

Wenn `flex-basis` auf `auto` gesetzt ist, ist die anfängliche Größe des Elements die {{cssxref("length-percentage")}}-Größe der Hauptgröße, sofern eine solche gesetzt wurde. Zum Beispiel, wenn das Element `width: 200px` gesetzt hat, wäre `200px` die `flex-basis` für dieses Element. Prozentwerte beziehen sich auf die innere Hauptgröße des Flex-Containers. Wenn `width: 50%` gesetzt wurde, wäre die `flex-basis` für dieses Element die Hälfte der Breite des content-box des Containers. Wenn keine solche Größe gesetzt ist, was bedeutet, dass das Element automatisch dimensioniert ist, wird `auto` auf die Größe seines Inhalts aufgelöst (siehe die Diskussion zu [`min-content`- und `max-content`-Dimensionierung](#größendefinition_von_flex-elementen) oben), was bedeutet, dass die `flex-basis` die `max-content`-Größe des Elements ist.

Dieses Beispiel enthält drei unflexible Flex-Elemente, wobei sowohl `flex-grow` als auch `flex-shrink` auf `0` gesetzt sind. Das erste Element, das eine explizite Breite von `150px` hat, nimmt eine `flex-basis` von `150px`, während die anderen beiden Elemente keine festgelegte Breite haben und daher nach ihrer Inhaltsbreite oder `max-content` dimensioniert sind.

```html live-sample___flex-basis
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___flex-basis
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 0 0 auto;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.box :first-child {
  width: 150px;
}
```

{{EmbedLiveSample("flex-basis")}}

Zusätzlich zum Schlüsselwort `auto` und allen anderen gültigen {{cssxref("width")}}-Werten können Sie das Schlüsselwort `content` als `flex-basis` verwenden. Dies führt dazu, dass die `flex-basis` auf der Inhaltsgröße basiert, selbst wenn eine `width` auf dem Element gesetzt ist. Dies erzeugt denselben Effekt wie das Entfernen einer festgelegten Breite und die Verwendung von `auto` als `flex-basis`. Während es ähnlich wie `max-content` ist, ermöglicht der `content`-Wert, dass jedes {{cssxref("aspect-ratio")}} basierend auf der Querachse Größe berechnet wird.

Um die Größe des Flex-Elements während der Raumverteilung völlig zu ignorieren, setzen Sie `flex-basis` auf `0` und setzen Sie einen Wert ungleich null für `flex-grow`. Lernen wir `flex-grow`, bevor wir diesen Wert in Aktion sehen.

## Die `flex-grow`-Eigenschaft

Die {{CSSxRef("flex-grow")}}-Eigenschaft gibt den **Flex-Wachstumsfaktor** an, der bestimmt, wie viel ein Flex-Element im Verhältnis zu den anderen Flex-Elementen im Flex-Container wächst, wenn positiver Freiraum verteilt wird.

Wenn alle Elemente denselben `flex-grow`-Faktor haben, wird der positive Freiraum gleichmäßig unter ihnen verteilt. In diesem Szenario ist es üblich, `flex-grow: 1` zu setzen, aber Sie könnten ihnen jeden Wert geben, z.B. `88`, `100` oder `1.2`; es ist ein Verhältnis. Wenn der Faktor für alle Flex-Elemente im Container derselbe ist und es positiven Freiraum gibt, wird dieser Raum gleichmäßig verteilt.

### Kombination von `flex-grow` und `flex-basis`

Es kann verwirrend sein, wie `flex-grow` und `flex-basis` interagieren. Betrachten wir den Fall von drei Flex-Elementen unterschiedlichen Inhaltslängen und den folgenden `flex`-Regeln, die auf sie angewendet werden:

```css
.class {
  flex: 1 1 auto;
}
```

In diesem Fall ist der `flex-basis`-Wert `auto` und die Elemente haben keine Breite festgelegt, so dass sie automatisch dimensioniert werden. Das bedeutet, dass die verwendete `flex-basis` die `max-content`-Größe jedes Elements ist. Nachdem die Elemente aufgelöst wurden, gibt es positiven Freiraum im Flex-Container, der im Bild unten als Schraffurbereich gezeigt wird; der schraffierte Bereich ist der positive Freiraum, der zwischen den drei Elementen basierend auf ihren `flex-grow`-Faktoren verteilt wird:

![Drei Elemente nehmen etwas mehr als die Hälfte der Breite ein, mit der restlichen Breite als schraffierter Bereich](ratios2.png)

Wir arbeiten mit einer `flex-basis`, die der Inhaltsgröße entspricht. Das bedeutet, dass der verfügbare Raum für die Verteilung von der insgesamt verfügbaren Fläche (der Breite des Flex-Containers) abgezogen wird, und der verbleibende Raum wird dann gleichmäßig zwischen den drei Elementen aufgeteilt. Das größte Element bleibt das größte, da es ursprünglich aus einer größeren Größe resultierte, obwohl es den gleichen zusätzlichen Platz wie die anderen hat:

![Der schraffierte Bereich wurde in Drittel geteilt, wobei jedes Element einen Teil zugeteilt bekommt](ratios3.png)

Um drei gleich große Elemente zu erstellen, selbst wenn die ursprünglichen Elemente unterschiedliche Größen haben, setzen Sie die `flex-basis`-Komponente auf `0`:

```css
.class {
  flex: 1 1 0;
}
```

Hier setzen wir der Zweck der Raumverteilungsberechnung die Größe jedes Elements auf `0`. Das bedeutet, dass der gesamte Raum zur Verteilung verfügbar ist. Da alle Elemente denselben `flex-grow`-Faktor haben, erhalten sie jeweils eine gleiche Menge an Raum. Das führt zu drei gleichbreiten Flex-Elementen.

Ändern Sie den `flex-grow`-Faktor von 1 auf 0 in diesem Live-Beispiel, um das unterschiedliche Verhalten zu sehen:

```html live-sample___flex-grow
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three has more content</div>
</div>
```

```css live-sample___flex-grow
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 0;
}

.box {
  width: 400px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
}
```

{{EmbedLiveSample("flex-grow")}}

### Unterschiedliche `flex-grow`-Faktoren für Elemente

Die Kombination von `flex-grow` und `flex-basis` ermöglicht es uns, individuelle Elementgrößen zu steuern, indem unterschiedliche `flex-grow`-Faktoren gesetzt werden. Wenn wir die `flex-basis` auf `0` lassen, damit der gesamte Raum verteilt werden kann, können wir unterschiedlich große Flex-Elemente erstellen, indem wir jedem Element einen anderen `flex-grow`-Faktor zuweisen.

Im Beispiel unten verwenden wir als `flex-grow`-Faktor für die ersten beiden Elemente `1` und verdoppeln diesen Wert auf `2` für das dritte Element. Mit `flex-basis: 0` bei allen Elementen, wird der verfügbare Raum wie folgt verteilt:

1. Die `flex-grow`-Faktor-Werte aller Geschwister-Flex-Elemente werden zusammengezählt (das Gesamt beträgt in diesem Fall 4).
2. Der positive Freiraum im Flex-Container wird durch diesen Gesamtwert geteilt.
3. Der Freiraum wird entsprechend der individuellen Werte verteilt. In diesem Fall erhält das erste Element einen Teil, das zweite einen Teil, und das dritte zwei Teile. Das bedeutet, dass das dritte Element doppelt so groß ist wie das erste und zweite Element.

```html live-sample___flex-grow-ratios
<div class="box">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```css live-sample___flex-grow-ratios
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 0;
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.one {
  flex: 1 1 0;
}

.two {
  flex: 1 1 0;
}

.three {
  flex: 2 1 0;
}
```

{{EmbedLiveSample("flex-grow-ratios")}}

Denken Sie daran, dass Sie hier jeden positiven Wert verwenden können. Es kommt auf das Verhältnis zwischen den Elementen an. Sie können große Zahlen oder Dezimalzahlen verwenden; es liegt an Ihnen. Um dies zu testen, ändern Sie die `flex-grow`-Werte im obigen Beispiel zu `.25`, `.25` und `.50`. Sie sollten dasselbe Ergebnis sehen.

## Die `flex-shrink`-Eigenschaft

Die {{CSSxRef("flex-shrink")}}-Eigenschaft gibt den **Flex-Schrumpffaktor** an, der bestimmt, wie viel das Flex-Element im Verhältnis zu den anderen Flex-Elementen im Flex-Container schrumpfen wird, wenn negativer Freiraum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der kombinierte `flex-basis`-Wert der Flex-Elemente zu groß ist, um in den Flex-Container zu passen und ansonsten überlaufen würde. Solange der `flex-shrink`-Wert eines Elements ein positiver Wert ist, wird das Element schrumpfen, um nicht über den Container hinauszufließen.

Während `flex-grow` verwendet wird, um verfügbaren Platz zu Elementen hinzuzufügen, die wachsen können, wird `flex-shrink` verwendet, um Platz zu entfernen, um sicherzustellen, dass die Elemente in ihren Container passen, ohne überzulaufen.

In diesem Beispiel sind drei `200px` breite Flex-Elemente in einem `500px` breiten Container enthalten. Mit `flex-shrink` auf `0` gesetzt, dürfen die Elemente nicht schrumpfen, was dazu führt, dass sie den Container überlaufen.

```html live-sample___flex-shrink
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three has more content</div>
</div>
```

```css live-sample___flex-shrink
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 0 0 auto;
  width: 200px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
}
```

{{EmbedLiveSample("flex-shrink")}}

Ändern Sie den `flex-shrink`-Wert auf `1`; jedes Element wird in gleichem Maße schrumpfen, sodass alle Elemente in den Container passen. Der negative Freiraum wurde proportional aus jedem Element entfernt, wodurch jedes Flex-Element kleiner als seine ursprüngliche Breite wird.

### Kombination von `flex-shrink` und `flex-basis`

Es kann so erscheinen, als ob `flex-shrink` auf die gleiche Weise wie `flex-grow` funktioniert, indem Elemente geschrumpft statt vergrößert werden. Es gibt jedoch einige wichtige Unterschiede zu beachten.

Das Konzept der [Flex-Basengröße](#what_determines_the_base_size_of_an_item) beeinflusst, wie negativer Raum über Flex-Elemente verteilt wird. Der Flex-Schrumpffaktor wird mit der Flex-Basengröße multipliziert, wenn negativer Raum verteilt wird. Dies verteilt negativen Raum proportional dazu, wie stark das Element schrumpfen kann. Ein kleines Element wird zum Beispiel nicht auf Null schrumpfen, bevor ein größeres Element deutlich reduziert wurde.

Kleine Elemente werden nicht auf weniger als ihre `min-content`-Größe schrumpfen, was die kleinste Größe ist, die das Element haben kann, wenn es alle verfügbaren weichen Umbruchmöglichkeiten nutzt.

Dieses Beispiel zeigt die `min-content`-Untergrenze, wobei die `flex-basis` auf die Größe des Inhalts aufgelöst wird. Wenn Sie die Breite des Flex-Containers ändern, z.B. sie auf `700px` erhöhen, und dann die Flex-Elementbreite reduzieren, können Sie sehen, dass die ersten beiden Elemente umbrochen werden. Sie werden jedoch niemals kleiner als ihre `min-content`-Größe. Wenn der Container klein wird, wird der Raum nur aus dem dritten Element entfernt, wenn weiter geschrumpft wird.

```html live-sample___flex-shrink-min-content
<div class="box">
  <div>Item One</div>
  <div>Item Two</div>
  <div>Item Three has more content and so has a larger size</div>
</div>
```

```css live-sample___flex-shrink-min-content
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 auto;
}

.box {
  border: 2px dotted rgb(96 139 168);
  width: 500px;
  display: flex;
}
```

{{EmbedLiveSample("flex-shrink-min-content")}}

In der Praxis bietet dieses Schrumpfverhalten vernünftige Ergebnisse. Es verhindert, dass Inhalte vollständig verschwinden und kleiner als ihre minimale Inhaltsgröße werden. Die obigen Regeln sind sinnvoll für Inhalte, die schrumpfen müssen, um in ihren Container zu passen.

### Unterschiedliche `flex-shrink`-Faktoren für Elemente

Ebenso wie bei `flex-grow` können Sie Flex-Elementen unterschiedliche `flex-shrink`-Faktoren zuweisen. Dies kann helfen, das Standardverhalten zu ändern, wenn Sie beispielsweise möchten, dass ein Element schneller oder langsamer als seine Geschwister schrumpft oder überhaupt nicht schrumpft.

In diesem Beispiel hat das erste Element einen `flex-shrink`-Faktor von `1`, das zweite Element `0` (es wird also überhaupt nicht schrumpfen), und das dritte Element `4`, was insgesamt `5` Schrumpffaktoren ergibt. Das dritte Element schrumpft daher ungefähr viermal schneller als das erste, aber keines wird unter ihre `min-content`-Breite schrumpfen. Spielen Sie mit den verschiedenen Werten herum: Wie bei `flex-grow` können Sie hier ebenfalls Dezimal- oder größere Zahlen verwenden.

```html live-sample___flex-shrink-ratios
<div class="box">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```css live-sample___flex-shrink-ratios
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  display: flex;
  width: 500px;
  border: 2px dotted rgb(96 139 168);
}

.one {
  flex: 1 1 auto;
}

.two {
  flex: 1 0 auto;
}

.three {
  flex: 2 4 auto;
}
```

{{EmbedLiveSample("flex-shrink-ratios")}}

## Das Beherrschen der Größe von Flex-Elementen

Um zu verstehen, wie die Größen von Flex-Elementen funktionieren, müssen Sie die unten aufgeführten Faktoren berücksichtigen, die wir in diesen Leitfäden besprochen haben:

### Was bestimmt die Basisgröße eines Elements?

- Ist `flex-basis` auf `auto` gesetzt und hat das Element eine Breite eingestellt? Wenn ja, basiert die Größe auf dieser Breite.
- Ist `flex-basis` auf `auto` gesetzt, aber das Element hat keine Breite eingestellt? Wenn ja, basiert die Größe auf der Inhaltsgröße des Elements.
- Ist `flex-basis` eine Länge oder ein Prozentsatz, aber nicht null? Wenn ja, wird dies die Größe des Elements sein (gemessen an `min-content`).
- Ist `flex-basis` auf `0` gesetzt? Wenn ja, wird die Größe des Elements bei der Raumverteilungsberechnung nicht berücksichtigt.

### Gibt es verfügbaren Raum?

Elemente können nur wachsen, wenn es positiven Freiraum gibt, und sie werden nicht schrumpfen, es sei denn, es gibt negativen Freiraum.

- Wenn wir die Breiten aller Elemente (oder Höhen, wenn wir in einer Spalte arbeiten) addieren, ist diese Gesamtbreite **weniger** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird positiver Freiraum vorhanden sein und `flex-grow` wird in Kraft treten.
- Wenn wir die Breiten aller Elemente (oder Höhen, wenn wir in einer Spalte arbeiten) addieren, ist diese Gesamtbreite **mehr** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird negativer Freiraum vorhanden sein und `flex-shrink` wird in Kraft treten.

### Welche anderen Möglichkeiten gibt es, Raum zu verteilen?

Wenn Sie nicht möchten, dass dem Element Raum hinzugefügt wird, denken Sie daran, dass Sie den freien Raum zwischen oder um Elemente herum mit den in dem Leitfaden zum Ausrichten von Elementen in einem Flex-Container beschriebenen Ausrichtungseigenschaften verwalten können. Die {{CSSxRef("justify-content")}}-Eigenschaft ermöglicht die Verteilung von freiem Raum zwischen oder um die Elemente. Sie können auch automatische Ränder auf Flex-Elementen verwenden, um den Raum zu absorbieren und Lücken zwischen den Elementen zu schaffen.

Mit all diesen Flex-Eigenschaften, die Ihnen zur Verfügung stehen, werden Sie feststellen, dass die meisten Layout-Aufgaben möglich sind, auch wenn es anfangs ein wenig Experimentieren erfordern mag.
