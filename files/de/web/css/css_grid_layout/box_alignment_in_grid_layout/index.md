---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Das CSS-Grid-Layout implementiert die Spezifikation [Box Alignment Level 3](https://drafts.csswg.org/css-align/), welche denselben Standard verwendet wie [flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zur Ausrichtung von Elementen in dessen Flexbehälter. Diese Spezifikation beschreibt, wie die Ausrichtung in allen verschiedenen Layoutmethoden funktionieren sollte. Layoutmethoden werden sich, soweit möglich, an die Spezifikation halten und individuelles Verhalten basierend auf ihren Unterschieden (Merkmale und Einschränkungen) implementieren. Während die Spezifikation derzeit Ausrichtungsdetails für alle Layoutmethoden beschreibt, haben Browser noch nicht alle Teile der Spezifikation vollständig implementiert; das CSS-Grid-Layout wurde jedoch weitgehend übernommen.

Dieser Leitfaden zeigt Demonstrationen, wie die Box-Ausrichtung im Grid-Layout funktioniert. Sie werden viele Ähnlichkeiten in der Funktionsweise dieser Eigenschaften und Werte in Flexbox sehen. Da das Grid zweidimensional und Flexbox eindimensional ist, gibt es einige kleine Unterschiede, auf die Sie achten sollten. Daher beginnen wir damit, uns die beiden Achsen anzusehen, die wir verwenden, um Dinge in einem Grid auszurichten.

## Die beiden Achsen eines Grid-Layouts

Beim Arbeiten mit Grid-Layout stehen Ihnen zwei Achsen zur Verfügung, gegen die Sie Elemente ausrichten können – die _Blockachse_ und die _Inline-Achse_. Die Blockachse ist die Achse, auf der Blöcke im Block-Layout angeordnet sind. Wenn Sie zwei Absätze auf Ihrer Seite haben, werden sie untereinander angezeigt, also ist es diese Richtung, die wir als Blockachse beschreiben.

![Blockachse ist vertikal.](block_axis.png)

Die _Inline-Achse_ verläuft über die Blockachse, es ist die Richtung, in der Text im regulären Inlinefluss verläuft.

![Inline- / Zeilenachse ist horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb der Grid-Bereiche und die Grid-Spuren selbst auf diesen beiden Achsen ausrichten.

## Ausrichten von Elementen auf der Blockachse

Die Eigenschaften {{cssxref("align-self")}} und {{cssxref("align-items")}} steuern die Ausrichtung auf der Blockachse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des Grid-Bereichs, in den Sie es platziert haben.

### Verwendung von align-items

Im folgenden Beispiel habe ich vier Grid-Bereiche innerhalb meines Grids. Ich kann die Eigenschaft {{cssxref("align-items")}} auf dem Grid-Container verwenden, um die Elemente mit einem der folgenden Werte auszurichten:

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
  align-items: start;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Using_align-items', '500', '500') }}

Denken Sie daran, dass, sobald Sie `align-items: start` setzen, die Höhe jedes Kind-`<div>`s durch den Inhalt des `<div>`s bestimmt wird. Dies steht im Gegensatz zum vollständigen Weglassen von [`align-items`](/de/docs/Web/CSS/align-items), in welchem Fall die Höhe jedes `<div>`s sich streckt, um seinen Grid-Bereich auszufüllen.

Die Eigenschaft {{cssxref("align-items")}} setzt die Eigenschaft {{cssxref("align-self")}} für alle Kind-Grid-Elemente. Das bedeutet, dass Sie die Eigenschaft individuell festlegen können, indem Sie `align-self` auf einem Grid-Element verwenden.

### Verwendung von align-self

Im nächsten Beispiel verwende ich die Eigenschaft `align-self`, um die verschiedenen Ausrichtungswerte zu demonstrieren. Der erste Bereich zeigt das Standardverhalten von `align-self`, das sich streckt. Das zweite Element hat einen `align-self`-Wert von `start`, das dritte `end` und das vierte `center`.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  align-self: start;
}
.item3 {
  grid-area: c;
  align-self: end;
}
.item4 {
  grid-area: d;
  align-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Using_align-self', '500', '500') }}

### Elemente mit einem intrinsischen Seitenverhältnis

Die Spezifikation beschreibt, dass das Standardverhalten in {{cssxref("align-self")}} darin besteht, sich zu strecken, außer für Elemente, die ein intrinsisches {{Glossary("aspect_ratio", "Seitenverhältnis")}} haben, in diesem Fall verhalten sie sich wie `start`. Der Grund dafür ist, dass, wenn Elemente mit einem Seitenverhältnis auf Strecken gesetzt würden, diese Standardeinstellung sie verzerren würde.

Dieses Verhalten wurde nun in der Spezifikation klargestellt, während Browser noch die korrekte Implementierung umsetzen müssen. Bis das passiert, können Sie sicherstellen, dass Elemente nicht gestreckt werden, wie z.B. Bilder, die direkte Kinder des Grids sind, indem Sie {{cssxref("align-self")}} und {{cssxref("justify-self")}} auf start setzen. Dies wird das korrekte Verhalten nachahmen, sobald es implementiert ist.

## Rechtfertigung von Elementen auf der Inline-Achse

Während {{cssxref("align-items")}} und {{cssxref("align-self")}} die Ausrichtung von Elementen auf der Blockachse behandeln, erledigen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} dasselbe auf der Inline-Achse. Die Werte, die Sie wählen können, sind die gleichen wie für `align-self`.

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

Unten sehen Sie dasselbe Beispiel, das für {{cssxref("align-items")}} verwendet wurde. Dieses Mal wenden wir die Eigenschaft {{cssxref("justify-self")}} an.

Auch hier ist die Standardeinstellung `stretch`, abgesehen von Elementen mit einem intrinsischen Seitenverhältnis. Das bedeutet, dass Git-Elemente standardmäßig ihren Git-Bereich abdecken, es sei denn, Sie ändern dies, indem Sie die Ausrichtung anpassen. Das erste Element im Beispiel zeigt diese Standardausrichtung:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  gap: 10px;
  grid-auto-rows: 100px;
  grid-template-areas:
    "a a a a b b b b"
    "a a a a b b b b"
    "c c c c d d d d"
    "c c c c d d d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
  justify-self: start;
}
.item3 {
  grid-area: c;
  justify-self: end;
}
.item4 {
  grid-area: d;
  justify-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Justifying_Items_on_the_Inline_Axis', '500', '500') }}

Wie bei {{cssxref("align-self")}} und {{cssxref("align-items")}}, können Sie {{cssxref("justify-items")}} auf den Grid-Container anwenden, um den {{cssxref("justify-self")}}-Wert für alle Elemente festzulegen.

Die Eigenschaften {{cssxref("justify-self")}} und {{cssxref("justify-items")}} sind in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout), und dass es auf der Achse mehrere Elemente geben kann, was es unmöglich macht, ein einzelnes Element zu rechtfertigen. Um Elemente entlang der Haupt- und Inline-Achse in Flexbox auszurichten, verwenden Sie die Eigenschaft {{cssxref("justify-content")}}.

