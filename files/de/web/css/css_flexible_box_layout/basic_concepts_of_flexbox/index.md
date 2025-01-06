---
title: Grundkonzepte des Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: a69d189ed3302d30b8d2e37b7f148848c01f33e1
---

{{CSSRef}}

Das Modul [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (meistens als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Raum zwischen Elementen und beinhaltet zahlreiche Ausrichtungsfunktionen. Dieser Artikel gibt einen Überblick über die Hauptfunktionen der Flexbox, die wir in den restlichen Anleitungen genauer untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, beziehen wir uns auf die Tatsache, dass Flexbox das Layout jeweils in einer Dimension behandelt – entweder als Zeile oder als Spalte. Dies steht im Gegensatz zum zweidimensionalen Modell des [CSS Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout), das Spalten und Zeilen zusammen steuert.

## Die beiden Achsen der Flexbox

Bei der Arbeit mit Flexbox müssen Sie in Bezug auf zwei Achsen denken – die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}}-Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher lohnt es sich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Sollten Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse in der **Inlinerichtung** entlang der Zeile.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse in der Inlinerichtung entlang der Zeile.](basics1.svg)

Bei der Wahl von `column` oder `column-reverse` verläuft Ihre Hauptachse in der **Blockrichtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Blockrichtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Daher verläuft bei `flex-direction` (Hauptachse) als `row` oder `row-reverse` die Querachse in den Spalten nach unten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Blockrichtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inlinerichtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiterer wichtiger Bereich des Verständnisses ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox geht nicht einfach davon aus, dass alle Textzeilen links oben in einem Dokument beginnen und sich nach rechts erstrecken, wobei neue Zeilen nacheinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; jedoch sollte die folgende Beschreibung helfen zu erklären, warum wir nicht über links und rechts oder oben und unten sprechen, wenn wir die Richtung beschreiben, in der unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich in Englisch arbeite, dann befindet sich die Startkante der Hauptachse links, die Endkante rechts.

![Beim Arbeiten in Englisch befindet sich die Startkante links.](basics5.svg)

Würde ich in Arabisch arbeiten, dann wäre die Startkante meiner Hauptachse rechts und die Endkante links.

![Die Startkante in einer RTL-Sprache befindet sich rechts.](basics6.svg)

In beiden Fällen ist die Startkante der Querachse am oberen Rand des Flex-Containers und die Endkante am unteren Rand, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird das Denken in Bezug auf Anfang und Ende anstelle von links und rechts zur natürlichen Gewohnheit und wird Ihnen nützlich sein, wenn Sie mit anderen Layout-Methoden wie dem CSS Grid-Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox angeordnet ist, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}}-Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit kontrollieren, ob der Container selbst in einem Inline- oder Block-Formatierungs-Kontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Blockebene-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers wie folgt verhält:

