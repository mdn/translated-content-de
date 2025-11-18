---
title: Grundkonzepte von Flexbox
short-title: Basic concepts
slug: Web/CSS/Guides/Flexible_box_layout/Basic_concepts
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

Das [Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout)-Modul (in der Regel als Flexbox bezeichnet) ist ein eindimensionales Layoutmodell zur Verteilung von Platz zwischen Elementen und umfasst zahlreiche Ausrichtungsfähigkeiten. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir im weiteren Verlauf dieser Leitfäden genauer untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox das Layout jeweils in einer Dimension behandelt — entweder als Zeile oder als Spalte. Dies steht im Gegensatz zum zweidimensionalen Modell des [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout), das Spalten und Zeilen gemeinsam steuert.

## Die beiden Achsen von Flexbox

Wenn Sie mit Flexbox arbeiten, müssen Sie in Bezug auf zwei Achsen denken — die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}}-Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft dazu senkrecht. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher lohnt es sich, zu verstehen, wie sie von Anfang an funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wählen Sie `row` oder `row-reverse`, läuft Ihre Hauptachse in der **Inline-Richtung** entlang der Zeile.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Zeile in der Inline-Richtung.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, läuft Ihre Hauptachse in der **Block-Richtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Daher, wenn Ihr `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Querachse entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Start- und Endlinien

Ein weiterer wichtiger Punkt ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox nimmt nicht einfach an, dass alle Textzeilen oben links in einem Dokument beginnen und sich zur rechten Seite hin bewegen, wobei neue Zeilen untereinander erscheinen. Stattdessen unterstützt es alle Schreibmodi wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values).

Sie können [mehr über das Verhältnis zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung sollte jedoch helfen, zu verstehen, warum wir nicht von links und rechts, oben und unten sprechen, wenn wir die Richtung beschreiben, in der unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich auf Englisch arbeite, befindet sich der Anfangsrand der Hauptachse links, der Endrand rechts.

![Beim Arbeiten in Englisch befindet sich der Start des Rands links.](basics5.svg)

Wenn ich auf Arabisch arbeite, befände sich der Anfangsrand meiner Hauptachse rechts und der Endrand links.

![Der Startrand in einer RTL-Sprache befindet sich rechts.](basics6.svg)

In beiden Fällen befindet sich der Startrand der Querachse am oberen Rand des Flex-Containers und der Endrand am unteren Rand, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einiger Zeit wird es selbstverständlich, über Anfang und Ende statt über links und rechts nachzudenken, und es wird Ihnen nützlich sein, wenn Sie sich mit anderen Layout-Methoden wie CSS Grid Layout befassen, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox gestaltet wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}}-Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst inline oder in einem Blockformatierungskontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Ausgangswerte

Wie bei allen Eigenschaften in CSS sind einige Ausgangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers folgendermaßen verhält:

- Elemente werden in einer Zeile angezeigt (der Standardwert der {{cssxref("flex-direction")}}-Eigenschaft ist `row`).
- Die Elemente beginnen am Startrand der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptdimension aus, sondern können schrumpfen (der Standardwert der {{cssxref("flex-grow")}}-Eigenschaft eines Flex-Elements ist `0`, und der Standardwert der {{cssxref("flex-shrink")}}-Eigenschaft ist `1`).
- Die Elemente dehnen sich auf die Größe der Querachse aus (der Standardwert der {{cssxref("align-items")}}-Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}}-Eigenschaft eines Flex-Elements ist `auto`. Das bedeutet, dass es im horizontalen Schreibmodus dem {{cssxref("width")}} des Flex-Elements und im vertikalen Schreibmodus dem {{cssxref("height")}} des Flex-Elements entspricht. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird stattdessen der `flex-basis`-Wert von `content` verwendet.
- Alle Elemente befinden sich in einer einzigen Zeile (der Standardwert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`), wobei sie ihren Container überlaufen, wenn ihre kombinierte `width`/`height` die `width`/`height` des enthaltenen Elements überschreitet.

Das Ergebnis davon ist, dass sich alle Ihre Elemente in einer Zeile ausrichten und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umbrochen, sondern stattdessen überlaufen. Wenn einige Elemente höher sind als andere, erstrecken sich alle Elemente über die gesamte Länge der Querachse.

Sie können im folgenden Livedemonstration sehen, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

Durch das Hinzufügen der {{cssxref("flex-direction")}}-Eigenschaft zum Flex-Container können wir die Richtung ändern, in der unsere Flex-Elemente angezeigt werden. Das Festlegen von `flex-direction: row-reverse` behält die Elemente in der Zeile bei, jedoch werden die Start- und Endlinien vertauscht.

Wenn wir `flex-direction` in `column` ändern, wechselt die Hauptachse und unsere Elemente werden jetzt in einer Spalte angezeigt. Setzen Sie `column-reverse`, und die Start- und Endlinien werden erneut vertauscht.

