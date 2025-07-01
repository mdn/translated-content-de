---
title: Umgang mit Überlauf im Mehrspaltenlayout
short-title: Umgang mit Überlauf
slug: Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout
l10n:
  sourceCommit: 63cbf204323f117a2a80c7aa6273e50253ab9d07
---

{{CSSRef}}

In diesem Leitfaden betrachten wir, wie man mit Überlauf in einem Mehrspalten (_multicol_) Layout umgeht, sowohl innerhalb der Spaltenkästen als auch in Situationen, in denen mehr Inhalt vorhanden ist, als in den Container passt.

## Überlauf innerhalb von Spaltenkästen

Eine Überlaufsituation tritt auf, wenn die Größe eines Elements größer ist als der Spaltenkasten. Zum Beispiel könnte die Situation auftreten, wenn ein Bild in einer Spalte breiter ist als der `column-width` Wert oder die Breite der Spalte basierend auf der Anzahl der mit `column-count` deklarierten Spalten.

In diesem Fall sollte der Inhalt sichtbar in die nächste Spalte übergehen, anstatt vom Spaltenkasten abgeschnitten zu werden.

```html live-sample___image
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <img
    alt="A close-up of two hot air balloons being inflated."
    src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
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

```css live-sample___image
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}
```

{{EmbedLiveSample("image", "", "440px")}}

Es gibt zwei Textspalten. In der linken Spalte befindet sich ein Foto, das breiter als die Spalte ist. Das Bild erstreckt sich in die zweite Spalte und erscheint hinter dem Text der rechten Spalte. Der Textfluss in der rechten Spalte wird von dem vorstehenden Foto nicht beeinflusst, aber das Erscheinungsbild wird es.

Wenn Sie möchten, dass ein Bild in den Spaltenkasten passt, verhindert das Setzen von `max-width: 100%`, dass das Bild über seinen Container hinaus wächst, in diesem Fall der Spaltenkasten.

```html hidden live-sample___image-max-width
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <img
    alt="A close-up of two hot air balloons being inflated."
    src="https://mdn.github.io/shared-assets/images/examples/balloons3.jpg" />
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

```css live-sample___image-max-width
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 250px;
}
img {
  max-width: 100%;
}
```

{{EmbedLiveSample("image-max-width", "", "440px")}}

## Mehr Spalten, als passen werden

Wie überlaufende Spalten gehandhabt werden, hängt davon ab, ob der Medienkontext fragmentiert ist, wie beispielsweise im Druck, oder kontinuierlich, wie beispielsweise auf einer Webseite.

In fragmentierten Medien, nachdem ein Fragment (zum Beispiel eine Seite) mit Spalten gefüllt ist, werden die Spalten auf eine neue Seite verschoben und füllen diese mit Spalten auf. In kontinuierlichen Medien werden Spalten in Richtung der Inline-Achse überlaufen. Im Web bedeutet dies, dass Sie einen horizontalen Rollbalken erhalten.

Das untenstehende Beispiel zeigt dieses Überlaufverhalten. Der Multicol-Container hat eine festgelegte {{CSSXref("height")}} und es gibt mehr Text als Platz, um Spalten zu erstellen; daher werden Spalten außerhalb des Containers erstellt.

```html live-sample___overflow-inline
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

```css live-sample___overflow-inline
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 200px;
  height: 180px;
  border: 2px dashed;
}
```

{{EmbedLiveSample("overflow-inline", "", "240px")}}

## Verwendung vertikaler Media Queries

Ein Problem mit dem Mehrspaltenlayout im Web ist, dass, wenn die Spalten höher als der Ansichtsbereich sind, der Leser die Seite nach oben und unten scrollen muss, um alles zu lesen, was keine gute Benutzererfahrung ist. Eine Möglichkeit, dies zu vermeiden, besteht darin, die Spalteneigenschaften nur dann anzuwenden, wenn Sie wissen, dass genug vertikaler Platz vorhanden ist.

Im Beispiel unten haben wir eine `height` [@media query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet, um sicherzustellen, dass genügend vertikaler Platz vorhanden ist, bevor die Spalteneigenschaften angewendet werden.

```html hidden live-sample___min-height
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

```css live-sample___min-height
body {
  font: 1.2em / 1.5 sans-serif;
}

@media (height >= 300px) {
  .container {
    column-width: 200px;
  }
}
```

{{EmbedLiveSample("min-height", "", "340px")}}

## Nächste Schritte

Im letzten Leitfaden dieser Serie werden wir sehen, [wie Fragmentierung mit Mehrspaltenlayouts funktioniert](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout), um uns die Kontrolle darüber zu geben, wie Inhalte zwischen Spalten aufgeteilt werden.
