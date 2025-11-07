---
title: Spannen und Ausbalancieren von Spalten
slug: Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden schauen wir uns an, wie Elemente in einem Multi-Spalten-Container (_multicol_) über Spalten hinweg gespannt werden können und wie man kontrolliert, wie die Spalten gefüllt werden.

## Spannen der Spalten

Um ein Element über Spalten hinweg spannen zu lassen, verwenden Sie die Eigenschaft {{cssxref("column-span")}} mit dem Wert `all`. Dies bewirkt, dass das Element zu einem _Spanner_ wird und alle Spalten überspannt.

Jedes Nachfahren-Element des Multicol-Containers kann zu einem Spanner gemacht werden, einschließlich sowohl direkter als auch indirekter Kindelemente. Zum Beispiel könnte eine direkt im Container verschachtelte Überschrift zu einem Spanner werden, ebenso wie eine Überschrift, die in einem {{HTMLElement("section")}} innerhalb des Multicol-Containers verschachtelt ist.

Im folgenden Beispiel ist das `<h2>`-Element auf `column-span: all` gesetzt und überspannt alle Spalten.

```html live-sample___h2-span
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
  <h2>A heading</h2>
  <p>
    Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
    dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
    zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___h2-span
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}

h2 {
  column-span: all;
  background-color: #4d4e53;
  color: white;
}
```

{{EmbedLiveSample("h2-span", "", "420px")}}

Im zweiten Beispiel befindet sich die Überschrift in einem {{HTMLElement("article")}}-Element und überspannt dennoch den Inhalt, wie erwartet.

```html live-sample___nested-h2-span
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
  <article>
    <h2>A heading</h2>
    <p>
      Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
      dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
      zucchini.
    </p>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </article>
</div>
```

```css live-sample___nested-h2-span
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}

h2 {
  column-span: all;
  background-color: #4d4e53;
  color: white;
}
```

{{EmbedLiveSample("nested-h2-span", "", "420px")}}

Wenn ein Spanner eingeführt wird, unterbricht er den Fluss der Spalten; die Spalten werden nach dem Spanner neu gestartet und erstellen effektiv eine neue Gruppe von Spaltenboxen. Der Inhalt springt nicht über ein spannendes Element hinweg.

### Einschränkungen von column-span

`column-span` kann nur zwei Werte haben. Der Initialwert `none` bedeutet, dass das Element nicht spannt und innerhalb einer Spalte bleibt. Der Wert `all` bedeutet, dass das Element alle Spalten überspannt. Es gibt keine Werte, die ein teilweises Spannen ermöglichen, wie das Überspannen eines Elements über zwei von drei Spalten.

### Dinge, auf die Sie achten sollten

Wenn das spannende Element sich innerhalb eines anderen Elements mit Margen, Padding und einer Grenze oder Hintergrundfarbe befindet, kann die Box oberhalb des Spanners erscheinen, wobei der Rest des Inhalts darunter angezeigt wird. Aus diesem Grund sollte darauf geachtet werden, wenn ein Element über alle Spalten gespannt wird, um sicherzustellen, dass dieses Szenario berücksichtigt wird.

```html hidden live-sample___mpb-span
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
    corn soko endive gumbo gourd.
  </p>
  <article>
    <h2>A heading</h2>
    <p>
      Parsley shallot courgette tatsoi pea sprouts fava bean collard greens
      dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko
      zucchini.
    </p>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko.
    </p>
  </article>
</div>
```

```css live-sample___mpb-span
body {
  font: 1.2em / 1.5 sans-serif;
}

article {
  border: 1px solid red;
  padding: 10px;
}

.container {
  column-width: 250px;
}
h2 {
  background-color: #4d4e53;
  color: white;
  column-span: all;
}
```

{{EmbedLiveSample("mpb-span", "", "420px")}}

Darüber hinaus, wenn ein spannendes Element später im Inhalt erscheint, kann es zu unerwartetem oder unerwünschtem Verhalten führen, wenn nicht genügend Inhalt vorhanden ist, um Spalten nach dem Spanner zu erstellen. Verwenden Sie Spannen vorsichtig und testen Sie es an verschiedenen Breakpoints, um sicherzustellen, dass Sie den gewünschten Effekt erzielen.

## Füllen und Ausbalancieren von Spalten

Ein ausgewogenes Set von Spalten ist eines, bei dem alle Spalten ungefähr die gleiche Menge an Inhalt haben. Füllen und Ausbalancieren sind relevant, wenn die Menge des Inhalts nicht mit der bereitgestellten Menge an Raum übereinstimmt, wie wenn eine {{CSSXref("height")}} auf dem Container deklariert ist.

Der Initialwert für {{cssxref("column-fill")}} ist `balance`. Der Wert `balance` bedeutet, dass alle Spalten so ausgeglichen wie möglich sind. In fragmentierten Kontexten, wie [paged media](/de/docs/Web/CSS/Guides/Paged_media), wird nur das letzte Fragment ausbalanciert. Das bedeutet, dass auf der letzten Seite die endgültige Gruppe von Spaltenboxen ausgeglichen ist.

Der andere Ausgleichswert, `balance-all`, balanciert alle Spalten in fragmentierten Kontexten aus.

Die Spalten in diesem Beispiel enthalten ein Bild und etwas Text, die ausgeglichen sind. Das Bild, das nicht gebrochen werden kann, befindet sich in der ersten Spalte. Die anderen Spalten sind ausbalanciert und mit gleichen Mengen an Text gefüllt.

```html live-sample___balance
<div class="container">
  <img
    alt="Multiple hot air balloons in a clear sky, a crowd of spectators gather in the foreground."
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion.
  </p>
</div>
```

```css live-sample___balance
body {
  font: 1.2em / 1.5 sans-serif;
}
h2 {
  background-color: #4d4e53;
  color: white;
}
img {
  max-width: 100%;
}
.container {
  column-width: 200px;
  column-fill: balance;
  height: 250px;
}
```

{{EmbedLiveSample("balance", "", "250px")}}

Der `auto`-Wert für `column-fill` füllt eine Spalte nacheinander, indem die erste Spalte in der Richtung inline-start gefüllt wird, bevor Inhalte in nachfolgende Spalten platziert werden, anstatt alle Spalten gleichermaßen auszugleichen und zu füllen. In diesem Beispiel haben wir `column-fill` auf `auto` geändert. Die Spalten sind bis zur Höhe des Containers gefüllt, wobei am Ende leere Spalten verbleiben.

```html hidden live-sample___auto
<div class="container">
  <img
    alt="Multiple hot air balloons in a clear sky, a crowd of spectators gather in the foreground."
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion.
  </p>
</div>
```

```css live-sample___auto
body {
  font: 1.2em / 1.5 sans-serif;
}
h2 {
  background-color: #4d4e53;
  color: white;
}
img {
  max-width: 100%;
}

.container {
  column-width: 150px;
  column-fill: auto;
  height: 250px;
}
```

{{EmbedLiveSample("auto", "", "250px")}}

## Nächste Schritte

Im nächsten Leitfaden werden Sie lernen, [wie Multicol mit Überlauf umgeht](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_overflow) innerhalb von Spalten und wenn es mehr Spalten gibt, als in den Container passen.
