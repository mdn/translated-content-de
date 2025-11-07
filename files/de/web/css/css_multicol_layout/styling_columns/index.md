---
title: Spalten stylen
slug: Web/CSS/CSS_multicol_layout/Styling_columns
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Da Spaltenboxen, die innerhalb von Multi-Column-(_multicol_)-Containern erstellt werden, anonyme Boxen sind, ist das Stylen einzelner Spalten nicht möglich. Wir können jedoch die Abstände zwischen den Spalten und den Container im Allgemeinen stylen. Dieser Leitfaden erklärt, wie man den Abstand und die Stilregeln zwischen den Spalten ändert.

## Spaltenabstände

Der Abstand zwischen Spalten wird mit der Eigenschaft {{CSSXref("column-gap")}} oder {{CSSXref("gap")}} gesteuert. Die Eigenschaft `column-gap` ist im [Multi-Column-Layout](/de/docs/Web/CSS/Guides/Multicol_layout) Modul definiert. Die Eigenschaft `gap` ist im [Box-Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul definiert. Dies ist eine einheitliche Eigenschaft zur Definition von Abständen zwischen Boxen in allen Layouts, die Abstände unterstützen, einschließlich [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) und [CSS Flexible Box Layout](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items).

Der Anfangswert von `column-gap` ist `1em`, was verhindert, dass Spalten ineinanderlaufen. In anderen Layout-Methoden wird `column-gap` als Synonym für `gap` unterstützt, jedoch mit einem Anfangswert von `0`. Der Schlüsselwortwert `normal` setzt `column-gap` auf den Anfangswert.

Sie können den Abstand mit jedem {{cssxref("length")}}-Wert ändern. Im untenstehenden Beispiel ist der `column-gap` auf `40px` gesetzt.

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

Der erlaubte Wert für `column-gap` ist ein {{cssxref("length-percentage")}}, was bedeutet, dass Prozentsätze erlaubt sind. Prozentwerte für `column-gap` werden als Prozentsatz der Breite des Multicol-Containers berechnet.

## Spaltenregeln

Die Spezifikation definiert {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule-style")}} und {{CSSXref("column-rule-color")}}, wobei ein Kurzbefehl {{CSSXref("column-rule")}} bereitgestellt wird. Diese Eigenschaften funktionieren genauso wie die {{CSSXref("border")}}-Eigenschaften: Jeder {{CSSXref("line-style")}} kann als `column-rule-style` verwendet werden, genau wie bei einem gültigen {{CSSXref("border-style")}}.

Diese Eigenschaften werden auf das Element angewendet, das der Multicol-Container ist. Daher haben alle Spalten die gleiche Regel. Regeln werden nur zwischen den Spalten und nicht an den äußeren Rändern gezogen. Regeln werden auch nur zwischen Spalten gezogen, die Inhalt haben.

Im nächsten Beispiel wurde eine 5px gepunktete Regel mit der Farbe `rebeccapurple` unter Verwendung der Langformwerte erstellt.

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

Beachten Sie, dass die Regel selbst keinen Platz beansprucht: Eine breite Regel wird die Spalten nicht auseinanderdrücken, um Platz für die Regel zu schaffen. Stattdessen überlagert die Regel den Abstand.

Das untenstehende Beispiel verwendet eine sehr breite Regel von `40px` und `10px` Abstand. Die Regel wird unter dem Spalteninhalt angezeigt. Um auf beiden Seiten der Regel Platz zu schaffen, müsste der Abstand auf mehr als `40px` erhöht werden.

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

Dieser Artikel beschreibt alle aktuellen Möglichkeiten, wie Spaltenboxen gestylt werden können. Im nächsten Leitfaden sehen wir uns an, wie man Elemente innerhalb eines Containers [über alle Spalten hinweg erstreckt](/de/docs/Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns).
