---
title: Grundlegende Konzepte von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{CSSRef}}

Das [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul (häufig als Flexbox bezeichnet) ist ein eindimensionales Layoutmodell zur Verteilung von Platz zwischen Elementen und bietet zahlreiche Ausrichtungsfunktionen. Dieser Artikel bietet einen Überblick über die wichtigsten Funktionen von Flexbox, die wir in den folgenden Leitfäden detaillierter erkunden werden.

Wenn wir Flexbox als eindimensional beschreiben, sprechen wir davon, dass Flexbox das Layout jeweils in einer Dimension behandelt — entweder als Zeile oder als Spalte. Dies steht im Gegensatz zu dem zweidimensionalen Modell des [CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout), das Spalten und Zeilen zusammen steuert.

## Die zwei Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Begriffen von zwei Achsen denken — der _Hauptachse_ und der _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}} Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, deshalb ist es nützlich zu verstehen, wie sie von Anfang an funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Zeile in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Zeile in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in der **Block-Richtung**, von der Oberseite der Seite zur Unterseite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Daher verläuft die Querachse, wenn Ihr `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, dann verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, dann verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Start- und Endlinien

Ein weiterer wichtiger Punkt ist das Verständnis, dass Flexbox keine Annahme über den Schreibmodus des Dokuments macht. Flexbox geht nicht einfach davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und zur rechten Seite hin laufen, wobei neue Zeilen nacheinander darunter erscheinen. Stattdessen unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über das Verhältnis von Flexbox zu Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel lesen; die folgende Beschreibung sollte jedoch helfen zu erklären, warum wir nicht von links und rechts und oben und unten sprechen, wenn wir die Richtung beschreiben, in der unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich in Englisch arbeite, dann wird der Startpunkt der Hauptachse auf der linken Seite sein, der Endpunkt auf der rechten.

![Bei der Arbeit in Englisch ist der Startpunkt auf der linken Seite.](basics5.svg)

Wenn ich in Arabisch arbeiten würde, würde der Startpunkt meiner Hauptachse auf der rechten Seite sein und der Endpunkt auf der linken.

![Der Startpunkt in einer RTL-Sprache ist auf der rechten Seite.](basics6.svg)

In beiden Fällen liegt der Startpunkt der Querachse oben im Flex-Container und der Endpunkt unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es selbstverständlich, über Anfang und Ende anstatt über links und rechts zu denken, und es wird nützlich sein, wenn Sie mit anderen Layoutmethoden wie dem CSS Grid Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox ausgelegt ist, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}} Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst in einem Inline- oder Blockformatierungskontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Blockebenen-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers wie folgt verhält:

- Elemente werden in einer Zeile angezeigt (der Standardwert der {{cssxref("flex-direction")}} Eigenschaft ist `row`).
- Die Elemente beginnen am Startpunkt der Hauptachse.
- Die Elemente strecken sich nicht in der Hauptdimension, können jedoch schrumpfen (ein Flex-Element hat den Standardwert `0` für die Eigenschaft {{cssxref("flex-grow")}} und den Standardwert `1` für die Eigenschaft {{cssxref("flex-shrink")}}).
- Die Elemente strecken sich, um die Größe der Querachse auszufüllen (der Standardwert der {{cssxref("align-items")}} Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}} Eigenschaft des Flex-Elements ist `auto`. Das bedeutet, dass es in jedem Fall der Breite des Flex-Elements im horizontalen Schreibmodus oder der Höhe des Flex-Elements im vertikalen Schreibmodus entspricht. Wenn die entsprechende `width`/`height` auch auf `auto` gesetzt ist, wird stattdessen der `content` Wert von `flex-basis` verwendet.
- Alle Elemente befinden sich in einer einzigen Zeile (der Standardwert der {{cssxref("flex-wrap")}} Eigenschaft ist `nowrap`), die ihren Container überflutet, wenn ihre kombinierte `width`/`height` die `width`/`height` des umgebenden Elements überschreitet.

Das Ergebnis davon ist, dass Ihre Elemente sich alle in einer Reihe aufstellen werden und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umgebrochen, sondern stattdessen überlaufen. Wenn einige Elemente höher als andere sind, strecken sich alle Elemente entlang der gesamten Länge der Querachse.

