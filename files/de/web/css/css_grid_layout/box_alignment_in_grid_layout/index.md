---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Das CSS-Grid-Layout implementiert die Spezifikation [Box Alignment Level 3](https://drafts.csswg.org/css-align/), die denselben Standard wie [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) verwendet, um Elemente innerhalb seines Flex-Containers auszurichten. Diese Spezifikation beschreibt, wie die Ausrichtung in allen verschiedenen Layout-Methoden funktionieren sollte. Layout-Methoden werden sich, wo möglich, an die Spezifikation anpassen und individuelles Verhalten basierend auf ihren Unterschieden (Merkmale und Einschränkungen) implementieren. Obwohl die Spezifikation derzeit Ausrichtungsdetails für alle Layout-Methoden spezifiziert, haben Browser noch nicht alle Teile der Spezifikation vollständig implementiert; jedoch wurde die CSS-Grid-Layout-Methode weitgehend übernommen.

Dieser Leitfaden zeigt Demonstrationen, wie die Box-Ausrichtung im Grid-Layout funktioniert. Sie werden viele Ähnlichkeiten in der Funktionsweise dieser Eigenschaften und Werte in Flexbox sehen. Da Grid zweidimensional und Flexbox eindimensional ist, gibt es einige kleine Unterschiede, auf die Sie achten sollten. Daher beginnen wir mit einem Blick auf die beiden Achsen, mit denen wir bei der Ausrichtung von Dingen in einem Raster arbeiten.

## Die zwei Achsen eines Grid-Layouts

Bei der Arbeit mit Grid-Layout stehen Ihnen zwei Achsen zur Verfügung, gegen die Sie Dinge ausrichten können – die _Block-Achse_ und die _Inline-Achse_. Die Block-Achse ist die Achse, auf der Blöcke im Block-Layout angeordnet werden. Wenn Sie zwei Absätze auf Ihrer Seite haben, werden diese übereinander angezeigt, also in dieser Richtung, die wir als Block-Achse beschreiben.

![Blockachsen sind vertikal.](block_axis.png)

Die _Inline-Achse_ verläuft quer zur Block-Achse, in der Richtung, in der Text im normalen Inline-Fluss verläuft.

![Inline- / Zeilenachsen sind horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb von Grid-Bereichen und die Grid-Tracks selbst auf diesen beiden Achsen ausrichten.

## Ausrichten von Elementen auf der Block-Achse

Die {{cssxref("align-self")}}- und {{cssxref("align-items")}}-Eigenschaften steuern die Ausrichtung auf der Block-Achse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des zugewiesenen Grid-Bereichs.

### Verwenden von align-items

Im folgenden Beispiel habe ich vier Grid-Bereiche innerhalb meines Grids. Ich kann die {{cssxref("align-items")}}-Eigenschaft auf dem Grid-Container verwenden, um die Elemente mit einem der folgenden Werte auszurichten:

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

Beachten Sie, dass, sobald Sie `align-items: start` setzen, die Höhe jedes `<div>`-Kindesbereichs durch den Inhalt des `<div>` bestimmt wird. Dies steht im Gegensatz dazu, [`align-items`](/de/docs/Web/CSS/align-items) komplett wegzulassen, wobei die Höhe jedes `<div>` so gedehnt wird, dass es seinen Grid-Bereich ausfüllt.

Die Eigenschaft {{cssxref("align-items")}} setzt die Eigenschaft {{cssxref("align-self")}} für alle untergeordneten Grid-Elemente. Das bedeutet, dass Sie die Eigenschaft individuell festlegen können, indem Sie `align-self` auf einem Grid-Element verwenden.

### Verwenden von align-self

Im nächsten Beispiel verwende ich die `align-self`-Eigenschaft, um die unterschiedlichen Ausrichtungswerte zu demonstrieren. Der erste Bereich zeigt das Standardverhalten von `align-self`, welches auf Stretch eingestellt ist. Das zweite Element hat einen `align-self`-Wert von `start`, das dritte `end` und das vierte `center`.

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

Die Spezifikation legt fest, dass das Standardverhalten bei {{cssxref("align-self")}} auf Stretch eingestellt ist, außer für Elemente mit einem intrinsischen [Seitenverhältnis](/de/docs/Glossary/aspect_ratio), die sich in diesem Fall wie `start` verhalten. Der Grund dafür ist, dass, wenn Elemente mit einem Seitenverhältnis auf Stretch gesetzt werden, diese Vorgabe sie verzerren würde.

Dieses Verhalten wurde nun in der Spezifikation klargestellt, wobei Browser die richtige Implementierung noch umsetzen müssen. Bis dies erfolgt, können Sie sicherstellen, dass Elemente, wie Bilder, die direkte Kinder des Grids sind, nicht gestreckt werden, indem Sie {{cssxref("align-self")}} und {{cssxref("justify-self")}} auf Start setzen. Dies wird das korrekte Verhalten nach der Implementierung nachahmen.

## Rechtfertigung der Elemente auf der Inline-Achse

Während {{cssxref("align-items")}} und {{cssxref("align-self")}} die Ausrichtung von Elementen auf der Block-Achse steuern, übernehmen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} dieselbe Aufgabe auf der Inline-Achse. Die Werte, aus denen Sie wählen können, sind dieselben wie bei `align-self`.

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

Sie können dasselbe Beispiel wie für {{cssxref("align-items")}} unten sehen. Dieses Mal wenden wir die {{cssxref("justify-self")}}-Eigenschaft an.

Auch hier ist der Standard `stretch`, es sei denn, es handelt sich um Elemente mit einem intrinsischen Seitenverhältnis. Dies bedeutet, dass Grid-Elemente standardmäßig ihren Grid-Bereich abdecken, es sei denn, Sie ändern dies durch Setzen der Ausrichtung. Das erste Element im Beispiel zeigt diese Standardausrichtung:

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

Wie bei {{cssxref("align-self")}} und {{cssxref("align-items")}}, können Sie {{cssxref("justify-items")}} auf den Grid-Container anwenden, um den {{cssxref("justify-self")}}-Wert für alle Elemente zu setzen.

Die {{cssxref("justify-self")}}- und {{cssxref("justify-items")}}-Eigenschaften sind in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und daran, dass es mehrere Elemente entlang der Achse geben kann, was es unmöglich macht, ein einzelnes Element zu rechtfertigen. Um Elemente entlang der Haupt-, Inline-Achse in Flexbox auszurichten, verwenden Sie die {{cssxref("justify-content")}}-Eigenschaft.

### Kurzform-Eigenschaften

Die {{CSSxRef("place-items")}}-Eigenschaft ist eine Kurzform für {{CSSxRef("align-items")}} und {{CSSxRef("justify-items")}}.

Die {{CSSxRef("place-self")}}-Eigenschaft ist eine Kurzform für {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}}.

