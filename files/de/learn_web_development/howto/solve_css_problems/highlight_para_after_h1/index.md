---
title: Anleitung zum Hervorheben eines Absatzes, der auf eine Überschrift folgt
short-title: Einen Absatz nach einer Überschrift hervorheben
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

In diesem Leitfaden erfahren Sie, wie Sie einen Absatz hervorheben, der direkt nach einer Überschrift folgt.

## Styling des ersten Absatzes nach einer Überschrift

Ein häufiges Muster ist es, den ersten Absatz in einem Artikel anders zu gestalten als die nachfolgenden. Normalerweise folgt dieser erste Absatz direkt auf eine Überschrift, und falls dies in Ihrem Design der Fall ist, können Sie diese Kombination von Elementen verwenden, um den Absatz zu targetieren.

## Der Nachfolger-Kombinator

CSS verfügt über eine Gruppe von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), die als **Kombinatoren** bezeichnet werden, weil sie Dinge basierend auf einer Kombination von Selektoren auswählen. In unserem Fall verwenden wir den [Nachfolger-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator). Dieser Kombinator wählt ein Element basierend darauf aus, dass es neben einem anderen Element steht. In unserem HTML haben wir ein {{htmlelement("Heading_Elements", "h1")}} gefolgt von einem {{htmlelement("p")}}. Das `<p>` ist der nächste Nachfolger des `<h1>`, daher können wir es mit `h1 + p` auswählen.

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