Im nachstehenden Live-Beispiel können Sie sehen, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

```html live-sample___the-flex-container
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___the-flex-container
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}
```

{{EmbedLiveSample("the-flex-container")}}

### Änderung der flex-direction

Durch Hinzufügen der {{cssxref("flex-direction")}} Eigenschaft zum Flex-Container können wir die Richtung ändern, in der unsere Flex-Elemente angezeigt werden. Die Einstellung `flex-direction: row-reverse` lässt die Elemente weiter entlang der Zeile anzeigen, jedoch werden Start- und Endlinien vertauscht.

Wenn wir `flex-direction` zu `column` ändern, wechselt die Hauptachse und unsere Elemente werden nun in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Start- und Endlinien werden erneut vertauscht.

Das Live-Beispiel unten hat `flex-direction` auf `row-reverse` gesetzt. Probieren Sie die anderen Werte — `row`, `column` und `column-reverse` — aus, um zu sehen, was mit dem Inhalt passiert.

```html live-sample___flex-direction
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___flex-direction
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-direction: row-reverse;
}
```

{{EmbedLiveSample("flex-direction")}}

## Mehrzeilige Flex-Container mit flex-wrap

Während Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Linien hinweg umzubrechen. Wenn Sie dies tun, sollten Sie jede Linie als neuen Flex-Container betrachten. Jede Platzverteilung erfolgt über jede Linie hinweg, ohne Bezug auf vorherige oder nachfolgende Linien.

Um ein Umbruchverhalten zu erzeugen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Wenn Ihre Elemente nun zu groß sind, um alle in einer Linie angezeigt zu werden, werden sie auf eine andere Linie umgebrochen. Das Live-Beispiel unten enthält Elemente, denen eine `width` zugewiesen wurde. Die Gesamtbreite der Elemente ist zu groß für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, werden die Elemente über mehrere Linien umgebrochen. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, werden sie sich an den Container anpassen. Sie schrumpfen, weil sie die Anfangswerte von Flexbox verwenden, einschließlich `flex-shrink: 1`, das es den Elementen ermöglicht zu schrumpfen. Die Verwendung von `nowrap` würde einen [Überlauf](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) verursachen, wenn die Elemente nicht schrumpfen könnten oder nicht klein genug schrumpfen können, um zu passen.

```html live-sample___flex-wrap
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___flex-wrap
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}
```

{{EmbedLiveSample("flex-wrap")}}

