---
title: Spaltenlayouts
slug: Web/CSS/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 507825f6292eb73f0a96419d69870d9330b6776f
---

{{CSSRef}}

Oftmals müssen Sie ein Layout erstellen, das aus mehreren Spalten besteht, und CSS bietet dafür mehrere Möglichkeiten. Ob Sie das [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) oder das [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verwenden, hängt davon ab, was Sie erreichen möchten. In diesem Rezept erkunden wir diese Optionen.

![Drei verschiedene Layoutstile mit zwei Spalten im Container.](cookbook-multiple-columns.png)

## Anforderungen

Es gibt mehrere Designmuster, die Sie mit Ihren Spalten erreichen möchten:

- [Ein kontinuierlicher Inhaltsthread, aufgeteilt in spaltenartige Layouts wie in Zeitungen](#ein_kontinuierlicher_thread_von_inhalten_—_mehrspalten-layout).
- [Eine einzelne Reihe von Elementen, die als Spalten angeordnet sind, wobei alle Höhen gleich sind](#eine_einzelne_reihe_von_elementen_mit_gleicher_höhe_—_flexbox).
- [Mehrere Reihen von Spalten, die nach Zeile und Spalte ausgerichtet sind](#elemente_in_reihen_und_spalten_ausrichten_—_grid-layout).

## Die Rezepte

Sie müssen verschiedene Layoutmethoden wählen, um Ihre Anforderungen zu erfüllen.

### Ein kontinuierlicher Thread von Inhalten — Mehrspalten-Layout

Wenn Sie Spalten mit dem Mehrspalten-Layout erstellen, bleibt Ihr Text ein kontinuierlicher Stream, der nacheinander jede Spalte füllt. Die Spalten müssen alle die gleiche Größe haben, und Sie können nicht gezielt eine einzelne Spalte oder den Inhalt einer einzelnen Spalte ansprechen.

Sie können die Abstände zwischen den Spalten mit den Eigenschaften {{cssxref("column-gap")}} oder {{cssxref("gap")}} steuern und eine Linie zwischen den Spalten mit {{cssxref("column-rule")}} hinzufügen.

Klicken Sie auf „Play“ in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Beispiel haben wir die Eigenschaft {{cssxref("column-width")}} verwendet, um eine Mindestbreite festzulegen, die die Spalten haben müssen, bevor der Browser eine zusätzliche Spalte hinzufügt. Die Kurzform-Eigenschaft {{cssxref("columns")}} kann verwendet werden, um die `column-width` und {{cssxref("column-count")}} Eigenschaften festzulegen, von denen eine die maximale Anzahl der zulässigen Spalten definiert.

Verwenden Sie Multicol, wenn:

- Sie möchten, dass Ihr Text in zeitungslike Spalten angezeigt wird.
- Sie eine Reihe kleiner Elemente haben, die Sie in Spalten aufteilen möchten.
- Sie keine individuellen Spaltenboxen für Styling ansprechen müssen.

### Eine einzelne Reihe von Elementen mit gleicher Höhe — Flexbox

Flexbox kann verwendet werden, um Inhalte in Spalten aufzuteilen, indem {{cssxref("display", "display: flex;")}} eingestellt wird, um ein übergeordnetes Element zum Flex-Container zu machen. Schon das Hinzufügen dieser einen Eigenschaft verwandelt alle Kinder (Kind-Elemente, Pseudo-Elemente und Textknoten) in Flex-Elemente entlang einer einzigen Linie. Das Festlegen derselben {{cssxref("flex")}} Kurzform-Eigenschaft mit einem einzelnen numerischen Wert verteilt den gesamten verfügbaren Raum gleichmäßig, wodurch im Allgemeinen alle Flex-Elemente die gleiche Größe haben, solange keine nicht umgebrochenen Inhalte das Element größer machen.

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

Um ein Layout mit Flex-Elementen zu erstellen, die auf neue Zeilen übergehen, legen Sie die Eigenschaft {{cssxref("flex-wrap")}} auf dem Container auf `wrap` fest. Beachten Sie, dass jede Flex-Linie den Raum nur für diese Linie verteilt. Elemente in einer Linie werden nicht unbedingt mit Elementen in anderen Linien ausgerichtet, wie Sie im folgenden Beispiel sehen werden. Deshalb wird Flexbox als eindimensional beschrieben. Es ist dafür ausgelegt, das Layout als Reihe oder Spalte zu steuern, aber nicht beides gleichzeitig.

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
- Wenn Sie nach dem Layout Ihrer Elemente eine Ausrichtung auf der Querachse vornehmen möchten.
- Wenn Sie damit einverstanden sind, dass umgebrochene Elemente den Raum nur entlang ihrer Linie teilen und nicht mit Elementen in anderen Linien ausgerichtet werden.

### Elemente in Reihen und Spalten ausrichten — Grid-Layout

Wenn Sie ein zweidimensionales Raster möchten, in dem sich Elemente in Reihen _und_ Spalten ausrichten, sollten Sie das CSS-Grid-Layout wählen. Ähnlich wie Flexbox auf die direkten Kinder des Flex-Containers wirkt, arbeitet das Grid-Layout auf den direkten Kindern des Grid-Containers. Stellen Sie einfach {{cssxref("display", "display: grid;")}} im Container ein. Eigenschaften, die auf diesem Container festgelegt sind — wie {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} — definieren, wie die Elemente entlang der Reihen und Spalten verteilt werden.

Klicken Sie auf „Play“ in den untenstehenden Codeblöcken, um das Beispiel im MDN Playground zu bearbeiten:

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
- Wenn Sie die Elemente auf der Block- und Inline-Achse ausrichten möchten.
- Wenn Sie möchten, dass Elemente in Reihen und Spalten ausgerichtet werden.

## Ressourcen auf MDN

- [Leitfaden zum Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout)
- [Leitfaden zu Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Leitfaden zum CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
