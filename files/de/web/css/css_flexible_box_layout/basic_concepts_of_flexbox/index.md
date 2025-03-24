---
title: Grundkonzepte von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: c4c42a1573a65a808f085999a4d8d97199e142d1
---

{{CSSRef}}

Das [Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul (meistens als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Raum zwischen Elementen und bietet zahlreiche Ausrichtungsfunktionen. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die in den weiteren Artikeln dieser Leitfaden detaillierter behandelt werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox das Layout jeweils nur in einer Dimension behandelt – entweder als Zeile oder als Spalte. Dies steht im Gegensatz zu dem zweidimensionalen Modell des [CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout), das Spalten und Zeilen zusammen steuert.

## Die beiden Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Bezug auf zwei Achsen denken – die _Hauptachse_ und die _Kreuzachse_. Die [Hauptachse](#die_hauptachse) wird durch die Eigenschaft {{cssxref("flex-direction")}} definiert, die [Kreuzachse](#die_kreuzachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher lohnt es sich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wählen Sie `row` oder `row-reverse`, verläuft Ihre Hauptachse entlang der Zeile in die **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Zeile in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse` und Ihre Hauptachse verläuft in der **Block-Richtung**, von oben nach unten.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Kreuzachse

Die {{Glossary("cross_axis", "Kreuzachse")}} verläuft senkrecht zur Hauptachse. Wenn also Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Kreuzachse entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Kreuzachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Kreuzachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Kreuzachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiterer wichtiger Bereich des Verständnisses ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox geht nicht einfach davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und zur rechten Seite verlaufen, wobei neue Zeilen untereinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; jedoch sollte die folgende Beschreibung helfen zu erklären, warum wir nicht über links und rechts sowie oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex-Elemente fließen.

Wenn `flex-direction` `row` ist und ich in Englisch arbeite, dann wird die Startkante der Hauptachse auf der linken Seite sein, die Endkante rechts.

![Bei Arbeiten in Englisch befindet sich die Startkante links.](basics5.svg)

Würde ich in Arabisch arbeiten, dann wäre die Startkante meiner Hauptachse rechts und die Endkante links.

![Die Startkante in einer RTL-Sprache befindet sich rechts.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Kreuzachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einiger Zeit wird es natürlich, über Start und Ende statt links und rechts nachzudenken, was Ihnen nützlich sein wird, wenn Sie mit anderen Layout-Methoden wie dem CSS Grid Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox gestaltet wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die Eigenschaft {{cssxref("display")}} des Bereichs auf `flex`. Dadurch werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst inline oder in einem Blockformatierungs-Kontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS werden einige Anfangswerte definiert, sodass der Inhalt eines neuen Flex-Containers auf folgende Weise reagiert:

- Elemente werden in einer Zeile angezeigt (der Standardwert der Eigenschaft {{cssxref("flex-direction")}} ist `row`).
- Die Elemente beginnen an der Startkante der Hauptachse.
- Die Elemente dehnen sich in der Hauptdimension nicht aus, können aber schrumpfen (der Standardwert der Eigenschaft {{cssxref("flex-grow")}} eines Flex-Elements ist `0` und der Standardwert der Eigenschaft {{cssxref("flex-shrink")}} ist `1`).
- Die Elemente werden sich strecken, um die Größe der Kreuzachse auszufüllen (der Standardwert der Eigenschaft {{cssxref("align-items")}} ist `stretch`).
- Der Standardwert der Eigenschaft {{cssxref("flex-basis")}} eines Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall der Flex-Element-{{cssxref("width")}} im horizontalen Schreibmodus und der Flex-Element-{{cssxref("height")}} im vertikalen Schreibmodus entspricht. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `flex-basis`-Wert `content` verwendet.
- Alle Elemente werden in einer einzigen Zeile sein (der Standardwert der Eigenschaft {{cssxref("flex-wrap")}} ist `nowrap`), sodass sie über ihren Container hinauslaufen, wenn ihre kombinierte `width`/`height` die `width`/`height` des enthaltenen Elements überschreitet.

Das Ergebnis ist, dass sich alle Ihre Elemente in einer Zeile anordnen und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umbrechen, sondern stattdessen überlaufen. Wenn einige Elemente höher sind als andere, werden sich alle Elemente entlang der vollen Länge der Kreuzachse strecken.

Sie können im untenstehenden Live-Beispiel sehen, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

### Ändern der flex-direction

Das Hinzufügen der Eigenschaft {{cssxref("flex-direction")}} zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Wenn `flex-direction: row-reverse` gesetzt ist, werden die Elemente weiterhin in einer Zeile angezeigt, jedoch werden die Anfangs- und Endlinien umgeschaltet.

Wenn wir `flex-direction` in `column` ändern, wechselt die Hauptachse und unsere Elemente werden jetzt in einer Spalte angezeigt. Bei `column-reverse` werden die Anfangs- und Endlinien erneut umgeschaltet.

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

Während Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg umbrechen zu lassen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jegliche Raumverteilung wird über jede Zeile hinweg erfolgen, ohne Bezug auf die vorhergehende oder nachfolgende Zeile.

Um ein Umbruchverhalten zu erzeugen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie auf eine andere Zeile umbrochen. Das Live-Beispiel unten enthält Elemente, denen eine `width` gegeben wurde. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, wird der Inhalt umgebrochen, um mehrere Zeilen zu füllen. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, schrumpfen Ihre Elemente, um in den Container zu passen. Sie schrumpfen, weil sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, die es den Elementen ermöglicht zu schrumpfen. Die Verwendung von `nowrap` würde einen [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht schrumpfen könnten oder nicht klein genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umbrechen von Flex-Elementen im Leitfaden [Meisterhaftes Umbrechen von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Die flex-flow Kurzschreibweise

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Kurzschreibweise kombinieren.

Im unteren Live-Beispiel versuchen Sie, den ersten Wert in einen der zulässigen Werte für `flex-direction` zu ändern – `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie den zweiten Wert zu `wrap` und `nowrap`.

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

Um die Inline-Größe jedes Flex-Elements zu kontrollieren, zielen wir sie direkt über drei Eigenschaften an:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werfen einen kurzen Blick auf diese Eigenschaften unten, aber wenn Sie umfassendere Informationen wünschen, werfen Sie einen Blick auf den Leitfaden [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir diese Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raums** berücksichtigen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist, die Art und Weise zu ändern, wie verfügbarer Raum unter unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir die Ausrichtung von Elementen betrachten.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, liegt der benötigte Raum zur Anordnung unserer Elemente bei 300 Pixel. Dies lässt 200 Pixel an verfügbarem Raum. Wenn wir die Anfangswerte nicht ändern, legt Flexbox diesen Raum hinter das letzte Element.

![Dieser Flex-Container hat verfügbaren Raum nach der Anordnung der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann müssen wir eine Methode haben, den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, wie dieser verfügbare Raum unter den Geschwister-Flex-Elementen verteilt werden sollte.

### Die flex-basis Eigenschaft

Das `flex-basis` definiert die Größe jenes Elements in Bezug auf den Raum, den es als verfügbaren Raum übrig lässt. Der Anfangswert dieser Eigenschaft ist `auto` – in diesem Fall prüft der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixel. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als Flex-Basis verwendet. Dies ist der Grund, warum alle Flex-Elemente sich in einer Reihe bewegen und nur so viel Platz einnehmen, wie sie benötigen, um ihre Inhalte darzustellen, wenn wir einfach `display: flex` auf das übergeordnete Element deklarieren, um Flex-Elemente zu erstellen.

### Die flex-grow Eigenschaft

Mit der Eigenschaft `flex-grow`, die auf einen positiven ganzzahligen Wert gesetzt ist, kann sich das Flex-Element entlang der Hauptachse von seiner `flex-basis` aus vermehren, wenn verfügbarer Raum vorhanden ist. Ob das Element den gesamten verfügbaren Raum auf dieser Achse ausfüllt oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente ebenfalls wachsen dürfen und vom Wert ihrer `flex-grow`-Eigenschaften.

Jedes Element mit einem positiven Wert nimmt einen Teil des verfügbaren Raums basierend auf ihrem `flex-grow`-Wert ein. Wenn wir all unseren Elementen im obigen Beispiel einen `flex-grow`-Wert von 1 geben, wird der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen geteilt, und sie würden sich entlang der Hauptachse strecken, um den Container auszufüllen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 und den anderen Elementen jeweils einen Wert von 1 geben, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element zugewiesen (100px von 200px im Falle des obigen Beispiels), und 1 Teil den anderen beiden (jeweils 50px von insgesamt 200px).

### Die flex-shrink Eigenschaft

Während die `flex-grow`-Eigenschaft die Hinzufügung von Raum in der Hauptachse behandelt, beeinflusst die `flex-shrink`-Eigenschaft, wie Raum entnommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen und `flex-shrink` auf einen positiven ganzzahligen Wert gesetzt ist, kann das Element kleiner als die `flex-basis` werden. Wie bei der `flex-grow`-Eigenschaft können unterschiedliche Werte zugewiesen werden, um ein Element schneller schrumpfen zu lassen als andere – das Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird bei der Berechnung des tatsächlichen Schrumpfungsbetrags berücksichtigt, was bedeutet, dass `flex-shrink` das Potenzial hat, weniger konsistent als `flex-grow` im Verhalten zu erscheinen. Daher werden wir in dem Artikel [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) einen detaillierteren Blick auf diesen Algorithmus werfen.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Anteile. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` setzen würden und dann wollten, dass ein Element in doppelter Rate wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie wollten.

### Kurzschreibwerte für die flex-Eigenschaften

Sie werden sehr selten die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis` einzeln verwenden; stattdessen werden sie in der {{cssxref("flex")}}-Kurzschreibweise kombiniert. Die `flex`-Kurzschreibweise ermöglicht es, die drei Werte in dieser Reihenfolge zu setzen – `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten erlaubt es Ihnen, die verschiedenen Werte der flex-Kurzschreibweise zu testen; denken Sie daran, dass der erste Wert `flex-grow` ist. Ein positiver Wert bedeutet, dass das Element wachsen kann. Der zweite ist `flex-shrink` – mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse übersteigen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als ihre Basis verwenden, von der aus sie wachsen und schrumpfen.

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

Es gibt auch einige vordefinierte Kurzschreibwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese oft in Tutorials sehen, und in vielen Fällen sind dies die einzigen, die Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der Wert `initial` ist ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords), das den Initialwert einer Eigenschaft darstellt. `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langversionseigenschaften zurück, was dem gleichen entspricht wie `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, sodass sich die Elemente nicht größer als ihre `flex-basis`-Größe ausdehnen. Der Anfangswert von `flex-shrink` ist `1`, sodass die Elemente schrumpfen können, wenn sie müssen, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente werden entweder eine auf dem Element festgelegte Größe in der Hauptdimension verwenden oder ihre Größe aus der Inhaltsgröße beziehen.

Die Verwendung von `flex: auto` ist gleichbedeutend mit `flex: 1 1 auto`; dies ähnelt `flex: initial`, mit der Ausnahme, dass sich die Elemente vergrößern und den Container ausfüllen können und auch schrumpfen, falls erforderlich.

Die Verwendung von `flex: none` erzeugt vollständig unflexible Flex-Elemente. Es ist so, als hätten Sie `flex: 0 0 auto` geschrieben. Die Elemente können nicht wachsen oder schrumpfen und werden mit Flexbox mit einer `flex-basis` von `auto` angeordnet.

Die Kurzschreibweise, die Sie häufig in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies ist das gleiche wie `flex: 1 1 0` oder `flex: 2 1 0` und so weiter zu schreiben. Die Elemente haben eine Mindestgröße durch `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink`-Wert von `1` redundant, da die Elemente mit Mindestgröße beginnen – sie werden nicht mit einer Größe versehen, die sie über den Flex-Container hinauslaufen lassen könnte.

Probieren Sie diese Kurzschreibwerte im Live-Beispiel unten aus.

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

Ein Schlüsselfeature von Flexbox ist die Fähigkeit, Elemente auf Haupt- und Kreuzachsen auszurichten und zu rechtfertigen und den Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container gesetzt werden und nicht auf die Elemente selbst.

### align-items

Die Eigenschaft {{cssxref("align-items")}} richtet alle Flex-Elemente auf der Kreuzachse aus.

Der Anfangswert dieser Eigenschaft ist `stretch` und ist der Grund, warum Flex-Elemente standardmäßig auf die Höhe des Flex-Containers gestreckt werden (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der auf den Flex-Container gesetzten Größe stammen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers aufzustellen, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Probieren Sie dies im Live-Beispiel aus – ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente im Container bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf folgende Werte setzen:

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

Die `align-items`-Eigenschaft wird auf den Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders ausrichten möchten als andere, können Sie die Eigenschaft {{cssxref("align-self")}} auf das Flex-Element setzen.

### justify-content

Die Eigenschaft {{cssxref("justify-content")}} wird verwendet, um die Flex-Elemente entlang der Hauptachse auszurichten, in der die `flex-direction` den Fluss festgelegt hat. Der Anfangswert ist `flex-start`, wodurch die Elemente an der Startkante des Containers aufgereiht werden; aber Sie könnten auch den Wert `flex-end` setzen, um sie am Ende aufzustellen, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um allen freien Raum, nachdem die Elemente angeordnet wurden, gleichmäßig zwischen den Elementen zu teilen, sodass es einen gleichen Abstand zwischen jedem Element gibt. Um einen gleichmäßigen Raum auf der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements zu erzeugen, verwenden Sie den Wert `space-around`. Mit `space-around` haben die Elemente einen halben Abstand an beiden Enden. Oder um Elemente mit gleichmäßigem Raum um sie herum zu haben, verwenden Sie den Wert `space-evenly`. Mit `space-evenly` haben die Elemente einen vollen Abstand an beiden Enden.

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

Der Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) erkundet diese Eigenschaften ausführlicher, um ein besseres Verständnis für ihre Funktionsweise zu erhalten. Diese einfachen Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items) Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`. Wenn sie auf einem Flex-Container gesetzt ist, wird sie die Ausrichtung, aber nicht die Rechtfertigung setzen, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine andere Kurzschreibweise, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}} und `justify-content`-Eigenschaften definiert. Die `align-content`-Eigenschaft wirkt sich nur auf Flex-Container aus, die umbrochen werden, und wird in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) behandelt.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis für die grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir uns [anschauen, wie diese Spezifikation mit anderen Teilen von CSS in Beziehung steht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
