---
title: Anleitung zum Hervorheben eines Absatzes nach einer Überschrift
slug: Learn_web_development/Howto/Solve_CSS_problems/Highlight_para_after_h1
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

In diesem Leitfaden erfahren Sie, wie Sie einen Absatz hervorheben können, der direkt nach einer Überschrift folgt.

## Den ersten Absatz nach einer Überschrift stylen

Ein häufiges Muster ist, den ersten Absatz in einem Artikel anders zu gestalten als die folgenden. Üblicherweise folgt dieser erste Absatz direkt auf eine Überschrift. Wenn dies der Fall in Ihrem Design ist, können Sie diese Kombination von Elementen nutzen, um den Absatz gezielt anzusprechen.

## Der direkt-nachfolgende Geschwisterkombinator

CSS verfügt über eine Gruppe von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), die als **Kombinatoren** bezeichnet werden, weil sie Dinge basierend auf einer Kombination von Selektoren auswählen. In unserem Fall verwenden wir den [direkt-nachfolgenden Geschwisterkombinator](/de/docs/Web/CSS/Next-sibling_combinator). Dieser Kombinator wählt ein Element basierend darauf aus, dass es neben einem anderen Element steht. In unserem HTML haben wir ein {{htmlelement("Heading_Elements", "h1")}} gefolgt von einem {{htmlelement("p")}}. Das `<p>` ist das direkt-nachfolgende Geschwister des `<h1>`, sodass wir es mit `h1 + p` auswählen können.

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

- [CSS lernen: Basis-Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
- [CSS lernen: Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators)
