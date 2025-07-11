---
title: Kanonische Reihenfolge
slug: Glossary/Canonical_order
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In CSS bezieht sich die **kanonische Reihenfolge** auf die Reihenfolge, in der separate Werte angegeben (oder {{Glossary("parse", "geparst")}}) werden müssen oder als Teil eines CSS-Eigenschaftswerts {{Glossary("serialization", "serialisiert")}} werden sollen. Sie wird durch die formale {{Glossary("syntax", "Syntax")}} der Eigenschaft definiert und bezieht sich normalerweise auf die Reihenfolge, in der Langform-Werte als Teil eines einzelnen Kurzformwertes angegeben werden sollten.

Zum Beispiel bestehen die Kurzform-Eigenschaftswerte von {{cssxref("background")}} aus mehreren `background-*` Langform-Eigenschaften. Die kanonische Reihenfolge dieser Langform-Werte ist wie folgt definiert:

1. {{cssxref("background-image")}}
2. {{cssxref("background-position")}}
3. {{cssxref("background-size")}}
4. {{cssxref("background-repeat")}}
5. {{cssxref("background-attachment")}}
6. {{cssxref("background-origin")}}
7. {{cssxref("background-clip")}}
8. {{cssxref("background-color")}}

Darüber hinaus definiert seine Syntax, dass, wenn ein Wert für {{cssxref("background-size")}} angegeben wird, dieser **nach** dem Wert für {{cssxref("background-position")}} angegeben werden **muss**, getrennt durch einen Schrägstrich. Andere Werte können in beliebiger Reihenfolge erscheinen.

## Siehe auch

- [CSS-Wertdefinitionen-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Was bedeutet "kanonische Reihenfolge" in Bezug auf CSS-Eigenschaften?](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) auf Stack Overflow bietet eine nützliche Weiterdiskussion.
