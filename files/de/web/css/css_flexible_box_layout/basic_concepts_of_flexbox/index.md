---
title: Grundlegende Konzepte von Flexbox
short-title: Grundlegende Konzepte
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Das [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul (gewöhnlich als Flexbox bezeichnet) ist ein eindimensionales Layoutmodell zur Verteilung von Raum zwischen Elementen und beinhaltet zahlreiche Ausrichtungsmöglichkeiten. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir in den folgenden Leitfäden detaillierter erkunden werden.

Wenn wir Flexbox als eindimensional beschreiben, beziehen wir uns darauf, dass Flexbox das Layout in einer Dimension behandelt — entweder als Zeile oder als Spalte. Dies kann mit dem zweidimensionalen Modell des [CSS Grid Layout](/de/docs/Web/CSS/CSS_grid_layout) kontrastiert werden, das Spalten und Zeilen zusammen steuert.

## Die beiden Achsen von Flexbox

Bei der Arbeit mit Flexbox sollten Sie in Bezug auf zwei Achsen denken — die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}} Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox machen, bezieht sich auf diese Achsen, daher lohnt es sich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wählen Sie `row` oder `row-reverse`, verläuft Ihre Hauptachse entlang der Zeile in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Zeile in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse` und Ihre Hauptachse verläuft in der **Block-Richtung**, von der Oberseite der Seite zur Unterseite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Wenn also Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` eingestellt ist, verläuft die Querachse die Spalten hinunter.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiteres wichtiges Verständnisgebiet ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox geht nicht einfach davon aus, dass alle Textzeilen auf der oberen linken Seite eines Dokuments beginnen und sich zur rechten Seite hin bewegen, wobei neue Zeilen untereinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung sollte jedoch helfen zu erklären, warum wir nicht von links und rechts oder oben und unten sprechen, wenn wir die Richtung beschreiben, in der sich unsere Flex-Elemente bewegen.

Wenn `flex-direction` `row` ist und ich auf Englisch arbeite, dann befindet sich die Startkante der Hauptachse auf der linken Seite, die Endkante auf der rechten Seite.

![Bei der Arbeit auf Englisch befindet sich die Startkante auf der linken Seite.](basics5.svg)

Wenn ich auf Arabisch arbeiten würde, wäre die Startkante meiner Hauptachse auf der rechten Seite und die Endkante auf der linken Seite.

![Die Startkante in einer RTL-Sprache befindet sich auf der rechten Seite.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einiger Zeit wird es natürlich, über Anfang und Ende statt über links und rechts nachzudenken, und es wird Ihnen nützlich sein, wenn Sie mit anderen Layout-Methoden wie dem CSS Grid Layout umgehen, das den gleichen Mustern folgt.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox layoutet wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}} Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst inline oder im Blockformat-Kontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers folgendermaßen verhält:

