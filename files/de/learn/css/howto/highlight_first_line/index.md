---
title: Anleitung zum Hervorheben der ersten Zeile eines Absatzes
slug: Learn/CSS/Howto/Highlight_first_line
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie die erste Zeile eines Textes in einem Absatz hervorheben können, selbst wenn Sie nicht wissen, wie lang diese Zeile sein wird.

## Die erste Zeile des Textes stylen

Sie möchten die erste Zeile eines Absatzes größer und fett darstellen. Wenn Sie ein `<span>` um die erste Zeile wickeln, können Sie es zwar stylen, allerdings wird der gestylte Text bei kleineren Anzeigen auf die nächste Zeile umgebrochen.

## Verwenden eines Pseudoelements

Ein {{cssxref("pseudo-elements", "Pseudoelement")}} kann anstelle des `<span>` verwendet werden; es ist jedoch flexibler — der genaue Inhalt, der von einem Pseudoelement ausgewählt wird, wird berechnet, nachdem der Browser den Inhalt gerendert hat. Es funktioniert also auch, wenn sich die Größe des Viewports ändert.

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
> Alle Pseudoelemente verhalten sich auf diese Weise. Sie agieren so, als hätten Sie ein Element in das Dokument eingefügt, tun dies jedoch dynamisch basierend auf dem Inhalt, wie er zur Laufzeit angezeigt wird.

## Kombinieren von Pseudoelementen mit anderen Selektoren

Im obigen Beispiel wählt das Pseudoelement die erste Zeile jedes Absatzes aus. Um nur die erste Zeile des ersten Absatzes auszuwählen, können Sie es mit einem anderen Selektor kombinieren. In diesem Fall verwenden wir die {{cssxref(":first-child")}} {{cssxref("pseudo-classes", "Pseudoklasse")}}. Damit können wir die erste Zeile des ersten Kindes von `.wrapper` auswählen, wenn dieses erste Kind ein Absatz ist.

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
> Beim Kombinieren von Pseudoelementen mit anderen Selektoren in einem [komplexen](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) oder [zusammengesetzten](/de/docs/Web/CSS/CSS_selectors/Selector_structure#compound_selector) Selektor müssen die Pseudoelemente nach allen anderen Komponenten im Selektor erscheinen, in dem sie auftauchen.

## Siehe auch

- Die {{cssxref("pseudo-elements", "Pseudoelemente")}} Referenzseite.
- [Lernen Sie CSS: Pseudoklassen und Pseudoelemente.](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
