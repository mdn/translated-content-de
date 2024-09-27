---
title: Grundlegende Konzepte von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das [Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul (meistens als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung des Raums zwischen Elementen und beinhaltet zahlreiche Ausrichtungsfunktionen. Dieser Artikel bietet einen Überblick über die Hauptmerkmale von Flexbox, die wir in den folgenden Leitfäden detaillierter untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass sich Flexbox jeweils mit der Anordnung in einer Dimension befasst – entweder als Reihe oder als Spalte. Dies steht im Gegensatz zum zweidimensionalen Modell des [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout), das sowohl Spalten als auch Reihen kontrolliert.

## Die beiden Achsen von Flexbox

Bei der Arbeit mit Flexbox müssen Sie in Bezug auf zwei Achsen denken – die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die Eigenschaft {{cssxref("flex-direction")}} definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher ist es wert, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die [Hauptachse](/de/docs/Glossary/main_axis) wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Reihe in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Reihe in der Inline-Richtung.](basics1.svg)

Bei der Wahl von `column` oder `column-reverse` verläuft Ihre Hauptachse in der **Block-Richtung**, von oben nach unten der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die [Querachse](/de/docs/Glossary/cross_axis) verläuft senkrecht zur Hauptachse. Daher verläuft die Querachse bei `flex-direction` (Hauptachse) auf `row` oder `row-reverse` entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Reihen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Start- und Endlinien

Ein weiterer wichtiger Punkt ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments trifft. Flexbox geht nicht einfach davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und sich zur rechten Seite hinziehen, mit neuen Zeilen, die nacheinander erscheinen. Stattdessen unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung sollte jedoch helfen, zu erklären, warum wir nicht über links und rechts sowie oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flexelemente fließen.

Wenn `flex-direction` `row` ist und ich auf Englisch arbeite, wird die Startkante der Hauptachse links und die Endkante rechts sein.

![Beim Arbeiten auf Englisch ist die Startkante links.](basics5.svg)

Wenn ich auf Arabisch arbeite, wäre die Startkante meiner Hauptachse rechts und die Endkante links.

![Die Startkante in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einiger Zeit wird es natürlich, über Start und Ende anstatt von Links und Rechts nachzudenken, und es wird Ihnen nützlich sein, wenn Sie mit anderen Layout-Methoden wie dem CSS-Grid-Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox layoutet wird, wird als **Flex-Container** bezeichnet. Um einen [Flex-Container](/de/docs/Glossary/flex_container) zu erstellen, setzen Sie die Eigenschaft {{cssxref("display")}} des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst in einem Inline- oder Blockformatierungs-Kontext angezeigt wird, indem Sie `inline-flex` für Inline-Flex-Container oder `flex` für Blockebene-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich die Inhalte eines neuen Flex-Containers wie folgt verhalten werden:

- Elemente werden in einer Reihe angezeigt (Der Standardwert der {{cssxref("flex-direction")}} Eigenschaft ist `row`).
- Die Elemente beginnen an der Startkante der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptrichtung aus, können aber schrumpfen (Der Standardwert der {{cssxref("flex-grow")}} Eigenschaft eines Flex-Elements ist `0` und der Wert der {{cssxref("flex-shrink")}} Eigenschaft ist `1`).
- Die Elemente werden sich über die Größe der Querachse erstrecken (Der Standardwert der {{cssxref("align-items")}} Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}} Eigenschaft eines Flex-Elements ist `auto`. Das bedeutet, dass es in jedem Fall der Breite in einem horizontalen Schreibmodus und der Höhe in einem vertikalen Schreibmodus des Flex-Elements entspricht. Ist die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt, wird stattdessen der `flex-basis` `content` Wert verwendet.
- Alle Elemente werden in einer einzigen Reihe angeordnet (Der Standardwert der {{cssxref("flex-wrap")}} Eigenschaft ist `nowrap`), überfüllen ihren Container, wenn die kombinierte `Breite`/`Höhe` des Containelements überschritten wird.

Das Ergebnis ist, dass sich alle Ihre Elemente in einer Reihe anordnen und als Größe in der Hauptachse die Größe des Inhalts verwenden. Wenn mehr Elemente vorhanden sind, als in den Container passen, wickeln sie sich nicht, sondern überfließen stattdessen. Wenn einige Elemente höher sind als andere, werden sich alle Elemente entlang der gesamten Länge der Querachse erstrecken.

Sie können im Live-Beispiel unten sehen, wie dies aussieht. Versuchen Sie, die Elemente zu bearbeiten oder zusätzliche Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox zu testen.

{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}}

