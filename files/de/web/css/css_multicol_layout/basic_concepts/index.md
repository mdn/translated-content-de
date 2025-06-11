---
title: Grundkonzepte von Mehrspalten-Layouts
short-title: Basic concepts
slug: Web/CSS/CSS_multicol_layout/Basic_concepts
l10n:
  sourceCommit: 0dcad86763896bba7f8e1ddc30c6dfd2aa664c6b
---

{{CSSRef}}

Das Mehrspalten-Layout, oft als Multicol-Layout bezeichnet, ist eine Spezifikation zur Gestaltung von Inhalten in einer Gruppe von Spaltenkästen, ähnlich wie Spalten in einer Zeitung. Dieser Leitfaden erklärt, wie die Spezifikation mit einigen häufigen Anwendungsbeispielen funktioniert.

## Wichtige Eigenschaften

Das Multicol-Layout unterscheidet sich von allen anderen Layoutmethoden in CSS; es zerlegt den Inhalt, einschließlich aller Nachkommenelemente, in Spalten. Dies geschieht auf die gleiche Weise, wie Inhalte beim Arbeiten mit [CSS Paged Media](/de/docs/Web/CSS/CSS_paged_media) in Seitenfragmentiert werden, indem ein Druckstylesheet erstellt wird.

In diesem und den folgenden Leitfäden werden wir die folgenden in dem [CSS-Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul definierten Eigenschaften diskutieren:

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}} Kurzform
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}} Kurzform
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}

## Definition von Spalten

Durch Hinzufügen der Eigenschaft `column-count` oder `column-width` zu einem Element oder durch die Verwendung der Kurzform `columns` wird das Element zu einem _Mehrspalten-Container_ oder kurz _Multicol-Container_. Die Spalten sind anonyme Kästen; sie werden in der Spezifikation als _Spaltenkästen_ beschrieben.

### Die Anzahl der Spalten festlegen

Die Eigenschaft `column-count` gibt die Anzahl der Spalten an, in denen Sie möchten, dass der Inhalt angezeigt wird. Der Browser weist dann die korrekte Menge an Platz jedem Spaltenkasten zu, um die gewünschte Anzahl von Spalten zu erstellen.

Im untenstehenden Beispiel verwenden wir die Eigenschaft `column-count`, um drei Spalten auf dem `.container`-Element zu erstellen. Der Inhalt, einschließlich der Kinder von `.container`, wird dann auf die drei Spalten verteilt.

```html live-sample___column-count
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

```css live-sample___column-count
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
}
```

{{EmbedLiveSample("column-count", "", "280px")}}

Im obigen Beispiel ist der Inhalt innerhalb der Absatz-`<p>`-Tags mit der Standardstilierung eingeschlossen. Daher gibt es einen Rand über jedem Absatz. Sie können sehen, wie dieser Rand die erste Textzeile nach unten drückt. Das liegt daran, dass ein Multicol-Container einen [Block Formatting Context (BFC)](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt, durch den Ränder von Kindelementen nicht mit einem Rand des Containers zusammenfallen.

### Die Breite der Spalten festlegen

Die Eigenschaft `column-width` wird verwendet, um die optimale Breite für jeden Spaltenkasten festzulegen. Wenn Sie eine Spaltenbreite deklarieren, berechnet der Browser, wie viele Spalten dieser Breite in den Multicol-Container passen, und verteilt jeden zusätzlichen Platz gleichmäßig zwischen den Spalten. Daher sollte die Spaltenbreite als Mindestbreite angesehen werden, da die Spaltenkästen aufgrund des zusätzlichen Platzes wahrscheinlich breiter sind.

Im Fall einer einzelnen Spalte mit weniger verfügbarer Breite als der Wert von `column-width` wird der Spaltenkasten kleiner als die deklarierte Spaltenbreite schrumpfen.

Im folgenden Beispiel ist die Eigenschaft `column-width` auf `200px` gesetzt. Wir erhalten so viele 200-Pixel-Spalten, wie in den Container passen, wobei der zusätzliche Platz gleichmäßig aufgeteilt wird.

```html hidden live-sample___column-width
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

```css live-sample___column-width
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-width: 200px;
}
```

{{EmbedLiveSample("column-width", "", "280px")}}

### Sowohl die Anzahl als auch die Breite der Spalten festlegen

Wenn Sie beide Eigenschaften auf einem Multicol-Container festlegen, wird `column-count` als maximale Anzahl von Spalten fungieren. Das Verhalten, das für `column-width` beschrieben wurde, tritt auf, bis die Anzahl der Spalten in `column-count` erreicht ist. Danach werden keine weiteren Spalten gezeichnet, und der zusätzliche Platz wird gleichmäßig auf die vorhandenen Spalten verteilt, selbst wenn genügend Platz für mehr Spalten der angegebenen `column-width`-Größe vorhanden ist.

Wenn Sie beide Eigenschaften zusammen verwenden, erhalten Sie möglicherweise weniger Spalten als im Wert für `column-count` angegeben.

Im nächsten Beispiel verwenden wir `column-width` von `200px` und `column-count` von `2`. Auch wenn Platz für mehr als zwei Spalten vorhanden ist, erhalten wir zwei. Wenn nicht genug Platz für zwei Spalten von mindestens 200 Pixeln vorhanden ist, erhalten wir eine.

```html hidden live-sample___column-count-width
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
    carrot soko. .
  </p>
</div>
```

```css live-sample___column-count-width
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 2;
  column-width: 200px;
}
```

{{EmbedLiveSample("column-count-width", "", "280px")}}

### Kurzform für Spalteneigenschaften

Sie können die Kurzform `columns` verwenden, um die Werte für `column-count` und `column-width` festzulegen. Wenn Sie eine Längeneinheit angeben, wird der Wert für `column-width` verwendet, und wenn Sie eine Ganzzahl angeben, wird der Wert für `column-count` verwendet. Sie können beide Eigenschaften festlegen, indem Sie die beiden Werte mit einem Leerzeichen trennen.

Dieses CSS würde das gleiche Ergebnis wie [das erste Beispiel](#die_anzahl_der_spalten_festlegen) geben, mit `column-count` auf `3` gesetzt.

```css
.container {
  columns: 3;
}
```

Dieses CSS würde das gleiche Ergebnis wie [das zweite Beispiel](#die_breite_der_spalten_festlegen) geben, mit `column-width` von `200px`.

```css
.container {
  columns: 200px;
}
```

Dieses CSS würde das gleiche Ergebnis wie [das dritte Beispiel](#sowohl_die_anzahl_als_auch_die_breite_der_spalten_festlegen) geben, mit sowohl `column-count` als auch `column-width`.

```css
.container {
  columns: 2 200px;
}
```

## Nächste Schritte

In diesem Leitfaden haben wir die grundlegende Verwendung von Mehrspalten-Layouts gelernt. Im nächsten Leitfaden werden wir uns ansehen, wie weit wir [die Spalten selbst stylen](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns) können.
