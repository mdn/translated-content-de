---
title: Largest Contentful Paint
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Die Leistungskennzahl **Largest Contentful Paint** (LCP) gibt die Renderzeit des größten Bild- oder Textblocks an, der innerhalb des Ansichtsfensters sichtbar ist, gemessen ab dem Zeitpunkt, an dem die Seite zu laden beginnt.

Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Element/image)-Elemente innerhalb einer SVG.
- Die Posterbilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie z.B. {{HTMLElement("p")}}.

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- Verwandte Glossarbegriffe:
  - {{Glossary("First_contentful_paint", "First contentful paint")}}
  - {{Glossary("First_paint", "First paint")}}