### Ändern von flex-direction

Das Hinzufügen der Eigenschaft {{cssxref("flex-direction")}} zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Wenn Sie `flex-direction: row-reverse` einstellen, werden die Elemente weiterhin entlang der Reihe angezeigt, jedoch werden die Start- und Endlinien umgekehrt.

Wenn wir `flex-direction` in `column` ändern, wechselt die Hauptachse und unsere Elemente werden jetzt in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Start- und Endlinien werden erneut umgeschaltet.

Im Live-Beispiel unten ist `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte - `row`, `column` und `column-reverse` - um zu sehen, was mit dem Inhalt passiert.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}

## Mehrzeilige Flex-Container mit flex-wrap

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg zu umschließen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Raumverteilung wird über jede Zeile erfolgen, ohne Bezug zu der vorhergehenden oder nachfolgenden Zeile.

Um ein Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit einem Wert von `wrap` hinzu. Wenn Ihre Elemente nun zu groß sind, um alle in einer Zeile angezeigt zu werden, wickeln sie sich in eine andere Zeile. Das Live-Beispiel unten enthält Elemente, denen eine `Breite` gegeben wurde. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, wickeln sich die Elemente in mehreren Zeilen. Wenn Sie es auf `nowrap`, dem Anfangswert, setzen, schrumpfen sie, um in den Container zu passen. Sie schrumpfen, weil sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, die es den Elementen ermöglicht zu schrumpfen. Die Verwendung von `nowrap` würde einen [Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) verursachen, wenn die Elemente nicht in der Lage waren zu schrumpfen oder nicht klein genug schrumpfen konnten, um zu passen.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}

Erfahren Sie mehr über das Umwickeln von Flex-Elementen im Leitfaden [Meistern des Umwickelns von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Das flex-flow Kurzschreibweise

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der Kurzschreibweise {{cssxref("flex-flow")}} kombinieren.

Im Live-Beispiel unten versuchen Sie, den ersten Wert auf einen der zulässigen Werte für `flex-direction` - `row`, `row-reverse`, `column` oder `column-reverse` zu ändern, und ändern Sie auch den zweiten in `wrap` und `nowrap`.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}

## Eigenschaften, die auf Flex-Elemente angewendet werden

Um die Inline-Größe jedes Flex-Elements zu steuern, zielen wir sie direkt über drei Eigenschaften an:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden einen kurzen Blick auf diese Eigenschaften unten werfen, aber wenn Sie umfassendere Informationen wünschen, schauen Sie sich den Leitfaden [Kontrolle der Verhältnisse von Flex-Elementen auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) an.

Bevor wir den Sinn dieser Eigenschaften verstehen können, müssen wir den Begriff **verfügbarer Raum** berücksichtigen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ändert die Art und Weise, wie verfügbarer Raum zwischen unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir zur Ausrichtung von Elementen übergehen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann ist der Raum, den wir benötigen, um unsere Elemente anzuordnen, 300 Pixel. Das lässt 200 Pixel verfügbaren Raum übrig. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element einfügen.

![Dieser Flex-Container hat nach dem Anordnen der Elemente verfügbaren Raum.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann benötigen wir eine Methode, um den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex` Eigenschaften, die wir direkt auf die Elemente anwenden, ermöglichen es, zu bestimmen, wie dieser verfügbare Raum unter den benachbarten Flex-Elementen verteilt werden sollte.