- Elemente werden in einer Zeile angezeigt (der Standardwert der {{cssxref("flex-direction")}}-Eigenschaft ist `row`).
- Die Elemente beginnen an der Startkante der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptrichtung aus, können jedoch schrumpfen (der Standardwert der {{cssxref("flex-grow")}}-Eigenschaft eines Flex-Elements ist `0`, und der Standardwert der {{cssxref("flex-shrink")}}-Eigenschaft ist `1`).
- Die Elemente dehnen sich, um die Größe der Querachse zu füllen (der Standardwert der {{cssxref("align-items")}}-Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}}-Eigenschaft eines Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall gleich der {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus ist und der {{cssxref("height")}} im vertikalen Schreibmodus. Wenn die entsprechende `width`/`height` auch auf `auto` gesetzt ist, wird stattdessen der `flex-basis`-Wert `content` verwendet.
- Alle Elemente befinden sich in einer einzigen Zeile (der Standardwert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`), die ihren Container überlaufen, wenn ihre kombinierte `width`/`height` die `width`/`height` des enthaltenen Elements überschreitet.

Das Ergebnis ist, dass sich alle Ihre Elemente in einer Zeile anordnen und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umbrochen, sondern überlaufen. Wenn einige Elemente höher als andere sind, dehnen sich alle Elemente entlang der gesamten Länge der Querachse.

Sie können im Live-Beispiel unten sehen, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das anfängliche Verhalten der Flexbox auszuprobieren:

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

Das Hinzufügen der {{cssxref("flex-direction")}}-Eigenschaft zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Wenn `flex-direction: row-reverse` festgelegt ist, werden die Elemente weiterhin in einer Zeile angezeigt, jedoch werden die Anfangs- und Endlinien umgekehrt.

Wenn wir `flex-direction` auf `column` ändern, schaltet sich die Hauptachse um, und unsere Elemente werden jetzt in einer Spalte angezeigt. Bei `column-reverse` werden die Anfangs- und Endlinien erneut umgekehrt.

Das Live-Beispiel unten hat `flex-direction` auf `row-reverse` gesetzt. Probieren Sie die anderen Werte – `row`, `column` und `column-reverse` – aus, um zu sehen, was mit dem Inhalt passiert.

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

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg zu umwickeln. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Raumverteilung erfolgt über jede Zeile, ohne Bezug auf die vorherige oder nachfolgende Zeile.

Um das Umbruchverhalten zu erzwingen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie auf eine andere Zeile umgebrochen. Das Live-Beispiel unten enthält Elemente, die eine Breite erhalten haben. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, umwickeln sich die Elemente über mehrere Zeilen. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, schrumpfen sie, um in den Container zu passen. Sie schrumpfen, weil sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, der es den Elementen erlaubt, zu schrumpfen. Die Verwendung von `nowrap` würde ein [Überlaufen](/de/docs/Learn/CSS/Building_blocks/Overflowing_content) verursachen, wenn die Elemente nicht schrumpfen könnten oder nicht klein genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umwickeln von Flex-Elementen im Leitfaden [Meistern des Umwickelns von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Der flex-flow-Kurzschrift

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}}-Kurzschrift kombinieren.

Im Live-Beispiel unten können Sie den ersten Wert in einen der zulässigen Werte für `flex-direction` ändern - `row`, `row-reverse`, `column` oder `column-reverse` - und auch den zweiten in `wrap` und `nowrap`.

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

Um die Inline-Größe jedes Flex-Elements zu steuern, zielen wir direkt mit drei Eigenschaften auf sie ab:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden diese Eigenschaften unten kurz ansehen, aber wenn Sie umfassendere Informationen möchten, schauen Sie sich den Leitfaden [Steuerung von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) an.

Bevor wir die Bedeutung dieser Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raums** berücksichtigen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist die Art und Weise zu ändern, wie verfügbarer Raum zwischen unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn es darum geht, Elemente auszurichten.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann ist der Raum, den wir benötigen, um unsere Elemente anzuordnen, 300 Pixel. Dies lässt 200 Pixel verfügbaren Raum. Wenn wir die Anfangswerte nicht ändern, dann platziert Flexbox diesen Raum nach dem letzten Element.

![Dieser Flex-Container hat verfügbaren Raum, nachdem die Elemente angeordnet wurden.](basics7.svg)

Wenn wir stattdessen möchten, dass sich die Elemente ausdehnen und den Raum füllen, müssen wir eine Methode haben, den übrig gebliebenen Raum zwischen den Elementen zu verteilen. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, wie dieser verfügbare Raum zwischen den einzelnen Flex-Elementen verteilt werden soll.

### Die flex-basis-Eigenschaft

Die `flex-basis` ist das, was die Größe dieses Elements in Bezug auf den Raum definiert, den es als verfügbar lässt. Der Anfangswert dieser Eigenschaft ist `auto` – in diesem Fall sucht der Browser, ob das Element eine Größe hat. In dem obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als Flex-Basis verwendet. Deshalb, wenn wir einfach `display: flex` auf das übergeordnete Element setzen, um Flex-Elemente zu erstellen, bewegen sich die Elemente alle in eine Zeile und nehmen nur so viel Platz ein, wie sie benötigen, um ihre Inhalte anzuzeigen.

### Die flex-grow-Eigenschaft

Mit der `flex-grow`-Eigenschaft, die auf eine positive ganze Zahl gesetzt ist, kann sich das Flex-Element entlang der Hauptachse von seiner `flex-basis` aus ausdehnen, wenn verfügbarer Raum vorhanden ist. Ob sich das Element ausdehnt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen, oder nur einen Teil des verfügbaren Raums hängt davon ab, ob die anderen Elemente auch wachsen dürfen und welchen Wert ihre `flex-grow`-Eigenschaften haben.

Jedes Element mit einem positiven Wert nimmt einen Teil des verfügbaren Raums basierend auf seinem `flex-grow`-Wert ein. Wenn wir all unseren Elementen im obigen Beispiel einen `flex-grow`-Wert von 1 geben würden, dann würde der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen aufgeteilt und sie würden sich entlang der Hauptachse ausdehnen, um den Container auszufüllen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element zugewiesen (100px von 200px im Fall des obigen Beispiels) und je 1 Teil für die anderen beiden (jeweils 50px von den 200px insgesamt).

### Die flex-shrink-Eigenschaft

Wo die `flex-grow`-Eigenschaft mit dem Hinzufügen von Raum in der Hauptachse umgeht, steuert die `flex-shrink`-Eigenschaft, wie dieser weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` auf eine positive ganze Zahl gesetzt ist, dann kann das Element kleiner als die `flex-basis` werden. Wie bei `flex-grow`, können unterschiedliche Werte zugewiesen werden, um ein Element schneller als andere zu schrumpfen zu lassen — ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird bei der Berechnung der tatsächlichen Schrumpfung berücksichtigt, was bedeutet, dass `flex-shrink` potenziell weniger konsistent im Verhalten erscheint als `flex-grow`. Wir werden uns daher in dem Artikel [Steuerung von Verhältnissen von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) genauer ansehen, wie dieser Algorithmus funktioniert.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Typischerweise, wenn wir all unsere Elemente mit `flex: 1 1 200px` gesetzt hätten und dann wollten, dass ein Element doppelt so schnell wächst, würden wir dieses Element zu `flex: 2 1 200px` festsetzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie wollten.

### Kürzelwerte für die Flex-Eigenschaften

Sie werden die `flex-grow`-, `flex-shrink`- und `flex-basis`-Eigenschaften selten einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}}-Kurzschrift kombiniert. Das `flex`-Kürzel ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten ermöglicht es Ihnen, die verschiedenen Werte des Flex-Kürzels auszuprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Wenn Sie diesem einen positiven Wert geben, bedeutet dies, dass sich das Element ausdehnen kann. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse überlappen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als ihren Basiswert verwenden, um daraus zu wachsen und zu schrumpfen.

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

