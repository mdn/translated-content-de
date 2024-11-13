---
title: Spalten stylen
slug: Web/CSS/CSS_multicol_layout/Styling_columns
l10n:
  sourceCommit: 02cc9311b281b73322c5d13185119d2e8adf336a
---

{{CSSRef}}

Da Spaltenboxen, die innerhalb von Mehrspalten- (_multicol_) Containern erstellt werden, anonyme Boxen sind, ist es nicht möglich, einzelne Spalten zu stylen. Wir können lediglich die Abstände zwischen den Spalten und den Container im Allgemeinen stylen. Dieser Leitfaden erklärt, wie man die Lücken ändert und Stilregeln zwischen Spalten anwendet.

## Spaltenabstände

Der Abstand zwischen Spalten wird mit der Eigenschaft {{CSSXref("column-gap")}} oder {{CSSXref("gap")}} gesteuert. Die `column-gap`-Eigenschaft ist im [Mehrspalten-Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul definiert. Die `gap`-Eigenschaft ist im [Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment) Modul definiert. Dies ist eine einheitliche Eigenschaft zur Definition von Abständen zwischen Boxen in allen Layouts, die Abstände unterstützen, einschließlich [CSS-Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout) und [CSS-Flexbox-Layout](/de/docs/Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items).

Der Anfangswert von `column-gap` ist `1em`, was verhindert, dass Spalten ineinander laufen. In anderen Layout-Methoden wird `column-gap` als Synonym für `gap` unterstützt, jedoch mit einem Anfangswert von `0`. Der Schlüsselwortwert `normal` setzt `column-gap` auf den Anfangswert.

Sie können den Abstand mit jedem {{cssxref("length")}}-Wert ändern. Im unten stehenden Beispiel ist `column-gap` auf `40px` gesetzt.

```html live-sample___column-gap
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

```css live-sample___column-gap
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
  column-gap: 40px;
}
```

{{EmbedLiveSample("column-gap", "", "300px")}}

Der zulässige Wert für `column-gap` ist ein {{cssxref("length-percentage")}}, was bedeutet, dass Prozentsätze erlaubt sind. Prozentwerte für `column-gap` werden als Prozentsatz der Breite des Mehrspalten-Containers berechnet.

## Spaltenregeln

Die Spezifikation definiert {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule-style")}} und {{CSSXref("column-rule-color")}}, und bietet eine Kurzform {{CSSXref("column-rule")}}. Diese Eigenschaften funktionieren genau so wie die {{CSSXref("border")}}-Eigenschaften: Jeder {{CSSXref("line-style")}} kann als `column-rule-style` verwendet werden, genau wie bei einem gültigen {{CSSXref("border-style")}}.

Diese Eigenschaften werden auf das Element angewendet, das der Mehrspalten-Container ist, und daher haben alle Spalten die gleiche Regel. Regeln werden nur zwischen Spalten gezeichnet und nicht an den äußeren Rändern. Regeln werden auch nur zwischen Spalten gezeichnet, die Inhalt haben.

Im nächsten Beispiel wurde eine 5px-gepunktete Regel mit der Farbe `rebeccapurple` mithilfe von Langformen erstellt.

```html hidden live-sample___column-rule
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

```css live-sample___column-rule
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
  column-rule-width: 5px;
  column-rule-style: dotted;
  column-rule-color: rebeccapurple;
}
```

{{EmbedLiveSample("column-rule", "", "300px")}}

Beachten Sie, dass die Regel selbst keinen Platz einnimmt: Eine breite Regel wird die Spalten nicht auseinanderdrücken, um Platz für die Regel zu schaffen. Stattdessen überlagert die Regel den Abstand.

Das folgende Beispiel verwendet eine sehr breite Regel von `40px` und einen `10px`-Abstand. Die Regel wird unter dem Spalteninhalt angezeigt. Um auf beiden Seiten der Regel Platz zu schaffen, müsste der Abstand so weit erhöht werden, dass er größer als `40px` ist.

```html hidden live-sample___column-rule-wide
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

```css live-sample___column-rule-wide
body {
  font: 1.2em / 1.5 sans-serif;
}

.container {
  column-count: 3;
  column-gap: 10px;
  column-rule: 40px solid rebeccapurple;
}
```

{{EmbedLiveSample("column-rule-wide", "", "300px")}}

## Nächste Schritte

Dieser Artikel beschreibt alle aktuellen Möglichkeiten, wie Spaltenboxen gestylt werden können. Im nächsten Leitfaden werden wir uns damit befassen, wie Elemente innerhalb eines Containers [sich über alle Spalten erstrecken](/de/docs/Web/CSS/CSS_multicol_layout/Spanning_balancing_columns) lassen.
