---
title: Schattenbaum
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Schattenbaum** ist eine verborgene Menge von {{Glossary("DOM")}}-Knoten, deren oberster {{Glossary("node/dom", "Knoten")}} eine **Schattenwurzel** ist. Die Schattenwurzel ist der oberste Knoten eines **Schatten-DOM** und nicht Teil des regulären Dokumenten-DOM-Baums.

Die Schattenwurzel ist durch einen bestimmten DOM-Knoten, der als ihr **Host** bezeichnet wird, mit einem anderen Knotenbaum verbunden. Dieser Host kann Teil eines anderen Schattenbaums oder Teil des regulären DOM-Baums sein. Der Knotenbaum des Hosts einer Schattenwurzel wird manchmal als **Lichtbaum** bezeichnet.

Die verborgenen DOM-Knoten eines Schattenbaums sind im Allgemeinen nicht von äußeren Einflüssen außerhalb des Schattenbaums betroffen und umgekehrt. Die **Schatten-Grenze**, wo das Schatten-DOM endet und das reguläre DOM beginnt, kann durchquert werden, jedoch nur sehr gezielt:

- Um auf Knoten eines Schattenbaums von außen zuzugreifen, muss die spezielle [Shadow-DOM-API](/de/docs/Web/API/Web_components/Using_shadow_DOM) verwendet werden.
- Das Stylen eines Schattenbaums von außen kann durch [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) und [CSS-Schatten-Teile](/de/docs/Web/CSS/CSS_shadow_parts) erreicht werden.

## Siehe auch

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- {{domxref("Element.shadowRoot")}} und {{domxref("Element.attachShadow()")}}
- {{domxref("ShadowRoot")}}
- {{HTMLElement("slot")}}
- Verwandte Begriffe im Glossar:
  - {{Glossary("Accessibility tree")}}
