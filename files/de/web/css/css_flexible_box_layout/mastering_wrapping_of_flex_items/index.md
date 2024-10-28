---
title: Beherrschen des Umbruchs von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{CSSRef}}

Flexbox wurde als ein eindimensionales Layout-Tool entwickelt – es befasst sich mit der Anordnung von Elementen als Reihe oder Spalte, aber nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Elemente auf neue Linien umzubrechen, wodurch neue Reihen entstehen, wenn {{cssxref("flex-direction")}} auf `row` gesetzt ist, und neue Spalten, wenn `flex-direction` auf `column` gesetzt ist. Dieser Leitfaden erklärt den Flexbox-Umbruch, wofür er gedacht ist und in welchen Situationen [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) anstelle von Flexbox erforderlich ist.

## Dinge umbrechen lassen

Der anfängliche Wert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`. Das bedeutet, wenn eine Gruppe von Flex-Elementen zu breit für ihren Flex-Container ist, werden sie diesen überlaufen. Um sie umbrechen zu lassen, wenn sie zu breit sind, fügen Sie die `flex-wrap`-Eigenschaft mit einem Wert von `wrap` hinzu oder verwenden Sie die Kurzschrift {{cssxref("flex-flow")}} mit Werten von `row wrap` oder `column wrap`. Die Elemente werden dann auf neue Linien umgebrochen, wenn sie ihren Container überlaufen.

In diesem Beispiel gibt es zehn Flex-Elemente mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht genügend Platz vorhanden ist, um ein weiteres 160 Pixel-Element in einer Reihe zu platzieren, wird eine neue Flex-Linie erstellt. Neue Linien werden nach Bedarf erstellt, bis alle Elemente platziert sind. Da die Elemente wachsen können, werden sie sich ausdehnen, um jede Reihe vollständig auszufüllen. Befindet sich nur ein Element in der letzten Reihe, wird es sich strecken, um die gesamte Linie auszufüllen.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-wrap.html", '100%', 650)}}

Dasselbe passiert mit Flex-Spalten. Um neue Spalten zu erstellen, muss der Container eine Höhe haben. Im Fall von Spalten strecken sich die Elemente vertikal, um jede Spalte vollständig auszufüllen.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/column-wrap.html", '100%', 810)}}

## Umbruch und flex-direction

Das Umbruchverhalten funktioniert wie erwartet, wenn es mit `flex-direction` kombiniert wird. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Elemente am Endrand des Containers und ordnen sich in umgekehrter Reihenfolge an.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-reverse-wrap.html", '100%', 750)}}

Beachten Sie, dass die Umkehrung nur in der Inline-, Reihenrichtung erfolgt. Wir beginnen rechts und gehen dann zur zweiten Linie über und beginnen erneut von rechts. Wir kehren nicht in beide Richtungen um, beginnend von unten nach oben im Container!

## Eindimensionales Layout erklärt

Wie wir aus den obigen Beispielen gesehen haben, wenn unsere Elemente wachsen und schrumpfen dürfen, und es weniger Elemente in der letzten Reihe oder Spalte gibt, dann wachsen diese Elemente, um den verfügbaren Platz auszufüllen.

Es gibt keine Flexbox-Funktionen, die Elemente in einer Reihe dazu bringen, sich mit Elementen in der darüberliegenden Reihe abzustimmen — jede Flex-Linie verhält sich wie ein neuer Flex-Container. Sie beschäftigt sich mit der Platzverteilung entlang der Hauptachse. Wenn es nur ein Element gibt und dieses Element wachsen darf, wird es die Achse genauso füllen, als ob Sie einen einzeiligen Flex-Container hätten. Wenn Sie ein Layout in zwei Dimensionen wünschen, möchten Sie wahrscheinlich ein Grid-Layout.

Dieses Beispiel demonstriert den Unterschied, indem es das CSS Grid-Layout verwendet, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, die passen, und den zusätzlichen Raum zwischen allen Spalten verteilt. Wir verwenden das gleiche HTML wie im [Flexbox-umgebrochenen Beispiel](#dinge_umbrechen_lassen) oben, setzen jedoch `display: grid` darauf. Anstelle der {{cssxref("flex")}}-Kurzschrift, die außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite des Elements und die Fähigkeit zu wachsen direkt am Container mit {{cssxref("grid-template-columns")}}. Mit CSS Grid bleibt das letzte Element in seiner Rasterzelle; Rasterelemente dehnen sich nicht aus, wenn es in der letzten Reihe weniger davon gibt.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/grid-example.html", '100%', 700)}}

Dies ist der Unterschied zwischen ein- und zweidimensionalen Layouts. In einem eindimensionalen Layoutverfahren wie Flexbox kontrollieren wir nur die Reihe oder Spalte. In einem zweidimensionalen Grid-Layout kontrollieren wir beides gleichzeitig. Wenn Sie die Verteilung des Platzes Zeile für Zeile möchten, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS Grid.

## Wie funktionieren Flexbox-basierte Grid-Systeme?

Flexbox-basierte Layouts können gezwungen werden, sich als Grid-Systeme auszurichten, aber das ist nicht der beabsichtigte Zweck von Flexbox. Wenn Sie Flex-Elementen Prozentbreiten zuweisen – entweder mit `flex-basis` oder indem Sie dem Element selbst eine Breite hinzufügen und den Wert von `flex-basis` auf `auto` belassen – können Sie den Eindruck eines zweidimensionalen Layouts vermitteln.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um unflexible Flex-Elemente zu erstellen. Die Flexibilität wird über Prozentsätze kontrolliert.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/flex-grid.html", '100%', 650)}}

Diese Technik ermöglicht es Ihnen, Flex-Elemente entlang der Quachse auszurichten. Wenn Sie sich dabei ertappen, Flex-Elementen auf diese Weise Breiten hinzuzufügen oder leere Flex-Elemente hinzuzufügen, um Platz einzunehmen, ist das ein guter Hinweis darauf, dass Sie möglicherweise zu einem CSS Grid-Layout für diese Komponente wechseln möchten.

## Erstellen von Abständen zwischen Elementen

Um Lücken oder Zwischenräume zwischen Flex-Elementen zu erstellen, verwenden Sie die Eigenschaft {{CSSXref("gap")}} direkt am Flex-Container, um einen festen Raum zwischen angrenzenden Flex-Elementen zu schaffen. Die `gap`-Eigenschaft ist eine Kurzschrift für `row-gap` und `column-gap`. Diese Eigenschaften geben die Größe der Abstände zwischen Reihen und Spalten in Grid-, Flex- und Mehrspalten-Layouts an.

Die `gap`-Eigenschaft ist nicht das Einzige, was Raum zwischen Elementen hinzufügen kann. Ränder, Polsterungen, `justify-content` und `align-content` können auch die Größe des Zwischenraums erhöhen und die tatsächliche Größe der Lücke beeinflussen.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` in beiden Achsen unterscheidet, versuchen Sie, den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert zur Regel `.box > *` im untenstehenden Stylesheet hinzuzufügen. Klicken Sie auf die Schaltfläche "Reset", um zu den vorherigen Werten zurückzukehren.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/gaps.html", '100%', 830)}}