Die folgende Livedemonstration hat `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

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

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, dass Flex-Elemente über mehrere Zeilen umgebrochen werden. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede fehlende Verteilung erfolgt über jede Zeile, ohne Bezugnahme auf die vorhergehenden oder nachfolgenden Zeilen.

Um ein Umbruchverhalten zu bewirken, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, brechen sie in eine weitere Zeile um. Die folgende Livedemonstration enthält Elemente, denen eine `width` zugewiesen wurde. Die Gesamtlänge der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, brechen die Elemente auf mehrere Zeilen um. Wenn Sie es auf `nowrap` setzen, was der Ausgangswert ist, werden sie sich verkleinern, um in den Container zu passen. Sie verkleinern sich, weil sie die ursprünglichen Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, die es den Elementen ermöglicht zu schrumpfen. Die Verwendung von `nowrap` würde einen [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht schrumpfen könnten oder nicht genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umbrechen von Flex-Elementen im Leitfaden [Beherrschung der Umbrüche von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items).

## Die flex-flow Kurzschrift

Sie können die zwei Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Kurzschrift zusammenfassen.

Im folgenden Livedemonstration versuchen Sie, den ersten Wert auf einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse` - und ändern Sie auch den zweiten Wert in `wrap` und `nowrap`.

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

Um die Inline-Größe jedes Flex-Elements zu steuern, richten wir sie direkt über drei Eigenschaften an:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden einen kurzen Blick auf diese Eigenschaften unten werfen, aber wenn Sie umfassendere Informationen wünschen, schauen Sie sich den Leitfaden [Kontrolle der Verhältnisse von Flex-Elementen auf der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) an.

Bevor wir diese Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raums** berücksichtigen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist die Art und Weise zu ändern, wie verfügbarer Platz zwischen unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns die Ausrichtung von Elementen ansehen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann ist der Platz, den wir zum Anordnen unserer Elemente benötigen, 300 Pixel. Das lässt 200 Pixel verfügbaren Platz übrig. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Platz nach dem letzten Element einfügen.

![Dieser Flex-Container hat verfügbaren Platz nach dem Anordnen der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Platz füllen, dann müssen wir eine Methode zur Verteilung des verbleibenden Platzes zwischen den Elementen haben. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es uns, zu bestimmen, wie dieser verfügbare Platz unter den verwandten Flex-Elementen verteilt werden soll.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert die Größe dieses Elements in Bezug auf den Platz, den es als verfügbaren Raum lässt. Der anfängliche Wert dieser Eigenschaft ist `auto` — in diesem Fall schaut der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als Flex-Basis verwendet. Deshalb, wenn wir nur `display: flex` auf dem Elternteil deklarieren, um Flex-Elemente zu erstellen, bewegen sich alle Elemente in eine Zeile und benötigen nur so viel Platz, wie sie benötigen, um ihren Inhalt anzuzeigen.

### Die flex-grow Eigenschaft

Mit der `flex-grow`-Eigenschaft, die auf einen positiven Integer gesetzt ist, kann das Flex-Element, wenn dort verfügbarer Raum ist, entlang der Hauptachse von seiner `flex-basis` aus wachsen. Ob sich das Element ausdehnt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente ebenfalls wachsen dürfen und vom Wert ihrer `flex-grow`-Eigenschaften.

Jedes Element mit einem positiven Wert beansprucht einen Teil des verfügbaren Raums basierend auf ihrem `flex-grow`-Wert. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow`-Wert von 1 geben, würde der verfügbare Platz im Flex-Container gleichmäßig zwischen unseren Elementen aufgeteilt werden, und sie würden sich auf der Hauptachse zum Füllen des Containers ausdehnen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, ergeben sich insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element zugewiesen (100px von 200px im Fall des obigen Beispiels) und den anderen jeweils ein Teil (50px je von den insgesamt 200px).

### Die flex-shrink Eigenschaft

Während die `flex-grow`-Eigenschaft das Hinzufügen von Platz auf der Hauptachse behandelt, steuert die `flex-shrink`-Eigenschaft, wie er entfernt wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente zu platzieren, und `flex-shrink` auf einen positiven Integer gesetzt ist, dann kann das Element kleiner als die `flex-basis` werden. Wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um dazu zu führen, dass ein Element schneller schrumpft als andere — ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister mit niedrigeren Werten.

Ein Element kann auf seine {{cssxref("min-content")}}-Größe schrumpfen. Diese Mindestgröße wird beim Berechnen der tatsächlichen Schrumpfung berücksichtigt, was bedeutet, dass `flex-shrink` potenziell weniger konsistent in seinem Verhalten als `flex-grow` erscheint. Daher werden wir einen detaillierteren Blick darauf werfen, wie dieser Algorithmus im Artikel [Kontrolle der Verhältnisse von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) funktioniert.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` setzen und dann möchten, dass ein Element mit doppelter Rate wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzschriftwerte für die Flex-Eigenschaften

Sie werden selten die `flex-grow`-, `flex-shrink`- und `flex-basis`-Eigenschaften einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}}-Kurzschrift kombiniert. Die `flex`-Kurzschrift ermöglicht Ihnen das Setzen der drei Werte in dieser Reihenfolge — `flex-grow`, `flex-shrink`, `flex-basis`.

