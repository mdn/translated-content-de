---
title: Alignment subject
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Im [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) ist das **Alignment Subject** das Element (oder die Elemente), das innerhalb des {{Glossary("alignment_container", "Alignment Container")}} durch die Eigenschaft ausgerichtet wird.

Für {{cssxref("justify-self")}} und {{cssxref("align-self")}} ist das Alignment Subject der Margin-Box des Elements, auf dem die Eigenschaft festgelegt ist, unter Verwendung des Schreibmodus dieses Elements. Für {{cssxref("justify-content")}} und {{cssxref("align-content")}} wird ebenfalls der Schreibmodus des Elements verwendet.

Die Definition des Alignment Subject hängt vom verwendeten Layout-Modus ab.

- Block-Container (einschließlich Tabellenzellen)
  - : Der gesamte Inhalt des Blocks als eine Einheit.
- Multicol-Container
  - : Die Spaltenboxen, wobei jeder Abstand, der zwischen Spaltenboxen eingefügt wird, zu den entsprechenden Spaltenabständen hinzugefügt wird.
- Flex-Container
  - : Für {{cssxref("justify-content")}} die Flex-Elemente in jeder Flex-Linie. Für {{cssxref("align-content")}} die Flex-Linien. Beachten Sie, dass dies nur bei mehrzeiligen Flex-Containern einen Effekt hat.
- Grid-Container
  - : Die Grid-Tracks in der entsprechenden Achse, wobei jeder Abstand, der zwischen den Tracks eingefügt wird, zu den entsprechenden Rinnen hinzugefügt wird. Zusammengestürzte Rinnen werden als eine einzige Möglichkeit zur Einfügung von Abständen behandelt.

## Siehe auch

- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul
- Verwandte Glossarbegriffe:
  - {{Glossary("alignment_container", "Alignment Container")}}
