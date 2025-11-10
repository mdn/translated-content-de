---
title: Grundkonzepte von Flexbox
short-title: Basic concepts
slug: Web/CSS/Guides/Flexible_box_layout/Basic_concepts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das [Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Modul (häufig als Flexbox bezeichnet) ist ein eindimensionales Layoutmodell zur Verteilung von Raum zwischen Elementen und bietet zahlreiche Ausrichtungsoptionen. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir in den übrigen Anleitungen näher untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir, dass Flexbox das Layout jeweils in einer Dimension handhabt — entweder als Reihe oder als Spalte. Dies kann mit dem zweidimensionalen Modell des [CSS-Grid-Layouts](/de/docs/Web/CSS/Guides/Grid_layout) verglichen werden, das Spalten und Reihen zusammen steuert.

## Die zwei Achsen von Flexbox

Wenn Sie mit Flexbox arbeiten, müssen Sie in Bezug auf zwei Achsen denken — die Hauptachse und die Querachse. Die [Hauptachse](#die_hauptachse) wird durch die Eigenschaft {{cssxref("flex-direction")}} definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher lohnt es sich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, die vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse in der **Inline-Richtung** entlang der Reihe.

![Wenn `flex-direction` auf row gesetzt ist, verläuft die Hauptachse in der Inline-Richtung entlang der Reihe.](basics1.svg)

Wenn Sie `column` oder `column-reverse` wählen, verläuft Ihre Hauptachse in der **Block-Richtung**, von der oberen zur unteren Seite der Seite.

![Wenn `flex-direction` auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Daher, wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Querachse entlang der Spalten.

![Wenn `flex-direction` auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Reihen.

![Wenn `flex-direction` auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiterer wichtiger Bereich des Verständnisses ist, wie Flexbox keine Annahmen über den Schreibmodus des Dokuments trifft. Flexbox geht nicht einfach davon aus, dass alle Textzeilen am oberen linken Rand eines Dokuments beginnen und sich nach rechts bewegen, wobei neue Zeilen untereinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung sollte jedoch helfen, zu erklären, warum wir nicht von links und rechts sowie von oben und unten sprechen, wenn wir die Richtung beschreiben, in der unsere Flex-Elemente fließen.

Wenn `flex-direction` `row` ist und ich in Englisch arbeite, dann wird die Startkante der Hauptachse links sein, die Endkante rechts.

![Bei Arbeiten in Englisch ist die Startkante links.](basics5.svg)

Wenn ich in Arabisch arbeiten würde, wäre die Startkante meiner Hauptachse rechts und die Endkante links.

![Die Startkante in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einiger Zeit wird es ganz natürlich, in Begriffe von Anfang und Ende anstatt von links und rechts zu denken, und es wird Ihnen nützlich sein, wenn Sie mit anderen Layout-Methoden wie CSS Grid Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox gestaltet ist, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}}-Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst im Inline- oder Block-Formatierungszusammenhang angezeigt wird, indem Sie `inline flex` oder `inline-flex` für inline Flex-Container oder `block flex` oder `flex` für Block-Level Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers wie folgt verhalten wird:

- Elemente werden in einer Reihe angezeigt (der Standardwert der Eigenschaft {{cssxref("flex-direction")}} ist `row`).
- Die Elemente beginnen am Startpunkt der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptrichtung aus, können jedoch schrumpfen (der Standardwert der Eigenschaft {{cssxref("flex-grow")}} eines Flex-Elements ist `0` und der der Eigenschaft {{cssxref("flex-shrink")}} ist `1`).
- Die Elemente dehnen sich aus, um die Größe der Querachse auszufüllen (der Standardwert der Eigenschaft {{cssxref("align-items")}} ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}}-Eigenschaft eines Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall gleich der {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus und der {{cssxref("height")}} im vertikalen Schreibmodus ist. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `flex-basis`-Wert `content` verwendet.
- Alle Elemente werden in einer einzigen Reihe sein (der Standardwert der Eigenschaft {{cssxref("flex-wrap")}} ist `nowrap`), die ihren Container überläuft, wenn ihre kombinierte `width`/`height` die Containerelement-`width`/`height` übersteigt.

Das Ergebnis davon ist, dass sich Ihre Elemente alle in einer Reihe aufstellen, wobei ihre Größe in der Hauptachse durch die Größe des Inhalts bestimmt wird. Wenn mehr Elemente vorhanden sind, als in den Container passen, wickeln sie sich nicht ein, sondern überlaufen. Wenn einige Elemente höher sind als andere, dehnen sich alle Elemente über die gesamte Länge der Querachse aus.

Sehen Sie im Live-Beispiel unten, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

### flex-direction ändern

Durch Hinzufügen der Eigenschaft {{cssxref("flex-direction")}} zum Flex-Container können wir die Richtung ändern, in der unsere Flex-Elemente angezeigt werden. Wenn `flex-direction: row-reverse` gesetzt wird, bleibt die Anzeige der Elemente in der Reihe erhalten, jedoch werden die Anfangs- und Endlinien vertauscht.

Wenn wir `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente werden nun in einer Spalte angezeigt. Setzen wir `column-reverse`, werden die Anfangs- und Endlinien erneut vertauscht.

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

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, dass Flex-Elemente über mehrere Zeilen hinweg umbrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Raumverteilung erfolgt über jede Zeile hinweg, ohne Bezug zu den vorherigen oder nachfolgenden Zeilen.

Um ein Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit einem Wert von `wrap` hinzu. Wenn Ihre Elemente jetzt zu groß sind, um alle in einer Zeile angezeigt zu werden, verteilen sie sich auf zusätzliche Zeilen. Das Live-Beispiel unten enthält Elemente, denen eine `width` zugewiesen wurde. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` eingestellt ist, verteilen sich die Elemente auf mehrere Zeilen. Wenn Sie es auf `nowrap` setzen, das der Anfangswert ist, schrumpfen sie, um in den Container zu passen. Sie schrumpfen, weil sie die anfänglichen Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, der es den Elementen erlaubt zu schrumpfen. Mit `nowrap` würde ein [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) auftreten, wenn die Elemente nicht schrumpfen könnten oder nicht klein genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umwickeln von Flex-Elementen im Leitfaden [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items).

## Die flex-flow Kurzschrift

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Kurzschrift kombinieren.

Im Live-Beispiel unten versuchen Sie, den ersten Wert in einen der erlaubten Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten in `wrap` und `nowrap`.

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

## Eigenschaften, die auf Flex-Elemente angewendet werden

Um die Inline-Größe jedes Flex-Elements zu steuern, zielen wir direkt auf sie mit drei Eigenschaften ab:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden einen kurzen Blick auf diese Eigenschaften unten werfen, aber wenn Sie umfassendere Informationen wünschen, werfen Sie einen Blick auf den Leitfaden [Steuern der Verhältnisse von Flex-Elementen auf der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios).

Bevor wir diese Eigenschaften sinnvoll anwenden können, müssen wir das Konzept des **verfügbaren Raums** betrachten. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist, die Art und Weise zu ändern, wie verfügbarer Raum auf unsere Elemente verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns mit der Ausrichtung von Elementen befassen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann benötigen wir 300 Pixel Platz, um unsere Elemente anzuordnen. Dies lässt 200 Pixel verfügbaren Raum übrig. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element platzieren.

![Dieser Flex-Container hat nach der Anordnung der Elemente verfügbaren Raum.](basics7.svg)

Wenn wir stattdessen möchten, dass sich die Elemente ausdehnen und den Raum ausfüllen, dann brauchen wir eine Methode, um den verbleibenden Platz zwischen den Elementen zu verteilen. Die Flex-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, wie dieser verfügbare Raum unter den Geschwister-Flex-Elementen verteilt werden soll.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert, wie groß dieses Element in Bezug auf den Raum ist, den es als verfügbaren Raum hinterlässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall prüft der Browser, ob das Element eine Größe hat. In obigem Beispiel haben alle Elemente eine Breite von 100 Pixel. Diese wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als flex-basis verwendet. Aus diesem Grund, wenn wir einfach `display: flex` auf das übergeordnete Element setzen, um Flex-Elemente zu erstellen, bewegen sich die Elemente alle in eine Reihe und nehmen nur so viel Platz wie nötig ein, um ihren Inhalt anzuzeigen.

### Die flex-grow Eigenschaft

Mit der `flex-grow` Eigenschaft auf einen positiven Ganzzahlwert eingestellt, kann sich das Flex-Element entlang der Hauptachse von seinem `flex-basis` aus vergrößern, wenn verfügbarer Raum vorhanden ist. Ob sich das Element ausdehnt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen oder nur einen Teil davon, hängt davon ab, ob die anderen Elemente ebenfalls wachsen dürfen und vom Wert ihrer `flex-grow` Eigenschaften.

Jedes Element mit einem positiven Wert übernimmt einen Teil des verfügbaren Raums basierend auf seinem `flex-grow` Wert. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow` Wert von 1 geben, dann wird der verfügbare Raum im Flex-Container gleichmäßig unter unseren Elementen aufgeteilt, und sie dehnen sich aus, um den Container auf der Hauptachse auszufüllen. Wenn wir unserem ersten Element einen `flex-grow` Wert von 2 und den anderen Elementen jeweils einen Wert von 1 geben, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element zugewiesen (100px von 200px im Fall des obigen Beispiels) und 1 Teil jeweils den anderen beiden (je 50px von insgesamt 200px).

### Die flex-shrink Eigenschaft

Während die `flex-grow` Eigenschaft sich mit der Hinzufügung von Raum in der Hauptachse befasst, steuert die `flex-shrink` Eigenschaft, wie dieser entfernt wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente zu arrangieren, und `flex-shrink` auf einen positiven Ganzzahlwert gesetzt ist, kann das Element kleiner als sein `flex-basis` werden. Wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um ein Element schneller als andere schrumpfen zu lassen — ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird bei der Berechnung der tatsächlichen Schrumpfung berücksichtigt, was bedeutet, dass `flex-shrink` weniger konsistent als `flex-grow` in seiner Funktion erscheinen kann. Daher schauen wir uns in dem Artikel [Steuern der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) detaillierter an, wie dieser Algorithmus funktioniert.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Normalerweise, wenn wir all unsere Elemente auf `flex: 1 1 200px` gesetzt haben und dann möchten, dass ein Element doppelt so schnell wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzschriftwerte für die Flex-Eigenschaften

Sehr selten werden Sie die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis` einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}} Kurzschrift kombiniert. Die `flex` Kurzschrift ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Im Live-Beispiel unten können Sie die verschiedenen Werte der flex Kurzschrift testen; beachten Sie, dass der erste Wert `flex-grow` ist. Ein positiver Wert bedeutet, dass das Element wachsen kann. Der zweite Wert ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtgröße die Hauptachse überschreitet. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als Basiswert zum Wachsen und Schrumpfen verwenden.

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

Es gibt auch einige vordefinierte Kurzschriftwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese häufig in Tutorials sehen, und in vielen Fällen sind diese alles, was Sie benötigen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial`-Wert ist ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords), das den Anfangswert für eine Eigenschaft darstellt. Durch die Einstellung `flex: initial` wird das Element auf die [Anfangswerte](#anfangswerte) der drei Langform-Eigenschaften zurückgesetzt, was dem `flex: 0 1 auto` entspricht. Der Anfangswert von `flex-grow` ist `0`, also werden Elemente nicht größer als ihre `flex-basis`-Größe. Der Anfangswert von `flex-shrink` ist `1`, also können Elemente schrumpfen, wenn sie müssen, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder die auf dem Element eingestellte Größe in der Hauptdimension oder sie erhalten ihre Größe aus der Inhaltsgröße.

Die Verwendung von `flex: auto` entspricht `flex: 1 1 auto`; das ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container füllen können sowie schrumpfen, wenn nötig.

Mit `flex: none` werden vollständig unflexible Flex-Elemente erzeugt. Das entspricht `flex: 0 0 auto`. Die Elemente können nicht wachsen oder schrumpfen und werden mit einem `flex-basis` von `auto` im Flexbox Layout angeordnet.

Die Kurzschrift, die Sie oft in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies entspricht dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente erhalten die Minimalgröße durch `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink` Wert von `1` überflüssig, da die Elemente mit Minimalgröße beginnen — sie erhalten keine Größe, die sie den Flex-Container überlaufen lassen könnte.

Versuchen Sie diese Kurzschriftwerte im Live-Beispiel unten.

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

## Ausrichtung, Rechtfertigung und Verteilung von freiem Raum zwischen Elementen

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf der Haupt- und Querachse auszurichten und zu rechtfertigen sowie Platz zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften am Flex-Container und nicht an den Elementen selbst eingestellt werden.

### align-items

Die {{cssxref("align-items")}} Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und warum Flex-Elemente standardmäßig die Höhe des Flex-Containers ausfüllen (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` eingestellt ist). Diese Höhe kann von dem größten Element im Container oder der am Flex-Container selbst festgelegten Größe stammen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, auf `flex-end` oder nur `end`, um sie am Ende auszurichten, oder auf `center`, um sie in der Mitte auszurichten. Probieren Sie dies im Live-Beispiel aus — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente im Container bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf folgende einstellen:

- `stretch`
- `flex-start`
- `flex-end`
- `start`
- `end`
- `center`
- `baseline`
- `last baseline`

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

Das `align-items` wird auf dem Flex-Container eingestellt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders ausrichten möchten als andere, können Sie das {{cssxref("align-self")}} auf dem Flex-Element festlegen.

### justify-content

Die {{cssxref("justify-content")}} Eigenschaft wird verwendet, um die Elemente entlang der Hauptachse auszurichten, die Richtung, in die `flex-direction` den Fluss festgelegt hat. Der Anfangswert ist `flex-start`, was die Elemente am Anfang des Containers ausrichtet, aber Sie könnten den Wert auch auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum nach der Anordnung der Elemente gleichmäßig zwischen den Elementen zu verteilen, sodass zwischen jedem Element der gleiche Abstand besteht. Um zu erzielen, dass rechts und links (oder oben und unten für Spalten) jedes Elements ein gleicher Abstand besteht, verwenden Sie den Wert `space-around`. Bei `space-around` haben Elemente an beiden Enden einen halben Abstand. Oder um zu erzielen, dass die Elemente gleichmäßig verteilt sind, verwenden Sie den Wert `space-evenly`. Bei `space-evenly` haben Elemente an beiden Enden einen vollen Abstand.

Versuchen Sie die folgenden Werte von `justify-content` im Live-Beispiel:

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

Der Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) untersucht diese Eigenschaften ausführlicher, um ein besseres Verständnis ihrer Funktionsweise zu erhalten. Diese einfachen Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/Reference/Properties/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/Reference/Properties/place-items) Eigenschaft ist eine Kurzschrift für `align-items` und `justify-items`. Wenn sie in einem Flex-Container festgelegt ist, wird sie die Ausrichtung setzen, jedoch nicht die Rechtfertigung, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine andere Kurzschrift-Eigenschaft, [`place-content`](/de/docs/Web/CSS/Reference/Properties/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft wirkt sich nur auf Flex-Container aus, die umbuchen, und wird in [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) diskutiert.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis der grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir untersuchen, [wie diese Spezifikation in Beziehung zu anderen Teilen von CSS steht](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods).
