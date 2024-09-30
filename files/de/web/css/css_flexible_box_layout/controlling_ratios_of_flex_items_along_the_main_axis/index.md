---
title: Verhältnissteuerung von Flex-Items entlang der Hauptachse
slug: Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis
l10n:
  sourceCommit: 0ebc78fd61acddbe9505330f006b706ac786456d
---

{{CSSRef}}

In diesem Leitfaden untersuchen wir die drei Eigenschaften, die die Größe und Flexibilität von Flex-Items entlang der Hauptachse steuern: {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}}. Ein vollständiges Verständnis dieser Eigenschaften und wie sie mit wachsenden und schrumpfenden Elementen arbeiten, ist der Schlüssel zum Beherrschen des [CSS-Flexible-Box-Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout).

## Ein erster Blick

Unsere drei Eigenschaften steuern die folgenden Aspekte der Flexibilität eines Flex-Items:

- `flex-grow`: Wie viel des positiven freien Raums erhält dieses Item?
- `flex-shrink`: Wie viel negativer freier Raum kann von diesem Item entfernt werden?
- `flex-basis`: Welche Größe hat das Item, bevor Wachsen und Schrumpfen stattfinden?

Die Eigenschaften werden normalerweise mit der Kurznotation {{CSSxRef("flex")}} ausgedrückt. Der folgende Code würde die Eigenschaft `flex-grow` auf `2`, `flex-shrink` auf `1` und `flex-basis` auf `auto` setzen.

```css
.item {
  flex: 2 1 auto;
}
```

## Wichtige Konzepte bei der Arbeit an der Hauptachse

Um die `flex`-Eigenschaften zu verstehen, ist es hilfreich, die _natürliche Größe_ von Flex-Items zu kennen, bevor ein Wachsen oder Schrumpfen stattfindet. Darüber hinaus ist es wichtig, das Konzept des _freien Raums_ zu verstehen, der die Differenz zwischen der kombinierten natürlichen Größe aller Flex-Items entlang der Hauptachse und der Größe der Hauptachse selbst darstellt.

### Größenbestimmung von Flex-Items

Um zu bestimmen, wie viel Platz zur Verfügung steht, um Flex-Items anzuordnen, muss der Browser wissen, wie groß das Item zu Beginn ist. Wie wird das für Items berechnet, die keine Breite oder Höhe haben, die mit einer absoluten Längeneinheit angewendet wurde?

In CSS können die Schlüsselwörter {{CSSxRef("min-content")}} und {{CSSxRef("max-content")}} anstelle einer {{cssxref("length")}}-Einheit verwendet werden. Im Allgemeinen ist `min-content` die kleinste Größe, die ein Element haben kann, während es das längste Wort noch unterbringt, und `max-content` ist die Größe, die das Element bräuchte, um den gesamten Inhalt ohne Umbruch abzubilden.

Das folgende Beispiel enthält zwei Absatz-Elemente mit unterschiedlichen Textzeichenfolgen. Der erste Absatz hat eine Breite von `min-content`. Beachten Sie, dass der Text alle verfügbaren Möglichkeiten zum weichen Umbruch genutzt hat, um so klein wie möglich zu werden, ohne überzulaufen. Dies ist die `min-content`-Größe dieser Zeichenfolge. Im Wesentlichen bestimmt das längste Wort in der Zeichenfolge die Größe.

Der zweite Absatz, mit einem Wert von `max-content`, wächst so groß wie nötig, um den Inhalt ohne Nutzung von weichen Umbruchmöglichkeiten zu fassen. Er wird den Container überlaufen, falls dieser zu schmal ist.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/min-max-content.html", '100%', 750)}}

Beachten Sie dieses Verhalten und die Auswirkungen von `min-content` und `max-content`, während wir später in diesem Artikel `flex-grow` und `flex-shrink` erkunden.

### Positiver und negativer freier Raum

Wir müssen auch das Konzept von **positivem und negativem freien Raum** verstehen. Ein Flex-Container hat _positiven freien Raum_, wenn er mehr Platz hat, als nötig ist, um die Flex-Items darin anzuzeigen. Beispielsweise hat ein `500px` breiter Container, mit {{CSSxRef("flex-direction")}} auf `row` gesetzt, der drei `100px` breite Flex-Items enthält, `200px` positiven freien Raum. Dieser positive freie Raum kann zwischen den Items verteilt werden, wenn gewünscht wird, den Container zu füllen.

