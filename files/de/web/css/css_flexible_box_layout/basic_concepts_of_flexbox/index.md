---
title: Grundkonzepte von Flexbox
short-title: Basic concepts
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Das Modul [Flexibler Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (häufig als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Platz zwischen Elementen und beinhaltet zahlreiche Ausrichtungsmöglichkeiten. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir in den weiteren Leitfäden detaillierter untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox das Layout immer nur in einer Dimension gleichzeitig verwaltet — entweder als Reihe oder als Spalte. Dies steht im Gegensatz zu dem zweidimensionalen Modell des [CSS Grid Layouts](/de/docs/Web/CSS/CSS_grid_layout), das Spalten und Reihen zusammen steuert.

## Die zwei Achsen von Flexbox

Bei der Arbeit mit Flexbox muss man in Bezug auf zwei Achsen denken — die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die Eigenschaft {{cssxref("flex-direction")}} definiert, und die [Querachse](#die_querachse) verläuft senkrecht zu dieser. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher lohnt es sich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Reihe in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Reihe in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in der **Block-Richtung** von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Daher verläuft die Querachse, wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Reihen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiteres wichtiges Verständnisgebiet ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments trifft. Flexbox nimmt nicht einfach an, dass alle Textzeilen am oberen linken Rand eines Dokuments beginnen und zur rechten Seite hin verlaufen, wobei neue Zeilen unter der vorhergehenden erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung sollte jedoch helfen zu erklären, warum wir nicht von links und rechts sowie oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich in Englisch arbeite, dann ist die Startkante der Hauptachse auf der linken Seite, die Endkante auf der rechten.

![Beim Arbeiten in Englisch ist die Startkante auf der linken Seite.](basics5.svg)

Wenn ich in Arabisch arbeiten würde, wäre die Startkante meiner Hauptachse auf der rechten Seite und die Endkante auf der linken.

![Die Startkante in einer RTL-Sprache ist auf der rechten Seite.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Querachse am oberen Rand des Flex-Containers und die Endkante am unteren Rand, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es zur Gewohnheit, über Start und Ende anstatt über links und rechts nachzudenken, was Ihnen bei der Arbeit mit anderen Layout-Methoden wie dem CSS Grid Layout, das die gleichen Muster befolgt, nützlich sein wird.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox-Layout gestaltet wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die Eigenschaft {{cssxref("display")}} des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit kontrollieren, ob der Container selbst im Inline- oder Block-Formatierungs-Kontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers in folgender Weise verhält:

- Elemente werden in einer Reihe dargestellt (der Standardwert der Eigenschaft {{cssxref("flex-direction")}} ist `row`).
- Die Elemente beginnen von der Startkante der Hauptachse.
- Die Elemente dehnen sich in der Hauptdimension nicht aus, können sich jedoch verkleinern (der Standardwert der {{cssxref("flex-grow")}}-Eigenschaft eines Flex-Elements ist `0` und der Standardwert der {{cssxref("flex-shrink")}}-Eigenschaft ist `1`).
- Die Elemente werden sich strecken, um die Größe der Querachse auszufüllen (der Standardwert der {{cssxref("align-items")}}-Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}}-Eigenschaft eines Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall gleich der {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus und der {{cssxref("height")}} des Flex-Elements im vertikalen Schreibmodus sein wird. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `flex-basis` `content` Wert verwendet.
- Alle Elemente werden in einer einzigen Reihe sein (der Standardwert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`), wobei sie ihren Container überlaufen, wenn ihre kombinierte `width`/`height` die `width`/`height` des enthaltenen Elements überschreitet.

Das Ergebnis davon ist, dass sich alle Ihre Elemente in einer Reihe aufstellen, wobei die Größe des Inhalts als ihre Größe in der Hauptachse verwendet wird. Wenn es mehr Elemente gibt, als in den Container passen, werden sie nicht umbrechen, sondern stattdessen überlaufen. Wenn einige Elemente höher sind als andere, werden sich alle Elemente entlang der gesamten Länge der Querachse strecken.

Im unten stehenden Live-Beispiel können Sie sehen, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das Anfangsverhalten von Flexbox auszuprobieren:

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

Das Hinzufügen der {{cssxref("flex-direction")}}-Eigenschaft zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Wenn Sie `flex-direction: row-reverse` setzen, bleiben die Elemente entlang der Reihe angezeigt, jedoch sind die Anfangs- und Endlinien umgekehrt.

Wenn wir `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente werden jetzt in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Anfangs- und Endlinien sind erneut umgekehrt.

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

Während Flexbox ein eindimensionales Modell ist, ist es möglich, dass Flex-Elemente über mehrere Zeilen hinweg umbrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Raumverteilung erfolgt über jede Zeile hinweg, ohne Bezug auf die vorhergehenden oder nachfolgenden Zeilen.

Um ein Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit einem Wert von `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie auf eine andere Zeile umgebrochen. Das Live-Beispiel unten enthält Elemente, denen eine `Width` gegeben wurde. Die Gesamtbreite der Elemente ist zu groß für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, werden die Elemente über mehrere Zeilen umgebrochen. Wenn Sie es auf `nowrap` setzen, was der Ausgangswert ist, dann verkleinern sie sich, um in den Container zu passen. Sie verkleinern sich, weil sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, was es den Elementen erlaubt, sich zu verkleinern. Die Verwendung von `nowrap` würde zu einem [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) führen, wenn die Elemente sich nicht verkleinern könnten oder nicht klein genug werden könnten, um hineinzupassen.

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

Erfahren Sie mehr über das Umbruchverhalten von Flex-Elementen in dem Leitfaden [Beherrschung des Umbruchs von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Die flex-flow Kurzform

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in die {{cssxref("flex-flow")}}-Kurzform kombinieren.

Im Live-Beispiel unten versuchen Sie, den ersten Wert auf einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie den zweiten auf `wrap` und `nowrap`.

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

Um die Inline-Größe jedes Flex-Elements zu kontrollieren, zielen wir direkt auf sie durch drei Eigenschaften ab:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden uns diese Eigenschaften unten kurz anschauen, aber wenn Sie umfassendere Informationen benötigen, werfen Sie einen Blick auf den Leitfaden [Kontrolle der Verhältnisse von Flex-Elementen auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir den Sinn dieser Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raums** betrachten. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist, die Art und Weise zu ändern, wie der verfügbare Raum auf unsere Elemente verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir zu schauen, wie wir Elemente ausrichten.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann benötigen wir 300 Pixel, um unsere Elemente anzuordnen. Das lässt 200 Pixel verfügbaren Raum. Wenn wir die Ausgangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element platzieren.

![Dieser Flex-Container hat verfügbaren Raum nach dem Anordnen der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann brauchen wir eine Methode, um den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es uns zu bestimmen, wie dieser verfügbare Raum zwischen den Geschwister-Flex-Elementen verteilt werden soll.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert, wie groß dieses Element in Bezug auf den Raum, den es als verfügbaren Raum lässt, ist. Der anfängliche Wert dieser Eigenschaft ist `auto` — in diesem Fall sieht der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixel. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als flex-basis verwendet. Deshalb bewegen sich die Elemente, wenn wir einfach `display: flex` auf dem übergeordneten Element deklarieren, um Flex-Elemente zu erstellen, alle in eine Reihe und nehmen nur so viel Platz wie nötig, um ihren Inhalt anzuzeigen.

### Die flex-grow Eigenschaft

Mit der auf einen positiven Ganzzahlwert gesetzten `flex-grow`-Eigenschaft kann das Flex-Element, wenn verfügbarer Raum vorhanden ist, entlang der Hauptachse von seinem `flex-basis` aus wachsen. Ob sich das Element entlang der Achse streckt, um den gesamten verfügbaren Raum in Anspruch zu nehmen, oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente ebenfalls wachsen dürfen und welchen Wert ihre `flex-grow`-Eigenschaften haben.

Jedes Element mit einem positiven Wert nimmt einen Teil des verfügbaren Raums basierend auf seinem `flex-grow`-Wert ein. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow`-Wert von 1 geben, dann würde der verfügbare Raum im Flex-Container gleichermaßen zwischen unseren Elementen aufgeteilt und sie würden sich entlang der Hauptachse strecken, um den Container zu füllen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, dann gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element gegeben (100px von 200px im Fall des obigen Beispiels) und jeweils 1 Teil den anderen beiden (jeweils 50px von den insgesamt 200px).

### Die flex-shrink Eigenschaft

Die `flex-shrink`-Eigenschaft bestimmt, wie Raum in der Hauptachse im Gegensatz zur `flex-grow`-Eigenschaft weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` auf eine positive Ganzzahl gesetzt ist, dann kann das Element kleiner als das `flex-basis` werden. Ähnlich wie `flex-grow` können verschiedene Werte zugewiesen werden, um ein Element schneller schrumpfen zu lassen als andere — ein Element mit einem höheren `flex-shrink`-Wert wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann auf seine {{cssxref("min-content")}}-Größe schrumpfen. Diese Mindestgröße wird berücksichtigt, während die tatsächliche Schrumpfungsmenge berechnet wird, was bedeutet, dass `flex-shrink` das Potenzial hat, weniger konsistent als `flex-grow` in seiner Wirkung zu erscheinen. Daher werden wir in dem Artikel [Kontrolle der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) genauer darauf eingehen, wie dieser Algorithmus funktioniert.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Verhältnisse. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` setzen und dann ein Element schneller wachsen lassen wollen, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzformwerte für die Flex-Eigenschaften

Sie werden selten die `flex-grow`, `flex-shrink` und `flex-basis`-Eigenschaften einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}}-Kurzform kombiniert. Die `flex`-Kurzform ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten ermöglicht es Ihnen, die verschiedenen Werte der flex-Kurzform zu testen; denken Sie daran, dass der erste Wert `flex-grow` ist. Das Geben eines positiven Wertes bedeutet, dass das Element wachsen kann. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als ihren Basiswert zum Wachsen und Schrumpfen verwenden.

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

Es gibt auch einige vordefinierte Kurzformwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese oft in Anleitungen sehen, und in vielen Fällen sind diese alles, was Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial`-Wert ist ein [CSS-weiter Schlüsselwort](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types#css-wide_keywords), das den Ausgangswert einer Eigenschaft darstellt. Die Einstellung `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langformen zurück, was dem gleichen entspricht wie `flex: 0 1 auto`. Der Ausgangswert von `flex-grow` ist `0`, sodass Elemente nicht größer als ihre `flex-basis`-Größe wachsen. Der Ausgangswert von `flex-shrink` ist `1`, sodass Elemente schrumpfen können, wenn sie müssen, anstatt überzulaufen. Der Ausgangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine auf das Element im Hauptmaß gesetzte Größe, oder sie erhalten ihre Größe aus der Inhaltsgröße.

Durch die Verwendung von `flex: auto` ist es so, als würde `flex: 1 1 auto` verwendet; dies ist ähnlich wie `flex: initial`, außer dass sich die Elemente ausdehnen und den Container ausfüllen können sowie schrumpfen, wenn nötig.

Durch die Verwendung von `flex: none` werden vollständig unflexible Flex-Elemente erstellt. Es ist, als ob Sie `flex: 0 0 auto` schreiben würden. Die Elemente können nicht wachsen oder schrumpfen und werden mit einem `flex-basis` von `auto` mit Flexbox angeordnet.

Die Kurzform, die Sie oft in Anleitungen sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies entspricht dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter, jeweils. Die Elemente erhalten eine Mindestgröße aufgrund von `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink`-Wert von `1` redundant, weil die Elemente mit Mindestgröße beginnen — sie bekommen keine Größe, die ihren Flex-Container überlaufen lassen würde.

Versuchen Sie diese Kurzformwerte im Live-Beispiel unten.

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

Ein wesentliches Merkmal von Flexbox ist die Fähigkeit, Elemente auf den Haupt- und Querachsen auszurichten und zu rechtfertigen und den Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container gesetzt werden, nicht auf die Elemente selbst.

### align-items

Die Eigenschaft {{cssxref("align-items")}} richtet alle Flex-Elemente auf der Querachse aus.

Der Ausgangswert dieser Eigenschaft ist `stretch` und ist der Grund, warum sich Flex-Elemente standardmäßig auf die Höhe des Flex-Containers erstrecken (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der auf den Flex-Container gesetzten Größe stammen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Versuchen Sie dies im Live-Beispiel — ich habe dem Flex-Container eine Höhe gegeben, sodass Sie sehen können, wie die Elemente im Container herumbewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf diese setzen:

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

Der `align-items` wird auf den Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders ausrichten möchten als andere, können Sie das {{cssxref("align-self")}} auf das Flex-Element setzen.

### justify-content

Die Eigenschaft {{cssxref("justify-content")}} wird verwendet, um die Elemente auf der Hauptachse auszurichten, die Richtung, in der `flex-direction` den Fluss gesetzt hat. Der Ausgangswert ist `flex-start`, was die Elemente an der Anfangskante des Containers ausrichtet, aber Sie könnten auch den Wert auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte des Containers auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, nachdem die Elemente ausgerichtet wurden, gleichmäßig zwischen die Elemente zu verteilen, sodass ein gleicher Abstand zwischen jedem Element entsteht. Um einen gleichen Abstand auf der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements zu verursachen, verwenden Sie den Wert `space-around`. Mit `space-around` haben die Elemente auf jeder Seite einen halben Platz. Oder, um Elemente mit gleichem Abstand um sie herum zu haben, verwenden Sie den Wert `space-evenly`. Mit `space-evenly` haben die Elemente auf jeder Seite gleich viel Platz.

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

Der Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften eingehender, um ein besseres Verständnis zu haben, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/Reference/Properties/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/Reference/Properties/place-items) Eigenschaft ist eine Kurzform für `align-items` und `justify-items`. Wenn sie auf einem Flex-Container gesetzt ist, wird sie die Ausrichtung, aber nicht die Rechtfertigung einstellen, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine andere Kurzform Eigenschaft, [`place-content`](/de/docs/Web/CSS/Reference/Properties/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft betrifft nur Flex-Container, die umbrechen, und wird in [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) diskutiert.

## Nächste Schritte

Nachdem Sie diesen Artikel gelesen haben, sollten Sie ein Verständnis der grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir uns anschauen, [wie diese Spezifikation in Beziehung zu anderen Teilen von CSS steht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
