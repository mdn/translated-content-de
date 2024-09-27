---
title: Alignment subject
slug: Glossary/Alignment_Subject
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Im [CSS-Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) ist das **Ausrichtungsobjekt** das Element (oder die Elemente), das innerhalb des [Ausrichtungscontainers](/de/docs/Glossary/alignment_container) durch die Eigenschaft ausgerichtet wird.

Für {{cssxref("justify-self")}} und {{cssxref("align-self")}} ist das Ausrichtungsobjekt der Margin-Box des Elements, auf dem die Eigenschaft gesetzt ist, unter Verwendung des Schreibrichtungsmodus dieses Elements. Für {{cssxref("justify-content")}} und {{cssxref("align-content")}} wird ebenfalls der Schreibrichtungsmodus des Elements verwendet.

Die Definition des Ausrichtungsobjekts hängt vom verwendeten Layoutmodus ab.

- Block-Container (einschließlich Tabellenzellen)
  - : Der gesamte Inhalt des Blocks als eine Einheit.
- Multicol-Container
  - : Die Spaltenkästen, wobei der zwischen den Spaltenkästen eingefügte Abstand zu den entsprechenden Spaltenabständen hinzugefügt wird.
- Flex-Container
  - : Für {{cssxref("justify-content")}} die Flex-Elemente in jeder Flexzeile. Für {{cssxref("align-content")}} die Flexzeilen. Hinweis: Dies hat nur eine Wirkung auf mehrzeilige Flex-Container.
- Grid-Container
  - : Die Rasterbahnen in der entsprechenden Achse, wobei der zwischen den Bahnen eingefügte Abstand zu den entsprechenden Rinnen hinzugefügt wird. Eingefallene Rinnen werden als eine einzige Möglichkeit zur Raumeinfügung behandelt.

## Siehe auch

- [CSS-Box-Alignment](/de/docs/Web/CSS/CSS_box_alignment) Modul
- Verwandte Glossarbegriffe:
  - [Ausrichtungscontainer](/de/docs/Glossary/alignment_container)