## Kollabierte Elemente

Die Flexbox-Spezifikation beschreibt, was passieren sollte, wenn ein Flex-Element durch Setzen von `visibility: collapse` auf ein Element kollabiert wird. Siehe die MDN-Dokumentation zur {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Das Festlegen von visibility:collapse auf ein Flex-Element führt dazu, dass es zu einem kollabierten Flex-Element wird, was einen Effekt ähnlich wie visibility:collapse auf eine Tabellenzeile oder -spalte erzeugt: Das kollabierte Flex-Element wird vollständig aus dem Rendering entfernt, hinterlässt jedoch eine „Stütze“, die die Quergröße der Flex-Linie stabil hält. Wenn ein Flex-Container nur eine Flex-Linie hat, kann das dynamische Kollabieren oder Unkollabieren von Elementen die Hauptgröße des Flex-Containers ändern, es wird jedoch garantiert, dass sich die Quergröße nicht ändert und das Layout des restlichen Teils der Seite nicht „wackelt“. Das Umbruchverhalten wird jedoch nach dem Kollabieren erneut berechnet, sodass sich die Quergröße eines Flex-Containers mit mehreren Linien ändern kann oder auch nicht." - [Kollabierte Elemente](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Elemente mit JavaScript ansprechen möchten, um beispielsweise Inhalte ein- und auszublenden. Das Beispiel in der Spezifikation demonstriert ein solches Muster.

Im folgenden Live-Beispiel habe ich einen nicht umgebrochenen Flex-Container. Das dritte Element enthält mehr Inhalt als die anderen und ist dennoch auf `visibility: collapse` gesetzt; daher behält der Flex-Container eine _Stütze_ der Höhe bei, die erforderlich ist, um dieses Element anzuzeigen. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert auf `visible` ändern, wird das Element angezeigt und der Raum zwischen den nicht kollabierten Elementen neu verteilt; die Höhe des Flex-Containers sollte sich nicht ändern.

> [!NOTE]
> Verwenden Sie Firefox für die folgenden zwei Beispiele, da Chrome und Safari Kollaps als versteckt behandeln.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/visibility-collapse.html", '100%', 650)}}

Wenn Sie jedoch mit mehrzeiligen Flex-Containern arbeiten, müssen Sie verstehen, dass der Umbruch _nach_ dem Kollabieren erneut durchgeführt wird. Der Browser muss das Umbruchverhalten erneut berechnen, um den neuen Raum zu berücksichtigen, den das kollabierte Element in der Inline-Richtung hinterlassen hat.

Dies bedeutet, dass Elemente möglicherweise auf einer anderen Linie enden als auf der, auf der sie begonnen haben. Im Fall eines ein- und ausgeblendeten Elements könnte es dazu führen, dass die Elemente in einer anderen Reihe enden.

Ich habe dieses Verhalten im nächsten Live-Beispiel erstellt. Sie können sehen, wie sich das Strecken je nach Position des kollabierten Elements reihenweise ändert. Wenn Sie dem zweiten Element mehr Inhalt hinzufügen, ändert es die Reihe, sobald es lang genug wird. Diese obere Reihe wird dann nur so groß wie eine einzelne Textzeile.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/wrapped-visibility-collapse.html", '100%', 750)}}

Wenn dies ein Problem für Ihr Layout verursacht, kann es erforderlich sein, die Struktur neu zu überdenken, indem beispielsweise jede Reihe in einen separaten Flex-Container gepackt wird, damit sie keine Reihen verschieben können.

### Verwendung von `visibility: hidden` und `display: none`

Im vorherigen Live-Beispiel versuchen Sie, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei Verwendung von `visibility: hidden` wird das Element unsichtbar gemacht, aber die Box bleibt in der Formatierungsstruktur bestehen, sodass es sich weiterhin so verhält, als ob es Teil des Layouts wäre. Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern die Struktur wird ebenfalls entfernt. Dies bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ausgeführt werden.
