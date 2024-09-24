---
title: Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse
slug: Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis
l10n:
  sourceCommit: 0ebc78fd61acddbe9505330f006b706ac786456d
---

{{CSSRef}}

In diesem Leitfaden erkunden wir die drei Eigenschaften, die die Größe und Flexibilität von Flex-Elementen entlang der Hauptachse steuern: {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} und {{CSSxRef("flex-basis")}}. Ein umfassendes Verständnis davon, wie diese Eigenschaften mit wachsenden und schrumpfenden Elementen arbeiten, ist der Schlüssel zur Beherrschung des [CSS Flexible Box Layouts](/de/docs/Web/CSS/CSS_flexible_box_layout).

## Ein erster Blick

Unsere drei Eigenschaften steuern die folgenden Aspekte der Flexibilität eines Flex-Elements:

- `flex-grow`: Wie viel von dem positiven freien Raum erhält dieses Element?
- `flex-shrink`: Wie viel negativer freier Raum kann von diesem Element entfernt werden?
- `flex-basis`: Welche Größe hat das Element, bevor Wachstum und Schrumpfung stattfinden?

Die Eigenschaften werden normalerweise mithilfe der Kurzschreibweise {{CSSxRef("flex")}} ausgedrückt. Der folgende Code würde die `flex-grow`-Eigenschaft auf `2`, `flex-shrink` auf `1` und `flex-basis` auf `auto` setzen.

```css
.item {
  flex: 2 1 auto;
}
```

## Wichtige Konzepte beim Arbeiten an der Hauptachse

Um die `flex`-Eigenschaften zu verstehen, ist es hilfreich, die _natürliche Größe_ von Flex-Elementen zu kennen, bevor Wachstum oder Schrumpfung stattfinden. Zusätzlich ist es wichtig, das Konzept des _freien Raums_ zu verstehen, das den Unterschied zwischen der kombinierten natürlichen Größe aller Flex-Elemente entlang der Hauptachse und der Größe der Hauptachse selbst beschreibt.

### Flex-Element-Größenbestimmung

Um zu bestimmen, wie viel Platz für die Anordnung von Flex-Elementen verfügbar ist, muss der Browser wissen, wie groß das Element zu Beginn ist. Wie wird dies bei Elementen berechnet, die keine Breite oder Höhe mit einer absoluten Längeneinheit haben?

In CSS können die Schlüsselwörter {{CSSxRef("min-content")}} und {{CSSxRef("max-content")}} anstelle einer {{cssxref("length")}}-Einheit verwendet werden. Generell ist `min-content` die kleinste Größe, die ein Element haben kann, während es das längste Wort noch passt, und `max-content` ist die Größe, die das Element benötigt, um den gesamten Inhalt ohne Umbrüche zu fassen.

Das folgende Beispiel enthält zwei Absätze mit unterschiedlichen Texten. Der erste Absatz hat eine Breite von `min-content`. Beachten Sie, dass der Text alle verfügbaren weichen Umbruchmöglichkeiten genutzt hat und so klein wie möglich geworden ist, ohne überzulaufen. Dies ist die `min-content`-Größe dieser Zeichenkette. Im Wesentlichen bestimmt das längste Wort in der Zeichenkette die Größe.

Der zweite Absatz mit einem Wert von `max-content` verhält sich umgekehrt. Er wird so groß wie nötig, um den Inhalt ohne weiche Umbruchmöglichkeiten zu fassen. Er wird das übergeordnete Element überfluten, wenn dieser Container zu schmal ist.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/min-max-content.html", '100%', 750)}}

Merken Sie sich dieses Verhalten und die Auswirkungen, die `min-content` und `max-content` haben, während wir später in diesem Artikel `flex-grow` und `flex-shrink` untersuchen.

### Positiver und negativer freier Raum

Wir müssen auch das Konzept des **positiven und negativen freien Raums** verstehen. Ein Flex-Container hat _positiven freien Raum_, wenn er mehr Platz hat, als zum Anzeigen der darin enthaltenen Flex-Elemente erforderlich ist. Zum Beispiel hat ein 500px breiter Container, dessen {{CSSxRef("flex-direction")}} auf `row` gesetzt ist und der drei 100px breite Flex-Elemente enthält, 200px positiven freien Raum. Dieser positive freie Raum kann zwischen den Elementen verteilt werden, wenn der Container gefüllt werden soll.

