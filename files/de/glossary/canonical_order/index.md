---
title: Kanonische Reihenfolge
slug: Glossary/Canonical_order
l10n:
  sourceCommit: 7a551aaa034fbada3eb99e6fc924a0313b78307f
---

{{GlossarySidebar}}

In CSS bezieht sich die **kanonische Reihenfolge** auf die Reihenfolge, in der separate Werte spezifiziert (oder [geparst](/de/docs/Glossary/parse)) werden müssen oder als Teil eines CSS-Property-Werts [serialisiert](/de/docs/Glossary/serialization) werden. Sie wird durch die formale [Syntax](/de/docs/Glossary/syntax) der Eigenschaft definiert und bezieht sich normalerweise auf die Reihenfolge, in der Langform-Werte als Teil eines einzigen Kurzform-Werts spezifiziert werden sollten.

Zum Beispiel bestehen die Werte der Kurzform-Eigenschaft {{cssxref("background")}} aus mehreren `background-*` Langform-Eigenschaften. Die kanonische Reihenfolge dieser Langform-Werte ist definiert als

1. {{cssxref("background-image")}}
2. {{cssxref("background-position")}}
3. {{cssxref("background-size")}}
4. {{cssxref("background-repeat")}}
5. {{cssxref("background-attachment")}}
6. {{cssxref("background-origin")}}
7. {{cssxref("background-clip")}}
8. {{cssxref("background-color")}}

Darüber hinaus definiert die Syntax, dass, wenn ein Wert für {{cssxref("background-size")}} angegeben wird, dieser **nach** dem Wert für {{cssxref("background-position")}} angegeben werden **muss**, getrennt durch einen Schrägstrich. Andere Werte können in beliebiger Reihenfolge erscheinen.

## Siehe auch

- [CSS-Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Was bedeutet "kanonische Reihenfolge" im Hinblick auf CSS-Eigenschaften?](https://stackoverflow.com/questions/28963536/what-does-canonical-order-mean-with-respect-to-css-properties) auf Stack Overflow bietet eine nützliche weiterführende Diskussion.
