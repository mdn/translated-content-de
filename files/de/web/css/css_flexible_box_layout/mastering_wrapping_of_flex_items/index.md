---
title: Meistern der Umbruchtechniken von Flex-Items
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Flexbox wurde als ein eindimensionales Layout-Tool entwickelt — es legt Elemente entweder in einer Reihe oder einer Spalte an — aber nicht beides gleichzeitig. Es ist jedoch möglich, Flex-Items in neue Zeilen umzubrechen, wodurch neue Reihen entstehen, wenn die {{cssxref("flex-direction")}} `row` ist, und neue Spalten, wenn die `flex-direction` `column` ist. Dieser Leitfaden erklärt Flexbox-Umbrüche, wofür sie konzipiert sind und welche Situationen eher ein [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) als Flexbox erfordern.

## Dinge zum Umbruch bringen

Der Anfangswert der Eigenschaft {{cssxref("flex-wrap")}} ist `nowrap`. Das bedeutet, dass wenn eine Anzahl von Flex-Items zu breit für ihren Flex-Container ist, sie diesen überlaufen werden. Um sicherzustellen, dass sie umbrechen, sobald sie zu breit sind, fügen Sie die `flex-wrap`-Eigenschaft mit einem Wert von `wrap` hinzu, oder verwenden Sie die Kurzform {{cssxref("flex-flow")}} mit den Werten `row wrap` oder `column wrap`. Die Elemente werden dann bei Überlauf auf neue Zeilen umgebrochen.

In diesem Beispiel gibt es zehn Flex-Items mit einem `flex-basis` von `160px`, die wachsen und schrumpfen können. Sobald nicht genug Platz ist, um ein weiteres 160 Pixel breites Item in einer Reihe zu platzieren, wird eine neue Flex-Raute erstellt. Neue Reihen werden nach Bedarf erzeugt, bis alle Items platziert sind. Da die Items wachsen können, dehnen sie sich aus, um jede Reihe vollständig auszufüllen. Wenn sich nur ein Item in der letzten Reihe befindet, wird es sich ausdehnen, um die Reihe vollständig auszufüllen.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-wrap.html", '100%', 650)}}

Dasselbe passiert mit Flex-Spalten. Um umzubrechen und neue Spalten zu erstellen, muss der Container eine Höhe haben. Im Fall von Spalten dehnen sich die Items vertikal aus, um jede Spalte vollständig auszufüllen.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/column-wrap.html", '100%', 810)}}

## Umbruch und Flex-Richtung

Der Umbruch funktioniert wie erwartet, wenn er mit `flex-direction` kombiniert wird. Wenn `flex-direction` auf `row-reverse` gesetzt ist, beginnen die Items am Endrand des Containers und ordnen sich in umgekehrter Reihenfolge auf.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-reverse-wrap.html", '100%', 750)}}

Beachten Sie, dass die Umkehrung nur in der Inline-, Zeilenrichtung stattfindet. Wir beginnen rechts und gehen dann zur zweiten Zeile über und starten erneut von rechts. Es wird nicht in beiden Richtungen umgekehrt, indem vom unteren Ende nach oben im Container begonnen wird!

## Erklärung des eindimensionalen Layouts

Wie wir aus den obigen Beispielen gesehen haben, wenn unsere Items wachsen und schrumpfen dürfen, dann wachsen diese Items in der letzten Reihe oder Spalte, wenn sich dort weniger Items befinden, um den verfügbaren Raum zu füllen.

Es gibt keine Flexbox-Funktionen, um Items in einer Zeile mit Items in der darüberliegenden Zeile auszurichten — jede Flex-Raute agiert wie ein neuer Flex-Container. Es geht um die Verteilung des Raums entlang der Hauptachse. Wenn es nur ein Item gibt und dieses wachsen darf, wird es die Achse genauso füllen, als ob Sie einen Einzel-Item-Flex-Container hätten. Wenn Sie ein Layout in zwei Dimensionen wünschen, dann möchten Sie wahrscheinlich ein Grid-Layout.

