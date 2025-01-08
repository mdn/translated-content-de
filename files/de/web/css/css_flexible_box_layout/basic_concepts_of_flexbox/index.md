---
title: Grundlegende Konzepte von Flexbox
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 88a4e50f8c9a31e6967dd3282cc1a913f7732e61
---

{{CSSRef}}

Das Modul [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) (häufig als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Platz zwischen Elementen und bietet zahlreiche Ausrichtungsfunktionen. Dieser Artikel gibt einen Überblick über die Hauptmerkmale der Flexbox, die wir in den weiteren Teilen dieser Leitfäden ausführlicher erkunden werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir damit, dass Flexbox Layouts jeweils in einer Dimension behandelt - entweder als Zeile oder als Spalte. Dies steht im Gegensatz zu dem zweidimensionalen Modell des [CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout), das Spalten und Zeilen zusammen steuert.

## Die beiden Achsen der Flexbox

Bei der Arbeit mit Flexbox müssen Sie in Bezug auf zwei Achsen denken – die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die {{cssxref("flex-direction")}}-Eigenschaft definiert, und die [Querachse](#die_querachse) verläuft senkrecht zur Hauptachse. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher lohnt es sich, sie von Anfang an zu verstehen.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Sollten Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse in der **Inline-Richtung** entlang der Zeile.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse in der Inline-Richtung entlang der Zeile.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in der **Block-Richtung**, von oben nach unten auf der Seite.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Daher verläuft die Querachse, wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` eingestellt ist, entlang der Spalten.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Anfangs- und Endlinien

Ein weiterer wichtiger Aspekt ist das Verständnis, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments trifft. Flexbox geht nicht automatisch davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und nach rechts laufen, wobei neue Zeilen untereinander erscheinen. Stattdessen unterstützt es alle Schreibmodi, ähnlich wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi erfahren](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; jedoch sollte die folgende Beschreibung helfen zu erklären, warum wir nicht von links und rechts sowie oben und unten sprechen, wenn wir die Richtung beschreiben, in die unsere Flex-Elemente fließen.

Wenn die `flex-direction` `row` ist und ich auf Englisch arbeite, dann befindet sich der Startpunkt der Hauptachse auf der linken Seite und das Endpunkt auf der rechten Seite.

![Bei der Arbeit auf Englisch liegt der Startpunkt links.](basics5.svg)

Wenn ich auf Arabisch arbeiten würde, wäre der Startpunkt meiner Hauptachse auf der rechten und der Endpunkt auf der linken Seite.

![Der Startpunkt in einer RTL-Sprache liegt rechts.](basics6.svg)

In beiden Fällen befindet sich der Startpunkt der Querachse oben im Flex-Container und das Endpunkt unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einiger Zeit wird es natürlich, in Bezug auf Anfang und Ende statt links und rechts zu denken, und wird Ihnen nützlich sein, wenn Sie mit anderen Layoutmethoden wie CSS-Grid-Layout arbeiten, die denselben Mustern folgen.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox layoutiert wird, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die {{cssxref("display")}}-Eigenschaft des Bereichs auf `flex`. Tun Sie dies, werden die direkten Kinder dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst im Inline- oder im Blockformatierungs-Kontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Blockebene-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers wie folgt verhält:

- Elemente werden in einer Reihe angezeigt (der Standardwert der {{cssxref("flex-direction")}}-Eigenschaft ist `row`).
- Die Elemente beginnen vom Startpunkt der Hauptachse.
- Die Elemente strecken sich nicht in der Hauptdimension, können aber schrumpfen (der Standardwert der {{cssxref("flex-grow")}}-Eigenschaft eines Flex-Elements ist `0` und der Standardwert der {{cssxref("flex-shrink")}}-Eigenschaft ist `1`).
- Die Elemente werden sich strecken, um die Größe der Querachse auszufüllen (der Standardwert der {{cssxref("align-items")}}-Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}}-Eigenschaft des Flex-Elements ist `auto`. Dies bedeutet, dass es in jedem Fall gleich dem {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus und dem {{cssxref("height")}} des Flex-Elements im vertikalen Schreibmodus entspricht. Wenn die entsprechende `Breite`/`Höhe` auch auf `auto` gesetzt ist, wird der `flex-basis` `content`-Wert stattdessen verwendet.
- Alle Elemente werden in einer einzigen Zeile sein (der Standardwert der {{cssxref("flex-wrap")}}-Eigenschaft ist `nowrap`), wobei sie ihren Container überlaufen, wenn ihre kombinierte `Breite`/`Höhe` die enthaltende Element `Breite`/`Höhe` übersteigt.

Das Ergebnis ist, dass alle Ihre Elemente in einer Reihe ausgerichtet werden, indem die Größe des Inhalts als ihre Größe in der Hauptachse verwendet wird. Wenn mehr Elemente vorhanden sind, als in den Container passen, werden sie nicht umbrechen, sondern stattdessen überlaufen. Wenn einige Elemente höher als andere sind, werden sich alle Elemente entlang der gesamten Länge der Querachse strecken.

Im unten stehenden Live-Beispiel können Sie sehen, wie das aussieht. Klicken Sie auf "Play", um das Beispiel im MDN Playground zu öffnen und bearbeiten Sie die Elemente oder fügen Sie neue hinzu, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

Durch Hinzufügen der {{cssxref("flex-direction")}}-Eigenschaft zum Flex-Container können wir die Richtung ändern, in der unsere Flex-Elemente angezeigt werden. Wenn `flex-direction: row-reverse` eingestellt wird, bleiben die Elemente entlang der Zeile angezeigt, jedoch werden die Anfangs- und Endlinien vertauscht.

Wenn wir `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente werden jetzt in einer Spalte angezeigt. Setzen Sie `column-reverse` und die Start- und Endlinien werden erneut vertauscht.

Das Live-Beispiel unten hat `flex-direction` auf `row-reverse` eingestellt. Versuchen Sie die anderen Werte — `row`, `column` und `column-reverse` — um zu sehen, was mit dem Inhalt passiert.

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

Während Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen zu umbrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jegliche Platzverteilung erfolgt über jede Zeile, ohne Bezug auf die vorherige oder nachfolgende Zeile.

Um ein Umbruchverhalten zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Jetzt, wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, brechen sie auf eine andere Zeile um. Im Live-Beispiel unten befinden sich Elemente, denen eine `Breite` zugewiesen wurde. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, brechen die Elemente über mehrere Zeilen um. Wenn Sie es auf `nowrap` setzen, was der Anfangswert ist, schrumpfen sie, um in den Container zu passen. Sie schrumpfen, weil sie Anfangswerte von Flexbox verwenden, einschließlich `flex-shrink: 1`, was es den Elementen erlaubt zu schrumpfen. Die Verwendung von `nowrap` würde zu einem [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) führen, wenn die Elemente nicht schrumpfen könnten oder nicht genug schrumpfen könnten, um zu passen.

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

## Der flex-flow Shorthand

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}}-Shorthand kombinieren.

Im Live-Beispiel unten versuchen Sie, den ersten Wert auf einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten Wert in `wrap` und `nowrap`.

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

Um die Inline-Größe jedes Flex-Elements zu steuern, richten wir sie direkt über drei Eigenschaften aus:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir schauen uns diese Eigenschaften unten kurz an, aber wenn Sie umfassendere Informationen wünschen, werfen Sie einen Blick auf den Leitfaden [Steuerung von Verhältnissen von Flex-Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir diese Eigenschaften verstehen können, müssen wir das Konzept des **verfügbaren Raumes** in Betracht ziehen. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist die Art und Weise zu ändern, wie verfügbarer Raum unter unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raumes ist auch wichtig, wenn wir uns die Ausrichtung von Elementen ansehen.

Haben wir drei 100 Pixel breite Elemente in einem Container, der 500 Pixel breit ist, dann benötigen wir 300 Pixel Platz, um unsere Elemente anzuordnen. Dies lässt 200 Pixel verfügbaren Raum übrig. Wenn wir die Anfangswerte nicht ändern, setzt Flexbox diesen Raum nach dem letzten Element.

![Dieser Flex-Container hat verfügbaren Raum nach der Anordnung der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann brauchen wir eine Methode, um den verbleibenden Raum zwischen den Elementen zu verteilen. Die `flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, wie dieser verfügbare Raum unter den gleichrangigen Flex-Elementen verteilt werden soll.

### Die flex-basis Eigenschaft

`flex-basis` definiert, wie groß dieses Element in Bezug auf den Platz ist, den es als verfügbaren Raum lässt. Der Anfangswert dieser Eigenschaft ist `auto` – in diesem Fall schaut der Browser, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixel. Diese wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als flex-basis verwendet. Deshalb verschieben sich die Elemente, wenn wir einfach `display: flex` auf dem übergeordneten Element deklarieren, alle in eine Reihe und nehmen nur so viel Platz ein, wie sie benötigen, um ihren Inhalt anzuzeigen.

### Die flex-grow Eigenschaft

Wenn die `flex-grow` Eigenschaft auf einen positiven Ganzzahlwert gesetzt ist, kann das Flex-Element, wenn verfügbarer Raum ist, entlang der Hauptachse von seiner `flex-basis` wachsen. Ob das Element sich dehnt, um den gesamten verfügbaren Platz auf dieser Achse einzunehmen, oder nur einen Teil des verfügbaren Raumes, hängt davon ab, ob die anderen Elemente auch wachsen können und von den Werten ihrer `flex-grow`-Eigenschaften.

Jedes Element mit einem positiven Wert nimmt einen Teil des verfügbaren Raumes basierend auf seinem `flex-grow`-Wert ein. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow`-Wert von 1 geben, wird der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen aufgeteilt und sie dehnen sich aus, um den Container auf der Hauptachse auszufüllen. Wenn wir unserem ersten Element einen `flex-grow`-Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raumes werden dem ersten Element zugewiesen (100px von 200px im Beispiel oben) und jeweils 1 Teil den anderen beiden (jeweils 50px von den insgesamt 200px).

### Die flex-shrink Eigenschaft

Wo die `flex-grow` Eigenschaft Raum in der Hauptachse hinzufügt, kontrolliert die `flex-shrink` Eigenschaft, wie Raum genommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuordnen, und `flex-shrink` ist auf einen positiven Ganzzahlwert gesetzt, dann kann das Element kleiner als die `flex-basis` werden. Wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um zu verursachen, dass ein Element schneller als andere schrumpft – ein Element mit einem höheren Wert für `flex-shrink` wird schneller schrumpfen als seine Geschwister, die niedrigere Werte haben.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese Minimalgröße wird beim Ausarbeiten des tatsächlichen Schrumpfungsbetrags berücksichtigt, was bedeutet, dass `flex-shrink` das Potenzial hat, weniger konsistent als `flex-grow` im Verhalten zu erscheinen. Daher werden wir uns in dem Artikel [Steuerung von Verhältnissen von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) genauer anschauen, wie dieser Algorithmus funktioniert.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Anteile. Typischerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` setzen und dann ein Element doppelt so schnell wachsen lassen möchten, setzen wir dieses Element auf `flex: 2 1 200px`. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzformwerte für die Flex-Eigenschaften

Sie werden sehr selten die Eigenschaften `flex-grow`, `flex-shrink` und `flex-basis` einzeln verwenden; stattdessen werden sie in der {{cssxref("flex")}} Kurzform kombiniert. Die `flex`-Kurzform ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Im Live-Beispiel unten können Sie die verschiedenen Werte der Flex-Kurzform testen; denken Sie daran, dass der erste Wert `flex-grow` ist. Wenn Sie diesem einen positiven Wert geben, kann das Element wachsen. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, aber nur, wenn ihre Gesamtsumme die Hauptachse überläuft. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als ihre Basis verwenden, um von dort aus zu wachsen und zu schrumpfen.

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

Es gibt auch einige vordefinierte Kurzformwerte, die die meisten Anwendungsfälle abdecken. Sie werden diese häufig in Tutorials sehen und in vielen Fällen sind diese alles, was Sie verwenden müssen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der Wert `initial` ist ein [CSS-weites Wert](/de/docs/Web/CSS/CSS_Values_and_Units#css-wide_values), der den Anfangswert für eine Eigenschaft darstellt. Wenn Sie `flex: initial` festlegen, setzt es das Element auf die [Anfangswerte](#anfangswerte) der drei Langform-Eigenschaften zurück, was dem gleichen wie `flex: 0 1 auto` entspricht. Der Anfangswert von `flex-grow` ist `0`, daher werden die Elemente nicht größer als ihre `flex-basis` Größe wachsen. Der Anfangswert von `flex-shrink` ist `1`, daher können die Elemente schrumpfen, wenn sie müssen, anstatt zu überlaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente werden entweder die auf dem Element in der Hauptdimension festgelegte Größe verwenden oder sie erhalten ihre Größe aus der Inhalt-Größe.

Die Verwendung von `flex: auto` entspricht `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container ausfüllen und auch bei Bedarf schrumpfen können.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Elemente. Es ist, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können weder wachsen noch schrumpfen und werden im Flexbox-Format mit einer `flex-basis` von `auto` layoutiert.

Die Kurzform, die Sie oft in Tutorials sehen, ist `flex: 1` oder `flex: 2` usw. Dies ist das gleiche wie `flex: 1 1 0` oder `flex: 2 1 0` usw. zu schreiben. Die Elemente können von einer `flex-basis` von `0` wachsen und schrumpfen.

Probieren Sie diese Kurzformwerte im Live-Beispiel unten aus.

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

## Ausrichtung, Rechtfertigung und Verteilung von freiem Platz zwischen Elementen

Ein Hauptmerkmal von Flexbox ist die Fähigkeit, Elemente auf der Haupt- und Querachse auszurichten und zu rechtfertigen, und Platz zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf dem Flex-Container gesetzt sind, nicht auf den Elementen selbst.

### align-items

Die {{cssxref("align-items")}}-Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert für diese Eigenschaft ist `stretch` und ist der Grund, warum sich Flex-Elemente standardmäßig auf die Höhe des Flex-Containers strecken (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der auf dem Flex-Container selbst festgelegten Größe stammen.

Sie könnten stattdessen `align-items` auf `flex-start`, oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, `flex-end`, oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten. Probieren Sie dies im Live-Beispiel aus - ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente im Container bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf einstellen:

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

Das `align-items` wird auf dem Flex-Container gesetzt und wirkt sich auf alle Flex-Elemente aus. Wenn Sie ein Flex-Element anders als die anderen ausrichten möchten, können Sie die {{cssxref("align-self")}} auf dem Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}}-Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, in der Richtung, in der `flex-direction` den Fluss festgelegt hat. Der Anfangswert ist `flex-start`, der die Elemente am Startpunkt des Containers ausrichtet, aber Sie könnten auch den Wert `flex-end` setzen, um sie am Endpunkt auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, nachdem die Elemente layoutiert wurden, gleichmäßig zwischen den Elementen zu teilen, sodass es einen gleichen Abstand zwischen jedem Element gibt. Um einen gleichen Abstand auf der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements zu verursachen, verwenden Sie den Wert `space-around`. Mit `space-around` haben die Elemente einen halb so großen Abstand an jedem Ende. Oder, um zu bewirken, dass Elemente einen gleichen Abstand um sie herum haben, verwenden Sie den Wert `space-evenly`. Mit `space-evenly` haben die "Elemente einen vollen Abstand an jedem Ende.

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

Der Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) erforscht diese Eigenschaften tiefer, um ein besseres Verständnis dafür zu haben, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items)-Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items)-Eigenschaft ist eine Kurzform für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt ist, wird sie die Ausrichtung, aber nicht die Rechtfertigung festlegen, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine andere Kurzform, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}} und `justify-content`-Eigenschaften definiert. Die `align-content`-Eigenschaft wirkt sich nur auf Flex-Container aus, die umbrechen, und wird in [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) besprochen.

## Nächste Schritte

Nachdem Sie diesen Artikel gelesen haben, sollten Sie ein Verständnis der grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir untersuchen, [wie diese Spezifikation sich auf andere Teile von CSS bezieht](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods).
