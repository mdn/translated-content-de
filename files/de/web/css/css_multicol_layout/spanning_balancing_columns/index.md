---
title: Spannen und Ausbalancieren von Spalten
slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

In diesem Leitfaden betrachten wir, wie man Elemente innerhalb des Multi-Column (_multicol_) Containers über Spalten spannen kann und wie man kontrolliert, wie die Spalten gefüllt werden.

## Spalten spannen

Um ein Element über Spalten hinweg zu spannen, verwenden Sie die {{cssxref("column-span")}} Eigenschaft mit dem Wert `all`. Dadurch wird das Element zu einem _Spanner_, der alle Spalten umfasst.

Jedes nachfolgende Element des Multicol-Containers kann zu einem Spanner gemacht werden, sowohl direkte als auch indirekte Nachkommen. Zum Beispiel könnte eine direkt im Container verschachtelte Überschrift zu einem Spanner werden, ebenso wie eine Überschrift, die in einem {{HTMLElement("section")}} innerhalb des Multicol-Containers verschachtelt ist.

Im folgenden Beispiel ist das `<h2>` Element auf `column-span: all` gesetzt und spannt alle Spalten.

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

In diesem zweiten Beispiel befindet sich die Überschrift in einem {{HTMLElement("article")}} Element, spannt jedoch trotzdem den Inhalt wie erwartet.

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

Wenn ein Spanner eingeführt wird, unterbricht er den Fluss der Spalten; die Spalten starten nach dem Spanner neu und erzeugen effektiv eine neue Reihe von Spaltenboxen. Der Inhalt springt nicht über ein spannendes Element hinweg.

### Einschränkungen von column-span

`column-span` kann nur zwei Werte haben. Der Anfangswert `none` bedeutet, dass das Element nicht spannt und innerhalb einer Spalte bleibt. Der Wert `all` bedeutet, dass das Element alle Spalten spannt. Es gibt keine Werte, die eine teilweise Spannweite ermöglichen, wie das Spannen über zwei von drei Spalten.

### Dinge, auf die Sie achten sollten

Wenn sich das spannende Element innerhalb eines anderen Elements mit Rändern, Polsterungen und einem Rahmen oder Hintergrundfarbe befindet, kann die Box über dem Spanner erscheinen, wobei der Rest des Inhalts darunter angezeigt wird. Aus diesem Grund sollte Vorsicht geboten sein, wenn ein Element über alle Spalten hinweg gespannt wird, um sicherzustellen, dass dieses Szenario berücksichtigt wird.

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

Darüber hinaus kann ein später im Inhalt auftretendes spannendes Element unerwartetes oder unerwünschtes Verhalten verursachen, wenn nicht genügend Inhalt vorhanden ist, um Spalten nach dem Spanner zu erstellen. Verwenden Sie Spannungen sorgfältig und testen Sie bei verschiedenen Auflösungen, um sicherzustellen, dass Sie den gewünschten Effekt erzielen.

## Füllen und Ausbalancieren von Spalten

Ein ausgewogenes Set von Spalten ist eines, bei dem alle Spalten ungefähr die gleiche Menge an Inhalt haben. Das Füllen und Ausbalancieren ist relevant, wenn die Menge an Inhalt nicht mit dem verfügbaren Platz übereinstimmt, wie wenn eine {{CSSXref("height")}} am Container deklariert ist.

Der Anfangswert für {{cssxref("column-fill")}} ist `balance`. Der Wert `balance` bedeutet, dass alle Spalten so gleichmäßig wie möglich ausbalanciert sind. In fragmentierten Kontexten, wie [paginierte Medien](/de/docs/Web/CSS/Guides/Paged_media), wird nur das letzte Fragment ausbalanciert. Das bedeutet, dass auf der letzten Seite die letzte Reihe von Spaltenboxen ausbalanciert ist.

Der andere Balancewert, `balance-all`, balanciert alle Spalten in fragmentierten Kontexten.

Die Spalten in diesem Beispiel enthalten ein Bild und etwas Text, die ausgewogen sind. Das Bild, das nicht gebrochen werden kann, befindet sich in der ersten Spalte. Die anderen Spalten sind ausbalanciert und füllen sich mit gleichen Mengen an Text.

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

Der `auto` Wert für `column-fill` füllt eine Spalte sequentiell, indem sie die erste Spalte in der Inline-Start-Richtung füllt, bevor Inhalte in den nachfolgenden Spalten platziert werden, anstatt alle Spalten gleichmäßig auszubalancieren und zu füllen. In diesem Beispiel haben wir `column-fill` auf `auto` geändert. Die Spalten sind bis zur Höhe des Containers gefüllt, wobei am Ende leere Spalten bleiben.

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

Im nächsten Leitfaden lernen Sie, [wie Multicol Überlauf handhabt](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_overflow) innerhalb von Spalten und wenn es mehr Spalten gibt, als in den Container passen.
