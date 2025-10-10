---
title: Grundkonzepte von Flexbox
short-title: Basic concepts
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Das [Flexible Box Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul (üblicherweise als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Raum zwischen Elementen und umfasst zahlreiche Ausrichtungsfunktionen. Dieser Artikel bietet einen Überblick über die Hauptmerkmale von Flexbox, die wir in den weiteren Leitfäden ausführlicher erkunden werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox sich jeweils mit einem Layout in einer Dimension befasst - entweder als Reihe oder als Spalte. Dies kann dem zweidimensionalen Modell von [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) gegenübergestellt werden, das Spalten und Reihen zusammen steuert.

## Die zwei Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Bezug auf zwei Achsen denken – die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}}-Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher ist es sinnvoll, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` auswählen, verläuft Ihre Hauptachse entlang der Reihe in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Reihe in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in der **Block-Richtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Wenn also Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Querachse entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Reihen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiteres wichtiges Verständnisgebiet ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox nimmt nicht einfach an, dass alle Textzeilen oben links in einem Dokument beginnen und sich zur rechten Seite hin erstrecken, wobei neue Zeilen unter der jeweils vorherigen erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; jedoch sollte die folgende Beschreibung helfen zu erklären, warum wir nicht von links und rechts sowie oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich auf Englisch arbeite, dann wird die Anfangskante der Hauptachse links sein und die Endkante rechts.

![In englischer Sprache ist die Anfangskante links.](basics5.svg)

Wenn ich auf Arabisch arbeiten würde, wäre die Anfangskante meiner Hauptachse rechts und die Endkante links.

![Die Anfangskante in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen befindet sich die Anfangskante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es selbstverständlich, über Anfang und Ende statt über links und rechts nachzudenken, und es wird Ihnen nützlich sein, wenn Sie mit anderen Layout-Methoden wie CSS Grid Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox gestaltet ist, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}}-Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst im Inline- oder im Blockformat angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS werden einige Anfangswerte definiert, sodass der Inhalt eines neuen Flex-Containers auf folgende Weise funktioniert:

- Elemente werden in einer Reihe angezeigt (der Standardwert der {{cssxref("flex-direction")}}-Eigenschaft ist `row`).
- Die Elemente beginnen von der Anfangskante der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptdimension, sondern können schrumpfen (der Standardwert der {{cssxref("flex-grow")}}-Eigenschaft eines Flex-Elements ist `0` und der Standardwert der {{cssxref("flex-shrink")}}-Eigenschaft ist `1`).
- Die Elemente dehnen sich, um die Größe der Querachse auszufüllen (der Standardwert der {{cssxref("align-items")}}-Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}}-Eigenschaft eines Flex-Elements ist `auto`. Das bedeutet, dass es in jedem Fall dem Flex-Element {{cssxref("width")}} im horizontalen Schreibmodus und dem Flex-Element {{cssxref("height")}} im vertikalen Schreibmodus entspricht. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird der `flex-basis`-Wert `content` stattdessen verwendet.
- Alle Elemente befinden sich in einer einzigen Reihe (der Standardwert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`), wobei sie ihren Container überlaufen, wenn ihre kombinierte `width`/`height` die `width`/`height` des enthaltenen Elements überschreitet.

Das Ergebnis davon ist, dass sich Ihre Elemente alle in einer Reihe ausrichten und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umbrochen, sondern überlaufen. Wenn einige Elemente höher sind als andere, dehnen sich alle Elemente über die gesamte Länge der Querachse.

Sie können im unten stehenden Live-Beispiel sehen, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox zu testen:

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

### Ändern der Flex-Direction

Durch Hinzufügen der {{cssxref("flex-direction")}}-Eigenschaft zum Flex-Container können wir die Richtung ändern, in der unsere Flex-Elemente angezeigt werden. Das Setzen von `flex-direction: row-reverse` wird die Elemente weiterhin entlang der Reihe anzeigen, jedoch werden die Anfangs- und Endlinien vertauscht.

Wenn wir `flex-direction` in `column` ändern, wechselt die Hauptachse und unsere Elemente werden nun in einer Spalte angezeigt. Setzen Sie `column-reverse`, und die Anfangs- und Endlinien werden erneut vertauscht.

Das folgende Live-Beispiel hat `flex-direction` auf `row-reverse` eingestellt. Probieren Sie die anderen Werte aus — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

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

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg zu umschließen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Raumverteilung erfolgt über jede Zeile hinweg, ohne Bezug auf die vorherige oder nachfolgende Zeile.

Um ein Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Jetzt, wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie in eine andere Zeile umgebrochen. Das Live-Beispiel unten enthält Elemente, denen eine `width` zugewiesen wurde. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, umschließen sich die Elemente über mehrere Zeilen hinweg. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, schrumpfen sie, um in den Container zu passen. Sie schrumpfen, weil sie die initialen Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, die es den Elementen erlaubt zu schrumpfen. Die Verwendung von `nowrap` würde einen [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht in der Lage wären zu schrumpfen oder nicht klein genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umwickeln von Flex-Elementen im Leitfaden [Beherrschen des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Die flex-flow Shorthand

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}}-Shorthand kombinieren.

Im untenstehenden Live-Beispiel, versuchen Sie den ersten Wert zu ändern in einen der zulässigen Werte für `flex-direction` - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten zu `wrap` und `nowrap`.

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

## Eigenschaften auf Flex-Elemente angewendet

Um die Inline-Größe jedes Flex-Elementes zu steuern, zielen wir direkt auf sie ab mit drei Eigenschaften:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden diese Eigenschaften kurz betrachten, aber wenn Sie umfassendere Informationen wünschen, schauen Sie sich den Leitfaden [Kontrolle der Verhältnisse von Flex-Elementen auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) an.

Bevor wir diese Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raumes** berücksichtigen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist die Art und Weise zu ändern, wie verfügbarer Raum unter unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir zur Ausrichtung von Elementen übergehen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, benötigen wir 300 Pixel, um unsere Elemente anzuordnen. Dies lässt 200 Pixel verfügbaren Raum. Wenn wir die Anfangswerte nicht ändern, platziert Flexbox diesen Raum nach dem letzten Element.

![Dieser Flex-Container hat verfügbaren Raum nach dem Anordnen der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann benötigen wir eine Methode, um den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, zu diktieren, wie dieser verfügbare Raum unter den benachbarten Flex-Elementen verteilt werden sollte.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert die Größe dieses Elements in Bezug auf den Raum, den es als verfügbaren Raum hinterlässt. Der Anfangswert dieser Eigenschaft ist `auto` - in diesem Fall sieht der Browser nach, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als Flex-Basis verwendet. Deshalb, wenn wir nur `display: flex` auf das Elternteil deklarieren, um Flex-Elemente zu erstellen, bewegen sich die Elemente in eine Reihe und nehmen nur so viel Platz ein, wie sie benötigen, um ihre Inhalte anzuzeigen.

### Die flex-grow Eigenschaft

Mit der `flex-grow`-Eigenschaft auf einen positiven Integer gesetzt, kann sich das Flex-Element, wenn verfügbarer Raum vorhanden ist, entlang der Hauptachse von seiner `flex-basis` aus vergrößern. Ob das Element sich ausdehnt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente auch wachsen dürfen und vom Wert ihrer `flex-grow`-Eigenschaften.

Jedes Element mit einem positiven Wert nimmt einen Teil des verfügbaren Raumes basierend auf ihrem `flex-grow`-Wert ein. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow`-Wert von 1 geben würden, würde der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen geteilt und sie würden sich dehnen, um den Container auf der Hauptachse zu füllen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raumes werden dem ersten Element gegeben (100px von 200px im obigen Beispiel) und 1 Teil jeweils den anderen beiden (50px jeweils von den insgesamt 200px).

### Die flex-shrink Eigenschaft

Wo die `flex-grow`-Eigenschaft sich mit dem Hinzufügen von Raum auf der Hauptachse beschäftigt, kontrolliert die `flex-shrink`-Eigenschaft, wie er weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` auf einen positiven Integer gesetzt ist, dann kann das Element kleiner werden als die `flex-basis`. Wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um ein Element schneller als andere schrumpfen zu lassen — ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}}-Größe schrumpfen. Diese Mindestgröße wird berücksichtigt, während die tatsächliche Menge der Schrumpfung ermittelt wird, was bedeutet, dass sich `flex-shrink` potenziell weniger konsistent als `flex-grow` verhalten kann. Daher werden wir uns den Artikel [Kontrolle der Verhältnisse von Elementen auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) ansehen, um mehr Details über diesen Algorithmus zu erfahren.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Verhältnisse. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` gesetzt hätten und dann wollten, dass ein Element doppelt so schnell wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzschreibweise der flex-Eigenschaften

Sie werden sehr selten die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis` einzeln verwenden; stattdessen werden sie in der {{cssxref("flex")}}-Kurzschreibweise kombiniert. Die `flex`-Kurzschreibweise erlaubt Ihnen, die drei Werte in dieser Reihenfolge zu setzen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten ermöglicht es Ihnen die verschiedenen Werte der `flex`-Kurzschreibweise zu testen; denken Sie daran, dass der erste Wert `flex-grow` ist. Wenn Sie diesem einen positiven Wert geben, kann das Element wachsen. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als ihre Basis verwenden, um von dort aus zu wachsen und zu schrumpfen.

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

Es gibt auch einige vordefinierte Kurzschreibwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese häufig in Tutorials sehen, und in vielen Fällen sind dies die einzigen, die Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial`-Wert ist ein [CSS-Weit-Schlüsselwort](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types#css-wide_keywords), das den Anfangswert für eine Eigenschaft darstellt. Das Setzen von `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langhand-Eigenschaften zurück, was dem Setzen von `flex: 0 1 auto` entspricht. Der Anfangswert von `flex-grow` ist `0`, daher werden die Elemente nicht größer als ihre `flex-basis`-Größe. Der Anfangswert von `flex-shrink` ist `1`, sodass die Elemente schrumpfen können, wenn sie müssen, anstatt zu überlaufen. Der Anfangswert von `flex-basis` ist `auto`. Die Elemente verwenden entweder eine Größe, die auf dem Element in der Hauptdimension eingestellt ist, oder sie erhalten ihre Größe aus der Inhaltsgröße.

Die Verwendung von `flex: auto` entspricht dem Setzen von `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container füllen sowie bei Bedarf schrumpfen können.

Die Verwendung von `flex: none` erzeugt vollständig unflexible Flex-Elemente. Es ist, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können nicht wachsen oder schrumpfen und werden mit Flexbox unter Verwendung einer `flex-basis` von `auto` angeordnet.

Die Kurzschreibweise, die Sie oft in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies entspricht dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente erhalten eine Mindestgröße aufgrund von `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink`-Wert von `1` redundant, da die Elemente mit der Mindestgröße starten — ihnen wird keine Größe gegeben, die sie überlaufen lassen könnte.

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

## Ausrichtung, Rechtfertigung und Verteilung des freien Raumes zwischen Elementen

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf den Haupt- und Querachsen auszurichten und zu rechtfertigen sowie Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container gesetzt werden, nicht auf die Elemente selbst.

### align-items

Die {{cssxref("align-items")}}-Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum sich Flex-Elemente standardmäßig auf die Höhe des Flex-Containers dehnen (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann vom höchsten Element im Container oder von der Größe stammen, die am Flex-Container selbst eingestellt ist.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers zu positionieren, auf `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Probieren Sie dies im Live-Beispiel aus — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente sich im Container bewegen können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf folgende Werte setzen:

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

Der `align-items`-Wert wird auf dem Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders als andere ausrichten möchten, können Sie die {{cssxref("align-self")}}-Eigenschaft auf das Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}}-Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, die Richtung, in der `flex-direction` den Fluss festgelegt hat. Der Anfangswert ist `flex-start`, der die Elemente am Anfang des Containers ausrichten wird, aber Sie könnten auch den Wert `flex-end` verwenden, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, nachdem die Elemente angeordnet wurden, auf die Elemente gleichmäßig zu verteilen, sodass es einen gleichen Abstand zwischen jedem Element gibt. Verwenden Sie den Wert `space-around`, um auf der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements einen gleichen Raum zu erzeugen. Mit `space-around` haben die Elemente einen halb großen Raum an jedem Ende. Oder verwenden Sie den Wert `space-evenly`, um diedx Elemente einen gleichen Raum um sich herum zu haben. Mit `space-evenly` haben die Elemente einen voll großen Raum an jedem Ende.

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

Der Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) erforscht diese Eigenschaften eingehender, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items)-Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt wird, wird sie die Ausrichtung, jedoch nicht die Rechtfertigung setzen, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine andere Kurzschreibweise, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}}- und `justify-content`-Eigenschaften definiert. Die `align-content`-Eigenschaft betrifft nur Flex-Container, die umwickeln, und wird in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) diskutiert.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis der grundlegenden Merkmale von Flexbox haben. Im nächsten Artikel werden wir uns ansehen, [wie diese Spezifikation zu anderen Teilen von CSS in Beziehung steht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
