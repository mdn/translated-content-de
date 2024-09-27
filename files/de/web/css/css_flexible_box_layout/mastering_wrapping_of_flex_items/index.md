---
title: Beherrschung der Umbruchsteuerung von Flex-Elementen
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Flexbox wurde als eindimensionales Layout-Tool entwickelt – es befasst sich mit der Anordnung von Elementen in einer Reihe oder Spalte – aber nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Elemente auf neue Zeilen zu umbrechen, indem neue Reihen erstellt werden, wenn {{cssxref("flex-direction")}} `row` ist, und neue Spalten, wenn `flex-direction` `column` ist. Dieser Leitfaden erklärt den Umbruch in Flexbox, wofür er gedacht ist und in welchen Situationen der [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) statt Flexbox erforderlich ist.

## Dinge zum Umbruch bringen

Der Anfangswert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`. Das bedeutet, dass eine Gruppe von Flex-Elementen, die zu breit für ihren Flex-Container ist, diesen überläuft. Um sie umzubrechen, wenn sie zu breit sind, fügen Sie die Eigenschaft `flex-wrap` mit dem Wert `wrap` hinzu oder verwenden Sie die Kurzschrift {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Die Elemente umbrechen dann auf neue Zeilen, wenn sie ihren Container überlaufen.

In diesem Beispiel gibt es zehn Flex-Elemente mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht genug Platz vorhanden ist, um ein weiteres 160-Pixel-Element in einer Reihe zu platzieren, wird eine neue Flex-Zeile erstellt. Neue Zeilen werden nach Bedarf erstellt, bis alle Elemente platziert sind. Da die Elemente wachsen können, dehnen sie sich aus, um jede Reihe vollständig zu füllen. Wenn es nur ein Element in der letzten Zeile gibt, wird es gestreckt, um die gesamte Zeile zu füllen.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-wrap.html", '100%', 650)}}

Dasselbe passiert mit Flex-Spalten. Um umzubrechen und neue Spalten zu erstellen, muss der Container eine Höhe haben. Bei Spalten dehnen sich die Elemente vertikal aus, um jede Spalte vollständig zu füllen.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/column-wrap.html", '100%', 810)}}

## Umbruch und flex-direction

Das Umbruchverhalten funktioniert erwartungsgemäß in Kombination mit `flex-direction`. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Elemente am Endrand des Containers und ordnen sich in umgekehrt sortierten Zeilen an.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-reverse-wrap.html", '100%', 750)}}

Beachten Sie, dass das Umkehren nur in der Inline-Reihenrichtung stattfindet. Wir beginnen auf der rechten Seite und dann in der zweiten Zeile wieder von rechts. Wir kehren nicht in beiden Richtungen um, indem wir von unten nach oben im Container beginnen!

## Erläuterung des eindimensionalen Layouts

Wie wir aus den obigen Beispielen gesehen haben, wenn unsere Elemente wachsen und schrumpfen dürfen, dann wachsen diese Elemente, um den verfügbaren Raum zu füllen, wenn es in der letzten Reihe oder Spalte weniger Elemente gibt.

Es gibt keine Flexbox-Funktionen, um Elemente in einer Zeile mit Elementen in der darüber liegenden Zeile auszurichten – jede Flex-Zeile fungiert wie ein neuer Flex-Container. Sie befasst sich mit der Verteilung des Raums entlang der Hauptachse. Wenn es nur ein Element gibt und dieses Element wachsen darf, füllt es die Achse genauso, als ob Sie einen Einzel-Element-Flex-Container hätten. Wenn Sie eine Anordnung in zwei Dimensionen wünschen, benötigen Sie wahrscheinlich das Grid-Layout.

Dieses Beispiel zeigt den Unterschied, indem es das CSS-Grid-Layout verwendet, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, wie hineinpassen, und den zusätzlichen Raum auf alle Spalten verteilt. Wir verwenden denselben HTML-Code wie im [Flexbox-Umbruch-Beispiel](#dinge_zum_umbruch_bringen) oben, setzen jedoch `display: grid` darauf. Anstelle der {{cssxref("flex")}}-Kurzschrift, die außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite und Fähigkeit der Elemente, direkt im Container mit {{cssxref("grid-template-columns")}} zu wachsen. Mit CSS-Grid bleibt das letzte Element in seiner Rasterzelle; Grid-Elemente dehnen sich nicht, wenn es in der letzten Reihe weniger von ihnen gibt.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/grid-example.html", '100%', 700)}}

Dies ist der Unterschied zwischen ein- und zweidimensionalen Layouts. Bei einer eindimensionalen Layout-Methode wie Flexbox steuern wir nur die Reihe oder Spalte. In einem zweidimensionalen Grid-Layout steuern wir beides gleichzeitig. Wenn Sie die Raumverteilung Zeile für Zeile wünschen, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS-Grid.

## Wie funktionieren auf Flexbox basierende Rastersysteme?

Auf Flexbox basierende Layouts können gezwungen werden, sich als Rastersysteme auszurichten, aber das ist nicht der Zweck von Flexbox. Wenn Sie Flex-Elementen Prozentbreiten zuweisen – entweder mit `flex-basis` oder indem Sie dem Element selbst eine Breite hinzufügen und den Wert von `flex-basis` auf `auto` belassen – können Sie den Eindruck eines zweidimensionalen Layouts erwecken.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um unflexible Flex-Elemente zu erzeugen. Die Flexibilität wird über Prozentsätze gesteuert.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/flex-grid.html", '100%', 650)}}

Diese Technik ermöglicht es Ihnen, Flex-Elemente auf die Querachse auszurichten. Wenn Sie sich jedoch dabei ertappen, Breiten zu Flex-Elementen in dieser Weise hinzuzufügen oder leere Flex-Elemente hinzuzufügen, um Platz einzunehmen, kann dies ein guter Hinweis darauf sein, dass Sie für die Komponente möglicherweise zur CSS-Grid-Anordnung wechseln wollen.

## Erstellung von Abständen zwischen Elementen

Um Abstände oder Abstände zwischen Flex-Elementen zu schaffen, verwenden Sie die {{CSSXref("gap")}}-Eigenschaft direkt im Flex-Container, um einen festen Abstand zwischen angrenzenden Flex-Elementen zu erzeugen. Die `gap`-Eigenschaft ist eine Kurzschrift für `row-gap` und `column-gap`. Diese Eigenschaften bestimmen die Größe der Abstände zwischen Reihen und Spalten innerhalb von Grid-, Flex- und Mehrspalten-Layouts.

Die `gap`-Eigenschaft ist nicht das einzige, was Platz zwischen Elementen schaffen kann. Ränder, Polsterungen, `justify-content` und `align-content` können auch die Größe des Abstands erhöhen, was die tatsächliche Größe des Abstands beeinflusst.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` in beiden Achsen unterscheidet, versuchen Sie, den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert in die Regel `.box > *` im unten stehenden Stylesheet hinzuzufügen. Klicken Sie auf die Schaltfläche "Zurücksetzen", um zu den vorherigen Werten zurückzukehren.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/gaps.html", '100%', 830)}}

