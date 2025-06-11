---
title: Steuerung von Verhältnissen von Flex-Elementen entlang der Hauptachse
short-title: Steuerung von Flex-Element-Verhältnissen
slug: Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

In diesem Leitfaden erkunden wir die drei Eigenschaften, die die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse kontrollieren: {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}}. Ein vollständiges Verständnis dafür, wie diese Eigenschaften bei wachsenden und schrumpfenden Elementen funktionieren, ist der Schlüssel zum Beherrschen des [CSS Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout).

## Ein erster Blick

Unsere drei Eigenschaften steuern die folgenden Aspekte der Flexibilität eines Flex-Elements:

- `flex-grow`: Wie viel des positiven freien Raums erhält dieses Element?
- `flex-shrink`: Wie viel negativer freier Raum kann von diesem Element entfernt werden?
- `flex-basis`: Wie groß ist das Element, bevor Wachstum und Schrumpfung stattfinden?

Die Eigenschaften werden in der Regel mit der Kurzform {{CSSxRef("flex")}} ausgedrückt. Der folgende Code würde die `flex-grow`-Eigenschaft auf `2`, `flex-shrink` auf `1` und `flex-basis` auf `auto` setzen.

```css
.item {
  flex: 2 1 auto;
}
```

## Wichtige Konzepte beim Arbeiten auf der Hauptachse

Um die `flex`-Eigenschaften zu verstehen, ist es hilfreich, die _natürliche Größe_ von Flex-Elementen zu kennen, bevor irgendein Wachsen oder Schrumpfen stattfindet. Zusätzlich ist es wichtig, das Konzept des _freien Raums_ zu verstehen, der die Differenz zwischen der kombinierten natürlichen Größe aller Flex-Elemente entlang der Hauptachse und der Größe der Hauptachse selbst ist.

### Größenbestimmung von Flex-Elementen

Um zu bestimmen, wie viel Platz für die Anordnung von Flex-Elementen verfügbar ist, muss der Browser wissen, wie groß das Element anfangs ist. Wie wird dies für Elemente berechnet, die keine Breite oder Höhe über eine absolute Längeneinheit angewendet haben?

In CSS können die Schlüsselwörter {{CSSxRef("min-content")}} und {{CSSxRef("max-content")}} anstelle einer {{cssxref("length")}}-Einheit verwendet werden. Allgemein ist `min-content` die kleinste Größe, die ein Element haben kann, während es das längste Wort noch enthält, und `max-content` ist die Größe, die das Element benötigt, um den gesamten Inhalt ohne Umbrüche zu passen.

Das folgende Beispiel enthält zwei Absatzelemente mit unterschiedlichen Textzeichenfolgen. Der erste Absatz hat eine Breite von `min-content`. Beachten Sie, dass der Text alle verfügbaren weichen Umbruchmöglichkeiten genutzt hat, um so klein wie möglich zu werden, ohne überzulaufen. Dies ist die `min-content`-Größe dieser Zeichenfolge. Im Wesentlichen bestimmt das längste Wort in der Zeichenfolge die Größe.

Der zweite Absatz, mit einem Wert von `max-content`, verhält sich entgegengesetzt. Er wächst, um groß genug zu sein, um den Inhalt zu passen, ohne weiche Umbruchmöglichkeiten zu nutzen. Er wird den Kasten, in dem er sich befindet, überlaufen, wenn dieser Container zu schmal ist.

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

Merken Sie sich dieses Verhalten und welche Auswirkungen `min-content` und `max-content` haben, während wir später in diesem Artikel `flex-grow` und `flex-shrink` untersuchen.

### Positiver und negativer freier Raum

Wir müssen auch das Konzept des **positiven und negativen freien Raums** verstehen. Wenn ein Flex-Container _positiven freien Raum_ hat, hat er mehr Platz als nötig, um die Flex-Elemente im Container darzustellen. Ein Beispiel: Ein `500px` breiter Container, mit {{CSSxRef("flex-direction")}} auf `row` gesetzt und drei `100px` breite Flex-Elemente enthaltend, verfügt über `200px` positiven freien Raum. Dieser positive freie Raum kann zwischen den Elementen verteilt werden, wenn eine Auffüllung des Containers gewünscht ist.