- Elemente werden in einer Reihe angezeigt (der Standardwert der {{cssxref("flex-direction")}} Eigenschaft ist `row`).
- Die Elemente beginnen von der Startkante der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptrichtung, sondern können schrumpfen (der Standardwert der {{cssxref("flex-grow")}} Eigenschaft eines Flex-Elements ist `0` und der Wert der {{cssxref("flex-shrink")}} Eigenschaft ist `1`).
- Die Elemente dehnen sich über die Größe der Querachse (der Standardwert der {{cssxref("align-items")}} Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}} Eigenschaft eines Flex-Elements ist `auto`. Das bedeutet, dass es in jedem Fall gleich der {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus und der {{cssxref("height")}} des Flex-Elements im vertikalen Schreibmodus sein wird. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `content`-Wert von `flex-basis` verwendet.
- Alle Elemente befinden sich in einer einzigen Reihe (der Standardwert der {{cssxref("flex-wrap")}} Eigenschaft ist `nowrap`), was bedeutet, dass sie ihren Container überlaufen, wenn ihre kombinierte `width`/`height` die `width`/`height` des enthaltenen Elements überschreitet.

Das Ergebnis ist, dass Ihre Elemente alle in einer Reihe aufgestellt werden und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn es mehr Elemente gibt, als in den Container passen, werden sie nicht umgebrochen, sondern überlaufen. Wenn einige Elemente höher als andere sind, dehnen sich alle Elemente über die gesamte Länge der Querachse.

Wie dies aussieht, sehen Sie im folgenden Live-Beispiel. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

### Flex-Richtung ändern

Das Hinzufügen der {{cssxref("flex-direction")}} Eigenschaft zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Wenn Sie `flex-direction: row-reverse` setzen, werden die Elemente weiterhin entlang der Zeile angezeigt, aber die Anfangs- und Endlinien werden vertauscht.

Wenn wir `flex-direction` zu `column` ändern, ändert sich die Hauptachse und unsere Elemente werden jetzt in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Anfangs- und Endlinien werden erneut vertauscht.

Das Live-Beispiel unten hat die `flex-direction` auf `row-reverse` gesetzt. Probieren Sie die anderen Werte — `row`, `column` und `column-reverse` — aus, um zu sehen, was mit dem Inhalt passiert.

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

Während Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg zu umbrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jegliche Raumverteilung erfolgt über jede Zeile hinweg, ohne Bezug auf die vorherige oder nachfolgende Zeile.

Um ein Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Nun, wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie in eine andere Zeile umgebrochen. Im Live-Beispiel unten sind die Elemente mit einer `width` versehen worden. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` eingestellt ist, wickeln sich die Elemente über mehrere Zeilen. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, schrumpfen sie, um in den Container zu passen. Sie schrumpfen, weil sie die anfänglichen Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, was es den Elementen ermöglicht zu schrumpfen. Die Verwendung von `nowrap` würde einen [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht schrumpfen können oder nicht klein genug schrumpfen können, um zu passen.

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

## Die flex-flow Abkürzung

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Abkürzung kombinieren.

Im Live-Beispiel unten, versuchen Sie den ersten Wert in einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten Wert in `wrap` und `nowrap`.

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

Um die Inline-Größe jedes Flex-Elements zu steuern, richten wir uns direkt auf sie mit drei Eigenschaften aus:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden diese Eigenschaften kurz betrachten, aber wenn Sie umfassendere Informationen wünschen, werfen Sie einen Blick auf den Leitfaden [Steuern der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir diese Eigenschaften sinnvoll nutzen können, müssen wir das Konzept des **verfügbaren Raums** berücksichtigen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist die Art und Weise zu ändern, wie verfügbarer Raum auf unsere Elemente verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns mit der Ausrichtung von Elementen befassen.

Wenn wir drei 100 Pixel breite Elemente in einem 500 Pixel breiten Container haben, dann benötigen wir 300 Pixel Raum, um unsere Elemente zu layouten. Das lässt 200 Pixel verfügbaren Raum. Wenn wir die Anfangswerte nicht ändern, legt Flexbox diesen Raum nach dem letzten Element an.

![Dieser Flex-Container hat verfügbaren Raum nach der Anordnung der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum füllen, dann benötigen wir eine Methode, um den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, zu bestimmen, wie dieser verfügbare Raum auf die Geschwister-Flex-Elemente aufgeteilt werden soll.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert die Größe dieses Elements in Bezug auf den Raum, den es als verfügbaren Raum hinterlässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall schaut der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixel. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als Flexbasis verwendet. Dies ist der Grund, warum, wenn wir einfach `display: flex` auf dem übergeordneten Element deklarieren, um Flex-Elemente zu erstellen, die Elemente alle in einer Reihe bewegt werden und nur so viel Platz einnehmen, wie sie benötigen, um ihren Inhalt anzuzeigen.

### Die flex-grow Eigenschaft

Mit der `flex-grow` Eigenschaft auf einen positiven ganzen Wert gesetzt, kann das Flex-Element, wenn verfügbarer Raum vorhanden ist, entlang der Hauptachse von seiner `flex-basis` aus wachsen. Ob sich das Element ausdehnt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen, oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente ebenfalls wachsen dürfen und dem Wert ihrer `flex-grow` Eigenschaften.

Jedes Element mit einem positiven Wert verbraucht einen Teil des verfügbaren Raums basierend auf seinem `flex-grow` Wert. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow` Wert von 1 geben, würde der verfügbare Raum im Flex-Container gleichmäßig auf unsere Elemente verteilt werden und sie würden sich entlang der Hauptachse ausdehnen, um den Container zu füllen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element zugewiesen (100px von 200px im Fall des obigen Beispiels) und je 1 Teil den anderen beiden (je 50px von den insgesamt 200px).

### Die flex-shrink Eigenschaft

Wo die `flex-grow` Eigenschaft mit dem Hinzufügen von Raum in der Hauptachse beschäftigt ist, steuert die `flex-shrink` Eigenschaft, wie er weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuzeigen, und `flex-shrink` auf einen positiven ganzen Wert gesetzt ist, dann kann das Element kleiner als die `flex-basis` werden. Wie bei `flex-grow` können verschiedene Werte zugewiesen werden, um ein Element schneller schrumpfen zu lassen als andere — ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister, die niedrigere Werte haben.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese minimale Größe wird berücksichtigt, während die tatsächliche Menge des Schrumpfens berechnet wird, was bedeutet, dass `flex-shrink` das Potenzial hat, im Verhalten weniger konsistent als `flex-grow` zu erscheinen. Daher werden wir uns diesen Algorithmus in dem Artikel [Steuern der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) genauer ansehen.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` gesetzt hätten und dann ein Element in doppelter Geschwindigkeit wachsen lassen wollten, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Abkürzungswerte für die Flex-Eigenschaften

Sie werden sehr selten die `flex-grow`, `flex-shrink` und `flex-basis` Eigenschaften einzeln verwenden; stattdessen werden sie zur {{cssxref("flex")}} Abkürzung kombiniert. Die `flex` Abkürzung ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten erlaubt Ihnen, die verschiedenen Werte der Flex-Abkürzung auszuprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Wenn Sie diesem einen positiven Wert geben, kann das Element wachsen. Der zweite Wert ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse übersteigen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als Basiswert verwenden, von dem aus sie wachsen und schrumpfen.

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

Es gibt auch einige vordefinierte Abkürzungswerte, die die meisten Anwendungsfälle abdecken. Sie werden diese oft in Tutorials sehen und in vielen Fällen sind diese alles, was Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial` Wert ist ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords), das den Anfangswert für eine Eigenschaft darstellt. Die Einstellung `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langhandeigenschaften zurück, was dem Wert `flex: 0 1 auto` entspricht. Der Anfangswert von `flex-grow` ist `0`, also werden Elemente nicht größer als ihre `flex-basis` Größe wachsen. Der Anfangswert von `flex-shrink` ist `1`, also können Elemente, wenn nötig, anstatt überzulaufen, schrumpfen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine festgelegte Größe in der Hauptrichtung oder ihre Größe wird von der Inhaltsgröße bezogen.

Die Verwendung von `flex: auto` entspricht der Verwendung von `flex: 1 1 auto`; dies ähnelt `flex: initial`, außer dass die Elemente ebenso wachsen und den Container füllen können, wie sie bei Bedarf schrumpfen können.

Die Verwendung von `flex: none` führt zu vollständig unflexiblen Flex-Elementen. Es ist so, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können weder wachsen noch schrumpfen und werden im Flexbox-Layout mit einer `flex-basis` von `auto` angezeigt.

Die Abkürzung, die Sie oft in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies entspricht dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente erhalten die Mindestgröße durch `flex-basis: 0` und dehnen sich dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink` Wert von `1` redundant, da die Elemente mit der Mindestgröße beginnen — ihnen wird keine Größe gegeben, die sie über den Flex-Container hinausragen lassen könnte.

