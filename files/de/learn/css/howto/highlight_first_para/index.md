---
title: Anleitung zum Hervorheben des ersten Absatzes
slug: Learn/CSS/Howto/Highlight_first_para
l10n:
  sourceCommit: 751d58669499de0c6ea0d5b356e0e1448418c5d3
---

{{LearnSidebar}}

In diesem Leitfaden erfahren Sie, wie Sie den ersten Absatz innerhalb eines Containers hervorheben können.

## Den ersten Absatz formatieren

Sie möchten den ersten Absatz größer und fett machen. Sie könnten dem ersten Absatz eine Klasse hinzufügen und ihn auf diese Weise auswählen. Es ist jedoch flexibler, einen Pseudo-Klassen-Selektor zu verwenden — das bedeutet, dass Sie den Absatz basierend auf seiner Position im Dokument anvisieren können, und Sie müssen die Klasse nicht manuell verschieben, wenn sich die Quellreihenfolge ändert.

## Verwendung einer Pseudo-Klasse

Eine {{cssxref("pseudo-classes","Pseudo-Klasse")}} wirkt, als hätten Sie eine Klasse angewendet; jedoch wählt CSS nicht über einen Klassen-Selektor aus, sondern basierend auf der Dokumentstruktur. Es gibt eine Reihe von verschiedenen Pseudo-Klassen, die unterschiedliche Dinge auswählen können. In unserem Fall werden wir {{cssxref(":first-child")}} verwenden. Dies wählt das Element aus, das das erste Kind eines Elternteils ist.

{{EmbedGHLiveSample("css-examples/howto/highlight_first_para.html", '100%', 770)}}

Sie können versuchen, {{cssxref(":first-child")}} im obigen Live-Beispiel in {{cssxref(":last-child")}} zu ändern, und Sie werden den letzten Absatz auswählen.

Wann immer Sie etwas in Ihrem Dokument anvisieren müssen, können Sie prüfen, ob eine der verfügbaren {{cssxref("pseudo-classes")}} dies für Sie erledigen kann.

## Siehe auch

- Die {{cssxref("pseudo-classes")}} Referenzseite.
- [Learn CSS: Pseudo-classes and pseudo-elements.](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
