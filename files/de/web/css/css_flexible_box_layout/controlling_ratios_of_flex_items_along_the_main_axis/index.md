---
title: Steuerung der Verhältnisse von Flex-Items entlang der Hauptachse
slug: Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis
l10n:
  sourceCommit: 0ebc78fd61acddbe9505330f006b706ac786456d
---

{{CSSRef}}

In diesem Leitfaden untersuchen wir die drei Eigenschaften, die die Größe und Flexibilität von Flex-Items entlang der Hauptachse steuern: {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}}. Ein vollständiges Verständnis davon, wie diese Eigenschaften mit wachsenden und schrumpfenden Elementen funktionieren, ist der Schlüssel zur Beherrschung des [CSS Flexible Box Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout).

## Ein erster Blick

Unsere drei Eigenschaften steuern die folgenden Aspekte der Flexibilität eines Flex-Items:

- `flex-grow`: Wie viel von dem positiven freien Raum erhält dieses Item?
- `flex-shrink`: Wie viel negativer freier Raum kann von diesem Item entfernt werden?
- `flex-basis`: Wie groß ist das Item, bevor Wachstum und Schrumpfung stattfinden?

Die Eigenschaften werden normalerweise mithilfe der Kurzform {{CSSxRef("flex")}} ausgedrückt. Der folgende Code würde die `flex-grow`-Eigenschaft auf `2`, `flex-shrink` auf `1` und `flex-basis` auf `auto` setzen.

```css
.item {
  flex: 2 1 auto;
}
```

## Wichtige Konzepte beim Arbeiten auf der Hauptachse

Um die `flex`-Eigenschaften zu verstehen, ist es hilfreich, die _natürliche Größe_ von Flex-Items zu kennen, bevor Wachstum oder Schrumpfung stattfindet. Außerdem ist es wichtig, das Konzept des _freien Raums_ zu verstehen, also die Differenz zwischen der kombinierten natürlichen Größe aller Flex-Items entlang der Hauptachse und der Größe der Hauptachse selbst.

### Größenbestimmung von Flex-Items

Um zu bestimmen, wie viel Platz zur Verfügung steht, um Flex-Items anzuordnen, muss der Browser wissen, wie groß das Item zu Beginn ist. Wie wird dies bei Items berechnet, die keine Breite oder Höhe mit einer absoluten Längeneinheit haben?

In CSS können die Keywords {{CSSxRef("min-content")}} und {{CSSxRef("max-content")}} anstelle einer {{cssxref("length")}}-Einheit verwendet werden. Im Allgemeinen ist `min-content` die kleinste Größe, die ein Element haben kann, während es das längste Wort noch aufnehmen kann, und `max-content` ist die Größe, die das Element zum Aufnehmen des gesamten Inhalts ohne Umbruch benötigen würde.

Das folgende Beispiel enthält zwei Absatzelemente mit verschiedenen Textzeichenketten. Der erste Absatz hat eine Breite von `min-content`. Beachten Sie, dass der Text alle verfügbaren weichen Umbruchmöglichkeiten genutzt hat und so klein wie möglich wurde, ohne dass etwas überläuft. Dies ist die `min-content`-Größe dieser Zeichenkette. Im Wesentlichen bestimmt das längste Wort in der Zeichenkette die Größe.

Der zweite Absatz, mit einem Wert von `max-content`, verhält sich umgekehrt. Er wächst so groß wie nötig, um den Inhalt ohne Nutzung von weichen Umbruchmöglichkeiten aufzunehmen. Er läuft über die Box hinaus, wenn diese Container zu eng ist.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/min-max-content.html", '100%', 750)}}

Merken Sie sich dieses Verhalten und die Auswirkungen von `min-content` und `max-content`, während wir im weiteren Verlauf dieses Artikels `flex-grow` und `flex-shrink` untersuchen.

### Positiver und negativer freier Raum