![Bild zeigt den zusätzlichen Platz nach der Anzeige der Elemente.](basics7.png)

Ein Flex-Container hat _negativen freien Raum_, wenn der kombinierte Wert der natürlichen Größen der Flex-Elemente größer ist als der verfügbare Platz im Flex-Container. Wenn die drei Flex-Elemente im oben erwähnten 500px breiten Container jeweils 200px breit sind anstatt 100px, beträgt ihre kombinierte natürliche Breite 600px, was zu 100px negativem freien Raum führt. Dieser Raum kann von den Elementen entfernt werden, um sie in den Container zu passen, oder die Elemente überschreiten den Container.

![Die Elemente überfluten den Container](ratios1.png)

Wir müssen dieses Verstehen der Verteilung von positivem freien Raum und der Entfernung von negativem freien Raum nutzen, um die Eigenschaften der `flex`-Kurzschreibweise zu verstehen.

In den folgenden Beispielen ist {{CSSxRef("flex-direction")}} auf `row` gesetzt, sodass die Größe der Elemente durch ihre Breite bestimmt wird. Wir berechnen den positiven und negativen freien Raum, indem wir die Gesamtbreite aller Elemente mit der Breite des Containers vergleichen. Sie könnten auch jedes Beispiel mit `flex-direction: column` ausprobieren. Die Hauptachse wäre dann die Spalte, und Sie würden dann die Höhe der Elemente und ihres Containers vergleichen, um den positiven und negativen freien Raum zu berechnen.

## Die `flex-basis`-Eigenschaft

Die {{CSSxRef("flex-basis")}}-Eigenschaft gibt die Anfangsgröße eines Flex-Elements an, bevor irgendeine Verteilung des positiven oder negativen freien Raums erfolgt. Der Anfangswert für diese Eigenschaft ist `auto`. Diese Eigenschaft akzeptiert dieselben Werte wie die {{cssxref("width")}}- und {{cssxref("height")}}-Eigenschaften und sie akzeptiert auch das `content`-Schlüsselwort.

