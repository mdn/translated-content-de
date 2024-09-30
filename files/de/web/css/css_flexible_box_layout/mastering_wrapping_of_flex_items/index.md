---
title: Meisterung des Umbruchs von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Flexbox wurde als ein eindimensionales Layoutwerkzeug konzipiert — es befasst sich mit der Anordnung von Elementen in einer Reihe oder Spalte — aber nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Elemente auf neue Zeilen zu umbrechen, neue Reihen zu erstellen, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist, und neue Spalten zu erstellen, wenn `flex-direction` `column` ist. Dieser Leitfaden erklärt das Flexbox-Umbruchverhalten, wofür es gedacht ist und in welchen Situationen man stattdessen ein [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verwenden sollte.

## Dinge umbrechen lassen

Der Initialwert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`. Das bedeutet, dass, wenn eine Gruppe von Flex-Elementen zu breit für ihren Flex-Container ist, sie diesen überlaufen. Um sie umbrechen zu lassen, sobald sie zu breit sind, fügen Sie die `flex-wrap`-Eigenschaft mit dem Wert `wrap` hinzu oder verwenden Sie die Abkürzung {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Die Elemente werden dann auf neue Zeilen umgebrochen, wenn sie ihren Container überlaufen.

In diesem Beispiel gibt es zehn Flex-Elemente mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht genug Platz für ein weiteres 160-Pixel-Element in einer Reihe vorhanden ist, wird eine neue Flex-Zeile erstellt. Neue Zeilen werden nach Bedarf erstellt, bis alle Elemente angeordnet sind. Da die Elemente wachsen können, werden sie sich ausdehnen, um jede Zeile vollständig auszufüllen. Wenn sich nur ein Element in der letzten Zeile befindet, wird es gedehnt, um die gesamte Zeile auszufüllen.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-wrap.html", '100%', 650)}}

Dasselbe passiert mit Flex-Spalten. Um sie umzubrechen und neue Spalten zu erstellen, muss der Container eine Höhe haben. Bei den Spalten dehnen sich die Elemente vertikal aus, um jede Spalte vollständig auszufüllen.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/column-wrap.html", '100%', 810)}}

## Umbruch und Flex-Richtung

Das Umbruchverhalten funktioniert wie erwartet, wenn es mit `flex-direction` kombiniert wird. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Elemente am Ende des Containers und ordnen sich in umgekehrter Reihenfolge.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-reverse-wrap.html", '100%', 750)}}

Beachten Sie, dass die Umkehrung nur in der Inline-Reihenrichtung erfolgt. Wir beginnen auf der rechten Seite und gehen dann zur zweiten Zeile über und beginnen erneut von der rechten Seite. Wir kehren nicht in beiden Richtungen um und beginnen unten, um den Container hinaufzugehen!

## Erklärung des eindimensionalen Layouts

Wie wir in den obigen Beispielen gesehen haben, wachsen und schrumpfen unsere Elemente, wenn es weniger Elemente in der letzten Reihe oder Spalte gibt. Diese Elemente wachsen dann, um den verfügbaren Platz zu füllen.

Es gibt keine Flexbox-Funktionen, um Elemente in einer Zeile mit Elementen in der darüber liegenden Zeile in Einklang zu bringen — jede Flex-Zeile fungiert wie ein neuer Flex-Container. Sie befasst sich mit der Verteilung des Raums entlang der Hauptachse. Gibt es nur ein Element und darf dieses wachsen, füllt es die Achse genauso wie ein einzelner Item-Flex-Container. Wenn Sie ein Layout in zwei Dimensionen möchten, sollten Sie wahrscheinlich ein Grid-Layout verwenden.

Dieses Beispiel zeigt den Unterschied, indem das CSS-Grid-Layout verwendet wird, um ein Layout mit so vielen Spalten von mindestens `160px` wie möglich zu erstellen und den zusätzlichen Platz zwischen allen Spalten zu verteilen. Wir verwenden das gleiche HTML wie im [Flexbox-Umbruchbeispiel](#dinge_umbrechen_lassen) oben, setzen jedoch `display: grid` darauf. Anstelle der {{cssxref("flex")}}-Abkürzung, die außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite des Elements und die Fähigkeit zum Wachsen direkt am Container mit {{cssxref("grid-template-columns")}}. Bei CSS-Grid bleibt das letzte Element in seiner Gitterzelle; Gitterelemente dehnen sich nicht aus, wenn es weniger von ihnen in der letzten Zeile gibt.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/grid-example.html", '100%', 700)}}

Das ist der Unterschied zwischen ein- und zweidimensionalen Layouts. Bei einer eindimensionalen Layoutmethode wie Flexbox kontrollieren wir nur die Reihe oder Spalte. In einem zweidimensionalen Grid-Layout kontrollieren wir beides gleichzeitig. Wenn Sie wollen, dass der Raum zeilenweise verteilt wird, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS-Grid.

## Wie funktionieren Flexbox-basierte Rastersysteme?

Flexbox-basierte Layouts können gezwungen werden, sich wie Rastersysteme auszurichten, aber das ist nicht der beabsichtigte Zweck von Flexbox. Wenn Sie Flex-Elementen Prozentsätze für ihre Breite zuweisen — entweder durch `flex-basis` oder durch Hinzufügen einer Breite zum Element selbst und das Belassen des `flex-basis`-Wertes als `auto` — können Sie den Eindruck eines zweidimensionalen Layouts erwecken.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um inflexible Flex-Elemente zu erstellen. Die Flexibilität wird über Prozentsätze gesteuert.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/flex-grid.html", '100%', 650)}}

Diese Technik ermöglicht es Ihnen, Flex-Elemente auf der Querachse auszurichten. Wenn Sie sich jedoch dabei ertappen, Breiten auf diese Weise zu Flex-Elementen hinzuzufügen oder leere Flex-Elemente hinzuzufügen, um Platz zu schaffen, ist dies ein guter Hinweis darauf, dass Sie möglicherweise auf ein CSS-Grid-Layout für diese Komponente umsteigen sollten.

## Erstellen von Abständen zwischen Elementen

Um Lücken oder Abstände zwischen Flex-Elementen zu erzeugen, verwenden Sie die {{CSSXref("gap")}}-Eigenschaft direkt auf dem Flex-Container, um einen festen Abstand zwischen angrenzenden Flex-Elementen zu schaffen. Die `gap`-Eigenschaft ist eine Abkürzung für `row-gap` und `column-gap`. Diese Eigenschaften geben die Größe der Abstände zwischen Reihen und Spalten in Grid-, Flex- und Mehrspalten-Layouts an.

Die `gap`-Eigenschaft ist nicht das einzige, was Platz zwischen Elementen schaffen kann. Margins, Padding, `justify-content` und `align-content` können ebenfalls die Größe des Abstands erhöhen und die tatsächliche Größe der Lücke beeinflussen.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` in beiden Achsen unterscheidet, versuchen Sie, den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert zur `.box > *` Regel im Stylesheet unten hinzuzufügen. Klicken Sie auf die Schaltfläche „Zurücksetzen“, um zu den vorherigen Werten zurückzukehren.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/gaps.html", '100%', 830)}}

## Kollabierte Elemente

Die Flexbox-Spezifikation beschreibt, was geschehen sollte, wenn ein Flex-Element durch Setzen von `visibility: collapse` auf ein Element kollabiert wird. Siehe die MDN-Dokumentation für die {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Das Spezifizieren von visibility:collapse auf einem Flex-Element führt dazu, dass es zu einem kollabierten Flex-Element wird, was einen Effekt ähnlich zu visibility:collapse auf einer Tabellenreihe oder Tabellenspalte erzeugt: Das kollabierte Flex-Element wird vollständig aus der Darstellung entfernt, hinterlässt jedoch einen ‚Strut‘, der die Querausrichtungslinie der Flex-Linie stabil hält. Wenn ein Flex-Container nur eine Flex-Linie hat, kann das dynamische Kollabieren oder Wiederherstellen von Elementen die Hauptgröße des Flex-Containers ändern, jedoch nicht seine Quergröße, und es wird nicht bewirken, dass sich das Layout der restlichen Seite ändert." - [Kollabierte Elemente](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Elemente mit JavaScript ansprechen möchten, um beispielsweise Inhalte anzuzeigen oder zu verbergen. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel habe ich einen nicht umgebrochenen Flex-Container. Das dritte Element hat mehr Inhalt als die anderen, ist jedoch auf `visibility: collapse` gesetzt; daher behält der Flex-Container einen _Strut_ der Höhe bei, die erforderlich ist, um dieses Element anzuzeigen. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert auf `visible` ändern, sehen Sie, dass das Element angezeigt wird und der Raum zwischen nicht kollabierten Elementen neu verteilt wird; die Höhe des Flex-Containers sollte sich nicht ändern.

> [!NOTE]
> Verwenden Sie Firefox für die beiden folgenden Beispiele, da Chrome und Safari collapse als hidden behandeln.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/visibility-collapse.html", '100%', 650)}}

Bei der Behandlung von mehrzeiligen Flex-Containern müssen Sie jedoch verstehen, dass der Umbruch _nach_ dem Kollabieren erneut durchgeführt wird. Der Browser muss das Umbruchverhalten erneut ausführen, um den neuen Platz zu berücksichtigen, den das kollabierte Element in der Inline-Richtung hinterlassen hat.

Dies bedeutet, dass Elemente möglicherweise auf einer anderen Zeile landen als der, auf der sie begonnen haben. Im Fall eines Elements, das angezeigt und ausgeblendet wird, könnte es gut passieren, dass die Elemente in einer anderen Reihe enden.

Ich habe dieses Verhalten im nächsten Live-Beispiel erstellt. Sie können sehen, wie sich das Strecken der Reihe basierend auf der Position des kollabierten Elements ändert. Wenn Sie mehr Inhalt zum zweiten Element hinzufügen, ändert es die Reihe, sobald es lang genug wird. Diese obere Reihe wird dann nur so hoch wie eine einzelne Textzeile.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/wrapped-visibility-collapse.html", '100%', 750)}}

Wenn dies Probleme für Ihr Layout verursacht, kann es erforderlich sein, die Struktur zu überdenken, zum Beispiel jede Zeile in einen separaten Flex-Container zu setzen, damit sie die Zeilen nicht wechseln können.

### Verwendung von `visibility: hidden` und `display: none`

Im vorherigen Live-Beispiel, versuchen Sie, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei Verwendung von `visibility: hidden` wird das Element unsichtbar gemacht, aber der Kasten bleibt in der Formatierungsstruktur, sodass er sich immer noch so verhält, als wäre er Teil des Layouts.
Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern die Struktur wird ebenfalls entfernt. Das bedeutet, dass Zähler es ignorieren und Dinge wie Transitionen nicht ausgeführt werden.
