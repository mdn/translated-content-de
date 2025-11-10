---
title: Grundkonzepte von Mehrspaltenlayouts
short-title: Grundlegende Konzepte
slug: Web/CSS/CSS_multicol_layout/Basic_concepts
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Mehrspaltenlayout, oft als Multicol-Layout bezeichnet, ist eine Spezifikation zur Anordnung von Inhalten in einer Reihe von Spaltenkästen, ähnlich wie Spalten in einer Zeitung. Dieser Leitfaden erklärt, wie die Spezifikation funktioniert und bietet Beispiele für häufige Anwendungsfälle.

## Wichtige Eigenschaften

Das Multicol-Layout unterscheidet sich von anderen Layoutmethoden in CSS; es fragmentiert den Inhalt, einschließlich aller nachgelagerten Elemente, in Spalten. Dies geschieht ähnlich wie die Fragmentierung von Inhalten in Seiten, wenn wir mit [CSS-Seitenmedien](/de/docs/Web/CSS/Guides/Paged_media) arbeiten, indem wir ein Druckstilblatt erstellen.

In diesem und den darauf folgenden Leitfäden werden wir die folgenden, im [CSS Mehrspaltenlayout-Modul](/de/docs/Web/CSS/Guides/Multicol_layout) definierten Eigenschaften besprechen:

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

Durch Hinzufügen der Eigenschaft `column-count` oder `column-width` zu einem Element oder die Verwendung der Kurzform `columns` wird das Element zu einem _Mehrspalten-Container_ oder kurz _Multicol-Container_. Die Spalten sind anonyme Kästen; sie werden in der Spezifikation als _Spaltenkästen_ beschrieben.

### Die Anzahl der Spalten festlegen

Die Eigenschaft `column-count` bestimmt die Anzahl der Spalten, in denen der Inhalt angezeigt werden soll. Der Browser weist dann jedem Spaltenkasten die richtige Menge an Platz zu, um die gewünschte Anzahl an Spalten zu schaffen.

Im folgenden Beispiel verwenden wir die Eigenschaft `column-count`, um drei Spalten im `.container`-Element zu erstellen. Der Inhalt, einschließlich der Kinder von `.container`, wird dann auf die drei Spalten verteilt.

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

Im obigen Beispiel ist der Inhalt innerhalb der Paragraphen `<p>`-Tags mit der Standardformatierung umschlossen. Daher gibt es einen Rand über jedem Paragraphen. Sie können sehen, wie dieser Rand die erste Textzeile nach unten schiebt. Das liegt daran, dass ein Multicol-Container einen [Blockformatierungskontext (BFC)](/de/docs/Web/CSS/Guides/Display/Block_formatting_context) erstellt, wodurch die Ränder von Kinderlementen nicht mit einem Rand des Containers zusammenfallen.

### Breite der Spalten festlegen

Die Eigenschaft `column-width` wird verwendet, um die optimale Breite für jeden Spaltenkasten festzulegen. Wenn Sie eine Spaltenbreite angeben, ermittelt der Browser, wie viele Spalten dieser Breite in den Multicol-Container passen, und verteilt den zusätzlichen Platz gleichmäßig zwischen den Spalten. Daher sollte die Spaltenbreite als Mindestbreite angesehen werden, da die Spaltenkästen aufgrund des zusätzlichen Platzes wahrscheinlich breiter sind.

Im Falle einer einzelnen Spalte mit weniger verfügbarer Breite als der Wert von `column-width`, wird der Spaltenkasten auf eine Größe verkleinert, die kleiner ist als die deklarierte Spaltenbreite.

Im Beispiel unten ist die Eigenschaft `column-width` auf `200px` gesetzt. Wir erhalten so viele 200-Pixel-Spalten, wie in den Container passen, wobei der zusätzliche Raum gleichmäßig verteilt wird.

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

Wenn Sie beide Eigenschaften auf einem Multicol-Container angeben, wirkt `column-count` als maximale Anzahl von Spalten. Daher tritt das für `column-width` beschriebene Verhalten ein, bis die in `column-count` angegebene Anzahl von Spalten erreicht ist. Ab diesem Punkt werden keine weiteren Spalten gezeichnet und der zusätzliche Raum wird gleichmäßig zwischen den vorhandenen Spalten verteilt, auch wenn noch Platz für weitere Spalten der angegebenen `column-width`-Größe vorhanden ist.

Wenn Sie beide Eigenschaften zusammen verwenden, kann es sein, dass Sie weniger Spalten erhalten als in `column-count` angegeben.

Im nächsten Beispiel verwenden wir `column-width` von `200px` und `column-count` von `2`. Selbst wenn Platz für mehr als zwei Spalten vorhanden ist, erhalten wir zwei. Wenn nicht genug Platz für zwei Spalten mit jeweils mindestens 200 Pixeln vorhanden ist, erhalten wir eine.

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

Sie können die Kurzform `columns` verwenden, um die Werte für `column-count` und `column-width` festzulegen. Wenn Sie eine Längeneinheit angeben, wird der Wert als `column-width` verwendet, und wenn Sie eine Ganzzahl angeben, wird der Wert als `column-count` verwendet. Sie können beide Eigenschaften festlegen, indem Sie die beiden Werte mit einem Leerzeichen trennen.

Dieses CSS würde dasselbe Ergebnis wie [das erste Beispiel](#die_anzahl_der_spalten_festlegen) liefern, mit `column-count` auf `3` gesetzt.

```css
.container {
  columns: 3;
}
```

Dieses CSS würde dasselbe Ergebnis wie [das zweite Beispiel](#breite_der_spalten_festlegen) liefern, mit `column-width` von `200px`.

```css
.container {
  columns: 200px;
}
```

Dieses CSS würde dasselbe Ergebnis wie [das dritte Beispiel](#sowohl_anzahl_als_auch_breite_der_spalten_festlegen) liefern, mit sowohl `column-count` als auch `column-width` festgelegt.

```css
.container {
  columns: 2 200px;
}
```

## Nächste Schritte

In diesem Leitfaden haben wir die grundlegende Verwendung von Mehrspaltenlayouts kennengelernt. Im nächsten Leitfaden werden wir uns ansehen, wie wir [die Spalten selbst gestalten können](/de/docs/Web/CSS/Guides/Multicol_layout/Styling_columns).
