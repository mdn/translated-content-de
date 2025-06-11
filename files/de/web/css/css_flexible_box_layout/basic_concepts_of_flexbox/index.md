---
title: Grundlegende Konzepte von Flexbox
short-title: Grundlegende Konzepte
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout)-Modul (im Allgemeinen als Flexbox bezeichnet) ist ein eindimensionales Layoutmodell zur Verteilung von Raum zwischen Elementen und umfasst zahlreiche Ausrichtungsoptionen. Dieser Artikel bietet einen Überblick über die Hauptmerkmale von Flexbox, die wir in den weiteren Teilen dieses Leitfadens genauer erkunden werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox das Layout jeweils in einer Dimension behandelt — entweder als Zeile oder als Spalte. Dies steht im Gegensatz zu dem zweidimensionalen Modell des [CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout), das Spalten und Zeilen zusammen steuert.

## Die zwei Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Bezug auf zwei Achsen denken — die _Hauptachse_ und die _Kreuzachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}}-Eigenschaft definiert, und die [Kreuzachse](#die_kreuzachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher lohnt es sich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, welche vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Zeile in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Zeile in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in der **Block-Richtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Kreuzachse

Die {{Glossary("cross_axis", "Kreuzachse")}} verläuft senkrecht zur Hauptachse. Daher, wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Kreuzachse entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Kreuzachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, dann verläuft die Kreuzachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Kreuzachse in der Inline-Richtung.](basics4.svg)

## Start- und Endlinien

Ein weiterer wichtiger Bereich ist das Verständnis dafür, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox geht nicht einfach davon aus, dass alle Textzeilen am oberen linken Rand eines Dokuments beginnen und nach rechts verlaufen, wobei neue Zeilen untereinander erscheinen. Stattdessen unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung sollte jedoch erklären, warum wir nicht über links und rechts sowie oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich auf Englisch arbeite, dann befindet sich die Startkante der Hauptachse links, die Endkante rechts.

![Bei der Arbeit auf Englisch befindet sich die Startkante links.](basics5.svg)

Wenn ich auf Arabisch arbeiten würde, befände sich die Startkante meiner Hauptachse rechts und die Endkante links.

![Die Startkante in einer RTL-Sprache befindet sich rechts.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Kreuzachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es natürlich, über Start und Ende statt links und rechts nachzudenken, und es wird Ihnen nützlich sein, wenn Sie mit anderen Layout-Methoden wie CSS Grid Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox layoutet wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}}-Eigenschaft des Bereichs auf `flex`. Wenn wir das tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst im Inline- oder Block-Format angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers wie folgt verhält:

