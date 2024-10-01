---
title: Grundkonzepte von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das [Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul (üblicherweise als Flexbox bezeichnet) ist ein eindimensionales Layoutmodell zur Verteilung von Raum zwischen Elementen und beinhaltet zahlreiche Ausrichtungsfunktionen. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir in den restlichen Leitfäden genauer untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox das Layout jeweils in einer Dimension regelt – entweder als Zeile oder als Spalte. Dies steht im Gegensatz zum zweidimensionalen Modell des [CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout), das Spalten und Zeilen zusammen steuert.

## Die beiden Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Begriffen von zwei Achsen denken – der _Hauptachse_ und der _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}}-Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher ist es hilfreich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, welches vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Sollte Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Zeile in **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Zeile in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in **Block-Richtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Wenn also Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Querachse hinunter zu den Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiterer wesentlicher Bereich des Verständnisses ist, dass Flexbox keine Annahme über den Schreibmodus des Dokuments trifft. Flexbox geht nicht einfach davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und zur rechten Seite laufen, wobei neue Zeilen darunter erscheinen. Stattdessen unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; jedoch sollte die folgende Beschreibung helfen zu erklären, warum wir nicht von links und rechts sowie von oben und unten sprechen, wenn wir die Richtung beschreiben, in der unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich auf Englisch arbeite, dann wird die Anlaufkante der Hauptachse auf der linken Seite und die Endkante auf der rechten Seite sein.

![Beim Arbeiten in Englisch ist die Anlaufkante links.](basics5.svg)

Wenn ich auf Arabisch arbeiten würde, dann wäre die Anlaufkante meiner Hauptachse rechts und die Endkante links.

![Die Anlaufkante in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen befindet sich die Anlaufkante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einiger Zeit wird es natürlich, über Start und Ende anstatt über links und rechts nachzudenken, und es wird nützlich für Sie sein, wenn Sie mit anderen Layoutmethoden wie CSS Grid Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox gestaltet wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}}-Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst Inline oder in einem Blockformatierungskontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, so dass sich der Inhalt eines neuen Flex-Containers folgendermaßen verhält:

- Elemente werden in einer Zeile angezeigt (der Standardwert der {{cssxref("flex-direction")}}-Eigenschaft ist `row`).
- Die Elemente beginnen von der Anlaufkante der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptdimension aus, können sich jedoch verkleinern (der Standardwert der {{cssxref("flex-grow")}}-Eigenschaft eines Flex-Elements ist `0` und der Standardwert der {{cssxref("flex-shrink")}}-Eigenschaft ist `1`).
- Die Elemente dehnen sich aus, um die Größe der Querachse auszufüllen (der Standardwert der {{cssxref("align-items")}}-Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}}-Eigenschaft eines Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall der Breite des Flex-Elements im horizontalen Schreibmodus und der Höhe des Flex-Elements im vertikalen Schreibmodus entspricht. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `flex-basis`-Wert `content` verwendet.
- Alle Elemente befinden sich in einer einzigen Zeile (der Standardwert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`), wobei sie ihren Container überlaufen, wenn ihre kombinierte `width`/`height` die Breite/Höhe des umgebenden Elements überschreitet.

Das Ergebnis ist, dass sich alle Ihre Elemente in einer Zeile ausrichten, wobei sie ihre Größe in der Hauptachse gemäß der Größe des Inhalts annehmen. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umbrochen, sondern laufen stattdessen über. Wenn einige Elemente höher als andere sind, dehnen sich alle Elemente über die gesamte Länge der Querachse aus.

Im folgenden Live-Beispiel können Sie sehen, wie das aussieht. Versuchen Sie, die Elemente zu bearbeiten oder zusätzliche Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox zu testen.

{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}}

### Ändern der flex-direction

Das Hinzufügen der {{cssxref("flex-direction")}}-Eigenschaft zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Die Einstellung `flex-direction: row-reverse` lässt die Elemente weiterhin entlang der Zeile anzeigen, jedoch sind die Anfangs- und Endlinien vertauscht.

Wenn wir `flex-direction` zu `column` ändern, wechselt die Hauptachse und unsere Elemente werden nun in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Anfangs- und Endlinien werden wieder vertauscht.

Das folgende Live-Beispiel hat `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}

## Mehrzeilige Flex-Container mit flex-wrap

Auch wenn Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg zu umbrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jegliche Verteilung des Raums erfolgt über jede Zeile, ohne Bezug auf die vorherige oder nachfolgende Zeile.

