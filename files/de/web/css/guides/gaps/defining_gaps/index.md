---
title: CSS-Abstände definieren
short-title: Abstände definieren
slug: Web/CSS/Guides/Gaps/Defining_gaps
l10n:
  sourceCommit: 381fc52124e4be7d5b1bde38be75b95432f59dd7
---

Beim Erstellen von [Grid-](/de/docs/Web/CSS/Guides/Grid_layout), [Flexbox-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Mehrspalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) können Sie mit den [CSS-Eigenschaften für Abstände](/de/docs/Web/CSS/Guides/Gaps#properties) Abstände zwischen Spalten und Zeilen festlegen und steuern.

Während die Eigenschaften {{cssxref("margin")}} und {{cssxref("padding")}} den Abstand um einzelne Boxen festlegen, können Sie mit den [Eigenschaften](/de/docs/Web/CSS/Guides/Gaps#properties) des CSS-Moduls für Abstände den Abstand zwischen benachbarten Boxen in Layouts mit {{Glossary("gutters", "Zwischenräumen")}} festlegen.

Dieser Leitfaden erklärt Spalten- und Zeilenabstände in verschiedenen Layouttypen, wie Sie Abstände festlegen und wie Sie Prozentwerte als `gap`-Wert verwenden.

## Abstände verstehen

Mit margin und padding lassen sich Abstände um einzelne Boxen festlegen. Manchmal ist es jedoch praktischer, den Abstand zwischen benachbarten Boxen innerhalb eines Layouts festzulegen. Das gilt insbesondere, wenn sich der Abstand zwischen benachbarten Boxen vom Abstand zwischen der ersten oder letzten Box und dem Rand des Containers unterscheidet.
Die Eigenschaft {{cssxref("gap")}} und ihre Teileigenschaften {{cssxref("row-gap")}} und {{cssxref("column-gap")}} bieten diese Möglichkeit für Grid-, Flexbox- und Mehrspalten-Layouts.

Ein _Abstand_ ist entweder ein _Spaltenabstand_ oder ein _Zeilenabstand_. Ihre Bedeutung hängt vom Layouttyp ab. Bei allen Layouttypen entfällt ein Abstand, wenn er mit einem Fragmentierungsumbruch zusammenfällt.

### Abstände in Grid-Containern

In einem Grid-Container bezeichnen _Zeilenabstände_ und _Spaltenabstände_ die Zwischenräume zwischen Grid-Zeilen beziehungsweise Grid-Spalten. Durch die Breite dieser Zwischenräume verhalten sich die betroffenen Grid-Linien so, als hätten sie eine Dicke: Der Grid-Track zwischen zwei Grid-Linien ist der Raum zwischen den Zwischenräumen, die diese Linien repräsentieren. Standardmäßig beträgt die Breite des Abstands in beiden Richtungen `0`.

Bei der Größenberechnung der Tracks wird jeder Zwischenraum als zusätzlicher, leerer Track mit der festgelegten Größe behandelt. Ein Grid-Element, das sich über mehrere Zeilen oder Spalten erstreckt, überspannt auch die dazwischenliegenden Zwischenräume.

Wenn beispielsweise `gap: 20px` für ein 4 × 4-Grid mit Boxen von jeweils `100px` × `100px` festgelegt wird, ist das Grid `460px` × `460px` groß. Obwohl jede Box `100px` × `100px` groß ist, hat ein Grid-Element, das sich über zwei Zeilen erstreckt, eine Höhe von `220px`. Erstreckt es sich über drei Zeilen, beträgt seine Höhe `340px`. Erstreckt es sich über alle vier Zeilen, beträgt seine Höhe `460px`.

Zwischenräume legen den Mindestabstand zwischen Elementen fest. Werte der Eigenschaften {{cssxref("justify-content")}} und {{cssxref("align-content")}} können zusätzlichen Raum hinzufügen und so die entsprechenden Abstände vergrößern.

Zwischenräume erscheinen nur zwischen Tracks des impliziten Grids. Wird ein Grid zwischen Tracks fragmentiert, wird zwischen diesen Tracks kein Zwischenraum hinzugefügt. Vor dem ersten und nach dem letzten Track gibt es keinen Zwischenraum. Ein kollabierter Track hat ebenfalls keinen Zwischenraum.

### Abstände in Flex-Containern

Flex-Container entstehen, wenn für ein Element mit mehreren Kindelementen {{cssxref("display")}} auf `flex` oder `inline-flex` gesetzt wird. Standardmäßig werden Flex-Elemente in einer einzigen Zeile ohne Umbruch angeordnet. Der standardmäßige Abstand zwischen benachbarten Flex-Elementen und, falls ein Umbruch erfolgt, zwischen benachbarten Spalten oder Zeilen beträgt `0`. Ob ein Flex-Container mit mehreren Elementen Spalten, Zeilen oder beides aufweist, hängt von der Anordnung und dem Umbruch ab, die mit der Kurzschreibweise {{cssxref("flex-flow")}} festgelegt werden.

Sie können Abstände zwischen benachbarten Flex-Elementen entlang der Hauptachse hinzufügen. Ist die Eigenschaft {{cssxref("flex-flow")}} auf `row wrap` oder `row-reverse wrap` gesetzt, bezeichnet der _Spaltenabstand_ den Zwischenraum zwischen benachbarten Flex-Elementen und der _Zeilenabstand_ den Zwischenraum zwischen Flex-Zeilen. Ist `flex-flow` auf `column wrap` oder `column-reverse wrap` gesetzt, bezeichnet der _Zeilenabstand_ den Zwischenraum zwischen benachbarten Flex-Elementen und der _Spaltenabstand_ den Zwischenraum zwischen Flex-Zeilen.

### Abstände in Mehrspalten-Layouts

Mehrspalten-Container sind Block-Level-Elemente mit mehr als einer Spalte. Sie entstehen, indem {{cssxref("column-count")}} auf einen Wert größer als `1` gesetzt wird. Standardmäßig werden die Spalten in einer einzigen Zeile angeordnet, mit einem `1em` breiten _Spaltenabstand_ zwischen benachbarten Spalten. Der _Zeilenabstand_ ist der Zwischenraum zwischen Zeilen von Spalten-Boxen, die entstehen, wenn ein Wert für {{cssxref("column-height")}} festgelegt wird, bei dem die Spalten umbrechen und zusätzliche Zeilen bilden.

## Die Kurzschreibweise `gap` verwenden

Die Eigenschaft {{cssxref("row-gap")}} legt die Größe des Abstands ({{Glossary("gutters", "Zwischenraums")}}) zwischen benachbarten Zeilen innerhalb eines Containers fest. Die Eigenschaft {{cssxref("column-gap")}} legt die Größe des Abstands zwischen den Spalten eines Containers fest. Als Wert für jede Eigenschaft kann ein `<length>`-Wert, ein `<percentage>`-Wert oder das Schlüsselwort `normal` angegeben werden. Prozentwerte werden anhand der Größe der [Inhaltsbox](/de/docs/Web/CSS/Guides/Box_model/Introduction#content_area) des Containerelements in der jeweiligen Dimension berechnet.

Die Kurzschreibweise {{cssxref("gap")}} legt Abstände zwischen Zeilen und Spalten fest und akzeptiert einen oder zwei Werte. Der Standardwert für beide Teileigenschaften ist `normal`. Wird nur ein Wert angegeben, gilt er sowohl für Zeilen- als auch für Spaltenabstände. Werden zwei Werte angegeben, legt der erste den Wert für `row-gap` und der zweite den Wert für `column-gap` fest.

Wie sich die Festlegung auswirkt, hängt davon ab, ob der Container ein Grid-, Flexbox- oder Mehrspalten-Layout verwendet.

Sie können Abstände durch sichtbare Trennlinien gestalten; diese werden als Abstandsdekorationen bezeichnet. Wenn Sie dekorative Linien für Abstände zwischen Spalten, Zeilen oder beiden hinzufügen, erscheinen sie in der Mitte des jeweiligen Abstands. Sie wirken sich weder auf dessen Größe noch auf die Größe des Containers aus. Solche Abstandsdekorationen werden mithilfe der Kurzschreibweise {{cssxref("rule")}} oder ihrer Teileigenschaften zum ansonsten „leeren Raum“ hinzugefügt.

### Abstände in Grid-Layouts

In Grid-Containern legt die Eigenschaft `gap` die Größe der Zwischenräume zwischen vertikalen und horizontalen Tracks fest. Für die Kurzschreibweise wird ein Wert für `<'row-gap'>` angegeben, auf den optional ein Wert für `<'column-gap'>` folgt. Wird nur ein Wert angegeben, gilt er sowohl für Zeilen- als auch für Spaltenabstände.

In diesem Beispiel erstellen wir einen Grid-Container mit sieben Spalten:

```css live-sample___grid_gap
.container {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
```

Wählen Sie verschiedene `gap`-Werte aus, um zu sehen, wie sich die Abstände zwischen Zeilen und Spalten verändern:

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

In Flex-Containern legt die Eigenschaft `gap` den Abstand sowohl zwischen Flex-Elementen als auch zwischen Flex-Zeilen fest. Ob der erste Wert den Abstand zwischen Flex-Elementen oder zwischen Flex-Zeilen festlegt, hängt von der Richtung ab, in der die Flex-Elemente angeordnet werden.

Flex-Elemente werden je nach Wert der Eigenschaft {{cssxref("flex-direction")}} in Zeilen oder Spalten angeordnet. Ist sie auf `row` oder `row-reverse` gesetzt, legt der erste Wert den Abstand zwischen Flex-Zeilen und der zweite Wert den Abstand zwischen benachbarten Flex-Elementen innerhalb jeder Zeile fest. Wird nur ein Wert angegeben, gilt er für beide Abstände.

Ist `flex-direction` auf `column` oder `column-reverse` gesetzt, legt der erste Wert den Abstand zwischen benachbarten Flex-Elementen innerhalb einer Flex-Zeile und der zweite Wert die Abstände zwischen Flex-Zeilen fest. Auch hier gilt ein einzelner Wert für beide Abstände.

In diesem Beispiel erstellen wir einen Flex-Container und erlauben den Umbruch der Flex-Elemente:

```css live-sample___flex_gap
.container {
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;
  height: 500px;
}
```

Wählen Sie verschiedene Werte für `gap` und `flex-direction` aus, um zu sehen, wie sich die Abstände zwischen Flex-Elementen und Flex-Zeilen verändern:

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
  <label><input type="radio" value="multicol" name="dir" />Multi-col</label>
</fieldset>
```

{{EmbedLiveSample("flex_gap", "", "900")}}

### Abstände in Mehrspalten-Layouts

In [CSS-Mehrspalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) legt die Eigenschaft `gap` den Zwischenraum zwischen Spalten und zwischen Spaltenzeilen fest. Der erste Wert legt den Abstand zwischen Zeilen von Spalten-Boxen fest, sofern durch die Eigenschaft {{cssxref("column-height")}} mehrere Zeilen entstehen. Der zweite Wert legt den Abstand zwischen benachbarten Spalten-Boxen fest.

In diesem Beispiel erstellen wir mit der Kurzschreibweise `columns` einen Mehrspalten-Container mit maximal sieben Spalten und einer Mindestbreite von `1em` pro Spalte. Eine Spaltenhöhe von `2.35em` ermöglicht die Bildung zusätzlicher Zeilen. Außerdem fügen wir mit der Eigenschaft {{cssxref("rule")}} eine dünne dekorative Linie in der Mitte des Abstands hinzu:

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

Standardmäßig beträgt der Abstand zwischen Zeilen und Spalten `1em`. Wählen Sie verschiedene `gap`-Werte aus, um ihn zu ändern:

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

Die Zwischenräume können größer wirken als der festgelegte Abstand, weil die Buchstaben den ihnen zugewiesenen Raum nicht vollständig ausfüllen. Die dekorative Linie erscheint in der Mitte des Abstands, je nach gewählter Einstellung entweder `0.25em` oder `1.5em` vom Anfang des Inhalts der Spalte beziehungsweise Zeile in Block- und Inline-Richtung entfernt. Der zusätzliche Leerraum befindet sich am Ende in Block- und Inline-Richtung, wodurch die Abstände größer wirken, als sie sind.

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

Wenn ein Container eine feste Größe hat, werden prozentuale Spalten- und Zeilenabstände relativ zur Breite beziehungsweise Höhe des Containers berechnet.

In diesem Beispiel ist die Größe des Containers festgelegt. Wählen Sie verschiedene Prozentwerte für die Abstände aus und ändern Sie den Layouttyp, um zu sehen, wie die Abstände relativ zur Größe des Containers berechnet werden. Spaltenabstände von `1%` und `5%` sind `3px` beziehungsweise `15px` breit. Zeilenabstände von `1%` und `5%` sind `6px` beziehungsweise `30px` hoch. Diese Abstandsgrößen gelten auch dann, wenn der Inhalt über den Container hinausragt.

```css live-sample___percent_gap
.container {
  width: 300px;
  height: 600px;
  background-color: #eee;
  rule: 1px dotted #666;
}
```

{{EmbedLiveSample("percent_gap", "", "800")}}

Beachten Sie, dass der Zeilenabstand doppelt so groß wie der Spaltenabstand ist, wenn Sie die Eigenschaft `gap` auf einen einzelnen Prozentwert setzen, da der Container doppelt so hoch wie breit ist.

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
:has([value="multicol"]:checked) p {
  columns: 5 2em / 2.35em;
}
```

Wenn für den Container weder eine Höhe noch eine Breite festgelegt ist, verhalten sich prozentuale Abstandswerte ganz anders. Hat der Container eine feste Breite, sind prozentuale Abstandswerte vorhersehbar.
Wird die Größe des Containers automatisch bestimmt, können prozentuale Abstände eine zirkuläre Abhängigkeit verursachen: Die Abstände hängen von der Größe des Containers ab, während dessen Größe wiederum von den Abständen abhängt. Browser behandeln prozentuale Abstandswerte während der intrinsischen Größenberechnung als `auto` (effektiv `0`).

```css live-sample___percent_gap2
.container {
  background-color: #eee;
  rule: 1px dotted #666;
  height: auto;
  width: auto;
}
```

{{EmbedLiveSample("percent_gap2", "", "500")}}

Im Beispiel wird die Breite des Containers durch den umschließenden Block begrenzt, seine Höhe jedoch nicht.

Da Prozentwerte während der intrinsischen Größenberechnung bei Abständen in Grid-Layouts als `auto` behandelt werden, kollabiert der Abstand, bis die Größe des Containers bestimmt ist. Das bedeutet, dass die Größe des Containers allein anhand der Abmessungen des Inhalts bestimmt wird. Wenn im Beispiel sechs Zeilen mit Grid-Zellen dargestellt werden, gibt es fünf Zeilenabstände. Dadurch ragt die letzte Zeile der Grid-Elemente um entweder `5%` oder `25%` über den Hintergrund hinaus, je nachdem, ob der Abstand auf `1%` oder `5%` gesetzt ist.

In Flexbox-Layouts werden prozentuale Abstände während der intrinsischen Größenberechnung als `0` behandelt oder ignoriert. Der Abstand wird erst nach der Größenberechnung angewendet. Da die Blockgröße des Containers `auto` ist, werden die prozentualen Zeilenabstände relativ zu `0` berechnet; `1%` oder `5%` von `0` ergeben also `0`. Prozentwerte werden faktisch ignoriert – `row-gap` beträgt sowohl in Flexbox- als auch in Mehrspalten-Layouts `0`.

## Siehe auch

- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
- [Elemente in einem Flex-Container ausrichten](/de/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items)
- [Box-Ausrichtung in Grid-Layouts](/de/docs/Web/CSS/Guides/Box_alignment/In_grid_layout)
