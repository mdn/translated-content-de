---
title: Ausrichtungsobjekt
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Im [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) ist das **Ausrichtungsobjekt** das Element (oder die Elemente), die innerhalb des {{Glossary("alignment_container", "Ausrichtungscontainers")}} durch die Eigenschaft ausgerichtet werden.

Für {{cssxref("justify-self")}} und {{cssxref("align-self")}} ist das Ausrichtungsobjekt die Margin-Box des Elements, auf dem die Eigenschaft gesetzt ist, unter Verwendung des Schreibmodus dieses Elements. Für {{cssxref("justify-content")}} und {{cssxref("align-content")}} wird ebenfalls der Schreibmodus des Elements verwendet.

Die Definition des Ausrichtungsobjekts hängt vom verwendeten Layoutmodus ab.

- Block-Container (einschließlich Tabellenzellen)
  - : Der gesamte Inhalt des Blocks als eine Einheit.
- Mehrspaltige Container
  - : Die Spaltenboxen, wobei jeglicher Abstand zwischen den Spaltenboxen zu den entsprechenden Spaltenabständen hinzugefügt wird.
- Flex-Container
  - : Für {{cssxref("justify-content")}} die Flex-Elemente jeder Flex-Linie. Für {{cssxref("align-content")}}, die Flex-Linien. Beachten Sie, dass dies nur bei mehrzeiligen Flex-Containern einen Effekt hat.
- Grid-Container
  - : Die Grid-Tracks in der entsprechenden Achse, wobei jeglicher Abstand, der zwischen den Tracks eingefügt wird, zu den entsprechenden Rinnen hinzugefügt wird. Zusammengefallene Rinnen werden als eine einzige Gelegenheit für die Einfügung von Raum behandelt.

## Siehe auch

- [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) Modul
- Verwandte Glossarbegriffe:
  - {{Glossary("alignment_container", "Ausrichtungscontainer")}}
