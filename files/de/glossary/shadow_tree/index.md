---
title: Shadow tree
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Ein **Shadow Tree** ist eine versteckte Menge von {{Glossary("DOM", "DOM")}}-Knoten, deren oberster {{Glossary("node/dom", "Knoten")}} eine **Shadow Root** ist. Die Shadow Root ist der oberste Knoten eines **Shadow DOM** und gehört nicht zum regulären DOM-Baum des Dokuments.

Die Shadow Root ist über einen speziellen DOM-Knoten, der als **Host** bezeichnet wird, an einen anderen Knotenzweig angehängt. Dieser Host kann Teil eines anderen Shadow Trees oder Teil des regulären DOM-Baums sein. Der Knotenzweig des Hosts einer Shadow Root wird manchmal als **Light Tree** bezeichnet.

Die versteckten DOM-Knoten eines Shadow Trees sind im Allgemeinen von außen angewendeten Änderungen nicht betroffen, und umgekehrt. Die **Shadow-Grenze**, an der das Shadow DOM endet und das reguläre DOM beginnt, kann überschritten werden, jedoch nur sehr gezielt:

- Um Scriptings von Shadow Tree-Knoten von außerhalb auszuführen, ist die Verwendung einer speziellen [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) erforderlich.
- Das Stylen eines Shadow Trees von außen kann durch [CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping) und [CSS-Shadow-Teile](/de/docs/Web/CSS/Guides/Shadow_parts) erreicht werden.

## Siehe auch

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) und [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
- {{HTMLElement("slot")}}
- [Modul für CSS-Shadow-Teile](/de/docs/Web/CSS/Guides/Shadow_parts)
- [Modul für CSS-Scoping](/de/docs/Web/CSS/Guides/Scoping)
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility_tree", "Barrierefreiheitsbaum")}}
