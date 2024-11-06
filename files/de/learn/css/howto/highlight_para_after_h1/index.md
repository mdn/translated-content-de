---
title: Anleitung zum Hervorheben eines Absatzes, der nach einer Überschrift folgt
slug: Learn/CSS/Howto/Highlight_para_after_h1
l10n:
  sourceCommit: 40590706f9ab23242bcd8c8966cc683d7d5b18aa
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einen Absatz hervorheben, der direkt nach einer Überschrift folgt.

## Stil des ersten Absatzes nach einer Überschrift

Ein häufiges Muster ist es, den ersten Absatz in einem Artikel anders zu gestalten als die nachfolgenden. Normalerweise kommt dieser erste Absatz direkt nach einer Überschrift, und wenn dies in Ihrem Design der Fall ist, können Sie diese Kombination von Elementen verwenden, um den Absatz zu adressieren.

## Der nächste-Geschwister-Kombinator

CSS verfügt über eine Gruppe von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), die als **Kombinatoren** bezeichnet werden, da sie Elemente basierend auf einer Kombination von Selektoren auswählen. In unserem Fall werden wir den [nächste-Geschwister-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator) verwenden. Dieser Kombinator wählt ein Element aus, basierend darauf, dass es neben einem anderen Element steht. In unserem HTML haben wir ein {{htmlelement("Heading_Elements", "h1")}} gefolgt von einem {{htmlelement("p")}}. Das `<p>` ist das nächste Geschwister des `<h1>`, sodass wir es mit `h1 + p` auswählen können.

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

- [Lernen Sie CSS: Selektoren.](/de/docs/Learn/CSS/Building_blocks/Selectors)
- [Lernen Sie CSS: Kombinatoren.](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators)
