---
title: Kanuonische Reihenfolge
slug: Glossary/Canonical_order
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{GlossarySidebar}}

In CSS bezieht sich die **kanonische Reihenfolge** auf die Reihenfolge, in der separate Werte angegeben (oder {{Glossary("parse", "geparst")}}) werden müssen, oder wie sie als Teil eines CSS-Eigenschaftswerts {{Glossary("serialization", "serialisiert")}} werden sollen. Sie wird durch die formale {{Glossary("syntax", "Syntax")}} der Eigenschaft definiert und bezieht sich normalerweise auf die Reihenfolge, in der Langform-Werte als Teil eines einzelnen Kurzform-Werts angegeben werden sollten.

Zum Beispiel bestehen Kurzform-Eigenschaftswerte von {{cssxref("background")}} aus mehreren `background-*` Langform-Eigenschaften. Die kanonische Reihenfolge dieser Langform-Werte ist definiert als:

1. {{cssxref("background-image")}}
2. {{cssxref("background-position")}}
3. {{cssxref("background-size")}}
4. {{cssxref("background-repeat")}}
5. {{cssxref("background-attachment")}}
6. {{cssxref("background-origin")}}
7. {{cssxref("background-clip")}}
8. {{cssxref("background-color")}}

Des Weiteren definiert die Syntax, dass, wenn ein Wert für die {{cssxref("background-size")}} angegeben wird, dieser **nach** dem Wert für die {{cssxref("background-position")}} angegeben **muss**, getrennt durch einen Schrägstrich. Andere Werte können in beliebiger Reihenfolge erscheinen.

## Siehe auch

- [CSS-Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Was bedeutet "kanonische Reihenfolge" in Bezug auf CSS-Eigenschaften?](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) auf Stack Overflow bietet nützliche weitere Diskussionen.
