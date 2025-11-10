---
title: Spaltenlayouts
slug: Web/CSS/How_to/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Sie werden oft ein Layout erstellen müssen, das aus mehreren Spalten besteht, und CSS bietet dafür verschiedene Möglichkeiten. Ob Sie [Multi-column](/de/docs/Web/CSS/Guides/Multicol_layout), [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) oder [Grid](/de/docs/Web/CSS/Guides/Grid_layout) Layout verwenden, hängt davon ab, was Sie erreichen möchten. In diesem Rezept erkunden wir diese Optionen.

![drei verschiedene Layoutstile, die zwei Spalten im Container haben.](cookbook-multiple-columns.png)

## Anforderungen

Es gibt eine Reihe von Designmustern, die Sie mit Ihren Spalten erreichen möchten:

- [Ein kontinuierlicher Datenstrom, der in zeitungsähnliche Spalten unterteilt ist](#ein_kontinuierlicher_datenstrom_—_multi-column_layout).
- [Eine einzelne Reihe von Elementen, die als Spalten angeordnet sind, wobei alle Höhen gleich sind](#eine_einzelne_reihe_von_elementen_mit_gleicher_höhe_—_flexbox).
- [Mehrere Reihen von Spalten, die in Reihen und Spalten ausgerichtet sind](#elemente_in_reihen_und_spalten_ausrichten_—_grid_layout).

## Die Rezepte

Sie müssen verschiedene Layoutmethoden wählen, um Ihre Anforderungen zu erfüllen.

### Ein kontinuierlicher Datenstrom — Multi-Column Layout

Wenn Sie Spalten mit dem Multi-Column Layout erstellen, bleibt Ihr Text als kontinuierlicher Fluss, der jede Spalte nacheinander füllt. Die Spalten müssen alle gleich groß sein, und Sie können keine einzelne Spalte oder den Inhalt einer einzelnen Spalte anvisieren.

Sie können die Abstände zwischen den Spalten mit den Eigenschaften {{cssxref("column-gap")}} oder {{cssxref("gap")}} steuern und eine Linie zwischen den Spalten mit {{cssxref("column-rule")}} hinzufügen.

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___multi-column-layout-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
  </p>
</div>
```

```css live-sample___multi-column-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  font: 1.2em sans-serif;

  column-width: 10em;
  column-rule: 1px solid rgb(75 70 74);
}
```

{{EmbedLiveSample("multi-column-layout-example", "", "350px")}}

In diesem Beispiel haben wir die Eigenschaft {{cssxref("column-width")}} verwendet, um eine Mindestbreite festzulegen, die die Spalten haben müssen, bevor der Browser eine zusätzliche Spalte hinzufügt. Die Kurzform-Eigenschaft {{cssxref("columns")}} kann verwendet werden, um die Eigenschaften `column-width` und {{cssxref("column-count")}} festzulegen, von denen eine die maximale Anzahl der zulässigen Spalten definieren kann.

Verwenden Sie Multicol, wenn:

- Sie möchten, dass Ihr Text in zeitungsähnlichen Spalten angezeigt wird.
- Sie eine Reihe kleiner Elemente haben, die Sie in Spalten aufteilen möchten.
- Sie keine einzelnen Spaltenboxen für das Styling anvisieren müssen.

### Eine einzelne Reihe von Elementen mit gleicher Höhe — Flexbox

Flexbox kann verwendet werden, um Inhalte in Spalten aufzuteilen, indem {{cssxref("display", "display: flex;")}} festgelegt wird, um ein übergeordnetes Element zu einem Flex-Container zu machen. Das Hinzufügen dieser einen Eigenschaft verwandelt alle Kinder (untergeordnete Elemente, Pseudoelemente und Textknoten) in Flex-Elemente entlang einer einzigen Linie. Durch das Festlegen der gleichen {{cssxref("flex")}} Kurzform-Eigenschaft mit einem einzelnen numerischen Wert wird der gesamte verfügbare Platz gleichmäßig verteilt, was im Allgemeinen alle Flex-Elemente gleich groß macht, solange keines nicht umbrechenden Inhalt hat, der das Element größer zwingt.

Ränder oder die `gap` Eigenschaft können verwendet werden, um Abstände zwischen den Elementen zu schaffen, aber es gibt derzeit keine CSS-Eigenschaft, die Linien zwischen Flex-Elementen hinzufügt.

```html live-sample___columns-flexbox-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___columns-flexbox-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  font: 1.2em sans-serif;

  display: flex;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1;
}
```

{{EmbedLiveSample("columns-flexbox-example", "", "400px")}}

Um ein Layout mit Flex-Elementen zu erstellen, das in neue Zeilen umbricht, setzen Sie die Eigenschaft {{cssxref("flex-wrap")}} auf dem Container auf `wrap`. Beachten Sie, dass jede Flex-Linie nur Platz für diese Linie verteilt. Elemente in einer Zeile werden nicht unbedingt mit Elementen in anderen Zeilen ausgerichtet sein, wie Sie im Beispiel unten sehen werden. Dies ist der Grund, warum Flexbox als eindimensional beschrieben wird. Es ist dafür ausgelegt, das Layout als Reihe oder Spalte zu steuern, aber nicht beides gleichzeitig.

```html live-sample___columns-flexbox-wrapping-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>

  <p>
    Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
    kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
    purslane kale. Celery potato scallion desert raisin horseradish spinach
    carrot soko.
  </p>
</div>
```

```css live-sample___columns-flexbox-wrapping-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px 10px;
  width: 500px;
  font: 1.2em sans-serif;

  display: flex;
  flex-wrap: wrap;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;

  margin: 0 10px;
  flex: 1 1 200px;
}
```

{{EmbedLiveSample("columns-flexbox-wrapping-example", "", "450px")}}

Verwenden Sie Flexbox:

- Für einzelne Reihen oder Spalten von Elementen.
- Wenn Sie nach der Anordnung Ihrer Elemente eine Ausrichtung auf der Querachse vornehmen möchten.
- Wenn Sie damit einverstanden sind, dass umgebrochene Elemente nur Platz entlang ihrer Linie teilen und nicht mit Elementen in anderen Linien ausgerichtet sind.

### Elemente in Reihen und Spalten ausrichten — Grid Layout

Wenn Sie ein zweidimensionales Raster wünschen, bei dem Elemente in Reihen _und_ Spalten ausgerichtet sind, sollten Sie das CSS Grid Layout wählen. Ähnlich wie Flexbox auf die direkten Kinder des Flex-Containers wirkt, arbeitet das Grid Layout auf den direkten Kindern des Grid-Containers. Setzen Sie einfach {{cssxref("display", "display: grid;")}} auf dem Container. Auf diesem Container festgelegte Eigenschaften — wie {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} — bestimmen, wie die Elemente entlang der Reihen und Spalten verteilt werden.

Klicken Sie auf "Play" in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

```html live-sample___grid-layout-example
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens.
  </p>

  <p>
    Nori grape silver beet broccoli kombu beet greens fava bean potato quandong
    celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens
    parsnip. .
  </p>
</div>
```

```css live-sample___grid-layout-example
.container {
  border: 2px solid rgb(75 70 74);
  border-radius: 0.5em;
  padding: 20px;
  width: 500px;
  font: 1.2em sans-serif;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.container > * {
  padding: 10px;
  border: 2px solid rgb(95 97 110);
  border-radius: 0.5em;
  margin: 0;
}
```

{{EmbedLiveSample("grid-layout-example", "", "450px")}}

Verwenden Sie Grid:

- Für mehrere Reihen oder Spalten von Elementen.
- Wenn Sie in der Lage sein möchten, die Elemente auf den Block- und Inline-Achsen auszurichten.
- Wenn Sie möchten, dass die Elemente in Reihen und Spalten ausgerichtet sind.

## Ressourcen auf MDN

- [Leitfaden zu Multi-column Layout](/de/docs/Web/CSS/Guides/Multicol_layout)
- [Leitfaden zu Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout)
- [Leitfaden zu CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout)
