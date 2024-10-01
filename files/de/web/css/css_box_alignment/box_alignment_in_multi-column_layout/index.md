---
title: Box-Ausrichtung im Multi-Spalten-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_multi-column_layout
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) Spezifikation beschreibt, wie Ausrichtung in verschiedenen Layoutmethoden funktioniert; auf dieser Seite untersuchen wir, wie Box-Ausrichtung im Kontext des [Multi-Spalten-Layouts](/de/docs/Web/CSS/CSS_multicol_layout) funktioniert. Da diese Seite darauf abzielt, Dinge zu erläutern, die spezifisch für Multi-Spalten-Layout und Box-Ausrichtung sind, sollte sie zusammen mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die gemeinsamen Merkmale der Box-Ausrichtung über Layoutmethoden hinweg behandelt.

Im Multi-Spalten-Layout ist der Ausrichtungscontainer die Inhaltsbox des Multicol-Containers. Das Ausrichtungssubjekt ist die Spaltenbox. Die Eigenschaften, die für Multi-Spalten-Layouts gelten, sind unten aufgeführt.

> [!NOTE]
> Multi-Spalten-Layout ist älter als die Box-Ausrichtungsspezifikation. Und die hier aufgeführten Eigenschaften, obwohl sie für Multicol spezifiziert sind, werden möglicherweise nicht von Browsern unterstützt.

## align-content und justify-content

Die {{cssxref("align-content")}} Eigenschaft gilt für die Blockachse und {{cssxref("justify-content")}} für die Inline-Achse. Jeder Abstand, der durch die Verwendung der Raumverteilung zu den Spalten hinzugefügt wird, wird zur Lücke zwischen den Spalten hinzugefügt und vergrößert somit die Lücke, die durch die {{cssxref("column-gap")}} Eigenschaft angegeben werden könnte.

Die Verwendung eines anderen Wertes als `normal` oder `stretch` für `justify-content` führt dazu, dass Spaltenboxen bei der auf dem Multicol-Container angegebenen {{cssxref("column-width")}} angezeigt werden und der verbleibende Raum entsprechend dem Wert von justify-content verteilt wird.

## column-gap

Die {{cssxref("column-gap")}} Eigenschaft wurde in früheren Versionen der Multi-Spalten-Layout-Spezifikation spezifiziert und ist jetzt mit den Lücken-Eigenschaften für andere Layoutmethoden in Box-Ausrichtung standardisiert. Während andere Layoutmethoden den Anfangswert von column-gap als 0 behandeln, behandelt multicol ihn als 1em, da Sie im Allgemeinen keinen Abstand zwischen den Spalten vermeiden möchten.

## Referenz

### CSS Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("column-gap")}}

### Glossareinträge

- {{Glossary("Alignment_Subject", "Ausrichtungssubjekt")}}
- {{Glossary("Alignment_Container", "Ausrichtungscontainer")}}
- {{Glossary("Fallback_Alignment", "Rückfallausrichtung")}}
