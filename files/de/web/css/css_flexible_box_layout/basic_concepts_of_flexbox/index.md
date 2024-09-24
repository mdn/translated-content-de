---
title: Grundkonzepte von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Das [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul (normalerweise Flexbox genannt) ist ein eindimensionales Layoutmodell zur Verteilung von Raum zwischen Elementen und umfasst zahlreiche Ausrichtungsfähigkeiten. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir in den restlichen Anleitungen näher untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox das Layout jeweils in einer Dimension behandelt - entweder als Reihe oder als Spalte. Dies steht im Gegensatz zum zweidimensionalen Modell des [CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout), das Spalten und Reihen zusammen steuert.

## Die beiden Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Bezug auf zwei Achsen denken - die _Hauptachse_ und die _Kreuzachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}} Eigenschaft definiert, und die [Kreuzachse](#die_kreuzachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox machen, bezieht sich auf diese Achsen, daher lohnt es sich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{glossary("main axis")}} wird durch `flex-direction` definiert, die vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse wählen`, verläuft Ihre Hauptachse entlang der Reihe in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Reihe in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in der **Blockrichtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Blockrichtung.](basics2.svg)

### Die Kreuzachse

Die {{glossary("cross axis")}} verläuft senkrecht zur Hauptachse. Daher verläuft die Kreuzachse, wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, die Spalten hinunter.

![Wenn flex-direction auf row gesetzt ist, verläuft die Kreuzachse in der Blockrichtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Kreuzachse entlang der Reihen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Kreuzachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiterer wichtiger Bereich des Verständnisses ist, wie Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox nimmt nicht einfach an, dass alle Textzeilen oben links in einem Dokument beginnen und zur rechten Seite verlaufen, wobei neue Zeilen untereinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; jedoch sollte die folgende Beschreibung helfen zu erklären, warum wir nicht von links und rechts und oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich in Englisch arbeite, befindet sich die Startkante der Hauptachse links, die Endkante rechts.

![Wenn man in Englisch arbeitet, ist die Startkante links.](basics5.svg)

Wenn ich in Arabisch arbeite, wäre die Startkante meiner Hauptachse rechts und die Endkante links.

![Die Startkante in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Kreuzachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es natürlich, über Anfang und Ende statt über links und rechts nachzudenken, und es wird Ihnen nützlich sein, wenn Sie mit anderen Layoutmethoden wie dem CSS Grid Layout arbeiten, das denselben Mustern folgt.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox layoutiert wird, wird als **flex container** bezeichnet. Um einen {{glossary("flex container")}} zu erstellen, setzen Sie die {{cssxref("display")}} Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **flex items**. Sie können explizit steuern, ob der Container selbst in einem Inline- oder Block-Formatierungskontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Format-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flexcontainers wie folgt verhält:

- Elemente werden in einer Reihe angezeigt (der Standardwert der {{cssxref("flex-direction")}} Eigenschaft ist `row`).
- Die Elemente beginnen am Anfangsrand der Hauptachse.
- Die Elemente strecken sich nicht in der Hauptdimension, können jedoch schrumpfen (der Standardwert der {{cssxref("flex-grow")}} Eigenschaft eines Flex-Elements ist `0` und der Standardwert der {{cssxref("flex-shrink")}} Eigenschaft ist `1`).
- Die Elemente strecken sich, um die Größe der Kreuzachse zu füllen (der Standardwert der {{cssxref("align-items")}} Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}} Eigenschaft eines Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall gleich der {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus und der {{cssxref("height")}} des Flex-Elements im vertikalen Schreibmodus sein wird. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `flex-basis` `content` Wert verwendet.
- Alle Elemente befinden sich in einer einzigen Reihe (der Standardwert der {{cssxref("flex-wrap")}} Eigenschaft ist `nowrap`), der Container wird überflutet, wenn seine kombinierte `width`/`height` die `width`/`height` des enthaltenen Elements überschreitet.

Das Ergebnis ist, dass Ihre Elemente alle in einer Reihe ausgerichtet werden und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umgebrochen, sondern stattdessen überlaufen. Wenn einige Elemente höher als andere sind, strecken sich alle Elemente entlang der gesamten Länge der Kreuzachse.

Sie können im Live-Beispiel unten sehen, wie dies aussieht. Versuchen Sie, die Elemente zu bearbeiten oder zusätzliche Elemente hinzuzufügen, um das Anfangsverhalten von Flexbox zu testen.

{{EmbedGHLiveSample("css-examples/flexbox/basics/the-flex-container.html", '100%', 480)}}

### Flex-Richtung ändern

Durch Hinzufügen der {{cssxref("flex-direction")}} Eigenschaft zum Flex-Container können wir ändern, in welcher Richtung unsere Flex-Elemente angezeigt werden. Wenn Sie `flex-direction: row-reverse` festlegen, werden die Elemente weiterhin in der Reihe angezeigt, jedoch werden die Anfangs- und Endlinien umgekehrt.

Wenn wir `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente werden jetzt in einer Spalte angezeigt. Stellen Sie `column-reverse` ein und die Anfangs- und Endlinien werden erneut umgekehrt.

Das Live-Beispiel unten hat `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte - `row`, `column` und `column-reverse`, um zu sehen, was mit dem Inhalt passiert.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-direction.html", '100%', 350)}}

## Mehrzeilige Flex-Container mit flex-wrap

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg umzubrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Platzverteilung erfolgt über jede Zeile hinweg, ohne auf die vorherigen oder nachfolgenden Zeilen Bezug zu nehmen.

Um ein Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit einem Wert von `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie auf eine andere Zeile umbrochen. Das Live-Beispiel unten enthält Elemente, die eine `width` erhalten haben. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, werden die Elemente über mehrere Zeilen umgebrochen. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, werden sie sich verkleinern, um in den Container zu passen. Sie schrumpfen, weil sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, der es den Elementen ermöglicht, zu schrumpfen. Die Verwendung von `nowrap` würde einen [Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) verursachen, wenn die Elemente nicht schrumpfen können oder nicht klein genug schrumpfen können, um zu passen.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-wrap.html", '100%', 400)}}

Erfahren Sie mehr über das Umbrechen von Flex-Elementen im Leitfaden [Meistern des Flex-Item-Umbruchs](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Die flex-flow Kurzform

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Kurzform kombinieren.

Im Live-Beispiel unten versuchen Sie, den ersten Wert auf einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten zu `wrap` und `nowrap`.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-flow.html", '100%', 400)}}

## Auf Flex-Elemente angewandte Eigenschaften

Um die Inline-Größe jedes Flex-Elements zu steuern, richten wir sie direkt über drei Eigenschaften an:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden einen kurzen Blick auf diese Eigenschaften unten werfen, aber wenn Sie umfassendere Informationen wünschen, werfen Sie einen Blick auf den Leitfaden [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir den Sinn dieser Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raums** betrachten. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist, die Art und Weise zu ändern, wie verfügbarer Raum zwischen unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns mit der Ausrichtung von Elementen befassen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann ist der Raum, den wir benötigen, um unsere Elemente anzuordnen, 300 Pixel. Dies lässt 200 Pixel verfügbaren Raum. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element platzieren.

![Dieser Flex-Container hat verfügbaren Raum nach der Anordnung der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann müssen wir eine Methode haben, den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex` Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, wie dieser verfügbare Raum unter den Geschwister-Flex-Elementen verteilt werden soll.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert die Größe dieses Elements in Bezug auf den Raum, den es als verfügbaren Raum übrig lässt. Der Anfangswert dieser Eigenschaft ist `auto` - in diesem Fall schaut der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Diese wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als flex-basis verwendet. Das ist der Grund, warum, wenn wir einfach `display: flex` auf dem Elternteil erklären, um Flex-Elemente zu erstellen, alle Elemente in eine Zeile wechseln und nur so viel Platz einnehmen, wie sie benötigen, um ihren Inhalt darzustellen.

### Die flex-grow Eigenschaft

Wenn die `flex-grow` Eigenschaft auf einen positiven Integer gesetzt ist, kann das Flex-Element, wenn verfügbarer Raum vorhanden ist, entlang der Hauptachse von seinem `flex-basis` wachsen. Ob das Element gestreckt wird, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen, oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente ebenfalls wachsen dürfen und den Wert ihrer `flex-grow` Eigenschaften.

Jedes Element mit einem positiven Wert nimmt einen Teil des verfügbaren Raumes entsprechend seinem `flex-grow` Wert ein. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow` Wert von 1 geben würden, würde der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen aufgeteilt werden und sie würden sich dehnen, um den Container auf der Hauptachse auszufüllen. Wenn wir unserem ersten Element einen `flex-grow` Wert von 2 geben, und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raumes werden dem ersten Element gegeben (100px von 200px im Fall des obigen Beispiels) und jeweils ein Teil den anderen beiden (je 50px von den insgesamt 200px).

### Die flex-shrink Eigenschaft

Während die `flex-grow` Eigenschaft den Raum auf der Hauptachse vergrößert, steuert die `flex-shrink` Eigenschaft, wie er verkleinert wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` auf einen positiven Integer gesetzt ist, kann das Element kleiner als `flex-basis` werden. Wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um bewirken, dass ein Element schneller als andere schrumpft - ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird berücksichtigt, während der tatsächliche Betrag des Schrumpfens berechnet wird, was bedeutet, dass `flex-shrink` das Potenzial hat, in Verhalten weniger konsistent zu erscheinen als `flex-grow`. Daher werden wir uns diesen Algorithmus detaillierter in dem Artikel [Steuerung der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) ansehen.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` gesetzt hätten und dann wollte, dass ein Element mit doppelter Geschwindigkeit wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie wollten.

### Kurzformwerte für die flex Eigenschaften

Sie werden sehr selten die `flex-grow`, `flex-shrink` und `flex-basis` Eigenschaften einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}} Kurzform kombiniert. Die `flex` Kurzform ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge zu setzen - `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten erlaubt es Ihnen, die unterschiedlichen Werte der flex-Kurzform zu testen; denken Sie daran, dass der erste Wert `flex-grow` ist. Wenn diesem ein positiver Wert zugewiesen wird, kann das Element wachsen. Der zweite ist `flex-shrink` - mit einem positiven Wert können die Elemente schrumpfen, jedoch nur, wenn ihre Gesamtwerte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als ihre Basis verwenden, um zu wachsen und zu schrumpfen.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-properties.html", '100%', 510)}}

Es gibt auch einige vordefinierte Kurzformwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese häufig in Tutorials sehen, und in vielen Fällen sind diese alles, was Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial` Wert ist ein [CSS-weiten Wert](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values), der den Anfangswert für eine Eigenschaft darstellt. Das Setzen von `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langform-Eigenschaften zurück, was dem gleichen wie `flex: 0 1 auto` entspricht. Der Anfangswert von `flex-grow` ist `0`, daher werden die Elemente nicht größer als ihre `flex-basis` Größe. Der Anfangswert von `flex-shrink` ist `1`, daher können die Elemente schrumpfen, wenn sie müssen, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Die Elemente werden entweder die festgelegte Größe des Elements in der Hauptdimension verwenden, oder sie erhalten ihre Größe aus der Inhaltsgröße.

Die Verwendung von `flex: auto` ist gleichbedeutend mit `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container ausfüllen können und schrumpfen können, wenn nötig.

Die Verwendung von `flex: none` wird vollständig unflexible Flex-Elemente erzeugen. Es ist so, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können weder wachsen noch schrumpfen und werden mit Flexbox unter Verwendung einer `flex-basis` von `auto` angeordnet.

Die Kurzform, die Sie häufig in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies entspricht dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente können von einer `flex-basis` von `0` wachsen und schrumpfen.

Versuchen Sie diese Kurzformwerte im Live-Beispiel unten.

{{EmbedGHLiveSample("css-examples/flexbox/basics/flex-shorthands.html", '100%', 510)}}

## Ausrichtung, Rechtfertigung und Verteilung von freiem Raum zwischen Elementen

Ein zentrales Merkmal von Flexbox ist die Fähigkeit, Elemente entlang der Haupt- und Kreuzachsen auszurichten und zu rechtfertigen sowie Platz zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container gesetzt werden, nicht auf die Elemente selbst.

### align-items

Die {{cssxref("align-items")}} Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum Flex-Elemente sich standardmäßig auf die Höhe des Flex-Containers erstrecken (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` eingestellt ist). Diese Höhe kann von dem höchsten Element im Container oder der auf den Flex-Container gesetzten Größe stammen.

Sie könnten stattdessen `align-items` auf `flex-start`, oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end`, oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Versuchen Sie dies im Live-Beispiel — Ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente im Container bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf folgendes setzen:

- `stretch`
- `flex-start`
- `flex-end`
- `start`
- `end`
- `center`
- `baseline`
- `last baseline`

{{EmbedGHLiveSample("css-examples/flexbox/basics/align-items.html", '100%', 520)}}

Das `align-items` wird auf dem Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders als andere ausrichten möchten, können Sie das {{cssxref("align-self")}} auf dem Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}} Eigenschaft wird verwendet, um die Elemente entlang der Hauptachse auszurichten, die Richtung, in der `flex-direction` den Fluss festgelegt hat. Der Anfangswert ist `flex-start`, der die Elemente am Anfang des Containers ausrichtet, aber Sie könnten auch den Wert auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, nachdem die Elemente angeordnet wurden, gleichmäßig zwischen den Elementen zu teilen, sodass es einen gleichen Abstand zwischen jedem Element gibt. Um einen gleichen Abstand auf der rechten und linken (oder oberen und unteren für Spalten) Seite jedes Elements zu verursachen, verwenden Sie den Wert `space-around`. Mit `space-around` haben die Elemente einen halben Abstand an jedem Ende. Oder um zu bewirken, dass die Elemente einen gleichen Abstand um sie herum haben, verwenden Sie den Wert `space-evenly`. Mit `space-evenly` haben die Elemente einen vollen Abstand an jedem Ende.

Versuchen Sie die folgenden Werte für `justify-content` im Live-Beispiel:

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

Der Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften ausführlicher, um ein besseres Verständnis ihrer Funktionsweise zu haben. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items) Eigenschaft ist eine Kurzform-Eigenschaft für `align-items` und `justify-items`. Wenn sie auf einem Flex-Container gesetzt wird, stellt sie die Ausrichtung ein, aber nicht die Rechtfertigung, und `justify-items` wird in Flexbox ignoriert.

Es gibt eine weitere Kurzform-Eigenschaft, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft wirkt sich nur auf Flex-Container aus, die umbrechen, und wird in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) besprochen.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis der grundlegenden Eigenschaften von Flexbox haben. Im nächsten Artikel werden wir uns [ansehen, wie diese Spezifikation zu anderen Teilen von CSS in Beziehung steht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
