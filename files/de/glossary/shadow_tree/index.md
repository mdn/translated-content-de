---
title: Shadow tree
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Shadow Tree** ist eine versteckte Menge von [DOM](/de/docs/Glossary/DOM)-Knoten, deren oberster [Knoten](/de/docs/Glossary/node/dom) eine **Shadow Root** ist. Die Shadow Root ist der oberste Knoten eines **Shadow DOM** und gehört nicht zum regulären DOM-Baum des Dokuments.

Die Shadow Root ist über einen spezifischen DOM-Knoten, der als **Host** bezeichnet wird, mit einem anderen Knotenbaum verbunden. Dieser Host kann Teil eines anderen Shadow Trees oder Teil des regulären DOM-Baums sein. Der Knotenbaum des Hosts einer Shadow Root wird manchmal als **Light Tree** bezeichnet.

Die versteckten DOM-Knoten eines Shadow Trees werden im Allgemeinen nicht von etwas beeinträchtigt, das außerhalb des Shadow Trees angewendet wird, und umgekehrt. Die **Shadow Boundary**, an der das Shadow DOM endet und das reguläre DOM beginnt, kann durchquert werden, jedoch nur sehr gezielt:

- Um Knoten des Shadow Trees von außen zu skripten, ist die Verwendung einer speziellen [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) erforderlich.
- Das Stylen eines Shadow Trees von außen kann über [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) und [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts) erreicht werden.

## Siehe auch

- [Using shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) und [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
- {{HTMLElement("slot")}}
- Verwandte Glossarbegriffe:
  - [Accessibility tree](/de/docs/Glossary/Accessibility_tree)
