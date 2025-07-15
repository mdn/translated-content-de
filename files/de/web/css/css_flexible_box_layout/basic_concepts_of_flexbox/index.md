---
title: Grundlegende Konzepte von Flexbox
short-title: Grundlegende Konzepte
slug: Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das [flexible Box-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout) Modul (häufig als Flexbox bezeichnet) ist ein eindimensionales Layout-Modell zur Verteilung von Platz zwischen Elementen und beinhaltet zahlreiche Ausrichtungsfunktionen. Dieser Artikel gibt einen Überblick über die Hauptmerkmale von Flexbox, die wir in den restlichen Leitfäden genauer untersuchen werden.

Wenn wir Flexbox als eindimensional beschreiben, meinen wir, dass Flexbox Layout in einer Dimension nach der anderen bearbeitet — entweder als Zeile oder als Spalte. Dies kann dem zweidimensionalen Modell des [CSS Raster-Layouts](/de/docs/Web/CSS/CSS_grid_layout) gegenübergestellt werden, das Spalten und Zeilen zusammen steuert.

## Die beiden Achsen von Flexbox

Wenn Sie mit Flexbox arbeiten, müssen Sie in Bezug auf zwei Achsen denken — die _Hauptachse_ und die _Querachse_. Die [Hauptachse](#die_hauptachse) wird durch die Eigenschaft {{cssxref("flex-direction")}} definiert, und die [Querachse](#die_querachse) verläuft senkrecht dazu. Alles, was wir mit Flexbox tun, bezieht sich auf diese Achsen, daher lohnt es sich, von Anfang an zu verstehen, wie sie funktionieren.

### Die Hauptachse

Die {{Glossary("main_axis", "Hauptachse")}} wird durch `flex-direction` definiert, das vier mögliche Werte hat:

- `row`
- `row-reverse`
- `column`
- `column-reverse`

Wenn Sie `row` oder `row-reverse` wählen, verläuft Ihre Hauptachse entlang der Zeile in der **Inline-Richtung**.

![Wenn flex-direction auf row gesetzt ist, verläuft die Hauptachse in der Inline-Richtung entlang der Zeile.](basics1.svg)

Wählen Sie `column` oder `column-reverse`, verläuft Ihre Hauptachse in der **Block-Richtung**, von der Spitze der Seite bis zum unteren Ende.

![Wenn flex-direction auf column gesetzt ist, verläuft die Hauptachse in der Block-Richtung.](basics2.svg)

### Die Querachse

Die {{Glossary("cross_axis", "Querachse")}} verläuft senkrecht zur Hauptachse. Folglich verläuft die Querachse, wenn Ihre `flex-direction` (Hauptachse) auf `row` oder `row-reverse` eingestellt ist, entlang der Spalten herunter.

![Wenn flex-direction auf row gesetzt ist, verläuft die Querachse in der Block-Richtung.](basics3.svg)

Wenn Ihre Hauptachse `column` oder `column-reverse` ist, verläuft die Querachse entlang der Zeilen.

![Wenn flex-direction auf column gesetzt ist, verläuft die Querachse in der Inline-Richtung.](basics4.svg)

## Start- und Endlinien

Ein weiteres entscheidendes Verständnisgebiet ist, dass Flexbox keine Annahmen über den Schreibmodus des Dokuments macht. Flexbox geht nicht einfach davon aus, dass alle Textzeilen oben links in einem Dokument beginnen und sich zur rechten Seite hin bewegen, wobei neue Zeilen untereinander erscheinen. Vielmehr unterstützt es alle Schreibmodi, wie andere [logische Eigenschaften und Werte](/de/docs/Web/CSS/CSS_logical_properties_and_values).

Sie können [mehr über die Beziehung zwischen Flexbox und Schreibmodi lesen](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods#writing_modes) in einem späteren Artikel; die folgende Beschreibung sollte jedoch erklären, warum wir nicht über links und rechts sowie oben und unten sprechen, wenn wir die Richtung beschreiben, in der sich unsere Flex-Elemente bewegen.

Wenn die `flex-direction` `row` ist und ich in Englisch arbeite, dann befindet sich der Startkanten der Hauptachse links, die Endkante rechts.

![Im Englischen ist die Startkante links.](basics5.svg)

Wenn ich in Arabisch arbeite, würde sich die Startkante meiner Hauptachse rechts und die Endkante links befinden.

![Die Startkante in einer RTL-Sprache ist rechts.](basics6.svg)

In beiden Fällen befindet sich die Startkante der Querachse oben im Flex-Container und die Endkante unten, da beide Sprachen einen horizontalen Schreibmodus haben.

Nach einer Weile wird das Denken in Bezug auf Start und Ende anstatt links und rechts zur Routine und wird nützlich sein, wenn Sie mit anderen Layout-Methoden wie dem CSS Raster-Layout arbeiten, das denselben Mustern folgt.

## Der Flex-Container

Ein Bereich eines Dokuments, der mit Flexbox gestaltet ist, wird als **Flex-Container** bezeichnet. Um einen {{Glossary("flex_container", "Flex-Container")}} zu erstellen, setzen Sie die Eigenschaft {{cssxref("display")}} des Bereichs auf `flex`. Wenn wir dies tun, werden die direkten Kindelemente dieses Containers zu **Flex-Elementen**. Sie können explizit steuern, ob der Container selbst inline oder in einem Block-Formatierungskontext angezeigt wird, indem Sie `inline flex` oder `inline-flex` für Inline-Flex-Container oder `block flex` oder `flex` für Blockniveau-Flex-Container verwenden.

### Anfangswerte

Wie bei allen Eigenschaften in CSS sind einige Anfangswerte definiert, sodass sich der Inhalt eines neuen Flex-Containers wie folgt verhält:

- Elemente zeigen in einer Zeile an (der Standardwert der {{cssxref("flex-direction")}} Eigenschaft ist `row`).
- Die Elemente beginnen am Start der Hauptachse.
- Die Elemente dehnen sich nicht auf der Hauptdimension aus, können jedoch schrumpfen (der Standardwert der {{cssxref("flex-grow")}} Eigenschaft eines Flex-Elements ist `0` und der Standardwert der {{cssxref("flex-shrink")}} Eigenschaft ist `1`).
- Die Elemente dehnen sich entlang der Querachse aus (der Standardwert der {{cssxref("align-items")}} Eigenschaft ist `stretch`).
- Der Standardwert der {{cssxref("flex-basis")}} Eigenschaft eines Flex-Elements ist `auto`. Das bedeutet, dass es in jedem Fall gleichbedeutend mit der {{cssxref("width")}} des Flex-Elements im horizontalen Schreibmodus und der {{cssxref("height")}} des Flex-Elements im vertikalen Schreibmodus ist. Wenn die entsprechende Breite/Höhe ebenfalls auf `auto` gesetzt ist, wird der Wert `content` von `flex-basis` anstelle davon verwendet.
- Alle Elemente werden in einer einzigen Zeile sein (der Standardwert der {{cssxref("flex-wrap")}} Eigenschaft ist `nowrap`), und überschreiten ihren Container, wenn ihre kombinierte Breite/Höhe die Breite/Höhe des enthaltenen Elements überschreitet.

Das Ergebnis ist, dass alle Ihre Elemente auf einer Linie angeordnet werden und die Größe des Inhalts als ihre Größe in der Hauptachse verwenden. Wenn es mehr Elemente gibt, als in den Container passen, werden sie sich nicht umbrechen, sondern stattdessen überlaufen. Wenn einige Elemente höher als andere sind, dehnen sich alle Elemente entlang der vollen Länge der Querachse aus.

In der Live-Ansicht unten können Sie sehen, wie dies aussieht. Klicken Sie auf "Abspielen", um das Beispiel im MDN-Playground zu öffnen und die Elemente zu bearbeiten oder neue hinzuzufügen, um das anfängliche Verhalten von Flexbox auszuprobieren:

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

Das Hinzufügen der {{cssxref("flex-direction")}} Eigenschaft zum Flex-Container ermöglicht es uns, die Richtung zu ändern, in der unsere Flex-Elemente angezeigt werden. Wenn Sie `flex-direction: row-reverse` setzen, bleiben die Elemente entlang der Zeile angezeigt, jedoch werden die Start- und Endlinien vertauscht.

Wenn wir `flex-direction` auf `column` ändern, wechselt die Hauptachse und unsere Elemente werden jetzt in einer Spalte angezeigt. Setzen Sie auf `column-reverse` und die Start- und Endlinien werden erneut vertauscht.

Im Live-Beispiel unten ist `flex-direction` auf `row-reverse` gesetzt. Probieren Sie die anderen Werte — `row`, `column` und `column-reverse` — aus, um zu sehen, was mit dem Inhalt passiert.

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

Obwohl Flexbox ein eindimensionales Modell ist, ist es möglich, Flex-Elemente über mehrere Zeilen hinweg zu umbrechen. Wenn Sie dies tun, sollten Sie jede Zeile als neuen Flex-Container betrachten. Jede Platzverteilung erfolgt über jede Zeile hinweg, ohne Berücksichtigung der vorhergehenden oder nachfolgenden Zeilen.

Um ein Umbrechen zu verursachen, fügen Sie die Eigenschaft {{cssxref("flex-wrap")}} mit dem Wert `wrap` hinzu. Wenn Ihre Elemente zu groß sind, um alle in einer Zeile angezeigt zu werden, werden sie in eine andere Zeile umbrochen. Das Live-Beispiel unten enthält Elemente, denen eine `width` zugewiesen wurde. Die Gesamtbreite der Elemente ist zu breit für den Flex-Container. Da `flex-wrap` auf `wrap` gesetzt ist, wickeln sich die Elemente über mehrere Zeilen. Wenn Sie es auf `nowrap` setzen, was der anfängliche Wert ist, schrumpfen sie um in den Container zu passen. Sie schrumpfen, da sie anfängliche Flexbox-Werte verwenden, einschließlich `flex-shrink: 1`, die es den Elementen erlaubt zu schrumpfen. Die Verwendung von `nowrap` würde ein [Überlauf](/de/docs/Learn_web_development/Core/Styling_basics/Overflow) verursachen, wenn die Elemente nicht in der Lage wären zu schrumpfen oder nicht klein genug schrumpfen könnten, um zu passen.

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

Erfahren Sie mehr über das Umwickeln von Flex-Elementen im Leitfaden [Meisterschaft des Umwickelns von Flex-Elementen](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

## Die flex-flow Kurzschreibweise

Sie können die beiden Eigenschaften `flex-direction` und `flex-wrap` in der {{cssxref("flex-flow")}} Kurzschreibweise kombinieren.

Im Live-Beispiel unten, versuchen Sie, den ersten Wert in einen der zulässigen Werte für `flex-direction` zu ändern - `row`, `row-reverse`, `column` oder `column-reverse`, und ändern Sie auch den zweiten Wert in `wrap` und `nowrap`.

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

## Auf Flex-Elemente angewandte Eigenschaften

Um die Inline-Größe jedes Flex-Elements zu steuern, steuern wir sie direkt über drei Eigenschaften:

- {{cssxref("flex-grow")}}
- {{cssxref("flex-shrink")}}
- {{cssxref("flex-basis")}}

Wir werden uns diese Eigenschaften kurz im Folgenden ansehen, aber wenn Sie umfassendere Informationen benötigen, werfen Sie einen Blick auf den Leitfaden [Kontrolle der Verhältnisse von Flex-Elementen auf der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis).

Bevor wir diese Eigenschaften nachvollziehen können, müssen wir das Konzept des **verfügbaren Raums** betrachten. Was wir tun, wenn wir den Wert dieser Flex-Eigenschaften ändern, ist die Art zu ändern, wie der verfügbare Raum zwischen unseren Elementen verteilt wird. Dieses Konzept des verfügbaren Raumes ist auch wichtig, wenn wir uns die Ausrichtung der Elemente ansehen.

Wenn wir drei 100 Pixel breite Elemente in einem Container haben, der 500 Pixel breit ist, dann beträgt der Platz, den wir benötigen, um unsere Elemente zu layouten, 300 Pixel. Dies lässt 200 Pixel verfügbaren Raum übrig. Wenn wir die Anfangswerte nicht ändern, wird Flexbox diesen Raum nach dem letzten Element platzieren.

![Dieser Flex-Container hat freien Raum nach dem Anordnen der Elemente.](basics7.svg)

Wenn wir stattdessen möchten, dass die Elemente wachsen und den Raum ausfüllen, dann müssen wir eine Methode zum Verteilen des verbleibenden Raums unter den Elementen haben. Die `Flex`-Eigenschaften, die wir auf die Elemente selbst anwenden, ermöglichen es, zu bestimmen, wie dieser verfügbare Raum unter den benachbarten Flex-Elementen verteilt werden sollte.

### Die flex-basis Eigenschaft

Die `flex-basis` definiert die Größe dieses Elements in Bezug auf den Platz, den es als verfügbaren Raum hinterlässt. Der Anfangswert dieser Eigenschaft ist `auto` — in diesem Fall schaut der Browser nach, ob das Element eine Größe hat. Im obigen Beispiel haben alle Elemente eine Breite von 100 Pixeln. Dies wird als `flex-basis` verwendet.

Wenn die Elemente keine Größe haben, wird die Größe des Inhalts als `flex-basis` verwendet. Aus diesem Grund, wenn wir einfach `display: flex` am Elternteil deklarieren, um Flex-Elemente zu erstellen, bewegen sich alle Elemente in eine Zeile und nehmen nur so viel Platz ein, wie sie zur Anzeige ihrer Inhalte benötigen.

### Die flex-grow Eigenschaft

Wenn die `flex-grow` Eigenschaft auf einen positiven Ganzzahlwert gesetzt ist, kann das Flex-Element, wenn verfügbarer Platz vorhanden ist, entlang der Hauptachse von seinem `flex-basis` aus wachsen. Ob sich das Element ausdehnt, um den gesamten verfügbaren Raum auf dieser Achse einzunehmen oder nur einen Teil des verfügbaren Raums, hängt davon ab, ob die anderen Elemente ebenfalls wachsen können und welche Werte ihre `flex-grow` Eigenschaften haben.

Jedes Element mit einem positiven Wert nimmt einen Teil des verfügbaren Raums basierend auf ihrem `flex-grow` Wert ein. Wenn wir allen unseren Elementen im obigen Beispiel einen `flex-grow` Wert von 1 geben, dann wird der verfügbare Raum im Flex-Container gleichmäßig zwischen unseren Elementen geteilt und sie dehnen sich auf der Hauptachse aus, um den Container zu füllen. Wenn wir unserem ersten Element einen `flex-grow` Wert von 2 geben und den anderen Elementen jeweils einen Wert von 1, gibt es insgesamt 4 Teile; 2 Teile des verfügbaren Raumes werden dem ersten Element gegeben (100px von insgesamt 200px im oben genannten Beispiel) und je 1 Teil den anderen beiden (je 50px der 200px insgesamt).

### Die flex-shrink Eigenschaft

Wo die `flex-grow` Eigenschaft den Platz auf der Hauptachse hinzufügt, steuert die `flex-shrink` Eigenschaft, wie er weggenommen wird. Wenn wir nicht genug Platz im Container haben, um unsere Elemente anzuzeigen und `flex-shrink` auf einen positiven Ganzzahlwert gesetzt ist, dann kann das Element kleiner als das `flex-basis` werden. Wie bei `flex-grow` können unterschiedliche Werte zugewiesen werden, um ein Element schneller schrumpfen zu lassen als andere — ein Element mit einem höheren `flex-shrink` Wert wird schneller schrumpfen als seine Geschwister, die niedrigere Werte haben.

Ein Element kann bis zu seiner {{cssxref("min-content")}} Größe schrumpfen. Diese Mindestgröße wird bei der Berechnung der tatsächlichen Schrumpfung berücksichtigt, was bedeutet, dass `flex-shrink` das Potenzial hat, im Verhalten weniger konsistent als `flex-grow` zu wirken. Wir werden daher in dem Artikel [Kontrolle der Verhältnisse von Elementen entlang der Hauptachse](/de/docs/Web/CSS/CSS_flexible_box_layout/Controlling_ratios_of_flex_items_along_the_main_axis) einen detaillierteren Blick auf diesen Algorithmus werfen.

> [!NOTE]
> Diese Werte für `flex-grow` und `flex-shrink` sind Proportionen. Normalerweise, wenn wir alle unsere Elemente auf `flex: 1 1 200px` eingestellt hätten und dann möchten, dass ein Element doppelt so schnell wächst, würden wir dieses Element auf `flex: 2 1 200px` setzen. Sie könnten jedoch auch `flex: 10 1 200px` und `flex: 20 1 200px` verwenden, wenn Sie möchten.

### Kurzschreibwerte für die Flex-Eigenschaften

Sie werden selten die `flex-grow`, `flex-shrink` und `flex-basis` Eigenschaften einzeln sehen; stattdessen werden sie in der {{cssxref("flex")}} Kurzschreibweise kombiniert. Die `flex` Kurzschreibweise ermöglicht es Ihnen, die drei Werte in dieser Reihenfolge festzulegen — `flex-grow`, `flex-shrink`, `flex-basis`.

Das Live-Beispiel unten ermöglicht es Ihnen, die verschiedenen Werte der Flex-Kurzschreibweise auszuprobieren; denken Sie daran, dass der erste Wert `flex-grow` ist. Ein positiver Wert bedeutet, das Element kann wachsen. Der zweite ist `flex-shrink` — mit einem positiven Wert können die Elemente schrumpfen, jedoch nur, wenn ihre Gesamtwerte die Hauptachse überlaufen. Der letzte Wert ist `flex-basis`; dies ist der Wert, den die Elemente als Ausgangswert verwenden, um zu wachsen und zu schrumpfen.

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

Es gibt auch einige vordefinierte Kurzschreibwerte, die die meisten Anwendungsfälle abdecken. In vielen Fällen werden diese in Tutorials verwendet, und oft sind dies die einzigen, die Sie benötigen. Die vordefinierten Werte sind wie folgt:

- `flex: initial`
- `flex: auto`
- `flex: none`
- `flex: <positive-number>`

Der `initial` Wert ist ein [CSS-weites Schlüsselwort](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types#css-wide_keywords), das den Anfangswert für eine Eigenschaft darstellt. `flex: initial` stellt das Element auf die [Anfangswerte](#anfangswerte) der drei langen Eigenschaften zurück, was gleichbedeutend ist mit `flex: 0 1 auto`. Der Anfangswert von `flex-grow` ist `0`, sodass Elemente nicht größer werden als ihre `flex-basis` Größe. Der Anfangswert von `flex-shrink` ist `1`, sodass Elemente schrumpfen können, wenn sie müssen, anstatt überzulaufen. Der Anfangswert von `flex-basis` ist `auto`. Elemente verwenden entweder eine beliebige Größe, die am Element in der Hauptdimension eingestellt ist, oder sie beziehen ihre Größe aus der Inhaltsgröße.

Die Verwendung von `flex: auto` ist gleichbedeutend mit `flex: 1 1 auto`; dies ist ähnlich wie `flex: initial`, außer dass die Elemente wachsen und den Container ausfüllen können sowie schrumpfen, wenn nötig.

Die Verwendung von `flex: none` erstellt vollständig unflexible Flex-Elemente. Es verhält sich, als ob Sie `flex: 0 0 auto` geschrieben hätten. Die Elemente können weder wachsen noch schrumpfen und werden mit einer `flex-basis` von `auto` im Flex-Layout angezeigt.

Die Kurzschreibweise, die Sie oft in Tutorials sehen, ist `flex: 1` oder `flex: 2` und so weiter. Dies ist gleichbedeutend mit dem Schreiben von `flex: 1 1 0` oder `flex: 2 1 0` und so weiter. Die Elemente erhalten eine Mindestgröße aufgrund von `flex-basis: 0` und wachsen dann proportional, um den verfügbaren Raum auszufüllen. In diesem Fall ist der `flex-shrink` Wert von `1` überflüssig, da die Elemente mit der Mindestgröße beginnen — ihnen wird keine Größe gegeben, die sie dazu bringen könnte, den Flex-Container zu überlaufen.

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

## Ausrichten, Rechtfertigen und Verteilen von freiem Raum zwischen Elementen

Ein entscheidendes Merkmal von Flexbox ist die Fähigkeit, Elemente auf der Haupt- und Querachse auszurichten und zu rechtfertigen sowie Raum zwischen Flex-Elementen zu verteilen. Beachten Sie, dass diese Eigenschaften auf den Flex-Container und nicht auf die Elemente selbst gesetzt werden.

### align-items

Die {{cssxref("align-items")}} Eigenschaft richtet alle Flex-Elemente auf der Querachse aus.

Der Anfangswert dieser Eigenschaft ist `stretch` und erklärt, warum Flex-Elemente standardmäßig bis zur Höhe des Flex-Containers gestreckt werden (oder die Breite, wenn `flex-direction` auf `column` oder `column-reverse` gesetzt ist). Diese Höhe kann von dem höchsten Element im Container oder der am Flex-Container selbst eingestellten Größe kommen.

Sie könnten stattdessen `align-items` auf `flex-start` oder einfach `start` setzen, um die Elemente am Anfang des Flex-Containers auszurichten, mit `flex-end` oder einfach `end`, um sie am Ende auszurichten, oder `center`, um sie in der Mitte zu platzieren. Probieren Sie dies im Live-Beispiel aus — ich habe dem Flex-Container eine Höhe gegeben, damit Sie sehen können, wie die Elemente innerhalb des Containers bewegt werden können. Sehen Sie, was passiert, wenn Sie den Wert von align-items auf folgende Optionen setzen:

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

Das `align-items` wird auf den Flex-Container gesetzt und beeinflusst alle Flex-Elemente. Wenn Sie ein Flex-Element anders als andere ausrichten möchten, können Sie die {{cssxref("align-self")}} auf dem Flex-Element setzen.

### justify-content

Die {{cssxref("justify-content")}} Eigenschaft wird verwendet, um die Elemente auf der Hauptachse auszurichten, die Richtung, in die `flex-direction` den Fluss gesetzt hat. Der Anfangswert ist `flex-start`, was die Elemente am Anfang der Container-Achse ausrichtet, aber Sie könnten den Wert auch auf `flex-end` setzen, um sie am Ende auszurichten, oder `center`, um sie in der Mitte auszurichten.

Sie können auch den Wert `space-between` verwenden, um den gesamten freien Raum, nachdem die Elemente angelegt wurden, gleichmäßig zwischen den Elementen zu teilen, sodass zwischen jedem Element der gleiche Raum ist. Um einen gleichen Raum auf der rechten und linken Seite (oder oben und unten für Spalten) jedes Elements zu verursachen, verwenden Sie den Wert `space-around`. Mit `space-around` haben die Elemente auf beiden Enden einen halben Raum. Oder, um Elemente mit gleichem Raum um sich herum zu versehen, verwenden Sie den Wert `space-evenly`. Mit `space-evenly` haben die Elemente auf beiden Enden einen vollen Raum.

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

Der Artikel [Ausrichtung von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) untersucht diese Eigenschaften ausführlicher, um ein besseres Verständnis dafür zu bekommen, wie sie funktionieren. Diese grundlegenden Beispiele sind jedoch in den meisten Anwendungsfällen nützlich.

### justify-items

Die [`justify-items`](/de/docs/Web/CSS/justify-items) Eigenschaft wird in Flexbox-Layouts ignoriert.

### place-items und place-content

Die [`place-items`](/de/docs/Web/CSS/place-items) Eigenschaft ist eine Kurzschreibweise für `align-items` und `justify-items`. Wenn sie auf einen Flex-Container gesetzt wird, setzt sie die Ausrichtung, jedoch nicht die Rechtfertigung, da `justify-items` in Flexbox ignoriert wird.

Es gibt eine weitere Kurzschreibweise, [`place-content`](/de/docs/Web/CSS/place-content), die die {{cssxref("align-content")}} und `justify-content` Eigenschaften definiert. Die `align-content` Eigenschaft beeinflusst nur Flex-Container, die umschließen, und wird in [Ausrichten von Elementen in einem Flex-Container](/de/docs/Web/CSS/CSS_flexible_box_layout/Aligning_items_in_a_flex_container) diskutiert.

## Nächste Schritte

Nachdem Sie diesen Artikel gelesen haben, sollten Sie ein Verständnis der grundlegenden Funktionen von Flexbox haben. Im nächsten Artikel werden wir uns mit [wie diese Spezifikation mit anderen Teilen von CSS zusammenhängt](/de/docs/Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods) beschäftigen.
