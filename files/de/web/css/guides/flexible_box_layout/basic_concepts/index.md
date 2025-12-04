---
title: Grundkonzepte des Flexbox
short-title: Basic concepts
slug: Web/CSS/Guides/Flexible_box_layout/Basic_concepts
l10n:
  sourceCommit: 24992dbafb481afe5063fd0988ddcfa248325c89
---

Das [Modul für die Gestaltung von flexiblen Boxen](/de/docs/Web/CSS/Guides/Flexible_box_layout) (meist als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Platz zwischen Elementen und umfasst zahlreiche Ausrichtungsfunktionen. Dieser Artikel bietet einen Überblick über die Hauptmerkmale von Flexbox, die wir in den weiteren Leitfäden ausführlicher untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass sich Flexbox jeweils auf ein einziges Layout in einer Dimension konzentriert – entweder als Reihe oder als Spalte. Dies steht im Gegensatz zum zweidimensionalen Modell des [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout), das Spalten und Reihen gemeinsam steuert.

## Die zwei Achsen von Flexbox

Bei der Arbeit mit Flexbox müssen Sie in Begriffen von zwei Achsen denken – der _Hauptachse_ und der _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}}-Eigenschaft definiert und die [Querachse](#die_querachse) verläuft dazu senkrecht. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, sodass es sich lohnt, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Sollten Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse in **Inline-Richtung**.

![Wenn flex-direction auf 'row' gesetzt ist, verläuft die Hauptachse in Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in **Block-Richtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf 'column' gesetzt ist, verläuft die Hauptachse in Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Querachse entlang der Spalten.

![Wenn flex-direction auf 'row' gesetzt ist, verläuft die Querachse in Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Reihen.

![Wenn flex-direction auf 'column' gesetzt ist, verläuft die Querachse in Inline-Richtung.](basics4.svg)

## Start- und Endlinien

Ein weiterer wichtiger Bereich des Verständnisses ist, dass Flexbox keinerlei Annahmen über den Schreibmodus des Dokuments macht. Flexbox nimmt nicht einfach an, dass alle Textzeilen am oberen linken Rand eines Dokuments beginnen und zur rechten Seite hin verlaufen, wobei neue Zeilen nacheinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung soll jedoch erklären, warum wir nicht über links und rechts sowie oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich auf Englisch arbeite, befindet sich die Startkante der Hauptachse links und die Endkante rechts.

![Bei Arbeiten auf Englisch befindet sich die Startkante links.](basics5.svg)

Wenn ich jedoch auf Arabisch arbeite, befände sich die Startkante meiner Hauptachse rechts und die Endkante links.

![Die Startkante in einer RTL-Sprache befindet sich rechts.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einiger Zeit wird es natürlich, über Start und Ende anstatt über links und rechts nachzudenken, was nützlich sein wird, wenn Sie mit anderen Layout-Methoden wie CSS Grid Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox gestaltet ist, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}}-Eigenschaft des Bereichs auf `flex`. Dadurch werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst im Inline- oder Block-Formatierungskontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers wie folgt verhält:

- Elemente werden in einer Reihe angezeigt (der Standardwert der Eigenschaft {{cssxref("flex-direction")}} ist `row`).
- Die Elemente beginnen an der Startkante der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptdimension aus, können jedoch schrumpfen (der Standardwert der Eigenschaft {{cssxref("flex-grow")}} eines Flex-Elements ist `0` und der Standardwert der Eigenschaft {{cssxref("flex-shrink")}} ist `1`).
- Die Elemente dehnen sich aus, um die Größe der Querachse auszufüllen (der Standardwert der Eigenschaft {{cssxref("align-items")}} ist `stretch`).
- Der Standardwert der Eigenschaft {{cssxref("flex-basis")}} eines Flex-Elements ist `auto`. Dies bedeutet, dass im horizontalen Schreibmodus jedem Flex-Element die {{cssxref("width")}} und im vertikalen Schreibmodus die {{cssxref("height")}} zugewiesen wird. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `content`-Wert von `flex-basis` verwendet.
- Alle Elemente werden in einer einzigen Reihe angezeigt (der Standardwert der Eigenschaft {{cssxref("flex-wrap")}} ist `nowrap`), und sie überlaufen ihren Container, wenn ihre kombinierte `width`/`height` die Breite/Höhe des enthaltenen Elements übersteigt.

Das Ergebnis ist, dass alle Ihre Elemente in einer Reihe ausgerichtet sind und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn mehr Elemente vorhanden sind als in den Container passen, werden sie nicht umbrechen, sondern überlaufen. Wenn einige Elemente höher sind als andere, erstrecken sich alle Elemente entlang der gesamten Länge der Querachse.

Im untenstehenden Live-Beispiel können Sie sehen, wie dies aussieht. Klicken Sie auf „Play“, um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

Indem wir die {{cssxref("flex-direction")}}-Eigenschaft dem Flex-Container hinzufügen, können wir die Richtung ändern, in der unsere Flex-Elemente angezeigt werden. Die Einstellung `flex-direction: row-reverse` lässt die Elemente weiterhin in der Reihe anzeigen, jedoch werden die Start- und Endlinien vertauscht.

Wenn wir `flex-direction` in `column` ändern, wechselt die Hauptachse und wir können die Elemente jetzt in einer Spalte anzeigen. Setzen Sie `column-reverse` und die Start- und Endlinien werden wieder vertauscht.

Im folgenden Live-Beispiel ist `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

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

Während Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg zu umbrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Raumverteilung erfolgt über jede Zeile hinweg, ohne Bezugnahme auf vorherige oder nachfolgende Zeilen.

Um das Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie in eine andere Zeile umbrochen. Das untenstehende Live-Beispiel enthält Elemente, denen eine `width`-Eigenschaft zugewiesen wurde. Die Gesamtbreite der Elemente ist zu groß für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, werden die Elemente über mehrere Zeilen umgebrochen. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, schrumpfen sie, um in den Container zu passen. Sie schrumpfen, weil sie die anfänglichen Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, die es den Elementen ermöglicht zu schrumpfen. Die Verwendung von `nowrap` würde ein [Overflow](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht schrumpfen könnten oder nicht klein genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umbrechen von Flex-Elementen im Leitfaden [Meistern des Umbrechens von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items).

## Die flex-flow Kurzschrift

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Kurzschrift kombinieren.

Im untenstehenden Live-Beispiel können Sie den ersten Wert in einen der erlaubten Werte für `flex-direction` ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und auch den zweiten in `wrap` und `nowrap`.

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

Um die Inline-Größe jedes Flex-Elements zu steuern, richten wir uns direkt an sie über drei Eigenschaften:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden einen kurzen Blick auf diese Eigenschaften unten werfen, aber wenn Sie umfassendere Informationen wünschen, schauen Sie sich den Leitfaden [Verhältnissteuerung von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) an.

Bevor wir diese Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raums** betrachten. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist die Art und Weise zu ändern, wie verfügbarer Raum zwischen unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir zur Ausrichtung unserer Elemente kommen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann ist der Platz, den wir benötigen, um unsere Elemente zu platzieren, 300 Pixel. Dies lässt 200 Pixel verfügbaren Raum. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element platzieren.

![Dieser Flex-Container verfügt über verfügbaren Platz nach dem Auslegen der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann brauchen wir eine Methode zur Verteilung des übrig gebliebenen Raums zwischen den Elementen. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, wie dieser verfügbare Raum unter den geschwisterlichen Flex-Elementen verteilt werden soll.

### Die flex-basis Eigenschaft

Der `flex-basis` definiert die Größe dieses Elements in Bezug auf den Raum, den es als verfügbaren Raum hinterlässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall schaut der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als flex-basis verwendet. Dies ist der Grund, warum, wenn wir einfach `display: flex` auf das übergeordnete Element setzen, um Flex-Elemente zu erstellen, die Elemente alle in eine Reihe gehen und nur so viel Platz einnehmen, wie sie benötigen, um ihre Inhalte anzuzeigen.

### Die flex-grow Eigenschaft

Mit der `flex-grow` Eigenschaft, die auf eine positive Ganzzahl gesetzt ist, kann das Flex-Element, wenn verfügbarer Raum vorhanden ist, entlang der Hauptachse von seinem `flex-basis` aus wachsen. Ob das Element sich dehnt, um allen verfügbaren Raum auf dieser Achse einzunehmen, oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente ebenfalls wachsen dürfen und dem Wert ihrer `flex-grow` Eigenschaften.

Jedes Element mit einem positiven Wert verbraucht einen Teil des verfügbaren Raums basierend auf seinem `flex-grow` Wert. Wenn wir allen in unserem obigen Beispiel einen `flex-grow` Wert von 1 geben würden, dann würde der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen aufgeteilt und sie würden sich bis zur Containerfüllung auf der Hauptachse dehnen. Wenn wir unserem ersten Element einen `flex-grow` Wert von 2 und den anderen Elementen jeweils einen Wert von 1 geben, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums würde dem ersten Element gegeben (100px von 200px im obigen Beispiel) und 1 Teil den anderen beiden (jeweils 50px von insgesamt 200px).

### Die flex-shrink Eigenschaft

Während die `flex-grow` Eigenschaft sich mit dem Hinzufügen von Raum auf der Hauptachse befasst, kontrolliert die `flex-shrink` Eigenschaft, wie er weggenommen wird. Wenn nicht genügend Platz im Container vorhanden ist, um unsere Elemente anzuzeigen, und `flex-shrink` auf eine positive Ganzzahl gesetzt ist, dann kann das Element kleiner als das `flex-basis` werden. Wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um eines der Elemente schneller schrumpfen zu lassen als die anderen – ein Element mit einem höheren Wert für `flex-shrink` wird schneller als seine Geschwister mit niedrigeren Werten schrumpfen.

Ein Element kann auf seine {{cssxref("min-content")}}-Größe schrumpfen. Diese Mindestgröße wird bei der Berechnung des tatsächlichen Schrumpfungsgrades berücksichtigt, was bedeutet, že `flex-shrink` potentiell weniger konsistent als `flex-grow` im Verhalten erscheinen kann. Wir werden uns daher die detaillierte Funktionsweise dieses Algorithmus im Artikel [Kontrolle der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) genauer ansehen.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` gesetzt hätten und dann wollten, dass ein Element doppelt so schnell wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Man könnte jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn man wollte.

### Kurzschreibwerte für die Flex-Eigenschaften

Sie werden sehr selten die `flex-grow`, `flex-shrink`, und `flex-basis` Eigenschaften einzeln verwendet sehen; stattdessen werden sie in der {{cssxref("flex")}} Kurzschrift zusammengefasst. Die `flex` Kurzschrift erlaubt Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten lässt Sie die verschiedenen Werte der flex Kurzschrift ausprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Wenn diesem ein positiver Wert zugewiesen wird, kann das Element wachsen. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse überfluten. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als ihre Basisgröße nutzen, um von dieser aus zu wachsen und zu schrumpfen.

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

Es gibt auch einige vordefinierte Kurzschreibwerte, die die meisten Anwendungsfälle abdecken. Sie werden oft in Tutorials verwendet, und in vielen Fällen sind dies alle, die Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial`-Wert ist ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords), das den Anfangswert für eine Eigenschaft darstellt. Die Einstellung `flex: initial` setzt das Element auf die [Anfangswerte](#anfangswerte) der drei Langschrift-Eigenschaften zurück, was dasselbe ist wie `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, daher werden Elemente nicht größer als ihre `flex-basis`-Größe wachsen. Der Anfangswert von `flex-shrink` ist `1`, sodass Elemente schrumpfen können, wenn sie müssen, anstatt überfließend. Der Anfangswert von `flex-basis` ist `auto`. Elemente nutzen entweder die auf dem Element in der Hauptdimension gesetzte Größe oder sie erhalten ihre Größe aus der Inhaltsgröße.

Die Verwendung von `flex: auto` ist dasselbe wie die Verwendung von `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container ausfüllen, sowie schrumpfen können, wenn nötig.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Elemente. Es ist, als ob Sie `flex: 0 0 auto` geschrieben haben. Die Elemente können weder wachsen noch schrumpfen und werden mit Flexbox mit einem `flex-basis` von `auto` angezeigt.

Die Kurzschrift, die Sie oft in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies ist das gleiche wie das Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente erhalten eine minimale Größe aufgrund von `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum auszufüllen. In diesem Fall ist der `flex-shrink` Wert von `1` redundant, da die Elemente mit minimaler Größe beginnen – sie erhalten keine Größe, die sie über den Flex-Container hinaus überlaufen lassen könnte.

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

## Ausrichtung, Rechtfertigung und Verteilung von freiem Raum zwischen Elementen

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf der Haupt- und Querachse auszurichten und zu rechtfertigen und Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container und nicht auf die Elemente selbst gesetzt werden.

### align-items

Die {{cssxref("align-items")}}-Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert dieser Eigenschaft ist `stretch`, weshalb Flex-Elemente standardmäßig bis zur Höhe des Flex-Containers gedehnt werden (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann vom höchsten Element im Container oder der festgelegten Größe des Flex-Containers kommen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start`, um die Elemente am Start des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Versuchen Sie dies im Live-Beispiel — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente innerhalb des Containers bewegt werden können. Probieren Sie aus, was passiert, wenn Sie den Wert von `align-items` auf folgende Werte setzen:

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

Die `align-items`-Eigenschaft wird auf den Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders als die anderen ausrichten möchten, können Sie das {{cssxref("align-self")}} auf das Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}}-Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, die durch `flex-direction` festgelegt ist. Der Anfangswert ist `flex-start`, was die Elemente an der Startkante des Containers anordnet, aber Sie könnten den Wert auch auf `flex-end` setzen, um sie am Ende zu ordnen, oder `center`, um sie in der Mitte anzuordnen.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, der nach der Anordnung der Elemente übrig bleibt, gleichmäßig zwischen den Elementen zu verteilen, sodass ein gleicher Abstand zwischen jedem Element besteht. Um einen gleichen Abstand rechts und links (oder oben und unten für Spalten) jedes Elements zu erzeugen, verwenden Sie den Wert `space-around`. Bei `space-around` haben die Elemente an jedem Ende einen halb so großen Abstand. Oder um sicherzustellen, dass Elemente gleichen Abstand um sich herum haben, verwenden Sie den Wert `space-evenly`. Bei `space-evenly` haben die Elemente an jedem Ende einen vollständig gleichgroßen Abstand.

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

Der Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) untersucht diese Eigenschaften eingehender, um ein besseres Verständnis ihrer Funktionsweise zu erlangen. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/Reference/Properties/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/Reference/Properties/place-items)-Eigenschaft ist eine Kurzform für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt ist, wird die Ausrichtung festgelegt, jedoch nicht die Rechtfertigung, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine weitere Kurzform-Eigenschaft, [`place-content`](/de/docs/Web/CSS/Reference/Properties/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content`-Eigenschaft wirkt sich nur auf Flex-Container aus, die umgebrochen werden, und wird im Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) behandelt.

## Nächste Schritte

Nachdem Sie diesen Artikel gelesen haben, sollten Sie ein Verständnis der grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel schauen wir uns an, [wie diese Spezifikation sich mit anderen Teilen von CSS verhält](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods).
