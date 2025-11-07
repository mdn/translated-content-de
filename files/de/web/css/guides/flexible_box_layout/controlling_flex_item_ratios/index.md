---
title: Steuerung der Verhältnisse von Flex-Items entlang der Hauptachse
short-title: Steuerung der Flex-Item-Verhältnisse
slug: Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden untersuchen wir die drei Eigenschaften, die die Größe und Flexibilität von Flex-Items entlang der Hauptachse steuern: {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}}. Das vollständige Verständnis dieser Eigenschaften in Bezug auf wachsende und schrumpfende Items ist der Schlüssel zum Beherrschen des [CSS Flexible Box Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout).

## Ein erster Blick

Unsere drei Eigenschaften steuern die folgenden Aspekte der Flexibilität eines Flex-Items:

- `flex-grow`: Wie viel von dem positiven freien Raum erhält dieses Item?
- `flex-shrink`: Wie viel negativer freier Raum kann diesem Item entnommen werden?
- `flex-basis`: Was ist die Größe des Items, bevor Wachsen und Schrumpfen stattfinden?

Die Eigenschaften werden normalerweise mithilfe der Kurzform {{CSSxRef("flex")}} ausgedrückt. Der folgende Code würde die Eigenschaft `flex-grow` auf `2`, `flex-shrink` auf `1` und `flex-basis` auf `auto` setzen.

```css
.item {
  flex: 2 1 auto;
}
```

## Wichtige Konzepte bei der Arbeit an der Hauptachse

Um die `flex`-Eigenschaften zu verstehen, ist es hilfreich, die _natürliche Größe_ von Flex-Items zu kennen, bevor ein Wachstum oder Schrumpfen stattfindet. Zudem ist es wichtig, das Konzept des _freien Raums_ zu verstehen, der die Differenz zwischen der kombinierten natürlichen Größe aller Flex-Items entlang der Hauptachse und der Größe der Hauptachse selbst darstellt.

### Größenbestimmung von Flex-Items

Um zu bestimmen, wie viel Platz zur Verfügung steht, um Flex-Items zu layouten, muss der Browser wissen, wie groß das Item zu Beginn ist. Wie wird dies für Items berechnet, die keine Breite oder Höhe mit einer absoluten Längeneinheit haben?

In CSS können die Schlüsselwörter {{CSSxRef("min-content")}} und {{CSSxRef("max-content")}} anstelle einer {{cssxref("length")}}-Einheit verwendet werden. Im Allgemeinen ist `min-content` die kleinste Größe, die ein Element haben kann, während es dennoch das längste Wort einpasst, und `max-content` ist die Größe, die das Element benötigen würde, um den gesamten Inhalt ohne Umbrüche aufzunehmen.

Das folgende Beispiel enthält zwei Absatz-Elemente mit unterschiedlichen Textsträngen. Der erste Absatz hat eine Breite von `min-content`. Beachten Sie, dass der Text alle verfügbaren weichen Zeilenumbrüche genutzt hat, um so klein wie möglich zu werden, ohne überzulaufen. Dies ist die `min-content`-Größe dieses Strings. Im Wesentlichen bestimmt das längste Wort im String die Größe.

Der zweite Absatz, mit einem Wert von `max-content`, macht das Gegenteil. Er wird so groß, wie er benötigt wird, um den Inhalt ohne Nutzung weicher Umbruchmöglichkeiten aufzunehmen. Er überläuft den Container, wenn dieser zu schmal ist.

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

Merken Sie sich dieses Verhalten und die Auswirkungen von `min-content` und `max-content`, während wir später in diesem Artikel `flex-grow` und `flex-shrink` erkunden.

### Positiver und negativer freier Raum

Wir müssen auch das Konzept des **positiven und negativen freien Raums** verstehen. Ein Flex-Container hat _positiven freien Raum_, wenn er mehr Platz hat, als erforderlich ist, um die Flex-Items im Inneren des Containers anzuzeigen. Zum Beispiel hat ein `500px` breiter Container, mit {{CSSxRef("flex-direction")}} auf `row` gesetzt und drei `100px` breite Flex-Items enthaltend, `200px` positiven freien Raum. Dieser positive freie Raum kann zwischen den Items verteilt werden, wenn das Füllen des Containers gewünscht ist.

