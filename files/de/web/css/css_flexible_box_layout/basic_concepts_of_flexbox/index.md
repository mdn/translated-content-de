---
title: Grundlegende Konzepte von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: bdecbffbf6379d6e2399855f59bd34be8c4d5965
---

{{CSSRef}}

Das Modul [flexible box layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (oftmals als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Raum zwischen Elementen und beinhaltet zahlreiche Ausrichtungsfähigkeiten. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir in den restlichen dieser Leitfäden ausführlicher erkunden werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox mit Layout in einer Dimension gleichzeitig arbeitet – entweder als Reihe oder Spalte. Dies steht im Gegensatz zu dem zweidimensionalen Modell des [CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout), das Spalten und Reihen zusammen steuert.

## Die zwei Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Bezug auf zwei Achsen denken — die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die Eigenschaft {{cssxref("flex-direction")}} definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox machen, bezieht sich auf diese Achsen, daher ist es sinnvoll zu verstehen, wie sie von Anfang an funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, welches vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Reihe in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Reihe in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, und Ihre Hauptachse verläuft in der **Blockrichtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Blockrichtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Dementsprechend verläuft, wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, die Querachse entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Blockrichtung.](basics3.svg)

Ist Ihre Hauptachse `column` oder `column-reverse`, dann verläuft die Querachse entlang der Reihen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiterer wichtiger Punkt des Verständnisses ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments trifft. Flexbox geht nicht einfach davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und zur rechten Seite verlaufen, wobei neue Zeilen untereinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; jedoch sollte die folgende Beschreibung erklären, warum wir nicht von links und rechts und oben und unten sprechen, wenn wir die Richtung beschreiben, in der unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich auf Englisch arbeite, dann wird die Startkante der Hauptachse auf der linken Seite sein, die Endkante auf der rechten Seite.

![Beim Arbeiten auf Englisch ist die Startkante links.](basics5.svg)

Wenn ich auf Arabisch arbeiten würde, wäre die Startkante meiner Hauptachse auf der rechten Seite und die Endkante auf der linken Seite.

![Die Startkante in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen ist die Startkante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es natürlich, über Anfang und Ende nachzudenken, anstatt über links und rechts, was Ihnen bei der Arbeit mit anderen Layout-Methoden wie CSS Grid Layout, das den gleichen Mustern folgt, nützlich sein wird.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox gestaltet wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die Eigenschaft {{cssxref("display")}} des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst in einem Inline- oder Block-Formatierungskontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich die Inhalte eines neuen Flex-Containers auf folgende Weise verhalten:

- Elemente werden in einer Reihe angezeigt (der Standardwert der {{cssxref("flex-direction")}} Eigenschaft ist `row`).
- Die Elemente beginnen an der Startkante der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptdimension aus, können aber schrumpfen (der Standardwert der `flex-grow`-Eigenschaft eines Flex-Elements ist `0` und der der `flex-shrink`-Eigenschaft ist `1`).
- Die Elemente werden sich in der Größe der Querachse dehnen (der Standardwert der {{cssxref("align-items")}} Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}} Eigenschaft eines Flex-Elements ist `auto`. Das bedeutet, dass es in jedem Fall der Breite des Flex-Elements im horizontalen Schreibmodus und der Höhe im vertikalen Schreibmodus entspricht. Wenn die entsprechende `width`/`height` auch auf `auto` gesetzt ist, wird stattdessen der `content`-Wert des `flex-basis` verwendet.
- Alle Elemente werden in einer einzigen Reihe sein (der Standardwert der {{cssxref("flex-wrap")}} Eigenschaft ist `nowrap`), wenn ihre kombinierte `width`/`height` die Breite/Höhe des umgebenden Elements überschreitet, fließen sie über.

Das Ergebnis davon ist, dass sich alle Ihre Elemente in einer Reihe anordnen, wobei die Größe des Inhalts als ihre Größe in der Hauptachse verwendet wird. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie sich nicht umwickeln, sondern überlaufen. Wenn einige Elemente höher sind als andere, werden sich alle Elemente entlang der gesamten Länge der Querachse dehnen.

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

### Änderung der flex-direction

Das Hinzufügen der {{cssxref("flex-direction")}} Eigenschaft zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Wenn `flex-direction: row-reverse` gesetzt ist, werden die Elemente in der Reihe angezeigt, jedoch werden die Start- und Endlinien umgeschaltet.

Wenn wir `flex-direction` zu `column` ändern, wechselt die Hauptachse und unsere Elemente werden jetzt in einer Spalte angezeigt. Bei `column-reverse` werden die Start- und Endlinien erneut umgeschaltet.

Das untenstehende Live-Beispiel hat `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

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

Während Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen zu umbrechen. Wenn Sie dies tun, sollten Sie jede Zeile als einen neuen Flex-Container betrachten. Jede Platzverteilung erfolgt über jede Zeile, ohne Bezug auf die vorherigen oder nachfolgenden Zeilen.

Um das Umbrechen zu bewirken, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Jetzt, wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie in eine weitere Zeile umgebrochen. Das untenstehende Live-Beispiel enthält Elemente, denen eine `width` zugewiesen wurde. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, werden die Elemente über mehrere Zeilen umgebrochen. Wenn Sie `nowrap` setzen, was der Anfangswert ist, werden sie sich verkleinern, um in den Container zu passen. Sie verkleinern sich, weil sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, die es Elementen ermöglichen zu schrumpfen. Bei Verwendung von `nowrap` würde es ein [Überfluss](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) geben, wenn die Elemente nicht schrumpfen könnten oder nicht klein genug, um zu passen.

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

## Die flex-flow Kurzform

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Kurzform kombinieren.

Im untenstehenden Live-Beispiel versuchen Sie den ersten Wert in einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten in `wrap` und `nowrap`.

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

Wir werden diese Eigenschaften im Folgenden kurz betrachten, aber wenn Sie umfassendere Informationen wünschen, werfen Sie einen Blick auf den Leitfaden [Steuerung der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir diese Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raums** berücksichtigen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist die Art und Weise zu ändern, wie verfügbarer Raum unter unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns der Ausrichtung von Elementen zuwenden.

Wenn wir drei Elemente von 100 Pixel Breite in einem Container von 500 Pixel Breite haben, dann ist der Raum, den wir benötigen, um unsere Elemente zu layouten, 300 Pixel. Dies lässt 200 Pixel verfügbaren Raum übrig. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element platzieren.

![Dieser Flex-Container hat verfügbaren Raum nach dem Layout der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann brauchen wir eine Methode, um den übrig gebliebenen Raum zwischen den Elementen zu verteilen. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es uns zu bestimmen, wie dieser verfügbare Raum unter den gleichrangigen Flex-Elementen verteilt werden soll.

### Die flex-basis Eigenschaft

Das `flex-basis` ist das, was die Größe dieses Elements im Hinblick auf den Raum definiert, den es als verfügbaren Raum lässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall prüft der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als Flex-Basis verwendet. Deshalb, wenn wir einfach `display: flex` auf dem Elternteil deklarieren, um Flex-Elemente zu erstellen, bewegen sich die Elemente alle in eine Reihe und nehmen nur so viel Platz ein, wie sie benötigen, um ihre Inhalte anzuzeigen.

### Die flex-grow Eigenschaft

Wenn die `flex-grow`-Eigenschaft auf einen positiven Ganzzahlwert gesetzt ist, kann das Flex-Element entlang der Hauptachse von seiner `flex-basis` wachsen, wenn verfügbarer Raum vorhanden ist. Ob das Element sich dehnt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen, oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente ebenfalls wachsen dürfen und vom Wert ihrer `flex-grow`-Eigenschaften.

Jedes Element mit einem positiven Wert nimmt einen Teil des verfügbaren Raums basierend auf seinem `flex-grow`-Wert in Anspruch. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow`-Wert von 1 geben, wird der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen aufgeteilt und sie dehnen sich entlang der Hauptachse, um den Container zu füllen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element gegeben (100px der 200px im Fall des obigen Beispiels) und jeweils 1 Teil den anderen beiden (je 50px von den insgesamt 200px).

### Die flex-shrink Eigenschaft

Wo die `flex-grow`-Eigenschaft das Hinzufügen von Raum in der Hauptachse behandelt, kontrolliert die `flex-shrink`-Eigenschaft, wie dieser Raum weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente zu layouten, und `flex-shrink` auf einen positiven Ganzzahlwert gesetzt ist, dann kann das Element kleiner werden als die `flex-basis`. Wie bei `flex-grow` können verschiedene Werte zugewiesen werden, um zu bewirken, dass ein Element schneller schrumpft als andere — ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}}-Größe schrumpfen. Diese Mindestgröße wird berücksichtigt, während die tatsächliche Menge an Schrumpfung festgelegt wird, was bedeutet, dass `flex-shrink` das Potenzial hat, in seinem Verhalten weniger konsistent als `flex-grow` zu erscheinen. Deshalb werden wir uns dieses Algorithmus genauer ansehen im Artikel [Kontrolle der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Anteile. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` setzen und dann möchten, dass ein Element doppelt so schnell wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzformwerte für die flex-Eigenschaften

Sie werden die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis` selten individuell sehen; stattdessen werden sie in der {{cssxref("flex")}} Kurzform kombiniert. Die `flex`-Kurzform ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das untenstehende Live-Beispiel ermöglicht es Ihnen, die verschiedenen Werte der `flex`-Kurzform auszuprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Dies zu einem positiven Wert zu geben, bedeutet, dass das Element wachsen kann. Der zweite ist `flex-shrink` — bei positivem Wert können die Elemente schrumpfen, jedoch nur, wenn ihre Gesamtwerte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als ihren Basiswert zum Wachsen und Schrumpfen verwenden.

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

Es gibt auch einige vordefinierte Kurzformwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese oft in Tutorials sehen, und in vielen Fällen werden diese alles sein, was Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial`-Wert ist ein [CSS-weiter Wert](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values), der den Anfangswert für eine Eigenschaft repräsentiert. Das Setzen von `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei langen Eigenschaften zurück, was dem entspricht `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, sodass sich Elemente nicht größer als ihre `flex-basis`-Größe ausdehnen. Der Anfangswert von `flex-shrink` ist `1`, sodass sich Elemente bei Bedarf verkleinern können, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine im Hauptmaß festgelegte Größe oder erhalten ihre Größe aus der Inhaltsgröße.

Die Verwendung von `flex: auto` entspricht `flex: 1 1 auto`; dies ist ähnlich zu `flex: initial`, außer dass die Elemente wachsen können und den Container ausfüllen sowie bei Bedarf schrumpfen können.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Elemente. Es ist so, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können weder wachsen noch schrumpfen und werden mit Flexbox mit einer `flex-basis` von `auto` gestaltet.

Die Kurzform, die Sie häufig in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies entspricht der Schreibweise `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente erhalten die Mindestgröße aufgrund `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink` Wert von `1` redundant, da die Elemente mit Mindestgröße beginnen — sie erhalten keine Größe, die sie dazu bringen könnte, den Flex-Container zu überlaufen.

Versuchen Sie diese Kurzformwerte im untenstehenden Live-Beispiel.

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

Ein Schlüsselelement von Flexbox ist die Fähigkeit, Elemente auf den Haupt- und Querachsen auszurichten und zu rechtfertigen und den Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf dem Flex-Container gesetzt werden, nicht auf den Elementen selbst.

### align-items

Die {{cssxref("align-items")}} Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch`, was der Grund dafür ist, dass Flex-Elemente standardmäßig die Höhe des Flex-Containers strecken (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der Größe des Flex-Containers selbst kommen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Versuchen Sie dies im Live-Beispiel — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente innerhalb des Containers bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von `align-items` setzen auf:

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

Die `align-items`-Eigenschaft wird auf dem Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders als andere ausrichten möchten, können Sie das {{cssxref("align-self")}} auf dem Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}} Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, in der Richtung, in die `flex-direction` den Fluss gesetzt hat. Der Anfangswert ist `flex-start`, der die Elemente am Startpunkt des Containers ausrichtet, aber Sie könnten auch den Wert auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, nachdem die Elemente ausgelegt wurden, gleichmäßig zwischen den Elementen zu verteilen, sodass es einen gleichen Abstand zwischen jedem Element gibt. Um einen gleichen Abstand auf der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements zu erzielen, verwenden Sie den Wert `space-around`. Bei `space-around` haben Elemente an beiden Enden einen halbgroßen Raum. Oder, um Elemente mit gleichem Raum um sie herum anzuordnen, verwenden Sie den Wert `space-evenly`. Bei `space-evenly` haben Elemente an beiden Enden einen vollständig großen Raum.

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

Der Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften eingehender, um ein besseres Verständnis dafür zu erhalten, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items) Eigenschaft ist eine Kurzform für `align-items` und `justify-items`. Wenn sie auf einem Flex-Container gesetzt ist, stellt sie die Ausrichtung ein, aber nicht die Rechtfertigung, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine andere Kurzform-Eigenschaft, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft betrifft nur Flex-Container, die umwickeln, und wird im Artikel [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) diskutiert.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis für die grundlegenden Merkmale von Flexbox haben. Im nächsten Artikel werden wir untersuchen, [wie diese Spezifikation sich auf andere Teile von CSS bezieht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
