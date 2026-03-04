---
title: Umgang mit Overflow im Mehrspalten-Layout
short-title: Umgang mit Overflow
slug: Web/CSS/Guides/Multicol_layout/Handling_overflow
l10n:
  sourceCommit: 04defe50e601cf53adde40c4bd652a7a4e6eae55
---

In diesem Leitfaden betrachten wir, wie man mit Overflow in einem Mehrspaltenlayout (multicol) umgeht, sowohl innerhalb der Spaltenboxen als auch in Situationen, in denen mehr Inhalt vorhanden ist, als in den Container passt.

## Overflow in Spaltenboxen

Eine Overflow-Situation tritt auf, wenn die Größe eines Elements größer ist als die Spaltenbox. Zum Beispiel könnte die Situation eintreten, wenn ein Bild in einer Spalte breiter ist als der Wert von {{cssxref("column-width")}} oder die Breite der Spalte basierend auf der Anzahl der mit {{cssxref("column-count")}} deklarierten Spalten.

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

Dieses Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("image", "", "440px")}}

Es gibt zwei Spalten Text. In der linken Spalte befindet sich ein Foto, das breiter ist als die Spalte. Das Bild erweitert sich in diese zweite Spalte und erscheint hinter dem Text der rechten Spalte. Der Textfluss in der rechten Spalte wird durch das herausragende Foto nicht beeinflusst, jedoch das Erscheinungsbild.

Möchten Sie, dass ein Bild in die Spaltenbox passt, verhindert das Setzen von `max-width: 100%`, dass das Bild über seinen Container, in diesem Fall die Spaltenbox, hinauswächst.

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

Die aktualisierte Darstellung sieht folgendermaßen aus:

{{EmbedLiveSample("image-max-width", "", "440px")}}

## Mehr Spalten als passen

Wie überlaufende Spalten gehandhabt werden, hängt davon ab, ob der Medienkontext fragmentiert ist, wie etwa Druck, oder kontinuierlich ist, wie etwa eine Webseite.

- In fragmentierten Medien, nachdem ein Fragment (zum Beispiel eine Seite) mit Spalten gefüllt ist, werden die Spalten auf eine neue Seite verschoben und füllen diese mit Spalten auf.
- In kontinuierlichen Medien, wenn eine Höhe auf einem Mehrspalten-Container festgelegt ist, laufen die Spalten standardmäßig in der Inline-Richtung über. Im Web bedeutet das, dass ein horizontaler Scrollbalken erscheint. Dieses Verhalten kann durch die Verwendung von {{cssxref("column-height")}} und {{cssxref("column-wrap")}} zur Durchsetzung des [Spaltenumbruch](#verwendung_von_spaltenumbruch_für_mehrspaltenlayout) überschrieben werden.

Dieses Beispiel zeigt das Standard-Verhalten für Überlauf in kontinuierlichen Medien. Der Multicol-Container hat eine festgelegte {{CSSXref("height")}}, und es gibt mehr Text als Platz für die Erstellung von Spalten; daher werden Spalten außerhalb des Containers erstellt.

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

Dieses Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("overflow-inline", "", "240px")}}

Scrollen Sie horizontal, um die überlaufenden Spalten zu sehen.

## Verwendung von vertikalen Media Queries

Ein Problem mit dem Mehrspaltenlayout im Web ist, dass der Leser, wenn die Spalten höher als der Viewport sind, die Seite nach oben und unten scrollen muss, um zu lesen, was keine gute Benutzererfahrung darstellt. Eine Möglichkeit, dies zu vermeiden, besteht darin, die Spalteneigenschaften nur dann anzuwenden, wenn Sie wissen, dass genügend vertikaler Platz vorhanden ist.

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

Dieses Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample("min-height", "", "340px")}}

## Verwendung von Spaltenumbruch für Mehrspaltenlayout

Die Eigenschaften {{cssxref("column-height")}} und {{cssxref("column-wrap")}} können verwendet werden, um eine feste Höhe für generierte Spalten festzulegen und überschüssige Spalten in zusätzlichen Reihen in der Blockrichtung überlaufen zu lassen. In Inhalten mit horizontalem Schreibrichtungsergebnis resultiert dies in vertikal scrollenden Reihen von Spalten, anstatt in einer horizontal scrollenden einzigen Reihe. Lassen Sie uns ein Beispiel betrachten.

Das HTML enthält grundlegende Textinhalte, die der Kürze halber ausgeblendet wurden.

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

Wir geben unserem Inhalt einige Stile. Am bemerkenswertesten ist, dass wir das {{cssxref("column-count")}} des `<body>` Elements auf `2` und seine `column-height` auf `95vh` setzen, sodass jede Reihe von Spalten den Viewport füllt. Wir müssen `column-wrap` nicht explizit auf `wrap` setzen: Wenn `column-height` auf einen {{cssxref("&lt;length>")}} Wert gesetzt ist, löst sich der anfängliche Wert von `column-wrap` (`auto`) zu `wrap` auf, was normalerweise das gewünschte Verhalten ist.

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

Dieses Beispiel wird wie folgt dargestellt:

{{EmbedLiveSample('Using column wrapping for multicol', 'auto', 240)}}

## Nächste Schritte

Im letzten Leitfaden dieser Serie werden wir sehen, [wie Fragmentierung bei Mehrspaltenlayouts funktioniert](/de/docs/Web/CSS/Guides/Multicol_layout/Handling_content_breaks), um uns Kontrolle darüber zu geben, wie Inhalte zwischen Spalten getrennt werden.
