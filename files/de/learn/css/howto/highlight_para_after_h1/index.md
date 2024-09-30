---
title: Anleitung zur Hervorhebung eines Absatzes nach einer Überschrift
slug: Learn/CSS/Howto/Highlight_para_after_h1
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einen Absatz hervorheben, der direkt nach einer Überschrift kommt.

## Stil des ersten Absatzes nach einer Überschrift

Ein häufiges Muster ist es, den ersten Absatz in einem Artikel anders zu gestalten als die nachfolgenden. Normalerweise folgt dieser erste Absatz direkt nach einer Überschrift, und wenn dies bei Ihrem Design der Fall ist, können Sie diese Kombination von Elementen verwenden, um den Absatz zu gestalten.

## Der Nachbar-Element-Kombinator

CSS verfügt über eine Gruppe von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), die als **Kombinatoren** bezeichnet werden, weil sie Dinge auf der Grundlage einer Kombination von Selektoren auswählen. In unserem Fall verwenden wir den [Nachbar-Element-Kombinator](/de/docs/Web/CSS/Next-sibling_combinator). Dieser Kombinator wählt ein Element aus, basierend darauf, dass es neben einem anderen Element steht. In unserem HTML haben wir ein {{htmlelement("Heading_Elements", "h1")}} gefolgt von einem {{htmlelement("p")}}. Das `<p>` ist das nächste Geschwisterchen des `<h1>`, daher können wir es mit `h1 + p` auswählen.

{{EmbedGHLiveSample("css-examples/howto/highlight_h1_plus_para.html", '100%', 800)}}

## Siehe auch

- [Learn CSS: Selectors.](/de/docs/Learn/CSS/Building_blocks/Selectors)
- [Learn CSS: Combinators.](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators)
