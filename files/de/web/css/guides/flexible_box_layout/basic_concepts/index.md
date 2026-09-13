---
title: Grundkonzepte von Flexbox
short-title: Basic concepts
slug: Web/CSS/Guides/Flexible_box_layout/Basic_concepts
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

Das [Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout) Modul (üblicherweise als Flexbox bezeichnet) ist ein eindimensionales Layoutmodell zur Verteilung von Raum zwischen Elementen und beinhaltet zahlreiche Ausrichtungsfähigkeiten. Dieser Artikel bietet einen Überblick über die Hauptmerkmale von Flexbox, die wir in den restlichen Leitfäden detaillierter erkunden werden.

Wenn wir Flexbox als eindimensional beschreiben, beziehen wir uns darauf, dass Flexbox das Layout in einer Dimension auf einmal behandelt — entweder als Zeile oder als Spalte. Dies kann im Kontrast zum zweidimensionalen Modell des [CSS Grid Layouts](/de/docs/Web/CSS/Guides/Grid_layout) stehen, das Spalten und Zeilen zusammen kontrolliert.

## Die beiden Achsen von Flexbox

Beim Arbeiten mit Flexbox müssen Sie in Bezug auf zwei Achsen denken — die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}} Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher ist es sinnvoll, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, welche vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Zeile in **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse entlang der Zeile in der Inline-Richtung.](basics1.svg)

Entscheiden Sie sich für `column` oder `column-reverse`, verläuft Ihre Hauptachse in **Block-Richtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Daher gilt: Wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` gesetzt ist, verläuft die Querachse entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Start- und Endlinien

Ein weiterer wichtiger Bereich des Verständnisses ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox geht nicht einfach davon aus, dass alle Textzeilen am oberen linken Rand eines Dokuments beginnen und sich nach rechts bewegen, während neue Zeilen untereinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie auch andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/Guides/Logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods#writing_modes) in einem späteren Artikel, aber die folgende Beschreibung sollte helfen zu erklären, warum wir nicht von links und rechts und oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich in Englisch arbeite, wird die Startkante der Hauptachse links sein, das Endkante rechts.

![In Englisch ist die Startkante links.](basics5.svg)

Wenn ich in Arabisch arbeite, wird die Startkante meiner Hauptachse rechts sein und die Endkante links.

![Die Startkante in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen ist die Startkante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird es natürlich, über Start und Ende statt über links und rechts nachzudenken, und das wird Ihnen bei der Arbeit mit anderen Layoutmethoden, wie CSS Grid Layout, nützlich sein, die den gleichen Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox layoutet wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}} Eigenschaft des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kinder dieses Containers zu **Flex-Items**. Sie können explizit steuern, ob der Container selbst in einem Inline- oder Blockformatierungskontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Block-Level-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich die Inhalte eines neuen Flex-Containers auf folgende Weise verhalten:

- Elemente werden in einer Reihe angezeigt (der Standardwert der {{cssxref("flex-direction")}} Eigenschaft ist `row`).
- Die Elemente beginnen von der Startkante der Hauptachse.
- Die Elemente dehnen sich nicht in der Hauptachse, können aber schrumpfen (der Standardwert der {{cssxref("flex-grow")}} Eigenschaft eines Flex-Items ist `0` und der Standardwert der {{cssxref("flex-shrink")}} Eigenschaft ist `1`).
- Die Elemente werden sich dehnen, um die Größe der Querachse zu füllen (der Standardwert der {{cssxref("align-items")}} Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}} Eigenschaft eines Flex-Items ist `auto`. Das bedeutet, dass es in jedem Fall gleichbedeutend mit der {{cssxref("width")}} des Flex-Items im horizontalen Schreibmodus und der {{cssxref("height")}} des Flex-Items im vertikalen Schreibmodus sein wird. Wenn die entsprechende `width`/`height` ebenfalls auf `auto` gesetzt ist, wird der `content`-Wert von `flex-basis` stattdessen verwendet.
- Alle Elemente werden in einer einzigen Zeile sein (der Standardwert der {{cssxref("flex-wrap")}} Eigenschaft ist `nowrap`), und überschreiten ihren Container, wenn ihre kombinierte `width`/`height` die `width`/`height` des beinhaltenden Elements übersteigt.

Das Ergebnis davon ist, dass sich Ihre Elemente alle in einer Zeile ausrichten werden, indem sie die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umbrechen, sondern vielmehr überlaufen. Wenn einige Elemente höher als andere sind, werden sich alle Elemente entlang der gesamten Länge der Querachse strecken.

Im lebendigen Beispiel unten können Sie sehen, wie dies aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und die Elemente zu bearbeiten oder neue Elemente hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

### Ändern von flex-direction

Durch Hinzufügen der {{cssxref("flex-direction")}} Eigenschaft zum Flex-Container können wir die Richtung ändern, in der unsere Flex-Elemente angezeigt werden. Wenn `flex-direction: row-reverse` gesetzt ist, werden die Elemente entlang der Zeile angezeigt, jedoch sind die Start- und Endlinien vertauscht.

Wenn wir `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente werden nun in einer Spalte angezeigt. Bei `column-reverse` werden die Start- und Endlinien erneut vertauscht.

