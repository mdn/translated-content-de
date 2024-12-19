---
title: Grundkonzepte von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Das [Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul (häufig als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Platz zwischen Elementen und bietet zahlreiche Ausrichtungsfähigkeiten. Dieser Artikel gibt eine Übersicht über die Hauptmerkmale von Flexbox, die wir in den weiteren Leitfäden genauer untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, sprechen wir davon, dass Flexbox mit Layout in einer Dimension gleichzeitig umgeht — entweder als Zeile oder als Spalte. Dies kann mit dem zweidimensionalen Modell des [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) verglichen werden, das Spalten und Zeilen zusammen steuert.

## Die zwei Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Bezug auf zwei Achsen denken — die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}} Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox machen, bezieht sich auf diese Achsen zurück, daher lohnt es sich, zu verstehen, wie sie von Anfang an funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, welche vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, läuft Ihre Hauptachse entlang der Zeile in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Zeile in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, dann verläuft Ihre Hauptachse in der **Block-Richtung**, von der Oberseite der Seite bis zur Unterseite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Daher, wenn Ihr `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Querachse die Spalten herunter.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, dann verläuft die Querachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Start- und Endlinien

Ein weiterer wichtiger Bereich des Verständnisses ist, wie Flexbox keine Annahme über den Schreibmodus des Dokuments macht. Flexbox geht nicht davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und zur rechten Seite hin verlaufen, wobei neue Zeilen untereinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie auch andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung sollte jedoch helfen zu erklären, warum wir nicht über links und rechts und oben und unten sprechen, wenn wir die Richtung beschreiben, in der unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich in Englisch arbeite, dann wird der Start-Rand der Hauptachse links und der End-Rand rechts sein.

![Beim Arbeiten in Englisch ist der Start-Rand links.](basics5.svg)

Wenn ich auf Arabisch arbeiten würde, wäre der Start-Rand meiner Hauptachse rechts und der End-Rand links.

![Der Start-Rand in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen ist der Start-Rand der Querachse oben im Flex-Container und der End-Rand unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es natürlich, über Anfang und Ende statt über links und rechts zu denken, und es wird Ihnen nützlich sein, wenn Sie mit anderen Layout-Methoden wie CSS Grid Layout zu tun haben, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mithilfe von Flexbox gestaltet ist, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}}-Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst im Inline- oder Block-Format angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers wie folgt verhält:

- Elemente werden in einer Reihe angezeigt (der Standardwert der {{cssxref("flex-direction")}}-Eigenschaft ist `row`).
- Die Elemente beginnen am Start-Rand der Hauptachse.
- Die Elemente strecken sich nicht in der Hauptdimension, können jedoch schrumpfen (der Standardwert der {{cssxref("flex-grow")}}-Eigenschaft eines Flex-Elements ist `0` und der der {{cssxref("flex-shrink")}}-Eigenschaft ist `1`).
- Die Elemente werden gestreckt, um die Größe der Querachse auszufüllen (der Standardwert der {{cssxref("align-items")}}-Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}}-Eigenschaft eines Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall gleich der {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus und der {{cssxref("height")}} des Flex-Elements im vertikalen Schreibmodus ist. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `content`-Wert von `flex-basis` verwendet.
- Alle Elemente befinden sich in einer einzigen Reihe (der Standardwert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`), wobei sie ihren Container überlaufen, wenn ihre kombinierte `width`/`height` die `width`/`height` des enthaltenen Elements übersteigt.

Das Ergebnis ist, dass sich Ihre Elemente alle in einer Reihe anordnen und die Größe des Inhalts als Größe in der Hauptachse verwenden. Wenn es mehr Elemente gibt, als in den Container passen, werden sie nicht umgebrochen, sondern stattdessen überlaufen. Wenn einige Elemente höher sind als andere, werden alle Elemente entlang der vollen Länge der Querachse gestreckt.

Sie können im unten live dargestellten Beispiel sehen, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

### Flex-Direction ändern

Das Hinzufügen der {{cssxref("flex-direction")}}-Eigenschaft zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Das Setzen von `flex-direction: row-reverse` wird die Elemente entlang der Reihe anzeigen lassen, jedoch werden die Start- und Endlinien vertauscht.

Wenn wir `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente werden nun in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Start- und Endlinien werden erneut vertauscht.

Das unten stehende Live-Beispiel hat `flex-direction` auf `row-reverse` gesetzt. Probieren Sie die anderen Werte aus — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

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

## Mehrzeilige Flex-Container mit Flex-Wrap

Während Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg umzubrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Verteilung des Raumes wird über jede Zeile ohne Bezug zu den vorherigen oder nachfolgenden Zeilen erfolgen.

Um ein Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Jetzt, wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie auf eine andere Zeile umgebrochen. Das Live-Beispiel unten enthält Elemente, denen eine `width` gegeben wurde. Die Gesamtbreite der Elemente ist zu groß für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, werden die Elemente über mehrere Zeilen umbrochen. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, werden sie schrumpfen, um in den Container zu passen. Sie schrumpfen, da sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, das es Elementen erlaubt zu schrumpfen. Die Verwendung von `nowrap` würde ein [Überlaufen](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht in der Lage wären zu schrumpfen, oder nicht genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umwickeln von Flex-Elementen im Leitfaden [Mastering wrapping of flex items](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Die Flex-Flow-Kurzform

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}}-Kurzform kombinieren.

Im Live-Beispiel unten versuchen Sie, den ersten Wert auf einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten in `wrap` und `nowrap`.

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

## Auf Flex-Elemente angewendete Eigenschaften

Um die Inline-Größe jedes Flex-Elements zu steuern, zielen wir direkt auf sie über drei Eigenschaften:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden einen kurzen Blick auf diese Eigenschaften unten werfen, aber wenn Sie umfassendere Informationen möchten, sehen Sie sich den [Controlling ratios of flex items on the main axis](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) Leitfaden an.

Bevor wir den Sinn dieser Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raums** berücksichtigen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist, die Art und Weise zu ändern, wie verfügbarer Raum unter unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns mit der Ausrichtung von Elementen befassen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann sind 300 Pixel der Platz, den wir benötigen, um unsere Elemente anzuordnen. Dies lässt 200 Pixel verfügbaren Raum übrig. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element platzieren.

![Dieser Flex-Container hat verfügbaren Raum nach der Anordnung der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann benötigen wir eine Methode, um den verbleibenden Raum zwischen den Elementen zu verteilen. Die Flex-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, zu bestimmen, wie der verfügbare Raum unter den benachbarten Flex-Elementen verteilt werden sollte.

### Die Flex-Basis-Eigenschaft

Die Flex-Basis ist das, was die Größe dieses Elements in Bezug auf den Raum definiert, den es als verfügbaren Raum hinterlässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall sucht der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine `width` von 100 Pixeln. Dies wird als Flex-Basis verwendet.

Wenn die Elemente keine Größe haben, dann wird die Größe des Inhalts als Flex-Basis verwendet. Deshalb, wenn wir einfach `display: flex` auf dem Elternteil deklarieren, um Flex-Elemente zu erstellen, bewegen sich die Elemente alle in eine Zeile und nehmen nur so viel Platz ein, wie sie benötigen, um ihren Inhalt anzuzeigen.

### Die Flex-Grow-Eigenschaft

Mit der `flex-grow`-Eigenschaft, die auf eine positive Ganzzahl gesetzt ist, kann das Flex-Element, wenn verfügbarer Raum vorhanden ist, entlang der Hauptachse von seiner Flex-Basis aus wachsen. Ob das Element sich streckt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen, oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob den anderen Elementen erlaubt ist zu wachsen und den Wert ihrer `flex-grow`-Eigenschaften.

Jedes Element mit einem positiven Wert nimmt eine Portion des verfügbaren Raums basierend auf seinem flex-grow-Wert ein. Wenn wir all unseren Elementen im obigen Beispiel einen flex-grow-Wert von 1 geben, wird der verfügbare Raum im Flex-Container gleichmäßig auf unsere Elemente verteilt und sie würden sich entlang der Hauptachse strecken, um den Container zu füllen. Wenn wir unserem ersten Element einen flex-grow-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element gegeben (100px von insgesamt 200px im Beispiel oben) und 1 Teil jedem der anderen beiden (jeweils 50px von den insgesamt 200px).

### Die Flex-Shrink-Eigenschaft

Wo die `flex-grow`-Eigenschaft das Hinzufügen von Raum in der Hauptachse behandelt, steuert die `flex-shrink`-Eigenschaft, wie Raum weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` auf eine positive Ganzzahl gesetzt ist, dann kann das Element kleiner als die Flex-Basis werden. Genau wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um ein Element schneller schrumpfen zu lassen als andere — ein Element mit einem höheren Wert, der für `flex-shrink` gesetzt ist, schrumpft schneller als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}}-Größe schrumpfen. Diese Mindestgröße wird berücksichtigt, während die tatsächliche Menge an Schrumpfung bestimmt wird, was bedeutet, dass `flex-shrink` das Potenzial hat, weniger konsistent als `flex-grow` im Verhalten zu erscheinen. Deshalb werden wir im Artikel [Controlling ratios of items along the main axis](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) einen detaillierteren Blick darauf werfen, wie dieser Algorithmus funktioniert.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` setzen und dann ein Element schneller wachsen lassen wollen, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzformwerte für Flex-Eigenschaften

Sie werden sehr selten die `flex-grow`, `flex-shrink` und `flex-basis` Eigenschaften einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}}-Kurzform kombiniert. Die Flex-Kurzform ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten erlaubt es Ihnen, die verschiedenen Werte der Flex-Kurzform auszuprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Wenn Sie diesem einen positiven Wert geben, bedeutet das, dass das Element wachsen kann. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, jedoch nur, wenn ihre Gesamtwerte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als Basis verwenden, um zu wachsen und zu schrumpfen.

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

Es gibt auch einige vordefinierte Kurzformwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese in Tutorials häufig sehen, und in vielen Fällen sind dies die einzigen, die Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial`-Wert ist ein [CSS-weiter Wert](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values), der den Anfangswert für eine Eigenschaft darstellt. Das Setzen von `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langform-Eigenschaften zurück, was dem entspricht, als hätte man `flex: 0 1 auto` geschrieben. Der Anfangswert von `flex-grow` ist `0`, also werden die Elemente nicht größer als ihre Flex-Basisgröße. Der Anfangswert von `flex-shrink` ist `1`, also können die Elemente schrumpfen, wenn sie es benötigen, anstatt zu überlaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder jede im Hauptdimension auf das Element gesetzte Größe oder sie erhalten ihre Größe aus der Inhaltsgröße.

Die Verwendung von `flex: auto` ist dasselbe wie die Verwendung von 'flex: 1 1 auto'; dies ist ähnlich wie 'flex: initial', außer dass die Elemente wachsen und den Container füllen sowie schrumpfen können, wenn nötig.

Die Verwendung von `flex: none` wird vollständig unflexible Flex-Elemente schaffen. Es ist, als hätte man `flex: 0 0 auto` geschrieben. Die Elemente können weder wachsen noch schrumpfen und werden mit Flexbox mit einer 'flex-basis' von 'auto' angeordnet.

Die Kurzform, die Sie in Tutorials oft sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies ist dasselbe wie das Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente können wachsen und schrumpfen von einer `flex-basis` von `0`.

Versuchen Sie, diese Kurzformwerte im folgenden Live-Beispiel.

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

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf der Haupt- und Querachse auszurichten und zu rechtfertigen und Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften am Flex-Container festgelegt werden, nicht an den Elementen selbst.

### align-items

Die {{cssxref("align-items")}}-Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum Flex-Elemente standardmäßig auf die Höhe des Flex-Containers gestreckt werden (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container kommen oder die Größe, die am Flex-Container selbst gesetzt ist.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Probieren Sie dies im Live-Beispiel — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente innerhalb des Containers bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf:

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

Die 'align-items' wird am Flex-Container festgelegt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders als andere ausrichten möchten, können Sie 'align-self' am Flex-Element festlegen.

### justify-content

Die {{cssxref("justify-content")}}-Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, die Richtung, in die 'flex-direction' den Ablauf festgelegt hat. Der Anfangswert ist `flex-start`, was die Elemente am Start-Rand des Containers ausrichtet, aber Sie könnten den Wert auch auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um allen verbleibenden Raum, nachdem die Elemente platziert wurden, gleichmäßig zwischen den Elementen zu teilen, sodass es einen gleichmäßigen Abstand zwischen jedem Element gibt. Um einen gleichmäßigen Abstand rechts und links (oder oben und unten für Spalten) eines jeden Elements zu verursachen, verwenden Sie den Wert `space-around`. Bei `space-around` haben Elemente einen halb so großen Abstand an beiden Enden. Oder, um Elemente so anzuordnen, dass sie einen gleichmäßigen Abstand um sich herum haben, verwenden Sie den Wert `space-evenly`. Bei `space-evenly` haben Elemente an beiden Enden einen voll großen Abstand.

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

Der Artikel [Ausrichtung der Elemente in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften ausführlicher, um ein besseres Verständnis dafür zu erlangen, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch nützlich in den meisten Anwendungsfällen.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items)-Eigenschaft ist eine Kurzform der `align-items` und `justify-items`. Wenn sie an einem Flex-Container gesetzt wird, setzt sie die Ausrichtung, aber nicht die Rechtfertigung, und `justify-items` wird in Flexbox ignoriert.

Es gibt eine weitere Kurzform, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}} und `justify-content`-Eigenschaften definiert. Die `align-content`-Eigenschaft wirkt sich nur auf Flex-Container aus, die umgewickelt sind, und wird in [Ausrichtung der Elemente in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) besprochen.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis der grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir uns ansehen, [wie diese Spezifikation sich zu anderen Teilen von CSS verhält](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
