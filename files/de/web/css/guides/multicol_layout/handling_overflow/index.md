---
title: Umgang mit Überlauf im Mehrspalten-Layout
short-title: Umgang mit Überlauf
slug: Web/CSS/Guides/Multicol_layout/Handling_overflow
l10n:
  sourceCommit: fe28ff18c21cdea9ab159bafb972cc3f1e17cae7
---

In diesem Leitfaden betrachten wir den Umgang mit Überlauf in einem Mehrspalten- (_multicol_) Layout, sowohl innerhalb der Spaltenboxen als auch in Situationen, in denen mehr Inhalt vorhanden ist, als in den Container passt.

## Überlauf innerhalb von Spaltenboxen

Eine Überlaufsituation tritt auf, wenn die Größe eines Elements größer als die Spaltenbox ist. Zum Beispiel kann diese Situation auftreten, wenn ein Bild in einer Spalte breiter ist als der {{cssxref("column-width")}}-Wert oder die Breite der Spalte basierend auf der Anzahl der mit {{cssxref("column-count")}} deklarierten Spalten.

In dieser Situation sollte der Inhalt sichtbar in die nächste Spalte überfließen, anstatt von der Spaltenbox abgeschnitten zu werden.

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

Dieses Beispiel rendert wie folgt:

{{EmbedLiveSample("image", "", "440px")}}

Es gibt zwei Textspalten. In der linken Spalte befindet sich ein Foto, das breiter als die Spalte ist. Das Bild dehnt sich in die zweite Spalte aus und erscheint hinter dem Text der rechten Spalte. Der Textfluss in der rechten Spalte wird durch das hervorstehende Foto nicht beeinflusst, aber das Erscheinungsbild wird es.

Wenn Sie möchten, dass ein Bild in die Spaltenbox passt, verhindert `max-width: 100%`, dass das Bild über seinen Container hinaus wächst, in diesem Fall die Spaltenbox.

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

Die aktualisierte Darstellung sieht so aus:

{{EmbedLiveSample("image-max-width", "", "440px")}}

## Mehr Spalten als passen

Wie überlaufende Spalten gehandhabt werden, hängt davon ab, ob der Medienkontext fragmentiert ist, wie im Druck, oder kontinuierlich, wie auf einer Webseite.

- In fragmentierten Medien, nachdem ein Fragment (zum Beispiel eine Seite) mit Spalten gefüllt ist, werden die Spalten auf eine neue Seite verschoben und dort mit Spalten gefüllt.
- In kontinuierlichen Medien, wenn eine Höhe für einen Mehrspalten-Container festgelegt ist, fließen Spalten standardmäßig in Inline-Richtung über. Im Web bedeutet das, dass Sie einen horizontalen Scrollbalken erhalten. Dieses Verhalten kann durch die Verwendung von {{cssxref("column-height")}} und {{cssxref("column-wrap")}} überschrieben werden, um [Spaltenumbruch](#verwendung_von_spaltenumbruch_für_multicol) zu erzwingen.

Dieses Beispiel zeigt das Standard-Überlaufverhalten in kontinuierlichen Medien. Der Multicol-Container hat eine festgelegte {{CSSXref("height")}} und es gibt mehr Text als Platz für die Erstellung von Spalten; daher werden Spalten außerhalb des Containers erstellt.

```html hidden live-sample___overflow-inline
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

Dieses Beispiel rendert wie folgt:

{{EmbedLiveSample("overflow-inline", "", "240px")}}

Scrollen Sie horizontal, um die überlaufenden Spalten zu sehen.

## Verwendung von vertikalen Medienabfragen

Ein Problem mit Multicol im Web ist, dass, wenn die Spalten höher als der Viewport sind, der Leser die Seite nach oben und unten scrollen muss, um zu lesen, was keine gute Benutzererfahrung ist. Eine Möglichkeit, dies zu vermeiden, besteht darin, die Spalteneigenschaften nur anzuwenden, wenn Sie wissen, dass genügend vertikaler Raum vorhanden ist.

Im untenstehenden Beispiel haben wir eine `height` [@media query](/de/docs/Web/CSS/Guides/Media_queries/Using) verwendet, um sicherzustellen, dass ausreichend vertikaler Raum vorhanden ist, bevor die Spalteneigenschaften angewendet werden.

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

Dieses Beispiel rendert wie folgt:

{{EmbedLiveSample("min-height", "", "340px")}}

## Verwendung von Spaltenumbruch für Multicol

Die Eigenschaften {{cssxref("column-height")}} und {{cssxref("column-wrap")}} können verwendet werden, um eine feste Höhe für generierte Spalten festzulegen und überschüssige Spalten dazu zu zwingen, in zusätzlichen Zeilen in Blockrichtung überzulaufen. In horizontalem Schreibmodus-Inhalt resultiert dies in vertikal scrollbaren Zeilen von Spalten, anstatt einer horizontal scrollbaren Einzelzeile. Schauen wir uns ein Beispiel an.

Das HTML enthält grundlegende Textinhalte, die wir der Kürze halber ausgeblendet haben.

```html hidden
<p>
  This is a bunch of text split into three columns using the CSS
  <code>column-count</code> property with a value of <code>3</code>. It also
  includes a <code>column-height</code> value of <code>95vh</code>. The
  <code>column-wrap</code> value is set to its initial value, <code>auto</code>;
  when a <code>column-height</code> value is included,
  <code>column-wrap: auto</code> resolves to <code>wrap</code>, which allows the
  columns to wrap onto multiple rows. The text is equally distributed over the
  columns, and placed into multiple rows.
</p>

<p>
  The <code>column-height</code> and <code>column-wrap</code> properties were
  introduced in
  <a href="https://drafts.csswg.org/css-multicol-2/"
    >CSS Multi-column Layout Module Level 2</a
  >.
</p>
```

Wir geben unserem Inhalt einige Stile. Besonders erwähnenswert ist, dass wir das {{cssxref("column-count")}}-Attribut des `<body>`-Elements auf `3` setzen und seine `column-height` auf `95vh`, so dass jede Zeile von Spalten den Viewport füllt. Wir müssen `column-wrap` nicht explizit auf `wrap` setzen: Wenn `column-height` auf einen {{cssxref("&lt;length>")}}-Wert gesetzt ist, löst sich der Anfangswert von `column-wrap` (`auto`) zu `wrap` auf, was normalerweise das Verhalten ist, das Sie möchten.

```css
body {
  font-size: 1.3em;
  line-height: 1.5;
  column-count: 3;
  column-height: 95vh;
}
```

```css hidden
html {
  font-family: sans-serif;
}

body {
  width: 70%;
  margin: 0 auto;
}

p:first-of-type {
  margin-top: 0;
}
```

```css hidden
@supports not (column-height: 5em) {
  body::before {
    content: "Your browser does not support the 'column-height' property.";
    background-color: wheat;
    position: fixed;
    inset: 40% 0;
    height: fit-content;
    text-align: center;
    padding: 1rem 0;
  }
}
```

Dieses Beispiel rendert folgendermaßen:

{{EmbedLiveSample('Using column wrapping for multicol', 'auto', 240)}}

## Nächste Schritte

Im letzten Leitfaden dieser Serie werden wir sehen, [wie Fragmentierung mit Multicol-Layouts funktioniert](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks), um uns Kontrolle darüber zu geben, wie Inhalte zwischen Spalten gebrochen werden.
