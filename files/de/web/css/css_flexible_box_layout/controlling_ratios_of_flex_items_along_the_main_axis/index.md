---
title: Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse
slug: Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{CSSRef}}

In diesem Leitfaden erkunden wir die drei Eigenschaften, die die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse steuern: {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}}, und {{CSSxRef("flex-basis")}}. Ein vollständiges Verständnis dieser Eigenschaften, insbesondere wie sie mit wachsenden und schrumpfenden Elementen arbeiten, ist der Schlüssel zum Beherrschen des [CSS Flexible Box Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout).

## Ein erster Blick

Unsere drei Eigenschaften steuern die folgenden Aspekte der Flexibilität eines Flex-Elements:

- `flex-grow`: Wie viel vom positiven freien Raum erhält dieses Element?
- `flex-shrink`: Wie viel negativer freier Raum kann von diesem Element entfernt werden?
- `flex-basis`: Wie groß ist das Element, bevor Wachstum und Schrumpfung stattfinden?

Die Eigenschaften werden normalerweise über die Kurzform {{CSSxRef("flex")}} ausgedrückt. Der folgende Code würde die `flex-grow`-Eigenschaft auf `2`, `flex-shrink` auf `1` und `flex-basis` auf `auto` setzen.

```css
.item {
  flex: 2 1 auto;
}
```

## Wichtige Konzepte bei der Arbeit an der Hauptachse

Um die `flex`-Eigenschaften zu verstehen, ist es hilfreich, die _natürliche Größe_ von Flex-Elementen zu kennen, bevor Wachstum oder Schrumpfung stattfinden. Ebenso ist es wichtig, das Konzept des _freien Raums_ zu verstehen, der die Differenz zwischen der kombinierten natürlichen Größe aller Flex-Elemente entlang der Hauptachse und der Größe der Hauptachse selbst darstellt.

### Flex-Element-Größenbestimmung

Um zu bestimmen, wie viel Platz verfügbar ist, um Flex-Elemente anzuordnen, muss der Browser wissen, wie groß das Element zunächst ist. Wie wird dies für Elemente berechnet, die keine Breite oder Höhe mit einer absoluten Längeneinheit zugewiesen haben?

Im CSS können die Schlüsselwörter {{CSSxRef("min-content")}} und {{CSSxRef("max-content")}} anstelle einer {{cssxref("length")}}-Einheit verwendet werden. Im Allgemeinen ist `min-content` die kleinste Größe, die ein Element haben kann, während das längste Wort immer noch passt, und `max-content` ist die Größe, die das Element benötigen würde, um den gesamten Inhalt aufzunehmen, ohne dass ein Umbruch erfolgt.

Das folgende Beispiel enthält zwei Absatz-Elemente mit unterschiedlichen Textzeichenfolgen. Der erste Absatz hat eine `min-content`-Breite. Beachten Sie, dass der Text alle verfügbaren weichen Umbruchmöglichkeiten genutzt hat und so klein wie möglich wurde, ohne dass es überfließt. Dies ist die `min-content`-Größe dieser Zeichenfolge. Im Wesentlichen bestimmt das längste Wort in der Zeichenfolge die Größe.

Der zweite Absatz, mit einem `max-content`-Wert, macht das Gegenteil. Er wächst so groß wie nötig, um den Inhalt aufzunehmen, ohne die weichen Umbruchmöglichkeiten zu nutzen. Er wird das umliegende Feld überlaufen, wenn der Container zu schmal ist.

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

Denken Sie daran, wie sich `min-content` und `max-content` verhalten und welche Auswirkungen sie haben, während wir später in diesem Artikel `flex-grow` und `flex-shrink` erkunden.

### Positiver und negativer freier Raum

Wir müssen auch das Konzept von **positivem und negativem freien Raum** verstehen. Ein Flex-Container hat _positiven freien Raum_, wenn er mehr Platz hat, als benötigt wird, um die Flex-Elemente innerhalb des Containers anzuzeigen. Beispielsweise hat ein `500px` breiter Container mit {{CSSxRef("flex-direction")}} auf `row` und drei `100px` breiten Flex-Elementen `200px` positiven freien Raum. Dieser positive freie Raum kann zwischen den Elementen verteilt werden, wenn gewünscht wird, den Container zu füllen.

