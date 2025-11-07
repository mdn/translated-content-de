---
title: Kanonische Reihenfolge
slug: Glossary/Canonical_order
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

In CSS wird der Begriff **kanonische Reihenfolge** verwendet, um die Reihenfolge zu beschreiben, in der separate Werte angegeben (oder {{Glossary("parse", "geparst")}}) werden müssen oder als Teil eines CSS-Eigenschaftswertes {{Glossary("serialization", "serialisiert")}} werden. Diese Reihenfolge wird durch die formale {{Glossary("syntax", "Syntax")}} der Eigenschaft definiert und bezieht sich normalerweise auf die Reihenfolge, in der Langformwerte als Teil eines einzigen Kurzformwertes angegeben werden sollten.

Zum Beispiel bestehen Werte der Kurzformeigenschaft {{cssxref("background")}} aus mehreren Langformeigenschaften `background-*`. Die kanonische Reihenfolge dieser Langformwerte ist definiert als:

1. {{cssxref("background-image")}}
2. {{cssxref("background-position")}}
3. {{cssxref("background-size")}}
4. {{cssxref("background-repeat")}}
5. {{cssxref("background-attachment")}}
6. {{cssxref("background-origin")}}
7. {{cssxref("background-clip")}}
8. {{cssxref("background-color")}}

Darüber hinaus definiert seine Syntax, dass, wenn ein Wert für {{cssxref("background-size")}} angegeben wird, dieser **nach** dem Wert für {{cssxref("background-position")}} angegeben sein **muss**, getrennt durch einen Schrägstrich. Andere Werte können in beliebiger Reihenfolge erscheinen.

## Siehe auch

- [CSS-Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [Was bedeutet "kanonische Reihenfolge" im Hinblick auf CSS-Eigenschaften?](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) auf Stack Overflow bietet eine nützliche weitere Diskussion.
