---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Das CSS-Grid-Layout implementiert die Spezifikation [Box Alignment Level 3](https://drafts.csswg.org/css-align/), die auch von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) zum Ausrichten von Elementen in ihrem flexiblen Container verwendet wird. Diese Spezifikation legt fest, wie die Ausrichtung in allen verschiedenen Layout-Methoden funktionieren sollte. Layout-Methoden werden, sofern möglich, der Spezifikation entsprechen und individuelles Verhalten basierend auf ihren Unterschieden (Eigenschaften und Einschränkungen) implementieren. Während die Spezifikation derzeit Ausrichtungsdetails für alle Layout-Methoden festlegt, haben Browser noch nicht alle Aspekte der Spezifikation vollständig implementiert; jedoch wurde die CSS-Grid-Layout-Methode weitgehend übernommen.

Dieses Handbuch bietet Demonstrationen, wie die Box-Ausrichtung im Grid-Layout funktioniert. Sie werden viele Ähnlichkeiten in der Funktionsweise dieser Eigenschaften und Werte in Flexbox erkennen. Aufgrund der zweidimensionalen Natur von Grid und der eindimensionalen Natur von Flexbox gibt es jedoch einige kleine Unterschiede, auf die Sie achten sollten. Daher beginnen wir mit einem Blick auf die beiden Achsen, mit denen wir bei der Ausrichtung von Elementen im Grid arbeiten.

## Die zwei Achsen eines Grid-Layouts

Beim Arbeiten mit Grid-Layout stehen Ihnen zwei Achsen zur Verfügung, mit denen Sie Elemente ausrichten können – die _Block-Achse_ und die _Inline-Achse_. Die Block-Achse ist die Achse, auf der Blöcke im Block-Layout angeordnet werden. Wenn Sie zwei Absätze auf Ihrer Seite haben, werden diese untereinander angezeigt. Dies ist die Richtung, die wir als Block-Achse beschreiben.

![Blockachsen sind vertikal.](block_axis.png)

Die _Inline-Achse_ verläuft quer zur Block-Achse. Es ist die Richtung, in die Text im regulären Inline-Fluss verläuft.

![Inline- / Zeilenachse sind horizontal.](7_inline_axis.png)

Wir können den Inhalt innerhalb von Grid-Bereichen und die Grid-Tracks selbst auf diesen beiden Achsen ausrichten.

## Ausrichten von Elementen auf der Block-Achse

Die Eigenschaften {{cssxref("align-self")}} und {{cssxref("align-items")}} steuern die Ausrichtung auf der Block-Achse. Wenn wir diese Eigenschaften verwenden, ändern wir die Ausrichtung des Elements innerhalb des Grid-Bereichs, in dem Sie es platziert haben.

### Die Verwendung von align-items

Im folgenden Beispiel habe ich vier Grid-Bereiche innerhalb meines Grids. Ich kann die Eigenschaft {{cssxref("align-items")}} auf den Grid-Container anwenden, um die Elemente mit einem der folgenden Werte auszurichten:

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

Denken Sie daran, dass sobald Sie `align-items: start` setzen, die Höhe jedes Kind-`<div>` durch den Inhalt des `<div>` bestimmt wird. Dies steht im Gegensatz zum vollständigen Weglassen von [`align-items`](/de/docs/Web/CSS/align-items), in welchem Fall die Höhe jedes `<div>` sich streckt, um seinen Grid-Bereich auszufüllen.

Die Eigenschaft {{cssxref("align-items")}} setzt die Eigenschaft {{cssxref("align-self")}} für alle Kind-Grid-Elemente. Das bedeutet, dass Sie die Eigenschaft individuell über `align-self` auf ein Grid-Element anwenden können.

### Die Verwendung von align-self

Im nächsten Beispiel demonstriere ich mithilfe der Eigenschaft `align-self` die unterschiedlichen Ausrichtungswerte. Der erste Bereich zeigt das Standardverhalten von `align-self`, das `stretch` ist. Das zweite Element hat einen `align-self`-Wert von `start`, das dritte `end` und das vierte `center`.

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

Die Spezifikation beschreibt, dass das Standardverhalten bei {{cssxref("align-self")}} `stretch` ist, außer bei Elementen mit einem intrinsischen {{glossary("aspect ratio")}}. In diesem Fall verhalten sie sich wie `start`. Der Grund dafür ist, dass, wenn Elemente mit einem Seitenverhältnis auf `stretch` gesetzt werden, diese Standardeinstellung sie verzerren würde.

Dieses Verhalten wurde nun in der Spezifikation klargestellt, obwohl die Browser das korrekte Verhalten noch nicht implementiert haben. Bis dies geschieht, können Sie sicherstellen, dass sich Elemente, wie Bilder, die direkte Kinder des Grids sind, nicht strecken, indem Sie {{cssxref("align-self")}} und {{cssxref("justify-self")}} auf start setzen. Dies wird das korrekte Verhalten nachahmen, sobald es implementiert ist.

## Justierung von Elementen auf der Inline-Achse

Während {{cssxref("align-items")}} und {{cssxref("align-self")}} die Ausrichtung von Elementen auf der Block-Achse regeln, übernehmen {{cssxref("justify-items")}} und {{cssxref("justify-self")}} dieselbe Aufgabe auf der Inline-Achse. Die Werte, die Sie auswählen können, sind die gleichen wie bei `align-self`.

- `auto`
- `normal`
- `start`
- `end`
- `center`
- `stretch`
- `baseline`
- `first baseline`
- `last baseline`

Sie können das gleiche Beispiel wie für {{cssxref("align-items")}} unten sehen. Dieses Mal wenden wir die {{cssxref("justify-self")}}-Eigenschaft an.

Auch hier ist die Standardeinstellung `stretch`, außer bei Elementen mit einem intrinsischen Seitenverhältnis. Das bedeutet, dass Grid-Elemente standardmäßig ihren Grid-Bereich abdecken, es sei denn, Sie ändern dies, indem Sie die Ausrichtung einstellen. Das erste Element im Beispiel demonstriert diese Standardausrichtung:

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

Die Eigenschaften {{cssxref("justify-self")}} und {{cssxref("justify-items")}} sind in Flexbox nicht implementiert. Dies liegt an der eindimensionalen Natur von [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) und daran, dass es mehrere Elemente entlang der Achse geben kann, wodurch es unmöglich ist, ein einzelnes Element zu justieren. Um Elemente entlang der Haupt-Inline-Achse in Flexbox auszurichten, verwenden Sie die Eigenschaft {{cssxref("justify-content")}}.

### Kurzschreibweise-Eigenschaften

Die {{CSSxRef("place-items")}}-Eigenschaft ist eine Kurzschreibweise für {{CSSxRef("align-items")}} und {{CSSxRef("justify-items")}}.

Die {{CSSxRef("place-self")}}-Eigenschaft ist eine Kurzschreibweise für {{CSSxRef("align-self")}} und {{CSSxRef("justify-self")}}.

## Ein Element im Bereich zentrieren

Durch Kombinieren der Align- und Justify-Eigenschaften können wir ein Element leicht innerhalb eines Grid-Bereichs zentrieren.

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

Wenn Sie eine Situation haben, in der Ihre Grid-Tracks einen Bereich nutzen, der kleiner als der Grid-Container ist, können Sie die Grid-Tracks selbst innerhalb dieses Containers ausrichten. Wieder einmal funktioniert dies auf der Block- und Inline-Achse, wobei {{cssxref("align-content")}} die Tracks auf der Block-Achse ausrichtet und {{cssxref("justify-content")}} die Ausrichtung auf der Inline-Achse übernimmt. Die {{CSSxRef("place-content")}}-Eigenschaft ist eine Kurzschreibweise für {{cssxref("align-content")}} und {{cssxref("justify-content")}}. Die Werte für {{cssxref("align-content")}}, {{cssxref("justify-content")}} und {{cssxref("place-content")}} sind:

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

Im folgenden Beispiel habe ich einen Grid-Container von 500 Pixeln mal 500 Pixeln. Ich habe 3 Reihen und Spalten-Tracks mit jeweils 100 Pixeln und einem 10 Pixel-Gitter definiert. Das bedeutet, dass in dem Grid-Container Raum sowohl in Block- als auch in Inline-Richtung vorhanden ist.

Die `align-content`-Eigenschaft wird auf den Grid-Container angewendet, da sie auf das gesamte Grid wirkt.

### Standardausrichtung

Das Standardverhalten im Grid-Layout ist `start`, weshalb sich unsere Grid-Tracks in der oberen linken Ecke des Grids befinden und gegen die Start-Grid-Linien ausgerichtet sind:

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

Wenn ich `align-content` auf meinen Container anwende, mit einem Wert von `end`, bewegen sich die Tracks alle zur Endlinie des Grid-Containers in der Block-Dimension:

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

Wir können auch Werte für diese Eigenschaft verwenden, die Sie vielleicht bereits von Flexbox kennen; die Raumverteilungswerte `space-between`, `space-around` und `space-evenly`. Wenn wir {{cssxref("align-content")}} auf `space-between` aktualisieren, können Sie sehen, wie sich die Elemente in unserem Grid verteilen:

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

Es ist zu beachten, dass die Verwendung dieser Raumverteilungswerte dazu führen kann, dass Elemente in Ihrem Grid größer werden. Wenn ein Element mehr als einen Grid-Track überspannt, wird der zusätzliche Platz, der zwischen den Tracks hinzugefügt wird, von diesem Element absorbiert, wodurch es größer wird. Wir arbeiten stets in einem strikten Grid. Daher, wenn Sie diese Werte verwenden möchten, stellen Sie sicher, dass der Inhalt Ihrer Tracks mit dem zusätzlichen Raum umgehen kann oder dass Sie Ausrichtungseigenschaften auf die Elemente angewendet haben, um sie dazu zu bringen, sich an den Anfang zu bewegen, anstatt sich zu strecken.

Im folgenden Bild habe ich das Grid mit `align-content` mit einem Wert von `start` neben das Grid gesetzt, wenn `align-content` den Wert `space-between` hat. Sie können sehen, wie die Elemente 1 und 2, die zwei Reihen-Tracks überspannen, zusätzliche Höhe erhalten haben, da sie den zusätzlichen Raum übernommen haben, der zum Abstand zwischen diesen beiden Tracks hinzugefügt wurde:

![Darstellung, wie Elemente größer werden, wenn wir space-between verwenden.](7_space-between.png)

## Justierung der Grid-Tracks auf der Inline-Achse

Auf der Inline-Achse können wir {{cssxref("justify-content")}} verwenden, um die gleiche Art der Ausrichtung zu erreichen, die wir mit {{cssxref("align-content")}} auf der Block-Achse angewendet haben.

Im gleichen Beispiel setze ich {{cssxref("justify-content")}} auf `space-around`. Dies führt erneut dazu, dass Tracks, die mehr als einen Spalten-Track überspannen, zusätzlichen Platz gewinnen:

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

Ein weiterer Weg, Elemente innerhalb ihres Bereichs auszurichten, ist die Verwendung von automatischen Rändern. Wenn Sie jemals Ihr Layout im Viewport zentriert haben, indem Sie den rechten und linken Rand des Container-Blocks auf `auto` gesetzt haben, wissen Sie, dass ein automatischer Rand den gesamten verfügbaren Platz aufnimmt. Durch das Setzen des Rands auf beiden Seiten auf `auto`, wird der Block in die Mitte geschoben, da beide Ränder versuchen, den gesamten Raum zu nutzen.

Im nächsten Beispiel habe ich dem Element 1 einen linken Rand von `auto` gegeben. Sie können sehen, wie sich der Inhalt nun auf die rechte Seite des Bereichs verschoben hat, da der automatische Rand den verbleibenden Platz einnimmt, nachdem dem Inhalt dieses Elements Raum zugewiesen wurde:

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

Sie können sehen, wie das Element durch die Verwendung des [Firefox-Grid-Highlighter](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) ausgerichtet ist:

![Bild, das automatische Ränder mit dem Grid-Highlighter zeigt.](7_auto_margins.png)

## Ausrichtung und Schreibmodi

In all diesen Beispielen habe ich mit Englisch gearbeitet, was eine Sprache ist, die von links nach rechts verläuft. Das bedeutet, dass unsere Startlinien oben und links unseres Grids sind, wenn wir in physischen Richtungen denken.

CSS-Grid-Layout und die Box Alignment-Spezifikation sind so gestaltet, dass sie mit Schreibmodi in CSS arbeiten. Das bedeutet, dass, wenn Sie mit einer Sprache arbeiten, die von rechts nach links verläuft, wie Arabisch, der Start des Grids oben und rechts wäre, so dass der Standard von `justify-content: start` die Grid-Tracks auf der rechten Seite des Grids starten würde.

Das Festlegen von automatischen Rändern, indem `margin-right` oder `margin-left` verwendet wird, oder das absolut Positionieren von Elementen mit den Versätzen `top`, `right`, `bottom` und `left` würde die Schreibmodi jedoch nicht berücksichtigen. Im nächsten Leitfaden werden wir uns weiter mit dieser Interaktion zwischen CSS-Grid-Layout, Box-Ausrichtung und Schreibmodi befassen. Dies wird wichtig sein zu verstehen, wenn Sie Websites entwickeln, die in mehreren Sprachen angezeigt werden, oder wenn Sie Sprachen oder Schreibmodi in einem Design mischen möchten.
