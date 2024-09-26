---
title: Wie man einen Absatz hervorhebt, der nach einer Überschrift folgt
slug: Learn/CSS/Howto/Highlight_para_after_h1
l10n:
  sourceCommit: bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie einen Absatz hervorheben, der direkt nach einer Überschrift kommt.

## Stil des ersten Absatzes nach einer Überschrift

Ein häufiges Muster ist es, den ersten Absatz in einem Artikel anders zu gestalten als die folgenden. Normalerweise folgt dieser erste Absatz direkt auf eine Überschrift, und wenn dies in Ihrem Design der Fall ist, können Sie diese Kombination von Elementen nutzen, um den Absatz anzuvisieren.

## Der nächste Geschwisterkombinator

CSS verfügt über eine Gruppe von [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors), die als **Kombinatoren** bezeichnet werden, da sie Dinge basierend auf einer Kombination von Selektoren auswählen. In unserem Fall verwenden wir den [nächsten Geschwisterkombinator](/de/docs/Web/CSS/Next-sibling_combinator). Dieser Kombinator wählt ein Element basierend darauf aus, dass es neben einem anderen Element steht. In unserem HTML haben wir ein {{htmlelement("Heading_Elements", "h1")}} gefolgt von einem {{htmlelement("p")}}. Das `<p>` ist das nächste Geschwister des `<h1>`, daher können wir es mit `h1 + p` auswählen.

{{EmbedGHLiveSample("css-examples/howto/highlight_h1_plus_para.html", '100%', 800)}}

## Siehe auch

- [Lernen Sie CSS: Selektoren.](/de/docs/Learn/CSS/Building_blocks/Selectors)
- [Lernen Sie CSS: Kombinatoren.](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators)