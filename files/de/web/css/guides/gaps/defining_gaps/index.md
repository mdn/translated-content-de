---
title: CSS-Abstände definieren
short-title: Abstände definieren
slug: Web/CSS/Guides/Gaps/Defining_gaps
l10n:
  sourceCommit: 71fd49d60a856bd15c6fe2e8328147c9d3bcc67d
---

Beim Erstellen von [Grid-](/de/docs/Web/CSS/Guides/Grid_layout), [Flexbox-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Mehrspalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) können Sie mit den [CSS-Eigenschaften für Abstände](/de/docs/Web/CSS/Guides/Gaps#properties) Abstände zwischen Spalten und Zeilen festlegen und steuern.

Während die Eigenschaften {{cssxref("margin")}} und {{cssxref("padding")}} den sichtbaren Abstand um einzelne Boxen festlegen, können Sie mit den [Eigenschaften](/de/docs/Web/CSS/Guides/Gaps#properties) des CSS-Moduls für Abstände den Abstand zwischen benachbarten Boxen in Layouts mit {{Glossary("gutters", "Zwischenräumen")}} festlegen.

Dieser Leitfaden erläutert Spalten- und Zeilenabstände in verschiedenen Layouttypen, wie Sie Abstände festlegen und wie Sie Prozentwerte als `gap`-Wert verwenden.

## Abstände verstehen

Mit margin und padding lassen sich Abstände um einzelne Boxen festlegen. Manchmal ist es jedoch praktischer, den Abstand zwischen benachbarten Boxen innerhalb eines Layouts festzulegen. Das gilt insbesondere dann, wenn sich der Abstand zwischen benachbarten Boxen vom Abstand zwischen der ersten oder letzten Box und dem Rand des Containers unterscheidet.
Die Eigenschaft {{cssxref("gap")}} und ihre zugehörigen Eigenschaften {{cssxref("row-gap")}} und {{cssxref("column-gap")}} bieten diese Möglichkeit für Grid-, Flexbox- und Mehrspalten-Layouts.

Ein _Abstand_ ist entweder ein _Spaltenabstand_ oder ein _Zeilenabstand_. Die genaue Bedeutung hängt vom Layouttyp ab. Bei allen Layouttypen entfällt ein Abstand, wenn er mit einem Fragmentierungsumbruch zusammenfällt.

### Abstände in Grid-Containern

In einem Grid-Container bezeichnen _Zeilenabstände_ und _Spaltenabstände_ die Zwischenräume zwischen Grid-Zeilen beziehungsweise Grid-Spalten. Durch die Breite dieser Abstände verhalten sich die betroffenen Grid-Linien so, als hätten sie eine Dicke: Der Grid-Track zwischen zwei Grid-Linien ist der Raum zwischen den Zwischenräumen, die diese Linien darstellen. Standardmäßig beträgt der Abstand in beiden Richtungen `0`.

Bei der Größenberechnung der Tracks wird jeder Zwischenraum wie ein zusätzlicher, leerer Track mit der angegebenen festen Größe behandelt. Ein Grid-Element, das sich über mehrere Zeilen oder Spalten erstreckt, umfasst auch die Zwischenräume dazwischen.

Wenn beispielsweise `gap: 20px` für ein 4×4-Grid mit Boxen von jeweils `100px` × `100px` festgelegt ist, misst das Grid `460px` × `460px`. Jede Box misst zwar `100px` × `100px`, ein Grid-Element, das sich über zwei Zeilen erstreckt, ist jedoch `220px` hoch. Erstreckt es sich über drei Zeilen, beträgt seine Höhe `340px`; erstreckt es sich über alle vier, beträgt sie `460px`.

Die Zwischenräume legen den Mindestabstand zwischen Elementen fest: Durch Werte der Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} kann zusätzlicher Raum entstehen, der die entsprechenden Abstände vergrößert.

Zwischenräume treten nur zwischen Tracks des impliziten Grids auf. Wird ein Grid zwischen Tracks fragmentiert, wird dort kein Zwischenraum hinzugefügt. Vor dem ersten und nach dem letzten Track gibt es ebenfalls keinen Zwischenraum. Ein zusammengeklappter Track hat keinen Zwischenraum.

### Abstände in Flex-Containern

Flex-Container entstehen, indem {{cssxref("display")}} für ein Element mit mehreren Kindelementen auf `flex` oder `inline-flex` gesetzt wird. Standardmäßig werden Flex-Elemente in einer einzigen Zeile ohne Zeilenumbruch angeordnet. Der Standardabstand zwischen benachbarten Flex-Elementen und, falls ein Umbruch erfolgt, zwischen benachbarten Spalten oder Zeilen beträgt `0`. Ob ein Flex-Container mit mehreren Elementen Spalten, Zeilen oder beides hat, hängt von der mit der Kurzschreibweise {{cssxref("flex-flow")}} festgelegten Richtung und dem Umbruchverhalten ab.

Sie können entlang der Hauptachse Abstände zwischen benachbarten Flex-Elementen hinzufügen. Ist die Eigenschaft {{cssxref("flex-flow")}} auf `row wrap` oder `row-reverse wrap` gesetzt, bezeichnet der _Spaltenabstand_ den Zwischenraum zwischen benachbarten Flex-Elementen und der _Zeilenabstand_ den Zwischenraum zwischen Flex-Zeilen. Ist `flex-flow` auf `column wrap` oder `column-reverse wrap` gesetzt, bezeichnet der _Zeilenabstand_ den Zwischenraum zwischen benachbarten Flex-Elementen und der _Spaltenabstand_ den Zwischenraum zwischen Flex-Zeilen.

### Abstände in Mehrspalten-Layouts

Mehrspalten-Container sind Elemente auf Blockebene mit mehr als einer Spalte, die entstehen, indem {{cssxref("column-count")}} auf einen Wert größer als `1` gesetzt wird. Standardmäßig werden die Spalten in einer einzigen Zeile angeordnet, mit einem `1em` breiten _Spaltenabstand_ zwischen benachbarten Spalten. Der _Zeilenabstand_ ist der Zwischenraum zwischen den Zeilen von Spaltenboxen, die entstehen, wenn ein für {{cssxref("column-height")}} festgelegter Wert einen Umbruch der Spalten in zusätzliche Zeilen erforderlich macht.

## Die Kurzschreibweise `gap` verwenden

Die Eigenschaft {{cssxref("row-gap")}} legt die Größe des Abstands ({{Glossary("gutters", "Zwischenraums")}}) zwischen benachbarten Zeilen innerhalb eines Containers fest. Die Eigenschaft {{cssxref("column-gap")}} legt den Abstand zwischen den Spalten eines Containers fest. Für jede Eigenschaft kann ein `<length>`, ein `<percentage>` oder das Schlüsselwort `normal` angegeben werden. Prozentwerte werden anhand der Größe der [Inhaltsbox](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Container-Elements in der jeweiligen Dimension berechnet.

Die Kurzschreibweise {{cssxref("gap")}} definiert sowohl Zeilen- als auch Spaltenabstände und akzeptiert einen oder zwei Werte. Der Standardwert für beide zugehörigen Eigenschaften ist `normal`. Wird nur ein Wert angegeben, gilt er für Zeilen- und Spaltenabstände. Werden zwei Werte angegeben, legt der erste den Wert für `row-gap` und der zweite den Wert für `column-gap` fest.

Die Wirkung der Festlegung hängt davon ab, ob der Container ein Grid-, Flexbox- oder Mehrspalten-Layout verwendet.

Sie können sichtbare Trennlinien in Abständen hinzufügen; diese werden als Abstandsdekorationen bezeichnet. Wenn Sie dekorative Linien für Abstände zwischen Spalten, Zeilen oder beiden hinzufügen, erscheinen sie in der Mitte des jeweiligen Abstands. Sie beeinflussen weder dessen Größe noch die Größe des Containers. Diese Abstandsdekorationen werden mit der Kurzschreibweise {{cssxref("rule")}} oder ihren zugehörigen Eigenschaften in den ansonsten „leeren Raum“ eingefügt.

### Abstände in Grid-Layouts

In Grid-Containern definiert die Eigenschaft `gap` die Größe der Zwischenräume zwischen vertikalen und horizontalen Tracks. Für die Kurzschreibweise wird ein Wert für `<'row-gap'>` angegeben, optional gefolgt von einem Wert für `<'column-gap'>`. Wird nur ein Wert angegeben, gilt er für Zeilen- und Spaltenabstände.

In diesem Beispiel erstellen wir einen Grid-Container mit sieben Spalten:

```css live-sample___grid_gap
.container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
```

Wählen Sie verschiedene `gap`-Werte aus, um zu sehen, wie sich die Abstände zwischen Zeilen und Spalten ändern:

```css hidden live-sample___grid_gap
:has([value="a"]:checked) p {
  gap: 2px 10px;
}
:has([value="b"]:checked) p {
  gap: 10px 2px;
}
:has([value="c"]:checked) p {
  gap: 10px;
}
:has([value="d"]:checked) p {
  gap: 2px;
}
```

{{EmbedLiveSample("grid_gap", "", "390")}}

### Abstände in Flexbox-Layouts

In Flex-Containern definiert die Eigenschaft `gap` den Abstand sowohl zwischen Flex-Elementen als auch zwischen Flex-Zeilen. Ob der erste Wert den Abstand zwischen Flex-Elementen oder zwischen Flex-Zeilen festlegt, hängt von der Anordnungsrichtung der Flex-Elemente ab.

Flex-Elemente werden je nach Wert der Eigenschaft {{cssxref("flex-direction")}} in Zeilen oder Spalten angeordnet. Bei `row` oder `row-reverse` definiert der erste Wert den Abstand zwischen Flex-Zeilen und der zweite den Abstand zwischen benachbarten Flex-Elementen innerhalb jeder Zeile. Wird nur ein Wert angegeben, gilt er für beide Abstände.

Ist `flex-direction` auf `column` oder `column-reverse` gesetzt, definiert der erste Wert den Abstand zwischen benachbarten Flex-Elementen innerhalb einer Flex-Zeile und der zweite die Abstände zwischen Flex-Zeilen. Auch hier gilt ein einzelner Wert für beide Abstände.

In diesem Beispiel erstellen wir einen Flex-Container und erlauben den Umbruch der Flex-Elemente:

```css live-sample___flex_gap
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  height: 500px;
}
```

Wählen Sie verschiedene Werte für `gap` und `flex-direction` aus, um zu sehen, wie sich die Abstände zwischen Flex-Elementen und Flex-Zeilen ändern:

```css hidden live-sample___flex_gap live-sample___percent_gap live-sample___percent_gap2
i {
  flex: 0 0 18%;
}
i:nth-of-type(2n) {
  flex: 0 0 12%;
}
i:nth-of-type(3n) {
  flex: 0 0 26%;
}
i:nth-of-type(5n) {
  flex: 0 0 20%;
}
i:nth-of-type(7n) {
  flex: 0 0 34%;
}
```

```css hidden live-sample___flex_gap
:has([value="a"]:checked) p {
  gap: 2px 10px;
}
:has([value="b"]:checked) p {
  gap: 10px 2px;
}
:has([value="c"]:checked) p {
  gap: 10px;
}
:has([value="d"]:checked) p {
  gap: 2px;
}

:has([value="row"]:checked) p {
  flex-direction: row;
}
:has([value="rowR"]:checked) p {
  flex-direction: row-reverse;
}
:has([value="col"]:checked) p {
  flex-direction: column;
}
:has([value="colR"]:checked) p {
  flex-direction: column-reverse;
}
```

```html hidden live-sample___flex_gap
<fieldset>
  <legend>Select a flex direction:</legend>
  <label
    ><input type="radio" value="row" name="dir" /> flex-direction: row;</label
  >
  <label
    ><input type="radio" value="rowR" name="dir" /> flex-direction:
    row-reverse;</label
  >
  <label
    ><input type="radio" value="col" name="dir" /> flex-direction:
    column;</label
  >
  <label
    ><input type="radio" value="colR" name="dir" /> flex-direction:
    column-reverse;</label
  >
</fieldset>
```

```html hidden live-sample___percent_gap live-sample___percent_gap2
<fieldset>
  <legend>Select a layout</legend>
  <label><input type="radio" value="grid" name="dir" checked />Grid</label>
  <label><input type="radio" value="flex" name="dir" />Flexbox</label>
  <label
    ><input type="radio" value="flex2" name="dir" />Flexbox (columns)</label
  >
  <label><input type="radio" value="mult" name="dir" />Multi-col</label>
</fieldset>
```

{{EmbedLiveSample("flex_gap", "", "900")}}

### Abstände in Mehrspalten-Layouts

In [CSS-Mehrspalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) definiert die Eigenschaft `gap` den Zwischenraum zwischen Spalten sowie zwischen Zeilen von Spalten. Der erste Wert definiert den Abstand zwischen Zeilen von Spaltenboxen, sofern durch die Eigenschaft {{cssxref("column-height")}} mehrere Zeilen entstehen. Der zweite Wert definiert den Abstand zwischen benachbarten Spaltenboxen.

In diesem Beispiel erstellen wir mit der Kurzschreibweise `columns` einen Mehrspalten-Container mit höchstens sieben Spalten und einer Mindestbreite von `1em` pro Spalte. Eine Spaltenhöhe von `2.35em` ermöglicht zusätzliche Zeilen. Außerdem fügen wir mit der Eigenschaft {{cssxref("rule")}} eine dünne dekorative Linie in der Mitte des Abstands hinzu:

```css hidden live-sample___col_gap
.container {
  columns: 7 1em / 2.35em;
  width: 450px;
  rule: 1px solid #ccc;
}
@supports not (column-height: 1em) {
  body::before {
    content: "Your browser does not support the column-height property.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

Standardmäßig beträgt der Abstand zwischen Zeilen und Spalten `1em`. Wählen Sie andere `gap`-Werte aus, um ihn zu ändern:

```css hidden live-sample___col_gap
:has([value="a"]:checked) p {
  gap: 0.5em 3em;
}
:has([value="b"]:checked) p {
  gap: 3em 0.5em;
}
:has([value="c"]:checked) p {
  gap: 0.5em;
}
:has([value="d"]:checked) p {
  gap: 3em;
}
```

{{EmbedLiveSample("col_gap", "", "820")}}

Die Zwischenräume können größer erscheinen als der festgelegte Abstand, weil die Buchstaben den ihnen zugewiesenen Raum nicht vollständig ausfüllen. Die dekorative Linie erscheint in der Mitte des Abstands, je nach ausgewählter Einstellung entweder `0.25em` oder `1.5em` vom Block- und Inline-Anfang des Inhalts der jeweiligen Spalte oder Zeile entfernt. Der zusätzliche Leerraum befindet sich am Block- und Inline-Ende, wodurch die Abstände größer wirken, als sie sind.

```html hidden live-sample___grid_gap live-sample___flex_gap
<fieldset>
  <legend>Select a gap value:</legend>
  <label><input type="radio" value="a" name="gap" /> gap: 2px 10px;</label>
  <label><input type="radio" value="b" name="gap" /> gap: 10px 2px;</label>
  <label><input type="radio" value="c" name="gap" /> gap: 10px;</label>
  <label><input type="radio" value="d" name="gap" /> gap: 2px;</label>
</fieldset>
```

```html hidden live-sample___col_gap
<fieldset>
  <legend>Select a gap value:</legend>
  <label><input type="radio" value="a" name="gap" /> gap: 0.5em 3em;</label>
  <label><input type="radio" value="b" name="gap" /> gap: 3em 0.5em;</label>
  <label><input type="radio" value="c" name="gap" /> gap: 0.5em;</label>
  <label><input type="radio" value="d" name="gap" /> gap: 3em;</label>
</fieldset>
```

```html hidden live-sample___percent_gap live-sample___percent_gap2
<fieldset>
  <legend>Select a gap value:</legend>
  <label><input type="radio" value="a" name="gap" /> gap: 1% 5%;</label>
  <label><input type="radio" value="b" name="gap" /> gap: 5% 1%;</label>
  <label><input type="radio" value="c" name="gap" /> gap: 1%;</label>
  <label><input type="radio" value="d" name="gap" /> gap: 5%;</label>
</fieldset>
```

```html hidden live-sample___grid_gap live-sample___flex_gap live-sample___col_gap live-sample___percent_gap live-sample___percent_gap2
<div>
  <p class="container">
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>
    <i>R</i>
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
  </p>
</div>
```

```css hidden live-sample___grid_gap live-sample___flex_gap live-sample___col_gap live-sample___percent_gap live-sample___percent_gap2
.container {
  font-size: 2rem;
  font-family: monospace;
  font-weight: bold;
}
i {
  background-color: #ccc;
  text-align: center;
}
label {
  display: block;
  font-family: monospace;
  margin: 10px;
}
```

## Prozentwerte für Abstände angeben

Hat ein Container eine feste Größe, werden prozentuale Spalten- und Zeilenabstände relativ zu seiner Breite beziehungsweise Höhe berechnet.

In diesem Beispiel ist die Größe des Containers festgelegt. Wählen Sie verschiedene prozentuale Abstände aus und ändern Sie den Layouttyp, um zu sehen, wie die Abstände relativ zur Containergröße berechnet werden. Spaltenabstände von `1%` und `5%` sind `3px` beziehungsweise `15px` breit. Zeilenabstände von `1%` und `5%` sind `6px` beziehungsweise `30px` hoch. Diese Abstände gelten auch dann, wenn der Inhalt über den Container hinausragt.

```css live-sample___percent_gap
.container {
  width: 300px;
  height: 600px;
  background-color: #eee;
  rule: 1px dotted #666;
}
```

{{EmbedLiveSample("percent_gap", "", "800")}}

Beachten Sie: Wenn Sie für die Eigenschaft `gap` einen einzigen Prozentwert festlegen, ist der Zeilenabstand doppelt so groß wie der Spaltenabstand, da der Container doppelt so hoch wie breit ist.

```css hidden live-sample___percent_gap live-sample___percent_gap2
fieldset {
  width: 44%;
  float: left;
}
p {
  clear: both;
  font-size: 1.25rem;
}

:has([value="a"]:checked) p {
  gap: 1% 5%;
}
:has([value="b"]:checked) p {
  gap: 5% 1%;
}
:has([value="c"]:checked) p {
  gap: 1%;
}
:has([value="d"]:checked) p {
  gap: 5%;
}

:has([value="grid"]:checked) p {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
:has([value="flex"]:checked) p {
  display: flex;
  flex-flow: row wrap;
}
:has([value="flex2"]:checked) p {
  display: flex;
  flex-flow: column wrap;
}
:has([value="mult"]:checked) p {
  columns: 5 2em / 2.35em;
}
```

Wenn für den Container weder eine Höhe noch eine Breite definiert ist, verhalten sich prozentuale Abstandswerte ganz anders. Hat der Container eine feste Breite, sind prozentuale Abstandswerte vorhersehbar.
Wird die Größe des Containers automatisch bestimmt, könnten prozentuale Abstände eine zirkuläre Abhängigkeit erzeugen: Die Abstände hängen von der Größe des Containers ab, die Größe des Containers aber wiederum von den Abständen. Browser behandeln prozentuale Abstandswerte bei der intrinsischen Größenberechnung als `auto` (effektiv `0`).

```css live-sample___percent_gap2
.container {
  background-color: #eee;
  rule: 1px dotted #666;
  height: auto;
  width: auto;
}
```

{{EmbedLiveSample("percent_gap2", "", "500")}}

Im Beispiel wird die Breite des Containers durch den umgebenden Block begrenzt, seine Höhe dagegen nicht.

Da Prozentwerte bei der intrinsischen Größenberechnung für Abstände in Grid-Layouts als `auto` behandelt werden, fällt der Abstand zunächst weg, bis die Größe des Containers bestimmt ist. Die Containergröße wird somit ausschließlich anhand der Abmessungen seines Inhalts ermittelt. Wenn das Beispiel sechs Zeilen mit Grid-Zellen darstellt, gibt es fünf Zeilenabstände. Dadurch ragt die letzte Zeile der Grid-Elemente je nachdem, ob der Abstand auf `1%` oder `5%` gesetzt ist, um `5%` beziehungsweise `25%` über den Hintergrund hinaus.

In Flexbox-Layouts werden prozentuale Abstände bei der intrinsischen Größenberechnung als `0` behandelt oder ignoriert. Der Abstand wird erst nach der Größenberechnung angewendet. Da die Blockgröße des Containers `auto` ist, werden prozentuale Zeilenabstände anhand von `0` berechnet; `1%` oder `5%` von `0` ergibt also `0`. Prozentwerte werden damit praktisch ignoriert – `row-gap` beträgt sowohl in Flexbox- als auch in Mehrspalten-Layouts `0`.

## Siehe auch

- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung im Grid-Layout](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