Das lebendige Beispiel unten hat `flex-direction` auf `row-reverse` gesetzt. Versuchen Sie die anderen Werte — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

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

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen zu verteilen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jegliche Raumverteilung wird über jede Zeile hinweg erfolgen, ohne Bezug zu den vorherigen oder nachfolgenden Zeilen.

Um Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit einem Wert von `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, brechen sie auf eine andere Zeile um. Das lebhafte Beispiel unten enthält Elemente, denen eine `width` zugewiesen wurde. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, brechen die Elemente über mehrere Zeilen um. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, werden sie sich an den Container anpassen. Sie schrumpfen, weil sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, das es den Elementen ermöglicht zu schrumpfen. Das Verwenden von `nowrap` würde einen [Overflow](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht schrumpfen können oder nicht klein genug schrumpfen können, um zu passen.

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

Erfahren Sie mehr über das Umwickeln von Flex-Elementen im Leitfaden [Beherrschen des Umwickelns von Flex-Elementen](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items).

## Das flex-flow Shorthand

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Shorthand kombinieren.

Im lebhaften Beispiel unten, versuchen Sie den ersten Wert in einem der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten in `wrap` und `nowrap`.

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

## Eigenschaften auf Flex-Items anwenden

Um die Inline-Größe jedes Flex-Items zu steuern, sprechen wir sie direkt über drei Eigenschaften an:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden uns diese Eigenschaften kurz ansehen, aber wenn Sie umfassendere Informationen möchten, schauen Sie sich den Leitfaden [Kontrollieren der Verhältnisse von Flex-Items auf der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) an.

Bevor wir diesen Eigenschaften einen Sinn geben können, müssen wir das Konzept des **verfügbaren Raums** betrachten. Was wir tun, wenn wir die Werte dieser Flex-Eigenschaften ändern, ist die Art zu ändern, wie verfügbarer Raum unter unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raums ist auch wichtig, wenn wir uns die Ausrichtung von Elementen ansehen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann ist der Platz, den wir benötigen, um unsere Elemente anzuordnen, 300 Pixel. Das lässt 200 Pixel verfügbaren Raum übrig. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element belassen.

![Dieser Flex-Container hat verfügbaren Raum nach der Anordnung der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum füllen, dann brauchen wir eine Methode, um den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex` Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, zu diktieren, wie dieser verfügbare Raum unter den Geschwister-Flex-Items verteilt werden sollte.

### Die flex-basis Eigenschaft

Das `flex-basis` definiert die Größe dieses Elements in Bezug auf den Raum, den es als verfügbaren Raum belässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall schaut der Browser, ob das Element eine Größe hat. In dem obigen Beispiel haben alle Elemente eine Breite von 100 Pixel. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als flex-basis verwendet. Deshalb, wenn wir einfach `display: flex` auf dem Elternteil erklären, um Flex-Elemente zu erstellen, bewegen sich die Elemente alle in eine Reihe und nehmen nur so viel Platz ein, wie sie benötigen, um ihre Inhalte darzustellen.

