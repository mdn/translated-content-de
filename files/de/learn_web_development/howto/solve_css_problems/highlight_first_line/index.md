---
title: Wie man die erste Zeile eines Absatzes hervorhebt
short-title: Die erste Zeile eines Absatzes hervorheben
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Leitfaden erfahren Sie, wie Sie die erste Zeile eines Textes in einem Absatz hervorheben können, selbst wenn Sie nicht wissen, wie lang diese Zeile sein wird.

## Die erste Zeile eines Textes stylen

Sie möchten die erste Zeile eines Absatzes größer und fett darstellen. Wenn Sie ein `<span>` um die erste Zeile setzen, können Sie diese zwar stylen, aber wenn die erste Zeile aufgrund einer kleineren Bildschirmgröße kürzer wird, wird der gestylte Text auf die nächste Zeile umgebrochen.

## Verwendung eines Pseudo-Elements

Ein {{cssxref("pseudo-elements", "Pseudo-Element")}} kann das `<span>` ersetzen; es ist jedoch flexibler — der genaue Inhalt, den ein Pseudo-Element wählt, wird berechnet, sobald der Browser den Inhalt gerendert hat. Es funktioniert also auch, wenn sich die Größe des Ansichtsfensters ändert.

In diesem Fall müssen wir das {{cssxref("::first-line")}} Pseudo-Element verwenden. Es wählt die erste formatierte Zeile jedes Absatzes aus, was bedeutet, dass Sie diese nach Ihren Wünschen stylen können.

```html live-sample___highlight_first_line
<div class="wrapper">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___highlight_first_line
.wrapper p::first-line {
  font-weight: bold;
  font-size: 130%;
}
```

{{EmbedLiveSample("highlight_first_line")}}

> [!NOTE]
> Alle Pseudo-Elemente funktionieren auf diese Weise. Sie verhalten sich so, als hätten Sie ein Element in das Dokument eingefügt, tun dies jedoch dynamisch basierend auf dem Inhalt, während er zur Laufzeit angezeigt wird.

## Kombinieren von Pseudo-Elementen mit anderen Selektoren

Im obigen Beispiel wählt das Pseudo-Element die erste Zeile jedes Absatzes aus. Um nur die erste Zeile des ersten Absatzes auszuwählen, können Sie es mit einem anderen Selektor kombinieren. In diesem Fall verwenden wir die {{cssxref(":first-child")}} {{cssxref("pseudo-classes", "Pseudo-Klasse")}}. Dies ermöglicht es uns, die erste Zeile des ersten Kindes von `.wrapper` auszuwählen, wenn dieses erste Kind ein Absatz ist.

```html live-sample___highlight_first_line2
<div class="wrapper">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___highlight_first_line2
.wrapper p:first-child::first-line {
  font-weight: bold;
  font-size: 130%;
}
```

{{EmbedLiveSample("highlight_first_line2")}}

> [!NOTE]
> Beim Kombinieren von Pseudo-Elementen mit anderen Selektoren in einem [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor müssen die Pseudo-Elemente nach allen anderen Komponenten im Selektor erscheinen, in dem sie vorkommen.

## Siehe auch

- Die {{cssxref("pseudo-elements", "Pseudo-Elemente")}} Referenzseite.
- [Lernen Sie CSS: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements).
