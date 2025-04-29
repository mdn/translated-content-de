---
title: Anleitung zur Hervorhebung eines Absatzes nach einer Überschrift
short-title: Hervorheben eines Absatzes nach einer Überschrift
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1
l10n:
  sourceCommit: 479ea4c8bff4b900a7968413287c77dde2b0c20f
---

In diesem Leitfaden erfahren Sie, wie Sie einen Absatz hervorheben, der direkt nach einer Überschrift folgt.

## Stil des ersten Absatzes nach einer Überschrift

Ein häufiges Muster besteht darin, den ersten Absatz eines Artikels anders zu gestalten als die folgenden Absätze. Normalerweise kommt dieser erste Absatz direkt nach einer Überschrift, und falls dies in Ihrem Design der Fall ist, können Sie diese Kombination von Elementen verwenden, um den Absatz zu erfassen.

## Der Nachbar-Kombinator

CSS verfügt über eine Gruppe von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), die als **Kombinatoren** bezeichnet werden, weil sie Dinge basierend auf einer Kombination von Selektoren auswählen. In unserem Fall verwenden wir den [Nachbar-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator). Dieser Kombinator wählt ein Element aus, basierend darauf, dass es neben einem anderen Element ist. In unserem HTML haben wir ein {{htmlelement("Heading_Elements", "h1")}} gefolgt von einem {{htmlelement("p")}}. Das `<p>` ist der nächste Nachbar des `<h1>`, daher können wir es mit `h1 + p` auswählen.

```html live-sample___highlight_h1_plus_para
<div class="wrapper">
  <h1>A heading</h1>
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

```css live-sample___highlight_h1_plus_para
.wrapper h1 + p {
  font-weight: bold;
  font-size: 130%;
  color: rebeccapurple;
}
```

{{EmbedLiveSample("highlight_h1_plus_para", "", "220px")}}

## Siehe auch

- [CSS lernen: Grundlegende Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- [CSS lernen: Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