Um ein Umbruchverhalten zu erzwingen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit einem Wert von `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie in eine weitere Zeile umgebrochen. Das Live-Beispiel unten enthält Elemente, denen eine `width` zugewiesen wurde. Die Gesamte Breite der Elemente ist zu groß für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, werden die Elemente über mehrere Zeilen hinweg umbrochen. Stellen Sie es auf `nowrap`, was der Anfangswert ist, und sie werden sich verkleinern, um in den Container zu passen. Sie verkleinern sich, weil sie Anfangswerte von Flexbox verwenden, einschließlich `flex-shrink: 1`, die es den Elementen erlauben, sich zu verkleinern. Der Gebrauch von `nowrap` würde einen [Overflow](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) verursachen, wenn die Elemente sich nicht verkleinern könnten oder nicht klein genug, um in den Container zu passen.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}

Erfahren Sie mehr über das Umwickeln von Flex-Elementen im Leitfaden [Beherrschung des Umwickelns von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Der flex-flow-Kurzschrift

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in die {{cssxref("flex-flow")}}-Kurzschrift kombinieren.

Im folgenden Live-Beispiel versuchen Sie, den ersten Wert auf einen der erlaubten Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten in `wrap` und `nowrap`.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}

## Eigenschaften, die auf Flex-Elemente angewendet werden

Um die Inline Size jedes Flex-Elements zu steuern, sprechen wir sie direkt über drei Eigenschaften an:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden uns diese Eigenschaften kurz ansehen, aber wenn Sie umfassendere Informationen wünschen, schauen Sie sich den Leitfaden [Steuerung der Relationen der Flex-Elemente entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) an.

Bevor wir diese Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raums** betrachten. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist, die Art und Weise zu ändern, wie der verfügbare Raum unter unseren Elementen verteilt wird. Dieses Konzept eines verfügbaren Raums ist auch wichtig, wenn wir zur Ausrichtung von Elementen übergehen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann benötigen wir 300 Pixel, um unsere Elemente anzuordnen. Das lässt 200 Pixel freien Raum. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element einfügen.

![Dieser Flex-Container hat verfügbaren Raum, nachdem die Elemente angeordnet wurden.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann müssen wir eine Möglichkeit haben, den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex`-Eigenschaften, die wir direkt auf die Elemente anwenden, ermöglichen es, wie dieser verfügbare Raum unter den Geschwister-Flex-Elementen verteilt werden soll.

### Die Eigenschaft flex-basis

Die `flex-basis` definiert die Größe dieses Elements in Bezug darauf, wie viel Platz es als verfügbar übrig lässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall schaut der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, dann wird die Größe des Inhalts als `flex-basis` verwendet. Dies ist der Grund, warum, wenn wir einfach `display: flex` auf das Elternelement setzen, um Flex-Elemente zu erstellen, alle Elemente in eine Zeile bewegt werden und nur so viel Platz beanspruchen, wie sie benötigen, um ihre Inhalte anzuzeigen.

### Die Eigenschaft flex-grow

Mit der Eigenschaft `flex-grow` auf einen positiven Integerwert gesetzt, kann, wenn verfügbarer Raum vorhanden ist, das Flex-Element entlang der Hauptachse von seiner `flex-basis` aus wachsen. Ob sich das Element streckt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen, oder nur einen Teil des verfügbaren Raums einnimmt, hängt davon ab, ob die anderen Elemente auch wachsen dürfen und welchen Wert deren `flex-grow`-Eigenschaften haben.

Jedes Element mit einem positiven Wert verbraucht einen Teil des verfügbaren Raums basierend auf seinem `flex-grow`-Wert. Wenn wir allen Elementen im obigen Beispiel einen `flex-grow`-Wert von 1 geben, dann wird der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen verteilt und sie würden sich entlang der Hauptachse strecken, um den Container zu füllen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element zugewiesen (100px von den 200px im Beispiel oben) und je 1 Part den anderen beiden (je 50px von den insgesamt 200px).

### Die Eigenschaft flex-shrink

Wo die Eigenschaft `flex-grow` sich mit der Hinzufügung von Raum entlang der Hauptachse befasst, steuert die Eigenschaft `flex-shrink`, wie dieser Raum weggenommen wird. Wenn wir nicht genug Raum im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` auf einen positiven Wert gesetzt ist, dann kann das Element kleiner als seine `flex-basis` werden. Genauso wie bei `flex-grow`, können unterschiedliche Werte zugeordnet werden, um ein Element schneller schrumpfen zu lassen als andere — ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}}-Größe schrumpfen. Diese Mindestgröße wird bei der Berechnung der tatsächlichen Schrumpfung berücksichtigt, was bedeutet, dass `flex-shrink` potenziell weniger konsistent erscheinen kann als `flex-grow` im Verhalten. Daher werden wir einen detaillierteren Blick auf die Funktionsweise dieses Algorithmus im Artikel [Kontrolle der Relationen von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) werfen.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Typischerweise würden wir alle Elemente auf `flex: 1 1 200px` setzen und dann ein Element doppel so schnell wachsen lassen, indem wir es auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzschriftwerte für die flex-Eigenschaften

Sie werden die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis` nur selten einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}}-Kurzschrift kombiniert. Die `flex`-Kurzschrift ermöglicht es, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das folgende Live-Beispiel ermöglicht es Ihnen, die verschiedenen Werte der flex-Kurzschrift auszuprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Ein positiver Wert bedeutet, dass das Element wachsen kann. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse übersteigen. Der letzte Wert ist `flex-basis`; dieser ist der Wert, den die Elemente als Basisgröße zum Wachsen und Schrumpfen verwenden.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 510)}}