Versuchen Sie diese Abkürzungswerte im Live-Beispiel unten.

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

## Ausrichtung, Rechtfertigung und Verteilung von freiem Raum zwischen den Elementen

Ein wesentliches Merkmal von Flexbox ist die Fähigkeit, Elemente auf den Haupt- und Querachsen auszurichten und den Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container gesetzt werden, nicht auf die Elemente selbst.

### align-items

Die {{cssxref("align-items")}} Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und deshalb dehnen sich Flex-Elemente standardmäßig auf die Höhe des Flex-Containers aus (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` eingestellt ist). Diese Höhe kann von dem höchsten Element im Container oder der auf dem Flex-Container selbst festgelegten Größe abgeleitet werden.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Probieren Sie dies im Live-Beispiel aus — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente innerhalb des Containers bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf folgende Werte setzen:

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

Der `align-items`-Wert wird auf den Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders ausrichten möchten als andere, können Sie die {{cssxref("align-self")}} Eigenschaft auf das Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}} Eigenschaft wird verwendet, um die Elemente entlang der Hauptachse auszurichten, in der die `flex-direction` den Fluss gesetzt hat. Der Standardwert ist `flex-start`, was die Elemente an der Anfangskante des Containers ausrichtet, aber Sie könnten auch den Wert auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, nachdem die Elemente ausgelegt wurden, gleichmäßig zwischen den Elementen zu verteilen, sodass ein gleicher Raum zwischen jedem Element besteht. Um einen gleichen Raum auf der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements zu verursachen, verwenden Sie den Wert `space-around`. Mit `space-around` haben die Elemente einen halben Raum an jedem Ende. Oder um zu bewirken, dass die Elemente gleichmäßigen Raum um sich herum haben, verwenden Sie den Wert `space-evenly`. Mit `space-evenly` haben die Elemente einen vollen Raum an jedem Ende.

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

Der Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften genauer, um ein besseres Verständnis davon zu bekommen, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/Reference/Properties/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/Reference/Properties/place-items) Eigenschaft ist eine Abkürzung für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt wird, richtet sie die Elemente aus, jedoch nicht die Rechtfertigung, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine weitere Abkürzungseigenschaft, [`place-content`](/de/docs/Web/CSS/Reference/Properties/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content`-Eigenschaft wirkt sich nur auf Flex-Container aus, die umwickelt werden, und wird im Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) behandelt.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis der grundlegenden Merkmale von Flexbox haben. Im nächsten Artikel werden wir untersuchen, [wie diese Spezifikation mit anderen Teilen von CSS in Beziehung steht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
