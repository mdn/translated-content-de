---
title: Shadow-Baum
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **Shadow-Baum** ist eine verborgene Menge von {{Glossary("DOM", "DOM")}}-Knoten, deren oberster {{Glossary("node/dom", "Knoten")}} eine **Shadow-Root** ist. Die Shadow-Root ist der oberste Knoten eines **Shadow DOM** und nicht Teil des normalen DOM-Baums des Dokuments.

Die Shadow-Root ist über einen speziellen DOM-Knoten mit einem anderen Baum von Knoten verbunden, der als ihr **Host** bezeichnet wird. Dieser Host kann Teil eines anderen Shadow-Baums oder Teil des normalen DOM-Baums sein. Der Knotenbaum eines Hosts einer Shadow-Root wird manchmal als **Light-Baum** bezeichnet.

Die verborgenen DOM-Knoten eines Shadow-Baums werden im Allgemeinen nicht von etwas beeinflusst, das außerhalb des Shadow-Baums angewendet wird, und umgekehrt. Die **Shadow-Grenze**, an der das Shadow DOM endet und das normale DOM beginnt, kann überschritten werden, jedoch nur sehr gezielt:

- Das Skripten von Shadow-Baum-Knoten von außerhalb erfordert die Verwendung einer speziellen [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM), um darauf zuzugreifen.
- Das Stylen eines Shadow-Baums von außen kann durch [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) und [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts) erreicht werden.

## Siehe auch

- [Verwendung von Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) und [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
- {{HTMLElement("slot")}}
- [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
- [CSS Scoping](/de/docs/Web/CSS/CSS_scoping)-Modul
- Verwandte Glossarbegriffe:
  - {{Glossary("Accessibility_tree", "Accessibility-Tree")}}