![Bild zeigt den verbleibenden freien Raum, nachdem die Elemente angezeigt wurden.](basics7.png)

Ein Flex-Container hat _negativen freien Raum_, wenn der kombinierte Wert der natürlichen Größen der Flex-Elemente größer ist als der verfügbare Platz im Flex-Container. Wenn die drei Flex-Elemente im obigen Beispiel eines `500px` breiten Containers jeweils `200px` breit sind, anstatt `100px`, beträgt ihre kombinierte natürliche Breite `600px`, was zu `100px` negativem freien Raum führt. Dieser Raum kann von den Elementen entfernt werden, um sie in den Container zu passen, oder die Elemente überlaufen.

![Die Elemente überlaufen den Container](ratios1.png)

Wir müssen dieses Verteilen des positiven freien Raums und Entfernen des negativen freien Raums verstehen, um die Eigenschaftskomponenten der Kurzform `flex` zu erlernen.

In den folgenden Beispielen ist die {{CSSxRef("flex-direction")}} auf `row` gesetzt, sodass die Größe der Elemente durch ihre Breite bestimmt wird. Wir berechnen den positiven und negativen freien Raum, indem wir die Gesamtbreite aller Elemente mit der Breite des Containers vergleichen. Sie könnten auch jedes Beispiel mit `flex-direction: column` ausprobieren. Dann wäre die Hauptachse die Spalte, und Sie würden dann die Höhe der Elemente und ihres Containers vergleichen, um den positiven und negativen freien Raum zu berechnen.

## Die `flex-basis`-Eigenschaft

Die {{CSSxRef("flex-basis")}}-Eigenschaft gibt die Anfangsgröße eines Flex-Elements an, bevor eine Verteilung des positiven oder negativen freien Raums erfolgt. Der Anfangswert für diese Eigenschaft ist `auto`. Diese Eigenschaft akzeptiert dieselben Werte wie die {{cssxref("width")}} und {{cssxref("height")}} Eigenschaften, und sie akzeptiert auch das Schlüsselwort `content`.