### Die flex-basis Eigenschaft

Der `flex-basis` definiert die Größe dieses Elements in Bezug auf den Raum, den es als verfügbaren Raum lässt. Der Anfangswert dieser Eigenschaft ist `auto` - in diesem Fall überprüft der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixel. Dies wird als `flex-basis` verwendet.

Falls die Elemente keine Größe haben, wird die Größe des Inhalts als `flex-basis` verwendet. Deshalb, wenn wir einfach `display: flex` auf das übergeordnete Element anwenden, um Flex-Elemente zu erstellen, ordnen sich die Elemente in einer Reihe an und verwenden nur so viel Platz, wie sie zum Anzeigen ihrer Inhalte benötigen.

### Die flex-grow Eigenschaft

Mit der Eigenschaft `flex-grow` auf einen positiven ganzzahligen Wert eingestellt, kann das Flex-Element, wenn es verfügbaren Raum gibt, entlang der Hauptachse aus seinem `flex-basis` hinaus wachsen. Ob sich das Element so weit dehnt, dass es den gesamten verfügbaren Raum auf dieser Achse einnimmt, oder nur einen Teil davon, hängt davon ab, ob die anderen Elemente ebenfalls wachsen dürfen und vom Wert ihrer `flex-grow` Eigenschaften.

Jedes Element mit einem positiven Wert verbraucht einen Teil des verfügbaren Raums basierend auf ihrem `flex-grow` Wert. Wenn wir allen Elementen im obigen Beispiel einen `flex-grow` Wert von 1 geben, wird der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen verteilt, und sie werden sich entlang der Hauptachse ausdehnen, um den Container auszufüllen. Wenn wir unserem ersten Element einen `flex-grow` Wert von 2 und den anderen Elementen jeweils einen Wert von 1 geben, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element gegeben (100px von 200px im obigen Beispiel) und je 1 Teil den anderen beiden (jeweils 50px von 200px insgesamt).

### Die flex-shrink Eigenschaft

Wo die Eigenschaft `flex-grow` mit dem Hinzufügen von Raum in der Hauptachse befasst ist, steuert die Eigenschaft `flex-shrink`, wie dieser entzogen wird. Wenn wir nicht genug Raum im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` auf einen positiven Wert eingestellt ist, kann das Element kleiner als sein `flex-basis` werden. Wie bei `flex-grow` können verschiedene Werte zugewiesen werden, um ein Element schneller als andere schrumpfen zu lassen - ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird berücksichtigt, wenn die tatsächliche Menge des Schrumpfens berechnet wird, was bedeutet, dass `flex-shrink` potenziell weniger konsistent im Verhalten erscheint als `flex-grow`. Daher werden wir uns in dem Artikel [Kontrolle der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) die Funktionsweise dieses Algorithmus genauer ansehen.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Anteile. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` setzen würden und dann wollten, dass ein Element doppelt so schnell wächst, würden wir dieses Element auf `flex: 2 1 200px` einstellen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie wollten.

### Kurzschreibwerte für die Flex-Eigenschaften

Sie werden sehr selten die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis` einzeln verwendet sehen; stattdessen werden sie in der Kurzschreibweise {{cssxref("flex")}} kombiniert. Die Kurzschreibweise `flex` ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge einzustellen - `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten ermöglicht es Ihnen, die verschiedenen Werte der Flex-Kurzschreibweise auszuprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Geben Sie diesem einen positiven Wert, bedeutet dies, dass das Element wachsen kann. Der zweite ist `flex-shrink` - bei einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als Basiswert verwenden, von dem aus sie wachsen und schrumpfen.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 510)}}