![Bild, das den nach dem Anzeigen der Items verbleibenden Raum zeigt.](basics7.png)

Ein Flex-Container hat _negativen freien Raum_, wenn der kombinierte Wert der natürlichen Größen der Flex-Items größer ist als der verfügbare Platz im Flex-Container. Wenn die drei Flex-Items im obigen Beispiel des `500px` breiten Containers jeweils `200px` breit statt `100px` sind, beträgt ihre kombinierte natürliche Breite `600px`, was zu `100px` negativem freien Raum führt. Dieser Raum kann von den Items entfernt werden, um sie in den Container zu passen, oder die Items werden überlaufen.

![Die Items überlaufen den Container](ratios1.png)

Wir müssen dieses Verteilen von positivem freien Raum und Entfernen von negativem freien Raum verstehen, um die Komponenten der `flex`-Kurznotation zu lernen.

In den folgenden Beispielen ist die {{CSSxRef("flex-direction")}} auf `row` gesetzt, daher wird die Größe der Items von ihrer Breite bestimmt. Wir werden den positiven und negativen freien Raum berechnen, indem wir die gesamte Breite aller Items mit der Breite des Containers vergleichen. Sie könnten auch versuchen, jedes Beispiel mit `flex-direction: column` zu testen. Die Hauptachse wäre dann die Spalte, und Sie würden die Höhe der Items und ihres Containers vergleichen, um den positiven und negativen freien Raum zu berechnen.

## Die `flex-basis`-Eigenschaft

Die {{CSSxRef("flex-basis")}}-Eigenschaft gibt die Anfangsgröße eines Flex-Items an, bevor eine Verteilung des positiven oder negativen freien Raums stattfindet. Der Anfangswert für diese Eigenschaft ist `auto`. Diese Eigenschaft akzeptiert die gleichen Werte wie die Eigenschaften {{cssxref("width")}} und {{cssxref("height")}}, und sie akzeptiert auch das `content`-Schlüsselwort.