### Kurzform-Eigenschaften

Die Eigenschaft {{CSSxRef("place-items")}} ist eine Kurzform für {{CSSxRef("align-items")}} und {{CSSxRef("justify-items")}}.

Die Eigenschaft {{CSSxRef("place-self")}} ist eine Kurzform für {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}}.

## Ein Element im Bereich zentrieren

Indem wir die Align- und Justify-Eigenschaften kombinieren, können wir ein Element leicht innerhalb eines Grid-Bereichs zentrieren.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: 200px;
  grid-template-areas:
    ". a a ."
    ". a a .";
}
.item1 {
  grid-area: a;
  align-self: center;
  justify-self: center;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
</div>
```

{{ EmbedLiveSample('Center_an_item_in_the_area', '500', '500') }}

## Die Git-Spuren auf der Blockachse ausrichten

Wenn Sie eine Situation haben, in der Ihre Grid-Spuren einen Bereich nutzen, der kleiner als der Grid-Container ist, dann können Sie die Grid-Spuren selbst innerhalb dieses Containers ausrichten. Auch hier funktioniert dies auf den Block- und Inline-Achsen, wobei {{cssxref("align-content")}} die Spuren auf der Blockachse ausrichtet und {{cssxref("justify-content")}} die Ausrichtung auf der Inline-Achse durchführt. Die Eigenschaft {{CSSxRef("place-content")}} ist eine Kurzform für {{cssxref("align-content")}} und {{cssxref("justify-content")}}. Die Werte für {{cssxref("align-content")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} sind:

- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `space-around`
- `space-between`
- `space-evenly`
- `baseline`
- `first baseline`
- `last baseline`

Im untenstehenden Beispiel habe ich einen Grid-Container von 500 Pixeln x 500 Pixeln. Ich habe 3 Reihen- und Spuren-Spuren von jeweils 100 Pixeln mit einem 10 Pixel breiten Spalt definiert. Das bedeutet, dass im Grid-Container sowohl in der Block- als auch in der Inline-Richtung Platz ist.

Die Eigenschaft `align-content` wird auf den Grid-Container angewendet, da sie auf das gesamte Grid wirkt.

### Standardausrichtung

Das Standardverhalten im Grid-Layout ist `start`, weshalb unsere Git-Spuren in der oberen linken Ecke des Grids sind, ausgerichtet gegen die Start-Gitlinien:

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Default_alignment', '500', '550') }}

### Einstellen von align-content: end

Wenn ich meinem Container `align-content` mit einem Wert von `end` hinzufüge, bewegen sich die Spuren alle zur Endlinie des Grid-Containers in der Blockdimension:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: end;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Setting_align-content_end', '500', '550') }}

### Einstellen von align-content: space-between

Wir können auch Werte für diese Eigenschaft verwenden, die Ihnen möglicherweise aus Flexbox bekannt sind; die Raumverteilungswerte von `space-between`, `space-around` und `space-evenly`. Wenn wir {{cssxref("align-content")}} auf `space-between` aktualisieren, können Sie sehen, wie die Elemente in unserem Git verteilt werden:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: space-between;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Setting_align-content_space-between', '500', '600') }}

Es ist erwähnenswert, dass die Verwendung dieser Raumverteilungswerte dazu führen kann, dass Elemente auf Ihrem Grid größer werden. Wenn ein Element mehr als eine Grid-Spur überspannt, weil zusätzlicher Platz zwischen den Spuren hinzugefügt wird, muss dieses Element größer werden, um den Platz aufzunehmen. Wir arbeiten stets in einem strengen Grid. Daher, wenn Sie entscheiden, diese Werte zu verwenden, stellen Sie sicher, dass der Inhalt Ihrer Spuren in der Lage ist, mit dem zusätzlichen Platz umzugehen, oder dass Sie die Ausrichtungseigenschaften auf die Elemente angewendet haben, um sie dazu zu bringen, sich an den Anfang zu bewegen anstatt sich zu strecken.

Im nachstehenden Bild habe ich das Grid mit `align-content`-Wert `start` neben das Grid gesetzt, wenn `align-content` den Wert `space-between` hat. Sie können sehen, wie die Elemente 1 und 2, die zwei Zeilenspuren überspannen, zusätzliche Höhe erlangt haben, da sie den zusätzlichen Raum aufgenommen haben, der der Lücke zwischen diesen beiden Spuren hinzugefügt wurde:

![Demonstration, wie Elemente größer werden, wenn wir space-between verwenden.](7_space-between.png)

## Die Git-Spuren auf der Inline-Achse rechtfertigen

Auf der Inline-Achse können wir {{cssxref("justify-content")}} verwenden, um die gleiche Art der Ausrichtung durchzuführen, die wir mit {{cssxref("align-content")}} für die Blockachse verwendet haben.

Im selben Beispiel setze ich {{cssxref("justify-content")}} auf `space-around`. Dies führt erneut dazu, dass Spuren, die mehr als eine Spalte spannen, zusätzlichen Raum gewinnen:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
  align-content: space-between;
  justify-content: space-around;
}
.item1 {
  grid-area: a;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Justifying_the_grid_tracks_on_the_inline_axis', '500', '550') }}

## Ausrichtung und Auto-Ränder

Eine weitere Möglichkeit, Elemente innerhalb ihres Bereichs auszurichten, besteht darin, Auto-Ränder zu verwenden. Wenn Sie jemals Ihr Layout im Ansichtsfenster zentriert haben, indem Sie den rechten und linken Rand des Container-Blocks auf `auto` gesetzt haben, wissen Sie, dass ein Auto-Rand den gesamten verfügbaren Platz absorbiert. Durch das Setzen des Randes auf beide Seiten wird der Block in die Mitte gedrückt, da beide Ränder versuchen, den gesamten Raum einzunehmen.

Im nächsten Beispiel habe ich dem Element 1 einen linken Rand von `auto` gegeben. Sie können sehen, wie der Inhalt jetzt zur rechten Seite des Bereichs verschoben wird, da der Auto-Rand den verbleibenden Platz nach Zuweisung des Raums für den Inhalt dieses Elements übernimmt:

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}

.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  height: 500px;
  width: 500px;
  gap: 10px;
  grid-template-areas:
    "a a b"
    "a a b"
    "c d d";
}
.item1 {
  grid-area: a;
  margin-left: auto;
}
.item2 {
  grid-area: b;
}
.item3 {
  grid-area: c;
}
.item4 {
  grid-area: d;
}
```

```html
<div class="wrapper">
  <div class="item1">Item 1</div>
  <div class="item2">Item 2</div>
  <div class="item3">Item 3</div>
  <div class="item4">Item 4</div>
</div>
```

{{ EmbedLiveSample('Alignment_and_auto_margins', '500', '550') }}

Sie können sehen, wie das Element mit dem [Firefox-Git-Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) ausgerichtet ist:

![Bild zeigt Auto-Ränder mit dem Git-Highlighter.](7_auto_margins.png)

## Ausrichtung und Schreibmodi

In all diesen Beispielen habe ich in Englisch gearbeitet, das eine Links-nach-Rechts-Sprache ist. Das bedeutet, dass unsere Startlinien oben und links von unserem Git sind, wenn wir in physischen Richtungen denken.

CSS-Grid-Layout und die Box-Ausrichtungs-Spezifikation sind darauf ausgelegt, mit Schreibmodi in CSS zu arbeiten. Das bedeutet, dass, wenn Sie in einer Rechts-nach-Links-Sprache arbeiten, wie Arabisch, der Start des Grids oben und rechts wäre, sodass der Standard von `justify-content: start` wäre, dass Git-Spuren auf der rechten Seite des Grids beginnen.

Das Setzen von Auto-Rändern, die Verwendung von `margin-right` oder `margin-left` oder die absolute Positionierung von Elementen mit den Offsets `top`, `right`, `bottom` und `left` würde jedoch keine Schreibmodi berücksichtigen. Im nächsten Leitfaden werden wir genauer auf diese Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi eingehen. Dies wird wichtig zu verstehen sein, wenn Sie Websites entwickeln, die in mehreren Sprachen angezeigt werden, oder wenn Sie Sprachen oder Schreibmodi in einem Design mischen möchten.
