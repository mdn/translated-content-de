---
title: Grundlegende Konzepte von Mehrspaltenlayouts
short-title: Grundlegende Konzepte
slug: Web/CSS/Guides/Multicol_layout/Basic_concepts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein Mehrspaltenlayout, oft als Multicol-Layout bezeichnet, ist eine Spezifikation zur Anordnung von Inhalten in einer Reihe von Spaltenboxen, ähnlich wie Spalten in einer Zeitung. Dieser Leitfaden erklärt, wie die Spezifikation funktioniert, mit einigen häufigen Anwendungsbeispielen.

## Wichtige Eigenschaften

Das Multicol-Layout unterscheidet sich von anderen Layoutmethoden in CSS; es fragmentiert den Inhalt, einschließlich aller untergeordneten Elemente, in Spalten. Dies geschieht auf die gleiche Weise, wie Inhalte bei der Arbeit mit [CSS-Seiten-Medien](/de/docs/Web/CSS/Guides/Paged_media) in Seiten aufgeteilt werden, indem ein Druck-Stylesheet erstellt wird.

In diesem und den folgenden Leitfäden werden wir die folgenden im Modul [CSS-Mehrspaltenlayout](/de/docs/Web/CSS/Guides/Multicol_layout) definierten Eigenschaften besprechen:

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

## Definieren von Spalten

Indem Sie die Eigenschaft `column-count` oder `column-width` zu einem Element hinzufügen oder die Kurzform `columns` verwenden, wird das Element zu einem _Mehrspalten-Container_ oder _Multicol-Container_ für kurze. Die Spalten sind anonyme Boxen; sie werden in der Spezifikation als _Spaltenboxen_ beschrieben.

### Festlegen der Anzahl von Spalten

Die Eigenschaft `column-count` legt die Anzahl der Spalten fest, in denen Sie den Inhalt anzeigen möchten. Der Browser weist dann den einzelnen Spaltenboxen den entsprechenden Platz zu, um die gewünschte Anzahl von Spalten zu erstellen.

Im folgenden Beispiel verwenden wir die Eigenschaft `column-count`, um drei Spalten im `.container`-Element zu erstellen. Der Inhalt, einschließlich der Kinder von `.container`, wird dann auf die drei Spalten aufgeteilt.

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

Im obigen Beispiel ist der Inhalt innerhalb der Absatz-`<p>`-Tags mit der Standardformatierung eingeschlossen. Daher gibt es einen Abstand oberhalb jedes Absatzes. Sie können sehen, wie dieser Abstand die erste Textzeile nach unten schiebt. Dies liegt daran, dass ein Multicol-Container einen [Blockformatierungskontext (BFC)](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt, weshalb Abstände bei Kindelementen nicht mit Abständen auf dem Container zusammenfallen.

### Festlegen der Breite von Spalten

Die Eigenschaft `column-width` wird verwendet, um die optimale Breite für jede Spaltenbox festzulegen. Wenn Sie eine Spaltenbreite deklarieren, ermittelt der Browser, wie viele Spalten dieser Breite in den Multicol-Container passen und verteilt den zusätzlichen Platz gleichmäßig zwischen den Spalten. Daher sollte die Spaltenbreite als minimale Breite angesehen werden, da die Spaltenboxen aufgrund des zusätzlichen Platzes wahrscheinlich breiter sind.

Im Fall einer einzelnen Spalte mit weniger verfügbarem Platz als der Wert von `column-width`, wird die Spaltenbox kleiner als die deklarierte Spaltenbreite.

Im unten stehenden Beispiel wird die Eigenschaft `column-width` auf `200px` gesetzt. Wir erhalten so viele 200-Pixel-Spalten, wie in den Container passen, wobei der zusätzliche Platz gleichmäßig verteilt wird.

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

### Festlegen sowohl der Anzahl als auch der Breite von Spalten

Wenn Sie beide Eigenschaften an einem Multicol-Container festlegen, fungiert `column-count` als maximale Anzahl von Spalten. Daher erfolgt das Verhalten wie bei `column-width` beschrieben, bis die Anzahl der Spalten in `column-count` erreicht ist. Ab diesem Punkt werden keine weiteren Spalten gezeichnet und der zusätzliche Platz wird gleichmäßig zwischen den vorhandenen Spalten verteilt, auch wenn genug Platz für mehr Spalten der angegebenen `column-width` besteht.

Bei Verwendung beider Eigenschaften zusammen erhalten Sie möglicherweise weniger Spalten als im Wert für `column-count` angegeben.

Im folgenden Beispiel verwenden wir `column-width` von `200px` und `column-count` von `2`. Auch wenn Platz für mehr als zwei Spalten vorhanden ist, erhalten wir zwei. Wenn nicht genug Platz für zwei Spalten von mindestens 200 Pixeln vorhanden ist, erhalten wir eine.

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

Sie können die Kurzform `columns` verwenden, um die Werte von `column-count` und `column-width` festzulegen. Wenn Sie eine Längeneinheit angeben, wird der Wert für `column-width` verwendet, und wenn Sie eine Ganzzahl angeben, wird der Wert für `column-count` verwendet. Sie können beide Eigenschaften festlegen, indem Sie die beiden Werte mit einem Leerzeichen trennen.

Dieses CSS würde das gleiche Ergebnis wie [das erste Beispiel](#festlegen_der_anzahl_von_spalten) geben, mit `column-count` auf `3` gesetzt.

```css
.container {
  columns: 3;
}
```

Dieses CSS würde das gleiche Ergebnis wie [das zweite Beispiel](#festlegen_der_breite_von_spalten) geben, mit `column-width` von `200px`.

```css
.container {
  columns: 200px;
}
```

Dieses CSS würde das gleiche Ergebnis wie [das dritte Beispiel](#festlegen_sowohl_der_anzahl_als_auch_der_breite_von_spalten) geben, mit sowohl `column-count` als auch `column-width` gesetzt.

```css
.container {
  columns: 2 200px;
}
```

## Nächste Schritte

In diesem Leitfaden haben wir den grundlegenden Gebrauch des Mehrspaltenlayouts erlernt. Im nächsten Leitfaden schauen wir uns an, wie weit wir die [Spalten selbst stylen](/de/docs/Web/CSS/Guides/Multicol_layout/Styling_columns) können.
