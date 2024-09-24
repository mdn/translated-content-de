---
title: Wie man den ersten Absatz hervorhebt
slug: Learn/CSS/Howto/Highlight_first_para
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie den ersten Absatz innerhalb eines Containers hervorheben können.

## Den ersten Absatz stylen

Sie möchten den ersten Absatz größer und fett darstellen. Sie könnten eine Klasse zum ersten Absatz hinzufügen und auf diese Weise auswählen. Die Verwendung eines Pseudo-Klassen-Selektors ist jedoch flexibler – das bedeutet, dass Sie den Absatz basierend auf seiner Position im Dokument anvisieren können, und Sie müssen die Klasse nicht manuell verschieben, wenn sich die Quellreihenfolge ändert.

## Verwendung einer Pseudo-Klasse

Eine {{cssxref("pseudo-classes","Pseudo-Klasse")}} wirkt, als hätten Sie eine Klasse angewendet; anstatt jedoch einen Klassenselektor zu verwenden, wählt CSS basierend auf der Dokumentenstruktur aus. Es gibt eine Reihe verschiedener Pseudo-Klassen, die verschiedene Dinge auswählen können. In unserem Fall werden wir {{cssxref(":first-child")}} verwenden. Dies wählt das Element aus, das das erste Kind eines Elternteils ist.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_para.html", '100%', 770)}}

Sie können versuchen, {{cssxref(":first-child")}} in {{cssxref(":last-child")}} im obigen Live-Beispiel zu ändern, und Sie werden den letzten Absatz auswählen.

Wann immer Sie etwas in Ihrem Dokument anvisieren müssen, können Sie prüfen, ob eine der verfügbaren {{cssxref("pseudo-classes")}} es für Sie tun kann.

## Siehe auch

- Die Referenzseite zu {{cssxref("pseudo-classes")}}.
- [Lernen Sie CSS: Pseudo-Klassen und Pseudo-Elemente.](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
