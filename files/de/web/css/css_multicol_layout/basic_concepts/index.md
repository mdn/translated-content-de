---
title: Grundkonzepte des mehrspaltigen Layouts
slug: Web/CSS/CSS_multicol_layout/Basic_concepts
l10n:
  sourceCommit: 02cc9311b281b73322c5d13185119d2e8adf336a
---

{{CSSRef}}

Mehrspaltiges Layout, oft als Multicol-Layout bezeichnet, ist eine Spezifikation zum Anordnen von Inhalten in einer Reihe von Spaltenboxen, ähnlich wie Spalten in einer Zeitung. Dieser Leitfaden erklärt, wie die Spezifikation funktioniert, mit einigen häufigen Anwendungsbeispielen.

## Wichtige Eigenschaften

Multicol-Layout unterscheidet sich von allen anderen Layoutmethoden in CSS; es fragmentiert den Inhalt, einschließlich aller untergeordneten Elemente, in Spalten. Dies geschieht genauso, wie Inhalte in Seiten fragmentiert werden, wenn wir mit [CSS-Seitenmedien](/de/docs/Web/CSS/CSS_paged_media) arbeiten, indem wir ein Druckstylesheet erstellen.

In diesem und den folgenden Leitfäden werden wir die folgenden Eigenschaften des [CSS-Multicol-Layout](/de/docs/Web/CSS/CSS_multicol_layout)-Moduls besprechen:

- {{cssxref("column-width")}}
- {{cssxref("column-count")}}
- {{cssxref("columns")}} Shorthand
- {{cssxref("column-rule-color")}}
- {{cssxref("column-rule-style")}}
- {{cssxref("column-rule-width")}}
- {{cssxref("column-rule")}} Shorthand
- {{cssxref("column-span")}}
- {{cssxref("column-fill")}}
- {{cssxref("column-gap")}}
- {{cssxref("break-after")}}
- {{cssxref("break-before")}}
- {{cssxref("break-inside")}}

## Spalten definieren

Durch Hinzufügen der Eigenschaft `column-count` oder `column-width` zu einem Element oder durch Verwendung der Kurzform `columns` wird das Element zu einem _Multicol-Container_. Die Spalten sind anonyme Boxen; sie werden in der Spezifikation als _Column Boxes_ beschrieben.

### Die Anzahl der Spalten festlegen

Die Eigenschaft `column-count` gibt die Anzahl der Spalten an, in denen der Inhalt angezeigt werden soll. Der Browser weist dann jeder Spaltenbox den richtigen Platz zu, um die gewünschte Anzahl von Spalten zu erstellen.

Im folgenden Beispiel verwenden wir die Eigenschaft `column-count`, um drei Spalten auf dem `.container`-Element zu erstellen. Der Inhalt, einschließlich der Kinder von `.container`, wird dann zwischen den drei Spalten aufgeteilt.

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

Im obigen Beispiel ist der Inhalt innerhalb der Absatz-Tags `<p>` mit der Standardformatierung eingeschlossen. Daher gibt es einen Abstand über jedem Absatz. Sie können sehen, wie dieser Abstand die erste Textzeile nach unten drückt. Dies liegt daran, dass ein Multicol-Container einen [Blockformatierungskontext (BFC)](/de/docs/Web/CSS/CSS_display/Block_formatting_context) erstellt, aufgrund dessen Abstände auf untergeordneten Elementen nicht mit dem Abstand auf dem Container zusammenfallen.

### Die Breite der Spalten festlegen

Die Eigenschaft `column-width` wird verwendet, um die optimale Breite für jede Spaltenbox festzulegen. Wenn Sie eine Spaltenbreite angeben, berechnet der Browser, wie viele Spalten dieser Breite in den Multicol-Container passen und verteilt zusätzlichen Platz gleichmäßig zwischen den Spalten. Daher sollte die Spaltenbreite als Mindestbreite betrachtet werden, da die Spaltenboxen aufgrund des zusätzlichen Platzes wahrscheinlich breiter sind.

Im Fall einer einzigen Spalte mit weniger verfügbarem Platz als der Wert von `column-width`, wird die Spaltenbox kleiner als die deklarierte Spaltenbreite schrumpfen.

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

### Sowohl Anzahl als auch Breite der Spalten festlegen

Wenn Sie beide Eigenschaften auf einem Multicol-Container angeben, wird `column-count` als maximale Anzahl von Spalten fungieren. Daher tritt das beschriebene Verhalten für `column-width` auf, bis die Anzahl der Spalten in `column-count` erreicht ist. Ab diesem Punkt werden keine weiteren Spalten gezeichnet und der zusätzliche Platz wird gleichmäßig zwischen den vorhandenen Spalten verteilt, selbst wenn Platz für mehr Spalten der angegebenen `column-width`-Größe vorhanden ist.

Wenn Sie beide Eigenschaften zusammen verwenden, können Sie weniger Spalten erhalten als in dem Wert für `column-count` angegeben.

Im nächsten Beispiel verwenden wir `column-width` von `200px` und `column-count` von `2`. Auch wenn Platz für mehr als zwei Spalten ist, erhalten wir zwei. Wenn nicht genug Platz für zwei Spalten von mindestens 200 Pixeln vorhanden ist, erhalten wir eine.

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

### Shorthand-Eigenschaft für Spalten

Sie können die `columns`-Shorthand verwenden, um die `column-count`- und `column-width`-Werte festzulegen. Wenn Sie eine Längeneinheit angeben, wird der Wert für `column-width` verwendet, und wenn Sie einen ganzzahligen Wert angeben, wird der Wert für `column-count` verwendet. Sie können beide Eigenschaften festlegen, indem Sie die beiden Werte durch ein Leerzeichen trennen.

Dieses CSS würde das gleiche Ergebnis liefern wie [das erste Beispiel](#die_anzahl_der_spalten_festlegen), mit `column-count` auf `3` gesetzt.

```css
.container {
  columns: 3;
}
```

Dieses CSS würde das gleiche Ergebnis liefern wie [das zweite Beispiel](#die_breite_der_spalten_festlegen), mit `column-width` von `200px`.

```css
.container {
  columns: 200px;
}
```

Dieses CSS würde das gleiche Ergebnis liefern wie [das dritte Beispiel](#sowohl_anzahl_als_auch_breite_der_spalten_festlegen), mit sowohl `column-count` als auch `column-width` gesetzt.

```css
.container {
  columns: 2 200px;
}
```

## Nächste Schritte

In diesem Leitfaden haben wir die grundlegende Verwendung des mehrspaltigen Layouts gelernt. Im nächsten Leitfaden werden wir uns ansehen, wie viele Stile auf [die Spalten selbst angewendet werden können](/de/docs/Web/CSS/CSS_multicol_layout/Styling_columns).
