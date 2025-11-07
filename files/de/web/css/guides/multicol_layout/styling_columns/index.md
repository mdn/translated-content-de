---
title: Spalten stilisieren
slug: Web/CSS/Guides/Multicol_layout/Styling_columns
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Da die in mehrspaltigen (_multicol_) Containern erstellten Spaltenboxen anonyme Boxen sind, ist das Stylen einzelner Spalten nicht möglich. Wir können jedoch die Abstände zwischen den Spalten und den Container im Allgemeinen stylen. Dieser Leitfaden erklärt, wie Sie die Lücken und Stilregeln zwischen den Spalten ändern können.

## Spaltenabstände

Der Abstand zwischen den Spalten wird mit der {{CSSXref("column-gap")}} oder {{CSSXref("gap")}} Eigenschaft gesteuert. Die Eigenschaft `column-gap` ist im [modul für mehrspaltiges Layout](/de/docs/Web/CSS/Guides/Multicol_layout) definiert. Die Eigenschaft `gap` ist im [modul für Box-Ausrichtung](/de/docs/Web/CSS/Guides/Box_alignment) definiert. Dies ist eine einheitliche Eigenschaft, um Lücken zwischen Boxen in allen Layouts zu definieren, die Lücken unterstützen, einschließlich [CSS Grid Layout](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment) und [CSS Flexiblen Box-Layouts](/de/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items).

Der Anfangswert von `column-gap` ist `1em`, was verhindert, dass Spalten ineinander laufen. In anderen Layoutmethoden wird `column-gap` als Synonym für `gap` unterstützt, jedoch mit einem Anfangswert von `0`. Der Schlüsselwortwert `normal` setzt `column-gap` auf den Anfangswert.

Sie können die Lücke ändern, indem Sie einen beliebigen {{cssxref("length")}}-Wert verwenden. Im folgenden Beispiel ist der `column-gap` auf `40px` eingestellt.

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

Der erlaubte Wert für `column-gap` ist eine {{cssxref("length-percentage")}}, was bedeutet, dass Prozentsätze erlaubt sind. Prozentwerte für `column-gap` werden als Prozentsatz der Breite des mehrspaltigen Containers berechnet.

## Spaltenregeln

Die Spezifikation definiert {{CSSXref("column-rule-width")}}, {{CSSXref("column-rule-style")}} und {{CSSXref("column-rule-color")}}, und bietet eine Kurzform {{CSSXref("column-rule")}}. Diese Eigenschaften funktionieren genau wie die {{CSSXref("border")}} Eigenschaften: Jeder {{CSSXref("line-style")}} kann als `column-rule-style` verwendet werden, genauso wie es für gültige {{CSSXref("border-style")}} möglich ist.

Diese Eigenschaften werden auf das Element angewendet, das der mehrspaltige Container ist, und daher haben alle Spalten die gleiche Regel. Regeln werden nur zwischen Spalten gezogen und nicht an den äußeren Rändern. Regeln werden auch nur zwischen Spalten gezogen, die Inhalt haben.

Im nächsten Beispiel wurde eine 5px-punktierte Regel mit der Farbe `rebeccapurple` unter Verwendung der ausführlichen Werte erstellt.

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

Beachten Sie, dass die Regel selbst keinen Platz einnimmt: Eine breite Regel wird die Spalten nicht auseinander schieben, um Platz für die Regel zu schaffen. Stattdessen überlagert die Regel die Lücke.

Das unten stehende Beispiel verwendet eine sehr breite Regel von `40px` und eine `10px` Lücke. Die Regel wird unter dem Spalteninhalt angezeigt. Um auf beiden Seiten der Regel Platz zu schaffen, müsste die Lücke auf mehr als `40px` vergrößert werden.

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

Dieser Artikel beschreibt alle aktuellen Möglichkeiten, wie Spaltenboxen gestylt werden können. Im nächsten Leitfaden werden wir uns damit beschäftigen, Elemente innerhalb eines Containers [über alle Spalten zu erstrecken](/de/docs/Web/CSS/Guides/Multicol_layout/Spanning_balancing_columns).
