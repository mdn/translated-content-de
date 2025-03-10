---
title: Shadow-Baum
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: 11618515e0d69282f5c711c8d00d71db6967c383
---

{{GlossarySidebar}}

Ein **Shadow-Baum** ist eine versteckte Menge von {{Glossary("DOM", "DOM")}}-Knoten, deren oberster {{Glossary("node/dom", "Knoten")}} eine **Shadow-Root** ist. Die Shadow-Root ist der oberste Knoten eines **Shadow-DOM** und gehört nicht zum regulären DOM-Baum des Dokuments.

Die Shadow-Root ist über einen bestimmten DOM-Knoten, den sogenannten **Host**, mit einem anderen Knotenbaum verbunden. Dieser Host kann Teil eines anderen Shadow-Baums oder Teil des regulären DOM-Baums sein. Der Knotenbaum des Hosts einer Shadow-Root wird manchmal als **Light-Baum** bezeichnet.

Die versteckten DOM-Knoten eines Shadow-Baums werden im Allgemeinen nicht von irgendetwas beeinflusst, das außerhalb des Shadow-Baums angewendet wird, und umgekehrt. Die **Shadow-Grenze**, an der das Shadow-DOM endet und das reguläre DOM beginnt, kann durchquert werden, jedoch nur sehr gezielt:

- Um auf die Knoten des Shadow-Baums von außen zu skripten, muss eine spezielle [Shadow-DOM-API](/de/docs/Web/API/Web_components/Using_shadow_DOM) verwendet werden.
- Das Styling eines Shadow-Baums von außen kann über [CSS-Scoping](/de/docs/Web/CSS/CSS_scoping) und [CSS-Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts) erreicht werden.

## Siehe auch

- [Verwendung von Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) und [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
- {{HTMLElement("slot")}}
- [Modul für CSS-Shadow-Teile](/de/docs/Web/CSS/CSS_shadow_parts)
- [Modul für CSS-Scoping](/de/docs/Web/CSS/CSS_scoping)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}}