### Die flex-grow Eigenschaft

Mit der `flex-grow` Eigenschaft auf eine positive Ganzzahl gesetzt, kann das Flex-Item, wenn verfügbarer Raum vorhanden ist, entlang der Hauptachse von seiner `flex-basis` aus wachsen. Ob sich das Element streckt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen, oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob auch die anderen Elemente wachsen dürfen und von den Werten ihrer `flex-grow` Eigenschaften.

Jedes Element mit einem positiven Wert verbraucht einen Teil des verfügbaren Raums basierend auf seinem `flex-grow` Wert. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow` Wert von 1 geben, dann wird der verfügbare Raum im Flex-Container gleichmäßig unter unseren Elementen aufgeteilt und sie würden sich entlang der Hauptachse bis zur Größe des Containers strecken. Wenn wir unserem ersten Element einen `flex-grow` Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raums werden dem ersten Element zugewiesen (100px von 200px im Fall des obigen Beispiels) und jeweils 1 Teil für die beiden anderen (jeweils 50px von den insgesamt 200px).

### Die flex-shrink Eigenschaft

Wo die `flex-grow` Eigenschaft sich mit dem Hinzufügen von Raum auf der Hauptachse beschäftigt, kontrolliert die `flex-shrink` Eigenschaft, wie er weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente zu arrangieren, und `flex-shrink` auf eine positive Ganzzahl gesetzt ist, dann kann das Element kleiner als die `flex-basis` werden. Wie bei `flex-grow`, können verschiedene Werte zugewiesen werden, um zu bewirken, dass ein Element schneller schrumpft als andere — ein Element mit einem höheren Wert für `flex-shrink` schrumpft schneller als seine Geschwister mit niedrigeren Werten.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird bei der Berechnung des tatsächlichen Schrumpfungsbetrags berücksichtigt, was bedeutet, dass `flex-shrink` das Potenzial hat, weniger konsistent als `flex-grow` im Verhalten zu erscheinen. Wir werden daher einen detaillierteren Blick darauf werfen, wie dieser Algorithmus im Artikel [Kontrollieren der Verhältnisse von Items entlang der Hauptachse](/de/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios) funktioniert.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` gesetzt hätten und dann ein Element mit doppelter Rate wachsen lassen möchten, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Shorthand-Werte für die Flex-Eigenschaften

Sie werden sehr selten die `flex-grow`, `flex-shrink` und `flex-basis` Eigenschaften einzeln verwendet sehen; stattdessen werden sie in der {{cssxref("flex")}} Shorthand kombiniert. Die `flex` Shorthand ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Im lebhaften Beispiel unten können Sie die verschiedenen Werte der flex Shorthand ausprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Indem Sie diesem einen positiven Wert geben, bedeutet das, dass das Element wachsen kann. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtwerte die Hauptachse überschreiten. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als Basiswert verwenden, von dem aus sie wachsen und sich verkleinern.

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

Es gibt auch einige vordefinierte Shorthand-Werte, die die meisten Anwendungsfälle abdecken. Sie werden diese häufig in Tutorials sehen, und in vielen Fällen sind dies alle Werte, die Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial` Wert ist ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/Reference/Values/Data_types#css-wide_keywords), das den Anfangswert für eine Eigenschaft darstellt. Wenn `flex: initial` eingestellt ist, wird das Element auf die [Anfangswerte](#anfangswerte) der drei Langformen-Eigenschaften zurückgesetzt, was dem gleichen entspricht wie `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, daher werden Elemente nicht größer als ihre `flex-basis` Größe wachsen. Der Anfangswert von `flex-shrink` ist `1`, daher können Elemente schrumpfen, wenn sie müssen, anstatt überzufließen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine auf das Element in der Hauptdimension gesetzte Größe oder sie erhalten ihre Größe aus der Inhaltsgröße.

