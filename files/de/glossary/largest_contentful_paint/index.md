---
title: Largest Contentful Paint (LCP)
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{GlossarySidebar}}

Die **Largest Contentful Paint** (LCP) Leistungsmetrik gibt die Renderzeit des größten Bildes oder Textblocks an, der im Ansichtsfenster sichtbar ist und ab dem Zeitpunkt erfasst wird, an dem die Seite zu laden beginnt.

Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}}-Elemente.
- [`<image>`](/de/docs/Web/SVG/Reference/Element/image) Elemente innerhalb eines SVG.
- Die Posterbilder von {{HTMLElement("video")}}-Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie zum Beispiel {{HTMLElement("p")}}.

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- Verwandte Glossarbegriffe:
  - {{Glossary("First_Contentful_Paint", "First Contentful Paint")}}
  - {{Glossary("First_Paint", "First Paint")}}