Es gibt auch einige vordefinierte Kurzschriftwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese häufig in Tutorials sehen, und diese sind in vielen Fällen alles, was Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial`-Wert ist ein [CSS-weiten Wert](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values), der den Anfangswert für eine Eigenschaft darstellt. Wenn Sie `flex: initial` setzen, wird das Element auf die [anfänglichen Werte](#anfangswerte) der drei Langform-Eigenschaften zurückgesetzt, was dem entspricht wie wenn Sie `flex: 0 1 auto` schreiben. Der Anfangswert von `flex-grow` ist `0`, sodass Elemente nicht größer als ihre `flex-basis`-Größe wachsen. Der Anfangswert von `flex-shrink` ist `1`, daher können Elemente schrumpfen, wenn sie müssen, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine Größe, die im Hauptrichtungsmodus des Elements eingestellt ist, oder sie erhalten ihre Größe aus der Inhaltsgröße.

Durch die Verwendung von `flex: auto` wird dies gleichbedeutend mit `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container füllen sowie bei Bedarf schrumpfen können.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Elemente. Es ist, als hätten Sie `flex: 0 0 auto` geschrieben. Die Elemente können nicht wachsen oder schrumpfen und werden mit einer Flex-Basis von `auto` layoutet.

Die Kurzschriften, die Sie häufig in Tutorials sehen, sind `flex: 1` oder `flex: 2` und so weiter. Diese entsprechen dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter, jeweils. Die Elemente können mit einer `flex-basis` von `0` wachsen und schrumpfen.

Probieren Sie diese Kurzschriftvalues im folgenden Live-Beispiel aus.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 510)}}

## Ausrichtung, Rechtfertigung und Verteilung von Freiraum zwischen Elementen

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf den Haupt- und Querachsen auszurichten und zu rechtfertigen und den Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container gesetzt werden, nicht auf die Elemente selbst.

### align-items

Die {{cssxref("align-items")}}-Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum sich Flex-Elemente standardmäßig an die Höhe des Flex-Containers anpassen (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der Größe, die auf dem Flex-Container selbst gesetzt ist, kommen.

Stattdessen könnten Sie `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers zu positionieren, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Versuchen Sie dies im Live-Beispiel — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente innerhalb des Containers bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items einstellen auf:

- `stretch`
- `flex-start`
- `flex-end`
- `start`
- `end`
- `center`
- `baseline`
- `last baseline`

{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}

Das `align-items` wird auf den Flex-Container gesetzt und betrifft alle Flex-Elemente. Wenn Sie ein Flex-Element anders als die anderen ausrichten möchten, können Sie das {{cssxref("align-self")}} auf dem Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}}-Eigenschaft wird verwendet, um die Elemente entlang der Hauptachse auszurichten, die Richtung, in die `flex-direction` den Fluss gesetzt hat. Der Anfangswert ist `flex-start`, welches die Elemente an der Anlaufkante des Containers ausrichtet, aber Sie könnten auch den Wert `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum zu nehmen, nachdem die Elemente angeordnet sind, und gleichmäßig zwischen den Elementen zu teilen, so dass es einen gleichen Abstand zwischen jedem Element gibt. Um gleichen Abstand rechts und links (oder oben und unten bei Spalten) jedes Elements zu erzeugen, verwenden Sie den Wert `space-around`. Mit `space-around` haben die Elemente einen halben Abstand an beiden Enden. Oder, um den Elementen gleichen Raum um sie herum zu geben, verwenden Sie den Wert `space-evenly`. Mit `space-evenly` haben die Elemente einen vollen Abstand an beiden Enden.

Versuchen Sie die folgenden Werte von `justify-content` im Live-Beispiel auszuprobieren:

- `start`
- `end`
- `left`
- `right`
- `normal`
- `flex-start`
- `flex-end`
- `center`
- `space-around`
- `space-between`
- `space-evenly`
- `stretch`

{{EmbedGHLiveSample("css-examples/flexbox/basics/justify-content.html", '100%', 380)}}

Der Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) erforscht diese Eigenschaften ausführlicher, um ein besseres Verständnis dafür zu erhalten, wie sie funktionieren. Diese einfachen Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items)-Eigenschaft ist eine Kurzschrift für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt wird, wird sie die Ausrichtung, aber nicht die Rechtfertigung einstellen, und `justify-items` wird in Flexbox ignoriert.

Es gibt eine weitere Kurzschrift-Eigenschaft, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}}- und `justify-content`-Eigenschaften definiert. Die `align-content`-Eigenschaft wirkt sich nur auf Flex-Container aus, die umgebrochen werden, und wird im Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) erläutert.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis der grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir uns ansehen, [wie diese Spezifikation zu anderen Teilen von CSS steht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