![Bild zeigt Platz, der übrig bleibt, nachdem die Elemente angezeigt wurden.](basics7.png)

Ein Flex-Container hat _negativen freien Raum_, wenn der kombinierte Wert der natürlichen Größen der Flex-Elemente größer ist als der verfügbare Platz im Flex-Container. Wenn die drei Flex-Elemente im obigen Beispiel eines `500px` breiten Containers jeweils `200px` breit statt `100px` sind, ergibt sich eine kombinierte natürliche Breite von `600px`, was zu `100px` negativen freien Raum führt. Dieser Raum kann von den Elementen entfernt werden, um sie in den Container passen zu lassen, oder die Elemente werden überlaufen.

![Die Elemente überlaufen den Container](ratios1.png)

Wir müssen dieses Verteilung von positivem freien Raum und die Entfernung von negativem freien Raum verstehen, um die Eigenschaftskomponenten der `flex`-Kurzform zu lernen.

In den folgenden Beispielen wird {{CSSxRef("flex-direction")}} auf `row` gesetzt, sodass die Größe der Elemente durch ihre Breite bestimmt wird. Wir werden den positiven und negativen freien Raum berechnen, indem wir die Gesamtbreite aller Elemente mit der Breite des Containers vergleichen. Sie könnten auch jedes Beispiel mit `flex-direction: column` ausprobieren. Die Hauptachse wäre dann die Spalte, und Sie würden dann die Höhe der Elemente und ihres Containers vergleichen, um den positiven und negativen freien Raum zu berechnen.

## Die `flex-basis`-Eigenschaft

Die {{CSSxRef("flex-basis")}}-Eigenschaft gibt die Ausgangsgröße eines Flex-Elements an, bevor eine Verteilung des positiven oder negativen freien Raums erfolgt. Der Anfangswert für diese Eigenschaft ist `auto`. Diese Eigenschaft akzeptiert die gleichen Werte wie die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}}, und sie akzeptiert auch das Schlüsselwort `content`.

