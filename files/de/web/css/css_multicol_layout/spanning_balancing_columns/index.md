---
title: Überspannung und Ausgleich von Spalten
slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

In diesem Leitfaden betrachten wir, wie Elemente über Spalten innerhalb des Mehrspaltencontainers (_multicol_) hinweg überspannt werden und wie die Füllung der Spalten gesteuert werden kann.

## Überspannung der Spalten

Um ein Element über Spalten hinweg zu überspannen, verwenden Sie die {{cssxref("column-span")}}-Eigenschaft mit dem Wert `all`. Dadurch wird das Element zu einem _Spanner_, der alle Spalten überspannt.

Jedes Nachkomelement des Multicol-Containers kann zu einem Spanner werden, einschließlich direkter und indirekter Kinder. Zum Beispiel könnte eine direkt im Container verschachtelte Überschrift zu einem Spanner werden, ebenso wie eine Überschrift, die in einem {{HTMLElement("section")}} innerhalb des Multicol-Containers verschachtelt ist.

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
  color: #fff;
}
```

{{EmbedLiveSample("h2-span", "", "420px")}}

Im zweiten Beispiel befindet sich die Überschrift in einem {{HTMLElement("article")}}-Element und überspannt trotzdem wie erwartet den Inhalt.

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
  color: #fff;
}
```

{{EmbedLiveSample("nested-h2-span", "", "420px")}}

Wenn ein Spanner eingeführt wird, unterbricht er den Fluss der Spalten; die Spalten starten nach dem Spanner neu, wodurch effektiv ein neuer Satz von Spaltenboxen entsteht. Der Inhalt überspringt kein überspannendes Element.

### Einschränkungen von column-span

`column-span` kann nur zwei Werte haben. Der Ausgangswert `none` bedeutet, dass das Element nicht überspannt wird und innerhalb einer Spalte bleibt. Der Wert `all` bedeutet, dass das Element alle Spalten überspannt. Es gibt keine Werte, die eine teilweise Überspannung ermöglichen, wie zum Beispiel das Überspannen von zwei aus drei Spalten.

### Dinge, die beachtet werden müssen

Wenn das überspannende Element sich in einem anderen Element mit Rändern, Abständen, einer Umrandung oder einer Hintergrundfarbe befindet, kann die Box über dem Spanner erscheinen, während der Rest des Inhalts darunter angezeigt wird. Aus diesem Grund sollte Vorsicht walten gelassen werden, wenn ein Element so eingestellt wird, dass es alle Spalten überspannt, um sicherzustellen, dass diesem Szenario Rechnung getragen wird.

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
  color: #fff;
  column-span: all;
}
```

{{EmbedLiveSample("mpb-span", "", "420px")}}

Zusätzlich, wenn ein überspannendes Element später im Inhalt erscheint, kann es zu unerwartetem oder unerwünschtem Verhalten führen, wenn nicht genug Inhalt vorhanden ist, um Spalten nach dem Spanner zu erstellen. Verwenden Sie das Überspannen vorsichtig und testen Sie es bei verschiedenen Viewportgrößen, um sicherzustellen, dass Sie den gewünschten Effekt erzielen.

## Füllen und Ausgleichen von Spalten

Ein ausgewogener Satz von Spalten liegt vor, wenn alle Spalten ungefähr die gleiche Menge an Inhalt haben. Das Füllen und Ausgleichen ist relevant, wenn die Menge des Inhalts nicht mit dem zur Verfügung stehenden Platz übereinstimmt, wie wenn eine {{CSSXref("height")}} auf dem Container deklariert ist.

Der Ausgangswert für {{cssxref("column-fill")}} ist `balance`. Der Wert von `balance` bedeutet, dass alle Spalten so gut wie möglich ausgeglichen sind. In fragmentierten Kontexten, wie z.B. [paginierte Medien](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausgeglichen. Das bedeutet, dass auf der letzten Seite der letzte Satz von Spaltenboxen ausgeglichen ist.

Der andere Wert zum Ausgleichen, `balance-all`, gleicht alle Spalten in fragmentierten Kontexten aus.

Die Spalten in diesem Beispiel enthalten ein Bild und etwas Text, die ausgeglichen sind. Das Bild, das nicht unterbrochen werden kann, befindet sich in der ersten Spalte. Die anderen Spalten sind ausgeglichen und füllen sich mit gleichen Mengen an Text.

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
  color: #fff;
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

Der `auto`-Wert für `column-fill` füllt eine Spalte nacheinander, indem er zuerst die erste Spalte in der Inline-Start-Richtung füllt, bevor er Inhalt in nachfolgende Spalten einfügt, anstatt alle Spalten gleichermaßen auszugleichen und zu füllen. In diesem Beispiel haben wir `column-fill` auf `auto` geändert. Die Spalten werden bis zur Höhe des Containers gefüllt und lassen am Ende leere Spalten.

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
  color: #fff;
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

Im nächsten Leitfaden lernen Sie [wie multicol Überlauf behandelt](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout) innerhalb von Spalten und wenn mehr Spalten vorhanden sind, als in den Container passen.
