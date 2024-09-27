---
title: Schattenbaum
slug: Glossary/Shadow_tree
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein **Schattenbaum** ist eine versteckte Menge von [DOM](/de/docs/Glossary/DOM)-Knoten, dessen oberster [Knoten](/de/docs/Glossary/node/dom) eine **shadow root** ist. Die shadow root ist der oberste Knoten eines **shadow DOM** und nicht Teil des regulären DOM-Baums des Dokuments.

Die shadow root ist an einen anderen Knotenbaum durch einen spezifischen DOM-Knoten angeschlossen, der als **Host** bezeichnet wird. Dieser Host kann Teil eines anderen Schattenbaums oder Teil des regulären DOM-Baums sein. Der Knotenbaum des Hosts einer shadow root wird manchmal als **Lichtbaum** bezeichnet.

Die versteckten DOM-Knoten eines Schattenbaums werden im Allgemeinen nicht von außen angewendeten Änderungen beeinflusst und umgekehrt. Die **Schatten-Grenze**, wo das shadow DOM endet und das reguläre DOM beginnt, kann überquert werden, jedoch nur sehr gezielt:

- Das Skripten von Knoten des Schattenbaums von außen erfordert den Einsatz einer speziellen [Shadow DOM API](/de/docs/Web/API/Web_components/Using_shadow_DOM) für den Zugriff.
- Das Stylen eines Schattenbaums von außen kann durch [CSS Scoping](/de/docs/Web/CSS/CSS_scoping) und [CSS shadow parts](/de/docs/Web/CSS/CSS_shadow_parts) erreicht werden.

## Siehe auch

- [Verwendung von shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM)
- [`Element.shadowRoot`](/de/docs/Web/API/Element/shadowRoot) und [`Element.attachShadow()`](/de/docs/Web/API/Element/attachShadow)
- [`ShadowRoot`](/de/docs/Web/API/ShadowRoot)
- {{HTMLElement("slot")}}
- Verwandte Glossarbegriffe:
  - [Barrierefreiheitsbaum](/de/docs/Glossary/Accessibility_tree)