- Elemente werden in einer Zeile angezeigt (der Standardwert der {{cssxref("flex-direction")}}-Eigenschaft ist `row`).
- Die Elemente beginnen von der Startkante der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptdimension aus, können jedoch schrumpfen (der Standardwert der {{cssxref("flex-grow")}}-Eigenschaft eines Flex-Elements ist `0` und der Standardwert der {{cssxref("flex-shrink")}}-Eigenschaft ist `1`).
- Die Elemente dehnen sich aus, um die Größe der Kreuzachse auszufüllen (der Standardwert der {{cssxref("align-items")}}-Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}}-Eigenschaft eines Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall der {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus und der {{cssxref("height")}} des Flex-Elements im vertikalen Schreibmodus entsprechen wird. Wenn auch die entsprechende `width`/`height` auf `auto` gesetzt ist, wird der `flex-basis`-Wert `content` stattdessen verwendet.
- Alle Elemente werden in einer einzigen Zeile angezeigt (der Standardwert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`), wobei sie ihren Container überlaufen, wenn ihre kombinierte `width`/`height` die `width`/`height` des enthaltenen Elements überschreitet.

Das Ergebnis ist, dass sich alle Ihre Elemente in einer Reihe ausrichten und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umgebrochen, sondern überlaufen stattdessen. Wenn einige Elemente höher sind als andere, dehnen sich alle Elemente über die gesamte Länge der Kreuzachse aus.

Sie können im folgenden Live-Beispiel sehen, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

### Änderung von flex-direction

Das Hinzufügen der {{cssxref("flex-direction")}}-Eigenschaft zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Wenn Sie `flex-direction: row-reverse` einstellen, werden die Elemente weiterhin entlang der Zeile angezeigt, jedoch werden die Start- und Endlinien umgekehrt.

Wenn wir `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente werden nun in einer Spalte angezeigt. Setzen Sie `column-reverse`, werden die Start- und Endlinien erneut umgekehrt.

Das folgende Live-Beispiel hat `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

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

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg zu umschließen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Verteilung des Raums erfolgt über jede Zeile, ohne Bezug zu den vorherigen oder nachfolgenden Zeilen.

Um ein Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit einem Wert von `wrap` hinzu. Wenn Ihre Elemente jetzt zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie in eine andere Zeile umgebrochen. Das folgende Live-Beispiel enthält Elemente, denen eine `width` zugewiesen wurde. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, umschließen die Elemente mehrere Zeilen. Wenn Sie es auf `nowrap` setzen, das der Anfangswert ist, schrumpfen sie, um in den Container zu passen. Sie schrumpfen, weil sie die anfänglichen Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, was es den Elementen ermöglicht, zu schrumpfen. Die Verwendung von `nowrap` würde ein [Überlaufen](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht schrumpfen könnten oder nicht klein genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umbruchverhalten von Flex-Elementen im Leitfaden [Meisterung von Umbruch von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Die flex-flow Abkürzung

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in die {{cssxref("flex-flow")}}-Abkürzung kombinieren.

Im folgenden Live-Beispiel können Sie den ersten Wert in einen der zulässigen Werte für `flex-direction` ändern - `row`, `row-reverse`, `column` oder `column-reverse` und auch den zweiten in `wrap` und `nowrap`.

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

Um die Inline-Größe jedes Flex-Elements zu steuern, werden diese direkt über drei Eigenschaften anvisiert:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden einen kurzen Blick auf diese Eigenschaften werfen, aber wenn Sie umfassendere Informationen wünschen, werfen Sie einen Blick auf den [Leitfaden zur Steuerung der Verhältnisse von Flex-Elementen auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir diese Eigenschaften verstehen können, müssen wir den Begriff **verfügbarer Raum** in Betracht ziehen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist, die Art und Weise zu ändern, in der der verfügbare Raum unter unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns mit der Ausrichtung von Elementen befassen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann benötigen wir 300 Pixel, um unsere Elemente zu layouten. Dies lässt 200 Pixel freien Raum. Wenn wir die Anfangswerte nicht ändern, platziert Flexbox diesen Raum hinter dem letzten Element.

![Dieser Flex-Container hat verfügbaren Raum, nachdem die Elemente layoutet wurden.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum füllen, dann müssen wir eine Methode zur Verteilung des verbleibenden Raums zwischen den Elementen haben. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, die Verteilung des verfügbaren Raums unter den gleichrangigen Flex-Elementen zu diktieren.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert die Größe dieses Elements in Bezug auf den Raum, den es als verfügbaren Raum hinterlässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall schaut der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als flex-basis verwendet. Deshalb, wenn wir einfach `display: flex` auf das übergeordnete Element setzen, um Flex-Elemente zu erstellen, bewegen sich die Elemente alle in eine Reihe und nehmen nur so viel Platz ein, wie sie benötigen, um ihren Inhalt anzuzeigen.

### Die flex-grow Eigenschaft

Mit der `flex-grow`-Eigenschaft, die auf einen positiven ganzzahligen Wert gesetzt ist, kann das Flex-Element, wenn verfügbarer Raum vorhanden ist, entlang der Hauptachse von seiner `flex-basis` aus wachsen. Ob das Element diesen gesamten verfügbaren Raum entlang dieser Achse einnimmt oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente auch wachsen dürfen und vom Wert ihrer `flex-grow`-Eigenschaften.

Jedes Element mit einem positiven Wert konsumiert einen Teil des verfügbaren Raums basierend auf seinem `flex-grow`-Wert. Wenn wir all unseren Elementen im obigen Beispiel einen `flex-grow`-Wert von 1 geben, dann wird der verfügbare Raum im Flex-Container gleichmäßig unter unseren Elementen aufgeteilt, und sie würden sich entlang der Hauptachse ausdehnen, um den Container zu füllen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element zugewiesen (100px von 200px im obigen Beispiel) und 1 Teil jeweils den anderen beiden (jeweils 50px von insgesamt 200px).

### Die flex-shrink Eigenschaft

Wo die `flex-grow`-Eigenschaft das Hinzufügen von Raum entlang der Hauptachse behandelt, kontrolliert die `flex-shrink`-Eigenschaft, wie Raum weggenommen wird. Wenn wir nicht genug Platz in dem Container haben, um unsere Elemente zu layouten, und `flex-shrink` auf einen positiven ganzzahligen Wert gesetzt ist, kann das Element kleiner werden als die `flex-basis`. Genau wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um ein Element schneller als andere schrumpfen zu lassen — ein Element mit einem höheren `flex-shrink`-Wert wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann auf seine {{cssxref("min-content")}}-Größe schrumpfen. Diese Mindestgröße wird berücksichtigt, während die tatsächliche Menge an Schrumpfung berechnet wird, was bedeutet, dass `flex-shrink` potenziell weniger konsistent erscheint als `flex-grow` im Verhalten. Daher werden wir uns den Algorithmus in dem Artikel [Kontrolle der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) genauer ansehen.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` einstellen und dann möchten, dass ein Element doppelt so schnell wächst, würden wir dieses Element auf `flex: 2 1 200px` einstellen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie wollten.

### Kurzwert für die flex Eigenschaften

Sie werden sehr selten die `flex-grow`, `flex-shrink` und `flex-basis` Eigenschaften einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}}-Abkürzung kombiniert. Die `flex`-Abkürzung erlaubt es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten erlaubt es Ihnen, die verschiedenen Werte der Flex-Abkürzung zu testen; erinnern Sie sich, dass der erste Wert `flex-grow` ist. Wenn Sie diesem einen positiven Wert geben, bedeutet das, dass das Element wachsen kann. Der zweite Wert ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse überfluten. Der letzte Wert ist `flex-basis`; das ist der Wert, bei dem die Elemente ihre Basisgröße zum Wachsen und Schrumpfen verwenden.

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

