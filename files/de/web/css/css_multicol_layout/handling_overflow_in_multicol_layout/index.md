---
title: Umgang mit Überlauf im mehrspaltigen Layout
short-title: Umgang mit Überlauf
slug: Web/CSS/CSS_multicol_layout/Handling_overflow_in_multicol_layout
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

In diesem Leitfaden betrachten wir, wie der Überlauf in einem mehrspaltigen (_multicol_) Layout gehandhabt wird, sowohl innerhalb der Spaltenboxen als auch in Situationen, in denen mehr Inhalt vorhanden ist, als in das Container passt.

## Überlauf innerhalb von Spaltenboxen

Eine Überlaufsituation entsteht, wenn die Größe eines Elements größer ist als die Spaltenbox. Zum Beispiel könnte die Situation eintreten, wenn ein Bild in einer Spalte breiter ist als der `column-width` Wert oder die Breite der Spalte basierend auf der Anzahl der mit `column-count` deklarierten Spalten.

In diesem Fall sollte der Inhalt sichtbar in die nächste Spalte überlaufen, anstatt von der Spaltenbox abgeschnitten zu werden.

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

Es gibt zwei Textspalten. In der linken Spalte befindet sich ein Foto, das breiter ist als die Spalte. Das Bild erstreckt sich in diese zweite Spalte und erscheint hinter dem Text der rechten Spalte. Der Textfluss in der rechten Spalte wird von dem herausragenden Foto nicht beeinflusst, aber das Erscheinungsbild schon.

Wenn Sie möchten, dass ein Bild in die Spaltenbox passt, verhindert die Einstellung von `max-width: 100%`, dass das Bild über seinen Container hinauswächst, in diesem Fall die Spaltenbox.

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

Wie überquellende Spalten gehandhabt werden, hängt davon ab, ob der Medienkontext fragmentiert ist, wie zum Beispiel im Druck, oder kontinuierlich, wie zum Beispiel eine Webseite.

In fragmentierten Medien, nachdem ein Fragment (zum Beispiel eine Seite) mit Spalten gefüllt ist, werden die Spalten auf eine neue Seite verschoben und füllen diese mit Spalten. In kontinuierlichen Medien werden die Spalten in Inline-Richtung überlaufen. Im Web bedeutet dies, dass ein horizontaler Scrollbalken erscheint.

Das folgende Beispiel zeigt dieses Überlaufverhalten. Der Multicol-Container hat eine festgelegte {{CSSXref("height")}} und es gibt mehr Text als Platz, um Spalten zu erstellen; daher entstehen Spalten außerhalb des Containers.

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

## Verwendung von vertikalen Media-Abfragen

Ein Problem mit Multicol im Web ist, dass Leser, wenn die Spalten höher als der Viewport sind, die Seite hoch- und runterscrollen müssen, um zu lesen, was keine gute Benutzererfahrung ist. Eine Möglichkeit, dies zu vermeiden, besteht darin, die Spalteneigenschaften nur anzuwenden, wenn Sie wissen, dass genügend vertikaler Raum vorhanden ist.

Im folgenden Beispiel haben wir eine {{CSSXref("min-height")}} [@media query](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries) verwendet, um sicherzustellen, dass genügend vertikaler Raum vorhanden ist, bevor die Spalteneigenschaften angewendet werden.

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

@media (min-height: 300px) {
  .container {
    column-width: 200px;
  }
}
```

{{EmbedLiveSample("min-height", "", "340px")}}

## Nächste Schritte

Im letzten Leitfaden dieser Serie werden wir sehen, [wie Fragmentierung mit Multicol-Layouts funktioniert](/de/docs/Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout), um uns Kontrolle darüber zu geben, wie Inhalt zwischen Spalten getrennt wird.