Wenn `flex-basis` auf `auto` gesetzt ist, ist die Anfangsgröße des Elements die {{cssxref("length-percentage")}} Größe der Hauptgröße, falls eine gesetzt wurde. Zum Beispiel, wenn das Element `width: 200px` gesetzt hat, wäre `200px` die `flex-basis` für dieses Element. Prozentwerte sind relativ zur inneren Hauptgröße des Flex-Containers. Wenn `width: 50%` gesetzt wäre, wäre die `flex-basis` für dieses Element die Hälfte der Breite des Inhaltsfelds des Containers. Wenn keine solche Größe gesetzt ist, was bedeutet, dass das Element automatisch bemessen wird, wird `auto` zur Größe seines Inhalts (siehe die Diskussion über [min- und max-content Größen](#flex-element-größenbestimmung) oben), was bedeutet, dass `flex-basis` die `max-content` Größe des Elements ist.

Dieses Beispiel enthält drei unflexible Flex-Elemente, bei denen sowohl `flex-grow` als auch `flex-shrink` auf `0` gesetzt sind. Das erste Element, das eine explizite Breite von `150px` hat, hat eine `flex-basis` von `150px`, während die anderen beiden Elemente keine Breite gesetzt haben und daher gemäß ihrer Inhaltsbreite oder `max-content` bemessen sind.

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

Zusätzlich zu dem `auto` Schlüsselwort und jedem anderen gültigen {{cssxref("width")}} Wert können Sie das Schlüsselwort `content` als `flex-basis` verwenden. Dies führt dazu, dass die `flex-basis` auf der Inhaltsgröße basiert, selbst wenn eine `width` am Element gesetzt ist. Dies erzeugt denselben Effekt wie das Entfernen einer gesetzten Breite und das Verwenden von `auto` als `flex-basis`. Während dies ähnlich wie das Setzen von `max-content` ist, ermöglicht der `content` Wert, dass jeder {{cssxref("aspect-ratio")}} basierend auf der Größe der Kreuzachse berechnet werden kann.

Um die Größe des Flex-Elements während der Raumverteilung vollständig zu ignorieren, setzen Sie `flex-basis` auf `0` und einen nicht-null `flex-grow` Wert. Lassen Sie uns `flex-grow` lernen, bevor wir uns diesen Wert in Aktion ansehen.

## Die `flex-grow`-Eigenschaft

Die {{CSSxRef("flex-grow")}}-Eigenschaft gibt den **Flex-Wachstumsfaktor** an, der bestimmt, wie sehr ein Flex-Element relativ zu den anderen Flex-Elementen im Flex-Container wächst, wenn positiver freier Raum verteilt wird.

Wenn alle Elemente denselben `flex-grow` Faktor haben, wird der positive freie Raum gleichmäßig unter ihnen verteilt. In diesem Szenario ist es üblich, `flex-grow: 1` zu setzen, aber Sie könnten ihnen jeden Wert geben, wie `88`, `100`, oder `1.2`; es ist ein Verhältnis. Wenn der Faktor für alle Flex-Elemente im Container gleich ist und es positiven freien Raum gibt, wird dieser Raum gleichmäßig verteilt.

### Kombination von `flex-grow` und `flex-basis`

Es kann verwirrend werden, wie `flex-grow` und `flex-basis` interagieren. Betrachten wir den Fall von drei Flex-Elementen mit unterschiedlichen Inhaltlängen und den folgenden `flex` Regeln, die auf sie angewendet werden:

```css
.class {
  flex: 1 1 auto;
}
```

In diesem Fall ist der `flex-basis` Wert `auto` und die Elemente haben keine Breite gesetzt, daher sind sie automatisch bemessen. Dies bedeutet, dass die verwendete `flex-basis` die `max-content` Größe jedes Elements ist. Nachdem die Elemente angeordnet wurden, gibt es etwas positiven freien Raum im Flex-Container, der im Bild unten als schraffierte Fläche gezeigt wird; die schraffierte Fläche ist der positive freie Raum, der zwischen den drei Elementen basierend auf ihren `flex-grow` Faktoren verteilt wird:

![Drei Elemente, die etwas mehr als die Hälfte der Breite beanspruchen, wobei der Rest der Breite schraffiert ist.](ratios2.png)

Wir arbeiten mit einer `flex-basis`, die der Inhaltsgröße gleich ist. Dies bedeutet, dass der verfügbare Raum zur Verteilung von dem insgesamt verfügbaren Raum (der Breite des Flex-Containers) abgezogen wird, und der verbleibende Raum dann gleichmäßig unter den drei Elementen geteilt wird. Das größte Element bleibt das größte, weil es von einer größeren Größe ausging, obwohl es dieselbe Menge an Ersatzraum wie die anderen hat:

![Die schraffierte Fläche wurde in Drittel unterteilt, wobei jedes Element einen einzigen Abschnitt angehängt bekommt.](ratios3.png)

Um drei gleich große Elemente zu erzeugen, selbst wenn die ursprünglichen Elemente unterschiedliche Größen haben, setzen Sie die `flex-basis` Komponente auf `0`:

```css
.class {
  flex: 1 1 0;
}
```

Hier setzen wir zum Zwecke der Raumverteilung die Größe jedes Elements auf `0`. Dies bedeutet, dass der gesamte Platz für die Verteilung verfügbar ist. Da alle Elemente denselben `flex-grow` Faktor haben, erhalten sie jeweils die gleiche Menge an Platz. Dies führt zu drei gleich breiten Flex-Elementen.

Probieren Sie aus, den `flex-grow` Faktor von 1 auf 0 in diesem Live-Beispiel zu ändern, um das unterschiedliche Verhalten zu sehen:

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

### Den Elementen unterschiedliche `flex-grow` Faktoren geben

Durch die Verwendung von `flex-grow` und `flex-basis` zusammen können wir die individuellen Elementgrößen kontrollieren, indem wir unterschiedlichen Flex-Elementen unterschiedliche `flex-grow` Faktoren zuweisen. Wenn wir die `flex-basis` auf `0` belassen, sodass der gesamte Raum verteilt werden kann, können wir unterschiedlich große Flex-Elemente erzeugen, indem wir jedem Element einen anderen `flex-grow` Faktor zuweisen.

Im folgenden Beispiel verwenden wir `1` als `flex-grow` Faktor für die ersten beiden Elemente und verdoppeln ihn auf `2` für das dritte Element. Mit `flex-basis: 0` auf allen Elementen wird der verfügbare Raum wie folgt verteilt:

1. Die `flex-grow` Faktor Werte aller benachbarten Flex-Elemente werden zusammengezählt (insgesamt 4 in diesem Fall).
2. Der positive freie Raum im Flex-Container wird durch diesen Gesamtwert geteilt.
3. Der freie Raum wird gemäß den individuellen Werten verteilt. In diesem Fall erhält das erste Element einen Teil, das zweite einen Teil, und das dritte zwei Teile. Dies bedeutet, dass das dritte Element doppelt so groß ist wie das erste und das zweite Element.

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

Denken Sie daran, dass Sie hier jeden positiven Wert verwenden können. Es ist das Verhältnis zwischen den Elementen, das zählt. Sie können große Zahlen oder Dezimalzahlen verwenden, das liegt bei Ihnen. Um dies zu testen, ändern Sie die `flex-grow` Werte im obigen Beispiel zu `.25`, `.25` und `.50`. Sie sollten dasselbe Ergebnis sehen.

## Die `flex-shrink`-Eigenschaft

Die {{CSSxRef("flex-shrink")}}-Eigenschaft gibt den **Flex-Schrumpffaktor** an, der bestimmt, wie sehr das Flex-Element im Verhältnis zu den anderen Flex-Elementen im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft behandelt Situationen, in denen der kombinierte `flex-basis` Wert der Flex-Elemente zu groß ist, um in den Flex-Container zu passen und ansonsten überlaufen würde. Solange der `flex-shrink` eines Elements ein positiver Wert ist, wird das Element schrumpfen, um nicht den Container zu überlaufen.

Während `flex-grow` verwendet wird, um den verfügbaren Raum um wachsende Elemente zu erweitern, wird `flex-shrink` verwendet, um Raum zu entfernen, damit Elemente in ihren Container passen, ohne dass ein Überlauf auftritt.

In diesem Beispiel gibt es drei `200px` breite Flex-Elemente in einem `500px` breiten Container. Mit `flex-shrink` auf `0` gesetzt, dürfen die Elemente nicht schrumpfen, was dazu führt, dass sie den Container überlaufen.

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

Ändern Sie den `flex-shrink` Wert auf `1`; jedes Element wird im gleichen Maße schrumpfen, wodurch alle Elemente in den Container passen. Der negative freie Raum wurde proportional von jedem Element entfernt, sodass jedes Flex-Element kleiner als seine ursprüngliche Breite ist.

### Kombination von `flex-shrink` und `flex-basis`

Es mag den Anschein haben, dass `flex-shrink` auf die gleiche Weise wie `flex-grow` funktioniert, indem es Elemente schrumpft anstatt sie wachsen zu lassen. Es gibt jedoch einige wichtige Unterschiede zu beachten.

Das Konzept der [Flex-Basis-Größe](#what_determines_the_base_size_of_an_item) beeinflusst, wie negativer Raum über Flex-Elemente verteilt wird. Der Flex-Schrumpffaktor wird bei der Verteilung des negativen Raums mit der Flex-Basis-Größe multipliziert. Dies verteilt den negativen Raum proportional dazu, wie sehr das Element schrumpfen kann. Ein kleines Element schrumpft also nicht auf null, bevor ein größeres Element spürbar reduziert wurde.

Kleine Elemente schrumpfen nicht unter ihre `min-content` Größe, die die kleinste Größe ist, die das Element haben kann, wenn es alle verfügbaren weichen Umbruchmöglichkeiten nutzt.

Dieses Beispiel demonstriert das Schrumpfen auf `min-content`, mit der `flex-basis` die zur Größe des Inhalts auflöst. Wenn Sie die Breite des Flex-Containers ändern, wie ihn auf `700px` erhöhen, und dann die Flex-Element-Breite verringern, können Sie sehen, dass die ersten beiden Elemente umbrechen. Sie werden jedoch niemals kleiner als ihre `min-content` Größe. Wenn der Container klein wird, wird der Raum nur aus dem dritten Element entfernt, wenn es weiter geschrumpft ist.

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

In der Praxis liefert dieses Schrumpfungsverhalten vernünftige Ergebnisse. Es verhindert, dass Inhalte vollständig verschwinden und dass sie kleiner als ihre minimale Inhaltsgröße werden. Die obigen Regeln sind sinnvoll für Inhalte, die geschrumpft werden müssen, um in ihren Container zu passen.

### Den Elementen unterschiedliche `flex-shrink` Faktoren geben

Ebenso wie bei `flex-grow` können Sie Flex-Elementen unterschiedliche `flex-shrink` Faktoren geben. Dies kann helfen, das Standardverhalten zu ändern, wenn Sie beispielsweise möchten, dass ein Element schneller oder langsamer als seine Geschwister schrumpft oder überhaupt nicht schrumpft.

Im folgenden Beispiel hat das erste Element einen `flex-shrink` Faktor von `1`, das zweite Element `0` (sodass es überhaupt nicht schrumpft), und das dritte Element `4`, was insgesamt `5` Schrumpffaktoren ergibt. Das dritte Element schrumpft daher etwa viermal schneller als das erste, aber keines schrumpft unter ihre `min-content` Breite. Spielen Sie mit den unterschiedlichen Werten herum: Genauso wie bei `flex-grow` können Sie hier auch Dezimalzahlen oder größere Zahlen verwenden.

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

## Meistern der Größenbestimmung von Flex-Elementen

Um zu verstehen, wie die Größenbestimmung von Flex-Elementen funktioniert, müssen Sie die folgenden Faktoren berücksichtigen, die wir in diesen Leitfäden besprochen haben:

### Was bestimmt die Basisgröße eines Elements?

- Ist `flex-basis` auf `auto` gesetzt und hat das Element eine Breite gesetzt? Wenn ja, basiert die Größe auf dieser Breite.
- Ist `flex-basis` auf `auto` gesetzt, aber das Element hat keine Breite gesetzt? Wenn ja, basiert die Größe auf der Inhaltsgröße des Elements.
- Ist `flex-basis` eine Länge oder ein Prozentsatz, aber nicht null? Wenn ja, ist dies die Größe des Elements (auf `min-content` abgerundet).
- Ist `flex-basis` auf `0` gesetzt? Wenn ja, wird die Größe des Elements bei der Berechnung der Raumverteilung nicht berücksichtigt.

### Gibt es verfügbaren Raum?

Elemente können nur wachsen, wenn es positiven freien Raum gibt, und sie werden nicht schrumpfen, es sei denn, es gibt negativen freien Raum.

- Wenn wir die Breiten aller Elemente (oder Höhen, wenn wir in einer Spalte arbeiten) zusammenzählen, ist diese Gesamtsumme **weniger** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es positiven freien Raum geben, und `flex-grow` wird ins Spiel kommen.
- Wenn wir die Breiten aller Elemente (oder Höhen, wenn wir in einer Spalte arbeiten) zusammenzählen, ist diese Gesamtsumme **mehr** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es negativen freien Raum geben, und `flex-shrink` wird ins Spiel kommen.

### Welche anderen Möglichkeiten gibt es, um Raum zu verteilen?

Wenn Sie den Elementen nicht zusätzlichen Raum hinzufügen möchten, denken Sie daran, dass Sie den freien Raum zwischen oder um die Elemente mit den Ausrichtungseigenschaften verwalten können, die im Leitfaden zur Ausrichtung von Elementen in einem Flex-Container beschrieben sind. Die {{CSSxRef("justify-content")}}-Eigenschaft wird es ermöglichen, den freien Raum zwischen oder um die Elemente zu verteilen. Sie können auch automatische Abstände auf Flex-Elementen verwenden, um Raum zu absorbieren und Lücken zwischen den Elementen zu schaffen.

Mit all diesen zur Verfügung stehenden Flex-Eigenschaften werden Sie feststellen, dass die meisten Layout-Aufgaben möglich sind, obwohl es anfänglich etwas Experimentieren erfordern könnte.