Es gibt auch einige vordefinierte Kurzschreibwerte, die die meisten Anwendungsfälle abdecken. Sie werden oft in Tutorials sehen, und in vielen Fällen sind dies alles, was Sie brauchen werden. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial` Wert ist ein [CSS-weiter Wert](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values), der den Anfangswert für eine Eigenschaft darstellt. Die Einstellung `flex: initial` setzt das Element auf die [anfänglichen Werte](#anfangswerte) für die drei Langschreib-Eigenschaften zurück, das gleiche wie `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, sodass Elemente nicht größer als ihre `flex-basis` Größe werden. Der Anfangswert von `flex-shrink` ist `1`, sodass Elemente schrumpfen können, wenn sie müssen, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine beliebige Größe, die dem Element in der Hauptachse zugewiesen wurde, oder sie werden ihre Größe aus der Inhaltsgröße beziehen.

Die Verwendung von `flex: auto` ist dasselbe, wie `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container auffüllen sowie schrumpfen können, wenn nötig.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Elemente. Es ist so, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können nicht wachsen oder schrumpfen und werden mit einer `flex-basis` von `auto` layoutet.

Die Kurzschreibweise, die Sie häufig in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Das entspricht dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter, jeweils. Die Elemente können wachsen und schrumpfen von einer `flex-basis` von `0`.

Probieren Sie diese Kurzschreibwerte im folgenden Live-Beispiel aus.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 510)}}

## Ausrichtung, Rechtfertigung und Verteilung von freiem Raum zwischen Elementen

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf den Haupt- und Querachsen auszurichten und zu rechtfertigen sowie den Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container angewendet werden und nicht auf die Elemente selbst.

### align-items

Die Eigenschaft {{cssxref("align-items")}} richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch`, und dies ist der Grund, warum sich Flex-Elemente standardmäßig auf die Höhe des Flex-Containers dehnen (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` eingestellt ist). Diese Höhe kann von dem größten Element im Container oder von der auf den Flex-Container selbst gesetzten Größe stammen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` einstellen, um die Elemente an der Startkante des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie im Zentrum auszurichten. Probieren Sie dies im Live-Beispiel aus — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente sich innerhalb des Containers bewegen können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf folgende setzen:

- `stretch`
- `flex-start`
- `flex-end`
- `start`
- `end`
- `center`
- `baseline`
- `last baseline`

{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}

Das `align-items` wird auf den Flex-Container gesetzt und betrifft alle Flex-Elemente. Wenn Sie ein Flex-Element anders als andere ausrichten möchten, können Sie das {{cssxref("align-self")}} auf das Flex-Element setzen.

### justify-content

Die Eigenschaft {{cssxref("justify-content")}} wird verwendet, um die Elemente auf der Hauptachse auszurichten, in der Richtung, in der `flex-direction` den Fluss gesetzt hat. Der Anfangswert ist `flex-start`, was die Elemente an der Startkante des Containers ausrichtet, Sie können den Wert jedoch auch auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, der nach dem Anordnen der Elemente vorhanden ist, gleichmäßig zwischen den Elementen zu verteilen, sodass eine gleiche Menge Raum zwischen jedem Element vorhanden ist. Um einen gleichen Abstand auf der rechten und linken Seite (oder oben und unten für Spalten) eines jeden Elements zu verursachen, verwenden Sie den Wert `space-around`. Bei `space-around` haben die Elemente an beiden Enden einen halbgroßen Abstand. Um zu verursachen, dass die Elemente einen gleichen Abstand um sich herum haben, verwenden Sie den Wert `space-evenly`. Bei `space-evenly` haben die Elemente an beiden Enden einen vollwertigen Abstand.

Probieren Sie die folgenden Werte von `justify-content` im Live-Beispiel aus:

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

Der Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften eingehender, um ein besseres Verständnis davon zu erhalten, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in der Mehrheit der Anwendungsfälle nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items) Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt wird, richtet sie die Ausrichtung ein, jedoch nicht die Ausrichtung, und `justify-items` wird in Flexbox ignoriert.

Es gibt eine weitere Kurzschreibweise, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft wirkt sich nur auf Flex-Container aus, die umwickeln, und wird in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) diskutiert.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis der grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir untersuchen, [wie diese Spezifikation zu anderen Teilen von CSS in Beziehung steht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
