---
title: Anleitung zum Hervorheben des ersten Absatzes
slug: Learn/CSS/Howto/Highlight_first_para
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie den ersten Absatz innerhalb eines Containers hervorheben können.

## Den ersten Absatz stylen

Sie möchten den ersten Absatz größer und fett darstellen. Sie könnten dem ersten Absatz eine Klasse hinzufügen und ihn auf diese Weise auswählen, jedoch ist die Verwendung eines Pseudo-Klassen-Selectors flexibler – dadurch können Sie den Absatz basierend auf seiner Position im Dokument anvisieren, und Sie müssen die Klasse nicht manuell verschieben, falls sich die Quellreihenfolge ändert.

## Verwendung einer Pseudo-Klasse

Eine {{cssxref("pseudo-classes","pseudo-class")}} wirkt so, als ob Sie eine Klasse angewendet haben; jedoch wählt CSS basierend auf der Dokumentstruktur und nicht mit einem Klassen-Selektor aus. Es gibt eine Reihe verschiedener Pseudo-Klassen, die unterschiedliche Dinge auswählen können. In unserem Fall werden wir {{cssxref(":first-child")}} verwenden. Dies wählt das Element aus, das das erste Kind eines Elternteils ist.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_para.html", '100%', 770)}}

Sie können im obigen Live-Beispiel {{cssxref(":first-child")}} in {{cssxref(":last-child")}} ändern, und Sie werden den letzten Absatz auswählen.

Wann immer Sie etwas in Ihrem Dokument anvisieren müssen, können Sie prüfen, ob eine der verfügbaren {{cssxref("pseudo-classes")}} das für Sie erledigen kann.

## Siehe auch

- Die {{cssxref("pseudo-classes")}} Referenzseite.
- [CSS lernen: Pseudo-Klassen und Pseudo-Elemente.](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