Wenn `flex-basis` auf `auto` gesetzt ist, ist die Anfangsgröße des Elements die Größe der {{cssxref("length-percentage")}} der Hauptgröße, falls welche festgelegt ist. Wenn beispielsweise eine Breite von `200px` für das Element festgelegt wurde, wäre `200px` der `flex-basis` für dieses Element. Prozentwerte beziehen sich auf die innere Hauptgröße des Flex-Containers. Wenn `width: 50%` festgelegt wurde, wäre der `flex-basis` für dieses Element die Hälfte der Breite des Inhaltsbereichs des Containers. Ist keine solche Größe festgelegt, also entspricht die Größe des Elements seiner automatischen Größe, so löst sich `auto` in die Größe seines Inhalts auf (siehe die Diskussion über das [`min-` und `max-content` Größen](#flex-element-größenbestimmung) oben), was bedeutet, dass der `flex-basis` die `max-content`-Größe des Elements ist.

Dieses Beispiel enthält drei nicht flexible Flex-Elemente, bei denen sowohl `flex-grow` als auch `flex-shrink` auf `0` gesetzt sind. Das erste Element, das eine explizite Breite von `150px` hat, nimmt einen `flex-basis` von `150px` ein, während die anderen beiden Elemente keine festgelegte Breite haben und daher gemäß ihrer Inhaltsbreite oder `max-content` dimensioniert werden.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-basis.html", '100%', 500)}}

Zusätzlich zum `auto`-Schlüsselwort und jedem anderen gültigen {{cssxref("width")}}-Wert können Sie das `content`-Schlüsselwort als `flex-basis` verwenden. Dies führt dazu, dass der `flex-basis` auf der Inhaltsgröße basiert, auch wenn für das Element eine Breite festgelegt ist. Dies erzeugt denselben Effekt wie die Entfernung jeglicher festgelegter Breite und die Verwendung von `auto` als `flex-basis`. Während dies ähnlich wie `max-content` ist, ermöglicht der `content`-Wert, dass jedes {{cssxref("aspect-ratio")}} basierend auf der Größe der Kreuzachse berechnet wird.

Um die Größe des Flex-Elements bei der Raumverteilung vollständig zu ignorieren, setzen Sie `flex-basis` auf `0` und geben Sie einen nicht-null `flex-grow`-Wert an. Lassen Sie uns `flex-grow` lernen, bevor wir diesen Wert in Aktion erleben.

## Die `flex-grow`-Eigenschaft

Die {{CSSxRef("flex-grow")}}-Eigenschaft gibt den **Flex-Wachstum-Faktor** an, der bestimmt, wie stark ein Flex-Element im Vergleich zu den anderen Flex-Elementen im Flex-Container wächst, wenn positiver freier Raum verteilt wird.

Wenn alle Elemente denselben `flex-grow`-Faktor haben, wird der positive freie Raum gleichmäßig unter ihnen verteilt. In diesem Szenario ist es gängige Praxis, `flex-grow: 1` zu setzen, aber Sie könnten ihnen jeden Wert geben, wie `88`, `100` oder `1.2`; es ist ein Verhältnis. Wenn der Faktor für alle Flex-Elemente im Container gleich ist und positiver freier Raum vorhanden ist, wird dieser Raum gleichmäßig verteilt.

### Kombinieren von `flex-grow` und `flex-basis`

Die Interaktion von `flex-grow` und `flex-basis` kann verwirrend werden. Betrachten wir den Fall von drei Flex-Elementen mit unterschiedlichen Inhaltlängen und den folgenden `flex`-Regeln:

`flex: 1 1 auto;`

In diesem Fall ist der `flex-basis`-Wert `auto` und die Elemente haben keine festgelegte Breite, daher sind sie automatisch dimensioniert. Das bedeutet, dass der `flex-basis`, der verwendet wird, die `max-content`-Größe jedes Elements ist. Nach dem Anordnen der Elemente gibt es etwas positiven freien Raum im Flex-Container, der im folgenden Bild als schraffierter Bereich angezeigt wird; der schraffierte Bereich ist der positive freie Raum, der zwischen den drei Elementen basierend auf ihren `flex-grow`-Faktoren verteilt wird:

![Drei Elemente nehmen etwas mehr als die Hälfte der Breite ein, wobei der Rest der Breite schraffiert ist](ratios2.png)

Wir arbeiten mit einem `flex-basis`, der der Inhaltsgröße entspricht. Dies bedeutet, dass der verfügbare Raum, der verteilt werden kann, von dem insgesamt verfügbaren Raum (der Breite des Flex-Containers) abgezogen wird und der verbleibende Raum dann gleichmäßig zwischen den drei Elementen geteilt wird. Das größte Element bleibt das größte, weil es von einer größeren Größe aus gestartet ist, auch wenn es den gleichen zusätzlichen Raum wie die anderen hat:

![Der schraffierte Bereich wurde in Drittel geteilt, wobei jedes Element einen einzelnen Anteil erhält.](ratios3.png)

Um drei gleich große Elemente zu schaffen, auch wenn die ursprünglichen Elemente unterschiedliche Größen haben, stellen Sie die `flex-basis`-Komponente auf `0` ein:

`flex: 1 1 0;`

Hier setzen wir der Berechnung der Größenverteilung halber die Größe jedes Elements auf `0`. Das bedeutet, dass der gesamte Raum zur Verteilung verfügbar ist. Da alle Elemente denselben `flex-grow`-Faktor haben, erhalten sie alle gleich viel Raum. Dies führt zu drei gleich breiten Flex-Elementen.

Probieren Sie aus, den `flex-grow`-Faktor in diesem Live-Beispiel von 1 auf 0 zu ändern, um das unterschiedliche Verhalten zu sehen:

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow.html", '100%', 520)}}

### Unterschiedlichen Flex-Elementen verschiedene `flex-grow`-Faktoren geben

Die Kombination von `flex-grow` mit `flex-basis` ermöglicht es uns, die Größe einzelner Elemente zu kontrollieren, indem wir jedem Element unterschiedliche `flex-grow`-Faktoren zuweisen. Wenn wir den `flex-basis` auf `0` belassen, damit der gesamte Raum verteilt werden kann, können wir unterschiedlich große Flex-Elemente erstellen, indem wir jedem Element einen anderen `flex-grow`-Faktor zuweisen.

Im folgenden Beispiel verwenden wir `1` als `flex-grow`-Faktor für die ersten beiden Elemente und verdoppeln ihn auf `2` für das dritte Element. Mit `flex-basis: 0` auf allen Elementen wird der verfügbare Raum wie folgt aufgeteilt:

1. Die `flex-grow`-Faktorwerte aller benachbarten Flex-Elemente werden zusammengezählt (das Total ist in diesem Fall 4).
2. Der positive freie Raum im Flex-Container wird durch diesen Gesamtwert geteilt.
3. Der freie Raum wird gemäß den individuellen Werten verteilt. In diesem Fall erhält das erste Element einen Anteil, das zweite einen Anteil und das dritte zwei Anteile. Das bedeutet, dass das dritte Element doppelt so groß ist wie die ersten und zweiten Elemente.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow-ratios.html", '100%', 520)}}

Denken Sie daran, dass Sie hier jeden positiven Wert verwenden können. Es ist das Verhältnis zwischen den Elementen, das wichtig ist. Sie können große Zahlen oder Dezimalzahlen verwenden; es liegt an Ihnen. Um dies zu testen, ändern Sie die `flex-grow`-Werte im obigen Beispiel in `.25`, `.25` und `.50`. Sie sollten das gleiche Ergebnis sehen.

## Die `flex-shrink`-Eigenschaft

Die {{CSSxRef("flex-shrink")}}-Eigenschaft gibt den **Flex-Schrumpfungs-Faktor** an, der bestimmt, wie stark das Flex-Element im Vergleich zu den anderen Flex-Elementen im Flex-Container schrumpft, wenn negativer freier Raum verteilt wird.

Diese Eigenschaft befasst sich mit Situationen, in denen der kombinierte `flex-basis`-Wert der Flex-Elemente zu groß ist, um in den Flex-Container zu passen und ansonsten überlaufen würde. Solange `flex-shrink` eines Elements ein positiver Wert ist, wird das Element schrumpfen, um nicht über den Container hinauszulaufen.

Während `flex-grow` verwendet wird, um verfügbaren Raum zu Elementen hinzuzufügen, wird `flex-shrink` verwendet, um Raum zu entfernen, um sicherzustellen, dass Elemente in ihren Container passen, ohne überzulaufen.

In diesem Beispiel gibt es drei 200px breite Flex-Elemente in einem 500px breiten Container. Mit `flex-shrink` auf `0` eingestellt, dürfen die Elemente nicht schrumpfen, was sie dazu bringt, den Container zu überfluten.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink.html", '100%', 500)}}

Ändern Sie den `flex-shrink`-Wert auf `1`; jedes Element wird um den gleichen Betrag schrumpfen und alle Elemente werden in den Container passen. Der negative freie Raum wurde proportional von jedem Element entfernt, wodurch jedes Flex-Element kleiner als seine ursprüngliche Breite wird.

### Kombinieren von `flex-shrink` und `flex-basis`

Es mag den Anschein haben, dass `flex-shrink` auf die gleiche Weise wie `flex-grow` arbeitet, nur dass es Elemente schrumpft anstatt zu vergrößern. Es gibt jedoch einige wichtige Unterschiede zu beachten.

Das Konzept der [flex-Basisgröße](#what_determines_the_base_size_of_an_item) beeinflusst, wie negativer Raum über Flex-Elemente verteilt wird. Der Flex-Schrumpfungs-Faktor wird mit der Flex-Basisgröße multipliziert, wenn negativer Raum verteilt wird. Dies verteilt den negativen Raum proportional dazu, wie viel das Element schrumpfen kann. Zum Beispiel wird ein kleines Element nicht auf null schrumpfen, bevor ein größeres Element merklich reduziert wurde.

Kleine Elemente werden nicht auf weniger als ihre `min-content`-Größe schrumpfen, die die kleinste Größe ist, die das Element sein kann, wenn alle verfügbaren weichen Umbruchmöglichkeiten genutzt wurden.

Dieses Beispiel demonstriert die `min-content`-Schranke, mit dem `flex-basis`, der sich auf die Größe des Inhalts auflöst. Wenn Sie die Breite des Flex-Containers ändern, zum Beispiel auf `700px` erhöhen, und dann die Breite des Flex-Elements reduzieren, können Sie feststellen, dass die ersten beiden Elemente umbrechen. Sie werden jedoch nie kleiner als ihre `min-content`-Größe. Wenn der Container sehr klein gemacht wird, wird der Raum nur vom dritten Element entfernt, wenn es weiter schrumpft.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-min-content.html", '100%', 500)}}

In der Praxis liefert dieses Schrumpfverhalten vernünftige Ergebnisse. Es verhindert, dass Inhalte vollständig verschwinden und kleiner als ihre Mindestinhaltsgröße werden. Die oben genannten Regeln sind sinnvoll für Inhalte, die schrumpfen müssen, um in ihren Container zu passen.

### Unterschiedlichen Flex-Elementen verschiedene `flex-shrink`-Faktoren geben

Auf die gleiche Weise wie bei `flex-grow` können Sie Flex-Elementen unterschiedliche `flex-shrink`-Faktoren geben. Dies kann helfen, das Standardverhalten zu ändern, wenn Sie beispielsweise möchten, dass ein Element schneller oder langsamer als seine Geschwister schrumpft oder gar nicht schrumpft.

In diesem Beispiel hat das erste Element einen `flex-shrink`-Faktor von `1`, das zweite Element `0` (sodass es überhaupt nicht schrumpft), und das dritte Element `4`, was zu insgesamt `5` Schrumpffaktoren führt. Das dritte Element schrumpft daher etwa viermal schneller als das erste, aber keines wird unter ihre `min-content`-Breite schrumpfen. Spielen Sie mit den verschiedenen Werten herum: Wie bei `flex-grow` können Sie auch hier Dezimalzahlen oder größere Zahlen verwenden.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-ratios.html", '100%', 570)}}

## Beherrschung der Größenbestimmung von Flex-Elementen

Um zu verstehen, wie die Größenbestimmung von Flex-Elementen funktioniert, müssen Sie die unten aufgeführten Faktoren berücksichtigen, die wir in diesen Leitfäden besprochen haben:

### Was bestimmt die Basisgröße eines Elements?

- Ist `flex-basis` auf `auto` gesetzt, und hat das Element eine Breite? Wenn ja, basiert die Größe auf dieser Breite.
- Ist `flex-basis` auf `auto` gesetzt, aber das Element hat keine Breite? Wenn ja, basiert die Größe auf der Inhaltsgröße des Elements.
- Ist `flex-basis` eine Länge oder ein Prozentsatz, aber nicht null? Wenn ja, ist dies die Größe des Elements (eingeschränkt auf `min-content`).
- Ist `flex-basis` auf `0` gesetzt? Wenn ja, wird die Größe des Elements bei der Berechnung der Raumnutzung nicht berücksichtigt.

### Gibt es verfügbaren Raum?

Elemente können nur wachsen, wenn es positiven freien Raum gibt, und sie schrumpfen nur, wenn es negativen freien Raum gibt.

- Wenn wir die Breiten aller Elemente (oder Höhen, wenn wir in einer Spalte arbeiten) zusammenzählen, ist dieser Gesamtwert **weniger** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es positiven freien Raum geben und `flex-grow` wird ins Spiel kommen.
- Wenn wir die Breiten aller Elemente (oder Höhen, wenn wir in einer Spalte arbeiten) zusammenzählen, ist dieser Gesamtwert **mehr** als die Gesamtbreite (oder Höhe) des Containers? Wenn ja, wird es negativen freien Raum geben und `flex-shrink` wird ins Spiel kommen.

### Was sind die anderen Möglichkeiten zur Raumverteilung?

Wenn Sie nicht möchten, dass Raum zu den Elementen hinzugefügt wird, denken Sie daran, dass Sie den freien Raum zwischen oder um die Elemente mit den Ausrichtungs-Eigenschaften steuern können, die im Leitfaden zur Ausrichtung von Elementen in einem Flex-Container beschrieben sind. Die {{CSSxRef("justify-content")}}-Eigenschaft ermöglicht die Verteilung von freiem Raum zwischen oder um die Elemente. Sie können auch automatische Ränder auf Flex-Elementen verwenden, um Raum aufzunehmen und Lücken zwischen den Elementen zu schaffen.

Mit all diesen zur Verfügung stehenden Flex-Eigenschaften werden Sie feststellen, dass die meisten Layout-Aufgaben möglich sind, obwohl es anfänglich etwas Experimentierfreudigkeit erfordern könnte.