Erfahren Sie mehr über das Um wickeln von Flex-Elementen im Leitfaden [Beherrschen des Umwickelns von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Die flex-flow Kurzform

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Kurzform kombinieren.

Im Live-Beispiel unten versuchen Sie den ersten Wert auf einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten auf `wrap` und `nowrap`.

```html live-sample___flex-flow
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___flex-flow
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 200px;
}

.box {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-flow: row wrap;
}
```

{{EmbedLiveSample("flex-flow")}}

## Auf Flex-Elemente angewandte Eigenschaften

Um die Inline-Größe jedes Flex-Elements zu steuern, richten wir sie direkt über drei Eigenschaften an:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir nehmen einen kurzen Blick auf diese Eigenschaften unten, aber wenn Sie ausführlichere Informationen möchten, werfen Sie einen Blick auf den Leitfaden [Kontrolle der Verhältnisse von Flex-Elementen auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir diese Eigenschaften verstehen können, müssen wir das Konzept der **verfügbaren Fläche** berücksichtigen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist der Weg, wie verfügbarer Platz zwischen unseren Elementen verteilt wird, zu ändern. Dieses Konzept der verfügbaren Fläche ist auch wichtig, wenn wir zur Ausrichtung von Elementen kommen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann benötigen wir 300 Pixel, um unsere Elemente anzuordnen. Dies lässt 200 Pixel an verfügbarem Platz. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Platz nach dem letzten Element platzieren.

![Dieser Flex-Container hat nach dem Anordnen der Elemente verfügbaren Platz.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Platz ausfüllen, dann müssen wir eine Methode zur Verteilung des verbleibenden Platzes zwischen den Elementen haben. Die `flex` Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, zu bestimmen, wie dieser verfügbare Platz zwischen den benachbarten Flex-Elementen verteilt werden sollte.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert die Größe dieses Elements in Bezug auf den Raum, den es als verfügbaren Raum hinterlässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall schaut der Browser nach, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als Flex-Basis verwendet. Dies ist der Grund, warum sich die Elemente bewegen, wenn wir einfach `display: flex` auf das Elternteil setzen, um Flex-Elemente zu erstellen, und nur so viel Platz einnehmen, wie sie benötigen, um ihren Inhalt anzuzeigen.

### Die flex-grow Eigenschaft

Mit der Eigenschaft `flex-grow`, die auf einen positiven Ganzzahlwert gesetzt ist, kann das Flex-Element entlang der Hauptrichtung von seiner `flex-basis` wachsen, wenn verfügbarer Platz vorhanden ist. Ob das Element alle verfügbaren Raum an dieser Achse einnimmt oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente auch wachsen dürfen und welchen Wert ihre `flex-grow` Eigenschaften haben.

Jedes Element mit einem positiven Wert verbraucht einen Teil des verfügbaren Raums basierend auf seinem `flex-grow` Wert. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow` Wert von 1 geben würden, dann wäre der verfügbare Raum im Flex-Container gleichmäßig auf unsere Elemente verteilt und sie würden sich strecken, um den Container auf der Hauptachse auszufüllen. Wenn wir unserem ersten Element einen `flex-grow` Wert von 2 geben würden und den anderen Elementen jeweils einen Wert von 1, dann gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Weltraums werden dem ersten Element zugewiesen (100px von 200px im Falle des obigen Beispiels) und 1 Teil wird den anderen beiden zugewiesen (jeweils 50px von insgesamt 200px).

### Die flex-shrink Eigenschaft

Wo die Eigenschaft `flex-grow` Platz auf der Hauptachse hinzufügt, steuert die Eigenschaft `flex-shrink`, wie er weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen und `flex-shrink` auf einen positiven Ganzzahlwert gesetzt ist, dann kann das Element kleiner als die `flex-basis` werden. Wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um zu verursachen, dass ein Element schneller als andere schrumpft — ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister, die niedrigere Werte haben.

Ein Element kann auf seine {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird beim Ermitteln des tatsächlichen Schrumpfungsbetrags berücksichtigt, was bedeutet, dass `flex-shrink` weniger konsistent als `flex-grow` im Verhalten erscheinen kann. Daher werfen wir einen detaillierteren Blick auf den Algorithmus in dem Artikel [Kontrolle der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Anteile. Normalerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` setzen und dann ein Element mit doppelter Rate wachsen lassen möchten, würden wir dieses Element auf `flex: 2 1 200px` einstellen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzform-Werte für die Flex-Eigenschaften

Sie werden selten die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis` einzeln verwendet sehen; stattdessen werden sie in der {{cssxref("flex")}} Kurzform kombiniert. Die Kurzform `flex` ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten ermöglicht es Ihnen, die verschiedenen Werte der Flex-Kurzform auszuprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Diesen Wert positiv zu setzen, bedeutet, dass das Element wachsen kann. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse überfluten. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als Ausgangswert zum Wachsen und Schrumpfen verwenden.

```html live-sample___flex-properties
<div class="box">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```css live-sample___flex-properties
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.one {
  flex: 1 1 auto;
}

.two {
  flex: 1 1 auto;
}

.three {
  flex: 1 1 auto;
}
```

{{EmbedLiveSample("flex-properties")}}

Es gibt auch einige vordefinierte Kurzformwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese oft in Tutorials sehen, und in vielen Fällen sind dies die einzigen, die Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial` Wert ist ein [CSS-weiter Wert](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values), der den Anfangswert einer Eigenschaft repräsentiert. Die Einstellung `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langform-Eigenschaften zurück, was dem entspricht `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, sodass die Elemente nicht größer als ihre `flex-basis` Größe wachsen werden. Der Anfangswert von `flex-shrink` ist `1`, sodass die Elemente schrumpfen können, falls nötig, anstatt zu überlaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine Größe, die im Hauptbereich auf das Element festgelegt ist, oder sie erhalten ihre Größe von der Inhaltsgröße.

Die Verwendung von `flex: auto` entspricht der Verwendung von `flex: 1 1 auto`; dies ähnelt `flex: initial`, außer dass die Elemente auch wachsen und den Container füllen sowie bei Bedarf schrumpfen können.

Die Verwendung von `flex: none` erzeugt vollständig unflexible Flex-Elemente. Es ist, als ob man `flex: 0 0 auto` schreibt. Die Elemente können weder wachsen noch schrumpfen und werden mit einer `flex-basis` von `auto` mit Flexbox ausgelegt.

Die Kurzform, die Sie häufig in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies entspricht dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente können wachsen und schrumpfen ab einer `flex-basis` von `0`.

Probieren Sie diese Kurzformwerte im Live-Beispiel unten aus.

```html live-sample___flex-shorthands
<div class="box">
  <div class="one">One</div>
  <div class="two">Two</div>
  <div class="three">Three</div>
</div>
```

```css live-sample___flex-shorthands
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.one {
  flex: 1;
}

.two {
  flex: 1;
}

.three {
  flex: 1;
}
```

{{EmbedLiveSample("flex-shorthands")}}

## Ausrichtung, Rechtfertigung und Verteilung des freien Raums zwischen Elementen

Ein wesentliches Merkmal von Flexbox ist die Fähigkeit, Elemente auf der Haupt- und Querachse auszurichten und zu rechtfertigen sowie den Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften am Flex-Container und nicht an den Elementen selbst gesetzt werden.

### align-items

Die {{cssxref("align-items")}} Eigenschaft richtet alle Flex-Elemente entlang der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch`, und das ist der Grund, warum Flex-Elemente standardmäßig auf die Höhe des Flex-Containers gestreckt werden (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann vom höchsten Element im Container kommen oder von der auf den Flex-Container selbst festgelegten Größe.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers anzuordnen, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Probieren Sie dies im Live-Beispiel aus — Ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie sich die Elemente im Container bewegen können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf:

- `stretch`
- `flex-start`
- `flex-end`
- `start`
- `end`
- `center`
- `baseline`
- `last baseline`

setzen.

```html live-sample___align-items
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three <br />has <br />extra <br />text</div>
</div>
```

```css live-sample___align-items
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  width: 500px;
  height: 130px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}
```

{{EmbedLiveSample("align-items")}}

Die `align-items` Eigenschaft wird am Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders als andere ausrichten möchten, können Sie das {{cssxref("align-self")}} am Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}} Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, die Richtung, in der `flex-direction` den Fluss festgelegt hat. Der Anfangswert ist `flex-start`, der die Elemente am Anfang des Containers ausrichtet, aber Sie könnten den Wert auch auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten überschüssigen Raum zu nehmen, nachdem die Elemente angeordnet wurden, und ihn gleichmäßig zwischen den Elementen aufzuteilen, sodass zwischen jedem Element ein gleicher Abstand entsteht. Verwenden Sie den Wert `space-around`, um einen gleichen Abstand rechts und links (oder oben und unten für Spalten) von jedem Element zu bewirken. Mit `space-around` haben die Elemente einen halbgroßen Abstand an beiden Enden. Oder verwenden Sie den Wert `space-evenly`, um gleiche Abstände um sie herum zu erzeugen. Mit `space-evenly` haben die Elemente einen ganzgroßen Abstand an beiden Enden.

Probieren Sie die folgenden Werte von `justify-content` im Beispiel aus:

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

```html live-sample___justify-content
<div class="box">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
</div>
```

```css live-sample___justify-content
.box > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.box {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  justify-content: flex-start;
}
```

{{EmbedLiveSample("justify-content")}}

Der Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) behandelt diese Eigenschaften ausführlicher, um ein besseres Verständnis dafür zu gewinnen, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items) Eigenschaft ist eine Kurzform für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt wird, richtet sie die Ausrichtung aus, nicht jedoch die Rechtfertigung, und `justify-items` wird in Flexbox ignoriert.

Es gibt eine weitere Kurzform, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft wirkt sich nur auf Flex-Container aus, die umbrechen, und wird in [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) besprochen.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie grundlegende Funktionen von Flexbox verstehen. Im nächsten Artikel werden wir untersuchen, [wie diese Spezifikation mit anderen Teilen von CSS in Beziehung steht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