Dieses Beispiel zeigt den Unterschied, indem das CSS-Grid-Layout verwendet wird, um ein Layout mit so vielen Spalten von mindestens `160px` zu erstellen, wie es passt, und überschüssigen Raum zwischen allen Spalten zu verteilen. Wir verwenden dasselbe HTML wie im [Flexbox-Umschlagsreihen-Beispiel](#dinge_zum_umbruch_bringen) oben, setzen jedoch `display: grid` darauf. Anstelle des {{cssxref("flex")}} Shorthands, das außerhalb von Flexbox keine Wirkung hat, setzen wir die Mindestbreite der Items und die Fähigkeit zu wachsen direkt im Container mit {{cssxref("grid-template-columns")}}. Mit CSS-Grid bleibt das letzte Item in seiner Gitterzelle; Grid-Items dehnen sich nicht, wenn sich im letzten Reihe weniger von ihnen befinden.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/grid-example.html", '100%', 700)}}

Dies ist der Unterschied zwischen eindimensionalen und zweidimensionalen Layouts. In einer eindimensionalen Layoutmethode wie Flexbox steuern wir nur Zeilen oder Spalten. In einem zweidimensionalen Grid-Layout steuern wir beides gleichzeitig. Wenn Sie eine zeilenweise Raumverteilung möchten, verwenden Sie Flexbox. Wenn nicht, verwenden Sie CSS-Grid.

## Wie funktionieren Flexbox-basierte Rastersysteme?

Flexbox-basierte Layouts können gezwungen werden, sich als Rastersysteme auszurichten, aber das ist nicht der beabsichtigte Zweck von Flexbox. Wenn Sie Flex-Items prozentuale Breiten zuweisen — entweder mit `flex-basis` oder indem Sie dem Item selbst eine Breite hinzufügen und den Wert von `flex-basis` als `auto` belassen — können Sie den Eindruck eines zweidimensionalen Layouts erwecken.

In diesem Beispiel wurden `flex-grow` und `flex-shrink` auf `0` gesetzt, um unflexible Flex-Items zu erzeugen. Die Flexibilität wird über Prozentsätze gesteuert.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/flex-grid.html", '100%', 650)}}

Diese Technik ermöglicht es Ihnen, Flex-Items an der Querachse auszurichten. Wenn Sie jedoch feststellen, dass Sie auf diese Weise Breiten zu Flex-Items hinzufügen oder leere Flex-Items hinzufügen, um Platz einzunehmen, ist das ein gutes Indiz dafür, dass Sie möglicherweise zu einem CSS-Grid-Layout für diese Komponente wechseln möchten.

## Erstellen von Rändern zwischen Elementen

Um Lücken oder Ränder zwischen Flex-Items zu erzeugen, verwenden Sie die {{CSSXref("gap")}}-Eigenschaft direkt auf dem Flex-Container, um einen festen Raum zwischen benachbarten Flex-Items zu schaffen. Die `gap`-Eigenschaft ist eine Kurzform für `row-gap` und `column-gap`. Diese Eigenschaften bestimmen die Größe der Ränder zwischen Reihen und Spalten innerhalb von Grid-, Flex- und Mehrspalten-Layouts.

Die `gap`-Eigenschaft ist nicht das einzige Element, das Raum zwischen den Items schaffen kann. Margins, Padding, `justify-content` und `align-content` können auch die Größe des Randes erhöhen und die tatsächliche Größe der Lücke beeinflussen.

Um zu sehen, wie sich die `gap`-Eigenschaft von `margin` in beiden Achsen unterscheidet, versuchen Sie, den `gap`-Wert im Container `.box` zu ändern und einen `margin`-Wert zur Regel `.box > *` im Stylesheet unten hinzuzufügen. Klicken Sie auf die Schaltfläche "Zurücksetzen", um zu den vorherigen Werten zurückzukehren.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/gaps.html", '100%', 830)}}

## Zusammengeklappte Items

Die Flexbox-Spezifikation beschreibt, was passieren sollte, wenn ein Flex-Item durch Setzen von `visibility: collapse` auf ein Item zusammengeklappt wird. Siehe die MDN-Dokumentation zur {{cssxref("visibility")}}-Eigenschaft. Die Spezifikation beschreibt das Verhalten wie folgt:

> "Das Angeben von visibility:collapse bei einem Flex-Item bewirkt, dass es zu einem zusammengeklappten Flex-Item wird, was einen Effekt ähnlich wie visibility:collapse bei einer Tabellenreihe oder -spalte erzeugt: das zusammengeklappte Flex-Item wird vollständig aus der Darstellung entfernt, hinterlässt jedoch einen „Strut“, der die Querschnittsgröße der Flexlinie stabil hält. Daher kann, wenn ein Flex-Container nur eine Flexlinie hat, das dynamische Zusammen- oder Entfalten von Items die Hauptgröße des Flex-Containers ändern, garantiert aber, dass es keine Auswirkungen auf die Querschnittsgröße hat und nicht dazu führt, dass das Layout der restlichen Seite "wackelt". Das Umwickeln der Flexlinie wird nach dem Zusammenklappen jedoch neu durchgeführt, sodass sich die Querschnittsgröße eines Flex-Containers mit mehreren Linien möglicherweise ändert oder nicht." - [Zusammengeklappte Items](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

Dieses Verhalten ist nützlich, wenn Sie Flex-Items mit JavaScript ansprechen möchten, um beispielsweise Inhalte anzuzeigen oder zu verbergen. Das Beispiel in der Spezifikation zeigt ein solches Muster.

Im folgenden Live-Beispiel habe ich einen nicht umgebrochenen Flex-Container. Das dritte Item hat mehr Inhalt als die anderen, ist jedoch auf `visibility: collapse` gesetzt; daher behält der Flex-Container einen _Strut_ der Höhe bei, die zur Anzeige dieses Items erforderlich ist. Wenn Sie `visibility: collapse` aus dem CSS entfernen oder den Wert in `visible` ändern, werden Sie das Item sehen, und der Raum wird zwischen nicht zusammengeklappten Items neu verteilt; die Höhe des Flex-Containers sollte sich nicht ändern.

> [!NOTE]
> Verwenden Sie Firefox für die folgenden zwei Beispiele, da Chrome und Safari collapse als hidden behandeln.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/visibility-collapse.html", '100%', 650)}}

Beim Umgang mit mehrzeiligen Flex-Containern müssen Sie jedoch verstehen, dass das Umwickeln _nach_ dem Zusammenklappen neu durchgeführt wird. Der Browser muss das Umwicklungsverhalten neu durchführen, um den neuen Raum zu berücksichtigen, den das zusammengeklappte Item in der Inline-Richtung hinterlassen hat.

Dies bedeutet, dass Items auf einer anderen Zeile enden könnten als auf der, auf der sie angefangen haben. Im Fall, dass ein Item angezeigt und ausgeblendet wird, kann dies gut dazu führen, dass die Items in einer anderen Reihe enden.

Ich habe dieses Verhalten im nächsten Live-Beispiel erstellt. Sie können sehen, wie sich das Dehnen der Reihe ändert, basierend auf der Position des zusammengeklappten Items. Wenn Sie mehr Inhalt zum zweiten Item hinzufügen, ändert es die Reihe, sobald es lang genug wird. Diese oberste Reihe wird dann nur so groß wie eine einzelne Textzeile.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/wrapped-visibility-collapse.html", '100%', 750)}}

Wenn dies für Ihr Layout ein Problem darstellt, kann es notwendig sein, die Struktur zu überdenken, zum Beispiel jede Reihe in einen separaten Flex-Container zu setzen, damit sie nicht die Reihen wechseln können.

### Verwendung von `visibility: hidden` und `display: none`

Im vorherigen Live-Beispiel versuchen Sie, `visibility: hidden` oder `display: none` anstelle von `visibility: collapse` zu verwenden. Bei der Verwendung von `visibility: hidden` wird das Item unsichtbar gemacht, aber der Rahmen bleibt in der Formatierungsstruktur erhalten, sodass es sich immer noch verhält, als wäre es Teil des Layouts.
Wenn Sie `display: none` verwenden, wird das Item vollständig aus der Formatierungsstruktur entfernt. Es ist nicht nur unsichtbar, sondern auch die Struktur wird entfernt. Das bedeutet, dass Zähler es ignorieren und Dinge wie Übergänge nicht ausgeführt werden.