## Ein Element im Bereich zentrieren

Durch Kombinieren der Ausrichtungs- und Rechtfertigungseigenschaften können wir ein Element einfach innerhalb eines Grid-Bereichs zentrieren.

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

## Ausrichten der Grid-Tracks auf der Block-Achse

Wenn Sie eine Situation haben, in der Ihre Grid-Tracks einen Bereich verwenden, der kleiner ist als der Grid-Container, dann können Sie die Grid-Tracks selbst innerhalb dieses Containers ausrichten. Wiederum arbeitet dies auf den Block- und Inline-Achsen, mit {{cssxref("align-content")}}, das die Tracks auf der Block-Achse ausrichtet, und {{cssxref("justify-content")}}, das die Ausrichtung auf der Inline-Achse durchführt. Die {{CSSxRef("place-content")}}-Eigenschaft ist eine Kurzform für {{cssxref("align-content")}} und {{cssxref("justify-content")}}. Die Werte für {{cssxref("align-content")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} sind:

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

Im folgenden Beispiel habe ich einen Grid-Container von 500 Pixeln mal 500 Pixeln. Ich habe 3 Zeilen- und Spuren-Layouts von jeweils 100 Pixeln mit einem 10-Pixel-Rahmen definiert. Das bedeutet, dass sowohl in Block- als auch in Inline-Richtung Platz im Grid-Container ist.

Die `align-content`-Eigenschaft wird auf den Grid-Container angewendet, da sie auf das gesamte Grid wirkt.

### Standardausrichtung

Das Standardverhalten im Grid-Layout ist `start`, weshalb unsere Grid-Tracks in der oberen linken Ecke des Grids, an den Startlinien des Grids ausgerichtet sind:

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

### Festlegen von align-content: end

Wenn ich `align-content` zu meinem Container hinzufüge, mit einem Wert von `end`, verschieben sich die Tracks alle zur Endlinie des Grid-Containers in der Block-Dimension:

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

### Festlegen von align-content: space-between

Wir können auch Werte für diese Eigenschaft verwenden, die Sie möglicherweise aus Flexbox kennen; die Raumverteilungswerte von `space-between`, `space-around` und `space-evenly`. Wenn wir {{cssxref("align-content")}} auf `space-between` aktualisieren, können Sie sehen, wie die Elemente in unserem Grid sich verteilen:

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

Es ist erwähnenswert, dass die Verwendung dieser Raumverteilungswerte möglicherweise dazu führen kann, dass Elemente in Ihrem Grid größer werden. Wenn ein Element mehr als einen Grid-Track überspannt, muss es größer werden, um den zusätzlichen Raum aufzunehmen, der zwischen diesen Tracks hinzugefügt wird. Wir arbeiten immer innerhalb eines strengen Grids. Daher, wenn Sie sich entscheiden, diese Werte zu verwenden, stellen Sie sicher, dass der Inhalt Ihrer Tracks mit dem zusätzlichen Raum zurechtkommt, oder dass Sie Ausrichtungs-Eigenschaften auf die Elemente angewendet haben, um sie zu veranlassen, sich zum Anfang zu bewegen anstatt sich zu dehnen.

Im folgenden Bild habe ich das Grid mit `align-content`, mit einem Wert von `start` neben das Grid gestellt, wenn `align-content` einen Wert von `space-between` hat. Sie können sehen, wie sich die Elemente 1 und 2, die zwei Zeilen-Tracks überspannen, zusätzliche Höhe angenommen haben, da sie den zusätzlichen Raum zwischen diesen beiden Tracks erhalten:

![Demonstration, wie Elemente größer werden, wenn wir space-between verwenden.](7_space-between.png)

## Rechtfertigung der Grid-Tracks auf der Inline-Achse

Auf der Inline-Achse können wir {{cssxref("justify-content")}} verwenden, um dieselbe Art von Ausrichtung vorzunehmen, die wir mit {{cssxref("align-content")}} auf der Block-Achse vorgenommen haben.

Mit demselben Beispiel setze ich {{cssxref("justify-content")}} auf `space-around`. Dies führt erneut dazu, dass Tracks, die mehr als eine Spalte-Track überspannen, zusätzlichen Raum erhalten:

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

## Ausrichtung und automatische Ränder

Eine weitere Möglichkeit, Elemente innerhalb ihres Bereichs auszurichten, ist die Verwendung von automatischen Rändern. Wenn Sie jemals Ihr Layout in der Ansicht zentriert haben, indem Sie den rechten und linken Rand des Container-Blocks auf `auto` gesetzt haben, wissen Sie, dass ein automatischer Rand den gesamten verfügbaren Platz absorbiert. Durch Setzen des Randes auf beiden Seiten auf `auto` wird der Block in die Mitte geschoben, da beide Ränder versuchen, den gesamten Raum einzunehmen.

Im nächsten Beispiel habe ich dem Element 1 einen linken Rand von `auto` gegeben. Sie können sehen, wie der Inhalt nun auf die rechte Seite des Bereichs verschoben wird, da der automatische Rand den verbleibenden Raum einnimmt, nachdem der Raum für den Inhalt dieses Elements zugewiesen wurde:

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

Sie können sehen, wie das Element mit dem [Firefox Grid Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) ausgerichtet ist:

![Abbildung, die automatische Ränder mit dem Grid Highlighter zeigt.](7_auto_margins.png)

## Ausrichtung und Schreibrichtungen

In all diesen Beispielen habe ich in Englisch gearbeitet, das eine links-nach-rechts-Sprache ist. Das bedeutet, dass unsere Startlinien oben links in unserem Raster sind, wenn wir in physikalischen Richtungen denken.

CSS-Grid-Layout und die Box-Ausrichtungsspezifikation sind darauf ausgelegt, mit Schreibrichtungen in CSS zu arbeiten. Dies bedeutet, dass, wenn Sie in einer rechts-nach-links-Sprache arbeiten, wie Arabisch, der Anfang des Grids oben rechts wäre, sodass der Standard für `justify-content: start` wäre, dass die Grid-Tracks auf der rechten Seite des Grids beginnen.

Durch das Setzen automatischer Ränder, mit `margin-right` oder `margin-left` jedoch, oder das absolute Positionieren von Elementen mit den Versetzungen `top`, `right`, `bottom` und `left` würden Schreibrichtungen nicht berücksichtigt. Im nächsten Leitfaden werden wir uns weiter mit dieser Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibrichtungen befassen. Dies wird wichtig zu verstehen sein, wenn Sie Websites entwickeln, die dann in mehreren Sprachen angezeigt werden, oder wenn Sie Sprachen oder Schreibrichtungen in einem Design mischen möchten.