Wenn `flex-basis` auf `auto` gesetzt ist, ist die anfängliche Größe des Items die {{cssxref("length-percentage")}}-Größe der Hauptgröße, falls eine eingestellt wurde. Zum Beispiel, wenn das Item `width: 200px` gesetzt hat, dann wären `200px` die `flex-basis` für dieses Item. Prozentwerte beziehen sich auf die innere Hauptgröße des Flex-Containers. Wenn `width: 50%` gesetzt würde, wäre die `flex-basis` für dieses Item die Hälfte der Breite des content-box des Containers. Wenn keine solche Größe eingestellt ist, bedeutet das, dass das Item automatisch bemessen ist, dann wird `auto` auf die Größe seines Inhalts aufgelöst (siehe die Diskussion über [`min-` und `max-content`-Größen](#größenbestimmung_von_flex-items) oben), was bedeutet, dass die `flex-basis` die `max-content`-Größe des Items ist.

Dieses Beispiel enthält drei nicht flexible Flex-Items, mit sowohl `flex-grow` als auch `flex-shrink` auf `0` gesetzt. Das erste Item, das eine explizite Breite von `150px` hat, nimmt eine `flex-basis` von `150px` an, während die anderen beiden Items keine eingestellte Breite haben und daher nach ihrer Inhaltsbreite oder `max-content` bemessen sind.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-basis.html", '100%', 500)}}

Zusätzlich zum `auto`-Schlüsselwort und jedem anderen gültigen {{cssxref("width")}}-Wert können Sie das `content`-Schlüsselwort als `flex-basis` verwenden. Dies führt dazu, dass die `flex-basis` auf der Inhaltsgröße basiert, selbst wenn eine `width` auf dem Item gesetzt ist. Dies erzeugt den gleichen Effekt wie das Entfernen einer eingestellten Breite und die Verwendung von `auto` als `flex-basis`. Während es dem Einstellen von `max-content` ähnelt, ermöglicht der `content`-Wert die Berechnung jedes {{cssxref("aspect-ratio")}} basierend auf der Größe der Querachse.

Um die Größe des Flex-Items während der Raumverteilung vollständig zu ignorieren, setzen Sie `flex-basis` auf `0` und einen von null verschiedenen `flex-grow`-Wert. Lernen wir `flex-grow` kennen, bevor wir diesen Wert in Aktion sehen.

## Die `flex-grow`-Eigenschaft

Die {{CSSxRef("flex-grow")}}-Eigenschaft gibt den **Flex-Wachstumsfaktor** an, der bestimmt, wie stark ein Flex-Item im Verhältnis zu den anderen Flex-Items im Flex-Container wächst, wenn positiver freier Raum verteilt wird.

Wenn alle Items den gleichen `flex-grow`-Faktor haben, wird der positive freie Raum gleichmäßig zwischen ihnen verteilt. Für dieses Szenario ist es üblich, `flex-grow: 1` zu setzen, aber Sie könnten ihnen jeden Wert geben, wie `88`, `100` oder `1.2`; es ist ein Verhältnis. Wenn der Faktor für alle Flex-Items im Container gleich ist und positiver freier Raum vorhanden ist, wird dieser Raum gleichmäßig verteilt.

### Kombination von `flex-grow` und `flex-basis`

Die Interaktion von `flex-grow` und `flex-basis` kann verwirrend sein. Betrachten wir den Fall von drei Flex-Items mit unterschiedlichen Inhaltslängen und den folgenden `flex`-Regeln:

`flex: 1 1 auto;`

In diesem Fall ist der `flex-basis`-Wert `auto` und die Items haben keine eingestellte Breite, sodass sie automatisch bemessen werden. Das bedeutet, dass die `flex-basis` die `max-content`-Größe jedes Items ist. Nachdem die Items platziert wurden, gibt es im Flex-Container etwas positiven freien Raum, der als schraffierter Bereich im Bild unten gezeigt wird; der schraffierte Bereich ist der positive freie Raum, der zwischen den drei Items basierend auf ihren `flex-grow`-Faktoren verteilt wird:

![Drei Items nehmen etwas mehr als die Hälfte der Breite ein, der restliche Platz ist schraffiert](ratios2.png)

Wir arbeiten mit einer `flex-basis`, die gleich der Inhaltsgröße ist. Dies bedeutet, dass der verfügbare Raum, der zu verteilen ist, von dem insgesamt verfügbaren Raum (der Breite des Flex-Containers) abgezogen wird, und der verbleibende Raum wird dann gleichmäßig zwischen den drei Items geteilt. Das größte Item bleibt das größte, weil es von einer größeren Größe aus gestartet ist, obwohl es denselben Betrag an Ersatzzahl wie die anderen erhält:

![Der schraffierte Bereich wurde in Drittel geteilt, und jedem Item wurde ein Teil angehängt.](ratios3.png)

Um drei gleich große Items zu erstellen, selbst wenn die ursprünglichen Elemente unterschiedliche Größen haben, setzen Sie die `flex-basis`-Komponente auf `0`:

`flex: 1 1 0;`

Hier setzen wir zur Berechnung der Raumverteilung die Größe jedes Items auf `0`. Das bedeutet, dass der gesamte Raum zur Verteilung verfügbar ist. Da alle Items den gleichen `flex-grow`-Faktor haben, erhält jedes eine gleiche Menge an Raum. Dies führt zu drei Flex-Items mit gleicher Breite.

Ändern Sie in diesem Live-Beispiel den `flex-grow`-Faktor von 1 auf 0, um das unterschiedliche Verhalten zu sehen:

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow.html", '100%', 520)}}

### Vergabe unterschiedlicher `flex-grow`-Faktoren an Items

Mit der Kombination von `flex-grow` und `flex-basis` können wir die Größen einzelner Items steuern, indem wir unterschiedliche `flex-grow`-Faktoren festlegen. Wenn wir die `flex-basis` bei `0` halten, sodass der gesamte Raum verteilt werden kann, können wir unterschiedlich große Flex-Items erstellen, indem wir jedem Element einen unterschiedlichen `flex-grow`-Faktor zuweisen.

Im folgenden Beispiel verwenden wir `1` als `flex-grow`-Faktor für die ersten beiden Items und verdoppeln ihn auf `2` für das dritte Item. Wenn `flex-basis: 0` auf allen Items eingestellt ist, wird der verfügbare Raum wie folgt verteilt:

1. Die `flex-grow`-Faktorwerte aller Geschwister-Flex-Items werden zusammengezählt (insgesamt 4 in diesem Fall).
2. Der positive freie Raum im Flex-Container wird durch diesen Gesamtwert geteilt.
3. Der freie Raum wird entsprechend den individuellen Werten verteilt. In diesem Fall erhält das erste Item einen Teil, das zweite einen Teil und das dritte zwei Teile. Dies bedeutet, dass das dritte Item doppelt so groß ist wie das erste und das zweite Item.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow-ratios.html", '100%', 520)}}

Denken Sie daran, dass Sie hier jeden positiven Wert verwenden können. Es ist das Verhältnis zwischen den Items, das zählt. Sie können große Zahlen oder Dezimalzahlen verwenden; es liegt an Ihnen. Um dies zu testen, ändern Sie die `flex-grow`-Werte im obigen Beispiel auf `.25`, `.25` und `.50`. Sie sollten dasselbe Resultat sehen.

## Die `flex-shrink`-Eigenschaft

Die {{CSSxRef("flex-shrink")}}-Eigenschaft spezifiziert den **Flex-Schrumpffaktor**, der bestimmt, wie stark das Flex-Item im Verhältnis zu den anderen Flex-Items im Flex-Container schrumpfen wird, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der kombinierte `flex-basis`-Wert der Flex-Items zu groß ist, um im Flex-Container zu passen, und dieser andernfalls überlaufen würde. Solange der `flex-shrink` eines Items ein positiver Wert ist, wird das Item schrumpfen, um nicht den Container zu überlaufen.

Während `flex-grow` verwendet wird, um verfügbaren Raum an wachende Items zu vergeben, wird `flex-shrink` verwendet, um Raum zu entfernen und sicherzustellen, dass Items in ihren Container passen, ohne zu überlaufen.

In diesem Beispiel gibt es drei `200px` breite Flex-Items in einem `500px` breiten Container. Mit `flex-shrink` auf `0` dürfen die Items nicht schrumpfen, was dazu führt, dass sie über den Container hinausragen.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink.html", '100%', 500)}}

Ändern Sie den `flex-shrink`-Wert auf `1`; jedes Item wird um den gleichen Betrag schrumpfen und alle Items passen in den Container. Der negative freie Raum wurde proportional von jedem Item entfernt, wodurch jedes Flex-Item kleiner als seine ursprüngliche Breite ist.

### Kombination von `flex-shrink` und `flex-basis`

Es mag den Anschein haben, dass `flex-shrink` ähnlich wie `flex-grow` funktioniert, indem Elemente verkleinert anstelle von vergrößert werden. Es gibt jedoch einige wichtige Unterschiede zu beachten.

Das Konzept der [flex-basis Größe](#was_bestimmt_die_basissize_eines_items) beeinflusst, wie negativer Raum über Flex-Items verteilt wird. Der Flex-Schrumpffaktor wird mit der Basisgröße des Flex-Items multipliziert, wenn negativer Raum verteilt wird. Dies verteilt negativen Raum proportional dazu, wie stark das Item schrumpfen kann. Ein kleines Element wird also nicht auf null schrumpfen, bevor ein größeres Element spürbar reduziert wurde.

Kleine Elemente werden nicht kleiner als ihre `min-content`-Größe, die die kleinste Größe ist, die das Element haben kann, wenn es alle möglichen weichen Einbruchsmöglichkeiten genutzt hat.

Dieses Beispiel demonstriert das `min-content`-Flooring, wobei die `flex-basis` auf die Größe des Inhalts aufgelöst wird. Wenn Sie die Breite des Flex-Containers ändern, indem Sie sie beispielsweise auf `700px` erhöhen und dann die Breite der Flex-Items verringern, können Sie feststellen, dass die ersten beiden Items umgebrochen werden. Sie werden jedoch nie kleiner als ihre `min-content`-Größe. Wenn der Container klein wird, wird der Raum nur vom dritten Item entfernt, wenn es weiter schrumpft.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-min-content.html", '100%', 500)}}

In der Praxis bietet dieses Schrumpfverhalten angemessene Ergebnisse. Es verhindert, dass Inhalte vollständig verschwinden und kleiner als ihre minimalen Inhaltsgrößen werden. Die oben genannten Regeln sind vernünftig für Inhalte, die sich verkleinern müssen, um in ihren Container zu passen.

### Vergabe unterschiedlicher `flex-shrink`-Faktoren an Items

Genauso wie bei `flex-grow` können Sie Flex-Items unterschiedliche `flex-shrink`-Faktoren geben. Dies kann helfen, das Standardverhalten zu ändern, wenn Sie beispielsweise möchten, dass sich ein Item mehr oder weniger schnell als seine Geschwister verkleinert oder überhaupt nicht verkleinert.

In diesem Beispiel hat das erste Item einen `flex-shrink`-Faktor von `1`, das zweite Item `0` (damit es überhaupt nicht schrumpft), und das dritte Item `4`, was eine Gesamtschrumpffaktor von `5` ergibt. Das dritte Item schrumpft daher etwa viermal schneller als das erste, wird aber dennoch niemals kleiner als ihre `min-content`-Breite. Spielen Sie mit den verschiedenen Werten: Wie bei `flex-grow` können Sie hier auch Dezimalzahlen oder größere Zahlen verwenden.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-ratios.html", '100%', 570)}}

## Beherrschung der Größenbestimmung von Flex-Items

Um zu verstehen, wie die Größenbestimmung von Flex-Items funktioniert, müssen Sie die unten aufgeführten Faktoren in Betracht ziehen, die wir in diesen Leitfäden besprochen haben:

### Was bestimmt die Basisgröße eines Items?

- Ist `flex-basis` auf `auto` gesetzt und hat das Item eine Breite eingestellt? Wenn ja, basiert die Größe auf dieser Breite.
- Ist `flex-basis` auf `auto` gesetzt, aber das Item hat keine Breite eingestellt? Wenn ja, basiert die Größe auf der Inhaltsgröße des Items.
- Ist `flex-basis` ein Längen- oder Prozentsatz, aber nicht null? Wenn ja, entspricht diese Größe dem Item (mindestens auf `min-content`).
- Ist `flex-basis` auf `0` gesetzt? Wenn ja, wird die Größe des Items nicht bei der Berechnung der Raumverteilung berücksichtigt.

### Gibt es verfügbaren Raum?

Items können nur wachsen, wenn positiver freier Raum vorhanden ist, und sie schrumpfen nur, wenn negativer freier Raum vorhanden ist.

- Wenn wir die Breiten aller Items (oder Höhen bei Arbeiten in einer Spalte) addieren, ist dieser Gesamtwert **weniger** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es positiven freien Raum geben, und `flex-grow` wird eine Rolle spielen.
- Wenn wir die Breiten aller Items (oder Höhen bei Arbeiten in einer Spalte) addieren, ist dieser Gesamtwert **mehr** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es negativen freien Raum geben, und `flex-shrink` wird eine Rolle spielen.

### Was sind die anderen Möglichkeiten, um Raum zu verteilen?

Wenn Sie nicht möchten, dass Sie Raum zu den Items hinzufügen, denken Sie daran, dass Sie den freien Raum zwischen oder um die Items mit den Ausrichtungseigenschaften verwalten können, die im Leitfaden zum Ausrichten von Items in einem Flex-Container beschrieben sind. Die {{CSSxRef("justify-content")}}-Eigenschaft ermöglicht die Verteilung des freien Raums zwischen oder um die Items. Sie können auch automatische Ränder auf Flex-Items verwenden, um Raum aufzunehmen und Lücken zwischen den Items zu schaffen.

Mit all diesen Flex-Eigenschaften zur Verfügung werden Sie feststellen, dass die meisten Layout-Aufgaben möglich sind, obwohl es anfangs möglicherweise ein wenig Experimentieren erfordert.
