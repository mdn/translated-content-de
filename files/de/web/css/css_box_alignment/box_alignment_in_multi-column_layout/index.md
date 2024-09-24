---
title: Box-Ausrichtung im Mehrspaltenlayout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die [Box-Ausrichtungs](/de/docs/Web/CSS/CSS_box_alignment)-Spezifikation beschreibt, wie die Ausrichtung in verschiedenen Layout-Methoden funktioniert; auf dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext des [Mehrspaltenlayouts](/de/docs/Web/CSS/CSS_multicol_layout) funktioniert. Da diese Seite darauf abzielt, Dinge zu erläutern, die spezifisch für Mehrspaltenlayout und Box-Ausrichtung sind, sollte sie zusammen mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die allgemeinen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

Im Mehrspaltenlayout ist der Ausrichtungscontainer die Inhaltsbox des Mehrspaltencontainers. Das Ausrichtungsobjekt ist die Spaltenbox. Die Eigenschaften, die auf Mehrspaltenlayouts angewendet werden, sind unten aufgeführt.

> [!NOTE]
> Das Mehrspaltenlayout existiert bereits vor der Box-Ausrichtungs-Spezifikation. Und die hier aufgeführten Eigenschaften, obwohl sie für Multicol spezifiziert sind, werden möglicherweise in Browsern nicht unterstützt.

## align-content und justify-content

Die {{cssxref("align-content")}}-Eigenschaft bezieht sich auf die Blockachse und {{cssxref("justify-content")}} auf die Inlineachse. Jeglicher Abstand, der den Spalten durch die Nutzung von Raumverteilung hinzugefügt wird, wird dem Abstand zwischen den Spalten hinzugefügt, wodurch der Abstand größer wird, als es durch die {{cssxref("column-gap")}}-Eigenschaft möglicherweise festgelegt wurde.

Die Verwendung eines Wertes von `justify-content`, der nicht `normal` oder `stretch` ist, führt dazu, dass Spaltenboxen mit der im Multicol-Container angegebenen {{cssxref("column-width")}} angezeigt werden, und der verbleibende Raum wird entsprechend dem Wert von justify-content verteilt.

## column-gap

Die {{cssxref("column-gap")}}-Eigenschaft wurde in früheren Versionen der Mehrspalten-Layout-Spezifikation angegeben und wurde nun mit den Abstandseigenschaften für andere Layout-Methoden in der Box-Ausrichtung vereinheitlicht. Während andere Layout-Methoden den Anfangswert von column-gap als 0 behandeln, behandelt multicol ihn als 1em, da Sie im Allgemeinen keinen Abstand zwischen den Spalten vermeiden möchten.

## Referenz

### CSS-Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("column-gap")}}

### Glossareinträge

- [Ausrichtungsobjekt](/de/docs/Glossary/Alignment_Subject)
- [Ausrichtungscontainer](/de/docs/Glossary/Alignment_Container)
- [Rückgriffsausrichtung](/de/docs/Glossary/Fallback_Alignment)