Die Livedemonstration unten ermöglicht es Ihnen, die verschiedenen Werte der Flex-Kurzschrift zu testen; denken Sie daran, dass der erste Wert `flex-grow` ist. Einem positiven Wert zu geben bedeutet, dass das Element wachsen kann. Der zweite Wert ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur wenn ihre Gesamtwerte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als Basiswert verwenden, von dem aus sie wachsen und schrumpfen können.

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

Es gibt auch einige vordefinierte Kurzschriftwerte, die die meisten Anwendungsfälle abdecken. Sie werden häufig in Tutorials verwendet, und in vielen Fällen sind diese alles, was Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der Wert `initial` ist ein [CSS-weiter Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords), das den Ausgangswert für eine Eigenschaft darstellt. Das Festlegen von `flex: initial` setzt das Element auf die [Ausgangswerte](#ausgangswerte) der drei Langschrifteigenschaften zurück, was das gleiche ist wie `flex: 0 1 auto`. Der Ausgangswert von `flex-grow` ist `0`, sodass Elemente nicht größer als ihre `flex-basis`-Größe wachsen werden. Der Ausgangswert von `flex-shrink` ist `1`, sodass Elemente schrumpfen können, wenn sie es müssen, anstatt zu überlaufen. Der Ausgangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine Größe, die auf dem Element in der Hauptdimension festgelegt ist, oder sie erhalten ihre Größe aus der Inhaltsgröße.

Die Verwendung von `flex: auto` ist dasselbe wie die Verwendung von `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container füllen können, sowie schrumpfen, wenn nötig.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Elemente. Es ist, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können nicht wachsen oder schrumpfen und werden mit einer `flex-basis` von `auto` unter Verwendung von Flexbox layoutet.

Die Kurzschrift, die Sie häufig in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies entspricht dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente erhalten eine Mindestgröße aufgrund von `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink`-Wert von `1` redundant, da die Elemente mit einer Mindestgröße beginnen — sie erhalten keine Größe, die dazu führen könnte, dass sie den Flex-Container überlaufen.

Versuchen Sie diese Kurzschriftwerte in der Livedemonstration unten.

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

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf der Haupt- und Querachse auszurichten und zu rechtfertigen und den Platz zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf dem Flex-Container eingestellt sind, nicht auf den Elementen selbst.

### align-items

Die {{cssxref("align-items")}}-Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Ausgangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum sich Flex-Elemente standardmäßig auf die Höhe des Flex-Containers dehnen (oder auf die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der festgelegten Größe auf dem Flex-Container selbst kommen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach auf `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Versuchen Sie dies in der Livedemonstration — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente innerhalb des Containers verschoben werden können. Schauen Sie, was passiert, wenn Sie den Wert von align-items einstellen auf:

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

Die `align-items`-Eigenschaft wird auf dem Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders als die anderen ausrichten möchten, können Sie {{cssxref("align-self")}} auf dem Flex-Element einstellen.

### justify-content

Die {{cssxref("justify-content")}}-Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, die Richtung, in der `flex-direction` den Fluss festgelegt hat. Der Ausgangswert ist `flex-start`, was die Elemente am Anfang des Containers ausrichten wird, aber Sie könnten auch den Wert auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, nachdem die Elemente layoutiert wurden, zu verwenden, und ihn gleichmäßig zwischen den Elementen aufzuteilen, sodass zwischen jedem Element der gleiche Raum vorhanden ist. Um einen gleichen Raum an der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements zu haben, verwenden Sie den Wert `space-around`. Bei `space-around` haben die Elemente einen halben Raum an beiden Enden. Oder um Elemente mit gleichen Abständen um sie herum zu platzieren, verwenden Sie den Wert `space-evenly`. Bei `space-evenly` haben die Elemente einen vollständigen Raum an beiden Enden.

Versuchen Sie die folgenden Werte von `justify-content` in der Livedemonstration:

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

Der Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) untersucht diese Eigenschaften ausführlicher, um ein besseres Verständnis dafür zu erlangen, wie sie funktionieren. Diese einfachen Beispiele sind jedoch in der Mehrheit der Anwendungsfälle nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/Reference/Properties/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/Reference/Properties/place-items)-Eigenschaft ist eine Kurzschrift für `align-items` und `justify-items`. Wenn sie auf einem Flex-Container gesetzt ist, wird die Ausrichtung, aber nicht die Rechtfertigung, eingestellt, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine andere Kurzschrift-Eigenschaft, [`place-content`](/de/docs/Web/CSS/Reference/Properties/place-content), die die {{cssxref("align-content")}}- und `justify-content`-Eigenschaften definiert. Die `align-content`-Eigenschaft wirkt sich nur auf Flex-Container aus, die umbrechen, und wird im Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) besprochen.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis für die Grundfunktionen von Flexbox haben. Im nächsten Artikel werden wir uns anschauen, [wie diese Spezifikation in Beziehung zu anderen Teilen von CSS steht](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods).
