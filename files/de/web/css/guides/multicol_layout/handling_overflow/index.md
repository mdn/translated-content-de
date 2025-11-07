---
title: Umgang mit Überlauf in einem mehrspaltigen Layout
short-title: Umgang mit Überlauf
slug: Web/CSS/Guides/Multicol_layout/Handling_overflow
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden betrachten wir, wie man mit Überlauf in einem mehrspaltigen (_multicol_) Layout umgeht, sowohl innerhalb der Spaltenboxen als auch in Situationen, in denen mehr Inhalt vorhanden ist, als in den Container passt.

## Überlauf innerhalb von Spaltenboxen

Eine Überlaufsituation tritt auf, wenn die Größe eines Elements größer als die Spaltenbox ist. Diese Situation kann beispielsweise auftreten, wenn ein Bild in einer Spalte breiter ist als der `column-width`-Wert oder die Breite der Spalte, basierend auf der Anzahl der mit `column-count` deklarierten Spalten.

In dieser Situation sollte der Inhalt sichtbar in die nächste Spalte überlaufen, anstatt von der Spaltenbox abgeschnitten zu werden.

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

Es gibt zwei Textspalten. In der linken Spalte befindet sich ein Foto, das breiter als die Spalte ist. Das Bild erstreckt sich in die zweite Spalte und erscheint hinter dem Text der rechten Spalte. Der Textfluss in der rechten Spalte wird durch das hervorstehende Foto nicht beeinflusst, aber das Erscheinungsbild schon.

Wenn Sie möchten, dass ein Bild in die Spaltenbox passt, verhindert die Einstellung `max-width: 100%`, dass das Bild über seinen Container hinaus wächst, in diesem Fall die Spaltenbox.

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

## Mehr Spalten als passen

Wie überlaufende Spalten gehandhabt werden, hängt davon ab, ob der Medienkontext fragmentiert ist, wie beim Drucken, oder kontinuierlich, wie bei einer Webseite.

In fragmentierten Medien, nachdem ein Fragment (zum Beispiel eine Seite) mit Spalten gefüllt ist, werden die Spalten auf eine neue Seite verschoben und füllen diese mit Spalten auf. In kontinuierlichen Medien überlaufen die Spalten in die Inline-Richtung. Im Web bedeutet dies, dass ein horizontaler Scrollbalken erscheint.

Das folgende Beispiel zeigt dieses Überlaufverhalten. Der Multicol-Container hat eine festgelegte {{CSSXref("height")}} und es gibt mehr Text als Platz für die Erstellung von Spalten; daher entstehen Spalten außerhalb des Containers.

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

## Verwendung von vertikalen Media-Queries

Ein Problem mit Multicol im Web ist, dass, wenn die Spalten höher als der Viewport sind, der Leser die Seite hoch- und runter scrollen muss, um zu lesen, was keine gute Benutzererfahrung ist. Eine Möglichkeit, dies zu vermeiden, besteht darin, die Spalteneigenschaften nur dann anzuwenden, wenn Sie wissen, dass genügend vertikaler Raum vorhanden ist.

Im folgenden Beispiel haben wir eine `height` [@media query](/de/docs/Web/CSS/Guides/Media_queries/Using) verwendet, um sicherzustellen, dass genügend vertikaler Platz vorhanden ist, bevor die Spalteneigenschaften angewendet werden.

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

Im letzten Leitfaden dieser Serie werden wir sehen, [wie Fragmentierung mit Multicol-Layouts funktioniert](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks), um uns die Kontrolle darüber zu geben, wie Inhalte zwischen Spalten unterbrochen werden.