Die Verwendung von `flex: auto` ist das gleiche wie die Verwendung von `flex: 1 1 auto`; dies ähnelt `flex: initial`, außer dass die Elemente wachsen und den Container füllen können, sowie schrumpfen, wenn nötig.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Items. Es ist, als ob Sie `flex: 0 0 auto` schreiben. Die Elemente können weder wachsen noch schrumpfen und werden mit Flexbox mit einer `flex-basis` von `auto` layoutet.

Die Shorthand, die Sie häufig in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies ist das gleiche wie das Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter, jeweils. Die Elemente erhalten eine Mindestgröße aufgrund `flex-basis: 0` und wachsen dann proportional um den verfügbaren Raum zu füllen. In diesem Fall ist der `flex-shrink` Wert von `1` redundant, weil die Elemente mit einer Mindestgröße beginnen — ihnen wird keine Größe gegeben, die sie dazu bringen könnte, den Flex-Container zu überfüllen.

Versuchen Sie diese Shorthand-Werte im lebhaften Beispiel unten.

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

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf den Haupt- und Querachsen auszurichten und zu rechtfertigen und Platz zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container gesetzt sind, nicht auf die Elemente selbst.

### align-items

Die {{cssxref("align-items")}} Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum Flex-Elemente standardmäßig auf die Höhe des Flex-Containers gestreckt werden (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der auf den Flex-Container selbst gesetzten Größe kommen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Probieren Sie dies im lebhaften Beispiel aus — Ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente im Inneren des Containers bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf:

- `stretch`
- `flex-start`
- `flex-end`
- `start`
- `end`
- `center`
- `baseline`
- `last baseline`

setzen.

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

Das `align-items` wird am Flex-Container eingestellt und betrifft alle Flex-Elemente. Wenn Sie ein Flex-Item anders als die anderen ausrichten möchten, können Sie das {{cssxref("align-self")}} auf dem Flex-Item setzen.

### justify-content

Die {{cssxref("justify-content")}} Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, die Richtung, in der `flex-direction` den Fluss gesetzt hat. Der Anfangswert ist `flex-start`, was die Elemente an die Startkante des Containers ausrichtet, aber Sie könnten auch den Wert auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum zu nehmen, nachdem die Elemente angeordnet wurden, und ihn gleichmäßig zwischen den Elementen aufzuteilen, sodass ein gleichmäßiger Abstand zwischen jedem Element entsteht. Um einen gleichmäßigen Abstand rechts und links (oder oben und unten für Spalten) von jedem Element zu verursachen, verwenden Sie den Wert `space-around`. Bei `space-around` haben Elemente an jedem Ende einen halben Größenabstand. Oder um Elemente einen gleichmäßigeren Raum um sie herum zu geben, verwenden Sie den Wert `space-evenly`. Bei `space-evenly` haben Elemente an jedem Ende einen vollständigen Größenabstand.

Probieren Sie die folgenden Werte von `justify-content` im lebhaften Beispiel aus:

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

Der Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) untersucht diese Eigenschaften in tieferer Weise, um ein besseres Verständnis davon zu erhalten, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die {{cssxref("justify-items")}} Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die {{cssxref("place-items")}} Eigenschaft ist eine Shorthand-Eigenschaft für `align-items` und `justify-items`. Wenn sie in einem Flex-Container eingestellt ist, wird sie die Ausrichtung, aber nicht die Rechtfertigung festlegen, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine andere Shorthand-Eigenschaft, {{cssxref("place-content")}}, die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft betrifft nur Flex-Container, die wRap, und wird in [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items) diskutiert.

## Nächste Schritte

Nach dem Lesen dieses Artikels sollten Sie ein Verständnis für die grundlegenden Merkmale von Flexbox haben. Im nächsten Artikel werden wir uns ansehen, [wie diese Spezifikation in Beziehung zu anderen Teilen von CSS steht](/de/docs/Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods).
