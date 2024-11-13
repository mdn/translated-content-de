---
title: Spanning und Balancieren von Spalten
slug: Web/CSS/CSS_multicol_layout/Spanning_balancing_columns
l10n:
  sourceCommit: 02cc9311b281b73322c5d13185119d2e8adf336a
---

{{CSSRef}}

In diesem Leitfaden schauen wir uns an, wie man Elemente über Spalten in einem Multi-Column (_Multicol_) Container spannt und wie man kontrolliert, wie die Spalten gefüllt werden.

## Spanning der Spalten

Um ein Element über Spalten zu spannen, verwenden Sie die Eigenschaft {{cssxref("column-span")}} mit dem Wert `all`. Dies führt dazu, dass das Element zu einem _Spanner_ wird, der alle Spalten überspannt.

Jedes nachkommende Element des Multicol-Containers kann in einen Spanner umgewandelt werden, einschließlich direkter und indirekter Kinder. Beispielsweise könnte eine Überschrift, die direkt im Container verschachtelt ist, zu einem Spanner werden, ebenso wie eine Überschrift, die innerhalb eines {{HTMLElement("section")}} verschachtelt ist, das sich im Multicol-Container befindet.

Im untenstehenden Beispiel ist das `<h2>`-Element auf `column-span: all` gesetzt und überspannt alle Spalten.

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

In diesem zweiten Beispiel befindet sich die Überschrift in einem {{HTMLElement("article")}}-Element, überspannt jedoch dennoch erwartungsgemäß den Inhalt.

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

Wenn ein Spanner eingeführt wird, unterbricht er den Fluss der Spalten; Spalten starten nach dem Spanner neu, was effektiv einen neuen Satz von Spaltenboxen erstellt. Der Inhalt springt nicht über ein spannendes Element hinweg.

### Einschränkungen von column-span

`column-span` kann nur zwei Werte haben. Der Anfangswert `none` bedeutet, dass das Element nicht spannt und innerhalb einer Spalte bleibt. Der Wert `all` bedeutet, dass das Element alle Spalten überspannt. Es gibt keine Werte, die ein teilweises Spannen ermöglichen, wie z.B. ein Element, das zwei von drei Spalten überspannt.

### Dinge, auf die Sie achten sollten

Wenn das spannende Element sich in einem anderen Element mit Rändern, Auffüllung und einer Umrandung oder Hintergrundfarbe befindet, kann das Boxmodell über dem Spanner erscheinen, während der restliche Inhalt darunter angezeigt wird. Aus diesem Grund sollte sorgfältig vorgegangen werden, wenn ein Element auf alle Spalten gespannt wird, um sicherzustellen, dass dieses Szenario berücksichtigt wird.

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

Zusätzlich, wenn ein spannendes Element später im Inhalt erscheint, kann es zu unerwartetem oder unerwünschtem Verhalten führen, wenn nicht genug Inhalt vorhanden ist, um nach dem Spanner Spalten zu erstellen. Verwenden Sie Spanning mit Bedacht und testen Sie es bei verschiedenen Breakpoints, um sicherzustellen, dass Sie den beabsichtigten Effekt erzielen.

## Füllen und Balancieren von Spalten

Ein ausgewogenes Set von Spalten ist eine, bei dem alle Spalten ungefähr die gleiche Menge an Inhalt haben. Füllen und Balancieren sind relevant, wenn die Menge an Inhalt nicht dem verfügbaren Platz entspricht, beispielsweise wenn eine {{CSSXref("height")}} auf dem Container deklariert ist.

Der Anfangswert für {{cssxref("column-fill")}} ist `balance`. Der Wert `balance` bedeutet, dass alle Spalten so ausgeglichen wie möglich sind. In fragmentierten Kontexten, wie bei [seitigen Medien](/de/docs/Web/CSS/CSS_paged_media), wird nur das letzte Fragment ausgeglichen. Dies bedeutet, dass die letzte Seite die endgültige ausgewogene Spaltensätze hat.

Der andere Balancierungswert, `balance-all`, balanciert alle Spalten in fragmentierten Kontexten.

Die Spalten in diesem Beispiel enthalten ein Bild und etwas Text, die ausgewogen sind. Das Bild, das nicht unterbrochen werden kann, befindet sich in der ersten Spalte. Die anderen Spalten sind ausgewogen und mit gleichen Mengen an Text gefüllt.

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

Der `auto` Wert für `column-fill` füllt eine Spalte nacheinander, füllt zuerst die erste Spalte in der Inline-Start-Richtung, bevor der Inhalt in nachfolgenden Spalten platziert wird, anstatt alle Spalten gleichmäßig auszufüllen. In diesem Beispiel haben wir `column-fill` auf `auto` geändert. Die Spalten sind bis zur Höhe des Containers gefüllt, wobei am Ende leere Spalten bleiben.

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

Im nächsten Leitfaden lernen Sie [wie Multicol-Layouts Überlauf behandeln](/de/docs/Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout) innerhalb von Spalten und wenn mehr Spalten vorhanden sind, als in den Container passen.