Wir müssen auch das Konzept von **positivem und negativem freiem Raum** verstehen. Wenn ein Flex-Container _positiven freien Raum_ hat, hat er mehr Raum als nötig, um die Flex-Items im Container anzuzeigen. Zum Beispiel hat ein `500px` breiter Container mit {{CSSxRef("flex-direction")}} auf `row` und drei `100px` breiten Flex-Items `200px` positiven freien Raum. Dieser positive freie Raum kann zwischen den Items verteilt werden, wenn die Befüllung des Containers gewünscht ist.

![Image showing space left over after items have been displayed.](basics7.png)

Ein Flex-Container hat _negativen freien Raum_, wenn der kombinierte Wert der natürlichen Größen der Flex-Items größer ist als der verfügbare Raum im Flex-Container. Wenn die drei Flex-Items im obigen Beispiel des `500px` breiten Containers jeweils `200px` breit statt `100px` sind, beträgt ihre kombinierte natürliche Breite `600px`, was zu `100px` negativem freiem Raum führt. Dieser Raum kann von den Items entfernt werden, um sie in den Container zu passen, oder die Items laufen über.

![The items overflow the container](ratios1.png)

Wir müssen dieses Verteilen von positivem freiem Raum und Entfernen von negativem freiem Raum verstehen, um die Eigenschaftskomponenten der `flex`-Kurzform zu lernen.

In den folgenden Beispielen ist die {{CSSxRef("flex-direction")}} auf `row` gesetzt, sodass die Größe der Items durch ihre Breite bestimmt wird. Wir werden den positiven und negativen freien Raum berechnen, indem wir die Gesamtbreite aller Items mit der Breite des Containers vergleichen. Sie könnten auch jedes Beispiel mit `flex-direction: column` ausprobieren. Die Hauptachse wäre dann die Spalte, und Sie würden dann die Höhe der Items und ihres Containers vergleichen, um den positiven und negativen freien Raum zu berechnen.

## Die `flex-basis`-Eigenschaft

Die {{CSSxRef("flex-basis")}}-Eigenschaft gibt die anfängliche Größe eines Flex-Items an, bevor eine Verteilung von positivem oder negativem freiem Raum stattfindet. Der Anfangswert für diese Eigenschaft ist `auto`. Diese Eigenschaft akzeptiert die gleichen Werte wie die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften und akzeptiert auch das `content`-Keyword.

