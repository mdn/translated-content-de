---
title: Box-Alignment im Mehrspalten-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment)-Spezifikation beschreibt, wie die Ausrichtung in verschiedenen Layoutmethoden funktioniert; auf dieser Seite untersuchen wir, wie Box-Alignment im Kontext des [Mehrspalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout) funktioniert. Da diese Seite darauf abzielt, Dinge zu detaillieren, die spezifisch für Mehrspalten-Layout und Box-Alignment sind, sollte sie in Verbindung mit der Hauptseite [Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die gemeinsamen Merkmale von Box-Alignment über die Layoutmethoden hinweg beschreibt.

Im Mehrspalten-Layout ist das Ausrichtungs-Container der Inhaltsbereich des Mehrspalten-Containers. Das Ausrichtungs-Subjekt ist das Spaltenfeld. Die Eigenschaften, die für Mehrspalten-Layouts gelten, sind unten aufgeführt.

> [!NOTE]
> Mehrspalten-Layout entstand vor der Box-Alignment-Spezifikation. Und die hier aufgeführten Eigenschaften, obwohl sie für Multicol spezifiziert sind, könnten in Browsern nicht unterstützt werden.

## align-content und justify-content

Die {{cssxref("align-content")}}-Eigenschaft gilt für die Blockachse und {{cssxref("justify-content")}} für die Inline-Achse. Jede durch die Verwendung von Raumverteilung zu den Spalten hinzugefügte Lücke wird dem Abstand zwischen den Spalten hinzugefügt und macht den Abstand somit größer, als es durch die {{cssxref("column-gap")}}-Eigenschaft spezifiziert sein könnte.

Die Verwendung eines anderen Werts von `justify-content` als `normal` oder `stretch` führt dazu, dass Spaltenkästen mit der im Multicol-Container angegebenen {{cssxref("column-width")}} angezeigt werden, und der verbleibende Raum wird gemäß dem Wert von justify-content verteilt.

## column-gap

Die {{cssxref("column-gap")}}-Eigenschaft wurde in früheren Versionen der Mehrspalten-Layout-Spezifikation spezifiziert und wurde nun mit den Abstandseigenschaften für andere Layoutmethoden im Box-Alignment vereinheitlicht. Während andere Layoutmethoden den Anfangswert von column-gap als 0 behandeln, behandelt Multicol ihn als 1em, da Sie im Allgemeinen keinen Abstand zwischen den Spalten haben möchten.

## Referenz

### CSS-Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("column-gap")}}

### Glossareinträge

- [Ausrichtungs-Subjekt](/de/docs/Glossary/Alignment_Subject)
- [Ausrichtungs-Container](/de/docs/Glossary/Alignment_Container)
- [Fallback-Ausrichtung](/de/docs/Glossary/Fallback_Alignment)
