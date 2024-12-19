---
title: "Anleitung: Hervorheben eines Absatzes nach einer Überschrift"
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einen Absatz hervorheben können, der direkt nach einer Überschrift folgt.

## Stil des ersten Absatzes nach einer Überschrift

Ein häufiger Stil ist es, den ersten Absatz in einem Artikel anders zu gestalten als die folgenden Absätze. Üblicherweise folgt dieser erste Absatz direkt auf eine Überschrift, und wenn dies in Ihrem Design der Fall ist, können Sie diese Kombination von Elementen verwenden, um den Absatz gezielt anzusprechen.

## Der Nachbar-Kombinator

CSS verfügt über eine Gruppe von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), die als **Kombinatoren** bezeichnet werden, weil sie Dinge basierend auf einer Kombination von Selektoren auswählen. In unserem Fall werden wir den [Nachbar-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) verwenden. Dieser Kombinator wählt ein Element basierend darauf aus, dass es neben einem anderen Element steht. In unserem HTML haben wir ein {{htmlelement("Heading_Elements", "h1")}} gefolgt von einem {{htmlelement("p")}}. Das `<p>` ist das nächste Geschwisterelement des `<h1>`, daher können wir es mit `h1 + p` auswählen.

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

- [Learn CSS: Basic selectors](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- [Learn CSS: Combinators](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
