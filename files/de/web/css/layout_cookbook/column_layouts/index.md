---
title: Spaltenlayouts
slug: Web/CSS/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Es ist oft nötig, ein Layout mit mehreren Spalten zu erstellen, und CSS bietet verschiedene Möglichkeiten, dies zu tun. Ob Sie das [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [Grid](/de/docs/Web/CSS/CSS_grid_layout) Layout verwenden, hängt davon ab, was Sie erreichen möchten. In diesem Rezept erkunden wir diese Optionen.

![drei verschiedene Layoutstile, die zwei Spalten im Container haben.](cookbook-multiple-columns.png)

## Anforderungen

Es gibt eine Reihe von Designmustern, die Sie mit Ihren Spalten erreichen möchten:

- [Ein kontinuierlicher Inhaltsthread, der in Zeitungsspalten aufgeteilt ist](#ein_kontinuierlicher_inhaltsthread_—_mehrspaltenlayout).
- [Eine einzige Reihe von Elementen, die als Spalten angeordnet sind, wobei alle Höhen gleich sind](#eine_einzelne_reihe_von_elementen_mit_gleichen_höhen_—_flexbox).
- [Mehrere Reihen von Spalten, die nach Reihen und Spalten ausgerichtet sind](#elemente_in_reihen_und_spalten_ausrichten_—_grid_layout).

## Die Rezepte

Sie müssen verschiedene Layoutmethoden wählen, um Ihre Anforderungen zu erfüllen.

### Ein kontinuierlicher Inhaltsthread — Mehrspaltenlayout

Wenn Sie Spalten mit dem Mehrspaltenlayout erstellen, bleibt Ihr Text als kontinuierlicher Stream, der jede Spalte der Reihe nach ausfüllt. Die Spalten müssen alle die gleiche Größe haben und Sie können nicht eine einzelne Spalte oder den Inhalt einer einzelnen Spalte gezielt stylen.

Sie können die Abstände zwischen den Spalten mit den Eigenschaften {{cssxref("column-gap")}} oder {{cssxref("gap")}} kontrollieren und eine Linie zwischen Spalten mit {{cssxref("column-rule")}} hinzufügen.

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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

In diesem Beispiel haben wir die Eigenschaft {{cssxref("column-width")}} verwendet, um eine Mindestbreite festzulegen, die die Spalten haben müssen, bevor der Browser eine zusätzliche Spalte hinzufügt. Die Kurznotationseigenschaft {{cssxref("columns")}} kann verwendet werden, um die Eigenschaften `column-width` und {{cssxref("column-count")}} festzulegen, von denen jede die maximale Anzahl an zulässigen Spalten definieren kann.

Verwenden Sie Mehrspaltenlayout, wenn:

- Ihr Text in zeitungähnlichen Spalten angezeigt werden soll.
- Sie eine Menge kleiner Elemente haben, die Sie in Spalten aufteilen möchten.
- Sie keine einzelnen Spaltenboxen für das Styling ansteuern müssen.

### Eine einzelne Reihe von Elementen mit gleichen Höhen — Flexbox

Flexbox kann verwendet werden, um Inhalte in Spalten aufzuteilen, indem {{cssxref("display", "display: flex;")}} gesetzt wird, um ein Elternelement zu einem Flex-Container zu machen. Bereits durch das Hinzufügen dieser einen Eigenschaft werden alle Kinder (Kindelemente, Pseudoelemente und Textknoten) zu Flex-Items entlang einer einzigen Linie. Das Setzen der gleichen {{cssxref("flex")}} Kurznotationseigenschaft mit einem einzigen numerischen Wert verteilt den gesamten verfügbaren Raum gleichmäßig, was alle Flex-Items normalerweise gleich groß macht, solange keines nicht-umbruchfähige Inhalte hat, die das Element größer machen.

Abstände oder die `gap`-Eigenschaft können verwendet werden, um Lücken zwischen den Elementen zu erstellen, aber es gibt derzeit keine CSS-Eigenschaft, die Linien zwischen Flex-Items hinzufügt.

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

Um ein Layout mit Flex-Items zu erstellen, die in neue Reihen umbrochen werden, setzen Sie die Eigenschaft {{cssxref("flex-wrap")}} des Containers auf `wrap`. Beachten Sie, dass jede Flex-Linie nur den Raum für diese Linie verteilt. Elemente in einer Linie werden nicht unbedingt mit Elementen in anderen Linien ausgerichtet, wie Sie im folgenden Beispiel sehen werden. Dies ist der Grund, warum Flexbox als eindimensional beschrieben wird. Es ist so konzipiert, dass es das Layout als Reihe oder Spalte steuert, aber nicht beides gleichzeitig.

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
- Wenn Sie eine Ausrichtung auf der Kreuzachse vornehmen möchten, nachdem Sie Ihre Elemente angeordnet haben.
- Wenn es Ihnen nichts ausmacht, dass umgebrochene Elemente nur den Raum entlang ihrer Linie teilen und sich nicht mit Elementen in anderen Linien ausrichten.

### Elemente in Reihen und Spalten ausrichten — Grid Layout

Wenn Sie ein zweidimensionales Gitter möchten, bei dem die Elemente in Reihen _und_ Spalten angeordnet sind, sollten Sie das CSS Grid Layout wählen. Ähnlich wie Flexbox an den direkten Kindern des Flex-Containers arbeitet, arbeitet das Grid Layout an den direkten Kindern des Grid-Containers. Setzen Sie einfach {{cssxref("display", "display: grid;")}} auf den Container. Eigenschaften, die auf diesem Container festgelegt werden — wie {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} — definieren, wie die Elemente entlang von Reihen und Spalten verteilt werden.

Klicken Sie auf "Play" in den Codeblöcken unten, um das Beispiel im MDN Playground zu bearbeiten:

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
- Wenn Sie die Elemente auf den Block- und Inline-Achsen ausrichten möchten.
- Wenn die Elemente in Reihen und Spalten ausgerichtet sein sollen.

## Ressourcen auf MDN

- [Leitfaden für Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout)
- [Leitfaden für Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Leitfaden für CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
