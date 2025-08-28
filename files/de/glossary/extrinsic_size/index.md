---
title: Extrinsische Größe
slug: Glossary/Extrinsic_size
l10n:
  sourceCommit: bbff081938f76bdd6c6fdbf59d2e25e0a7a1cf2a
---

In CSS wird die **extrinsische Größe** eines Elements durch dessen Layout-Kontext bestimmt, also durch Einschränkungen, die von außerhalb des Elements auferlegt werden, ohne Rücksicht auf seinen Inhalt. Dies steht im Gegensatz zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} eines Elements, die auf ihrem Inhalt basiert.

Extrinsisches Sizing tritt auf, wenn Sie die Größe eines Elements explizit festlegen oder beschränken, indem Sie [CSS-Box-Modell](/de/docs/Learn_web_development/Core/Styling_basics/Box_model)-Eigenschaften wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("max-width")}} und {{cssxref("min-height")}} verwenden. Zum Beispiel, wenn Sie `width: 200px` setzen, spezifizieren Sie eine extrinsische Größe.

Prozentwerte sind ebenfalls extrinsisch; sie werden relativ zum [verursachenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements berechnet. Zum Beispiel bedeutet `width: 50%`, dass die Breite des Elements `50%` der Breite seines verursachenden Blocks beträgt, unabhängig vom Inhalt innerhalb des Elements.

Block-Level-Elemente werden extrinsisch dimensioniert. Wenn keine Breite angegeben ist, beträgt die Standardbreite des Blockelements `auto`, was auf `100%` der Breite seines verursachenden Blocks aufgelöst wird.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
- [CSS-Box-Sizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS Box Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/#extrinsic) Spezifikation
