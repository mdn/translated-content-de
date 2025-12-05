---
title: Grundkonzepte von Flexbox
short-title: Basic concepts
slug: Web/CSS/Guides/Flexible_box_layout/Basic_concepts
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Das [Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul (meistens als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Platz zwischen Elementen und umfasst zahlreiche Ausrichtungsfähigkeiten. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir in den restlichen Leitfäden genauer untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, sprechen wir darüber, dass Flexbox das Layout in einer Dimension gleichzeitig verarbeitet - entweder als Zeile oder als Spalte. Dies steht im Gegensatz zu dem zweidimensionalen Modell des [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout), das sowohl Spalten als auch Zeilen steuert.

## Die zwei Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Bezug auf zwei Achsen denken - die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}} Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher lohnt es sich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Zeile in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, und Ihre Hauptachse verläuft in der **Block-Richtung**, von oben nach unten.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Querachse durch die Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Reihen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiterer wichtiger Bereich des Verständnisses ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox geht nicht einfach davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und zur rechten Seite laufen, mit neuen Zeilen, die darunter erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values).

Sie können [mehr über den Zusammenhang zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung sollte jedoch erklären, warum wir nicht über links und rechts sowie oben und unten sprechen, wenn wir die Richtung beschreiben, in der unsere Flex-Items fließen.

Wenn die `flex-direction` `row` ist und ich auf Englisch arbeite, befindet sich die Startkante der Hauptachse links, die Endkante rechts.

![Beim Arbeiten auf Englisch befindet sich die Startkante links.](basics5.svg)

Wenn ich in Arabisch arbeiten würde, befände sich die Startkante meiner Hauptachse rechts und die Endkante links.

![Die Startkante in einer RTL-Sprache befindet sich rechts.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es natürlich, über Anfang und Ende anstatt über links und rechts zu denken, was Ihnen nützlich sein wird, wenn Sie mit anderen Layout-Methoden wie CSS Grid Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox layoutet wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}} Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Items**. Sie können explizit steuern, ob der Container selbst im Inline- oder Block-Formatierungskontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass der Inhalt eines neuen Flex-Containers folgendermaßen funktioniert:

- Elemente werden in einer Reihe angezeigt (der Standardwert der {{cssxref("flex-direction")}} Eigenschaft ist `row`).
- Die Elemente beginnen an der Startkante der Hauptachse.
- Die Elemente strecken sich nicht in der Hauptdimension, können aber schrumpfen (der Standardwert der {{cssxref("flex-grow")}} Eigenschaft eines Flex-Items ist `0` und der der {{cssxref("flex-shrink")}} Eigenschaft ist `1`).
- Die Elemente strecken sich, um die Größe der Querachse auszufüllen (der Standardwert der {{cssxref("align-items")}} Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}} Eigenschaft eines Flex-Items ist `auto`. Dies bedeutet, dass es in jedem Fall gleich der {{cssxref("width")}} des Flex-Items im horizontalen Schreibmodus und der {{cssxref("height")}} im vertikalen Schreibmodus ist. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `content` Wert von `flex-basis` verwendet.
- Alle Elemente befinden sich in einer einzigen Zeile (der Standardwert der {{cssxref("flex-wrap")}} Eigenschaft ist `nowrap`), überlaufen ihren Container, wenn ihre kombinierte `width`/`height` die `width`/`height` des umgebenden Elements überschreitet.

Das Ergebnis ist, dass sich Ihre Elemente alle in einer Reihe aufstellen und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn es mehr Elemente gibt, als in den Container passen, werden sie nicht umbrochen, sondern überlaufen. Wenn einige Elemente höher sind als andere, strecken sich alle Elemente über die gesamte Länge der Querachse.

Sie können im lebendigen Beispiel unten sehen, wie das aussieht. Klicken Sie auf "Play", um das Beispiel im MDN-Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das Anfangsverhalten von Flexbox auszuprobieren:

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

Durch Hinzufügen der {{cssxref("flex-direction")}} Eigenschaft zum Flex-Container können wir die Richtung ändern, in der unsere Flex-Items angezeigt werden. Das Setzen von `flex-direction: row-reverse` behält die Anzeige der Elemente in der Zeile bei, jedoch werden die Anfangs- und Endlinien vertauscht.

Wenn wir die `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente werden nun in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Anfangs- und Endlinien werden erneut vertauscht.

Das lebende Beispiel unten hat `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte - `row`, `column` und `column-reverse` - um zu sehen, was mit dem Inhalt passiert.

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

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Items in mehrere Zeilen umzubrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Raumverteilung erfolgt über jede Zeile, ohne Rücksicht auf die vorherigen oder nachfolgenden Zeilen.

Um das Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit einem Wert von `wrap` hinzu. Wenn Ihre Elemente jetzt zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie in eine andere Zeile umgebrochen. Das lebende Beispiel unten enthält Elemente, die eine `width` erhalten haben. Die Gesamtbreite der Elemente ist zu groß für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, werden die Elemente in mehrere Zeilen umgebrochen. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, werden sie schrumpfen, um in den Container zu passen. Sie schrumpfen, weil sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, was es den Elementen erlaubt zu schrumpfen. Die Verwendung von `nowrap` würde ein [Overflow](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht schrumpfen könnten oder nicht klein genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umwickeln von Flex-Items im Leitfaden [Flex-Items umwickeln meistern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items).

## Das flex-flow Shorthand

Sie können die zwei Eigenschaften `flex-direction` und `flex-wrap` in das {{cssxref("flex-flow")}} Shorthand kombinieren.

Im lebenden Beispiel unten, versuchen Sie, den ersten Wert in einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten Wert in `wrap` und `nowrap`.

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

## Eigenschaften, die auf Flex-Items angewendet werden

Um die Inline-Größe jedes Flex-Items zu steuern, zielen wir direkt auf sie ab, indem wir drei Eigenschaften verwenden:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden einen kurzen Blick auf diese Eigenschaften unten werfen, aber wenn Sie umfassendere Informationen wünschen, werfen Sie einen Blick auf den Leitfaden [Verhältnisse von Flex-Items auf der Hauptachse steuern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios).

Bevor wir diese Eigenschaften sinnvoll verwenden können, müssen wir das Konzept des **verfügbaren Raums** berücksichtigen. Wenn wir den Wert dieser Flex-Eigenschaften ändern, ändern wir die Art und Weise, wie der verfügbare Raum unter unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns das Ausrichten von Elementen ansehen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann benötigen wir 300 Pixel Platz, um unsere Elemente anzuordnen. Dies lässt 200 Pixel verfügbaren Raum. Wenn wir die Anfangswerte nicht ändern, legt Flexbox diesen Raum nach dem letzten Element ab.

![Dieser Flex-Container hat verfügbaren Raum nach dem Anordnen der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann müssen wir eine Methode haben, um den übrig gebliebenen Raum zwischen den Elementen zu verteilen. Die `flex` Eigenschaften, die wir den Elementen selbst anwenden, ermöglichen es, wie dieser verfügbare Raum zwischen den untergeordneten Flex-Items verteilt werden sollte.

### Die flex-basis Eigenschaft

`flex-basis` definiert die Größe dieses Elements im Hinblick auf den Raum, den es als verfügbaren Raum hinterlässt. Der Anfangswert dieser Eigenschaft ist `auto` - in diesem Fall prüft der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, dann wird die Größe des Inhalts als flex-basis verwendet. Deshalb, wenn wir einfach `display: flex` auf dem übergeordneten Element deklarieren, um Flex-Items zu erstellen, bewegen sich alle Elemente in eine Zeile und nehmen nur so viel Platz ein, wie sie benötigen, um ihre Inhalte anzuzeigen.

### Die flex-grow Eigenschaft

Wenn die `flex-grow` Eigenschaft auf einen positiven Ganzzahlwert gesetzt ist, kann das Flex-Item entlang der Hauptachse von seinem `flex-basis` aus wachsen, wenn verfügbarer Raum vorhanden ist. Ob das Element sich so weit streckt, dass es den gesamten verfügbaren Raum auf dieser Achse einnimmt, oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob auch die anderen Elemente wachsen dürfen und welchen Wert ihre `flex-grow` Eigenschaften haben.

Jedes Element mit einem positiven Wert nimmt einen Teil des verfügbaren Raums ein, basierend auf ihrem `flex-grow` Wert. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow` Wert von 1 geben würden, dann würde der verfügbarer Raum im Flex-Container gleichmäßig zwischen den Elementen geteilt werden, und sie würden sich ausstrecken, um den Container auf der Hauptachse auszufüllen. Wenn wir unserem ersten Element einen `flex-grow` Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element gegeben (100px von 200px im Beispiel oben) und 1 Teil jeweils den anderen beiden (jeweils 50px von insgesamt 200px).

### Die flex-shrink Eigenschaft

Während die `flex-grow` Eigenschaft den Platz in der Hauptachse hinzufügt, kontrolliert die `flex-shrink` Eigenschaft, wie er weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` auf einen positiven Ganzzahlwert gesetzt ist, dann kann das Element kleiner als die `flex-basis` werden. Wie bei `flex-grow` können unterschiedliche Werte zugeordnet werden, um ein Element dazu zu bringen, schneller zu schrumpfen als andere - ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird berücksichtigt, während der tatsächliche Schrumpfungsbetrag berechnet wird, was bedeutet, dass `flex-shrink` das Potenzial hat, im Verhalten weniger konsistent zu erscheinen als `flex-grow`. Daher werden wir uns dieses Algorithmus in dem Artikel [Verhältnisse der Elemente entlang der Hauptachse steuern](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) genauer ansehen.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Verhältnisse. Normalerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` gesetzt haben und dann wollen, dass ein Element mit doppelter Rate wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Shorthand-Werte für die flex Eigenschaften

Sie werden sehr selten die `flex-grow`, `flex-shrink` und `flex-basis` Eigenschaften einzeln sehen; stattdessen werden sie in das {{cssxref("flex")}} Shorthand kombiniert. Das `flex` Shorthand erlaubt es Ihnen, die drei Werte in dieser Reihenfolge zu setzen - `flex-grow`, `flex-shrink`, `flex-basis`.

Im lebenden Beispiel unten können Sie die verschiedenen Werte des flex Shorthands ausprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Wenn Sie diesem einen positiven Wert geben, kann das Element wachsen. Der zweite ist `flex-shrink` - mit einem positiven Wert können sich die Elemente verkleinern, aber nur, wenn ihre Gesamtwerte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als Basiswert verwenden, um von dort aus zu wachsen und zu schrumpfen.

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

Es gibt auch einige vordefinierte Shorthand-Werte, die die meisten Anwendungsfälle abdecken. Diese werden häufig in Tutorials verwendet, und in vielen Fällen sind dies alle, die Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial` Wert ist ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords), das den Anfangswert für eine Eigenschaft darstellt. Das Setzen von `flex: initial` setzt das Element auf die [Angangswerte](#anfangswerte) der drei Langform-Eigenschaften zurück, was dasselbe ist wie `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, sodass die Elemente nicht größer als ihre `flex-basis` Größe werden. Der Anfangswert von `flex-shrink` ist `1`, sodass die Elemente schrumpfen können, wenn sie es müssen, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Die Elemente verwenden entweder die auf dem Element in der Hauptdimension festgelegte Größe oder erhalten ihre Größe von der Inhaltsgröße.

Die Verwendung von `flex: auto` ist dasselbe wie die Verwendung von `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container ausfüllen sowie schrumpfen können, wenn nötig.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Items. Es ist, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können nicht wachsen oder schrumpfen und werden mithilfe von Flexbox mit einer `flex-basis` von `auto` angeordnet.

Das Shorthand, das Sie in Tutorials oft sehen, ist `flex: 1` oder `flex: 2` usw. Das ist dasselbe, wie `flex: 1 1 0` oder `flex: 2 1 0` usw. zu schreiben. Die Elemente erhalten eine minimale Größe aufgrund von `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink` Wert von `1` redundant, da die Elemente mit minimaler Größe beginnen - sie erhalten keine Größe, die sie dazu bringen könnte, den Flex-Container zu überlaufen.

Versuchen Sie diese Shorthand-Werte im lebenden Beispiel unten.

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

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf den Haupt- und Querachsen auszurichten und zu rechtfertigen sowie Raum zwischen Flex-Items zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container gesetzt werden, nicht auf die Elemente selbst.

### align-items

Die {{cssxref("align-items")}} Eigenschaft richtet alle Flex-Items auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum Flex-Items standardmäßig bis zur Höhe des Flex-Containers gestreckt werden (oder zur Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann vom höchsten Element im Container oder von der auf den Flex-Container selbst gesetzten Größe stammen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente an der Startseite des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Versuchen Sie dies im lebenden Beispiel - ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente im Container bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf setzen:

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

Die `align-items` wird auf den Flex-Container gesetzt und betrifft alle Flex-Items. Wenn Sie ein Flex-Item anders als die anderen ausrichten möchten, können Sie {{cssxref("align-self")}} auf dem Flex-Item setzen.

### justify-content

Die {{cssxref("justify-content")}} Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, die Richtung, in die `flex-direction` den Fluss gesetzt hat. Der Anfangswert ist `flex-start`, was die Elemente an der startenden Kante des Containers ausrichten wird, aber Sie könnten den Wert auch auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte zu positionieren.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Platz zu nehmen, nachdem die Elemente angeordnet wurden, und ihn gleichmäßig zwischen den Elementen zu teilen, sodass ein gleicher Abstand zwischen jedem Element entsteht. Um einen gleichen Abstand auf der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements zu erzeugen, verwenden Sie den Wert `space-around`. Mit `space-around` haben die Elemente einen halben Raum an jedem Ende. Oder um Elemente mit gleichmäßigem Raum um sie herum zu haben, verwenden Sie den Wert `space-evenly`. Mit `space-evenly` haben die Elemente einen ganzen Raum an jedem Ende.

Versuchen Sie die folgenden Werte von `justify-content` im lebenden Beispiel:

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

Der Artikel [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) untersucht diese Eigenschaften eingehender, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch für die meisten Anwendungsfälle nützlich.

### justify-items

Die {{cssxref("justify-items")}} Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die {{cssxref("place-items")}} Eigenschaft ist eine Shorthand-Eigenschaft für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt ist, wird sie die Ausrichtung, aber nicht die Rechtfertigung festlegen, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine andere Shorthand-Eigenschaft, {{cssxref("place-content")}}, die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft beeinflusst nur Flex-Container, die umgebrochen werden, und wird in [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) besprochen.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis für die grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir uns ansehen, [wie diese Spezifikation sich auf andere Teile von CSS bezieht](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods).
