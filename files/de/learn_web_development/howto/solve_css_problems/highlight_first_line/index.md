---
title: Wie Sie die erste Zeile eines Absatzes hervorheben
short-title: Die erste Zeile eines Absatzes hervorheben
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In diesem Leitfaden erfahren Sie, wie Sie die erste Zeile eines Textes in einem Absatz hervorheben können, selbst wenn Sie nicht wissen, wie lang diese Zeile sein wird.

## Die erste Zeile des Textes stylen

Sie möchten die erste Zeile eines Absatzes größer und fett hervorheben. Wenn Sie ein `<span>` um die erste Zeile wickeln, können Sie diese stylen. Wird jedoch die erste Zeile aufgrund einer kleineren Viewport-Größe kürzer, wird der gestylte Text in die nächste Zeile umgebrochen.

## Verwendung eines Pseudoelements

Ein {{cssxref("pseudo-elements", "Pseudoelement")}} kann das `<span>` ersetzen; es ist jedoch flexibler — der genaue Inhalt, der von einem Pseudoelement ausgewählt wird, wird berechnet, nachdem der Browser den Inhalt gerendert hat. So funktioniert es auch, wenn sich die Viewport-Größe ändert.

In diesem Fall müssen wir das {{cssxref("::first-line")}} Pseudoelement verwenden. Es wählt die erste formatierte Zeile jedes Absatzes aus, was bedeutet, dass Sie sie nach Bedarf stylen können.

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
> Alle Pseudoelemente verhalten sich auf diese Weise. Sie agieren, als hätten Sie ein Element in das Dokument eingefügt, tun dies jedoch dynamisch basierend auf dem Inhalt, wie er zur Laufzeit angezeigt wird.

## Pseudoelemente mit anderen Selektoren kombinieren

Im obigen Beispiel wählt das Pseudoelement die erste Zeile jedes Absatzes aus. Um nur die erste Zeile des ersten Absatzes auszuwählen, können Sie es mit einem anderen Selektor kombinieren. In diesem Fall verwenden wir die {{cssxref(":first-child")}} {{cssxref("pseudo-classes", "Pseudoklasse")}}. Damit können wir die erste Zeile des ersten Kindes von `.wrapper` auswählen, falls dieses erste Kind ein Absatz ist.

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
> Wenn Pseudoelemente mit anderen Selektoren in einem [komplizierten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/Guides/Selectors/Selector_structure#compound_selector) Selektor kombiniert werden, müssen die Pseudoelemente nach allen anderen Komponenten im Selektor erscheinen, in dem sie sich befinden.

## Weitere Informationen

- Die Referenzseite zu {{cssxref("pseudo-elements", "Pseudoelementen")}}.
- [CSS lernen: Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements).
