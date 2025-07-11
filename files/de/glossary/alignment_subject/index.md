---
title: Ausrichtungssubjekt
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Im [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) ist das **Ausrichtungssubjekt** das Element (oder die Elemente), die innerhalb des {{Glossary("alignment_container", "Ausrichtungscontainers")}} durch die Eigenschaft ausgerichtet werden.

Bei {{cssxref("justify-self")}} und {{cssxref("align-self")}} ist das Ausrichtungssubjekt die Randbox des Elements, auf das die Eigenschaft angewendet wird, unter Verwendung des Schreibmodus dieser Box. Für {{cssxref("justify-content")}} und {{cssxref("align-content")}} wird auch der Schreibmodus der Box verwendet.

Die Definition des Ausrichtungssubjekts hängt vom verwendeten Layoutmodus ab.

- Block-Container (einschließlich Tabellenzellen)
  - : Der gesamte Inhalt des Blocks als eine Einheit.
- Mehrspalten-Container
  - : Die Spaltenboxen, wobei jeglicher Abstand, der zwischen den Spaltenboxen eingefügt wird, zu den entsprechenden Spaltenabständen hinzugefügt wird.
- Flex-Container
  - : Für {{cssxref("justify-content")}}, die Flex-Elemente in jeder Flex-Linie. Für {{cssxref("align-content")}}, die Flex-Linien. Beachten Sie, dass dies nur Auswirkungen auf mehrzeilige Flex-Container hat.
- Grid-Container
  - : Die Gitterspuren in der entsprechenden Achse, wobei jeglicher Abstand, der zwischen den Spuren eingefügt wird, zu den entsprechenden Rillen hinzugefügt wird. Zusammengesetzte Rillen werden als eine einzige Möglichkeit zur Einfügung von Abstand behandelt.

## Siehe auch

- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul
- Verwandte Glossarbegriffe:
  - {{Glossary("alignment_container", "Ausrichtungscontainer")}}