## Zusammengebrochene Elemente

Die Flexbox-Spezifikation beschreibt, was passieren sollte, wenn ein Flex-Element durch Setzen von `visibility: collapse` auf ein Element zusammengebrochen wird. Siehe die MDN-Dokumentation für die {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Das Festlegen von visibility:collapse auf einem Flex-Element führt dazu, dass es zu einem zusammengebrochenen Flex-Element wird, was einen Effekt ähnlich wie visibility:collapse auf eine Tabellenzeile oder -spalte erzeugt: Das zusammengebrochene Flex-Element wird vollständig aus der Darstellung entfernt, hinterlässt jedoch einen „Stützpfeiler“, der die Querschnittsgröße der Flex-Linie stabil hält. Somit, wenn ein Flex-Container nur eine Flex-Linie hat, kann das dynamische Kollabieren oder Entkollabieren von Elementen die Hauptgröße des Flex-Containers ändern, es wird jedoch garantiert, dass die Querschnittsgröße nicht betroffen ist und nicht dazu führt, dass das Layout der restlichen Seite „wackelt“. Flex-Linienumbruch wird nach dem Kollabieren jedoch neu durchgeführt, sodass sich die Querschnittsgröße eines Flex-Containers mit mehreren Linien möglicherweise ändert oder nicht." - [Zusammengebrochene Elemente](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Elemente mit JavaScript anvisieren möchten, um beispielsweise Inhalte anzuzeigen und zu verbergen. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel habe ich einen nicht umbrochenen Flex-Container. Das dritte Element hat mehr Inhalt als die anderen, ist jedoch auf `visibility: collapse` gesetzt; daher behält der Flex-Container einen _Stützpfeiler_ in der für dieses Element erforderlichen Höhe bei. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert in `sichtbar` ändern, sehen Sie das Element erscheinen, und der Raum wird zwischen nicht zusammengebrochenen Elementen neu verteilt; die Höhe des Flex-Containers sollte sich nicht ändern.

> [!NOTE]
> Verwenden Sie Firefox für die beiden folgenden Beispiele, da Chrome und Safari Collapse als Hidden behandeln.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/visibility-collapse.html", '100%', 650)}}

Wenn Sie jedoch mit Flex-Containern mit mehreren Zeilen zu tun haben, müssen Sie verstehen, dass das Umbruchverhalten _nach_ dem Zusammenbrechen neu durchgeführt wird. Der Browser muss das Umbruchverhalten erneut durchführen, um den neuen Raum, den das zusammengebrochene Element in der Inline-Richtung hinterlassen hat, zu berücksichtigen.

Dies bedeutet, dass Elemente möglicherweise in einer anderen Zeile enden, als sie begonnen haben. Im Fall eines angezeigten und verborgenen Elements könnte es gut sein, dass die Elemente in einer anderen Reihe enden.

Ich habe dieses Verhalten im nächsten Live-Beispiel erstellt. Sie können sehen, wie sich das Strecken basierend auf der Position des zusammengebrochenen Elements ändert. Wenn Sie dem zweiten Element mehr Inhalt hinzufügen, ändert es die Zeile, sobald es lang genug wird. Diese erste Zeile wird dann nur so hoch wie eine einzelne Textzeile.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/wrapped-visibility-collapse.html", '100%', 750)}}

Wenn dies ein Problem für Ihr Layout darstellt, kann es erforderlich sein, die Struktur zu überdenken, indem Sie z. B. jede Zeile in einen separaten Flex-Container legen, damit sie keine Zeilen wechseln können.

### Verwendung von `visibility: hidden` und `display: none`

Versuchen Sie im vorhergehenden Live-Beispiel, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei Verwendung von `visibility: hidden` wird das Element unsichtbar gemacht, aber die Box bleibt in der Formatierungsstruktur erhalten, sodass sie immer noch so agiert, als wäre sie Teil des Layouts.
Wenn Sie `display: none` verwenden, wird das Element vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern die Struktur wird ebenfalls entfernt. Das bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ausgeführt werden.