Es gibt auch einige vordefinierte Kurzwertwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese oft in Tutorials sehen und in vielen Fällen sind diese alles, was Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial` Wert ist ein [CSS-allgemeines Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords), das den Anfangswert für eine Eigenschaft darstellt. Das Setzen von `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langschreibweisen zurück, was dem gleichen entspricht wie `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, sodass Elemente nicht größer als ihre `flex-basis`-Größe wachsen. Der Anfangswert von `flex-shrink` ist `1`, sodass Elemente schrumpfen können, wenn sie müssen, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine festgelegte Größe im Hauptrichtmaß, oder sie erhalten ihre Größe durch die Inhaltsgröße.

Die Verwendung von `flex: auto` entspricht der Verwendung von `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, mit der Ausnahme, dass die Elemente auch wachsen und den Container füllen sowie schrumpfen können, wenn nötig.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Elemente. Es ist, als ob Sie `flex: 0 0 auto` schrieben. Die Elemente können weder wachsen noch schrumpfen und werden mit Flexbox mit einer `flex-basis` von `auto` layoutet.

Die Kurzwahl, die Sie oft in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Das ist dasselbe wie `flex: 1 1 0` oder `flex: 2 1 0` und so weiter zu schreiben. Die Elemente erhalten eine Mindestgröße aufgrund von `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink`-Wert von `1` redundant, weil die Elemente mit der Mindestgröße beginnen — ihnen wird keine Größe gegeben, die sie veranlassen könnte, den Flex-Container zu überfluten.

Probieren Sie diese Kurzwahlwerte im Live-Beispiel unten aus.

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

Ein wesentliches Merkmal von Flexbox ist die Fähigkeit, Elemente entlang der Haupt- und Kreuzachsen auszurichten und zu rechtfertigen sowie den Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container gesetzt werden, nicht auf die Elemente selbst.

### align-items

Die {{cssxref("align-items")}}-Eigenschaft richtet alle Flex-Elemente entlang der Kreuzachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum Flex-Elemente standardmäßig auf die Höhe des Flex-Containers gedehnt werden (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der festgelegten Größe des Flex-Containers selbst stammen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Probieren Sie dies im Live-Beispiel aus — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente im Container bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von `align-items` auf Folgendes setzen:

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

Das `align-items` wird auf den Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders als andere ausrichten möchten, können Sie {{cssxref("align-self")}} auf das Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}}-Eigenschaft wird verwendet, um die Elemente entlang der Hauptachse, der Richtung, in die `flex-direction` den Fluss gesetzt hat, auszurichten. Der Anfangswert ist `flex-start`, der die Elemente an der Startkante des Containers ausrichtet, aber Sie könnten den Wert auch auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten Platz nach den Elementen gleichmäßig aufzuteilen, sodass zwischen jedem Element ein gleicher Abstand besteht. Um einen gleichen Abstand rechts und links (oder oben und unten bei Spalten) jedes Elements zu verursachen, verwenden Sie den Wert `space-around`. Bei `space-around` haben Elemente an beiden Enden einen halben Platz. Oder um Elemente mit einem gleichen Abstand um sie herum zu haben, verwenden Sie den Wert `space-evenly`. Bei `space-evenly` haben Elemente an beiden Enden einen vollen Platz.

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

Der Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften eingehender, um ein besseres Verständnis dafür zu haben, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items)-Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt wird, setzt sie die Ausrichtung, aber nicht die Rechtfertigung, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine weitere Kurzschreibweise, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}}- und `justify-content`-Eigenschaften definiert. Die `align-content`-Eigenschaft wirkt sich nur auf Flex-Container aus, die umschlagen, und wird in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) besprochen.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis der grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir uns ansehen [wie diese Spezifikation zu anderen Teilen von CSS steht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
