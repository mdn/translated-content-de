---
title: Grundkonzepte von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 83dd1960e946e82f2cf830ac5df5703df501f73b
---

{{CSSRef}}

Das [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul (üblicherweise als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Raum zwischen Elementen und beinhaltet zahlreiche Ausrichtungsfähigkeiten. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir in weiteren Details in den restlichen dieser Leitfäden erkunden werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox Layouts zu einer Zeit in einer Dimension verwaltet – entweder als Zeile oder als Spalte. Dies kann kontrastiert werden mit dem zweidimensionalen Modell des [CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout), welches Spalten und Zeilen zusammen kontrolliert.

## Die beiden Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Bezug auf zwei Achsen denken – die _Hauptachse_ und die _Kreuzachse_. Die [Hauptachse](#die_hauptachse) wird durch die Eigenschaft {{cssxref("flex-direction")}} definiert, und die [Kreuzachse](#die_kreuzachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher ist es sinnvoll, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, welches vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, wird Ihre Hauptachse in **Inline-Richtung** entlang der Zeile verlaufen.

![Wenn die Flex-Richtung auf Zeile gesetzt ist, verläuft die Hauptachse in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in **Block-Richtung**, von oben nach unten.

![Wenn die Flex-Richtung auf Spalte gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Kreuzachse

Die {{Glossary("cross_axis", "Kreuzachse")}} verläuft senkrecht zur Hauptachse. Daher, wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Kreuzachse entlang der Spalten.

![Wenn die Flex-Richtung auf Zeile gesetzt ist, verläuft die Kreuzachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Kreuzachse entlang der Zeilen.

![Wenn die Flex-Richtung auf Spalte gesetzt ist, verläuft die Kreuzachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiterer wichtiger Bereich des Verständnisses ist, wie Flexbox keine Annahmen über den Schreibmodus des Dokuments trifft. Flexbox geht nicht einfach davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und zur rechten Seite verlaufen, wobei neue Zeilen untereinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; jedoch sollte die folgende Beschreibung helfen zu erklären, warum wir nicht von links und rechts und oben und unten sprechen, wenn wir die Richtung beschreiben, in der unsere Flex-Elemente fließen.

Wenn `flex-direction` `row` ist und ich in Englisch arbeite, dann wird die Startkante der Hauptachse links sein, die Endkante rechts.

![Beim Arbeiten in Englisch ist die Startkante links.](basics5.svg)

Wenn ich in Arabisch arbeiten würde, wäre die Startkante meiner Hauptachse rechts und die Endkante links.

![Die Startkante in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Kreuzachse oben im Flexcontainer und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es natürlich, in Bezug auf Anfang und Ende statt links und rechts zu denken, und es wird Ihnen nützlich sein, wenn Sie mit anderen Layout-Methoden wie CSS Grid Layout zu tun haben, die denselben Mustern folgen.

## Der Flexcontainer

Ein Bereich eines Dokuments, der mit Flexbox gestaltet wird, wird als **Flexcontainer** bezeichnet. Um einen {{Glossary("flex_container", "Flexcontainer")}} zu erstellen, setzen Sie die Eigenschaft {{cssxref("display")}} des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst im Inline- oder Block-Formatierungskontext angezeigt wird, indem Sie für Inline-Flexcontainer `inline flex` oder `inline-flex` verwenden, oder für Block-Level-Flexcontainer `block flex` oder `flex`.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich die Inhalte eines neuen Flexcontainers folgendermaßen verhalten:

- Elemente werden in einer Zeile angezeigt (der Standardwert der {{cssxref("flex-direction")}} Eigenschaft ist `row`).
- Die Elemente beginnen am Startkante der Hauptachse.
- Die Elemente strecken sich nicht in der Hauptdimension, können aber schrumpfen (der Standardwert der {{cssxref("flex-grow")}} Eigenschaft eines Flex-Elements ist `0` und der Standardwert der {{cssxref("flex-shrink")}} Eigenschaft ist `1`).
- Die Elemente strecken sich, um die Größe der Kreuzachse zu füllen (der Standardwert der {{cssxref("align-items")}} Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}} Eigenschaft eines Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall gleich der {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus und der {{cssxref("height")}} im vertikalen Schreibmodus sein wird. Wenn die korrespondierende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `flex-basis` `content` Wert verwendet.
- Alle Elemente werden in einer einzigen Zeile sein (der Standardwert der {{cssxref("flex-wrap")}} Eigenschaft ist `nowrap`), wobei sie ihren Container überlaufen, wenn ihre kombinierte `width`/`height` die `width`/`height` des enthaltenden Elements überschreitet.

Das Ergebnis ist, dass Ihre Elemente alle in einer Zeile ausgerichtet werden, wobei die Größe des Inhalts als ihre Größe in der Hauptachse verwendet wird. Wenn es mehr Elemente gibt, als in den Container passen, werden sie nicht umgebrochen, sondern stattdessen überlaufen. Wenn einige Elemente höher sind als andere, werden alle Elemente entlang der vollen Länge der Kreuzachse gestreckt.

Im folgenden Live-Beispiel sehen Sie, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

Das Hinzufügen der {{cssxref("flex-direction")}} Eigenschaft zum Flexcontainer ermöglicht es uns, die Richtung zu ändern, in der unsere Flexelemente angezeigt werden. Das Setzen von `flex-direction: row-reverse` wird die Elemente in der Zeile halten, jedoch werden die Anfangs- und Endlinien vertauscht.

Wenn wir `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente sind jetzt in einer Spalte angeordnet. Setzen Sie `column-reverse` und die Anfangs- und Endlinien werden erneut vertauscht.

Das Live-Beispiel unten hat `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

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

## Mehrzeilige Flexcontainer mit flex-wrap

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, Flexelemente über mehrere Zeilen hinweg umzubrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flexcontainer betrachten. Jede Raumverteilung erfolgt über jede Zeile, ohne Bezug auf die vorherigen oder nachfolgenden Zeilen.

Um das Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie auf eine andere Zeile umgebrochen. Das Live-Beispiel unten enthält Elemente, denen eine `Breite` gegeben wurde. Die Gesamtbreite der Elemente ist zu breit für den Flexcontainer. Da `flex-wrap` auf `wrap` gesetzt ist, werden die Elemente über mehrere Zeilen umgebrochen. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, werden sie schrumpfen, um in den Container zu passen. Sie schrumpfen, da sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, das es den Elementen ermöglicht, zu schrumpfen. Die Verwendung von `nowrap` würde ein [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht schrumpfen könnten oder nicht klein genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umbruch von Flexelementen im Leitfaden [Meistern des Umbruchs von Flexelementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Der flex-flow Kurzschreibweise

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in die {{cssxref("flex-flow")}} Kurzschreibweise kombinieren.

Im Live-Beispiel unten, versuchen Sie den ersten Wert in einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch die zweite zu `wrap` und `nowrap`.

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

## Auf Flexelemente angewendete Eigenschaften

Um die Inline-Größe jedes Flexelements zu steuern, zielen wir direkt auf sie mit drei Eigenschaften:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden einen kurzen Blick auf diese Eigenschaften unten werfen, aber wenn Sie umfassendere Informationen wünschen, werfen Sie einen Blick auf den Leitfaden [Steuerung der Verhältnisse von Flexelementen auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir diese Eigenschaften sinnvoll betrachten können, müssen wir das Konzept des **verfügbaren Raums** betrachten. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist die Art und Weise zu ändern, wie verfügbarer Raum zwischen unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns mit der Ausrichtung von Elementen beschäftigen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, benötigen wir 300 Pixel, um unsere Elemente anzuordnen. Dies lässt 200 Pixel verfügbaren Raum. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element platzieren.

![Dieser Flexcontainer hat verfügbaren Raum nach der Anordnung der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum füllen, dann brauchen wir eine Methode, um den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, wie dieser verfügbare Raum unter den Geschwister-Flexelementen verteilt werden soll.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert, wie groß dieses Element in Bezug auf den Raum ist, der als verfügbarer Raum verbleibt. Der Anfangswert dieser Eigenschaft ist `auto` – in diesem Fall überprüft der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixel. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als Flex-Basis genutzt. Deshalb, wenn wir einfach `display: flex` auf das übergeordnete Element erklären, um Flexelemente zu erstellen, verschieben sich die Elemente alle in eine Zeile und nehmen nur so viel Platz, wie sie benötigen, um ihren Inhalt anzuzeigen.

### Die flex-grow Eigenschaft

Mit der `flex-grow` Eigenschaft auf einen positiven Integer gesetzt, kann das Flexelement, wenn verfügbarer Raum vorhanden ist, entlang der Hauptachse von seiner `flex-basis` wachsen. Ob sich das Element streckt, um den gesamten verfügbaren Raum auf dieser Achse zu beanspruchen, oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente auch wachsen dürfen und der Wert ihrer `flex-grow` Eigenschaften.

Jedes Element mit einem positiven Wert verbraucht einen Teil des verfügbaren Raums basierend auf seinem `flex-grow` Wert. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow` Wert von 1 geben würden, dann würde der verfügbare Raum im Flexcontainer gleichmäßig zwischen unseren Elementen aufgeteilt und sie würden sich ausdehnen, um den Container auf der Hauptachse zu füllen. Wenn wir unserem ersten Element einen `flex-grow` Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums würden dem ersten Element zugewiesen (100px von 200px im Beispiel oben) und 1 Teil den anderen beiden (jeweils 50px von insgesamt 200px).

### Die flex-shrink Eigenschaft

Wo die `flex-grow` Eigenschaft das Hinzufügen von Raum auf der Hauptachse behandelt, kontrolliert die `flex-shrink` Eigenschaft, wie Raum entfernt wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` auf einen positiven Integer gesetzt ist, dann kann das Element kleiner werden als die `flex-basis`. Wie bei `flex-grow` können verschiedene Werte zugewiesen werden, um zu bewirken, dass ein Element schneller schrumpft als andere – ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann auf seine {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird berücksichtigt, während die tatsächliche Menge an Schrumpfung berechnet wird, was bedeutet, dass `flex-shrink` das Potenzial hat, weniger konsistent in seinem Verhalten zu erscheinen als `flex-grow`. Wir werden uns daher eingehender ansehen, wie dieser Algorithmus funktioniert im Artikel [Steuerung der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Anteile. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` setzen und dann möchten, dass ein Element doppelt so schnell wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten aber auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzschreibweisen für die Flex-Eigenschaften

Sie werden sehr selten die `flex-grow`, `flex-shrink` und `flex-basis` Eigenschaften einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}} Kurzschreibweise kombiniert. Die `flex` Kurzschreibweise ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten erlaubt Ihnen, die verschiedenen Werte der Flex-Kurzschreibweise auszuprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Wenn Sie diesem einen positiven Wert geben, bedeutet das, dass das Element wachsen kann. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur wenn ihre gesamten Werte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als ihren Basiswert verwenden, um zu wachsen und zu schrumpfen.

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

Es gibt auch einige vordefinierte Kurzschreibwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese oft in Tutorials sehen und in vielen Fällen werden diese alles sein, was Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial` Wert ist ein [CSS-weit-Wert](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_values), der den Anfangswert für eine Eigenschaft repräsentiert. Das Setzen von `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langform-Eigenschaften zurück, was dasselbe ist wie `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, daher werden Elemente nicht größer als ihre `flex-basis` Größe. Der Anfangswert von `flex-shrink` ist `1`, so dass Elemente, wenn nötig, schrumpfen können, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine auf dem Element in der Hauptdimension gesetzte Größe, oder sie erhalten ihre Größe aus der Größe des Inhalts.

Die Verwendung von `flex: auto` ist dasselbe wie die Verwendung von `flex: 1 1 auto`; dies ähnelt `flex: initial`, außer dass die Elemente wachsen und den Container auch füllen können, sowie, wenn nötig, schrumpfen.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flexelemente. Es ist so, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können nicht wachsen oder schrumpfen und werden mit Flexbox mit einer `flex-basis` von `auto` angeordnet.

Die Kurzschreibweise, die Sie oft in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies entspricht dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter, jeweils. Die Elemente erhalten eine Mindestgröße aufgrund von `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink` Wert von `1` redundant, da die Elemente mit der Mindestgröße beginnen – sie erhalten keine Größe, die dazu führen könnte, dass sie den Flexcontainer überlaufen.

Versuchen Sie diese Kurzschreibwerte im Live-Beispiel unten.

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

Ein wesentliches Merkmal von Flexbox ist die Fähigkeit, Elemente auf der Haupt- und Kreuzachse auszurichten und zu rechtfertigen sowie Raum zwischen den Flexelementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flexcontainer gesetzt werden, nicht auf die Elemente selbst.

### align-items

Die {{cssxref("align-items")}} Eigenschaft richtet alle Flexelemente auf der Kreuzachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch`, was der Grund ist, warum Flexelemente standardmäßig auf die Höhe des Flexcontainers strecken (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der auf den Flexcontainer selbst gesetzten Größe kommen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flexcontainers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Versuchen Sie dies im Live-Beispiel — ich habe dem Flexcontainer eine Höhe gegeben, damit Sie sehen können, wie sich die Elemente im Container bewegen können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf folgende setzen:

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

Das `align-items` wird auf den Flexcontainer gesetzt und beeinflusst alle Flexelemente. Wenn Sie ein Flexelement anders ausrichten möchten als andere, können Sie die Eigenschaft {{cssxref("align-self")}} auf dem Flexelement selbst setzen.

### justify-content

Die {{cssxref("justify-content")}} Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, in der Richtung, in die `flex-direction` den Fluss gesetzt hat. Der Anfangswert ist `flex-start`, was die Elemente an der Startkante des Containers ausrichtet, aber Sie könnten auch den Wert auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Platz, nachdem die Elemente angeordnet wurden, gleichmäßig zwischen den Elementen zu verteilen, sodass es einen gleichen Abstand zwischen jedem Element gibt. Um einen gleichen Abstand rechts und links (oder oben und unten bei Spalten) jedes Elements zu erzeugen, verwenden Sie den Wert `space-around`. Mit `space-around` haben Elemente einen halben Abstand an beiden Enden. Oder, um Elemente mit gleichem Abstand um sie herum zu erzeugen, verwenden Sie den Wert `space-evenly`. Mit `space-evenly` haben Elemente einen vollen Abstand an beiden Enden.

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

Der Artikel [Ausrichtung von Elementen in einem Flexcontainer](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften ausführlicher, um ein besseres Verständnis davon zu haben, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in der Mehrheit der Anwendungsfälle nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird bei Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items) Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`. Wenn sie auf einem Flexcontainer gesetzt ist, setzt sie die Ausrichtung, jedoch nicht die Rechtfertigung, da `justify-items` bei Flexbox ignoriert wird.

Es gibt eine andere Kurzschreibweise, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft wirkt sich nur auf Flexcontainer aus, die umgebrochen werden, und wird in [Ausrichtung von Elementen in einem Flexcontainer](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) diskutiert.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis für die grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir uns ansehen, [wie diese Spezifikation sich auf andere Teile von CSS bezieht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
