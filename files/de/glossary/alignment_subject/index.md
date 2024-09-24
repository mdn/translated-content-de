---
title: Ausrichtungssubjekt
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Im [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) ist das **Ausrichtungssubjekt** das Element oder die Elemente, die innerhalb des {{glossary("alignment container")}} durch die Eigenschaft ausgerichtet werden.

Für {{cssxref("justify-self")}} und {{cssxref("align-self")}} ist das Ausrichtungssubjekt der Randbereich der Box, auf die die Eigenschaft angewendet wird, unter Verwendung des Schreibmodus dieser Box. Für {{cssxref("justify-content")}} und {{cssxref("align-content")}} wird ebenfalls der Schreibmodus der Box verwendet.

Die Definition des Ausrichtungssubjekts hängt von dem verwendeten Layoutmodus ab.

- Blockcontainer (einschließlich Tabellenzellen)
  - : Der gesamte Inhalt des Blocks als eine einzelne Einheit.
- Multicol-Container
  - : Die Spaltenboxen, wobei jeglicher Abstand, der zwischen den Spaltenboxen eingefügt wird, zu den relevanten Spaltenabständen hinzugefügt wird.
- Flex-Container
  - : Für {{cssxref("justify-content")}}, die Flex-Elemente in jeder Flex-Linie. Für {{cssxref("align-content")}}, die Flex-Linien. Beachten Sie, dass dies nur einen Effekt auf mehrzeilige Flex-Container hat.
- Grid-Container
  - : Die Rasterspuren in der entsprechenden Achse, mit jedem Abstand, der zwischen den Spuren eingefügt wird, der zu den relevanten Abständen hinzugefügt wird. Kollabierte Abstände werden als eine einzige Möglichkeit zur Raumeinfügung behandelt.

## Siehe auch

- CSS-Box-Ausrichtungsmodul
- Verwandte Glossarbegriffe:
  - {{Glossary("alignment container")}}