Wenn `flex-basis` auf `auto` gesetzt ist, ist die anfängliche Größe des Items die {{cssxref("length-percentage")}}-Größe der Hauptgröße, vorausgesetzt, es wurde eine festgelegt. Zum Beispiel, wenn das Item `width: 200px` eingestellt hat, dann wären `200px` die `flex-basis` für dieses Item. Prozentwerte beziehen sich auf die Innenhauptgröße des Flex-Containers. Wenn `width: 50%` eingestellt wäre, wäre die `flex-basis` für dieses Item die Hälfte der Content-Box-Breite des Containers. Wenn keine solche Größe festgelegt ist, bedeutet dies, dass das Item automatisch dimensioniert wird, und `auto` löst sich in die Größe seines Inhalts auf (siehe die Diskussion über [Min- und Max-Inhaltsgrößen](#größenbestimmung_von_flex-items) oben), was bedeutet, dass die `flex-basis` die `max-content`-Größe des Items ist.

Dieses Beispiel enthält drei unflexible Flex-Items, bei denen sowohl `flex-grow` als auch `flex-shrink` auf `0` gesetzt sind. Das erste Item, das eine explizite Breite von `150px` hat, nimmt eine `flex-basis` von `150px` an, während die anderen beiden Items keine Breite haben und daher entsprechend ihrer Inhaltsbreite oder `max-content` dimensioniert werden.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-basis.html", '100%', 500)}}

Neben dem `auto`-Keyword und anderen gültigen {{cssxref("width")}}-Werten können Sie das `content`-Keyword als `flex-basis` verwenden. Dies führt dazu, dass die `flex-basis` auf der Inhaltsgröße basiert, auch wenn eine `width` auf dem Item festgelegt ist. Dies hat denselben Effekt wie das Entfernen einer festgelegten Breite und die Verwendung von `auto` als `flex-basis`. Während es ähnlich wie die Einstellung von `max-content` ist, ermöglicht der `content`-Wert das Berechnen jeglicher {{cssxref("aspect-ratio")}} basierend auf der Querachsen-Größe.

Um die Größe des Flex-Items bei der Verteilung des Raums vollständig zu ignorieren, setzen Sie `flex-basis` auf `0` und einen nicht nullwertigen `flex-grow`-Wert. Lernen wir `flex-grow`, bevor wir diesen Wert in Aktion sehen.

## Die `flex-grow`-Eigenschaft

Die {{CSSxRef("flex-grow")}}-Eigenschaft gibt den **flexiblen Wachstumsfaktor** an, der bestimmt, wie viel ein Flex-Item im Verhältnis zu den anderen Flex-Items im Flex-Container wächst, wenn positiver freier Raum verteilt wird.

Wenn alle Items denselben `flex-grow`-Faktor haben, wird der positive freie Raum gleichmäßig zwischen ihnen verteilt. Für dieses Szenario ist es üblich, `flex-grow: 1` zu setzen, aber Sie könnten ihnen jeden Wert geben, wie `88`, `100` oder `1.2`; es handelt sich um ein Verhältnis. Wenn der Faktor für alle Flex-Items im Container gleich ist und positiver freier Raum vorhanden ist, wird dieser Raum gleichmäßig verteilt.

### Kombinieren von `flex-grow` und `flex-basis`

Es kann verwirrend werden, wie `flex-grow` und `flex-basis` interagieren. Betrachten wir den Fall von drei Flex-Items mit unterschiedlichen Inhaltslängen und den folgenden `flex`-Regeln, die auf sie angewendet werden:

`flex: 1 1 auto;`

In diesem Fall ist der `flex-basis`-Wert `auto` und die Items haben keine Breite eingestellt, also werden sie automatisch dimensioniert. Das bedeutet, dass die verwendete `flex-basis` die `max-content`-Größe jedes Items ist. Nachdem die Items angeordnet wurden, befindet sich etwas positiver freier Raum im Flex-Container, der im folgenden Bild als schraffierter Bereich gezeigt wird; der schraffierte Bereich ist der positive freie Raum, der basierend auf ihren `flex-grow`-Faktoren zwischen den drei Items aufgeteilt wird:

![Three items taking a bit more than half the width, with the rest of the width being hatched](ratios2.png)

Wir arbeiten mit einer `flex-basis`, die der Inhaltsgröße entspricht. Das bedeutet, dass der verfügbare Raum für die Verteilung von der gesamten verfügbaren Fläche (der Breite des Flex-Containers) abgezogen wird, und der verbleibende Raum wird dann gleichmäßig auf die drei Items verteilt. Das größte Item bleibt das größte, weil es mit einer größeren Größe begann, obwohl es dieselbe Menge an freiem Raum wie die anderen hat:

![The hatched area was divided into thirds, with each item getting a single portion appended.](ratios3.png)

Um drei gleich große Items zu erstellen, selbst wenn die ursprünglichen Elemente unterschiedliche Größen haben, setzen Sie die `flex-basis`-Komponente auf `0`:

`flex: 1 1 0;`

Hier setzen wir zu Berechnungszwecken der Raumverteilung die Größe jedes Items auf `0`. Das bedeutet, dass der gesamte Raum zur Verteilung zur Verfügung steht. Da alle Items denselben `flex-grow`-Faktor haben, erhält jedes eine gleiche Menge an Raum. Das führt zu drei gleich breiten Flex-Items.

Ändern Sie den `flex-grow`-Faktor von 1 auf 0 in diesem Live-Beispiel, um das unterschiedliche Verhalten zu sehen:

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow.html", '100%', 520)}}

### Flex-Items unterschiedliche `flex-grow`-Faktoren geben

Die Verwendung von `flex-grow`- und `flex-basis`-Eigenschaften zusammen ermöglicht es uns, die Größen einzelner Items durch Einstellen unterschiedlicher `flex-grow`-Faktoren zu steuern. Wenn wir die `flex-basis` bei `0` halten, damit der gesamte Raum verteilt werden kann, können wir unterschiedlich große Flex-Items erstellen, indem wir jedem Item einen anderen `flex-grow`-Faktor zuweisen.

Im folgenden Beispiel verwenden wir `1` als `flex-grow`-Faktor für die ersten beiden Items und verdoppeln ihn auf `2` für das dritte Item. Mit `flex-basis: 0` für alle Items wird der verfügbare Raum wie folgt verteilt:

1. Die `flex-grow`-Faktorwerte aller verwandten Flex-Items werden zusammengezählt (insgesamt 4 in diesem Fall).
2. Der positive freie Raum im Flex-Container wird durch diesen Gesamtwert geteilt.
3. Der freie Raum wird nach den individuellen Werten verteilt. In diesem Fall erhält das erste Item einen Teil, das zweite einen Teil, und das dritte zwei Teile. Das bedeutet, dass das dritte Item doppelt so groß ist wie die ersten beiden Items.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow-ratios.html", '100%', 520)}}

Denken Sie daran, dass Sie hier jeden positiven Wert verwenden können. Es ist das Verhältnis zwischen den Items, das zählt. Sie können große Zahlen oder Dezimalzahlen verwenden; es liegt bei Ihnen. Um dies zu testen, ändern Sie die `flex-grow`-Werte im obigen Beispiel auf `.25`, `.25` und `.50`. Sie sollten dasselbe Ergebnis sehen.

## Die `flex-shrink`-Eigenschaft

Die {{CSSxRef("flex-shrink")}}-Eigenschaft gibt den **flexiblen Schrumpffaktor** an, der bestimmt, wie viel das Flex-Item im Verhältnis zu den restlichen Flex-Items im Flex-Container schrumpft, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der kombinierte Wert der `flex-basis`-Größe der Flex-Items zu groß ist, um in den Flex-Container zu passen, und andernfalls überlaufen würde. Solange ein Item einen positiven `flex-shrink`-Wert hat, schrumpft das Item, um nicht über den Container hinauszulaufen.

Während `flex-grow` verwendet wird, um verfügbaren Raum zu Items hinzuzufügen, wird `flex-shrink` verwendet, um Raum zu entfernen und sicherzustellen, dass Items in ihren Container passen, ohne überzulaufen.

In diesem Beispiel gibt es drei `200px` breite Flex-Items in einem `500px` breiten Container. Mit einem `flex-shrink`-Wert von `0` dürfen die Items nicht schrumpfen, sodass sie den Container überlaufen.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink.html", '100%', 500)}}

Ändern Sie den `flex-shrink`-Wert auf `1`; jedes Item wird um denselben Betrag schrumpfen, sodass alle Items in den Container passen. Der negative freie Raum wurde von jedem Item proportional entfernt, wodurch jedes Flex-Item kleiner wird als seine ursprüngliche Breite.

### Kombinieren von `flex-shrink` und `flex-basis`

Es mag den Anschein haben, dass `flex-shrink` auf die gleiche Weise wie `flex-grow` funktioniert, indem es Elemente schrumpft anstatt wachsen lässt. Es gibt jedoch einige wichtige Unterschiede zu beachten.

Das Konzept der [flex-Basisgröße](#what_determines_the_base_size_of_an_item) beeinflusst, wie negativer Raum über Flex-Items verteilt wird. Der flexible Schrumpffaktor wird mit der flexiblen Basisgröße multipliziert, wenn negativer Raum verteilt wird. Dies verteilt den negativen Raum in dem Maße, wie das Item schrumpfen kann. So wird ein kleines Item beispielsweise nicht auf null schrumpfen, bevor ein größeres Item merklich reduziert wurde.

Kleine Items werden nicht kleiner als ihre `min-content`-Größe, die die kleinste Größe ist, die das Element haben kann, wenn es alle verfügbaren weichen Umbruchmöglichkeiten nutzt.

Dieses Beispiel zeigt `min-content`-Flooring, wobei sich die `flex-basis` auf die Größe des Inhalts löst. Wenn Sie die Breite des Flex-Containers ändern, beispielsweise auf `700px` erhöhen, und dann die Flex-Item-Breite reduzieren, können Sie sehen, dass die ersten beiden Items umbrochen werden. Sie werden jedoch niemals kleiner als ihre `min-content`-Größe. Wenn der Container klein wird, wird der Raum nur vom dritten Item entfernt, wenn es weiter schrumpft.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-min-content.html", '100%', 500)}}

In der Praxis bietet dieses Schrumpfverhalten vernünftige Ergebnisse. Es verhindert, dass der Inhalt vollständig verschwindet und kleiner als seine minimale Inhaltsgröße wird. Die obigen Regeln sind vernünftig für Inhalte, die schrumpfen müssen, um in ihren Container zu passen.

### Flex-Items unterschiedliche `flex-shrink`-Faktoren geben

Auf die gleiche Weise wie `flex-grow`, können Sie Flex-Items unterschiedliche `flex-shrink`-Faktoren geben. Dies kann dazu beitragen, das Standardverhalten zu ändern, wenn Sie beispielsweise möchten, dass ein Item schneller oder langsamer als seine Geschwister schrumpft oder gar nicht schrumpft.

In diesem Beispiel hat das erste Item einen `flex-shrink`-Faktor von `1`, das zweite Item `0` (sodass es überhaupt nicht schrumpft), und das dritte Item `4`, was insgesamt `5` Schrumpffaktoren ergibt. Das dritte Item schrumpft daher ungefähr viermal schneller als das erste, aber keines wird unter deren `min-content`-Breite schrumpfen. Experimentieren Sie mit den verschiedenen Werten: Wie bei `flex-grow` können Sie auch hier Dezimalzahlen oder größere Zahlen verwenden.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-ratios.html", '100%', 570)}}

## Beherrschung der Größenbestimmung von Flex-Items

Um zu verstehen, wie die Größenbestimmung von Flex-Items funktioniert, müssen Sie die folgenden Faktoren beachten, die wir in diesen Leitfäden besprochen haben:

### Was bestimmt die Basisgröße eines Items?

- Ist `flex-basis` auf `auto` gesetzt und das Item hat eine Breite festgelegt? Wenn ja, basiert die Größe auf dieser Breite.
- Ist `flex-basis` auf `auto` gesetzt, aber das Item hat keine Breite festgelegt? Wenn ja, basiert die Größe auf der Inhaltsgröße des Items.
- Ist `flex-basis` eine Länge oder ein Prozentsatz, aber nicht null? Wenn ja, ist dies die Größe des Items (begrenzt bei `min-content`).
- Ist `flex-basis` auf `0` gesetzt? Wenn ja, wird die Größe des Items bei der Raumverteilung nicht berücksichtigt.

### Gibt es verfügbaren Raum?

Items können nur wachsen, wenn es positiven freien Raum gibt, und sie schrumpfen nicht, es sei denn, es gibt negativen freien Raum.

- Wenn wir die Breiten aller Items (oder Höhen im Falle einer Spalte) addieren, ist diese Summe **kleiner** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es positiven freien Raum geben und `flex-grow` wird aktiviert.
- Wenn wir die Breiten aller Items (oder Höhen im Falle einer Spalte) addieren, ist diese Summe **größer** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es negativen freien Raum geben und `flex-shrink` wird aktiviert.

### Welche anderen Möglichkeiten zur Raumverteilung gibt es?

Wenn Sie keinen Raum zu den Items hinzufügen möchten, denken Sie daran, dass Sie den freien Raum zwischen oder um Items mithilfe der Ausrichtungseigenschaften verwalten können, die im Leitfaden zum Ausrichten von Items in einem Flex-Container beschrieben sind. Die {{CSSxRef("justify-content")}}-Eigenschaft ermöglicht die Verteilung von freiem Raum zwischen oder um Items. Sie können auch automatisch Ränder auf Flex-Items verwenden, um Raum zu absorbieren und Abstände zwischen Items zu schaffen.

Mit all diesen Flex-Eigenschaften, die Ihnen zur Verfügung stehen, werden Sie feststellen, dass die meisten Layout-Aufgaben möglich sind, obwohl es anfangs ein wenig Experimentieren erfordern kann.
