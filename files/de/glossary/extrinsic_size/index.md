---
title: Extrinsische Größe
slug: Glossary/Extrinsic_size
l10n:
  sourceCommit: 6afda999d054c2ba12d13d129b13eb35952b4fbe
---

In CSS wird die **extrinsische Größe** eines Elements durch seinen Layoutkontext bestimmt, das heißt, durch von außen auferlegte Einschränkungen, ohne Rücksicht auf dessen Inhalte. Dies steht im Gegensatz zur {{Glossary("intrinsic_size", "intrinsischen Größe")}} eines Elements, die auf dessen Inhalt basiert.

Extrinsisches Sizing tritt auf, wenn Sie die Größe eines Elements explizit festlegen oder einschränken, indem Sie Eigenschaften des [CSS Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("max-width")}} und {{cssxref("min-height")}} verwenden. Wenn Sie beispielsweise `width: 200px` festlegen, spezifizieren Sie eine extrinsische Größe.

Prozentwerte sind ebenfalls extrinsisch; sie werden relativ zum [enthältenden Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements berechnet. Zum Beispiel bedeutet `width: 50%`, dass die Breite des Elements `50%` der Breite seines enthältenden Blocks beträgt, unabhängig vom Inhalt innerhalb des Elements.

Block-Elemente werden extrinsisch dimensioniert. Wenn keine Breite angegeben ist, ist die Standardbreite des Block-Elements `auto`, was eine Breite von `100%` des enthältenden Blocks ergibt.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
- [CSS-Boxsizing](/de/docs/Web/CSS/CSS_box_sizing) Modul
- [CSS Box Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/#extrinsic) Spezifikation