Wenn `flex-basis` auf `auto` gesetzt ist, ist die Anfangsgröße des Elements die {{cssxref("length-percentage")}}-Größe der Hauptgröße, falls eine gesetzt wurde. Zum Beispiel, wenn das Element `width: 200px` gesetzt hat, dann wäre `200px` der `flex-basis` für dieses Element. Prozentwerte sind relativ zur inneren Hauptgröße des Flex-Containers. Wenn `width: 50%` gesetzt würde, wäre der `flex-basis` für dieses Element die Hälfte der Breite des Inhaltskastens des Containers. Wenn keine solche Größe gesetzt ist, das heißt, das Element ist auto-größenabhängig, dann wird `auto` auf die Größe seines Inhalts aufgelöst (siehe die Diskussion über [`min-` und `max-content` Größen](#größenbestimmung_von_flex-elementen) oben), was bedeutet, dass `flex-basis` die `max-content`-Größe des Elements ist.

Dieses Beispiel enthält drei unflexible Flex-Elemente, mit `flex-grow` und `flex-shrink` beide auf `0` gesetzt. Das erste Element, das eine explizite Breite von `150px` hat, nimmt einen `flex-basis` von `150px`, während die anderen beiden Elemente keine Breite gesetzt haben und daher nach ihrer Inhaltsbreite oder `max-content` bemessen werden.

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

Zusätzlich zu dem Schlüsselwort `auto` und jedem anderen gültigen {{cssxref("width")}}-Wert können Sie das Schlüsselwort `content` als `flex-basis` verwenden. Dies führt dazu, dass `flex-basis` auf der Inhaltsgröße basiert, selbst wenn eine `width` auf dem Element gesetzt ist. Dies erzeugt denselben Effekt wie das Entfernen jeglicher gesetzter Breite und die Verwendung von `auto` als `flex-basis`. Während das Ändern auf `max-content` ähnlich ist, ermöglicht der `content`-Wert, dass jedes {{cssxref("aspect-ratio")}} basierend auf der Querachse berechnet wird.

Um die Größe des Flex-Elements während der Raumverteilung vollständig zu ignorieren, setzen Sie `flex-basis` auf `0` und einen nicht null `flex-grow`-Wert. Lassen Sie uns `flex-grow` lernen, bevor Sie diesen Wert in Aktion sehen.

## Die `flex-grow`-Eigenschaft

Die {{CSSxRef("flex-grow")}}-Eigenschaft gibt den **Flex-Wachstumsfaktor** an, der bestimmt, wie viel ein Flex-Element relativ zu den anderen Flex-Elementen im Flex-Container wächst, wenn positiver freier Raum verteilt wird.

Wenn alle Elemente denselben `flex-grow`-Faktor haben, wird der positive freie Raum gleichmäßig unter ihnen verteilt. Für dieses Szenario ist es gängige Praxis, `flex-grow: 1` zu setzen, aber Sie könnten ihnen jeden Wert geben, wie `88`, `100` oder `1.2`; es ist ein Verhältnis. Wenn der Faktor für alle Flex-Elemente im Container gleich ist und es positiven freien Raum gibt, wird dieser Raum gleichmäßig verteilt.

### Kombination von `flex-grow` und `flex-basis`

Es kann verwirrend werden, wie `flex-grow` und `flex-basis` zusammenarbeiten. Betrachten wir den Fall von drei Flex-Elementen mit unterschiedlichen Inhaltslängen und den folgenden `flex`-Regeln, die auf sie angewendet werden:

```css
.class {
  flex: 1 1 auto;
}
```

In diesem Fall beträgt der `flex-basis`-Wert `auto` und die Elemente haben keine Breite gesetzt, so dass sie autogroß sind. Dies bedeutet, dass der verwendete `flex-basis` die `max-content`-Größe jedes Elements ist. Nachdem die Elemente ausgelegt wurden, gibt es etwas positiven freien Raum im Flex-Container, der im Bild unten als schraffierter Bereich gezeigt wird; der schraffierte Bereich ist der positive freie Raum, der zwischen den drei Elementen basierend auf ihren `flex-grow`-Faktoren verteilt wird:

![Drei Elemente nehmen etwas mehr als die Hälfte der Breite ein, der Rest der Breite ist schraffiert](ratios2.png)

Wir arbeiten mit einem `flex-basis`, der gleich der Inhaltgröße ist. Das bedeutet, dass der verfügbare Raum zum Verteilen von der Gesamtgröße (der Breite des Flex-Containers) subtrahiert wird und der verbleibende Raum dann gleichmäßig auf die drei Elemente verteilt wird. Das größte Element bleibt das größte, da es von einer größeren Größe aus startete, obwohl es die gleiche Menge an frei verfügbaren Raum wie die anderen hat:

![Der schraffierte Bereich wurde in Drittel geteilt, wobei jedes Element einen einzigen Abschnitt angehängt bekommt](ratios3.png)

Um drei gleich große Elemente zu schaffen, selbst wenn die ursprünglichen Elemente unterschiedliche Größen haben, setzen Sie die `flex-basis`-Komponente auf `0`:

```css
.class {
  flex: 1 1 0;
}
```

Hier setzen wir für die Berechnung der Raumverteilung die Größe jedes Elements auf `0`. Das bedeutet, dass der gesamte Raum zur Verteilung verfügbar ist. Da alle Elemente denselben `flex-grow`-Faktor haben, erhalten sie jeweils die gleiche Menge an Raum. Dies führt zu drei gleich breiten Flex-Elementen.

Versuchen Sie, den `flex-grow`-Faktor von 1 auf 0 in diesem Live-Beispiel zu ändern, um das unterschiedliche Verhalten zu sehen:

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

### Verschiedene `flex-grow`-Faktoren für Elemente

Die Verwendung von `flex-grow` und `flex-basis` zusammen ermöglicht es uns, individuelle Elementgrößen zu steuern, indem wir unterschiedliche `flex-grow`-Faktoren setzen. Wenn wir die `flex-basis` bei `0` halten, damit der gesamte Raum verteilt werden kann, können wir unterschiedlich große Flex-Elemente erzeugen, indem wir jedem Element einen anderen `flex-grow`-Faktor zuweisen.

Im folgenden Beispiel verwenden wir `1` als `flex-grow`-Faktor für die ersten zwei Elemente und verdoppeln es auf `2` für das dritte Element. Mit `flex-basis: 0` bei allen Elementen wird der verfügbare Raum wie folgt verteilt:

1. Die `flex-grow`-Faktorwerte aller Geschwister-Flex-Elemente werden zusammengezählt (insgesamt 4 in diesem Fall).
2. Der positive freie Raum im Flex-Container wird durch diesen Gesamtwert geteilt.
3. Der freie Raum wird gemäß den individuellen Werten verteilt. In diesem Fall erhält das erste Element einen Teil, das zweite einen Teil und das dritte zwei Teile. Das bedeutet, dass das dritte Element doppelt so groß ist wie die ersten und zweiten Elemente.

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

Denken Sie daran, dass Sie hier jeden positiven Wert verwenden können. Entscheidend ist das Verhältnis zwischen den Elementen. Sie können große Zahlen oder Dezimalzahlen verwenden; es liegt an Ihnen. Um dies zu testen, ändern Sie die `flex-grow`-Werte im obigen Beispiel auf `.25`, `.25` und `.50`. Sie sollten das gleiche Ergebnis sehen.

## Die `flex-shrink`-Eigenschaft

Die {{CSSxRef("flex-shrink")}}-Eigenschaft legt den **Flex-Schrumpffaktor** fest, der bestimmt, wie stark das Flex-Element im Vergleich zu den anderen Flex-Elementen im Flex-Container schrumpft, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der kombinierte `flex-basis`-Wert der Flex-Elemente zu groß ist, um in den Flex-Container zu passen und andernfalls überläuft. Solange der `flex-shrink` eines Elements einen positiven Wert hat, wird das Element schrumpfen, um nicht über den Container hinauszufließen.

Während `flex-grow` verwendet wird, um verfügbaren Raum zu den Elementen hinzuzufügen, die wachsen können, wird `flex-shrink` verwendet, um Raum zu entfernen, damit die Elemente in ihren Container passen, ohne überzulaufen.

In diesem Beispiel gibt es drei `200px` breite Flex-Elemente in einem `500px` breiten Container. Mit `flex-shrink` auf `0` gesetzt, dürfen die Elemente nicht schrumpfen, wodurch sie über den Container überlaufen.

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

Ändern Sie den `flex-shrink`-Wert auf `1`; jedes Element wird um denselben Betrag schrumpfen und alle Elemente passen in den Container. Der negative freie Raum wurde proportional von jedem Element entfernt, was jedes Flex-Element kleiner als seine ursprüngliche Breite macht.

### Kombination von `flex-shrink` und `flex-basis`

Es mag den Anschein haben, dass `flex-shrink` auf die gleiche Weise wie `flex-grow` funktioniert, indem es Elemente schrumpft statt wachsen lässt. Es gibt jedoch einige wichtige Unterschiede, die zu beachten sind.

Das Konzept der [Flex-Basisgröße](#what_determines_the_base_size_of_an_item) beeinflusst, wie negativer Raum über Flex-Elemente verteilt wird. Der Flex-Schrumpffaktor wird mit der Flex-Basisgröße multipliziert, wenn negativer Raum verteilt wird. Dies verteilt negativen Raum proportional dazu, wie viel das Element schrumpfen kann. Ein kleines Element wird zum Beispiel nicht auf null schrumpfen, bevor ein größeres Element spürbar reduziert wurde.

Kleine Elemente können nicht kleiner als ihre `min-content`-Größe schrumpfen, was die kleinste Größe des Elements ist, wenn es alle verfügbaren weichen Umbruchmöglichkeiten nutzt.

Dieses Beispiel demonstriert die `min-content`-Fußbodenregel, wobei `flex-basis` auf die Größe des Inhalts aufgelöst wird. Wenn Sie die Breite des Flex-Containers ändern, indem Sie sie auf `700px` erhöhen, und dann die Breite der Flex-Elemente verringern, sehen Sie, dass die ersten zwei Elemente umgebrochen werden. Sie werden jedoch nie kleiner als ihre `min-content`-Größe werden. Wenn der Container klein wird, wird der Raum nur von dem dritten Element entfernt, wenn es weiter geschrumpft wird.

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

In der Praxis liefert dieses Schrumpfverhalten vernünftige Ergebnisse. Es verhindert, dass Inhalt vollständig verschwindet und dass er kleiner als seine minimale Inhaltsgröße wird. Die oben genannten Regeln sind sinnvoll für Inhalte, die schrumpfen müssen, um in ihren Container zu passen.

### Geben Sie Elementen unterschiedliche `flex-shrink`-Faktoren

In gleicher Weise wie bei `flex-grow` können Sie Flex-Elementen unterschiedliche `flex-shrink`-Faktoren zuweisen. Dies kann dazu beitragen, das Standardverhalten zu ändern, wenn Sie beispielsweise möchten, dass ein Element schneller oder langsamer als seine Geschwister schrumpft oder überhaupt nicht schrumpft.

In diesem Beispiel hat das erste Element einen `flex-shrink`-Faktor von `1`, das zweite Element `0` (sodass es überhaupt nicht schrumpft), und das dritte Element `4`, was insgesamt 5 Schrumpffaktoren ergibt. Das dritte Element schrumpft daher ungefähr viermal schneller als das erste, aber keines wird unter ihre `min-content`-Breite schrumpfen. Spielen Sie mit den verschiedenen Werten herum: Wie bei `flex-grow` können Sie hier auch Dezimalzahlen oder größere Zahlen verwenden.

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

## Beherrschung der Größenbestimmung von Flex-Elementen

Um zu verstehen, wie die Größenbestimmung von Flex-Elementen funktioniert, müssen Sie die untenstehenden Faktoren in Betracht ziehen, die wir in diesen Leitfäden besprochen haben:

### Was bestimmt die Basisgröße eines Elements?

- Ist `flex-basis` auf `auto` gesetzt, und hat das Element eine Breite festgelegt? Wenn ja, basiert die Größe auf dieser Breite.
- Ist `flex-basis` auf `auto` gesetzt, aber das Element hat keine Breite festgelegt? Wenn ja, basiert die Größe auf der Inhaltsgröße des Elements.
- Ist `flex-basis` eine Länge oder ein Prozentwert, aber nicht null? Wenn ja, ist dies die Größe des Elements (begrenzt bei `min-content`).
- Ist `flex-basis` auf `0` gesetzt? Wenn ja, wird die Größe des Elements bei der Berechnung der Raumteilung nicht berücksichtigt.

### Gibt es verfügbare Räume?

Elemente können nur wachsen, wenn es positiven freien Raum gibt, und sie werden nicht schrumpfen, es sei denn, es gibt negativen freien Raum.

- Wenn wir die Breiten aller Elemente zusammenzählen (oder Höhen, wenn in einer Spalte gearbeitet wird), ist diese Summe **weniger** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es positiven freien Raum geben und `flex-grow` wird eine Rolle spielen.
- Wenn wir die Breiten aller Elemente zusammenzählen (oder Höhen, wenn in einer Spalte gearbeitet wird), ist diese Summe **größer** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es negativen freien Raum geben und `flex-shrink` wird eine Rolle spielen.

### Welche anderen Möglichkeiten gibt es, um Raum zu verteilen?

Wenn Sie nicht möchten, dass Raum zu den Elementen hinzugefügt wird, denken Sie daran, dass Sie freien Raum zwischen oder um die Elemente herum mit den Ausrichtungseigenschaften verwalten können, die im Leitfaden zur Ausrichtung von Elementen in einem Flex-Container beschrieben sind. Die {{CSSxRef("justify-content")}}-Eigenschaft ermöglicht die Verteilung von freiem Raum zwischen oder um die Elemente herum. Sie können auch automatische Ränder auf Flex-Elementen verwenden, um Raum aufzunehmen und Lücken zwischen den Elementen zu schaffen.

Mit all diesen Flex-Eigenschaften zur Verfügung werden Sie feststellen, dass die meisten Layout-Aufgaben möglich sind, auch wenn es anfangs etwas Experimentieren erfordert.
