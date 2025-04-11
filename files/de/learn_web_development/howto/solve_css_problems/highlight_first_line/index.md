---
title: Wie man die erste Zeile eines Absatzes hervorhebt
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_first_line
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

In diesem Leitfaden erfahren Sie, wie Sie die erste Zeile eines Textes in einem Absatz hervorheben können, auch wenn Sie nicht wissen, wie lang diese Zeile sein wird.

## Die erste Zeile eines Textes gestalten

Sie möchten die erste Zeile eines Absatzes größer und fett darstellen. Wenn Sie ein `<span>` um die erste Zeile wickeln, können Sie sie zwar gestalten, aber wenn die erste Zeile aufgrund einer kleineren Ansichtsfenstergröße kürzer wird, wird der gestaltete Text auf die nächste Zeile übertragen.

## Verwendung eines Pseudo-Elements

Ein {{cssxref("pseudo-elements", "Pseudo-Element")}} kann die Stelle des `<span>` einnehmen; es ist jedoch flexibler — der genaue Inhalt, der von einem Pseudo-Element ausgewählt wird, wird berechnet, sobald der Browser den Inhalt gerendert hat, sodass es auch funktioniert, wenn sich die Größe des Ansichtsfensters ändert.

In diesem Fall müssen wir das {{cssxref("::first-line")}} Pseudo-Element verwenden. Es wählt die erste formatierte Zeile jedes Absatzes aus, was bedeutet, dass Sie sie nach Ihren Wünschen gestalten können.

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
> Alle Pseudo-Elemente verhalten sich auf diese Weise. Sie verhalten sich, als hätten Sie ein Element in das Dokument eingefügt, aber sie tun dies dynamisch basierend auf dem Inhalt, wie er zur Laufzeit angezeigt wird.

## Pseudo-Elemente mit anderen Selektoren kombinieren

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
> Bei der Kombination von Pseudo-Elementen mit anderen Selektoren in einem [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor müssen die Pseudo-Elemente nach allen anderen Komponenten im Selektor erscheinen, in dem sie vorkommen.

## Siehe auch

- Die Referenzseite zu {{cssxref("pseudo-elements", "Pseudo-Elementen")}}.
- [CSS lernen: Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements).