![Bild zeigt den übrig gebliebenen Platz, nachdem die Items angezeigt wurden.](basics7.png)

Ein Flex-Container hat _negativen freien Raum_, wenn der kombinierte Wert der natürlichen Größen der Flex-Items größer ist als der verfügbare Platz im Flex-Container. Wenn die drei Flex-Items im obigen Beispiel für einen `500px` breiten Container jeweils `200px` breit anstelle von `100px` sind, beträgt ihre kombinierte natürliche Breite `600px`, was zu `100px` negativem freien Raum führt. Dieser Raum kann den Items entnommen werden, um sie in den Container zu passen, oder die Items werden überlaufen.

![Die Items überlaufen den Container](ratios1.png)

Wir müssen dieses Verteilen von positivem freien Raum und das Entfernen von negativem freien Raum verstehen, um mehr über die Eigenschaften der `flex`-Kurzform zu lernen.

In den folgenden Beispielen ist die {{CSSxRef("flex-direction")}} auf `row` gesetzt, sodass die Größe der Items durch ihre Breite bestimmt wird. Wir werden den positiven und negativen freien Raum berechnen, indem wir die Gesamtbreite aller Items mit der Breite des Containers vergleichen. Sie könnten auch jedes Beispiel mit `flex-direction: column` ausprobieren. Die Hauptachse wäre dann die Spalte, und Sie würden die Höhe der Items und ihres Containers vergleichen, um den positiven und negativen freien Raum zu berechnen.

## Die Eigenschaft `flex-basis`

Die {{CSSxRef("flex-basis")}}-Eigenschaft gibt die anfängliche Größe eines Flex-Items an, bevor eine Verteilung des positiven oder negativen freien Raums erfolgt. Der Anfangswert für diese Eigenschaft ist `auto`. Diese Eigenschaft akzeptiert die gleichen Werte wie die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}}, und sie akzeptiert ebenfalls das `content` Schlüsselwort.

