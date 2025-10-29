---
title: Spaltenlayouts
slug: Web/CSS/How_to/Layout_cookbook/Column_layouts
l10n:
  sourceCommit: f3bf4e2bd456159093d3820253be9f266ace070a
---

Es ist oft erforderlich, ein Layout mit mehreren Spalten zu erstellen, und CSS bietet hierfür verschiedene Möglichkeiten. Ob Sie das [Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout), [Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout) oder [Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout) verwenden, hängt davon ab, was Sie erreichen möchten. In diesem Rezept erkunden wir diese Optionen.

![Drei verschiedene Layoutstile, die zwei Spalten im Container enthalten.](cookbook-multiple-columns.png)

## Anforderungen

Es gibt verschiedene Designmuster, die Sie mit Ihren Spalten erreichen möchten:

- [Ein kontinuierlicher Strom von Inhalten, aufgeteilt in spaltenartige Zeitungen](#ein_kontinuierlicher_strom_von_inhalten_—_mehrspaltenlayout).
- [Eine einzelne Reihe von Elementen, die als Spalten angeordnet sind, wobei alle Höhen gleich sind](#eine_einzelne_reihe_von_elementen_mit_gleicher_höhe_—_flexbox).
- [Mehrere Reihen von Spalten, die in Zeilen und Spalten ausgerichtet sind](#elemente_in_reihen_und_spalten_anordnen_—_grid-layout).

## Die Rezepte

Um Ihre Anforderungen zu erfüllen, müssen Sie unterschiedliche Layoutmethoden wählen.

### Ein kontinuierlicher Strom von Inhalten — Mehrspaltenlayout

Wenn Sie Spalten mit dem Mehrspaltenlayout erstellen, bleibt Ihr Text als kontinuierlicher Strom erhalten, der jede Spalte der Reihe nach füllt. Die Spalten müssen alle die gleiche Größe haben, und Sie können keine einzelne Spalte oder den Inhalt einer einzelnen Spalte gezielt ansprechen.

Sie können die Abstände zwischen den Spalten mit den Eigenschaften {{cssxref("column-gap")}} oder {{cssxref("gap")}} steuern und mit {{cssxref("column-rule")}} eine Linie zwischen den Spalten hinzufügen.

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

In diesem Beispiel haben wir die Eigenschaft {{cssxref("column-width")}} verwendet, um eine Mindestbreite festzulegen, die die Spalten haben müssen, bevor der Browser eine zusätzliche Spalte hinzufügt. Die Kurzformeigenschaft {{cssxref("columns")}} kann verwendet werden, um die Eigenschaften `column-width` und {{cssxref("column-count")}} festzulegen, von denen eine die maximale Anzahl der zulässigen Spalten definieren kann.

Verwenden Sie das Mehrspaltenlayout, wenn:

- Sie möchten, dass Ihr Text in spaltenähnlichen Zeitungen angezeigt wird.
- Sie eine Reihe kleiner Elemente haben, die Sie in Spalten aufteilen möchten.
- Sie keine individuellen Spaltenboxen für das Styling ansprechen müssen.

### Eine einzelne Reihe von Elementen mit gleicher Höhe — Flexbox

Flexbox kann verwendet werden, um Inhalt in Spalten aufzuteilen, indem {{cssxref("display", "display: flex;")}} gesetzt wird, um ein Elternelement zu einem Flex-Container zu machen. Nur durch Hinzufügen dieser einen Eigenschaft werden alle untergeordneten Elemente (Kindelemente, Pseudo-Elemente und Textknoten) in Flex-Elemente entlang einer einzigen Linie umgewandelt. Durch das Festlegen der gleichen Kurzformeigenschaft {{cssxref("flex")}} mit einem einzigen numerischen Wert wird der gesamte verfügbare Platz gleichmäßig verteilt, sodass alle Flex-Elemente in der Regel die gleiche Größe haben, sofern keine Elemente nicht umbrochenen Inhalt enthalten, der das Element größer zwingt.

Ränder oder die Eigenschaft `gap` können verwendet werden, um Abstände zwischen Elementen zu schaffen, jedoch gibt es derzeit keine CSS-Eigenschaft, die Linien zwischen Flex-Elementen hinzufügt.

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

Um ein Layout mit Flex-Elementen zu erstellen, die auf neue Reihen umgebrochen werden, setzen Sie die Eigenschaft {{cssxref("flex-wrap")}} auf dem Container auf `wrap`. Beachten Sie, dass jede Flex-Linie den Platz nur für diese Linie verteilt. Elemente in einer Linie werden nicht unbedingt mit Elementen in anderen Linien ausgerichtet, wie Sie im folgenden Beispiel sehen werden. Deshalb wird Flexbox als eindimensional beschrieben. Es ist für die Steuerung des Layouts als Reihe oder Spalte konzipiert, jedoch nicht beides gleichzeitig.

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
- Wenn Sie eine Ausrichtung auf der Querachse nach dem Layout Ihrer Elemente wünschen.
- Wenn es Ihnen nichts ausmacht, dass umbrochene Elemente den Platz nur entlang ihrer Linie teilen und nicht mit Elementen in anderen Linien ausgerichtet werden.

### Elemente in Reihen und Spalten anordnen — Grid-Layout

Wenn Sie ein zweidimensionales Raster wünschen, bei dem Elemente in Reihen _und_ Spalten ausgerichtet sind, sollten Sie das CSS-Grid-Layout wählen. Ähnlich wie Flexbox für die direkten Kinder des Flex-Containers funktioniert, arbeitet das Grid-Layout mit den direkten Kindern des Grid-Containers. Setzen Sie einfach {{cssxref("display", "display: grid;")}} auf den Container. Eigenschaften, die auf diesem Container festgelegt sind — wie {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}} — definieren, wie die Elemente entlang von Reihen und Spalten verteilt werden.

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
- Wenn Sie die Möglichkeit haben möchten, die Elemente auf den Block- und Inline-Achsen auszurichten.
- Wenn Sie möchten, dass sich Elemente in Reihen und Spalten ausrichten.

## Ressourcen auf MDN

- [Leitfaden zum Mehrspaltenlayout](/de/docs/Web/CSS/CSS_multicol_layout)
- [Leitfaden zu Flexbox](/de/docs/Web/CSS/CSS_flexible_box_layout)
- [Leitfaden zum CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout)