Es gibt auch einige vordefinierte Kurzwertwerte, die die meisten Anwendungsfälle abdecken. Sie werden oft in Tutorials verwendet, und in vielen Fällen sind dies alle, die Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial`-Wert ist ein [CSS-weite Wert](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values), der den Anfangswert für eine Eigenschaft darstellt. Das Setzen von `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langform-Eigenschaften zurück, was gleichbedeutend mit `flex: 0 1 auto` ist. Der Anfangswert von `flex-grow` ist `0`, also werden Elemente nicht größer als ihre `flex-basis`-Größe wachsen. Der Anfangswert von `flex-shrink` ist `1`, also können Elemente schrumpfen, wenn sie müssen, anstatt zu überlaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder die festgelegte Größe des Elements in der Hauptrichtung oder sie erhalten ihre Größe von der Inhaltgröße.

Verwendung von `flex: auto` ist das gleiche wie die Verwendung von `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass sich die Elemente ausdehnen und den Container füllen und bei Bedarf schrumpfen können.

Die Verwendung von `flex: none` erzeugt vollständig unflexible Flex-Elemente. Es ist so, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können sich weder ausdehnen noch schrumpfen und werden mit einer `flex-basis` von `auto` im Flexbox-Layout angeordnet.

Das in Tutorials häufig gesehene Kürzel ist `flex: 1` oder `flex: 2` und so weiter. Dies ist dasselbe wie `flex: 1 1 0` oder `flex: 2 1 0` und so weiter zu schreiben. Die Elemente können wachsen und schrumpfen von einer `flex-basis` von `0`.

Versuchen Sie diese Kürzelwerte im Live-Beispiel unten.

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

## Ausrichtung, Rechtfertigung und Verteilung von Freiraum zwischen Elementen

Ein Hauptmerkmal der Flexbox ist die Fähigkeit, Elemente auf der Haupt- und Querachse auszurichten und zu rechtfertigen sowie den Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container und nicht auf die Elemente selbst gesetzt werden.

### align-items

Die {{cssxref("align-items")}}-Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum Flex-Elemente standardmäßig auf die Höhe des Flex-Containers gestreckt werden (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann vom höchsten Element im Container oder der auf dem Flex-Container selbst festgelegten Größe kommen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end`, oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Probieren Sie dies im Live-Beispiel aus – ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente innerhalb des Containers bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf folgende einstellen:

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

Die `align-items` wird auf den Flex-Container gesetzt und beeinflusst alle Flex-Elemente. Wenn Sie ein Flex-Element anders als die anderen ausrichten möchten, können Sie die {{cssxref("align-self")}} auf das Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}}-Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, in die Richtung, in der `flex-direction` den Fluss festgelegt hat. Der Anfangswert ist `flex-start`, was die Elemente an der Startkante des Containers ausrichten wird, aber Sie könnten den Wert auch auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum zu nehmen, nachdem die Elemente angeordnet wurden, und diesen gleichmäßig zwischen den Elementen zu verteilen, sodass es einen gleichmäßigen Raum zwischen jedem Element gibt. Um auf der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements einen gleichen Raum zu verursachen, verwenden Sie den Wert `space-around`. Bei `space-around` haben die Elemente an beiden Enden einen halben Raumbereich. Oder, um Elemente zu verursachen, die gleichen Raum um sich herum zu haben, verwenden Sie den Wert `space-evenly`. Bei `space-evenly` haben die Elemente an beiden Enden einen vollen Raumbereich.

Probieren Sie die folgenden Werte für `justify-content` im Live-Beispiel aus:

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

Der Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften ausführlicher, um ein besseres Verständnis dafür zu haben, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items)-Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt wird, richtet sie die Ausrichtung ein, jedoch nicht die Rechtfertigung, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine weitere Kurzschreibweise, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}}- und `justify-content`-Eigenschaften definiert. Die `align-content`-Eigenschaft betrifft nur Flex-Container, die umschließen, und wird in [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) besprochen.

## Nächste Schritte

Nachdem Sie diesen Artikel gelesen haben, sollten Sie ein Verständnis für die grundlegenden Funktionen der Flexbox haben. Im nächsten Artikel werden wir uns anschauen, [wie diese Spezifikation mit anderen Teilen von CSS zusammenhängt](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
