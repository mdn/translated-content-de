---
title: Extrinsische Größe
slug: Glossary/Extrinsic_size
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In CSS wird die **extrinsische Größe** eines Elements durch seinen Layout-Kontext bestimmt, also durch von außen auf das Element auferlegte Einschränkungen, ohne Berücksichtigung seines Inhalts. Dies ist das Gegenteil der {{Glossary("intrinsic_size", "intrinsischen Größe")}} eines Elements, die auf dessen Inhalt basiert.

Extrinsische Größenbestimmung erfolgt, wenn Sie die Größe eines Elements explizit festlegen oder einschränken, indem Sie Eigenschaften des [CSS-Box-Modells](/de/docs/Learn_web_development/Core/Styling_basics/Box_model) wie {{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("block-size")}}, {{cssxref("inline-size")}}, {{cssxref("max-width")}} und {{cssxref("min-height")}} verwenden. Wenn Sie beispielsweise `width: 200px` setzen, spezifizieren Sie eine extrinsische Größe.

Prozentwerte sind ebenfalls extrinsisch; sie werden relativ zum [Enthaltenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements berechnet. Zum Beispiel bedeutet `width: 50%`, dass die Breite des Elements `50%` der Breite seines enthaltenden Blocks beträgt, unabhängig vom Inhalt des Elements.

Block-Level-Elemente werden extrinsisch dimensioniert. Wenn keine Breite angegeben ist, beträgt die Standardbreite des Block-Elements `auto`, was einer Breite von `100%` des enthaltenden Blocks entspricht.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Intrinsic_size", "Intrinsische Größe")}}
- [CSS-Box-Sizing](/de/docs/Web/CSS/Guides/Box_sizing) Modul
- [CSS Box Sizing Module Level 3](https://drafts.csswg.org/css-sizing-3/#extrinsic) Spezifikation