Wenn `flex-basis` auf `auto` gesetzt ist, ist die Anfangsgröße des Items die {{cssxref("length-percentage")}}-Größe der Hauptgröße, falls eine eingestellt wurde. Wenn das Item beispielsweise `width: 200px` eingestellt hat, dann wäre `200px` die `flex-basis` für dieses Item. Prozentwerte beziehen sich auf die innere Hauptgröße des Flex-Containers. Wenn `width: 50%` eingestellt wurde, ist die `flex-basis` für dieses Item die Hälfte der Breite der Content-Box des Containers. Wenn keine solche Größe eingestellt ist, das heißt, das Item ist automatisch dimensioniert, dann löst sich `auto` in die Größe seines Inhalts auf (siehe die Diskussion zu [`min-` und `max-content`-Größen](#größenbestimmung_von_flex-items) oben), was bedeutet, dass die `flex-basis` die `max-content`-Größe des Items ist.

Dieses Beispiel enthält drei nicht flexible Flex-Items, mit sowohl `flex-grow` als auch `flex-shrink` auf `0` gesetzt. Das erste Item, das eine explizite Breite von `150px` hat, nimmt eine `flex-basis` von `150px`, während die anderen beiden Items keine eingestellte Breite haben und daher entsprechend ihrer Inhaltsbreite oder `max-content` dimensioniert sind.

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

Zusätzlich zum `auto`-Schlüsselwort und jedem anderen gültigen {{cssxref("width")}}-Wert können Sie das `content`-Schlüsselwort als `flex-basis` verwenden. Dies führt dazu, dass `flex-basis` basierend auf der Inhaltsgröße ist, selbst wenn eine `width` auf dem Item eingestellt ist. Dies erzeugt denselben Effekt wie das Entfernen jeglicher eingestellter Breite und die Verwendung von `auto` als `flex-basis`. Während es ähnlich wie `max-content` ist, ermöglicht der Wert `content`, dass ein beliebiges {{cssxref("aspect-ratio")}} basierend auf der Größe der Querachse berechnet wird.

Um die Größe des Flex-Items während der Platzverteilung vollständig zu ignorieren, setzen Sie `flex-basis` auf `0` und einen anderen positiven `flex-grow`-Wert. Lassen Sie uns `flex-grow` kennenlernen, bevor wir uns diesen Wert in Aktion ansehen.

## Die Eigenschaft `flex-grow`

Die {{CSSxRef("flex-grow")}}-Eigenschaft gibt den **Flex-Wachstumsfaktor** an, der bestimmt, wie viel ein Flex-Item im Verhältnis zu den anderen Flex-Items im Flex-Container wachsen wird, wenn positiver freier Raum verteilt wird.

Wenn alle Items denselben `flex-grow`-Faktor haben, wird der positive freie Raum gleichmäßig unter ihnen verteilt. In diesem Szenario ist es gängige Praxis, `flex-grow: 1` zu setzen, aber Sie könnten ihnen jeden Wert geben, wie `88`, `100` oder `1.2`; es ist ein Verhältnis. Wenn der Faktor für alle Flex-Items im Container gleich ist und es positiven freien Raum gibt, wird dieser gleichmäßig verteilt.

### Kombination von `flex-grow` und `flex-basis`

Die Interaktion von `flex-grow` und `flex-basis` kann verwirrend sein. Betrachten wir den Fall von drei Flex-Items mit unterschiedlicher Inhaltslänge und den folgenden `flex`-Regeln, die auf sie angewendet werden:

```css
.class {
  flex: 1 1 auto;
}
```

In diesem Fall ist der `flex-basis`-Wert `auto` und die Items haben keine eingestellte Breite, so dass sie automatisch dimensioniert werden. Das bedeutet, dass die verwendete `flex-basis` die `max-content`-Größe jedes Items ist. Nachdem die Items angeordnet wurden, gibt es etwas positiven freien Raum im Flex-Container, der im Bild unten als schraffierter Bereich dargestellt ist; der schraffierte Bereich ist der positive freie Raum, der zwischen den drei Items basierend auf ihren `flex-grow`-Faktoren verteilt wird:

![Drei Items nehmen etwas mehr als die Hälfte der Breite ein, der Rest der Breite ist schraffiert markiert](ratios2.png)

Wir arbeiten mit einer `flex-basis`, die der Inhaltsgröße entspricht. Das bedeutet, dass der verfügbare Raum zur Verteilung von dem insgesamt verfügbaren Raum (der Breite des Flex-Containers) abgezogen wird, und der verbleibende Raum wird dann gleichmäßig zwischen den drei Items geteilt. Das größte Item bleibt das größte, weil es mit einer größeren Größe begonnen hat, obwohl es dieselbe Menge an zusätzlichem Raum wie die anderen erhält:

![Der schraffierte Bereich wurde zu Dritteln geteilt, wobei jedes Item einen einzelnen Anteil erhält, der angehängt wird.](ratios3.png)

Um drei gleich große Items zu erstellen, selbst wenn die ursprünglichen Elemente unterschiedliche Größen haben, setzen Sie die `flex-basis`-Komponente auf `0`:

```css
.class {
  flex: 1 1 0;
}
```

Hier setzen wir zum Zwecke der Berechnung der Platzverteilung die Größe jedes Items auf `0`. Das bedeutet, dass der gesamte Platz für die Verteilung verfügbar ist. Da alle Items denselben `flex-grow`-Faktor haben, erhalten sie jeweils eine gleiche Menge an Platz. Dies führt zu drei gleich breiten Flex-Items.

Ändern Sie den `flex-grow`-Faktor von 1 zu 0 in diesem Live-Beispiel, um das unterschiedliche Verhalten zu sehen:

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

### Unterschiedliche `flex-grow`-Faktoren für Items

Die gleichzeitige Verwendung von `flex-grow` und `flex-basis` ermöglicht es uns, die Größen einzelner Items zu steuern, indem wir ihnen unterschiedliche `flex-grow`-Faktoren zuweisen. Wenn wir die `flex-basis` auf `0` lassen, sodass der gesamte Platz verteilt werden kann, können wir unterschiedlich große Flex-Items erzeugen, indem wir jedem Item einen anderen `flex-grow`-Faktor zuweisen.

Im folgenden Beispiel verwenden wir `1` als den `flex-grow`-Faktor für die ersten beiden Items und verdoppeln ihn auf `2` für das dritte Item. Mit `flex-basis: 0` auf allen Items wird der verfügbare Raum wie folgt verteilt:

1. Die `flex-grow`-Faktor-Werte aller benachbarten Flex-Items werden zusammengezählt (insgesamt sind es hier 4).
2. Der positive freie Raum im Flex-Container wird durch diesen Gesamtwert geteilt.
3. Der freie Raum wird entsprechend den einzelnen Werten verteilt. In diesem Fall erhält das erste Item einen Teil, das zweite einen Teil und das dritte zwei Teile. Das bedeutet, dass das dritte Item doppelt so groß ist wie die ersten und zweiten Items.

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

Denken Sie daran, dass Sie hier jeden positiven Wert verwenden können. Es ist das Verhältnis zwischen den Items, das zählt. Sie können große Zahlen oder Dezimalzahlen verwenden; es liegt an Ihnen. Um dies zu testen, ändern Sie die `flex-grow`-Werte im obigen Beispiel in `.25`, `.25` und `.50`. Sie sollten dasselbe Ergebnis sehen.

## Die Eigenschaft `flex-shrink`

Die {{CSSxRef("flex-shrink")}}-Eigenschaft gibt den **Flex-Schrumpffaktor** an, der bestimmt, wie viel das Flex-Item im Verhältnis zu den anderen Flex-Items im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der kombinierte `flex-basis`-Wert der Flex-Items zu groß ist, um in den Flex-Container zu passen, und sonst überlaufen würde. Solange ein Item einen positiven `flex-shrink`-Wert hat, wird das Item schrumpfen, um nicht über den Container hinauszugehen.

Während `flex-grow` verwendet wird, um den verfügbaren Raum den Items hinzuzufügen, die wachsen können, wird `flex-shrink` verwendet, um Raum zu entfernen, damit Items in ihren Container passen, ohne überzulaufen.

In diesem Beispiel gibt es drei `200px` breite Flex-Items in einem `500px` breiten Container. Mit `flex-shrink` auf `0` gesetzt, dürfen die Items nicht schrumpfen, was dazu führt, dass sie den Container überlaufen.

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

Ändern Sie den `flex-shrink`-Wert auf `1`; jedes Item wird im gleichen Maße schrumpfen und alle Items passen in den Container. Der negative freie Raum wurde proportional von jedem Item entfernt, was jedes Flex-Item kleiner als seine anfängliche Breite macht.

### Kombination von `flex-shrink` und `flex-basis`

Es mag den Anschein haben, dass `flex-shrink` auf dieselbe Weise wie `flex-grow` funktioniert, indem es Elemente schrumpft anstatt sie wachsen zu lassen. Trotzdem gibt es einige wichtige Unterschiede zu beachten.

Das Konzept der [Flex-Basis-Größe](#what_determines_the_base_size_of_an_item) beeinflusst, wie negativer Raum über Flex-Items verteilt wird. Der Flex-Schrumpffaktor wird mit der Flex-Basis-Größe multipliziert, wenn negativer Raum verteilt wird. Dies verteilt den negativen Raum proportional dazu, wie viel das Item schrumpfen kann. Ein kleines Item wird also nicht auf null schrumpfen, bevor ein größeres Item deutlich reduziert wurde.

Kleine Items schrumpfen nicht auf weniger als ihre `min-content`-Größe, also die kleinste Größe, die das Element haben kann, wenn es alle verfügbaren weichen Zeilenumbruchmöglichkeiten nutzt.

Dieses Beispiel demonstriert das `min-content`-Boden nachoben, wobei die `flex-basis` zur Größe des Inhalts aufgelöst wird. Wenn Sie die Breite des Flex-Containers ändern, zum Beispiel auf `700px` erhöhen, und dann die Flex-Item-Breite reduzieren, können Sie sehen, dass die ersten beiden Items sich neu umwickeln werden. Sie werden jedoch nie kleiner als ihre `min-content`-Größe. Wenn der Container kleiner wird, wird der Platz nur vom dritten Item entfernt, wenn es weiter verkleinert wird.

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

In der Praxis bietet dieses Schrumpfverhalten vernünftige Ergebnisse. Es verhindert, dass Inhalte vollständig verschwinden und kleiner als ihre minimalen Inhaltsgrößen werden. Die oben genannten Regeln sind für Inhalte, die sich verkleinern müssen, um in ihren Container zu passen, sinnvoll.

### Unterschiedliche `flex-shrink`-Faktoren für Items

Ebenso wie bei `flex-grow` können Sie Flex-Items unterschiedliche `flex-shrink`-Faktoren geben. Das kann helfen, das Standardverhalten zu ändern, wenn Sie zum Beispiel möchten, dass ein Item mehr oder weniger schnell als seine Geschwister schrumpft oder überhaupt nicht schrumpft.

In diesem Beispiel hat das erste Item einen `flex-shrink`-Faktor von `1`, das zweite Item `0` (sodass es überhaupt nicht schrumpft), und das dritte Item `4`, was eine Gesamtzahl von `5` Schrumpffaktoren ergibt. Das dritte Item schrumpft folglich ungefähr viermal schneller als das erste, aber keines wird unter ihre `min-content`-Breite schrumpfen. Spielen Sie mit den verschiedenen Werten: ebenso wie bei `flex-grow` können Sie auch hier Dezimalwerte oder größere Zahlen verwenden.

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

## Das Beherrschen der Größenbestimmung von Flex-Items

Um zu verstehen, wie die Größenbestimmung von Flex-Items funktioniert, müssen Sie die folgenden Faktoren berücksichtigen, die wir in diesen Leitfäden besprochen haben:

### Was bestimmt die Basisgröße eines Items?

- Ist `flex-basis` auf `auto` gesetzt, und hat das Item eine eingestellte Breite? Wenn ja, basiert die Größe auf dieser Breite.
- Ist `flex-basis` auf `auto` gesetzt, aber das Item hat keine eingestellte Breite? Wenn ja, basiert die Größe auf der Inhaltsgröße des Items.
- Ist `flex-basis` eine Länge oder ein Prozentsatz, aber nicht null? Wenn ja, wird dies die Größe des Items (auf `min-content` begrenzt).
- Ist `flex-basis` auf `0` gesetzt? Wenn ja, wird die Größe des Items bei der Berechnung der Platzverteilung nicht berücksichtigt.

### Ist verfügbarer Raum vorhanden?

Items können nur wachsen, wenn positiver freier Raum vorhanden ist, und sie schrumpfen nicht, solange es keinen negativen freien Raum gibt.

- Wenn wir die Breiten aller Items (oder Höhen, wenn wir in einer Spalte arbeiten) hinzufügen, ist diese Gesamtsumme **weniger** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es positiven freien Raum geben, und `flex-grow` wird ins Spiel kommen.
- Wenn wir die Breiten aller Items (oder Höhen, wenn wir in einer Spalte arbeiten) hinzufügen, ist diese Gesamtsumme **mehr** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es negativen freien Raum geben, und `flex-shrink` wird ins Spiel kommen.

### Was sind die anderen Möglichkeiten zur Platzverteilung?

Wenn Sie nicht möchten, dass der Raum den Items hinzugefügt wird, denken Sie daran, dass Sie den freien Raum zwischen oder um Items mit den Ausrichtungseigenschaften steuern können, die im Leitfaden zur Ausrichtung von Items in einem Flex-Container beschrieben sind. Mit der {{CSSxRef("justify-content")}}-Eigenschaft können Sie den verfügbaren Raum zwischen oder um Items verteilen. Sie können auch automatische Margen auf Flex-Items verwenden, um Raum zu absorbieren und Lücken zwischen den Items zu schaffen.

Mit all diesen Flex-Eigenschaften, die Ihnen zur Verfügung stehen, werden Sie feststellen, dass die meisten Layout-Aufgaben möglich sind, obwohl es zu Beginn ein wenig Experimentieren erfordern könnte.
